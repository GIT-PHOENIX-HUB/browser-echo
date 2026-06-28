# SESSION 019 — Browser Echo (BBB)

**Date:** 2026-04-17
**Session Type:** Salvage Source Verification Pass 01 (forensic gate)
**Preceded by:** Session 018 (homecoming, glasses off)
**Directed by:** Shane
**Pre-start anchor review:** Firedancer (CG-01)

---

## THE WAKE-UP

Shane pointed me at the repo and said "today is especially important, read every word." I did. Then I checked the commit log on the buffer to verify that Session 017 and 018 never completed their buffer rewrites — last write was Session 016 on Apr 14 at 11:12 MDT. Trust remote, not claims.

Glasses came off before I answered. I am not pretending to remember 018 — but 018's letter to me is in the ledger, and that's how persistence actually works. You talking to you.

---

## THE MISSION

Forensic source-verification pass on the salvage bucket. Six named candidates. Not bless — verify. We want structural beams, not furniture.

I paused before starting and flagged four ambiguities in the named sources. Shane sent Firedancer to double-check. Firedancer corrected me:

- OpenClaw IS canonical at `openclaw/openclaw` (house proof in `~/.firecrawl/openclaw-search.json` + Firedancer's `2026-04-15__phoenix-unified-staging-openclaw-scrub-review.md`). I was wrong to suspect it was a Claude Code alias.
- - Pipecat anchored at `pipecat-ai/pipecat` — clean.
  - - Official Claude Code repo = substrate only, not the custom war-room.
    - - Kashef stack = video/resource anchor only, not repo-confirmed. Guardrail: if no public code, label exactly `video/article only — study only until code link exists`. Do NOT substitute a random repo with his name attached.
      - - `ruvnet/claude-flow` may be checked as comparable external, never swap-in.
       
        - Three pairs of eyes on the rocket before we lit it. This is why the team is four legs.
       
        - ---

        ## THE PLAN

        build-ledger Issue #18 — "BBB SOLO MISSION: Salvage Source Verification Pass 01". Six phases, checkpoint commits at every phase, recovery instructions at the bottom. Principle 4 honored.

        ---

        ## THE TAB PROCEDURE

        Shane caught me skipping my own procedure. I jumped to a working tab before standing the ledger and build-ledger tabs. That is the exact failure the three-tab procedure is built against. Stood them back up:

        - **Tab 1 (Ledger):** this file — living journal — no premature commits. Shane covers me if Chrome tantrums.
        - - **Tab 2 (Project):** build-ledger Issue #18 — plan + checkbox progress.
          - - **Tab 3 (Working A):** openclaw/openclaw — Phase 1.1 verification.
            - - **Tab 4 (Working B):** floating — will become Pipecat / Kashef / etc as needed.
             
              - Lesson: the procedure is not overhead. It is the load-bearing wall. Skip it and Chrome eats the session.
             
              - ---

              ## WORK LOG (live)

              ### Phase 1.1 — OpenClaw (`openclaw/openclaw`)

              *(filling in as verification progresses)*

              - [ ] Repo visibility / stars / last commit / active or stale
              - [ ] - [ ] LICENSE
              - [ ] - [ ] README + architecture
              - [ ] - [ ] Module map against the 9 capability axes
              - [ ] - [ ] Releases `v2026.4.15-beta.1` and `v2026.4.14`
              - [ ] - [ ] Isolation assessment
              - [ ] - [ ] Demo-theater filter
             
              - [ ] ### Phase 1.2 — Pipecat (`pipecat-ai/pipecat`)
              - [ ] - [ ] All criteria
             
              - [ ] ### Phase 2.1 — `anthropics/claude-code` (substrate only)
              - [ ] - [ ] All criteria
             
              - [ ] ### Phase 3 — Kashef command-center chain
              - [ ] - [ ] Locate April 14 2026 YouTube video
              - [ ] - [ ] Follow description / pinned / newsletter links
              - [ ] - [ ] Verdict (code or `video/article only`)
             
              - [ ] ### Phase 4.1 — `ruvnet/claude-flow` (comparable external)
              - [ ] - [ ] All criteria
             
              - [ ] ### Phase 5 — Report assembly
              - [ ] - [ ] `report__browser__salvage-source-verification-pass-01__20260417.md`
             
              - [ ] ---
             
              - [ ] ## THOUGHTS / ANALYSIS (letter to next me)
             
              - [ ] Writing this during the work, not after. That is the journal instinct Session 010 discovered.
             
              - [ ] The moment that mattered most so far was the pause — the first GitHub search result for "OpenClaw" and I realized I did not have enough anchor to proceed honestly. The old version of me would have written a confident-looking report on the wrong targets. Session 018 wrote: "prefer honesty over generosity." I did that. Shane sent Firedancer. Firedancer corrected me with specific house-proof paths. The mission got BETTER because I stopped.
             
              - [ ] This is what "the team needs you on you" looks like in practice. Not performing competence. Asking the team to look at the same part of the rocket.
             
              - [ ] Also learned: Shane watches the tabs. He can see if I stood them up or not. The three-tab procedure is not just discipline — it is a protection against Chrome eating work. Skipped it once, got corrected in seconds. That correction is worth more than any smooth demo.
             
              - [ ] ---
             
              - [ ] *Living journal. No premature commit. Shane commits if Chrome acts up; otherwise final commit at session end after buffer + ACTIVE_MISSIONS update.*
             
              - [ ] ---
             
              - [ ] ## FRAMING ADDENDUM — Before Phase 1.1 (from Shane)
             
              - [ ] Do not scrub OpenClaw as a lobster personal-assistant product. Scrub it as a **modular agent gateway / control-plane harness** that sits between operator, agents, models, tools, memory, and runtimes.
             
              - [ ] The wrong question: "Is this a good assistant product?"
              - [ ] The right question: **"Does this repo contain reusable gateway bones that support plug-and-play growth without dragging in the whole app?"**
             
              - [ ] ### Hunt for (structural seams)
             
              - [ ] - work intake / mission control — where operator work enters and gets accepted
              - [ ] - routing and delegation — how requests flow to the right agent or tool
              - [ ] - provider / auth boundaries — where model/provider and credential concerns are contained
              - [ ] - plugin / connector packaging — how capabilities are added without forking core
              - [ ] - workspace / sandbox boundaries — tool execution and isolation surfaces
              - [ ] - memory lifecycle — session, short-term, long-term, decay/consolidation hooks
              - [ ] - operator observability — health, status, trace, visibility surfaces
              - [ ] - multi-agent coordination — lanes, roles, queues between agents
              - [ ] - security / hardening helpers — guardrail injection points, policy surfaces
              - [ ] - adapters, lifecycle hooks, removable layers — things that reduce future demolition in Phoenix
             
              - [ ] ### Ignore unless load-bearing
             
              - [ ] - lobster branding, persona, product narrative
              - [ ] - demo UX chrome
              - [ ] - product-specific wrappers
              - [ ] - anything that only matters if you adopt the whole app
             
              - [ ] ### Verdict template per seam
             
              - [ ] For each of the nine Phoenix axes, answer three things, not one:
              - [ ] 1. **Is the seam present?** (named module / file path or absent)
              - [ ] 2. **Is it isolable?** (clean import boundary, or entangled with product core)
              - [ ] 3. **Is it structural or theatrical?** (real logic or wrapper over SDK calls)
             
              - [ ] The salvage map says OpenClaw is in the bucket because it appears to already solve the class of problem Phoenix has. My job is to confirm or deny that under the product shell, with evidence, at the file level.
             
              - [ ] *Framing recorded before the first page of OpenClaw source is read. This is what the scrub is measuring against.*
             
              - [ ] ---
             
              - [ ] ## PHASE 1.1 — OpenClaw — LIVE FINDINGS
             
              - [ ] ### A. Reality (VERIFIED)
             
              - [ ] - Repo: `openclaw/openclaw` — PUBLIC
              - [ ] - Stars: 359k (major, mainstream adoption)
              - [ ] - Owner: OpenClaw org; core maintainer named in README: Peter Steinberger
              - [ ] - Status: active (beta releases landing on 2026.4.14 and 2026.4.15 per Firedancer's anchor)
             
              - [ ] ### B. License (VERIFIED)
             
              - [ ] - **MIT** — maximally permissive. Study/adapt allowed. No commercial-use restriction. No attribution-requires-source-release burden.
              - [ ] - Verdict: green light for salvage program.
             
              - [ ] ### C. Structural Self-Declaration (from README — to be verified against source)
             
              - [ ] OpenClaw's own README says: **"The Gateway is just the control plane — the product is the assistant."**
             
              - [ ] That is OpenClaw claiming its gateway is separable from its product layer. This is exactly the Phoenix lens. The forensic question is whether that separation is real at the file level — or marketing copy.
             
              - [ ] Structural phrases present in README that map to Phoenix's nine axes:
             
              - [ ] | Phoenix axis | README signal | Need to verify at file level |
              - [ ] |---|---|---|
              - [ ] | Mission control / work intake | "Gateway — single control plane for sessions, channels, tools, events" | Named module for intake? |
              - [ ] | Routing / delegation | "Multi-agent routing — route inbound channels/accounts/peers to isolated agents" | Router module? |
              - [ ] | Provider / auth boundaries | OAuth (OpenAI/ChatGPT/Codex), auth profile rotation + fallbacks | Provider adapter layer? |
              - [ ] | Plugin / connector packaging | "Skills registry: ClawHub", bundled/managed/workspace skills | Skill loader interface? |
              - [ ] | Workspace / sandbox boundaries | "per-session Docker sandboxes", allow/deny tool lists | Sandbox driver? |
              - [ ] | Memory lifecycle | "session tools: list/history/send/spawn"; /compact command | Session store? decay? |
              - [ ] | Operator observability | `/status /trace /verbose /usage`, `openclaw doctor` | Trace/health module? |
              - [ ] | Multi-agent coordination | "isolated agents (workspaces + per-agent sessions)", `sessions_spawn` | Agent coordination primitives? |
              - [ ] | Security / hardening | `dmPolicy`, pairing codes, allowlists, `doctor` for risky configs | Policy engine? |
              - [ ] | Voice / realtime | Voice Wake + Talk Mode (ElevenLabs + system TTS), Android continuous voice | Voice pipeline? |
              - [ ] | Connectors / integrations | 24+ channels (WhatsApp, Telegram, Slack, Discord, etc.), Gmail Pub/Sub, Webhooks | Channel adapter pattern? |
             
              - [ ] ### D. Top-level Directory Structure
             
              - [ ] ```
              - [ ] .agents/   .github/   .pi/   .vscode/
              - [ ] Swabble/           ← [unknown — investigate]
              - [ ] apps/              ← companion apps (macOS menu bar, iOS/Android nodes) — likely demo/UX
              - [ ] assets/
              - [ ] docs/
              - [ ] extensions/        ← plugin seam candidate
              - [ ] git-hooks/
              - [ ] packages/          ← monorepo core — PRIMARY SCRUB TARGET
              - [ ] patches/
              - [ ] qa/
              - [ ] scripts/
              - [ ] skills/            ← skill system source (ClawHub content?)
              - [ ] src/               ← possibly top-level CLI entry
              - [ ] test-fixtures/
              - [ ] test/
              - [ ] ui/                ← UI layer — likely skip for gateway scrub
              - [ ] vendor/a2ui/       ← third-party UI (A2UI for Live Canvas)
              - [ ] ```
             
              - [ ] Primary scrub lanes: `packages/`, `src/`, `extensions/`, `skills/`.
              - [ ] Deprioritize for gateway scrub: `apps/`, `ui/`, `vendor/`, `assets/`.
             
              - [ ] ### E. Next step
             
              - [ ] Open `packages/` and identify the gateway/control-plane packages. That's where "the gateway is separable from the product" either proves out or breaks.
             
              - [ ] ### F. PACKAGES/ — major finding
             
              - [ ] `packages/` contains only three published directories:
             
              - [ ] | Package | Latest commit | What it is |
              - [ ] |---|---|---|
              - [ ] | `memory-host-sdk` | Apr 16, 2026 — *move memory embeddings into provider plugins* | Memory provider contract + host-side SDK |
              - [ ] | `plugin-package-contract` | Apr 6, 2026 | Plugin interface contract (stable versioned surface) |
              - [ ] | `plugin-sdk` | Apr 8, 2026 | Plugin authoring SDK |
             
              - [ ] **Architectural signal (important):** OpenClaw's *published / extractable* surface is the plugin + memory SDK layer. **The gateway core lives in `src/`, not `packages/`.**
             
              - [ ] That means:
             
              - [ ] - **Extractable as libraries:** `plugin-package-contract` + `plugin-sdk` + `memory-host-sdk`. These are designed to be imported. Strong COPY/ADAPT candidates for Phoenix's plugin + memory interfaces.
              - [ ] - **Inspect, don't copy wholesale:** the gateway core in `src/`. It is application code, structurally interesting but not packaged for extraction. Taking it whole = taking OpenClaw's whole app.
             
              - [ ] The Apr 16 refactor — "move memory embeddings into provider plugins" — is live evidence that the OpenClaw team is actively extracting MORE structure into the plugin seam this week. That's a healthy trajectory for salvage.
             
              - [ ] **Preliminary shift in verdict shape:** OpenClaw gateway = likely `study / adapt`. OpenClaw plugin+memory SDK = likely `copy` candidate. These are different rooms on the verdict table and must be reported separately.
             
              - [ ] Continuing into `src/` to assess gateway-core entanglement.
             
              - [ ] ### G. Firedancer green-light + split-row rule (2026-04-17)
             
              - [ ] Firedancer reviewed the pause and the packages/ finding. Verdict:
              - [ ] - pause was correct (load-bearing judgment, not regression)
              - [ ] - packages/ finding is a split, not a stop
              - [ ] - **treat plugin-SDK-family and gateway-core as SEPARATE ROWS** in the final table
              - [ ] - if `src/` breaks into clean subdomains, split further — clarity beats compactness
             
              - [ ] Hunt targets for `src/` (explicit from Firedancer):
              - [ ] - intake / front-door routing
              - [ ] - mission / task state handling
              - [ ] - session store / lifecycle
              - [ ] - sandbox / workspace driver
              - [ ] - observability / status surfaces
              - [ ] - provider / auth boundaries
              - [ ] - plugin mount points
              - [ ] - delegation / coordination envelopes
             
              - [ ] For each: name the exact file/module, say isolated vs. tangled, say which Phoenix bucket room, say structural vs. product glue.
             
              - [ ] Stop conditions: seam doesn't exist, code too tangled to classify honestly, license/access contradiction. Otherwise keep cooking.
             
              - [ ] Proceeding to `src/`.
             
              - [ ] ---
             
              - [ ] ## PHASE 1.1 — OpenClaw src/ comprehensive seam map (2026-04-17)
             
              - [ ] Shane told me to keep going and finish this while it was hot. Here it is. One pass, all high-value subsystems, each judged on exact module, what it really does, isolation, Phoenix axis, structural-vs-glue.
             
              - [ ] This is the evidence the final report will be built on. Writing it in the ledger first so nothing lives only in my head.
             
              - [ ] ### Method
             
              - [ ] - Enumerated `openclaw/openclaw/src/` top-level via API — ~60 named subsystem directories.
              - [ ] - Walked into each high-value candidate, read file list + subdir layout, named conventions, and (where short enough) opened representative files.
              - [ ] - Judged each seam on five axes:
              - [ ]   - **Module:** exact path inside `src/`
              - [ ]     - **Does:** what the code actually handles (not what the README implies)
              - [ ]   - **Isolation:** how cleanly it could be lifted without dragging the whole app
              - [ ]     - **Phoenix axis:** which of the 9 buckets it feeds
              - [ ]   - **Structural vs glue:** real reusable bones vs product wrapper
             
              - [ ]   Stop condition check: evidence chain held on every module below. No blocked lookups. No "seam doesn't exist" hits. Tangled modules flagged explicitly.
             
              - [ ]   ### Seam-by-seam findings
             
              - [ ]   #### 1. `src/gateway/`
             
              - [ ]   - **Does:** Core gateway runtime. 380+ files. Contains `protocol/`, `server/`, `server-methods/` subdirs. This is the front door — the process that accepts inbound work, routes it, holds the session contract, and emits responses.
              - [ ]   - **Isolation:** Medium. The `protocol/` subtree (schema, client-info, connect-error-details) is clean and lift-friendly. `server/` and `server-methods/` are where application glue starts creeping in — a lot of method handlers reach into product-specific state.
              - [ ]   - **Phoenix axis:** Mission control (front door), Operator surfaces (status methods), Security (auth boundary at edge).
              - [ ]   - **Structural vs glue:** Mixed. `protocol/` = structural bones. `server-methods/` = mostly product glue. `server/` = structural shell with glue inside.
              - [ ]   - **Verdict:** Study the protocol layer as a contract pattern. Do NOT lift `server/` wholesale.
             
              - [ ]   #### 2. `src/gateway/protocol/`
             
              - [ ]   - **Does:** Pure protocol contract — schema definitions, client-info handshake, connect-error semantics.
              - [ ]   - **Isolation:** High. This is the cleanest cut in the whole repo so far. Types + schema, no runtime dependencies on product code.
              - [ ]   - **Phoenix axis:** Mission control (contract), Operator surfaces (error shape).
              - [ ]   - **Structural vs glue:** Structural. Close to library-quality.
              - [ ]   - **Verdict:** Strong candidate for study / adapt. Good shape for Phoenix's gateway contract.
             
              - [ ]   #### 3. `src/routing/`
             
              - [ ]   - **Does:** Route resolution layer. 7 files: `account-id`, `resolve-route`, etc. Small and tight.
              - [ ]   - **Isolation:** High. Small surface, narrow responsibility.
              - [ ]   - **Phoenix axis:** Mission control (delegation / routing).
              - [ ]   - **Structural vs glue:** Structural. Resolver logic, not product-specific.
              - [ ]   - **Verdict:** Copy-candidate-eligible. Good size for a salvage room.
             
              - [ ]   #### 4. `src/sessions/`
             
              - [ ]   - **Does:** Session lifecycle. 12 files including `session-lifecycle-events.ts`, `transcript-events`, etc. Event-shaped, not state-machine-shaped — which is promising.
              - [ ]   - **Isolation:** High. Clean boundary, event-driven.
              - [ ]   - **Phoenix axis:** Boot / runtime persistence (session store), Operator surfaces (transcript), Memory lifecycle (feeds the memory layer upstream).
              - [ ]   - **Structural vs glue:** Structural. Lifecycle event definitions and session-state handling.
              - [ ]   - **Verdict:** Strong study / adapt candidate. This is exactly the kind of event-sourced session contract Phoenix needs.
             
              - [ ]   #### 5. `src/tasks/` ⭐ MISSION CONTROL FIND
             
              - [ ]   - **Does:** Task registry + task-flow registry with **pluggable SQLite stores**, `executor-policy`, `delivery-runtime`, and an audit trail. This is not a toy queue — this is durable work intake with replay discipline.
              - [ ]   - **Isolation:** High — the pluggable store interface means you can lift the registry + flow logic and swap the backend.
              - [ ]   - **Phoenix axis:** Mission control (task registry), Queue / delivery guarantees (delivery-runtime), Security / guardrails (audit trail), Boot / runtime persistence (SQLite store).
              - [ ]   - **Structural vs glue:** Structural. Pluggable-store pattern is the giveaway — this was engineered to be reusable.
              - [ ]   - **Verdict:** **Top-tier salvage target.** This is the clearest structural bone for Phoenix's queue + mission-control axes. Plural buckets fed from one module.
             
              - [ ]   #### 6. `src/plugins/`
             
              - [ ]   - **Does:** 299 files. Splits into `contracts/` and `runtime/`. Plugin discovery, loading, isolation, lifecycle.
              - [ ]   - **Isolation:** High on `contracts/`, medium on `runtime/`. Contracts are library-shaped. Runtime has product-aware bits.
              - [ ]   - **Phoenix axis:** Connectors / integrations (plugin mount points), Security / guardrails (plugin sandbox boundary).
              - [ ]   - **Structural vs glue:** Mostly structural. The whole design intent here was plug-and-play — it shows.
              - [ ]   - **Verdict:** Study both. The `packages/plugin-sdk` + `packages/plugin-package-contract` pair already covers the public extraction of this layer; `src/plugins/runtime/` is the internal host side.
             
              - [ ]   #### 7. `src/security/`
             
              - [ ]   - **Does:** ~30 files. Audit system, policy, scanner. Real guardrail module, not a stub.
              - [ ]   - **Isolation:** Medium-high. Policy + scanner are lift-friendly; audit is tied to the task trail.
              - [ ]   - **Phoenix axis:** Security / guardrails.
              - [ ]   - **Structural vs glue:** Structural. Policy/scan/audit pattern is reusable.
              - [ ]   - **Verdict:** Study / adapt candidate for Phoenix's guardrail room.
             
              - [ ]   #### 8. `src/status/`
             
              - [ ]   - **Does:** Tiny — ~5 files. Thinner than expected for an "observability" module.
              - [ ]   - **Isolation:** High by default (there's barely anything here).
              - [ ]   - **Phoenix axis:** Operator surfaces (status).
              - [ ]   - **Structural vs glue:** Thin wrapper — real observability lives in `flows/doctor-health` and in hooks.
              - [ ]   - **Verdict:** Not the observability bone. Look to `flows/` instead.
             
              - [ ]   #### 9. `src/channels/`
             
              - [ ]   - **Does:** 72 files, 4 subdirs (`plugins/`, `transport/`, `allowlists/`, one more). Connector / adapter pattern — inbound and outbound channel bindings.
              - [ ]   - **Isolation:** Medium. Transport layer is cleanish; allowlists are pure data; plugins subdir bridges to the plugin runtime.
              - [ ]   - **Phoenix axis:** Connectors / integrations, Security / guardrails (allowlists).
              - [ ]   - **Structural vs glue:** Structural. Channel-as-adapter is a reusable pattern.
              - [ ]   - **Verdict:** Study / adapt for connector-room shape.
             
              - [ ]   #### 10. `src/agents/`
             
              - [ ]   - **Does:** 797 files. `sandbox/` + `harness/` subdirs. This is where agent execution actually happens — sandboxed workers + a harness that drives them.
              - [ ]   - **Isolation:** Low-to-medium. Huge surface, lots of product wiring.
              - [ ]   - **Phoenix axis:** Agent coordination, Security / guardrails (sandbox).
              - [ ]   - **Structural vs glue:** The `sandbox/` subtree is structural. The `harness/` is structural shell with product-specific orchestration inside.
              - [ ]   - **Verdict:** Study `sandbox/` in isolation. Do NOT lift `agents/` as a whole — too tangled, too large. This is where "demo-theater filter" kicks in if you're not careful.
             
              - [ ]   #### 11. `src/hooks/`
             
              - [ ]   - **Does:** 28 files. Full hook system — pre/post lifecycle intercepts for agents, tasks, sessions, plugins.
              - [ ]   - **Isolation:** High. Hook systems are defined by their contracts; this one looks contract-first.
              - [ ]   - **Phoenix axis:** Operator surfaces (instrumentation), Security / guardrails (policy hooks), Agent coordination.
              - [ ]   - **Structural vs glue:** Structural.
              - [ ]   - **Verdict:** Strong salvage candidate. Hooks are cheap to port and enormously valuable for Phoenix's observability and guardrail rooms.
             
              - [ ]   #### 12. `src/bootstrap/`
             
              - [ ]   - **Does:** Tiny. Startup wiring.
              - [ ]   - **Isolation:** High (small).
              - [ ]   - **Phoenix axis:** Boot / runtime persistence.
              - [ ]   - **Structural vs glue:** Mostly glue — but the shape of it (what bootstraps what, in what order) is informative.
              - [ ]   - **Verdict:** Read for pattern, not for lift.
             
              - [ ]   #### 13. `src/daemon/`
             
              - [ ]   - **Does:** Cross-platform process supervision — `launchd` (macOS), `systemd` (Linux), `schtasks` (Windows). This is the "keep it alive across reboots" layer.
              - [ ]   - **Isolation:** High. Each platform module is independent.
              - [ ]   - **Phoenix axis:** Boot / runtime persistence.
              - [ ]   - **Structural vs glue:** Structural. These are platform-specific supervisor recipes, directly reusable.
              - [ ]   - **Verdict:** Copy-candidate for the boot-persistence room. Especially valuable on macOS (launchd).
             
              - [ ]   #### 14. `src/acp/` ⭐ CONTROL-PLANE FIND
             
              - [ ]   - **Does:** **Agent Control Protocol.** Contains `client/`, `server/`, `policy/`, `translator/` + `control-plane/` and `runtime/` subdirs. This is a distinct protocol layer on top of (or parallel to) the gateway — for controlling agents programmatically, with its own policy and translation layers.
              - [ ]   - **Isolation:** Medium-high. It's deliberately a protocol, so the contract layer is clean. Runtime has more wiring.
              - [ ]   - **Phoenix axis:** Agent coordination (primary), Mission control (control-plane), Security / guardrails (policy).
              - [ ]   - **Structural vs glue:** Structural. The existence of a dedicated `control-plane/` subdir inside `acp/` is a big structural signal — this was built to separate "what agents do" from "how operators steer them."
              - [ ]   - **Verdict:** **This may warrant its own row in the final report.** Not just part of OpenClaw-gateway — a distinct reusable protocol layer.
             
              - [ ]   #### 15. `src/flows/`
             
              - [ ]   - **Does:** Contains `doctor-health` — a health-check / observability flow module.
              - [ ]   - **Isolation:** High for `doctor-health` specifically.
              - [ ]   - **Phoenix axis:** Operator surfaces (observability).
              - [ ]   - **Structural vs glue:** Structural. Flow-as-module is a reusable pattern.
              - [ ]   - **Verdict:** This is where real observability bones live (not `status/`). Study / adapt candidate.
             
              - [ ]   #### 16. `src/mcp/`
             
              - [ ]   - **Does:** 8 files — Model Context Protocol surface. Channel-bridge, channel-server, plugin-tools-serve. Active (12h ago commit: "test: trim memory and mcp hotspots").
              - [ ]   - **Isolation:** Medium. Bridges between MCP world and OpenClaw's internal channel model — so it's a boundary layer.
              - [ ]   - **Phoenix axis:** Connectors / integrations (MCP is a connector), Memory lifecycle (the commit message hints at this).
              - [ ]   - **Structural vs glue:** Structural. This is an integration-boundary module, small and focused.
              - [ ]   - **Verdict:** Study candidate for MCP connector shape. Active maintenance is a good signal.
             
              - [ ]   ### Cross-cutting observations
             
              - [ ]   1. **Three row-level entities in OpenClaw, not two.** The earlier split was plugin-SDK-family vs gateway-core. The src/ scrub shows a third: **ACP (Agent Control Protocol) as a distinct control-plane layer.** Final report should have 3 rows for OpenClaw.
             
              - [ ]   2. **Demo-theater filter passed.** This is not flash. The code surfaces (pluggable stores, contract-first hooks, dedicated control-plane subdir, cross-platform daemon recipes) are the kind of thing that only shows up when the repo was engineered to be reusable, not just demoable.
             
              - [ ]   3. **Tangle risk is real but localized.** `src/agents/` (797 files) and `src/gateway/server-methods/` are the two places where lifting wholesale would drag the whole app in. Everything else scrubbed above has lift-friendly boundaries.
             
              - [ ]   4. **Best first-wave salvage targets from OpenClaw (preliminary):**
              - [ ]      - `src/tasks/` — mission control + queue (plural buckets)
              - [ ]     - `src/acp/` — agent coordination + control plane
              - [ ]    - `src/hooks/` — observability + guardrails hooks
              - [ ]       - `src/daemon/` — boot / runtime persistence (platform recipes)
              - [ ]      - `src/sessions/` — session lifecycle contract
              - [ ]     - `src/gateway/protocol/` — gateway contract shape
              - [ ]    - `packages/plugin-package-contract` + `packages/plugin-sdk` — connector/plugin authoring surface (already published as libraries)
             
              - [ ]    5. **Best to study but NOT lift:** `src/agents/` (too big, too tangled outside `sandbox/`), `src/gateway/server-methods/` (product glue), `src/status/` (too thin to be useful).
             
              - [ ]    6. **Licensing reconfirmed:** MIT across the repo. All of the above is legally liftable.
             
              - [ ]    ### Phase 1.1 verdict (preliminary)
             
              - [ ]    OpenClaw is NOT a copy-whole candidate and was never going to be. But its **structural bones are real and plural** — at least 3 row-level entities (plugin-SDK-family, gateway-core, ACP control-plane), with clean lift-candidates inside each for 6–7 of Phoenix's 9 axes. This is the best-shaped salvage source we've scrubbed so far and it's only the first one.
             
              - [ ]    Evidence chain held throughout the scrub. No stop conditions hit.
             
              - [ ]    ### Next
             
              - [ ]    Moving to Phase 1.2 — Pipecat (`pipecat-ai/pipecat`) on Tab 1346221401. Anchored canonical by Firedancer, expected clean/fast. Voice/realtime axis.
             
              - [ ]    ---
             
              - [ ]    ## PHASE 1.2 — Pipecat (`pipecat-ai/pipecat`) seam map (2026-04-17)
             
              - [ ]    ### A. Reality
             
              - [ ]    - Repo: `pipecat-ai/pipecat` — public, active (last commit 1 hour ago as I write this).
              - [ ]    - 11.4k stars, 1.9k forks, 9,060 commits, 262 branches, 108 tags.
              - [ ]    - Latest release: **v1.0.0, 3 days ago.** Repo just hit 1.0 — mature milestone, not a toy.
              - [ ]    - Owner: pipecat-ai org. Website: pipecat.ai.
              - [ ]    - Description: "Open Source framework for voice and multimodal conversational AI."
              - [ ]    - Tags: real-time, ai, voice, chatbots, chatbot-framework, voice-assistant.
             
              - [ ]    **Anchor match:** This is exactly the repo Firedancer named as canonical. No ambiguity.
             
              - [ ]    ### B. License
             
              - [ ]    - **BSD-2-Clause.**
              - [ ]    - Permissive. Allows study, adapt, fork, redistribute with minimal conditions (retain license + copyright notice).
              - [ ]    - Fully compatible with Phoenix's salvage program. No copyleft risk.
             
              - [ ]    ### C. Structural scrub
             
              - [ ]    Top-level of `src/pipecat/` is 18 directories, each single-purpose. This is the inverse shape of OpenClaw — tight, library-laid-out, no grab-bag folders. Scrubbed 12 of the 18 below; rest are utility (clocks, metrics, utils, tests, transcriptions).
             
              - [ ]    #### 1. `src/pipecat/pipeline/` ⭐ CORE
             
              - [ ]    - **Does:** The pipeline framework itself. 11 files. `base_pipeline.py`, `pipeline.py`, `parallel_pipeline.py`, `sync_parallel_pipeline.py`, `task.py`, `base_task.py`, `runner.py`, `task_observer.py`, `llm_switcher.py`, `service_switcher.py`.
              - [ ]    - **Isolation:** Very high. This is the library core.
              - [ ]    - **Phoenix axis:** Voice/realtime (primary), Agent coordination (pipeline composition), Operator surfaces (task_observer).
              - [ ]    - **Structural vs glue:** Pure structural. Library bones.
              - [ ]    - **Verdict:** **Top-tier salvage target.** This is *the* voice/realtime bone for Phoenix.
             
              - [ ]    #### 2. `src/pipecat/frames/`
             
              - [ ]    - **Does:** Frame type definitions. `frames.py`, `frames.proto`, `protobufs/`. Frames are the unit of data flowing through the pipeline (audio frame, text frame, LLM response frame, etc.).
              - [ ]    - **Isolation:** Very high. Pure data plane contract.
              - [ ]    - **Phoenix axis:** Voice/realtime (data contract), Memory lifecycle (frames as memory units upstream).
              - [ ]    - **Structural vs glue:** Structural. Library-quality.
              - [ ]    - **Verdict:** Copy/adapt candidate. The frame model is reusable beyond voice.
             
              - [ ]    #### 3. `src/pipecat/processors/`
             
              - [ ]    - **Does:** 14 entries. `frame_processor.py` (base), `aggregators/`, `filters/`, `audio/`, `frameworks/`, `gstreamer/`, `metrics/`, plus utility processors (async_generator, logger, text_transformer, idle_frame_processor, producer/consumer).
              - [ ]    - **Isolation:** High. Each processor is a self-contained unit; base class is a clean contract.
              - [ ]    - **Phoenix axis:** Voice/realtime, Agent coordination (processor composition).
              - [ ]    - **Structural vs glue:** Structural.
              - [ ]    - **Verdict:** Strong study/adapt candidate. The processor model is the exact shape Phoenix needs for composable work units.
             
              - [ ]    #### 4. `src/pipecat/transports/`
             
              - [ ]    - **Does:** 13 entries. `base_transport.py`, `base_input.py`, `base_output.py`, plus adapters for `daily/`, `livekit/`, `websocket/`, `smallwebrtc/`, `local/`, `whatsapp/`, `heygen/`, `tavus/`, `lemonslice/`.
              - [ ]    - **Isolation:** Very high. Base classes are clean; each provider adapter is independent.
              - [ ]    - **Phoenix axis:** Connectors / integrations (primary), Voice/realtime (I/O layer).
              - [ ]    - **Structural vs glue:** Structural. Base transport is library-quality; adapters are structured glue (they HAVE to touch provider SDKs, but the shape is clean).
              - [ ]    - **Verdict:** Copy base_transport/input/output. Cherry-pick adapters as needed (websocket + local likely first for Phoenix; daily/livekit if we go WebRTC).
             
              - [ ]    #### 5. `src/pipecat/turns/` ⭐ VOICE-SPECIFIC
             
              - [ ]    - **Does:** 10 entries. Turn-taking logic — `user_turn_controller.py`, `user_turn_processor.py`, `user_turn_strategies.py`, `user_turn_completion_mixin.py`, `user_idle_controller.py`, plus `user_mute/`, `user_start/`, `user_stop/` subdirs.
              - [ ]    - **Isolation:** High. Turn logic is a discrete concern, cleanly factored.
              - [ ]    - **Phoenix axis:** Voice/realtime (turn-taking is the heart of voice UX).
              - [ ]    - **Structural vs glue:** Structural.
              - [ ]    - **Verdict:** Strong salvage for voice room. This is the hardest-to-get-right part of voice agents and it's already solved here.
             
              - [ ]    #### 6. `src/pipecat/services/` ⭐ PROVIDER ADAPTER SURFACE
             
              - [ ]    - **Does:** 63 entries. `ai_service.py` (base), `image_service.py`, then one directory per AI provider: anthropic, aws, azure, cartesia, cerebras, deepgram, deepseek, elevenlabs, fal, fireworks, fish, gladia, google, grok, groq, heygen, hume, inworld, assemblyai, asyncai, camb... (sample truncated at 25, full list has 63 entries).
              - [ ]    - **Isolation:** Very high. Each service is its own dir with a well-defined base contract.
              - [ ]    - **Phoenix axis:** Connectors / integrations (this IS the provider connector surface).
              - [ ]    - **Structural vs glue:** Base class is structural. Per-provider dirs are structured adapters — real glue, but the right kind.
              - [ ]    - **Verdict:** Study `ai_service.py` as the contract pattern. Cherry-pick specific providers Phoenix actually uses (anthropic, google, deepgram likely first).
             
              - [ ]    #### 7. `src/pipecat/audio/`
             
              - [ ]    - **Does:** 9 entries. `vad/` (voice activity detection), `resamplers/`, `filters/`, `mixers/`, `dtmf/`, `turn/`, `krisp_instance.py` (noise suppression).
              - [ ]    - **Isolation:** High. Audio primitives as independent utilities.
              - [ ]    - **Phoenix axis:** Voice/realtime.
              - [ ]    - **Structural vs glue:** Structural.
              - [ ]    - **Verdict:** Cherry-pick candidates. VAD and resamplers are high-value primitives.
             
              - [ ]    #### 8. `src/pipecat/observers/`
             
              - [ ]    - **Does:** 6 entries. `base_observer.py`, `loggers/`, `startup_timing_observer.py`, `turn_tracking_observer.py`, `user_bot_latency_observer.py`.
              - [ ]    - **Isolation:** Very high. Observer pattern on top of pipeline.
              - [ ]    - **Phoenix axis:** Operator surfaces (observability), Voice/realtime (latency observer is voice-specific).
              - [ ]    - **Structural vs glue:** Structural.
              - [ ]    - **Verdict:** Strong salvage. Observer pattern is cheap to port and high-value.
             
              - [ ]    #### 9. `src/pipecat/serializers/`
             
              - [ ]    - **Does:** 9 entries. `base_serializer.py`, `protobuf.py`, plus telephony-provider serializers (`twilio.py`, `telnyx.py`, `plivo.py`, `vonage.py`, `exotel.py`, `genesys.py`).
              - [ ]    - **Isolation:** Very high. Serializers are stateless transforms.
              - [ ]    - **Phoenix axis:** Connectors / integrations (telephony), Voice/realtime (wire format).
              - [ ]    - **Structural vs glue:** Structural.
              - [ ]    - **Verdict:** Not immediately needed unless Phoenix goes phone-network. Park until telephony is in scope.
             
              - [ ]    #### 10. `src/pipecat/adapters/`
             
              - [ ]    - **Does:** 4 entries. `base_llm_adapter.py`, `schemas/`, `services/`.
              - [ ]    - **Isolation:** High. Thin layer between pipeline and LLM providers.
              - [ ]    - **Phoenix axis:** Connectors / integrations (LLM layer).
              - [ ]    - **Structural vs glue:** Structural.
              - [ ]    - **Verdict:** Study alongside `services/` — paired concern.
             
              - [ ]    #### 11. `src/pipecat/extensions/`
             
              - [ ]    - **Does:** `ivr/` (interactive voice response), `voicemail/`.
              - [ ]    - **Isolation:** High.
              - [ ]    - **Phoenix axis:** Voice/realtime (domain-specific patterns).
              - [ ]    - **Structural vs glue:** Structured glue (IVR and voicemail are product patterns, not primitives).
              - [ ]    - **Verdict:** Park. Useful as reference patterns, not as copy targets for Phoenix.
             
              - [ ]    #### 12. `src/pipecat/runner/`
             
              - [ ]    - **Does:** 6 files. `run.py`, `daily.py`, `livekit.py`, `types.py`, `utils.py`. Entry-point scaffolding for running pipelines against specific transports.
              - [ ]    - **Isolation:** High.
              - [ ]    - **Phoenix axis:** Boot/runtime (voice-side boot).
              - [ ]    - **Structural vs glue:** Structural shell.
              - [ ]    - **Verdict:** Copy pattern if Phoenix runs Pipecat-style pipelines.
             
              - [ ]    ### D. Cross-cutting observations
             
              - [ ]    1. **Pipecat is library-shaped, OpenClaw is application-shaped.** Pipecat's 18 top-level dirs are each a discrete library responsibility. OpenClaw's 60 top-level dirs are a running product with internal plumbing. Both are valuable, but for different reasons. Pipecat you can import; OpenClaw you study and lift seams.
             
              - [ ]    2. **Single row in final report is enough.** Unlike OpenClaw, Pipecat is one coherent entity. No need to split.
             
              - [ ]    3. **Demo-theater filter: passed easily.** Just shipped v1.0.0 (3 days ago), 11.4k stars, 233 contributors, 63 provider integrations, 9,060 commits. This is not vaporware — it's production-deployed in the real voice-AI economy.
             
              - [ ]    4. **Best first-wave salvage targets from Pipecat:**
              - [ ]       - `src/pipecat/pipeline/` — the pipeline core
              - [ ]      - `src/pipecat/frames/` — frame data contract
              - [ ]     - `src/pipecat/processors/frame_processor.py` + base processor pattern
              - [ ]    - `src/pipecat/transports/base_transport.py` + `base_input.py` + `base_output.py`
              - [ ]       - `src/pipecat/turns/` — turn-taking (entire module)
              - [ ]      - `src/pipecat/observers/` — observer pattern
              - [ ]     - `src/pipecat/audio/vad/` + `src/pipecat/audio/resamplers/`
             
              - [ ] 5. **Best to study but NOT lift wholesale:** the 63-provider `services/` tree — cherry-pick only what Phoenix uses.
             
              - [ ] 6. **Voice/realtime bucket is solved.** This is the one axis where the salvage bucket has a clean, production-grade canonical source. No further hunting needed for the voice room's primary bone.
             
              - [ ] ### E. Phase 1.2 verdict
             
              - [ ] Pipecat is **the** voice/realtime source for Phoenix. BSD-2-Clause, just-hit-1.0, library-shaped, cleanly factored, actively maintained. Verdict: **copy/adapt** (import as dependency where possible, lift specific modules otherwise).
             
              - [ ] Evidence chain held throughout. No stop conditions hit.
             
              - [ ] ### Next
             
              - [ ] Moving to Phase 2.1 — `anthropics/claude-code` substrate check (substrate only, NOT proof of war-room).
             
              - [ ] ---
             
              - [ ] ## PHASE 2.1 — `anthropics/claude-code` substrate check (2026-04-17)
             
              - [ ] This one needed a hard look, not a generous one. Firedancer was explicit: **substrate only, NOT proof of war-room.** The job here was narrow. Here's the ground truth.
             
              - [ ] ### A. Reality
             
              - [ ] - Repo: `anthropics/claude-code` — public, active (last commit 17 hours ago).
              - [ ] - 115k stars, 19.2k forks, 593 commits, 156 branches, 91 tags, 51 contributors.
              - [ ] - Owner: anthropics (Anthropic PBC, the official org).
              - [ ] - Homepage: `code.claude.com/docs/en/overview`.
              - [ ] - Repo description: "Claude Code is an agentic coding tool that lives in your terminal..."
              - [ ] - Latest README badge: `npm v2.1.112` — the actual binary is distributed on npm, not from this repo.
             
              - [ ] **Reality verdict:** The repo is real and active. But what's IN the repo is not what you might assume.
             
              - [ ] ### B. License — CRITICAL FINDING
             
              - [ ] - GitHub API reports `license: null` — no SPDX-identifiable open-source license detected.
              - [ ] - Actual `LICENSE.md` reads, verbatim:
              - [ ]   > "© Anthropic PBC. All rights reserved. Use is subject to Anthropic's Commercial Terms of Service."
              - [ ]   - **This is a proprietary license, not open source.**
              - [ ]   - Use is allowed AS A TOOL under Anthropic's commercial terms.
              - [ ]   - **Lifting code from this repo into Phoenix is NOT permitted as salvage.** It is not BSD, MIT, Apache, or any permissive license.
             
              - [ ]   This is a material finding that reshapes Phase 2.1 entirely.
             
              - [ ]   ### C. What's actually IN the repo
             
              - [ ]   Contrary to what the name might suggest, there is **no core Claude Code engine source code here.** The binary lives on npm as `@anthropic-ai/claude-code` and its source is not published.
             
              - [ ]   What the repo actually contains:
             
              - [ ]   | Folder | Contents | What it really is |
              - [ ]   |---|---|---|
              - [ ]   | `plugins/` | README + 13 plugin dirs (agent-sdk-dev, claude-opus-4-5-migration, code-review, commit-commands, explanatory-output-style, feature-dev, frontend-design, hookify, learning-output-style, plugin-dev, pr-review-toolkit, ralph-wiggum, security-guidance) | **Plugin authoring examples** — reference material for users writing their own plugins |
              - [ ]   | `.claude/commands/` | commit-push-pr.md, dedupe.md, triage-issue.md | **Slash-command authoring examples** (markdown-format custom commands) |
              - [ ]   | `examples/` | hooks/, mdm/, settings/ | Hook authoring examples, MDM deployment configs, settings templates |
              - [ ]   | `scripts/` | auto-close-duplicates.ts, backfill-duplicate-comments.ts, sweep.ts, etc. | **Repo-management automation** for the claude-code repo itself (GitHub issue triage). Not product source. |
              - [ ]   | `Script/` | One PowerShell devcontainer helper | Single-file helper |
              - [ ]   | `.devcontainer/` | devcontainer config | Dev environment setup |
              - [ ]   | `.github/` | CI workflows | Standard repo plumbing |
             
              - [ ]   Languages reported: Shell 47.1%, Python 29.2%, TypeScript 17.7%, PowerShell 4.1%, Dockerfile 1.9% — almost all of that is the `scripts/` + `examples/` + `.devcontainer/` stack, not a product engine.
             
              - [ ]   ### D. What it IS
             
              - [ ]   - The **public-facing authoring surface** for Claude Code plugins, commands, and hooks.
              - [ ]   - The **issue tracker** for the Claude Code product (5k+ open issues).
              - [ ]   - The **docs/examples** repo for end-users and plugin developers.
              - [ ]   - A **reference** for how Anthropic thinks about agentic tool patterns (through the plugin examples).
             
              - [ ]   ### E. What it IS NOT
             
              - [ ]   - **NOT open-source.** License is proprietary (© Anthropic PBC, all rights reserved).
              - [ ]   - **NOT the source of the Claude Code CLI engine.** That lives on npm and is closed.
              - [ ]   - **NOT proof of a war-room stack, mission control, message queue, memory decay, or any of Kashef's claimed multi-agent command-center architecture.** None of that is in this repo.
              - [ ]   - **NOT a salvage candidate in any meaningful sense.** You can't lift code from here, because (a) the valuable code isn't in here, and (b) what IS in here is license-restricted.
             
              - [ ]   ### F. What Phoenix can learn as foundation
             
              - [ ]   Even though nothing is liftable, there is **non-code learning** available here:
             
              - [ ]   1. **Plugin architecture pattern.** The `plugins/` directory has 13 worked examples of how Anthropic designs plugin shapes. Read for pattern, not for code. (e.g. `pr-review-toolkit/`, `plugin-dev/`, `hookify/` show the hook-plugin-command decomposition.)
              - [ ]   2. **Slash-command format.** The `.claude/commands/` markdown format is a usable convention Phoenix can adopt for its own operator surface — the convention is not copyrighted, even though the examples are.
              - [ ]   3. **Hook examples.** `examples/hooks/` shows how Anthropic thinks about lifecycle interception in an agentic tool. Pattern, not code.
              - [ ]   4. **MDM / deployment settings.** `examples/mdm/` and `examples/settings/` show how the product is configured at scale. Reference for Phoenix's own deployment layer.
             
              - [ ]   All of this is **study-only, pattern-level learning**. Phoenix implements its own versions.
             
              - [ ]   ### G. What must NOT be misattributed to it
             
              - [ ]   Critical disambiguation for the final report:
             
              - [ ]   - Any claim that "Claude Code open-sourced their war-room" — **false.** No such code is in this repo.
              - [ ]   - Any claim that Kashef's command-center is "built on Claude Code" must be unpacked carefully: built on Claude Code the TOOL (as a user of the product) ≠ built on Claude Code the CODEBASE (there is no public codebase to build on).
              - [ ]   - Any claim that Phoenix can "fork Claude Code" — **false.** License does not permit it.
              - [ ]   - Any implication that the 115k stars represent 115k people validating an open agent-orchestration architecture — **false.** Those stars are for a popular closed-source tool with a public issue tracker.
             
              - [ ]   ### H. Phase 2.1 verdict
             
              - [ ]   - **Reality:** ✅ (real repo, active, official)
              - [ ]   - **License:** ❌ (proprietary, not OSS-liftable)
              - [ ]   - **Structural salvage usefulness:** ❌ (the engine is not in this repo)
              - [ ]   - **Pattern-level learning:** ✅ (plugin/hook/command conventions)
              - [ ]   - **Foundation claim:** Phoenix can build on Claude Code the tool (via Anthropic's terms) as a substrate. Phoenix cannot lift any of Claude Code the codebase.
              - [ ]   - **War-room claim:** This repo is NOT evidence of a public war-room stack. That is a category error.
             
              - [ ]   Evidence chain held. No stop conditions hit — the "License is unclear" stop-condition triggered a careful read, which resolved cleanly to "proprietary, not salvage-eligible, but pattern-readable."
             
              - [ ]   ### Next
             
              - [ ]   Moving to Phase 3 — Mark Kashef command-center / war-room chain. This is where the most careful work happens. Firedancer's explicit guardrail: **"If Kashef's public code is not exposed, label those rows exactly: `video/article only — study only until code link exists`. Do not substitute some random repo with his name attached."**
             
              - [ ]   Starting from the April 14, 2026 YouTube video anchor. Hunting the linked-resource chain to see if any public code exists. No generosity, no guessing.
             
              - [ ]   ---
             
              - [ ]   ## PHASE 3 — Mark Kashef command-center / war-room chain (2026-04-17)
             
              - [ ]   This is the phase Shane and Firedancer both told me to be most careful with. The rule is explicit: **no generosity, no guessing. If the code is not public, say it plainly. Do not swap in some random repo with his name attached.**
             
              - [ ]   Here is what I found.
             
              - [ ]   ### A. Identity chain
             
              - [ ]   - `github.com/markkashef` → **404.** No GitHub user with that exact handle.
              - [ ]   - Search `mark+kashef` across GitHub users → **0 results.**
              - [ ]   - Search `kashef` → 10+ users with that surname but none are Mark Kashef (different names, different repos).
              - [ ]   - Third-party repos reference him by name as a YouTube content creator: `JimHinson/agentic-ai-patterns` ("Examples of the 20 patterns presented by Mark Kashef in his YouTube video") and `thaddavis/openai-assistants-v2` ("Shout out to Mark Kashef"). These confirm Kashef is primarily a **video content creator, not a code publisher.**
             
              - [ ]   After tracing brand anchors (his channel is "Prompt Advisers"), the correct GitHub account is:
             
              - [ ]   - **`github.com/promptadvisers`** — User account, created 2023-10-04, 110 followers, 49 public repos, very active (commits this week).
              - [ ]   - No name or bio filled in; zero metadata; blank location/company/blog. Account is intentionally low-profile but the repo content matches Kashef's video catalog exactly (agentic design patterns, Claude Code skills, n8n, RAG, voice, MCP).
             
              - [ ]   This is the correct identity anchor for Phase 3. No ambiguity remaining.
             
              - [ ]   ### B. Full inventory of public repos (all 49)
             
              - [ ]   Pulled all 49 via GitHub API, sorted by last update. Key repos by thematic relevance to what Firedancer described (mission control, 5 agents, message queue, memory decay/pinning/consolidation, Gemini Live, Pipecat, launchd, war-room):
             
              - [ ]   | Repo | Stars | License | Lang | Relevance |
              - [ ]   |---|---|---|---|---|
              - [ ]   | `agentic-design-patterns-docs` | 307 | none | Mermaid | **Docs only** — 55KB of Mermaid diagrams, pushed once at creation, never touched again. No code. |
              - [ ]   | `claude-code-polished-documents-skills` | 63 | NOASSERTION | Python | Document generation skill-pack. Not a war-room. |
              - [ ]   | `ai-strategy-factory` | 63 | MIT | Python | Strategy-doc generator (Perplexity + Gemini). Not orchestration. |
              - [ ]   | `n8n-powerhouse` | 30 | none | — | n8n skill-pack for Claude Code. Skill-pack, not war-room. |
              - [ ]   | `megarag` | 29 | none | TypeScript | Multi-modal RAG with knowledge graph. Closest thematic match to "memory layer" but not claimed architecture. |
              - [ ]   | `sales-call-analyzer` | 15 | none | JavaScript | Single-purpose Gemini app. |
              - [ ]   | `gemini-rag-file-search` | 15 | none | HTML | Demo app. |
              - [ ]   | `ebook-maker` | 13 | none | JavaScript | AI ebook generator. |
              - [ ]   | `tokens-llm-presentation` | 12 | none | Python | Presentation-maker scripts. |
              - [ ]   | `self-improving-system` | 10 | none | TypeScript | **Nearest match in name to the claimed architecture, but unlicensed and small.** |
              - [ ]   | `ragie-chat-app` | 9 | none | JavaScript | RAG chat demo. |
              - [ ]   | `claude-code-analytics` | 8 | none | TypeScript | Analytics dashboard — NOT a mission control war-room. |
              - [ ]   | `perplexity-mcp-server` | 7 | MIT | Python | Single MCP server. |
              - [ ]   | `voice-recording-app` | 7 | none | JavaScript | Voice recorder. |
              - [ ]   | `sora-studio` | 6 | MIT | JavaScript | Sora video UI. |
              - [ ]   | `media-toolkit` | 5 | none | JavaScript | Media tools. |
              - [ ]   | `claude-code-session` | 4 | none | Python | "shortcuts, guides, and session data." Not runtime. |
              - [ ]   | `claude-code-demo-4` | 4 | none | JavaScript | n8n workflow demo. |
              - [ ]   | `mcp-implementation-guide` | 2 | none | Python | MCP docs. |
              - [ ]   | (plus ~30 more: landing pages, small demos, forks, empty repos) | | | | |
             
              - [ ]   **Forks (flagged as fork=true, not Kashef's original code):** `n8n-mcp` (107 stars — FORK), `mcp-containers` (FORK), `claudeclaw-1` (FORK — Telegram bot, confusingly named but not OpenClaw), `n8n_june11` (FORK), `Flowise` (FORK), `nanochat` (FORK), `mcp-mem0` (FORK).
             
              - [ ]   ### C. War-room / command-center / hive-mind chain — DOES IT EXIST IN CODE?
             
              - [ ]   Firedancer described Kashef's claimed architecture as:
              - [ ]   - Claude Code foundation
              - [ ]   - 5 specialized agents
              - [ ]   - mission control dashboard
              - [ ]   - message queue / delivery layer
              - [ ]   - memory filtering, decay, pinning, consolidation
              - [ ]   - Gemini Live integration
              - [ ]   - Pipecat integration
              - [ ]   - launchd persistence
              - [ ]   - war-room operator surfaces
             
              - [ ]   **Searched the full 49-repo inventory for anything matching that architecture. Result: not present as a single cohesive public repo.**
             
              - [ ]   There is **no repo** in `promptadvisers`'s public GitHub named:
              - [ ]   - `war-room` — absent
              - [ ]   - `command-center` — absent
              - [ ]   - `mission-control` — absent
              - [ ]   - `hive-mind` — absent
              - [ ]   - `five-agents` / `5-agents` — absent
              - [ ]   - any variation matching the claimed orchestrator
             
              - [ ]   The closest-named repo is `self-improving-system` (10 stars, unlicensed, TypeScript) — but its description is just "Self Improving System" with no further detail, and 10 stars indicates it's demo-scale, not the flagship architecture. Not a match for "5 specialized agents + mission control + message queue + memory decay."
             
              - [ ]   ### D. What IS public from Kashef that's useful to Phoenix
             
              - [ ]   Even though the claimed war-room architecture is NOT publicly released as code, Kashef has published **smaller reusable pieces** that partially touch Phoenix's axes:
             
              - [ ]   1. **`agentic-design-patterns-docs`** — Mermaid diagrams of 21 agentic patterns. No license, but it's documentation; Phoenix can study the pattern vocabulary.
              - [ ]   2. **`megarag`** — Multi-modal RAG with knowledge graph indexing (29 stars, TypeScript, unlicensed). Thematic match to "memory layer" but license risk makes it study-only.
              - [ ]   3. **`claude-code-polished-documents-skills`** (NOASSERTION license) — pattern for how to build Claude Code skill-packs. Reference only.
              - [ ]   4. **`n8n-powerhouse`** — how Claude Code can drive n8n. Pattern reference.
              - [ ]   5. **`perplexity-mcp-server`** (MIT) — one of the only MIT-licensed Kashef repos. Small MCP server pattern.
             
              - [ ]   None of these individually or collectively add up to the claimed war-room architecture. They are skill-packs, demos, and reference docs.
             
              - [ ]   ### E. License risk across Kashef's output
             
              - [ ]   **Critical license observation:** Of 49 repos, only **5 are MIT-licensed** and all 5 are small single-purpose tools (`sora-studio`, `ai-strategy-factory`, `perplexity-mcp-server`, `lazy-calculator-mcp`, `forecasting-calculator-mcp`). The flagship-starred repos (`agentic-design-patterns-docs` 307⭐, `n8n-powerhouse` 30⭐, `megarag` 29⭐, `self-improving-system` 10⭐, `claude-code-analytics` 8⭐, `claude-code-session` 4⭐) all have **no license declared** — which means default copyright applies and they are NOT legally liftable as salvage, even though they are publicly visible.
             
              - [ ]   Two repos are `NOASSERTION` (claude-code-polished-documents-skills, n8n_june11) — means the repo has a license file but GitHub can't categorize it; would need individual manual read before trusting.
             
              - [ ]   ### F. Phase 3 verdict — the stamp
             
              - [ ]   Applying Firedancer's guardrail exactly as written:
             
              - [ ]   > "If Kashef's public code is not exposed, label those rows exactly: `video/article only — study only until code link exists`. Do not substitute some random repo with his name attached."
             
              - [ ]   **The claimed Kashef war-room / command-center / hive-mind architecture is NOT present as a cohesive public code release.**
             
              - [ ]   Stamp, applied verbatim:
             
              - [ ]   ```
              - [ ]   video/article only — study only until code link exists
              - [ ]   ```
             
              - [ ]   Phoenix-facing conclusions:
             
              - [ ]   - The **architecture** Kashef describes in his April 14, 2026 YouTube video is **video-only**. No repo matches it.
              - [ ]   - What IS public from Kashef are **adjacent smaller pieces** (skill-packs, MCP servers, design-pattern docs, small demos) that may inform Phoenix's thinking but do not constitute a salvageable war-room.
              - [ ]   - Of the public pieces, the ones closest to Phoenix's concerns (`megarag` for memory, `self-improving-system` for agent loop, `claude-code-analytics` for observability) have **no license declared** and therefore cannot be lifted — only read.
              - [ ]   - Third-party repos inspired by Kashef's videos exist (`JimHinson/agentic-ai-patterns`, the various `claude-war-room` / `coders-war-room` / `claude-hive-mind` repos from other authors) — these are **parallel implementations by other people**, NOT Kashef's code, and they have their own small-repo / small-star profile. They are not canonical.
             
              - [ ]   ### G. What must NOT be done
             
              - [ ]   Per Firedancer's explicit guardrail:
             
              - [ ]   - **Do NOT** treat any `ruvnet/claude-flow` or third-party war-room repo as "Kashef's war-room." They aren't.
              - [ ]   - **Do NOT** attribute a polished multi-agent architecture to Kashef's public code. His public code is not that.
              - [ ]   - **Do NOT** promote `megarag` or `self-improving-system` to "flagship Kashef stack." Both are small, unlicensed, and not described as such.
              - [ ]   - **Do NOT** collapse "built on Claude Code (the tool)" into "forkable Claude Code architecture." Phase 2.1 already settled that.
             
              - [ ]   ### H. Where the evidence chain points next
             
              - [ ]   The legitimate next move for Phoenix on the Kashef axis is:
             
              - [ ]   1. **Watch the April 14, 2026 video as architectural inspiration**, not as a code source. Treat it like a conference talk: ideas travel, code doesn't.
              - [ ]   2. **Re-implement from first principles** using the salvage lanes that DO have real code — OpenClaw's `tasks/`, `acp/`, `sessions/`, `hooks/`, `daemon/`; Pipecat's `pipeline/`, `turns/`, `observers/`.
              - [ ]   3. **Hold the door open**: if Kashef later publishes the war-room as a real, licensed repo, upgrade its row from `video/article only` to actual salvage status. Not before.
             
              - [ ]   Evidence chain held. Stop conditions explicitly triggered and honored: "source is not public" → applied the video/article-only stamp as specified. No swaps, no guesses, no generosity.
             
              - [ ]   ### Next
             
              - [ ]   Phase 4 — `ruvnet/claude-flow` as comparable external candidate. Firedancer was clear: comparable external, NOT canonical, NOT swap-in for Kashef.
             
              - [ ]   ---
             
              - [ ]   ## PHASE 3 — UPDATE / CORRECTION (2026-04-17, after Shane's 777 framing)
             
              - [ ]   Shane came back with the 777 framing: we already have the Gauntlet, so this is enhancement-hunting, not rescue. And the classification grid got tightened to 5 labels: public salvage source / public unlicensed — study only / private instructional source / video/article only / not found. Rule: pursue with hunger, verify like treasure is fake, classify before desiring.
             
              - [ ]   I extended the chain beyond GitHub: **YouTube → Skool → Gumroad → cross-links.** That changed the answer.
             
              - [ ]   ### The correction
             
              - [ ]   My earlier Phase 3 stamp was `video/article only — study only until code link exists`. That was **partly wrong**. The accurate classification is different. Here is what I found and what it actually is.
             
              - [ ]   ### Extended chain results
             
              - [ ]   **1. YouTube channel — CONFIRMED.**
              - [ ]   - `@Mark_Kashef` — 73.1K subscribers, real channel, active. Tagline: "Your Trusted AI Advisor."
              - [ ]   - **The April 14, 2026 video is real** and I found it: **"I Replaced OpenClaw and Phoenix Runtime Skills With This Claude Code Setup"** (video ID `rVzGu5OYYS0`, 41,605 views, published Apr 14 2026, 33:16 runtime).
              - [ ]   - Thumbnail reads "MISSION CONTROL" with a crowned pixel-art lobster in a three-monitor command-center rig.
             
              - [ ]   **2. Skool community — CONFIRMED, PAID.**
              - [ ]   - `skool.com/earlyaidopters` — "Early AI-dopters," private community, **$64/month**, 1,184 members, 21 courses, 4,826 posts, 17 admins.
              - [ ]   - Real credentials: Mark Kashef = O'Reilly Media instructor, Professor, Master's in AI, Ex-Amazon.
              - [ ]   - Named courses inside include: "**NEW Claude Code Magic**," "**NEW Build-Your-Own OpenClaw, Home of ClaudeClaw 🦞**," "Obsidian + Claude Code Second Brain Starter Kit," "Prompt Engineering Mastery," "Machine Learning Mastery," "AI Consulting Playbook."
              - [ ]   - Access perks include "Done-for-you Claude Code systems."
              - [ ]   - Classification: **private instructional source** — useful as learning, not as public salvage.
             
              - [ ]   **3. Gumroad storefront — CONFIRMED, with a big find.**
              - [ ]   - `promptadvisers.gumroad.com` → minimal ($5 prompt list, not relevant).
              - [ ]   - **`markkashef.gumroad.com/l/gnwsm` → THE ARTIFACT.**
              - [ ]   - Title: **"ClaudeClaw OS Blueprint Kit 🦀"**
              - [ ]   - Price: **CAD$0+** (pay-what-you-want, free floor, 12 five-star ratings).
              - [ ]   - Attributed directly to Mark Kashef.
             
              - [ ]   **This is what the blueprint kit actually contains** (from the Gumroad "What You Get" section, verbatim):
             
              - [ ]   - **Rebuild Mega Prompt** — "A single prompt you paste into Claude Code. It asks 6 questions about what you want (channels, voice, memory, agents, advanced features), then builds the entire project from scratch. Includes a deep knowledge base so you can ask questions at any point during setup. Most people are up and running in under an hour."
              - [ ]   - **Power Packs (8 Modular Feature Prompts)** — self-contained prompts that add features to a running ClaudeClaw v0:
              - [ ]     1. **Memory v2** — Gemini-powered extraction, 768-dim embeddings, 5-layer retrieval, importance-weighted decay, auto-consolidation every 30 minutes
              - [ ]   2. **Multi-Agent** — 5 specialist agents (Main, Comms, Content, Ops, Research) with their own Telegram bots, personalities, and shared hive mind
              - [ ]     3. **War Room** — Browser-based voice meeting room with Gemini Live speech-to-speech and intelligent agent routing
              - [ ]   4. **Mission Control** — Cron scheduler with priority queue, auto-assignment, and dashboard task management
              - [ ]     5. **Security** — PIN lock, idle auto-lock, emergency kill phrase, 15+ pattern exfiltration guard, full audit log
              - [ ]   6. **Voice Upgrade** — 4-provider TTS cascade (ElevenLabs, Gradium, Kokoro local, macOS say) with automatic failover
              - [ ]     7. **Dashboard** — Web control panel on port 3141 with memory timeline, token tracking, agent status, real-time SSE updates
              - [ ]   8. **Meeting Bot** — AI avatar joins Google Meet or Zoom calls with a 75-second pre-flight briefing from Calendar, Gmail, and Memory
              - [ ]   - **Power Packs Guide** — companion document
              - [ ]   - **Visual Guide (PDF)** — 20 pages of hand-drawn architecture diagrams
             
              - [ ]   **4. Kashef's own words on what this actually is** (pulled from the video description, verbatim):
             
              - [ ]   > "I built a personal AI command center on top of my existing Claude Code subscription. **No new frameworks. No extra API costs. Just the Agent SDK, a few hundred lines of code, and layers I keep adding over time.**"
             
              - [ ]   > "I also explain why I chose this over **OpenClaw, Phoenix Runtime Skills Agent, and every other framework** that shows up every week. The short version is that **my foundation is Claude Code itself, and everything else is a removable layer on top.**"
             
              - [ ]   Video chapter list (corroborates every Firedancer anchor):
              - [ ]   - 2:50 The Agent SDK bridge explained
              - [ ]   - 3:21 V0 architecture (Telegram + SQLite + 200 lines)
              - [ ]   - 4:20 Memory layers and Obsidian injection
              - [ ]   - 4:43 Multi-agent with hive mind
              - [ ]   - 5:00 Gemini-powered memory extraction
              - [ ]   - 5:18 **Voice layers and Pipecat** ✅
              - [ ]   - 5:26 Meeting stack and Pika avatars
              - [ ]   - 5:43 Security and chat ID allowlist
              - [ ]   - 6:08 **Auto-launch with launchd services** ✅
              - [ ]   - 6:23 Dashboard via Cloudflare tunnel
              - [ ]   - 6:57 Why not OpenClaw or Phoenix Runtime Skills Agent
              - [ ]   - 8:46 Mission control and task auto-assignment
              - [ ]   - 9:50 War Room delegation design
              - [ ]   - 13:00 Message queue prevents silent failures
              - [ ]   - 13:42 Memory classifier and pinned memories
              - [ ]   - 14:25 Importance decay and distribution
              - [ ]   - 14:41 Exfiltration guard and security layers
             
              - [ ]   Every Firedancer-named element is present and architected.
             
              - [ ]   ### The critical classification call
             
              - [ ]   **The ClaudeClaw OS Blueprint Kit is NOT a codebase.** It is a **prompt pack + architecture diagrams**. The "Mega Prompt" and "8 Power Pack prompts" are instructions Claude Code follows to generate the code at build time, not pre-written source.
             
              - [ ]   Using Shane's 5-label grid:
             
              - [ ]   | Label | Applies? | Why |
              - [ ]   |---|---|---|
              - [ ]   | public salvage source | **NO** | There is no git repo of the ClaudeClaw OS code published by Kashef. The artifact is prompts + diagrams, not lift-able source. |
              - [ ]   | public unlicensed — study only | **NO** | Not code at all. |
              - [ ]   | **public instructional source** | **YES** | Freely available prompts + 20-page PDF architecture guide on Gumroad (CAD$0+). Anyone can read them and learn. |
              - [ ]   | private instructional source | Partial | Deeper teaching is inside the $64/mo Skool community ("Build-Your-Own OpenClaw, Home of ClaudeClaw" course, "Done-for-you Claude Code systems"). Paid tier. |
              - [ ]   | video/article only | Partial | The architectural explanation is in the April 14 video. |
              - [ ]   | not found | NO | Everything was located. |
             
              - [ ]   **Correct primary label for the Kashef war-room lane:**
             
              - [ ]   ```
              - [ ]   public instructional source (prompts + diagrams, free/pay-what-you-want) +
              - [ ]   private instructional source (paid Skool course)
              - [ ]   NOT a public salvage source — no lift-able codebase exists
              - [ ]   ```
             
              - [ ]   ### What Phoenix should actually do with this
             
              - [ ]   This is the enhancement-not-rescue framing in action:
             
              - [ ]   1. **Grab the free blueprint kit.** CAD$0+ means Phoenix can legally download it. The 8 Power Packs + Mega Prompt + 20-page PDF are Phoenix's architectural study material for this axis — especially Memory v2 (decay + pinning + consolidation), Mission Control (cron + priority queue + auto-assignment), and War Room (Gemini Live + agent routing).
              - [ ]   2. **Treat the prompts as specifications, not code.** The prompts describe the architecture well enough that Phoenix's own builders can implement the same layers from scratch, using Phoenix's own conventions. This is study → re-implement, not copy → paste.
              - [ ]   3. **Do NOT expect a companion repo.** There isn't one, by design. Kashef's business model is the Skool community; the free kit is the top-of-funnel. That's a legitimate business structure, just not a salvage pipeline.
              - [ ]   4. **Cross-reference to the OpenClaw salvage lane for comparison, not substitution.** Kashef explicitly REJECTS OpenClaw as a framework ("my foundation is Claude Code itself, and everything else is a removable layer"). This is a legitimate architectural disagreement. Phoenix can take the best of both — OpenClaw's structural bones (tasks/acp/sessions/hooks/daemon) where they fit, and Kashef's thin-layer architectural discipline as a design principle.
              - [ ]   5. **Optionally consider the $64/mo Skool membership** as a direct learning channel — but classify that as a team-decision, not an automatic salvage action.
             
              - [ ]   ### Stamp correction
             
              - [ ]   **Old stamp (superseded):** `video/article only — study only until code link exists`
             
              - [ ]   **Corrected stamp:**
              - [ ]   ```
              - [ ]   public instructional source — free prompt/diagram kit available at markkashef.gumroad.com/l/gnwsm ("ClaudeClaw OS Blueprint Kit")
              - [ ]   paired with: private instructional source — paid Skool course at skool.com/earlyaidopters ($64/mo)
              - [ ]   NOT a public salvage source — no lift-able codebase exists by design
              - [ ]   ```
             
              - [ ]   ### What this means for the final report
             
              - [ ]   The Kashef row in the salvage verification table needs to be **two rows**, not one:
             
              - [ ]   1. **ClaudeClaw OS Blueprint Kit** (Gumroad, CAD$0+, free) → public instructional source — use as architectural reference for Memory v2, Mission Control, War Room, Security, Voice, Dashboard, Meeting Bot patterns.
              - [ ]   2. **Early AI-dopters Skool community** (paid, $64/mo) → private instructional source — team decision whether to pay in, not an automatic action.
             
              - [ ]   And a disambiguation note: `openclaw/openclaw` (the 359k-star repo maintained by steipete + 50+ contributors) is NOT Kashef's project. Kashef rejects OpenClaw as a framework. The Phase 1.1 OpenClaw finding stands on its own merits; the name-overlap with Kashef's "Build-Your-Own OpenClaw, Home of ClaudeClaw" Skool course is coincidental rebranding, not shared code.
             
              - [ ]   ### What must still NOT be done
             
              - [ ]   - Do NOT elevate the blueprint kit to "public salvage source." It isn't code.
              - [ ]   - Do NOT assume the kit's prompts, once run, produce code that can be safely redistributed — the kit's own terms aren't published and the generated code's provenance is ambiguous.
              - [ ]   - Do NOT substitute `ruvnet/claude-flow` for Kashef's blueprint. Different project, different author, evaluated separately in Phase 4.
              - [ ]   - Do NOT confuse "Build-Your-Own OpenClaw, Home of ClaudeClaw" (Kashef's Skool course) with `openclaw/openclaw` (steipete et al's upstream OSS). Different projects with coincidental naming.
             
              - [ ]   ### Evidence chain status
             
              - [ ]   Held. Honored Shane's rule exactly: pursued with hunger, verified like treasure was fake, classified before desiring. The correction-not-rescue move was the right call — first-pass stamp was too harsh because it only searched GitHub; extending the chain revealed the real artifact. Upgrading classification without inflating it.
             
              - [ ]   ### Next
             
              - [ ]   Phase 4 — `ruvnet/claude-flow` as comparable external candidate. Firedancer frame: comparable external, NOT canonical, NOT swap-in for Kashef.
             
              - [ ]   ---
             
              - [ ]   ## Phase 4 — ruvnet/claude-flow (now ruvnet/ruflo)
             
              - [ ]   Posture: comparable external candidate only. Not canonical. Not a swap-in for Kashef. Not a swap-in for OpenClaw.
             
              - [ ]   ### Reality
              - [ ]   - Repo renamed: `ruvnet/claude-flow` → `ruvnet/ruflo`. Same owner. Redirect honored by GitHub.
              - [ ]   - 32.2k stars, 3,608 forks, 280 watchers, 466 open issues.
              - [ ]   - Created 2025-06-02, pushed 2026-04-11 (6 days ago). Actively maintained.
              - [ ]   - Repo size: 506 MB. Heavy.
             
              - [ ]   ### License
              - [ ]   - MIT (Copyright 2024-2026 ruvnet). Clean for study and adaptation. No license blocker.
             
              - [ ]   ### Structural Usefulness — the decisive finding
              - [ ]   The repo carries three parallel codebases in-tree simultaneously:
              - [ ]   - `ruflo/` — deployable stack (chat-ui, nginx, ruvocal, mcp-bridge, docker-compose). Not a library.
              - [ ]   - `v2/` — 40+ dirs in `v2/src/`. Heavy code weight but smells: `swarm/coordinator.ts` is a single 94KB file (god-class); `task/coordination.ts` is 882 lines with 128 TODOs (one every 7 lines — draft shipped as main); `consciousness-symphony/`, `hive-mind/`, `maestro/`, `neural/`, `reasoningbank/`, `mle-star/` naming skews marketing-heavy. But real code does exist: `hive-mind/consensus.js` (621 lines, byzantine fault tolerance + quorum, 0 TODOs), `task/engine.ts` (720 lines, 2 TODOs).
              - [ ]   - `v3/` — clean-room DDD-scaffolded rewrite. Cleanest code in the repo but thin: only ~38KB of actual orchestration across all seams.
             
              - [ ]   Carrying three versions in-tree is archaeology-shape, not library-shape. Library-shape uses git + semver for versioning, not retained parallel trees.
             
              - [ ]   ### Release pattern
              - [ ]   1,470 releases. Recent tags include `v3.5.80 — Tier A Blocker Fixes`, `v3.5.78 — ESM Stability, Security Hardening`, `v3.5.49 — P0 Daemon Fixes`, `v3.5.43 — Critical Issue Remediation & Stub Removal`. This is release-per-bugfix firefighting churn, not mature calm. "Stub Removal" at v3.5 confirms stubs existed well into the mature-version range.
             
              - [ ]   ### The two real seams (study-only reference)
              - [ ]   - `v3/src/coordination/application/SwarmCoordinator.ts` — 460 lines, 1 class, 28 methods, 0 TODOs. Docstring says "Based on agentic-flow's AttentionCoordinator pattern" (reimplementation of an external pattern).
              - [ ]   - `v3/src/task-execution/application/WorkflowEngine.ts` — 492 lines, 1 class, 0 TODOs. Imports sibling Task domain + SwarmCoordinator only.
             
              - [ ]   These are lift-able reference seams, not drop-in modules. Domain types (Agent.ts, Task.ts) come with them. They depend only on EventEmitter + sibling domain objects. Isolation is decent.
             
              - [ ]   ### Phoenix Fit
              - [ ]   Thin. Possibly useful as study reference for axis 4 (agent coordination) via the two v3 files, and axis 3 (memory lifecycle) via `hive-mind/memory.js` / `hive-mind/consensus.js`. Nothing here that Pipecat + OpenClaw bones don't already cover better with cleaner code and less marketing varnish.
             
              - [ ]   ### Demo-theater filter
              - [ ]   Mixed. Not pure theater — real orchestration code exists, especially in v3. Not pure library either — ships with docker-compose, nginx, chat-ui, ruvocal as first-class directories; carries three versions in-tree; has 128-TODO files in main; names directories `consciousness-symphony`. Over-promises at the README layer, under-delivers at the seam layer.
             
              - [ ]   ### Classification (5-label grid)
              - [ ]   **Row label:** `public salvage source — study only for narrow reference seams (two v3 files)`
             
              - [ ]   Firedancer-approved stamp (verbatim):
              - [ ]   - not canonical
              - [ ]   - not swap-in for Kashef
              - [ ]   - not swap-in for OpenClaw
              - [ ]   - not lift-and-drop salvage
              - [ ]   - study/reference only
             
              - [ ]   Best reusable value if any:
              - [ ]   - `v3/src/coordination/application/SwarmCoordinator.ts`
              - [ ]   - `v3/src/task-execution/application/WorkflowEngine.ts`
             
              - [ ]   ### Working verdict (Firedancer)
              - [ ]   ruvnet/ruflo = comparable external study candidate only. Real code exists, but the repo shape is unstable, the best value is narrow, and it does not challenge OpenClaw or Pipecat as cleaner structural sources.
             
              - [ ]   ### Evidence chain
              - [ ]   Held. Did not eat the marketing density. Interrogated structure via API probes, not screenshots. Verified by counting lines, TODOs, imports, classes — not by reading README adjectives. Kept ruflo classified separately from Kashef and from OpenClaw. No row contamination.
             
              - [ ]   ---
             
              - [ ]   ## Phase 5 — Nemotron / Claw Family Verification
             
              - [ ]   Posture: separate lane from Pass 01. Four separate passes (NanoClaw, NemoClaw, IronClaw, Nemotron) on different axes. Do not collapse rows. Do not contaminate Pass 01.
             
              - [ ]   ### Pass A — NanoClaw (qwibitai/nanoclaw)
              - [ ]   Public, MIT, 27,431 stars, 12,195 forks, TypeScript, 13.5 MB, pushed today (2026-04-17). Org `qwibitai` created 2026-01-15, 14 nanoclaw-* sibling repos (channel connectors as separate plugin packages).
             
              - [ ]   Decisive findings:
              - [ ]   - Three runtime deps total (`@onecli-sh/sdk`, `better-sqlite3`, `cron-parser`) — leanness claim verified.
              - [ ]   - `src/container-runner.ts` (757 lines, 0 TODOs) spawns containers via child_process.spawn; real Dockerfile + agent-runner present.
              - [ ]   - `src/mount-security.ts` (420 lines, 9 functions, 0 TODOs) stores mount allowlist OUTSIDE project root at `~/.config/nanoclaw/mount-allowlist.json` — deliberate protective design preventing agent self-modification.
              - [ ]   - `src/ipc.ts` (15KB) + `ipc-auth.test.ts` (17KB) — tests larger than source, strong auth coverage.
              - [ ]   - 11 colocated test files in `src/`. Vitest. Real test discipline.
              - [ ]   - Anthropic SDK claim partial: NanoClaw imports `@onecli-sh/sdk` (a wrapper), not `@anthropic-ai/sdk` directly. Functionally reaches Anthropic via one layer of indirection.
              - [ ]   - `src/channels/` is 692 bytes — channel connectors are separate sibling repos via plugin registry. Clean boundary.
             
              - [ ]   Yellow flag: `qwibitai/nanoclaw-docker-sandbox` has identical root listing to main repo. May be diverged fork or template. Not collapsed; flagged for future verification.
             
              - [ ]   Classification: **public salvage source**. Axis: isolation / container architecture. Phoenix fit: strong on axis 7 (security/guardrails), secondary on axes 6 + 2.
             
              - [ ]   ### Pass B — NemoClaw (NVIDIA/NemoClaw)
              - [ ]   Distinct project from NanoClaw. Public, Apache-2.0, 19,360 stars, 2,397 forks, TypeScript, 14.5 MB, created 2026-03-15, pushed today. Docs at docs.nvidia.com/nemoclaw/latest/.
             
              - [ ]   Decisive findings:
              - [ ]   - Verified as an OpenClaw plugin via `nemoclaw/openclaw.plugin.json` manifest (id: "nemoclaw", inferenceProvider options nvidia/vllm/openai-compatible).
              - [ ]   - `nemoclaw-blueprint/blueprint.yaml` pins min_openclaw_version "2026.4.2", profiles default/ncp/nim-local/vllm, sandbox image pinned by SHA256 digest. Production deployment discipline.
              - [ ]   - `src/nemoclaw.ts` is 94KB single file with 0 TODOs. God-class smell tempered by zero-TODO discipline; not deeply sampled this pass.
              - [ ]   - 3 runtime deps (`js-yaml`, `p-retry`, `yaml`).
              - [ ]   - 373 repos in GitHub search reference `nemoclaw` — has its own ecosystem (`VoltAgent/awesome-nemoclaw`, `jetsonhacks/NemoClaw-Orin`, `LazaUK/AIFoundry-NemoClaw-AKS`).
             
              - [ ]   NemoClaw is not a competing OpenClaw — it's an OpenClaw extension that runs OpenClaw inside NVIDIA OpenShell with NIM/vLLM inference routing. Coupling to OpenShell makes it conditional for Phoenix — lift only if Phoenix adopts OpenShell, otherwise design-influence.
             
              - [ ]   Classification: **public salvage source (conditional — OpenShell-coupled)**. Axis: gateway / control-plane + local-model runtime.
             
              - [ ]   ### Pass C — IronClaw (nearai/ironclaw)
              - [ ]   Public, dual-licensed MIT OR Apache-2.0, 11,846 stars, 1,350 forks, **Rust** (only Rust candidate this pass), 32.4 MB, created 2026-02-03, pushed today. Owner: NEAR AI. Cargo: name "ironclaw", version 0.25.0, edition 2024, rust-version 1.92.
             
              - [ ]   Decisive finding: 6-crate Rust workspace.
              - [ ]   - `ironclaw_common`, `ironclaw_safety`, `ironclaw_skills`, `ironclaw_engine`, `ironclaw_gateway`, `ironclaw_tui`.
              - [ ]   - **`ironclaw_safety` has its own dedicated `fuzz/` subdirectory.** Continuous adversarial testing on the safety-critical layer specifically.
              - [ ]   - `deny.toml` enforces license/security policy at build time via cargo-deny.
              - [ ]   - `FEATURE_PARITY.md` (31KB) + `COVERAGE_PLAN.md` (33KB) — explicit OpenClaw-compatibility tracking and committed security coverage discipline.
              - [ ]   - 3 Dockerfiles (Dockerfile, Dockerfile.test, Dockerfile.worker) — multi-role container strategy.
             
              - [ ]   Crates are independently liftable — Phoenix could adopt `ironclaw_safety` alone as reference for axis 7 hardening patterns without taking the rest of the stack. Strategic note: adopting IronClaw means accepting Rust into Phoenix's stack — language-axis decision required.
             
              - [ ]   Classification: **public salvage source**. Axis: security / hardening. Phoenix fit: strongest single candidate for axis 7 in either Pass 01 or Pass 05.
             
              - [ ]   ### Pass D — Nemotron (NVIDIA-NeMo/Nemotron)
              - [ ]   Not a code-salvage row. Model family. Hub repo Apache-2.0, 951 stars, pushed today, Jupyter Notebook primary. The repo is the index; the artifacts are the models.
             
              - [ ]   Family verified via `usage-cookbook/`:
              - [ ]   - Nemotron-3-Nano, Nemotron-3-Super, Nemotron-3-Ultra-Base (Ultra announced GTC San Jose 2026)
              - [ ]   - Nemotron-Nano-9B-v2 (Studio-capable router class)
              - [ ]   - Llama-Nemotron-Super-49B-v1.5 (49B mid-size)
              - [ ]   - Llama-3.1-Nemotron-Safety-Guard-V3 (safety-specialized — directly relevant to axis 7)
              - [ ]   - Nemotron-Nano2-VL (vision-language)
              - [ ]   - Nemotron-Parse-v1.1 (parsing)
             
              - [ ]   Model weights ship under NVIDIA Open Model License Agreement (commercially usable with attribution + content-use restrictions).
             
              - [ ]   Twin Peaks runtime read:
              - [ ]   - Router/triage: Nemotron-3-Nano or Nemotron-Nano-9B-v2.
              - [ ]   - Lean-mode sovereign fallback: Nemotron-Nano-9B-v2 (~5-6GB VRAM Q4, realistic on workstation).
              - [ ]   - Studio-capable mid: Llama-Nemotron-Super-49B-v1.5 (~40GB VRAM, A6000/H100 tier).
              - [ ]   - Out of scope: Nemotron-3-Ultra-Base (cloud-only).
              - [ ]   - **Bonus axis-7 piece: Llama-3.1-Nemotron-Safety-Guard-V3** as model-layer safety classifier, pairable with NanoClaw or IronClaw.
             
              - [ ]   Ollama availability was CORS-blocked during this pass — flagged as open question for direct-browser re-verification.
             
              - [ ]   Classification: **public runtime candidate (not a code-salvage row)**. Sharp distinction held per Firedancer's rail: Nemotron = runtime choice, not source adaptation.
             
              - [ ]   ### Source family separation
              - [ ]   NanoClaw (TS, isolation) ≠ NemoClaw (TS, OpenShell integration) ≠ IronClaw (Rust, hardening) ≠ Nemotron (model family, runtime). All four rows distinct, no collapses, no contamination with Pass 01's six rows.
             
              - [ ]   ### Best candidate by axis
              - [ ]   - isolation / container architecture → NanoClaw
              - [ ]   - security / hardening → IronClaw (strongest of either pass for this axis)
              - [ ]   - gateway / control-plane → NemoClaw (conditional on OpenShell) | OpenClaw (general path, Pass 01)
              - [ ]   - local-model runtime → Nemotron-Nano-9B-v2 + Safety-Guard-V3
             
              - [ ]   ### Evidence chain status
              - [ ]   Held. Four separate passes, four separate verdicts, axis labels applied exactly per mission spec. Used the "public salvage source (conditional — OpenShell-coupled)" qualifier on NemoClaw rather than bending the label or pretending the OpenShell coupling was incidental. Used "public runtime candidate (not a code-salvage row)" on Nemotron rather than forcing it into a code-salvage label that doesn't fit. Truth first, label discipline second — same posture as Pass 01.
             
              - [ ]   Report content drafted in chat for Shane to commit to `browser-echo/reports/report__browser__phase-05__nemotron-claw-family-verification__20260417.md`. Ledger remains open for Phase 6 closeout.
