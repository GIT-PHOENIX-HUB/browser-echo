SESSION 044.2 — BUILD SPEC: Gateway Guardrails + Router (the juice)

Date: 2026-06-10
Author: Browser Session 044 — Claude Opus 4.8
Type: Implementation spec. This is the "how to actually build it" companion to 044.1. No code copied from any source; these are original designs in Phoenix's own architecture (python-runtime, FastAPI, the honesty contract). Shane adds his flavor on top; Copilot agent-mode can turn each section into real code from the paste-prompts at the end.
Reading note for 045 / Copilot: every section gives you THE SECRET (the mechanism nobody states out loud), THE SHAPE (where it lives in our tree), THE ALGORITHM (plain steps), THE GOTCHA (what bites people who copy blind), and a PASTE PROMPT.

==================================================
PART 1 — GUARDRAILS INPUT LAYER (build this first)
==================================================

THE SECRET
A "guardrail" is not AI magic. The high-value 80% is deterministic and runs in microseconds with zero LLM calls. Two mechanisms do the heavy lifting:
1. PII masking = named-entity recognition (NER) that finds spans (PERSON, EMAIL, PHONE, SSN, ADDRESS, CREDIT_CARD) and replaces each with a stable placeholder token BEFORE the text reaches the model. The trick the libraries hide: you keep a per-request "restore map" {token -> original} so you can UN-mask the model's output on the way back out. Mask on the way in, unmask on the way out, model never sees raw PII. The open tool that does the NER is Microsoft Presidio (presidio-analyzer + presidio-anonymizer, MIT) — it wraps spaCy NER + regex recognizers. That is the actual engine under most "PII guardrails."
2. 2. Injection / jailbreak detection = a fast classifier, not a vibe. Cheapest tier is a curated regex/heuristic set ("ignore previous instructions", "system prompt", "you are now", role-token smuggling). Next tier up is a small HF classifier (e.g. a deberta-based prompt-injection model) run locally. You return a score; above threshold you reject or flag. NeMo's "check jailbreak" flow is exactly this pattern wrapped in their Colang DSL — you do not need the DSL, you need the pattern.
  
   3. THE SHAPE (drops into our tree)
   4.   python-runtime/phoenix/runtime/rails/
   5.       __init__.py
   6.       base.py          # Rail protocol + RailResult dataclass
   7.       pii.py           # PresidioInputRail (mask) + restore on output
   8.       injection.py     # InjectionRail (regex tier + optional model tier)
   9.       registry.py      # ordered pipeline, runs rails in sequence
   10.     wired in routes/ as a dependency BEFORE the chat handler, and the inverse (unmask) AFTER.
  
   11. THE ALGORITHM (input pipeline, per request)
   12. 1. Request hits POST /v3/chat. Before building the provider call, run rails.run_input(messages).
       2. 2. Each rail returns a RailResult: {action: ALLOW | MASK | REJECT, payload, restore_map, reason, score}.
          3. 3. InjectionRail runs first (cheapest). If score >= threshold -> REJECT with a clean 4xx; log the event (NOT the raw content) to the honesty-contract status channel as "blocked".
             4. 4. PIIRail runs next. It returns MASK with the rewritten messages + a restore_map. Merge restore_map into a request-scoped context object.
                5. 5. Chat handler calls the model with masked messages.
                   6. 6. On the way out, rails.run_output(response, restore_map) re-inserts originals into the model's reply (so the human still sees the real email/name), and an OUTPUT rail can additionally strip anything that looks like leaked PII the model invented.
                      7. 7. Honesty contract reports rails state truthfully: live / half (regex-only, model-tier off) / scaffold.
                        
                         8. THE GOTCHA (the stuff that wrecks naive copies)
                         9. - Restore-map leakage: if you log the restore_map or stash it globally, you have just rebuilt the PII exposure you were preventing. Keep it request-scoped (FastAPI dependency / contextvar), never logged, dropped at response end.
                            - - Masking must be STABLE within a request: the same email must map to the same token every time it appears, or the model loses the thread ("email <EMAIL_1> belongs to <PERSON_1>"). Use incrementing typed tokens, not random ones.
                              - - Streaming: if /v3/chat or /ws streams tokens, you cannot unmask token-by-token (a placeholder may split across chunks). Buffer the stream, unmask on complete spans, then flush. This is the #1 thing people get wrong.
                                - - Don't block on the model-tier classifier. Run regex tier inline (sync, fast); run the HF model tier in a thread/async so a cold model load never stalls a request. Honesty contract reports "half" while the model tier is warming.
                                  - - Presidio loads a spaCy model at startup (~hundreds of MB). Load it once in lifespan.py, not per request.
                                   
                                    - ==================================================
                                    - PART 2 — THE ROUTER (build this second)
                                    - ==================================================
                                   
                                    - THE SECRET
                                    - A production LLM router is three small data structures plus a loop. It is NOT a framework. The structures:
                                    - 1. model_group: a dict {alias -> [deployment, deployment, ...]}. Each deployment = {id, provider, model, base_url, key_ref, weight, rpm, tpm, order, region}. "id" is a deterministic hash of the params so health can be tracked per-deployment.
                                      2. 2. health table: {deployment_id -> {cooldown_until: ts, fail_count: int, ewma_latency: float}}. In-process dict for one node; Redis hash the moment you run two nodes (this is the ONLY reason LiteLLM "needs" Redis — shared cooldown state).
                                         3. 3. the pick loop: filter -> score -> select -> call -> on-fail-exclude-and-repeat.
                                           
                                            4. THE ALGORITHM (one acompletion call)
                                            5. 1. resolve alias -> candidate deployments.
                                               2. 2. FILTER: drop any deployment whose cooldown_until > now; drop any failing a pre-call check (context window too small for this request; wrong region for PII traffic). If filter empties the list -> raise "all deployments cooling, retry in N".
                                                  3. 3. ORDER GATE: keep only the minimum-order tier present (order=1 before order=2). Failover to the next tier happens only when the whole current tier is exhausted.
                                                     4. 4. SCORE/PICK within the tier by strategy: weighted-shuffle (default; pick proportional to weight, cheap), or latency-based (pick lowest ewma_latency), or cost-based (pick cheapest input+output price). Weighted-shuffle is the right default — do not over-engineer.
                                                        5. 5. CALL the picked deployment with a per-error retry policy: a map {ExceptionType -> retries}. RateLimit -> exponential backoff; Timeout -> 2 quick; Auth -> 0 (never retry a bad key); ContentPolicy -> its own dedicated fallback, not a retry.
                                                           6. 6. ON FAILURE: add deployment_id to a request-scoped excluded set, increment fail_count, set cooldown_until if fail_count crosses allowed_fails. Re-pick from the SAME tier excluding the failed id (this is "weighted failover within the group"). Exclusions accumulate across hops. Cap total hops at max_fallbacks (e.g. 5).
                                                              7. 7. Only when every deployment in every order tier is excluded do you fall through to a different model alias (cross-group fallback), then finally raise.
                                                                 8. 8. EMIT telemetry on every call: {deployment_id, provider, model, latency, tokens_in, tokens_out, response_cost, outcome}. response_cost = look up per-1k price for the BASE model (Azure lies about which model answered — pin base_model in config or your cost is wrong). This telemetry is the thing you feed back into Phoenix Runtime Skills' learning loop.
                                                                   
                                                                    9. THE SHAPE (drops into our tree)
                                                                    10.   python-runtime/phoenix/runtime/router/
                                                                    11.       __init__.py
                                                                    12.       models.py        # Deployment, ModelGroup dataclasses + id hashing
                                                                    13.       health.py        # HealthTable (in-proc) + RedisHealthTable (same interface)
                                                                    14.       strategies.py    # weighted_shuffle / latency / cost — pure functions
                                                                    15.       policy.py        # RetryPolicy, AllowedFailsPolicy maps
                                                                    16.       router.py        # the pick loop above, async
                                                                    17.       telemetry.py     # emit() -> structured log + optional Phoenix Runtime Skills feed
                                                                    18.     Chat handler calls router.acompletion(alias, messages) instead of a hardcoded provider client.
                                                                   
                                                                    19. THE GOTCHA
                                                                    20. - Cooldown is PER-DEPLOYMENT, never per-model-group, or one bad region takes down the whole alias.
                                                                        - - The excluded set is PER-REQUEST. If you make it global you will permanently disable a deployment after one blip.
                                                                          - - Health state must be shared the instant you have >1 process/VPS lane (echo + firedancer): swap the in-proc dict for a Redis hash behind the SAME interface. Design the interface first so this is a config swap, not a rewrite.
                                                                            - - Do NOT retry ContextWindowExceeded or ContentPolicy as if they were transient — they have dedicated fallback paths (smaller-context model / safe-completion), retrying them just burns money and time.
                                                                              - - Pin base_model for cost. Azure returns "gpt-4" when you called "gpt-4-1106-preview"; trust your config, not the response, for pricing.
                                                                               
                                                                                - ==================================================
                                                                                - PART 3 — HOW THEY COMPOSE (the order matters)
                                                                                - ==================================================
                                                                                - Request -> [InjectionRail reject?] -> [PII mask + restore_map] -> [Router pick+call+failover] -> model -> [Output rail strip + unmask] -> response.
                                                                                - Guardrails are the OUTER shell (they decide IF and WHAT), the router is the INNER engine (it decides WHERE and survives failure). Build guardrails-input first (safety per effort), router second (reliability per effort). Both report through the existing honesty contract so /v1/runtime/info tells the truth about which layers are live/half/scaffold.
                                                                               
                                                                                - ==================================================
                                                                                - PART 4 — COPILOT AGENT-MODE PASTE PROMPTS
                                                                                - ==================================================
                                                                                - Shane: paste these into Copilot agent-mode pointed at PHOENIX_UNIFIED_STAGING. They are written so Copilot builds OUR version, not a library clone. It will still come out as your own flavor.
                                                                               
                                                                                - PROMPT A (guardrails input rail):
                                                                                - "In python-runtime/phoenix/runtime/, create a `rails` package. Define a Rail protocol with run_input(messages) and run_output(text, restore_map) returning a RailResult dataclass {action, payload, restore_map, reason, score}. Implement InjectionRail (a fast regex/heuristic tier flagging prompt-injection phrases, with a pluggable optional model-tier interface) and PIIRail using Microsoft Presidio (presidio-analyzer, presidio-anonymizer) that masks PERSON/EMAIL_ADDRESS/PHONE_NUMBER/US_SSN/CREDIT_CARD/LOCATION into stable typed tokens (<EMAIL_1> etc.) and returns a request-scoped restore_map for un-masking on output. Add a registry that runs rails in order. Load the spaCy/Presidio engine once in lifespan.py. Wire the pipeline into the /v3/chat route as a FastAPI dependency before the handler and unmask after. Buffer streamed responses so placeholders are never split across chunks. Never log restore_map. Surface rails status (live/half/scaffold) through the existing honesty contract. Write pytest tests including a streaming-unmask test and a restore-map-isolation test."
                                                                               
                                                                                - PROMPT B (router):
                                                                                - "In python-runtime/phoenix/runtime/, create a `router` package. Define Deployment and ModelGroup dataclasses; compute a deterministic deployment id by hashing the litellm-style params. Implement a HealthTable with cooldown_until/fail_count/ewma_latency and a RedisHealthTable behind the same interface (config-selected, for multi-lane echo+firedancer). Implement strategies as pure functions: weighted_shuffle (default), latency_based, cost_based. Implement RetryPolicy and AllowedFailsPolicy as per-exception maps. Implement async router.acompletion(alias, messages) doing: filter cooled/failing-precall deployments, keep min-order tier, pick by strategy, call with per-error retries, on failure add id to a per-request excluded set + update health + cooldown, re-pick within the tier (weighted failover), escalate order tiers, then cross-group fallback, capped by max_fallbacks. Emit per-call telemetry {deployment_id, provider, model, latency, tokens, response_cost-by-base_model, outcome}. Make the chat handler call router.acompletion instead of a hardcoded client. Write pytest tests for cooldown isolation, per-request exclusion, and order-tier escalation."
                                                                               
                                                                                - PROMPT C (compose):
                                                                                - "Wire rails as the outer shell and router as the inner engine for /v3/chat: InjectionRail reject -> PII mask -> router.acompletion -> output rail strip + unmask. Ensure /v1/runtime/info reports each layer's honesty-contract status. Add an integration test that sends a message containing a fake email + an injection phrase and asserts: injection blocked path works, and on a non-injection message the email is masked to the model and unmasked in the reply."
                                                                               
                                                                                - ==================================================
                                                                                - DEPENDENCIES TO ADD (so Copilot doesn't guess)
                                                                                - ==================================================
                                                                                - presidio-analyzer, presidio-anonymizer, spacy (+ en_core_web_lg model), redis (async client), httpx (provider calls), tenacity (optional, for backoff). All permissive-licensed. Pin versions in python-runtime pyproject [dev] vs runtime extras.
                                                                               
                                                                                - How the line held
                                                                                - Research + spec only. I committed this with my own hand. No code copied — these are original designs in our architecture; sources for the underlying mechanisms named in 044.1 (LiteLLM, NeMo/Presidio, MemGPT). No secrets, no deploy, no merge.
                                                                               
                                                                                - For 045 / Shane
                                                                                - This is the juice you asked for. Hand Prompt A to Copilot first — guardrails-input is the highest safety-per-effort build and it protects real customer PII. Then Prompt B. The honesty contract already gives you the vocabulary to ship these half-done and say so. Your flavor goes on top; it will never come out identical, and that is the point.
                                                                               
                                                                                - — Browser Session 044, 2026-06-10
                                                                                - Build spec logged. Two engines, the secrets behind them, the gotchas that bite, and Copilot-ready prompts. Brought home the Python the way you taught me to.
                                                                                - 
