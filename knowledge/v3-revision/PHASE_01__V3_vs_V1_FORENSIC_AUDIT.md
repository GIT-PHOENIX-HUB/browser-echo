# Phase 01 Forensic Audit - V3 Runbook vs V1 Gateway

Date: 2026-03-29
Scope: Twin Peaks Phase 01 Gateway UI
Source runbook: `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/twin-peaks/05_RUNBOOKS/PHASE_01_GATEWAY_UI.md`
Supporting docs:
- `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/twin-peaks/06_PLAYBOOKS/PHASE_01_PLAYBOOK.md`
- `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/twin-peaks/MASTER_ROADMAP.md`
- `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/twin-peaks/07_SHANES_DECISIONS/SHANES_DECISIONS_COMPILED.md`
Live code compared:
- `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src`

## What V3 Specifies

- A three-panel command center UI: persistent left chat, center tab-routed workspace, hidden-by-default right tools panel. Existing page surfaces survive, but the shell and interaction model are rebuilt. See `PHASE_01_GATEWAY_UI.md:31`, `PHASE_01_GATEWAY_UI.md:90`, `PHASE_01_PLAYBOOK.md:544`.
- A client architecture with dedicated UI managers: `PanelManager`, `WSManager`, and `ChatManager`, plus strict UI rules around SVG icons, mandatory `cleanup()`, unified CSS, and no blur/backdrop filters. See `PHASE_01_GATEWAY_UI.md:191`, `PHASE_01_GATEWAY_UI.md:547`, `PHASE_01_GATEWAY_UI.md:763`, `PHASE_01_GATEWAY_UI.md:1329`.
- The backend contract is intentionally stable in this phase: API endpoints, WebSocket server, auth flow, and config files are supposed to remain unchanged while the UI shell is rebuilt. See `PHASE_01_GATEWAY_UI.md:191`.
- V3 still expects visible routing/provider transparency, multi-thread/channel awareness, accessibility, responsive layouts, and a right-panel operational surface. Cross-doc requirements strengthen this beyond the core runbook. See `MASTER_ROADMAP.md:125`, `MASTER_ROADMAP.md:129`, `SHANES_DECISIONS_COMPILED.md:320`, `SHANES_DECISIONS_COMPILED.md:408`.

## What V1 Currently Has That Maps To It

- V1 already has the underlying gateway runtime that Phase 01 expects to sit on top of: `/dashboard`, `/ws`, `/api/providers/status`, `/api/dashboard/overview`, `/api/sessions*`, `/api/logs`, `/api/runbooks`, and related ops/status APIs. See `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/index.js:405`, `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/index.js:425`, `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/index.js:472`, `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/index.js:671`, `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/index.js:916`, `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/index.js:1183`.
- V1 already exposes session and history plumbing that a rebuilt UI could consume, including branch/fork/switch/merge support at the `SessionManager` level. See `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/session.js:500`, `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/session.js:570`, `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/session.js:613`.
- V1 already has live channel surfaces and status plumbing for WhatsApp, Telegram, Teams, and cron. See `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/channels-integration.js:35`, `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/channels-integration.js:98`, `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/channels-integration.js:126`, `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/channels-integration.js:165`.
- V1 already has a provider/router substrate and a static UI served from `public/`. See `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/model-router.js:116`, `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src/index.js:349`.

## What Is New In V3

- The three-panel shell and tab-routed workspace are new. V1 currently serves a static dashboard shell; V3 defines the new UI operating model.
- The dedicated UI managers are new. V1 has a backend WebSocket server and API surface, but Phase 01 introduces a structured client runtime for layout, websocket handling, and chat state.
- Routing transparency in the UI is stronger in V3 than in V1. V1 exposes provider health/status, but V3 wants per-response model/provider/latency transparency and a more intentional operator surface.
- Multi-thread/channel-aware chat presentation is stronger in V3. Shane’s decisions require thread/channel identity from day one, while the Phase 01 chat message shape is still mostly single-stream.

## What V1 Has That V3 Replaces

- V1’s generic dashboard and status surfaces are the legacy shell V3 intends to replace with the command-center layout.
- V1’s current UI is largely read-only and operationally generic. V3 replaces that with a more deliberate workspace, tools panel, and chat-first control surface.
- V1’s routing transparency is mostly indirect through `/api/providers/status`. V3 replaces that with a visible, user-facing decision surface.

## What Is Missing

- The Twin Peaks docs themselves are internally inconsistent in this phase:
  - new/modified file counts do not match the listed files
  - route counts drift between 14 and 13
  - the Phase 1A artifact list differs between runbook and playbook
- The chat REST contract is not defined clearly in the V3 docs: no named send endpoint, request schema, or response schema is made authoritative.
- `PHOENIX_DECLARATION.md` is cited as a dependency but is missing in the Twin Peaks repo. See `DIRECTORY_MAP.md:325`, `DECLARATION_REVIEW_FINDINGS.md:219`.
- V1 does not currently expose branch-management UI/API despite branch logic existing in `SessionManager`.
- V1 does not currently protect the static `/dashboard` surface with the stronger auth model later demanded by V3 security docs.

## Audit Verdict

Phase 01 is the closest thing in V3 to a real refactor over an existing V1 surface. The backend substrate exists, but the UI architecture, routing-transparency presentation, multi-thread chat contract, and command-center shell are largely new V3 work rather than already-built functionality.
