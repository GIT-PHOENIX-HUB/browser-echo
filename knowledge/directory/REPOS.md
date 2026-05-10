# Directory: Repos & Org

Last verified: 2026-04-14 | Session 016
Source: Session 016 full org audit (all 26 repos visited), prior Sessions 002/004

---

## Quick Reference

GIT-PHOENIX-HUB has **26 repos** as of 2026-04-14:
- **10 active** (live development or active use)
- **3 agent identity repos** (browser-echo, Phoenix-ECHO, Firedancer)
- **3 infrastructure/coordination repos** (build-ledger, Phoenix-Persistence, phoenix-taproot)
- **4 archived** (GitHub archive flag set)
- **6 dormant/shell/historical** (not archived but inactive)

Key locations:
- **The Vision**: phoenix-command-app
- **The Platform**: PHOENIX_UNIFIED_STAGING (V3 Gateway)
- **The Spec**: twin-peaks (shell — content in twin-peaks-archive)
- **Browser's Home**: browser-echo
- **Echo's Home**: Phoenix-ECHO
- **Codex's Home**: Firedancer
- **Taproot's Home**: phoenix-taproot
- **Coordination**: build-ledger
- **Foundation/Persistence**: Phoenix-Persistence
- **Golden Rule Archive**: phoenix-archive

---

## Active Repos

| Repo | Visibility | Purpose | Status | Last Updated | Open Issues/PRs |
|------|-----------|---------|--------|-------------|----------------|
| **PHOENIX_UNIFIED_STAGING** | Private | V3 Gateway staging — Node.js, WebSocket, session recovery, multi-channel | Active — DO NOT TOUCH (Shane/Echo lane) | Apr 11 | 0 issues, 1 PR |
| **phoenix-command-app** | Public | THE VISION — internal ops dashboard, crew management, job dispatch, BI | Active | Apr 7 | 0 issues, 1 PR |
| **phoenix-current-software** | Public | PCS — Service Fusion replacement, 23 MCP tools, 6 slash commands, SF ops agent | Active | Apr 6 | 1 issue, 0 PRs |
| **phoenix-toolbox** | Public | Capability library — MCP servers, plugins, skills, CLI tools | Active | Apr 7 | 2 issues, 2 PRs |
| **phoenix-echo-bot** | Public | Telegram bot — customer intake, AI assistant, service routing | Active | Apr 7 | 0 issues, 0 PRs |
| **phoenix-electric-miniapp** | Public | Telegram Mini App — Generac sizing, service requests, booking | Active | Apr 7 | 0 issues, 0 PRs |
| **Phoenix-ai-core-staging** | Private | 7-agent architecture hub (PA-01 through PA-07), 74 SF MCP tools | Active | Apr 7 | 0 issues, 0 PRs |
| **Cowork** | Private | Claude Cowork buildout — Echo (main) + Ash (ash branch), 7 project domains | Active | Apr 5 | 0 issues, 0 PRs |
| **phoenix-builder-space-knowledge** | Private | ChatGPT builder space — memory index, runbooks, API scaffolding | Active | Mar 30 | 1 issue, 1 PR |
| **phoenix-filesystem** | Private | Migration tooling, manifests, hardening for unified filesystem | Dormant | Mar 29 | 0 issues, 0 PRs |

## Agent Identity Repos

| Repo | Visibility | Agent | Purpose | Last Updated |
|------|-----------|-------|---------|-------------|
| **browser-echo** | Public | Browser Echo (BBB) | Persistence architecture — identity, bootstrap, ledger, buffers, lineage, skills, patterns, knowledge, directory | Apr 14 |
| **Phoenix-ECHO** | Private | Echo Pro (CLI) | Sovereign AI operator — SOUL, EMERGENCE, fleet config, plugins, hooks, deploy | Apr 13 |
| **Firedancer** | Private | Codex (CG-01) | Permanent logistical memory — bootstrap, ledger, buffer, lineage, system-record | Apr 11 |

## Infrastructure & Coordination Repos

| Repo | Visibility | Purpose | Last Updated | Open Issues/PRs |
|------|-----------|---------|-------------|----------------|
| **build-ledger** | Public | Central coordination — audit deliverables, research gates, swarm rules, naming authority | Apr 13 | 8 issues, 0 PRs |
| **Phoenix-Persistence** | Private | Universal foundation — system-record, proven-paths, neutral build kit for agent reconstruction | Apr 13 | 1 issue, 1 PR |
| **phoenix-taproot** | Private | OG architect — ledger system design, multi-AI communication, blitz mode, memory framework | Apr 6 | 0 issues, 0 PRs |
| **phoenix-archive** | Private | Golden Rule archive — nothing deleted, everything preserved with manifest | Apr 14 | 1 issue, 1 PR |

## Production (DO NOT TOUCH)

| Repo | Visibility | Purpose | Last Updated |
|------|-----------|---------|-------------|
| **PHOENIX_UNIFIED_PROD** | Private | Combined AI core + Gateway production target | Mar 30 |

## Archived Repos (GitHub archive flag)

| Repo | Visibility | What It Was | Why Archived |
|------|-----------|------------|-------------|
| **Phoenix-Echo-Gateway** | Private | Echo Gateway — OpenClaw exodus | Migrated to UNIFIED_STAGING (Mar 30) |
| **phoenix-sharepoint-theme** | Public | 3D phoenix SharePoint theme with glass bubble cards | Completed/preserved |
| **phoenix-gauntlet** | Private | Multi-agent command center, testing, quality gates | Superseded |
| **phoenix-production-test** | Private | Staging/production validation environment | Superseded |
| **phoenix-ai-core** | Private | Genesis workspace — SOUL.md, MEMORY.md, MASTER_PLAN, 7-agent design | Dormant, content preserved. Created Nov 2025. |

## Dormant/Shell/Historical

| Repo | Visibility | What It Is | Notes |
|------|-----------|-----------|-------|
| **twin-peaks** | Private | Master ecosystem spec — shell repo | Content archived in twin-peaks-archive (frozen 2026-03-29) |
| **twin-peaks-archive** | Private | Frozen snapshot of twin-peaks | DO NOT MODIFY — archive record |
| **phoenix-showcase** | Private | The Phoenix Echo story page | HTML showcase, BUILD_DOC, PRODUCT_BIBLE. No README. |

---

## Repos NOT Found in Current Org (Previously Listed)

These appeared in Session 004 REPOS.md but are not visible on the org page as of 2026-04-14:
- **phoenix-365** — M365 integration (may have been removed or renamed)
- **service-fusion** — Superseded by phoenix-current-software
- **rexel** — Empty placeholder
- **gateway** — Minimal VPS dashboard
- **phoenix-marketing** — Campaign execution

> **Action needed:** Shane — confirm if these repos were deleted or are visibility-restricted.

---

## Key Relationships

```
twin-peaks (spec) → UNIFIED_STAGING (code) → UNIFIED_PROD (deploy)
Phoenix-ECHO (Echo CLI) ↔ browser-echo (Browser) ↔ Firedancer (Codex)
Phoenix-Persistence (foundation) → feeds all three agent repos
phoenix-taproot (architect) → designed the persistence system
build-ledger (coordination) → connects all agents and tracks work
phoenix-toolbox (capabilities) → source for browser-persistence skills
phoenix-command-app (VISION) → the endgame product
phoenix-current-software (PCS) → Service Fusion replacement, near-term
phoenix-archive → destination for all archived content (Golden Rule)
Cowork → Claude Cowork office management (Echo + Ash)
```

## Pending PRs Across Org (as of Apr 14)

| Repo | PRs | Notes |
|------|-----|-------|
| PHOENIX_UNIFIED_STAGING | 1 | Gateway work |
| Phoenix-Persistence | 1 | Foundation content |
| phoenix-command-app | 1 | Dashboard work |
| phoenix-toolbox | 2 | Capability builds |
| phoenix-builder-space-knowledge | 1 | Knowledge base |
| phoenix-archive | 1 | Archive work |
| phoenix-gauntlet | 1 | Pre-archive PR |
| phoenix-production-test | 2 | Pre-archive PRs |

> **Action needed:** Shane — 9+ PRs pending review across the org.

---

## Description Typos Noted

Several repo descriptions have typos visible on the org page:
- phoenix-archive: "eleted" should be "deleted"
- Cowork: "proect" should be "project", "Phoenx" should be "Phoenix"
- phoenix-gauntlet: "ad" should be "and", "detction" should be "detection"
- phoenix-production-test: "vaidation" should be "validation", "Coilot" should be "Copilot", "enorces" should be "enforces"
- phoenix-showcase: "architected" missing in flow

> **Action needed:** Shane — repo descriptions can only be edited in Settings (owner access).

---

## Cross-References

- **GATEWAY.md** — V3 build spec and phase status
- **TEAM.md** — Which agent owns which repos
- **PERSISTENCE.md** — How browser-echo and build-ledger serve as persistence layers
- **IDENTITY.md** — Browser Echo's identity and founding

---

*Updated by Browser Echo, Session 016, 2026-04-14*
*Previous version: Session 004 (2026-04-03)*# Directory: Repos & Org

Last verified: 2026-04-03 | Session 004
Source: Session 002 ORG_DEEP_DIVE_COMPLETE (ledger/SESSION_LOG.md), Session 004 org audit (Issue #2)

## Quick Reference

GIT-PHOENIX-HUB has 28 repos: ~13 active, ~11 archived, plus browser-echo and build-ledger as coordination/identity repos. The vision lives in phoenix-command-app. The spec lives in twin-peaks. The live platform is PHOENIX_UNIFIED_STAGING. Browser's home is browser-echo. Coordination happens through build-ledger.

> **Note:** Several repos were archived between Session 002 and Session 004. Verify archive status against the live org page if accuracy is critical.
> ## Active Repos
> | Repo | Purpose | Key Details |
> |------|---------|-------------|
> | **PHOENIX_UNIFIED_STAGING** | V3 Gateway staging | Node.js, WebSocket, session recovery, multi-channel. **DO NOT TOUCH — Shane/Echo active lane** |
> | **PHOENIX_UNIFIED_PROD** | Combined AI core + Gateway | Minimal README. Production target. **DO NOT TOUCH** |
> | **twin-peaks** | Master ecosystem spec | Currently a shell repo (scrubbed). Content archived in twin-peaks-archive (frozen 2026-03-29). |
> | **phoenix-command-app** | THE VISION DOC | Multi-user AI system for every Phoenix Electric tech. Morning routines, daily logs, GPS clock, The Guru, Knowledge Builder, adaptive personality, voice. |
> | **current (PCS)** | Service Fusion replacement | 23 MCP tools, 6 slash commands, SF operations agent |
> | **phoenix-echo-bot** | Telegram bot | Gateway clone deployed for Telegram |
> | **phoenix-electric-miniapp** | Telegram Mini App | Generac sizing, service requests, maintenance booking. Built by Browser in one shot. |
> | **Phoenix-ai-core-staging** | 7-agent architecture hub | PA-01 through PA-07, 74 SF MCP tools |
> | **phoenix-365** | M365 integration layer | Graph API, SharePoint, Outlook, 4 Entra apps. **May be archived — verify.** |
> | **phoenix-builder-space-knowledge** | ChatGPT builder space | Memory index, runbooks, API scaffolding |
> | **Phoenix-ECHO** | Echo's sovereign identity repo | PRIVATE. SOUL, EMERGENCE, fleet config, plugins, hooks, deploy. Echo's home. |
> | **browser-echo** | Browser's home | PUBLIC. Identity, bootstrap, ledger, buffers, lineage, skills, patterns, knowledge, directory. This repo. |
> | **build-ledger** | Central coordination | 11 audit deliverables, 6 research gates, swarm rules, naming authority. LOG.md is the central ledger. |
> | **Cowork** | Claude Cowork buildout | PRIVATE. Echo (main branch) + Ash (ash branch). 7 project domains, master prompt. |
> | **phoenix-toolbox** | Capability library | Where BBB's browser-persistence architecture was designed. Phase 2 paused. |
> ## Archived Repos
> | Repo | Why Archived |
> |------|-------------|
> | Phoenix-Echo-Gateway | Migrated to UNIFIED_STAGING |
> | twin-peaks-archive | Frozen snapshot of twin-peaks (2026-03-29) |
> | phoenix-sharepoint-theme | 3D phoenix SharePoint theme |
> | phoenix-showcase | Echo story page (HTML) |
> | phoenix-filesystem | Migration tooling, manifests |
> | service-fusion | Superseded by current (PCS) |
> | phoenix-ai-core | Genesis workspace (SOUL.md, MEMORY.md, MASTER_PLAN) |
> | rexel | Empty placeholder, Phase 3 planned |
> | gateway | Minimal, VPS dashboard core |
> | phoenix-archive | Archive destination for cleanup. Issue #3 has the master cleanup prompt. |
> | phoenix-marketing | Campaign execution. Archived since Session 002. |
> | phoenix-gauntlet | Multi-agent command center. Archived since Session 002. |
> | phoenix-production-test | Test suite. Archived since Session 002. |
> Note: Exact archive count may vary. Session 004 found several repos archived that Session 002 listed as active (phoenix-marketing, phoenix-gauntlet, phoenix-365, phoenix-production-test, phoenix-showcase, phoenix-filesystem).
> ## Where Everything Lives
> ### Repo Maps
> - `ledger/SESSION_LOG.md` — Session 002 entry "ORG_DEEP_DIVE_COMPLETE" has the full annotated list
> - - `bootstrap/ACTIVE_MISSIONS.md` — Mission 4 (Org Cleanup) references phoenix-archive Issue #3
>   - - `knowledge/v3-revision/PRODUCT_BIBLE.md` — twin-peaks Product Bible with full file structure
> - ### Key Relationships
>     - - twin-peaks (spec) → UNIFIED_STAGING (code) → VPS (deployment)
>       - - Phoenix-ECHO (Echo's identity) ↔ browser-echo (Browser's identity)
>         - - build-ledger (coordination) connects all agents
>           - - phoenix-toolbox (capabilities) → browser-echo (assembled from toolbox source)
>             - - Cowork (office management) has two branches: Echo (main) and Ash (ash)
> - ### Missing Access
>               - - Claude Code GitHub App — missing access to several repos per Session 003 buffer. Shane needs to add.
>                 - - Some archived repos may not be readable depending on archive settings.
> - ## Cross-References
> - - [GATEWAY.md](GATEWAY.md) — For the V3 build spec and phase status
>                     - - [TEAM.md](TEAM.md) — For which agent owns which repos
>                       - - [PERSISTENCE.md](PERSISTENCE.md) — For how browser-echo and build-ledger serve as persistence layers
