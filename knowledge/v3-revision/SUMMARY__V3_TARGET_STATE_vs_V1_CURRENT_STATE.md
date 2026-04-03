# Twin Peaks V3 Forensic Summary - Target State vs Current Gateway

Date: 2026-03-29
Compared:
- V3 docs in `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/twin-peaks`
- Current Gateway code in `/Users/shanewarehime/Documents/GITHUB_CLONED_REPOS_DONT_TOUCH/Phoenix-Echo-Gateway/src`

## Executive Read

V1 is a real, functioning gateway with:
- an Express + WebSocket runtime
- provider routing
- session persistence
- some channel integrations
- a generic dashboard surface
- partial auth/security scaffolding

V3 is not a small upgrade over that codebase.
It is a layered rebuild that:
- refactors the UI shell
- replaces provider routing with fleet-aware local routing
- adds real business integrations
- hardens auth/security substantially
- adds M365, RAG, voice, and fine-tuning systems that are mostly not present today

## Phase-by-Phase Gap Level

| Phase | Gap Level | Short Verdict |
|------|-----------|---------------|
| Phase 01 Gateway UI | Medium | Backend substrate exists; command-center UI does not |
| Phase 02 Local Fleet | High | Current router/provider layer exists; fleet-aware routing does not |
| Phase 03 Service Fusion | Very High | Mostly metadata today; actual runtime integration missing |
| Phase 04 M365 | High | Teams exists, dormant email exists; Graph/calendar/sharepoint do not |
| Phase 05 RAG | High | Keyword memory exists; vector RAG does not |
| Phase 06 Security/Auth | Medium-High | Some scaffolding exists; real V3 auth model is not live |
| Phase 07 Voice AI | Very High | Almost entirely absent |
| Phase 08 Fine-Tuning | Very High | Almost entirely absent |

## Strongest V1 Foundations

- Express/WebSocket runtime and operator APIs
- Session persistence and recovery primitives
- Provider/router abstraction
- Plugin/tool infrastructure
- Channel integration substrate
- Some security-oriented utilities (`auth.js`, tool permissions, sandboxing)
- Prompt assembly, session replay, and lexical memory primitives that can inform later RAG work

## Biggest V3-New Surfaces

- Three-panel command-center UI
- Dual-fleet local routing with GPT-OSS governance
- Full Service Fusion / Pricebook / Rexel operational stack
- Microsoft Graph mail/calendar/sharepoint integration
- Vector RAG pipeline
- PKCE/JWT/WebAuthn security model
- Voice AI runtime
- Fine-tuning/training pipeline

## Cross-Document Drift Found Inside V3

- Phase numbering drift inside Phase 02
- Fleet roster drift across roadmap/playbook/runbook
- 20B vs 40B vs 70B ambiguity in Phase 02
- 4-tier vs 7-tier pricebook drift in Phase 03
- 23 tools vs 74 tools vs 75 tools drift in Phase 03
- Phase 04 scope drift between runbook/playbook, roadmap extensions, and Shane's narrowed email/calendar-first direction
- Phase 04 write-surface drift versus roadmap read-only operating rule
- Phase 05 embedding-model decision still intentionally unresolved despite `nomic-embed-text` examples
- Phase 05 current memory substrate appears partially incomplete, so it should not be overcounted as a ready-made RAG base
- Missing `PHOENIX_DECLARATION.md` dependency in Phase 01
- Underdefined contracts in several phases:
  - chat REST contract
  - SF auth and endpoint catalog
  - write-approval mechanism
  - SSE replay schema
  - routing-transparency UI placement

## Bottom Line

The live Gateway is a viable V1 system, not an empty shell.
But V3 is materially ahead of it in scope and architecture.

The safest way to think about the gap is:
- Phase 01 and Phase 06 are refactor/hardening passes over real V1 surfaces
- Phase 02 and Phase 05 are architectural upgrades over partial groundwork
- Phase 03, Phase 04, Phase 07, and Phase 08 are mostly net-new systems

That means V3 execution should not be framed as “mostly already there.”
It is a staged rebuild that can reuse parts of V1, but it still has major missing runtime surfaces in almost every phase after Phase 01.
