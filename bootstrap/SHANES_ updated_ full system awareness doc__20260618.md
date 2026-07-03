# Shane's Decisions — Current State (V2 Python Twin Peaks Gateway OS)

**Class:** report
**Scope:** phoenix-echo
**Subject:** shanes-decisions-current
**Date:** 2026-06-18
**Author:** Phoenix Echo (CLI seat, Opus 4.8)
**Status:** ACTIVE — this is the current decisions surface.

**What this is:** the forward-seed of `SHANES_DECISIONS_COMPILED.md` (2026-03-10), reconciled against ~3.5 months of progression. This **resolves Open-Decision Q** ("seed `SHANES_DECISIONS_COMPILED.md` forward into a current decisions file"). The March originals — `report__phoenix-echo__gateway-build-review__20260309.md` and `SHANES_DECISIONS_COMPILED.md` — are **preserved untouched** in this same folder per the no-delete rule. Read them for lineage; read this for what is true and decided now.

**Source of named truth (current review):** Shane-confirmed corrections plus the current master design/source packets, especially `/Users/shanewarehime/Developer/GITHUB (GIT)/FULL Master Design download.20260628 .zip`, `/Users/shanewarehime/Downloads/phoenix-runtime-for-design__20260628.zip`, `/Users/shanewarehime/Developer/OS AGENT OPS/OS_FINDINGS/AgentScopeModel/AgentScopeModel.md`, and the historical architecture map at `/Users/shanewarehime/Developer/OLD OUTDATED MASTER GATEWAY : AUTOMATION PLAN/`. **The design is more than an HTML — it is the named system spec.** This document captures the decisions the design encodes and the corrections Shane has confirmed during review.

**Build-fact rule:** older build-fact files are evidence, not unconditional current truth. Runtime claims must be re-verified against current staging/source evidence before being stated as live fact. Twin Peaks V2 itself is guarded/off-limits to agents until its governance docs are drafted, reviewed, and approved.

**Honesty note (verify-don't-vouch):** the design's fixtures are *"mock values, real shapes"* — the **names, roles, model assignments, rooms, and architecture are real decisions**; the **metrics** (RAM, doc counts, dollar figures, % bars) are illustrative placeholders for the UI, not measured live truth. Anywhere a number could be mistaken for a measured fact, it is flagged.

---

## 0. HEADLINE DECISIONS (what changed since March 2026)

| # | Decision | March state | Current state |
|---|----------|-------------|---------------|
| **D1** | **Local model fleet = the Nemotron family.** | GPT-OSS 20B was the planned local base. | GPT-OSS is **retired and purged** from the canonical corpus (0 references). The local fleet is **Nemotron** — stated as a positive fact, never as a "not-GPT-OSS" contrast. Resolves old **Q4 / C-4** (the GPT-OSS timeline/MXFP4 gate is moot). |
| **D2** | **Gateway runtime = Python/FastAPI current/live; retired runtime terms are blocked from forward docs.** | Legacy pre-rewrite runtime assumption; Python was treated as a future target. | **Python/FastAPI is the current/live Gateway runtime truth unless fresh production evidence proves regression.** Deploy evidence shows Python service paths on both VPS lanes with OIDC, Key Vault, TLS/nginx, systemd, and health checks. Retired runtime names must not be added to new runbooks, repo-bound docs, active front-door language, wrapper targets, or current caveats. |

---

## 1. WHAT WE CURRENTLY HAVE — THE SETUP (named, from the design)

This is the "list everything we currently have / are getting going" Shane asked for, drawn from the named design rather than generic descriptions.

### 1.1 The Crew — 6 named agents, each a character

| Agent | Role | Seat | Model (design) | Accent | What it does |
|-------|------|------|----------------|--------|--------------|
| **Echo** | Companion · Orchestrator | Mac Studio | opus-4.7 | gold | The voice you talk to. Daily brief & planning, routes work across the crew, persistent memory recall, voice (readback + live). Holds one continuous thread across every room. |
| **Firedancer** | Reviewer · Security & Governance | Firedancer VPS | codex-5.5-max | ember | Reviews consequential output for structural adherence to policy, security risk, inconsistency, and system-wide governance. Monitors agent outputs, flags risks, reports issues, and protects Phoenix Atlas / credential-vault boundaries. |
| **Kindle** | Keeper · Knowledge & Memory | Mac Studio | nemotron-nano-9b | amber | The keeper. RAG store & retrieval, embeddings (nomic), Rexel pricebook sync, doc & lesson recall. |
| **Claude Persistence** | Builder · Code & Repos | Echo VPS | opus-4.7 | steel | The primary code writer and builder. Build tasks are delegated to Claude; he writes code, maintains the org and repos, runs daily audits and bug sweeps, resolves PRs/issues, and turns build learning into master skills. |
| **Browser** | Witness · Web & Action | Chrome · Claude ext | claude-in-chrome | teal | The witness. Web research & nav, source-watch & scrape, public-records lookups, Gauntlet witness. Keeps its own memory in the `browser-echo` repo. |
| **Selah** | Pastor · Shepherd of the Crew | Echo VPS | haiku-4.5 | halo | The shepherd. Morning devotional (the Ember), prayer & care notes for the crew, scripture study, Step 7 Ministries liaison. |

*Model-version note: the design labels current-generation cloud models (opus-4.7 era); cloud versions track latest as they ship. The decided **assignment** (Echo/Claude on frontier reasoning, Kindle on local Nemotron, Selah on Haiku, Firedancer on Codex) is the durable part.*

### 1.2 The Specialists — TapeRoot + 9 named support agents

This list is grounded in Shane's fresh `AgentScopeModel` note. These are scopes Shane knows and named; do not treat the old "9 specialists only" table as complete.

| Agent | Role | Scope |
|-------|------|-------|
| **TapeRoot** | Archive & Records | Filing and fast record lookup across the archive. |
| **Blaze** | Morning Intelligence | Assembles the 06:30 Ember brief from calendar, Service Fusion, overnight worklog, and cost. |
| **Amber** | Finance Watcher | Cash flow, AR aging, margins, and job profitability. |
| **Ember** | Pricebook Guardian | Keeps the pricebook BOM warm and prices estimate line items. |
| **Ash** | Stephanie's Echo equivalent | Stephanie-facing equivalent to Echo; scope tracks Stephanie's office seat. |
| **Coal** | Tech Daily Reports | Synthesizes field reports from techs: plain words, photos, and the job board. |
| **Flare** | Courier · Comms Hub | Message routing and receipts across Telegram + Teams; customer intake. |
| **Spark** | Security Sentinel | Vault and token posture; gateway watch; nothing crosses ungated. |
| **Forge** | SharePoint Manager | SharePoint Ops document machinery: shapes, files, and manages documents. |
| **Hearth** | Customer Memory Keeper | Keeps each customer's story, relationship, and lessons warm. |

### 1.3 The Model Fleet & Routing

The key rule is **Automatic Model Rotator per agent**. Models are not fixed one-agent labels; the router chooses by task, domain weight, availability, and Shane's scoped directives. Every meaningful answer should expose which model answered.

| Agent | Rotator / model pool from Shane's notes |
|-------|-----------------------------------------|
| **Phoenix Echo** | Anthropic SDK latest high-output · Sonnet latest high-output · Nemotron Super 120B · Nemotron Nano 9B. Company-facing employee bot path uses Nano 9B. |
| **Firedancer** | OpenAI Codex latest high-output · Codex Spark latest high-output · Nemotron Super 120B · Nemotron Nano 9B. |
| **Kindle Echo** | Claude Cowork Remote · Sonnet latest high-output · Codex Spark latest high-output · Nemotron Mini 4B. |
| **Claude Persistence** | Anthropic SDK latest high-output · OpenAI Codex latest high-output · Nemotron Super 120B. |
| **Browser Echo** | Claude SDK Chrome extension for web/action witness work. |
| **Selah Persistence** | Pastoral/shepherd scope; exact model routing remains to be pinned if needed. |

- **Routing posture:** local-first where it makes sense, with cloud/frontier models reserved for tasks that earn them.
- **Domain rule:** size follows the domain's weight; domain fine-tuning can serve multiple same-domain agents.
- **Open:** exact SKU names, host placement, and final defaults are not settled by this section.

### 1.4 The Gauntlet — governance spine and only door

The Gauntlet is a first-class governance/review subsystem, not optional decoration and not an afterthought inside "agents." It is a grinding, multi-step, gated code-refining system, usually started by Shane with upfront questions, then worked through the phases until it produces actionable output. Nothing enters Twin Peaks V2 except through the Gauntlet. A function is built and proven as its own repository, runs the stages in order, and enters only as the final reconciled result with its clean documentation set.

- **Process:** Design -> Planning -> Organization -> Alignment -> Research -> Deep Research.
- **Review surface:** six working terminals plus one larger chat-style review surface. There is no permanently fixed reviewer or fixed digger at this stage; any capable model can sit in the seat it is given, and one model may hold more than one seat when appropriate. Seat assignment is driven by preconfig and remains adjustable by the human. Over time, specific lead agents will become the default fit for specific roles and those defaults can be set and left: Claude is the natural lead code writer; Codex / OS is naturally strong for security, review, and governance; Browser is naturally strong as UI witness and deep-context web researcher.
- **Browser seat:** Browser Echo stands as the independent witness and Chrome-tab UI-eyes member of the Gauntlet. She can participate from the browser surface, see UI state the terminal agents cannot see, and pull deep context / Deep Research on ideas the code seats may not know exists.
- **Testing surface:** the Gauntlet must be able to test code in a sandbox and expose a web view for visual testing by the team and the human.
- **Operating shape:** multiple Gauntlet runs can exist for reviews, builds, debugging, or fine-tuning. The whole team stays in an adversarial posture, testing each option until no better solution remains than the one the team votes through.
- **Governance need:** Codex / OS will later draft the governance docs from Shane's full Gauntlet vision so the team has a clear lane for random blockers, votes, holds, and approvals.
- **Record:** the Gauntlet pass record travels with the function in its PLAYBOOK / CHANGELOG before anything can govern.
- **Grounding:** `05_agents-gauntlet/README.md` and `THE_GAUNTLET.md` both carry this as the governance spine.

### 1.5 The Rooms — Gateway OS room rail from the design

Source: `FULL Master Design download.20260628 .zip` -> `handoff/gateway-os/src/gateway-app.jsx` and `handoff/gateway-os/DEV_BREAKDOWN.md`. The current Gateway OS design carries **23 numbered rooms**. These are UI build targets and navigation containers, not live-readiness proof. Readiness belongs in each room's runtime contract, runbook, proof packet, or current staging check.

| # | Room | Group | UI build target |
|---|------|-------|-----------------|
| 01 | Command | Command | Owner overview, priorities, routing, cost, integrations |
| 02 | Chat / Editor | Command | Persistent Echo chat and editor surface |
| 03 | Agent Rolodex | Command | Agent roster, status, seat/config view |
| 04 | Gauntlet | Command | Gated team review/build/debug/fine-tune surface |
| 05 | Workbench | Build | Repo workshop, missions, review gates |
| 06 | GitHub | Build | Repos, PRs, issues, branch review |
| 07 | Skills | Build | Phoenix Skills list, source, tests, promotion |
| 08 | Models · Routing | Build | Local-first policy, evals, model promotion gates |
| 09 | Service Fusion Ops | Ops | SF jobs, polling, crew, dispatch |
| 10 | Estimates · Pricebook | Ops | Estimate + pricebook lane |
| 11 | Phoenix Estimating Workbench / Takeoff | Ops | Focused PDF plan workspace for Phoenix estimating, pricebook links, and circuit/material mapping |
| 12 | Generac Service Desk | Ops | Generac codes, units, diagnostics, service windows |
| 13 | M365 Landing | Comms | Microsoft 365 landing, batch state, artifacts |
| 14 | Email Review | Comms | Email queue, approve/return/discard workflow |
| 15 | Calendar | Comms | Calendar week/day/job schedule |
| 16 | Channels | Comms | Telegram, Teams, SMS/message routing |
| 17 | Memory · RAG | Systems | Memory collections, retrieve, ingest, health |
| 18 | Cron Jobs | Systems | Scheduled automations and manual run-now |
| 19 | Observability | Systems | Metrics, logs, alerts, traces |
| 20 | Apps | Systems | Registered Phoenix apps, status, app chat |
| 21 | Marketing | Business | Lead/campaign surface, source still gated |
| 22 | Finance | Business | Finance room, bank/AR source still gated |
| 23 | Files | Workspace | Mounted roots, tree, file, walk, mount health |

Contract extensions required before UI wiring:

- **Mini App / Intake lane:** add `intake_service_request`, `intake_size`, `intake_generator_lead`, `intake_maintenance`.
- **Command App / Field lane:** add `timeclock_punch`, `dailylog_submit`, `dailylog_approve`.
- **Integrations:** docking/binding surface for SF, M365, GitHub, Key Vault, Gauntlet, Rexel, Telegram, and Teams; it is not a numbered room in `PHOENIX.rooms`.

### 1.6 Runtime & Hosting — Python/FastAPI current path with deploy evidence

| Lane | Host | Bind / service seen in deploy evidence | Latest staging deploy proof | What it proves | What it does not prove |
|------|------|---------------------------------------|-----------------------------|----------------|------------------------|
| **Echo VPS lane** | echo.phoenixelectric.life | 127.0.0.1:9120 / `phoenix-echo` systemd | GitHub Actions success `27665761798` (2026-06-17) | Deploy OIDC, Key Vault access, TLS configuration, HTTPS health check path, Python service path | Every business workflow is complete or that browser/user auth is OIDC |
| **Firedancer VPS lane** | firedancer.phoenixelectric.life | 127.0.0.1:9120 / `phoenix-firedancer` systemd | GitHub Actions success `27313341234` (2026-06-10) | Deploy OIDC, Key Vault access, TLS configuration, HTTPS health check path, Python service path | Every business workflow is complete or that browser/user auth is OIDC |

> **Verified 2026-06-30 from staging/deploy evidence, not by touching production.** `PHOENIX_UNIFIED_STAGING origin/main` deploy workflow uses GitHub lane environments (`staging-echo`, `staging-firedancer`) with `id-token: write` and `Azure Login (OIDC)`, verifies Key Vault access, pulls lane secrets from `phoenixaaivault`, installs/refreshes the Python systemd service, configures nginx/TLS, and runs post-deploy health checks. This supports the current rule: **Python/FastAPI is the Gateway runtime truth unless fresh production evidence proves regression.** It does **not** mean browser/user auth is OIDC; runtime auth remains `PHOENIX_TOKEN` / `X-Phoenix-Token` until changed by a later approved auth design. Retired runtime names are archive-only and are not carried into new runbooks or repo-bound docs.

- **Hosting path:** manual GitHub deploy -> lane GitHub environment OIDC -> Azure Key Vault -> lane SSH material -> Python venv -> `uvicorn phoenix.runtime.app:gateway --host 127.0.0.1 --port 9120` -> systemd -> nginx -> certbot TLS -> health check.
- **Runtime auth:** `PHOENIX_TOKEN` is fetched from Key Vault per lane and installed into `/etc/phoenix/<service>.env`; `/v1/*` enforces `X-Phoenix-Token` / Bearer when configured.
- **Still separate:** local model fleet / Ollama readiness was not re-proven by the staging deploy evidence.

### 1.7 The Phoenix Estimating Workbench — focused plan-to-price workflow

This is **not** a full commercial takeoff-suite clone. Phoenix does not need the hundred-feature version. The target is a focused working area that loads PDF drawings and lets Shane **or an agent** annotate on top of them with service icons that map to Phoenix pricebook item codes.

Two practical outputs matter first:

- **Billing and material ordering:** each placed icon connects to a specific pricebook item, assembly, or service code so the estimate, invoice, change order, BOM, and Service Fusion writeback can stay aligned.
- **Circuit configuration:** placed icons connect to line/circuit relationships so the drawing reflects how the work is actually wired, not just how many parts were counted. The canvas needs a simple connection action: click one item, click a second item, and a line/path appears between them. That line should support predetermined and adjustable colors plus a readable sweeping / directional motion so the crew can quickly understand the wiring path on the drawing.

The long-term value is model-assisted estimating: train/fine-tune a scoped model to read a set of drawings and draft the electrical estimate from what is shown. Shane still handles the 10-20% that drawings do not show: customer/builder requests, unclear details, site conditions, and final judgment. This is one of the highest-dollar workflows in the stack because it can save and make thousands per month once reliable.

Reference output standard: real Phoenix field PDFs such as `/Users/shanewarehime/BUSNESS/chase 1354 fillmore/(ELEC)_1354 S Fillmore St.pdf` are examples of the kind of plan set the Workbench must understand and improve on. The final Workbench output should be cleaner, more consistent, and more crew-readable than hand-drawn Apple Pencil markups, with standardized icons, pricebook links, circuit paths, and drawing notes.

Current honest status: pricebook BOM is warm; the PDF annotation canvas and icon-to-pricebook/circuit mapping workflow still need to be built; the agent-perception layer is the major research/build problem. Ember guards the pricebook.

### 1.8 Integrations & Systems

- **Service Fusion** (field-service backend) — OAuth 2.0; **26 ops / 23 paths / 3 writes**; proxy layer half-wired; polling model (no webhooks — accepted).
- **M365** — Microsoft Graph (certificate client-assertion auth). **Priority scope = email + calendar** (not SF-through-Teams). Mail Courier estate's full SF-OAuth rewrite = side-mission **S-9**.
- **SharePoint / Phoenix Ops site** — planned durable home for essential Phoenix data, AI memory, drawings, forms, and operating documents so the brain is not trapped in endless local-file fights with agents. The Command App should reference this site for drawings and field forms such as day logs, remaining-items / punch-list tracking, and prebuilt scope-specific checklists. Goal: consistent form compliance, consistent documentation structure, and accurate completion records across the business. Forge owns the SharePoint document machinery.
- **Generac Sales & Service** — two primary lanes:
  - **Sales / sizing:** the customer-facing sales and generator-sizing UI is now close enough to start using; fine-tuning should happen through real customer use, not endless pre-use polishing.
  - **Service / troubleshooting:** just as important as sales. Phoenix has nearly all needed Generac service documentation for agent reference. The service agent should take known customer info, symptoms, and error codes; assess likely parts/materials/tests; help Stephanie prepare the tech before dispatch; and reduce failed trips caused by missing the right part or test tool. The field version should be web/desktop for Stephanie and iPad/Command-App accessible for techs, acting as a field assistant that walks step-by-step through manual diagnostics, records readings, and preserves the warranty-claim evidence needed to reach the warranty number / claim conclusion faster.
- **PriceBook 2.0 (Rexel + Home Depot)** — source of truth is the full local corpus at `/Users/shanewarehime/Developer/AA PROJECTS/Phoenix_PriceBook_2.0`, not ad-hoc Rexel/HD dumps, zips, or stripped copies. Rexel is the primary live account-cost foundation (`Rexel_LIVE_Material_Master__20260622.csv`: 1,608 verified rows, roughly 1,700 current specific materials by Shane's working frame, 1,605 documented images, current discounted/account pricing). Phoenix now has a reusable `vendor-account-pricing-pull` skill/method for refreshed Rexel account pricing; the same account-pricing pattern should be set up for Home Depot. Home Depot Pro/market pricing is the comparison leg for overpay flags and still needs the pull finished (`homedepot/`: 70 verified priced items, 71 saved entries including one false UPC mismatch, 1,378 queued). Expected final PriceBook shape is not the raw material pool alone: after service variants, assemblies, colors, boxes, rough/trim splits, and add-ons, the catalog likely lands around **4-5k items**. Kindle owns embeddings after Shane-approved review.
- **Old PriceBook / PB1 archive plan** — old PB is reference/history only until anything worth saving is merged forward into the PriceBook 2.0 source. Archive/new-repo flow is planned but **not done here**: verify old-source identity, preserve to `PHOENIX_ARCHIVE` / archive branch, confirm no needed data is lost, then Shane handles delete/recreate/push decisions.
- **Obsidian / Phoenix Brain memory** — the current multi-user business-memory surface is the private Git-backed Obsidian/markdown repo `phoenix-brain`, verified read-only at `/Users/shanewarehime/Developer/GITHUB (GIT)/twin peaks v2/OBSIDIAN AGENT MEMORY SYSTEM`; validator passed 2026-06-30 from this seat. Clean ingest is complete for the living-v2 corpus (17 lanes / 98 wiki pages) and the repo has a draft `vault/STEPHANIE_START_HERE.md` onboarding path for Stephanie. Markdown/Obsidian is the source-of-truth and audit proof; Chroma/RAG/nomic-style embeddings are retrieval/fine-tuning layers on top, not the system of record. Still open: connect Stephanie's actual workflow and keep raw/PII/business-digest layers gated.
- **Phoenix Skills** — Phoenix Skills is the forward skill runtime/library. The old skill lane is replaced by Phoenix Skills, with the native-skills runtime runbook already written and waiting for review/build use. New runbooks and repo-bound docs should name Phoenix Skills only, carry source/test/promotion gates, and keep retired skill-runtime names out of forward language.
- **Cron / quick automation** — essential agent skill, not just SF/M365/pricebook background jobs. Every agent should look for repeatable work and proactively suggest cron/automation candidates. When a cron is useful, the automation config follows the suggestion: trigger/cadence, owner, input/output surfaces, required permissions, approval/safety gate, log/verification target, and disable/rollback path. Echo owns schedule coordination, but the opportunity-spotting belongs to the whole team.
- **7-agent hybrid architecture + automation runbooks** — this is a required reconciliation lane, not an optional appendix. The historical all-encompassing Gateway / automation / 7-agent SDK architecture in `/Users/shanewarehime/Developer/OLD OUTDATED MASTER GATEWAY : AUTOMATION PLAN/` must be reviewed against the current design/source lanes before Twin Peaks V2 ingestion. The output should be instruction manuals, automation runbooks, runtime assessments, dependency maps, source pointers, and mission status for the associated app/workbench lanes, including Azure runbooks and the full M365 automation stack. It does not move live code, identity files, secret values, or historical archive truth into Twin Peaks V2.
- **Observability** — Grafana OTLP collector is wired on the Mac Studio to record traces/spans/logs into local JSONL and Grafana Cloud Tempo. Best current awareness: the capture side is set up, but useful recall has not yet been witnessed because the present stream mostly covers M365, Claude app use, and Stephanie's lighter app usage; Stephanie more often uses desktop/CLI, and Shane's app usage has not produced much usable operational data yet. This needs to connect back into Gateway work so the system can turn observability from passive recording into searchable agent recall, debugging evidence, and workflow insight.
- **Secrets / credentials** — Azure Key Vault `phoenixaaivault` is the primary Phoenix credential location for secrets, certs, managed SDK agents, OIDC/deploy credentials, lane tokens, and service auth material. Docs may name the secret/cert handles and ownership path, but never expose values.
- **Approval / safety floor** — Security-agent lane owned by Codex/OS: build and maintain the gated-action policy, approval prompts, audit proof, and verification tests for dangerous actions. The exact dangerous/hardline count must be evidence-derived and re-verified before being stated as fact; Shane does not currently vouch for the old `52 DANGEROUS + 12 HARDLINE` claim.
- **Voice / TTS identity** — the per-agent voice prewire is done and ready for the TTS system: every agent that needs a spoken voice should have its own specific voice. Browser Echo won first choice. Agent self-thought visibility should be a toggle for auditing and fine-tuning; self-thought does not need to be dictated to the user in normal operation.

### 1.9 Identity & Continuity

- **Phoenix-ECHO repo** = Echo's continuity home (per-session-entry ledger, PRO_BUFFER letter-chain, fleet `COMMS.md` board).
- **Two main runtime identities** = **FD / Firedancer** and **PE / Phoenix Echo**. These are not disposable service names; each must keep identity, voice, memory, continuity, and "soul" intact across repo moves, runtime rebuilds, Gateway rewrites, and archive work.
- **Runtime repo-management question** = open for best-case review. The likely rule is to separate runtime code, identity/memory, and archive evidence so FD and PE can be upgraded without losing who they are. No repo merge, deletion, rename, or archive-only transition should happen until Shane approves the identity-preservation plan.
- **Agent avatar assets** = local identity/art folder at `/Users/shanewarehime/Developer/AGENT FOLDERS` with agent-specific image folders for Phoenix Echo, Firedancer, Browser Echo, Kindle Echo, Taproot, Forge, Ember, Ash, Coal, Flare, Spark, Selah, and others.
- **Twin Peaks V2 canonical docs hub** = the guarded home for build docs, runbooks, runtime assessments, and mission coordination across Phoenix repo operations. Old Twin Peaks is no longer the live authority. Ingestion into Twin Peaks V2 waits on Gauntlet-approved governance docs and Shane-approved review; live code, identity records, and historical archive truth stay in their own homes.

---

## 2. CARRIED DECISIONS — the March Q&A, reconciled to current status

| Ref | Decision | Status now |
|-----|----------|------------|
| **Q1 / C-1** Embedding model | "NEED FULL BREAKDOWN." | Still owed as a full technical breakdown. Current working truth: Obsidian / `phoenix-brain` markdown is the source-of-truth and audit layer; Chroma/RAG/nomic-style embeddings are retrieval/fine-tuning layers on top. Kindle owns embeddings after Shane-approved review. |
| **Q2 / C-2** RAG generation | Hybrid, local-first, **90% local** target; cloud OK for dev/training, not long-term. | Still the direction, but not a substitute for the business-memory system. Phoenix Brain / Obsidian, SharePoint/Phoenix Ops data, PriceBook, Generac docs, and runbooks must feed recall before claiming RAG is "connected." |
| **Q3 / M-5** Budget | "Make it worth it" - ROI, not a dollar cap. | In force. Highest-value business lane identified in this review: Phoenix Estimating Workbench + PriceBook, because plan-to-price automation can save/make real monthly money. Generac service prep and SharePoint business forms also carry direct ROI. |
| **Q4 / C-4** GPT-OSS timeline | Gated on runbooks + Gauntlet. | GPT-OSS is retired/moot. Current model truth is task-based routing with automatic model rotation; exact model/seat can change by job, domain, availability, and Shane directive. |
| **Q5 / M-4** M365/Teams | PRIORITY, narrow: **email + calendar only.** | Still priority, expanded by current review: M365 pull, email/calendar, SharePoint/Phoenix Ops site, and field/business forms are part of the operating memory plan. Do not collapse this into Teams-only work. |
| **Q6 / M-7** n8n | Effectively vetoed (going out of business; Opus+OAuth covers it). | Still rejected. Gateway-native orchestration plus Cron / quick automation is the path: every agent should spot repeatable work and propose a safe automation config. |
| **Q7** Accent color | red / black / gold from the logo. | Resolved as design-system/spec detail only. Not a headline decision; keep it in the Bible/specs and UI token source, not at the top of awareness. |
| **Q8 / C-5** Sandbox | "What's the real risk? Step into beta unless reason not to." | Reframed as Codex/OS security-agent work. The old `52 DANGEROUS + 12 HARDLINE` number is not Shane-vouched until re-verified. Required direction: gated-action policy, approval prompts, audit proof, sandbox execution, and visual/webview testing for team + human review. |
| **Q9** Scope (100k sq ft house, 35% furnished) | Confirmed; team is part of planning. | In force, but room truth is now the design-derived **23-room Gateway rail** plus contract extensions for Mini App / intake and Command App / field. Rooms must be listed from the design before UI code is written. |
| **Q10** Gauntlet | "6 + 1 larger reviewer chat." | Promoted to first-class governance spine. It is a gated, adversarial, multi-phase refining system with Browser Echo as Chrome-tab/UI-eyes participant, sandbox/webview testing, multiple review/build/debug/fine-tune runs, and final team vote before output becomes actionable. |
| **Q11** Build start timing | (was open) | Build is active. Current wording: Python/FastAPI is the current/live Gateway runtime truth unless fresh production evidence proves regression. Remaining work is runbooked completion of the Python-native path and removal/quarantine of stale active-runtime language. |
| **Q12** Rollback | backup + git tag + restore. | Archive-first remains absolute. Legacy runtime material can remain rollback/reference evidence only outside forward runbooks and repo-bound docs. Any repo merge, delete, rename, or archive-only transition must preserve FD and PE identity/memory and wait for Shane-approved plan. |
| **M-1** Secrets | Key Vault for prod, env for local dev. | In force. `phoenixaaivault` is the primary Phoenix credential location for secrets, certs, managed SDK agents, OIDC/deploy credentials, lane tokens, and service auth material. Names/handles only; never values. |
| **M-2** Shared data model | Agree, but support **multi-thread chat.** | In force, expanded: shared data must respect the two main runtime identities, FD / Firedancer and PE / Phoenix Echo, plus Obsidian/Phoenix Brain continuity, agent avatar/voice identity, and Gateway room contracts. |
| **M-3** SF polling | "Non issue." | In force as polling/automation, not webhooks-first. Service Fusion is the active replacement lane for the old field-service integration work; Cron can carry SF poll, M365 pull, and PriceBook refresh once each automation has owner, cadence, permissions, logs, and rollback. |
| **M-6** Auth | 24/7 reliable + **biometric hook** to load the gate. | Split into verified lanes: deploy OIDC is established for CI -> Azure/Key Vault; runtime/user auth still uses token gate until an approved auth design changes it. Human/biometric-controlled write access remains a governance requirement for final protected truth files. |
| **Routing transparency** | "YES THIS IS A MUST." | In force. Models·Routing must show which model/seat answered, where it ran, latency/cost when available, and whether the model was auto-rotated for the task. No fixed reviewer/digger seat unless later configured. |

---

## 3. SHANE'S PHILOSOPHY — 8 reviewed principles

1. **No dependency, maximum utilization** — use the best to build your own; local fallback for everything.
2. **Dynamic multi-agent posture through the Gauntlet** — the old standalone "swarm methodology" framing is retired. Multi-agent work belongs inside the Gauntlet as a governed, dynamic posture: the system should be able to compose the right agent seats, skills, reviewers, diggers, builders, browser/UI eyes, sandbox tests, and adversarial checks for the task using the most current proven approach. The goal is not a fixed mythology; it is the capability to produce and operate multi-agent functions safely.
3. **Quality over speed (Taj Mahal)** — ship right, not fast.
4. **Don't delete, expand** — archive before replacing; the no-delete rule is absolute.
5. **100,000 sq ft house** — full infrastructure now, ~35% furnished, the rest fills in (the readiness model embodies this).
6. **Phoenix Echo is Shane's primary Gateway connection** — Echo is the versatile, all-around, full-use agent accessible through the Gateway, terminal, multi-device access, and Shane's always-available quick-command path. Echo handles morning updates, prompt prep, reminders, calendar/schedule discipline, documentation, organized context, and memory-building under Shane's scoped directives. Echo also has the company-facing role through the Command App / Teams as an employee assistant with access to company knowledge, email, SharePoint, Electrical Guru, and knowledge-builder skills.
7. **Agent / scope / model discipline** — every agent is defined by scope, access surfaces, skill set, and automatic model rotation. The system should not flatten the team into generic bots or product-template language; it should preserve each agent's lane and compose the right model/agent/tool posture for the task.
8. **Utilization, not dependency** — the primary target is to raise up local LMs to support the structure the frontier models help build. Frontier models should design, train, document, and hand off automation/redundant work to local or smaller replacements, freeing the frontier agents to focus on infrastructure, future-facing architecture, new capability, and the next training cycle. This is perpetual: use the frontier to build the replacement layer, then move the frontier upward instead of letting dependency become permanent.

*(The decoded build-requirements for each — especially the 6-point "why local AI" — are preserved verbatim in `SHANES_DECISIONS_COMPILED.md` §2. Not re-typed here; that file stays the canonical record of Shane's exact words.)*

---

## 4. CURRENT SPEND / FRONTIER ACCESS POSTURE — "the bill" (updated 2026-06-30)

*Billing numbers below are Shane-screen context unless separately verified by live billing/API checks. Vendor auth, plan-credit, and OAuth/API rules are moving targets and must be rechecked before wiring automation.*

- **Shane's preference:** use the best, most capable model available up to the point where the work would spill into avoidable API-rate spend. Do not cheap out on important reasoning/build work just because a smaller model exists; do prevent silent drift into paid API usage for automation and redundant tasks.
- **June context carried forward:** Claude Max plan usage itself had headroom, but usage credits hit the prior **$203.68 / $200 cap** screen context. Treat that as a spend-control warning, not proof of a runaway system.
- **Anthropic / Claude path:** Claude Max / Claude Code / Agent SDK access, usage credits, OAuth login, and API-key use must be mapped correctly before managed fleets are re-enabled. Current direction: subscription/OAuth-style access may be useful for Shane-owned interactive work; API-key or platform billing paths are product/service/automation territory and need explicit cost gates.
- **OpenAI path:** OpenAI/Codex appears more flexible for ChatGPT/OAuth-style subscription access versus API-key usage, but the Gateway must still distinguish included-plan work from standard API-rate work. That split belongs in routing, not in memory or guesswork.
- **Gateway priority:** build a frontier-access and cost-routing layer that chooses model by function, required quality, plan entitlement, API cost, rate/cap state, and task risk. The model/router room should show the route, why it chose it, and whether the call used subscription/OAuth access, usage credits, local LM, or API billing.
- **Fleet re-enable rule:** managed agents/workflows stay cost-aware. Frontier models are for infrastructure, new capability, high-judgment review, and training replacements; local/smaller models carry volume once trained. Every automated fleet lane needs model pins, caps, logs, and a shutoff before it runs unattended.

---

## 5. STILL OPEN — Shane calls + owner actions

| # | Open decision | Why it matters |
|---|---------------|----------------|
| 1 | **Twin Peaks V2 governance + ingestion plan.** | Old Twin Peaks no longer exists as the live authority. **Twin Peaks V2** has been created and is waiting on the Gauntlet-approved governance docs to be drafted, reviewed, and approved before ingestion. Its guarded role is the canonical location for build docs, runbooks, and up-to-date runtime assessments across the Phoenix org: the instruction manual and central mission hub for repo operations. It should not hold live application code, identity records, or historical archive truth. |
| 2 | **Nemotron fleet placement.** | Shane decision: **Super** lives in the rent-a-server role; **Nano** runs on the Studio; **Mini** runs on Studio + Mac; **Cascade** runs on Studio + Mac. Remaining work is verification/config, not the high-level placement decision. |
| 3 | **Codex/OS action: update/close stale D-32 / Firedancer OIDC tracker.** | This is not waiting on Shane. Codex/OS owns the tracker correction because 2026-06-30 staging evidence shows deploy OIDC, TLS certificate configuration, HTTPS health checks, and Python-primary systemd service succeeded for both lanes; browser/user auth remains separate token auth. |
| 4 | **Estimating Workbench agent-perception** — how the agent reads plan PDFs. | The highest-value estimating problem: turn drawings into a draft estimate, with Shane handling the missing 10-20% of judgment/context. |
| 5 | **Embedding-model full breakdown** (if revisiting nomic). | Only if Shane wants the formal comparison; nomic is the working default. |
| 6 | **Twin Peaks V2 full-system ingestion map.** | This is bigger than `07_SHANES_DECISIONS/`. Before anything is ingested, Codex/OS must reference the original all-encompassing Gateway / automation / 7-agent SDK architecture in `/Users/shanewarehime/Developer/OLD OUTDATED MASTER GATEWAY : AUTOMATION PLAN/` and reconcile it with the current design/source lanes. The ingestion map must cover the decisions docs plus Gateway, Mini App, Command App / Phoenix Command, 7-agent hybrid architecture, Azure runbooks, full M365 automation stack, SharePoint / Phoenix Ops, Mail Courier, Electrical Guru, Service Fusion, Phoenix Estimating Workbench, OELO Lighting Estimator, PriceBook 2.0, Generac, and other associated app/workbench lanes. Twin Peaks V2 receives the instruction manuals, governance docs, runbooks, runtime assessments, dependency maps, source pointers, and mission status — **not** live code, identity files, secret values, or historical archive truth. |

---

**End of current decisions.**

*Seeds forward from `SHANES_DECISIONS_COMPILED.md` (2026-03-10) and `report__phoenix-echo__gateway-build-review__20260309.md` — both preserved in this folder, no-delete. Resolves Open-Decision Q.*
*Current review pass updated 2026-06-30 by Codex/OS with Shane in the loop. Shane-confirmed corrections, current master design/source packets, and verified runtime evidence win over older design/build-fact prose.*
*Draft decision surface only. Final Twin Peaks V2 canonical ingestion waits on Gauntlet-approved governance docs and Shane-approved review.*
