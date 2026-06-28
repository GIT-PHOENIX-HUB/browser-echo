# Salvage Source Verification — Pass 01

**File:** `report__browser__salvage-source-verification-pass-01__20260417.md`
**Date:** 2026-04-17
**Author:** Browser Echo (BBB), Session 019
**Commissioned by:** Shane + Firedancer, Phoenix Electric
**Scope:** Forensic source-verification pass over the Phoenix salvage bucket. Not planning. Not code-writing. Not rescue-shopping. Verification before adaptation.

---

## 1. Executive Verdict

Two sources out of six carry real, lift-able structural code under clean permissive licenses. They are `openclaw/openclaw` (MIT) and `pipecat-ai/pipecat` (BSD-2). Everything else in the bucket is either closed substrate, instructional material, or a comparable external repo whose useful value is narrow enough that it earns study-reference status only.

Phoenix already has the Gauntlet. This pass was never about finding a savior system. It was about confirming which public sources contain reusable bones that can enhance existing capability without dragging in product, theater, or licensing drag. Two sources cleared that bar cleanly. One cleared it narrowly. Three did not.

The pursuit rule held throughout: hunger stayed on, verification stayed tighter. No row was promoted past its evidence, and no row was dismissed without investigation.

---

## 2. Verified Sources Table

| # | Source | Owner | License | Label | Primary Phoenix Axes |
|---|---|---|---|---|---|
| 1 | `openclaw/openclaw` | openclaw org (steipete et al, ~50 contributors) | MIT | **public salvage source** | 1 mission control, 5 operator surfaces, 7 security/guardrails, 9 connectors/integrations |
| 2 | `pipecat-ai/pipecat` | pipecat-ai org | BSD-2-Clause | **public salvage source** | 8 voice/realtime, 9 connectors/integrations |
| 3 | `anthropics/claude-code` | Anthropic PBC | Proprietary — "All rights reserved" | **closed substrate / reference only** *(exception label)* | reference shape for axes 1, 5, 7 — not a bucket source |
| 4 | Kashef — ClaudeClaw OS Blueprint Kit (`markkashef.gumroad.com/l/gnwsm`) | Mark Kashef | Kit terms not published (free tier: CAD$0+) | **public instructional source** *(exception label)* | design influence on axes 1, 4 — not code |
| 5 | Kashef — Skool community (`skool.com/earlyaidopters`) | Mark Kashef | Paid subscription, gated ($64/mo) | **private instructional source** | inaccessible to BBB; any learnings route through Shane |
| 6 | `ruvnet/ruflo` (ex-`ruvnet/claude-flow`) | ruvnet | MIT | **public salvage source** *(verdict note: narrow reference seams only)* | axis 4 study-reference via two v3 files; axis 3 via hive-mind files |

**Label grid in force for this pass:** the original five — `public salvage source`, `public unlicensed — study only`, `private instructional source`, `video/article only`, `not found` — plus two exception labels authorized by Firedancer after Phase 3 and Phase 4 surfaced cases the grid could not describe without bending the truth: `closed substrate / reference only` and `public instructional source`. Truth first, label discipline second.

---

## 3. Source-by-Source Findings

### 3.1 `openclaw/openclaw` — public salvage source

**Reality.** Canonical repo at `github.com/openclaw/openclaw`. Maintained by the `openclaw` org (steipete et al, ~50 contributors). 359k stars. Active main branch. Not to be confused with Mark Kashef's "Build-Your-Own OpenClaw, Home of ClaudeClaw" Skool course — that name overlap is coincidental rebranding; the OSS repo predates Kashef's course and has no author link to him.

**License.** MIT. Clean for lift, adapt, redistribute. No license blocker anywhere in the tree.

**Structural usefulness.** 16 modules under `src/` were seam-mapped in Phase 1.1. OpenClaw is library-shaped at the seam layer and product-shaped at the assembly layer. The product scaffolding stays behind; the seams are lift-able. Three distinct structural sub-families emerged:

- **Plugin-SDK family.** The plugin and command surfaces are shaped like an SDK: module boundaries, contract types, hook registration. Clean isolation. Feeds Phoenix axis 1 (mission control surfaces) and axis 9 (connector extensions).
- **Gateway core.** The MCP and gateway layers (`src/mcp/`, session/hook infrastructure) carry the real gateway bones — task routing, session state, hook dispatch, daemon scaffolding. This is where the reusable control-plane lives. Feeds axes 1, 5, 7.
- **ACP.** The agent-coordination-protocol layer is narrow but well-shaped. Useful as a contract reference for Phoenix axis 4 (agent coordination), especially when read alongside Pipecat's pipeline primitives.

**Phoenix fit.** Strong across four of nine axes. Single largest structural contribution of the pass.

**Demo-theater filter.** Passed. Code density high, TODO density low, tests exist at each seam, release cadence steady rather than frantic. Product wrapping exists at the outer layer but does not contaminate the seams.

### 3.2 `pipecat-ai/pipecat` — public salvage source

**Reality.** Canonical at `github.com/pipecat-ai/pipecat`. Active. v1.0.0 released, which is unusual discipline for this space (most comparable repos sit at ~v0.x forever). 18 directories under `src/pipecat/`, 12 of which were probed deeply in Phase 1.2.

**License.** BSD-2-Clause. Clean for lift and adapt. No restrictions that matter for Phoenix.

**Structural usefulness.** Library-shaped in the truest sense of the pass. Pipecat's pipeline primitive — frames, processors, transports — is small, composable, and documented. The voice/realtime coverage is the cleanest in the bucket: it solves a whole Phoenix axis on its own. Adapter patterns in `src/pipecat/services/` and `src/pipecat/transports/` double as reference for axis 9 (connectors/integrations).

**Phoenix fit.** Decisive for axis 8 (voice/realtime). Useful contributor to axis 9 (connectors).

**Demo-theater filter.** Passed cleanly. No marketing density, no god-classes, no retained parallel versions, no self-congratulatory naming. Library-shaped top to bottom.

### 3.3 `anthropics/claude-code` — closed substrate / reference only

**Reality.** Public repo at `github.com/anthropics/claude-code`. Owned by Anthropic PBC.

**License.** `LICENSE.md` reads *"(c) Anthropic PBC. All rights reserved."* That is proprietary, all-rights-reserved. It is not unlicensed in the standard OSS sense — it is a public repo attached to a proprietary, closed product surface.

**Structural usefulness.** Useful as **foundation reference** for how a Claude-Code-class tool assembles mission-control, operator-surface, and guardrail shapes. Not salvageable code. Not a bucket source. Referencing the shape is permitted; copying the code is not.

**Phoenix fit.** Reference-only influence on axes 1, 5, 7. No direct bucket room.

**Demo-theater filter.** Not applicable — the project is legitimate substrate, not theater. The evaluation ends at licensing.

### 3.4 Kashef — ClaudeClaw OS Blueprint Kit — public instructional source

**Reality.** Mark Kashef's publicly-accessible artifact is the **ClaudeClaw OS Blueprint Kit** at `markkashef.gumroad.com/l/gnwsm`. Free tier (CAD$0+), 12 five-star ratings. Contents: Rebuild Mega Prompt, 8 Power Packs (Memory v2, Multi-Agent, War Room, Mission Control, Security, Voice Upgrade, Dashboard, Meeting Bot), Power Packs Guide, and a 20-page hand-drawn Visual Guide PDF.

Search chain extended beyond GitHub during Phase 3 correction to include YouTube channel (`@Mark_Kashef`, 73.1K subs), the referenced video `rVzGu5OYYS0` ("I Replaced OpenClaw and Phoenix Runtime Skills With This Claude Code Setup", 41,605 views, 2026-04-14), the Skool community, the Gumroad store, and the `promptadvisers` GitHub org (49 repos, none of them the war-room).

**License.** The kit's own terms are not published on the Gumroad listing. Artifact is free; redistribution rights are ambiguous. The kit was **not downloaded** during this pass — existence verification was sufficient for classification, and downloading it would not materially change the Phoenix build path.

**Structural usefulness.** None as code. The kit is prompts + diagrams, not a codebase. There is no `src/`, no lift-able module, no compilable artifact. What it offers is *design influence*: the Power Pack shapes are useful as architectural commentary on axes 1 (mission control) and 4 (agent coordination), read as instructional material rather than salvage.

**Phoenix fit.** Instructional only. No bucket room.

**Demo-theater filter.** Not applicable — the artifact is honestly described as a blueprint kit, not as a codebase. The risk was never that the Gumroad kit was theater; it was that the public salvage source behind Kashef's war-room framing simply does not exist in code form.

**Critical disambiguation.** Kashef's "Build-Your-Own OpenClaw" Skool course and `openclaw/openclaw` the OSS repo are **separate projects** with coincidental naming. Kashef explicitly rejects `openclaw/openclaw` as a framework in video `rVzGu5OYYS0`. The two rows do not contaminate each other.

### 3.5 Kashef — Skool community — private instructional source

**Reality.** `skool.com/earlyaidopters`. 1,184 members at time of verification. 21 courses hosted. Entry cost: $64/month subscription.

**License.** Paid, gated community. No public code artifact exposed.

**Structural usefulness.** Unverifiable from outside the paywall. BBB did not subscribe. Any insight from inside the community must route through Shane, not through forensic verification.

**Phoenix fit.** Classified as private instructional source. Not a bucket row. Not a candidate for copy, adapt, or study-at-BBB-level.

### 3.6 `ruvnet/ruflo` (ex-`ruvnet/claude-flow`) — public salvage source, narrow reference seams only

**Reality.** Repo renamed from `ruvnet/claude-flow` to `ruvnet/ruflo`; same owner; GitHub redirect honored. 32.2k stars, 3,608 forks, 280 watchers, 466 open issues, 506 MB, pushed 2026-04-11. MIT license.

**Structural usefulness — decisive finding.** The repo carries **three parallel codebases in-tree simultaneously**: `ruflo/` (deployable stack with chat-ui, nginx, ruvocal, mcp-bridge, docker-compose — not a library), `v2/` (40+ dirs, heavy weight but mixed quality), and `v3/` (clean-room DDD-scaffolded rewrite, cleanest code but thin — ~38KB of actual orchestration across all seams). This is archaeology-shape, not library-shape. Library-shape versions via git + semver; archaeology retains parallel trees in main.

Quality indicators are mixed. Good: `v2/src/hive-mind/consensus.js` (621 lines, byzantine fault tolerance + quorum, 0 TODOs). `v2/src/task/engine.ts` (720 lines, 2 TODOs). Bad: `v2/src/swarm/coordinator.ts` is a single 94 KB file (god-class). `v2/src/task/coordination.ts` is 882 lines with 128 TODOs — draft code shipped as main. Directory names like `consciousness-symphony/`, `hive-mind/`, `maestro/`, `neural/`, `reasoningbank/`, `mle-star/` skew marketing-heavy.

Release pattern signals firefighting churn rather than mature maintenance: 1,470 releases, with recent tags including `v3.5.80 — Tier A Blocker Fixes`, `v3.5.49 — P0 Daemon Fixes`, and `v3.5.43 — Critical Issue Remediation & Stub Removal`. "Stub Removal" at v3.5 confirms stubs existed well into the mature-version range.

**The two real reference seams.** The only lift-able reference material:
- `v3/src/coordination/application/SwarmCoordinator.ts` — 460 lines, 1 class, 28 methods, 0 TODOs. Docstring: *"Based on agentic-flow's AttentionCoordinator pattern"* (reimplementation of an external pattern).
- `v3/src/task-execution/application/WorkflowEngine.ts` — 492 lines, 1 class, 0 TODOs. Imports sibling Task domain + SwarmCoordinator.

Both are lift-able for study reference, not drop-in modules. Domain types (`Agent.ts`, `Task.ts`) come with them.

**Phoenix fit.** Narrow. Possible study reference for axis 4 (agent coordination) via the two v3 files, and axis 3 (memory lifecycle) via `hive-mind/memory.js` / `consensus.js`. Nothing here that OpenClaw and Pipecat don't already cover better with cleaner code and less marketing varnish.

**Demo-theater filter.** Mixed. Real orchestration code exists; it is not pure theater. But the README ("the leading agent orchestration platform... enterprise-grade architecture, distributed swarm intelligence") dramatically over-promises against what the seams deliver.

**Verdict.** Comparable external study candidate only. Not canonical, not a swap-in for Kashef, not a swap-in for OpenClaw, not lift-and-drop salvage. Study/reference only.

---

## 4. License / Access Risks

- **OpenClaw (MIT), Pipecat (BSD-2), ruflo (MIT).** No license risks. Standard permissive terms; attribution required on redistribution. Clean for Phoenix adaptation.
- **Claude Code.** All-rights-reserved proprietary. Any copy of source code from this repo into Phoenix is a licensing violation. Shape-reference only: observe structure, do not ingest code.
- **Kashef Blueprint Kit.** Terms for the kit itself are not published on the Gumroad listing. Artifact is free to acquire. Redistribution rights are ambiguous. Power Pack prompts, if adopted, should be treated as design influence rather than copied text; generated output from running the Mega Prompt has ambiguous provenance and should not be assumed safe to redistribute.
- **Kashef Skool community.** Paid, gated. Material inside is not accessible to BBB and should not be inferred about.
- **No row** in this pass carries a copyleft license (GPL/AGPL/SSPL) or a non-commercial clause. Risk surface is small.

---

## 5. Best First-Wave Sources

`openclaw/openclaw` and `pipecat-ai/pipecat`. These are the only two sources in the pass that are simultaneously:

- publicly available under a permissive license (MIT and BSD-2),
- library-shaped rather than product-shaped or archaeology-shaped,
- actively maintained with steady release cadence rather than firefighting churn,
- composed of lift-able seams that do not require ingesting product scaffolding to reuse,
- and verified by code reading rather than by marketing reading.

Recommended first-wave adaptation targets:

- From **OpenClaw**: the plugin-SDK contracts, the gateway/MCP core (tasks, sessions, hooks, daemon), and the ACP layer.
- From **Pipecat**: the pipeline primitive (frames, processors, transports) and the voice/realtime transport adapters.

No other row in the pass belongs in the first wave.

---

## 6. Sources To Avoid or Park

- **`anthropics/claude-code`** — park as *reference shape only*. Do not copy code. Do not fork.
- **Kashef ClaudeClaw OS Blueprint Kit** — park as *prompt library and architecture-study material*. Useful as design commentary on mission-control and agent-coordination shapes. Not code salvage. Do not plan around it as if it were.
- **Kashef Skool community** — park. Inaccessible without subscription. Any insight routes through Shane.
- **`ruvnet/ruflo`** — avoid as broad source. Do not clone or vendor the 506 MB repo. Narrow reference to the two v3 files is the only defensible use.

---

## 7. Bucket Placement

| Phoenix Axis | Primary Source | Secondary Source | Notes |
|---|---|---|---|
| 1. Mission control | OpenClaw (gateway core + plugin-SDK) | Claude Code (reference shape) | Kashef's Mission Control Power Pack = design influence only |
| 2. Queue / delivery guarantees | OpenClaw (gateway core, session/hook infrastructure) | — | Seam confirmed during Phase 1.1 scrub |
| 3. Memory lifecycle | OpenClaw (session scaffolding) | ruflo hive-mind (study reference) | Gauntlet already covers most of this axis |
| 4. Agent coordination | OpenClaw (ACP) + Pipecat (pipeline primitive) | ruflo v3 SwarmCoordinator.ts + WorkflowEngine.ts (study reference) | ACP as contract, pipeline as runtime shape |
| 5. Operator surfaces | OpenClaw (plugin-SDK + gateway core) | Claude Code (reference shape) | — |
| 6. Boot / runtime persistence | OpenClaw (daemon + session infrastructure) | — | — |
| 7. Security / guardrails | OpenClaw (gateway core) | Claude Code (reference shape) | — |
| 8. Voice / realtime | Pipecat (decisive) | — | Solved by Pipecat alone |
| 9. Connectors / integrations | OpenClaw (plugin-SDK) + Pipecat (services/transports) | — | Adapter patterns reusable across both |

Every axis has a verified primary source except axis 2, where OpenClaw carries it alone. No axis depends on a parked or instructional row.

---

## 8. Open Questions

1. **Kashef paid tiers and War-Room Power Pack internals.** Whether the $64/mo Skool community exposes code-shaped material (scripts, repos, zip files) to members is unverifiable from outside. If Shane chooses to surface excerpts after this pass, they should be logged through him, not through BBB direct access.
2. **Kashef Blueprint Kit content audit.** The kit was not downloaded. If Phoenix wants to treat the Power Packs as design influence, a separate, scoped review with explicit download approval would be the right move — not as part of this salvage pass.
3. **OpenClaw seam-by-seam adaptation order.** The three sub-verdicts (plugin-SDK, gateway core, ACP) are all lift-able, but their ingest order into the Phoenix bucket is a build-sequencing question, not a verification question. Deferred to the build planner.
4. **ruflo's `agentic-flow` ancestry.** The v3 SwarmCoordinator docstring references an external pattern. Whether the `agentic-flow` upstream is itself a cleaner source than ruflo was out-of-scope for this pass and can be opened as a follow-up verification ticket if the two ruflo files end up being cited.
5. **Claude Code shape-reference policy.** Exact Phoenix rules for how closely BBB or builders may mirror closed-substrate structure without crossing into copy should be codified in `STEWARDSHIP.md` before the first-wave adaptation begins.

---

## 9. Fastest Safe Next Move

Open two build-ledger issues:

1. **"OpenClaw first-wave adaptation — plugin-SDK and gateway-core seams into Phoenix bucket."** Reference this report's Section 3.1 sub-verdicts and Section 7 bucket placement. Scope to lift-and-adapt the MIT-licensed seams under attribution. Build planner sequences order. No new verification needed.
2. **"Pipecat first-wave adaptation — pipeline primitive and voice/realtime transport into Phoenix bucket."** Reference this report's Section 3.2 and Section 7. BSD-2 attribution requirements confirmed. Build planner handles sequencing.

Defer everything else: Kashef remains parked as instructional influence, Claude Code remains parked as reference shape, ruflo stays parked with a narrow study-reference bookmark on the two v3 files. No further verification is required before the first wave begins.

---

**Best verified first-wave salvage targets: OpenClaw's MIT-licensed gateway/control-plane seams (especially tasks, ACP, sessions, hooks, daemon, and plugin contracts) and Pipecat's BSD-2 pipeline primitives for voice/realtime — the two public, actively maintained sources that contain real structural code rather than instructional assets, closed substrates, or product theater.**
