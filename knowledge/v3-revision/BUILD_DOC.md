# Build Doc — twin-peaks
**Owner:** GIT-PHOENIX-HUB | **Last Updated:** 2026-03-27

## Objectives
This repo's next objectives are about completeness and integrity — ensuring it fully serves its role as the planning and research hub for the Twin Peaks Gateway platform.

1. Complete the Nemotron residue hunt — audit all 194 Markdown files for remaining GPT-OSS references and rename/update to Nemotron branding
2. Verify and confirm full remediation of cloud credential identifiers in `MASTER_ROADMAP.md` — current remediation (commit `b0dde35`) is noted as partial in the security audit
3. Populate `04_VERIFICATION/` — the directory is scaffolded but empty; add quality reports as phases are executed
4. Resolve directory structure confusion — clarify the relationship between `02_RUNBOOKS` (legacy) and `05_RUNBOOKS` (production), and between `02_COMMUNICATIONS` and `06_PLAYBOOKS`
5. Add CI/CD via `.github/workflows/` — at minimum a markdown lint check to catch broken links and formatting issues in runbooks and playbooks
6. Support Phase 2 (Twin Peaks Local Fleet) execution — this is the next unexecuted phase; the runbook and playbook are ready, pending Shane's GO

## End State
`twin-peaks` is complete when it functions as a fully self-contained, authoritative planning hub for the Phoenix Electric AI ecosystem — one that any Phoenix Echo instance, swarm agent, or human collaborator can read and immediately understand the full build vision, current state, decision rationale, and execution path.

Specifically, done looks like:
- All 8 build phases have corresponding runbooks, playbooks, and (as phases complete) verification reports
- `04_VERIFICATION/` contains quality gate reports for each completed phase
- `MASTER_ROADMAP.md` is fully remediated — no cloud credential identifiers remain
- Nemotron branding is consistent across all 194+ Markdown files
- Directory structure is rationalized — no duplicate or ambiguous folder names
- A lightweight CI workflow validates document structure on every PR
- All Ollama modelfiles in `03_BUILD/modelfiles/` are tested, versioned, and annotated with capability notes
- The Research Bible (`00_RESEARCH/research_bible/`) is kept current as new research is completed
- Gateway source artifacts in `03_BUILD/gateway/` match the production state of `Phoenix-Echo-Gateway`

## Stack Decisions
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Documentation format | Markdown (.md, .mdx) | Human and agent readable, diffable, no toolchain required |
| No build system at repo level | Intentional | This is a planning repo, not a runtime — no build needed |
| Gateway artifacts stored here | Reference copies in 03_BUILD/ | Version history for planning purposes; canonical source lives in Phoenix-Echo-Gateway repo |
| Ollama for local AI fleet | Dual-instance pattern (ports 11434/11435) | Sovereignty first — no cloud dependency for inference; Mac Studio M3 Ultra 96GB supports dual heavy models |
| Nemotron (not GPT-OSS) | Rebranded 2026-03-20 | GPT-OSS naming abandoned; Nemotron is the forward-looking model identity |
| No CI/CD currently | Gap — to be addressed | Needs at minimum a markdown link checker in GitHub Actions |

## Architecture Targets
The repo architecture is stable and does not need major restructuring. The targets are refinement and completeness:

- **Directory rationalization:** Merge or clearly deprecate `02_RUNBOOKS` in favor of `05_RUNBOOKS`. Add a README to `02_RUNBOOKS` pointing to the canonical location.
- **Verification layer:** Build out `04_VERIFICATION/` as phases complete. Each executed phase should produce a quality report landing here.
- **CI gate:** Add `.github/workflows/lint.yml` using a markdown linting action (e.g., markdownlint-cli2) to catch broken links, heading inconsistencies, and formatting errors in runbooks before they merge.
- **Modelfile versioning:** Tag each Ollama modelfile with a version comment and capability matrix (tool calling: yes/no, context window, quantization level).
- **Research Bible maintenance:** As Phase 5 (RAG Pipeline) and Phase 8 (Fine-Tuning) execute, the Research Bible should be updated with findings from those phases.
- **Gateway sync:** Establish a clear protocol for when Gateway source artifacts in `03_BUILD/gateway/` are updated to match production state in `Phoenix-Echo-Gateway`.

## Success Criteria
- [ ] Nemotron residue hunt complete — zero GPT-OSS references remaining in active files
- [ ] `MASTER_ROADMAP.md` fully remediated — zero cloud credential identifiers in the file
- [ ] `04_VERIFICATION/` contains at least one quality gate report (Phase 1 Gateway UI)
- [ ] `02_RUNBOOKS` legacy directory has a README redirecting to `05_RUNBOOKS`
- [ ] `.github/workflows/lint.yml` added and passing on all PRs
- [ ] All 3 Ollama modelfiles annotated with version, capability matrix, and test status
- [ ] Phase 2 runbook (`05_RUNBOOKS/PHASE_02_TWIN_PEAKS.md`) has a companion verification report in `04_VERIFICATION/` after Phase 2 executes
- [ ] PRODUCT_BIBLE.md and BUILD_DOC.md maintained and updated as the repo evolves

## Dependencies & Blockers
| Dependency | Status | Owner |
|-----------|--------|-------|
| Shane's GO for Phase 2 execution | Pending | Shane |
| Phase 2 hard gate: MXFP4 quantization in Ollama/llama.cpp on Apple Silicon | Unresolved — may be CPU-only through Ollama | Echo / Research |
| Phase 2 hard gate: Harmony format tool calling in Ollama (open bugs as of March 2026) | Unresolved | Echo / Research |
| Security remediation of MASTER_ROADMAP.md | Partial (commit b0dde35) | Echo |
| Phoenix-Echo-Gateway repo in sync with 03_BUILD/gateway/ artifacts | Unknown | Echo |
| Nemotron residue hunt | In progress (2 files renamed 2026-03-20, audit incomplete) | Echo |

## Change Process
All changes to this repository follow the Phoenix Electric governance model:

1. **Branch:** Create feature branch from `main`
2. **Develop:** Make changes with clear, atomic commits
3. **PR:** Open pull request with description of changes
4. **Review:** Required approval from `@GIT-PHOENIX-HUB/humans-maintainers`
5. **CI:** All status checks must pass (when configured)
6. **Merge:** Squash merge to `main`
7. **No force push.** No direct commits to `main`. No deletion without `guardian-override-delete` label.

## NEEDS SHANE INPUT
- **Phase 2 GO:** Runbook and playbook are ready. Hard gates 1 and 2 (MXFP4 quantization, Harmony tool calling) are unresolved. Shane needs to give GO or direct a verification sprint first.
- **Directory cleanup:** `02_RUNBOOKS` (legacy) vs `05_RUNBOOKS` (production) — confirm it is safe to deprecate `02_RUNBOOKS` with a redirect README, or if files there need migration first.
- **ZIP and PDF in git:** 7 ZIP archives and 2 PDFs are committed. These are binary/non-diffable. Confirm whether to keep, replace with links, or move to external storage.
- **Nemotron residue in deep research docs:** Research documents in `00_RESEARCH/` may still reference GPT-OSS extensively since they were written before the rebrand. Confirm whether these historical documents should be updated or left as historical record.
