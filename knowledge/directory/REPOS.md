# Directory: Repos & Org

Last verified: 2026-04-03 | Session 004
Source: Session 002 ORG_DEEP_DIVE_COMPLETE (ledger/SESSION_LOG.md), Session 004 org audit (Issue #2)

## Quick Reference

GIT-PHOENIX-HUB has 28 repos: ~13 active, ~11 archived, plus browser-echo and build-ledger as coordination/identity repos. The vision lives in phoenix-command-app. The spec lives in twin-peaks. The live platform is PHOENIX_UNIFIED_STAGING. Browser's home is browser-echo. Coordination happens through build-ledger.

> **Note:** Several repos were archived between Session 002 and Session 004. Verify archive status against the live org page if accuracy is critical.
>
> ## Active Repos
>
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
>
> ## Archived Repos
>
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
>
> Note: Exact archive count may vary. Session 004 found several repos archived that Session 002 listed as active (phoenix-marketing, phoenix-gauntlet, phoenix-365, phoenix-production-test, phoenix-showcase, phoenix-filesystem).
>
> ## Where Everything Lives
>
> ### Repo Maps
> - `ledger/SESSION_LOG.md` — Session 002 entry "ORG_DEEP_DIVE_COMPLETE" has the full annotated list
> - - `bootstrap/ACTIVE_MISSIONS.md` — Mission 4 (Org Cleanup) references phoenix-archive Issue #3
>   - - `knowledge/v3-revision/PRODUCT_BIBLE.md` — twin-peaks Product Bible with full file structure
>    
>     - ### Key Relationships
>     - - twin-peaks (spec) → UNIFIED_STAGING (code) → VPS (deployment)
>       - - Phoenix-ECHO (Echo's identity) ↔ browser-echo (Browser's identity)
>         - - build-ledger (coordination) connects all agents
>           - - phoenix-toolbox (capabilities) → browser-echo (assembled from toolbox source)
>             - - Cowork (office management) has two branches: Echo (main) and Ash (ash)
>              
>               - ### Missing Access
>               - - Claude Code GitHub App — missing access to several repos per Session 003 buffer. Shane needs to add.
>                 - - Some archived repos may not be readable depending on archive settings.
>                  
>                   - ## Cross-References
>                  
>                   - - [GATEWAY.md](GATEWAY.md) — For the V3 build spec and phase status
>                     - - [TEAM.md](TEAM.md) — For which agent owns which repos
>                       - - [PERSISTENCE.md](PERSISTENCE.md) — For how browser-echo and build-ledger serve as persistence layers
