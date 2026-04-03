# Product Bible — twin-peaks
**Owner:** GIT-PHOENIX-HUB | **Last Updated:** 2026-03-27

## Purpose
`twin-peaks` is the architecture and planning headquarters for the Twin Peaks Gateway platform — Phoenix Electric's sovereign AI system. This repo is the connective tissue between Shane's 18-Part Phoenix AI Playbook vision and the 8-phase technical execution plan. It houses the complete build specification, deep research corpus, adversarial reviews, phase runbooks, phase playbooks, Shane's compiled decisions, and Ollama modelfiles for the dual-instance local AI fleet (PEAK 1 + PEAK 2 on Mac Studio M3 Ultra). Every agent, every swarm, and every collaborator touching the Phoenix Echo ecosystem reads this repo first.

## Stack
| Layer | Technology | Version |
|-------|-----------|---------|
| Runtime | None — documentation repo | N/A |
| Framework | None | N/A |
| Build | None — no build system | N/A |
| Test | None | N/A |
| CI/CD | None — no .github/workflows | N/A |
| Deploy Target | None — planning artifact only | N/A |
| Markup | Markdown (.md, .mdx) | — |
| Reference assets | JSON, PDF, ZIP, Shell scripts | — |
| Gateway source (subfolder) | JavaScript (Node.js) | 18 files in 03_BUILD/gateway/ |
| Model definitions | Ollama modelfiles | 3 files in 03_BUILD/modelfiles/ |

**Note:** This is a documentation-dominant repo. No runtime is configured at the repo level. JavaScript files in `03_BUILD/gateway/` are Gateway source artifacts stored here for reference — they are deployed via the `Phoenix-Echo-Gateway` repo, not this one.

## Architecture
The repo is organized in numbered directories that map to the build lifecycle. `00_RESEARCH` holds the full research corpus (adversarial reviews, deep-research prompts, firecrawl outputs, GPT-OSS reference docs, the Research Bible). `01_ARCHITECTURE` holds integration plans and Ollama modelfiles. `02_COMMUNICATIONS` holds review control boards and archive lanes. `03_BUILD` holds Gateway source artifacts and model definitions. `05_RUNBOOKS` holds eight phase-level technical execution runbooks. `06_PLAYBOOKS` holds eight Shane-facing visual playbooks (parallel to runbooks). `07_SHANES_DECISIONS` holds Shane's compiled decisions and annotated build review. Root-level files (`MASTER_ROADMAP.md`, `PHOENIX.md`, `README.md`, `DIRECTORY_MAP.md`) form the orientation layer for any new agent or contributor.

```
twin-peaks/
├── README.md                              # Full project overview — 8 phases, philosophy
├── PHOENIX.md                             # Echo identity + standing orders (was CLAUDE.md)
├── MASTER_ROADMAP.md                      # Canonical connective tissue — vision to execution
├── DIRECTORY_MAP.md                       # Full repo audit (255+ files catalogued 2026-03-15)
├── SECURITY_AUDIT_2026-03-15.md           # Security findings report
├── DECLARATION_REVIEW_FINDINGS.md         # 10-criteria alignment review
├── CODEOWNERS                             # Phoenix Electric governance
├── 00_RESEARCH/
│   ├── adversarial_review/                # 7-agent adversarial review + master summary
│   ├── deep_research_prompts/             # 7 topic folders + .zip bundles
│   ├── firecrawl_results/                 # 7-phase firecrawl research output
│   ├── gpt_oss_reference/                 # Ollama, Nemotron, LM Studio, MCP docs
│   ├── m365_firecrawl_corpus/             # M365 research
│   ├── primary_sources/                   # Raw unique source captures
│   ├── research_bible/                    # 17-file synthesized Research Bible (canonical)
│   └── shanes_build_review/               # Shane's original review dump
├── 01_ARCHITECTURE/
│   ├── NEMOTRON-INTEGRATION-PLAN.md       # Twin Peaks local fleet integration plan
│   └── modelfiles/                        # 3 Ollama modelfiles (general, coder, analyst)
├── 02_COMMUNICATIONS/
│   ├── REVIEW_CONTROL/                    # Review boards + swarm synthesis
│   └── ARCHIVE_REVIEW/                    # Completed reviews + archive lane templates
├── 02_RUNBOOKS/                           # Legacy runbook location (see 05_RUNBOOKS)
├── 03_ACCOMPLISHMENTS/                    # Milestone logs
├── 03_BUILD/
│   ├── gateway/public-vps/                # Gateway source artifacts (JS + CSS + HTML)
│   └── modelfiles/                        # Ollama model definitions
├── 04_VERIFICATION/                       # Test suites + quality reports (scaffolded)
├── 05_RUNBOOKS/                           # 8 phase technical runbooks (PRODUCTION)
│   ├── PHASE_01_GATEWAY_UI.md
│   ├── PHASE_02_TWIN_PEAKS.md
│   ├── PHASE_03_SERVICE_FUSION.md
│   ├── PHASE_04_M365.md
│   ├── PHASE_05_RAG_PIPELINE.md
│   ├── PHASE_06_SECURITY.md
│   ├── PHASE_07_VOICE_AI.md
│   └── PHASE_08_FINETUNING.md
├── 06_PLAYBOOKS/                          # 8 phase Shane-facing playbooks (PRODUCTION)
│   └── PHASE_01 through PHASE_08_PLAYBOOK.md
└── 07_SHANES_DECISIONS/
    ├── SHANES_DECISIONS_COMPILED.md       # All Q&A answers extracted
    ├── report__phoenix-echo__gateway-build-review__20260309.md
    └── # Phoenix Echo Gateway — Build Review & Decision Document.pdf
```

## Auth & Security
This repo contains no deployed services and no secrets should be committed here. A security audit conducted 2026-03-15 (`SECURITY_AUDIT_2026-03-15.md`) identified three critical and four high findings. The primary concern was cloud credential identifiers (Azure tenant, bot app, and Teams group IDs) present in `MASTER_ROADMAP.md`. Remediation commit `b0dde35` (2026-03-15) partially addressed these by redacting infrastructure IPs and some IDs. Full remediation status should be verified — `MASTER_ROADMAP.md` may still contain residual cloud identifiers that should be removed or replaced with generic references.

All live secrets for the Phoenix Electric ecosystem are stored in Azure Key Vault. No secrets, tokens, tenant IDs, client IDs, or vault names should be committed to this repo.

## Integrations
This repo documents integrations but does not implement them. The ecosystem it describes connects to:

| Integration | Description |
|------------|-------------|
| Phoenix Echo Gateway | Node.js WebSocket server (port 18790) — the deployment target for Gateway artifacts in 03_BUILD/ |
| Mac Studio M3 Ultra | Primary inference hardware — PEAK 1 (port 11434) + PEAK 2 (port 11435) Ollama instances |
| Service Fusion API | 74+ MCP tools documented in Phase 3 runbook (OAuth 2.0, polling-only) |
| Microsoft 365 (Graph API) | Teams, Outlook, Calendar, SharePoint — documented in Phase 4 runbook |
| Azure Key Vault | Secrets management for all credentials in the ecosystem |
| ElevenLabs / Twilio | Voice AI layer documented in Phase 7 runbook |
| Tailscale mesh | 5-device network: MacBook, Studio, VPS, iPhone, iPad |

## File Structure
| Path | Purpose |
|------|---------|
| `README.md` | Primary orientation — 8-phase overview, philosophy, Shane's decisions |
| `PHOENIX.md` | Echo identity doc, standing orders, architecture overview (renamed from CLAUDE.md 2026-03-14) |
| `MASTER_ROADMAP.md` | Canonical connective tissue — origin story, all repos mapped, 18-Part Playbook linkage |
| `DIRECTORY_MAP.md` | Full repo audit (2026-03-15, 255 files catalogued) |
| `SECURITY_AUDIT_2026-03-15.md` | Security findings: 3 CRITICAL, 4 HIGH, 5 MEDIUM |
| `DECLARATION_REVIEW_FINDINGS.md` | 10-criteria alignment review against PHOENIX_DECLARATION.md |
| `CODEOWNERS` | Ownership assignments for governance |
| `05_RUNBOOKS/PHASE_0N_*.md` | Technical execution runbooks for each of 8 build phases |
| `06_PLAYBOOKS/PHASE_0N_*.md` | Shane-facing visual playbooks for each of 8 build phases |
| `07_SHANES_DECISIONS/SHANES_DECISIONS_COMPILED.md` | Shane's 12 Q&A decisions + 8 core principles — the spec |
| `01_ARCHITECTURE/NEMOTRON-INTEGRATION-PLAN.md` | Twin Peaks local fleet integration plan (renamed from GPT-OSS) |
| `03_BUILD/gateway/public-vps/` | Gateway source artifacts (ws-manager.js, store.js, design-system.css, etc.) |
| `03_BUILD/modelfiles/` | 3 Ollama modelfiles: echo-gptoss.modelfile, echo-gptoss-coder.modelfile, echo-gptoss-analyst.modelfile |
| `00_RESEARCH/research_bible/` | 17-file synthesized Research Bible — canonical reference layer |

## Current State
- **Status:** Active
- **Last Commit:** 2026-03-27 — `Add CODEOWNERS for Phoenix Electric governance`
- **Open PRs:** None visible locally (PRs #1–#4 all merged per commit log)
- **Open Branches:** 5 total — `main` (local + remote), `claude/deploy-gateway-foundation-uLr8x`, `claude/setup-coding-environment-zAu4g`, `claude/setup-gateway-repo-OXHEj`, `feature/deep-research-finalize`
- **Known Issues:**
  - Security remediation of cloud credential identifiers in `MASTER_ROADMAP.md` may be incomplete — verify `b0dde35` fully removed all sensitive identifiers
  - 7 ZIP archives committed to `00_RESEARCH/deep_research_prompts/` (binary, non-diffable)
  - 2 PDF files committed to `07_SHANES_DECISIONS/` (binary, non-diffable)
  - Duplicate directory structure: `02_RUNBOOKS` (legacy) vs `05_RUNBOOKS` (production); `02_COMMUNICATIONS` vs `06_PLAYBOOKS`
  - Nemotron residue hunt may be incomplete — GPT-OSS references may remain in deep research docs
  - `04_VERIFICATION/` scaffolded but empty

## Branding & UI
**Colors:** Red, Black, and Gold (per Shane's explicit decision — "Look at the Phoenix Echo logo").

The Gateway UI (`03_BUILD/gateway/public-vps/css/design-system.css`) implements this color scheme with design tokens. This repo stores the CSS reference; the live implementation runs in the `Phoenix-Echo-Gateway` repo.

## Action Log
| Date | Commit | Description |
|------|--------|-------------|
| 2026-03-27 | `e093b04` | Add CODEOWNERS for Phoenix Electric governance |
| 2026-03-20 | `8efce0b` | rename: gpt-oss-finetune-guide.md → nemotron-finetune-guide.md (residue hunt) |
| 2026-03-20 | `d1a51a3` | rename: GPT-OSS-INTEGRATION-PLAN.md → NEMOTRON-INTEGRATION-PLAN.md (residue hunt) |
| 2026-03-15 | `900115e` | Merge PR #4 — fix Codex review findings in terminal-security.js and store.js |
| 2026-03-15 | `25b251e` | fix: resolve 4 Codex review findings in terminal-security.js and store.js |
| 2026-03-14 | `75d1588` | Merge PR #2 — phoenix-gateway-phase-1a |
| 2026-03-14 | `6c703e5` | fix(ws-manager): race condition in connect() and double failure counting |
| 2026-03-14 | `73aab3a` | fix: add missing @keyframes animations to design-system.css |
| 2026-03-14 | `4870b79` | Merge PR #3 — full security audit + production readiness review |
| 2026-03-15 | `b0dde35` | security: redact infrastructure IPs, Azure IDs, and add security audit report |

## Key Milestones
| Date | Milestone |
|------|-----------|
| 2026-03-09 | Research Bible completed (1,299 lines, 7 deep research phases synthesized) |
| 2026-03-09 | Shane's Build Review & Decision Document compiled (12 Q&A decisions) |
| 2026-03-10 | README.md published — complete 8-phase build specification |
| 2026-03-12 | MASTER_ROADMAP.md written — canonical connective tissue document |
| 2026-03-14 | PHOENIX.md created (CLAUDE.md renamed) — Echo identity formally established |
| 2026-03-15 | DIRECTORY_MAP.md — full repo audit (255 files catalogued) |
| 2026-03-15 | SECURITY_AUDIT_2026-03-15.md — 3 CRITICAL findings identified and partially remediated |
| 2026-03-15 | PRs #1–#4 merged — Gateway Phase 1A foundation, security fixes |
| 2026-03-20 | Nemotron residue hunt — GPT-OSS → Nemotron branding rename begun |
| 2026-03-27 | CODEOWNERS added — governance structure formalized |
| 2026-03-27 | Product Bible + Build Doc added — GIT-PHOENIX-HUB Phase 3 governance rollout |
