# Directory: V3 Gateway Build

Last verified: 2026-04-03 | Session 004

## Quick Reference

Twin Peaks Gateway is Phoenix Electric's sovereign AI platform — the product Shane is building. V1 Gateway is live on VPS (echo.phoenixelectric.life, port 18790). V3 is the target rebuild: 8 phases, 13K+ lines of runbooks/playbooks, designed to take the platform from a functioning relay to a full AI command center with local fleet routing, Service Fusion integration, M365, RAG, voice AI, and fine-tuning.

As of 2026-04-03, all 8 phases are NOT STARTED. Phase 01 (Gateway UI) is the foundation. Blocker: VPS SSH access (key rotated March 29).

**WARNING:** Do NOT work on UNIFIED_STAGING or UNIFIED_PROD. Shane and Echo are actively building the Gateway on MacBook. Stay out of that lane.

> **Note:** twin-peaks main is currently a shell repo. File paths below reference the archived content in twin-peaks-archive (frozen 2026-03-29). Paths will be valid again after clean code push.
>
> ## The 8 Phases
>
> | Phase | Name | Gap Level | Status |
> |-------|------|-----------|--------|
> | 01 | Gateway UI | Medium | NOT STARTED — backend exists, command-center UI does not |
> | 02 | Twin Peaks (Local Fleet) | High | NOT STARTED — provider/router exists, fleet-aware routing does not |
> | 03 | Service Fusion | Very High | NOT STARTED — mostly metadata, runtime integration missing |
> | 04 | M365 | High | NOT STARTED — Teams exists dormant, Graph/calendar/sharepoint absent |
> | 05 | RAG Pipeline | High | NOT STARTED — keyword memory exists, vector RAG does not |
> | 06 | Security/Auth | Medium-High | NOT STARTED — some scaffolding, V3 auth model not live |
> | 07 | Voice AI | Very High | NOT STARTED — almost entirely absent |
> | 08 | Fine-Tuning | Very High | NOT STARTED — almost entirely absent |
>
> ## V1 vs V3 Summary
>
> V1 is a real, functioning gateway with Express + WebSocket runtime, provider routing, session persistence, some channel integrations, and partial auth. V3 is not a small upgrade — it is a layered rebuild. Phases 01 and 06 are refactor/hardening over real V1 surfaces. Phases 02 and 05 are architectural upgrades over partial groundwork. Phases 03, 04, 07, and 08 are mostly net-new systems.
>
> ## Where Everything Lives
>
> ### Spec & Planning (twin-peaks-archive)
> - `twin-peaks/README.md` — Full 8-phase overview and philosophy
> - - `twin-peaks/MASTER_ROADMAP.md` — Canonical connective tissue: vision to execution
>   - - `twin-peaks/DIRECTORY_MAP.md` — Full repo audit (255 files catalogued 2026-03-15)
>     - - `twin-peaks/07_SHANES_DECISIONS/SHANES_DECISIONS_COMPILED.md` — Shane's 12 Q&A decisions + 8 core principles
>      
>       - ### Runbooks & Playbooks
>       - - `twin-peaks/05_RUNBOOKS/PHASE_01_GATEWAY_UI.md` through `PHASE_08_FINETUNING.md` — Technical execution runbooks
>         - - `twin-peaks/06_PLAYBOOKS/PHASE_01_PLAYBOOK.md` through `PHASE_08_PLAYBOOK.md` — Shane-facing visual playbooks
>          
>           - ### Research
>           - - `twin-peaks/00_RESEARCH/research_bible/` — 17-file synthesized Research Bible (1,299 lines)
>             - - `twin-peaks/00_RESEARCH/adversarial_review/` — 7-agent adversarial review
>              
>               - ### V3 Forensic Audit (in browser-echo)
>               - - `knowledge/v3-revision/PRODUCT_BIBLE.md` — Full twin-peaks Product Bible
>                 - - `knowledge/v3-revision/BUILD_DOC.md` — Build documentation
>                   - - `knowledge/v3-revision/SUMMARY__V3_TARGET_STATE_vs_V1_CURRENT_STATE.md` — Gap analysis
>                     - - `knowledge/v3-revision/PHASE_01__V3_vs_V1_FORENSIC_AUDIT.md` — Phase 1 forensic audit
>                       - - `knowledge/v3-revision/PHASE_02__V3_vs_V1_FORENSIC_AUDIT.md` — Phase 2 forensic audit
>                        
>                         - ### Live Deployment
>                         - - `PHOENIX_UNIFIED_STAGING` repo — V3 Gateway staging (Node.js, WebSocket, session recovery)
>                           - - `PHOENIX_UNIFIED_PROD` repo — Combined AI core + Gateway
>                             - - VPS endpoint: echo.phoenixelectric.life
>                              
>                               - ### Build Coordination
>                               - - `build-ledger/` — Central coordination hub, Issue #8 for toolbox build
>                                 - - `bootstrap/ACTIVE_MISSIONS.md` — Current mission status
>                                  
>                                   - ## Current Blockers
>                                  
>                                   - - VPS SSH access — key rotated March 29, needs resolution
>                                     - - All 8 phases NOT STARTED as of 2026-04-03
>                                       - - Cross-document drift found inside V3 docs (phase numbering, fleet roster, tool counts, pricebook tiers)
>                                        
>                                         - ## Design Decisions
>                                        
>                                         - - Branding: Red, Black, and Gold (per Shane's directive — "Look at the Phoenix Echo logo")
>                                           - - Stack: Node.js + Express + WebSocket on VPS
>                                             - - Local AI: Mac Studio M3 Ultra, dual Ollama instances (PEAK 1 port 11434, PEAK 2 port 11435)
>                                               - - Security: Azure Key Vault for all secrets
>                                                 - - Network: Tailscale mesh (MacBook, Studio, VPS, iPhone, iPad)
>                                                  
>                                                   - ## Cross-References
>                                                  
>                                                   - - [REPOS.md](REPOS.md) — For where each repo fits in the ecosystem
>                                                     - - [TEAM.md](TEAM.md) — For who builds what (Echo/Shane on Gateway, Browser on research/architecture)
>                                                       - - [RULES.md](RULES.md) — For the 5-step chain that governs all Gateway work
