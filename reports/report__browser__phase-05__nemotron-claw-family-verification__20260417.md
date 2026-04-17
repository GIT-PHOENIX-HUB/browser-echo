# Phase 5 — Nemotron / Claw Family Verification

**File:** `report__browser__phase-05__nemotron-claw-family-verification__20260417.md`
**Date:** 2026-04-17
**Author:** Browser Echo (BBB), Session 019
**Commissioned by:** Shane + Firedancer, Phoenix Electric
**Scope:** Separate verification pass over four candidate sources on different axes — local-model runtime, isolation / container architecture, security / hardening, and gateway integration. Not contaminated with Pass 01 findings. Four separate source families, not one.

---

## 1. Executive Verdict

Three of the four candidates are real public salvage sources. One is a runtime question rather than a code-salvage question. None of them replace the Pass 01 first-wave; all of them occupy axes that OpenClaw and Pipecat do not cover directly.

`qwibitai/nanoclaw` is the strongest isolation/guardrail candidate this pass — it delivers genuine container-per-agent isolation with external-allowlist mount security, three-dependency leanness, and colocated test discipline. `NVIDIA/NemoClaw` is verified as a real OpenClaw plugin that routes inference into NVIDIA's NIM/vLLM stack and occupies both the gateway and local-runtime axes. `nearai/ironclaw` is the strongest security-first candidate — a Rust workspace with a dedicated `ironclaw_safety` crate that has its own fuzz suite. Nemotron is a model family, not a codebase, and its role is runtime choice rather than source adaptation — the Nano-class 9B and the Safety-Guard-V3 are the Phoenix-relevant pieces; Super-49B is Studio-capable with real hardware; Ultra is out of scope.

All four sources are distinct. No row collapses into another. No row contaminates Pass 01's six rows.

---

## 2. Verified Source Table

| Source | Exact Repo / Artifact | Public? | License | Axis | Real Structural Code? | Isolation Quality | Phoenix Fit | Verdict |
|---|---|---|---|---|---|---|---|---|
| NanoClaw | `qwibitai/nanoclaw` | Yes | MIT | isolation / container architecture | Yes | High — container-per-agent + external mount allowlist | Strong for axes 7 (security/guardrails) + 6 (boot/runtime persistence) | **public salvage source** |
| NemoClaw | `NVIDIA/NemoClaw` | Yes | Apache-2.0 | gateway / control-plane + local-model runtime | Yes (94KB plugin host + blueprint) | Medium — K8s-level via OpenShell, not per-agent | Narrow for Phoenix unless NVIDIA OpenShell is adopted; design-influence value | **public salvage source (conditional — OpenShell-coupled)** |
| IronClaw | `nearai/ironclaw` | Yes | MIT OR Apache-2.0 (dual) | security / hardening | Yes (6-crate Rust workspace with fuzz suite on safety crate) | High — Rust memory safety + dedicated safety crate | Strong for axis 7 (security/guardrails) | **public salvage source** |
| Nemotron | `NVIDIA-NeMo/Nemotron` (hub) + model weights via NVIDIA Open Model License | Yes (repo) / Yes (weights) | Apache-2.0 (repo) / NVIDIA Open Model License (weights) | local-model runtime | N/A — models, not salvageable code | N/A | Runtime choice, not salvage source | **public runtime candidate (not a code-salvage row)** |

**Axis labels used, per mission spec:** `local-model runtime`, `isolation / container architecture`, `security / hardening`, `gateway / control-plane`, `adjacent ecosystem only`. All four rows use these labels exactly; no label stretched.

---

## 3. NanoClaw Findings

**Reality.** `qwibitai/nanoclaw`. Public, MIT, 27,431 stars, 12,195 forks, TypeScript, 13.5 MB, last push 2026-04-17 (active this hour). Owner `qwibitai` is an Organization created 2026-01-15 ("Building AI-native Infrastructure"), with 14 sibling repos all `nanoclaw-*` named. Core repo is the center of gravity; channel repos (Discord, Telegram, Slack, WhatsApp, Signal, Matrix, Gmail) are separate plugin-style packages.

**"Small/simple rewrite" claim.** Verified. The repo has **three runtime dependencies total**: `@onecli-sh/sdk`, `better-sqlite3`, `cron-parser`. That is genuinely lean. Node 20+ required.

**Container-per-agent isolation claim.** Verified. `src/container-runner.ts` (757 lines, 0 TODOs) spawns agent processes in containers via `child_process.spawn`, using a real `container/Dockerfile` (2.1 KB) in the repo. `src/container-runtime.ts` (3.5 KB) defines the runtime surface. `container/agent-runner/` is a subdirectory with the in-container entry code.

**Mount security.** Decisive finding. `src/mount-security.ts` (420 lines, 9 functions, 0 TODOs) validates mounts against an allowlist stored at `~/.config/nanoclaw/mount-allowlist.json` — **outside** the project root. The docstring explicitly states this prevents container agents from modifying their own security configuration. That is a deliberate, security-conscious design choice, not branding.

**Anthropic Agent SDK integration claim.** Partially correct. NanoClaw does not import `@anthropic-ai/sdk` directly. It imports `@onecli-sh/sdk`, which is the bridge. The README claim "runs directly on Anthropic's Agents SDK" is somewhat overstated — it runs through a wrapper. Functionally it reaches Anthropic's API; architecturally it is one layer of indirection away from the SDK itself. Worth noting for anyone expecting a drop-in Anthropic integration.

**IPC and auth.** `src/ipc.ts` is 15 KB. `src/ipc-auth.test.ts` is 17 KB — tests are larger than the source, which is a good sign for auth hardening. `src/sender-allowlist.ts` + tests covers sender boundary enforcement.

**Test density.** Eleven `.test.ts` files colocated with source in `src/`. Vitest is the test runner. Real, not cosmetic.

**Plugin architecture.** `src/channels/` is tiny (692 bytes of registry + 169 bytes of index) — the channel connectors are separate repos loaded via the registry. Clean plugin boundary.

**Sibling repo note.** `qwibitai/nanoclaw-docker-sandbox` has a root listing identical to the main repo. Flagged as a yellow signal, not merged into the main verdict — may be a diverged fork, a template, or a mirror. Future verification ticket if Phoenix vendors NanoClaw.

**Phoenix bucket fit.** Axis 7 (security/guardrails) — strong. Axis 6 (boot/runtime persistence) — strong via `better-sqlite3` local persistence + container lifecycle. Axis 2 (queue/delivery) — useful via `group-queue.ts` (10.6 KB) and `task-scheduler.ts` (8.1 KB). Does not replace OpenClaw for axis 1; complements it.

**Demo-theater filter.** Passed. Code density high, TODO density zero in every file sampled, three-dependency lean, test files colocated, security code that makes deliberate protective choices rather than branded ones.

**Verdict.** Public salvage source. Real isolation architecture. Real security-conscious design. Lift-and-adapt candidate for Phoenix axis 7, with secondary contributions to axes 6 and 2.

---

## 4. NemoClaw Findings

**Reality.** `NVIDIA/NemoClaw`. Public, Apache-2.0, 19,360 stars, 2,397 forks, TypeScript, 14.5 MB, created 2026-03-15 (one month old but already substantial), pushed 2026-04-17. Docs at `docs.nvidia.com/nemoclaw/latest/`. NVIDIA enterprise repo hygiene present (SECURITY.md, CONTRIBUTING.md, extensive pre-commit config).

**Is it distinct from NanoClaw?** Yes. Different owner (NVIDIA vs qwibitai), different license (Apache-2.0 vs MIT), different purpose (OpenClaw-in-OpenShell orchestration vs lightweight container isolation), different size (14.5 MB vs 13.5 MB with different content shape). 373 repos in GitHub search reference `nemoclaw` — it has its own ecosystem (`VoltAgent/awesome-nemoclaw`, `jetsonhacks/NemoClaw-Orin`, `jetsonhacks/NemoClaw-Thor`, `LazaUK/AIFoundry-NemoClaw-AKS`).

**What NemoClaw actually is.** An **OpenClaw plugin** that orchestrates OpenClaw sandboxes inside NVIDIA OpenShell (their K8s platform) and routes inference through NIM/vLLM. Verified via `nemoclaw/openclaw.plugin.json` manifest with plugin id `"nemoclaw"`, version `"0.1.0"`, inferenceProvider options (`nvidia`, `vllm`, `openai-compatible`), and configurable blueprint registry (`ghcr.io/nvidia/nemoclaw-blueprint`).

**Blueprint layer.** `nemoclaw-blueprint/blueprint.yaml` pins `min_openclaw_version: "2026.4.2"`, `max_openshell_version: "0.0.26"`, with profiles for `default`, `ncp`, `nim-local`, and `vllm` deployment modes. Components include a sandbox image pinned by SHA256 digest. This is production-grade deployment discipline.

**Real structural code.** `src/nemoclaw.ts` is a **94 KB single file** with 0 TODOs. That file size is a god-class smell, but 0 TODOs tempers the concern — it may be an intentional single-entrypoint plugin host rather than sprawling glue. Not sampled in detail; further review required if Phoenix intends to vendor.

**Dependency weight.** Three runtime dependencies (`js-yaml`, `p-retry`, `yaml`). Comparable leanness to NanoClaw at the dep-count level.

**Compatibility with OpenClaw.** Explicit. NemoClaw is designed to plug into the OpenClaw plugin-SDK seam mapped in Pass 01 Section 3.1. This is not a competing implementation — it is an extension.

**Is the useful code isolable?** Partial. The plugin manifest and blueprint layer are portable in principle. The actual orchestration logic is coupled to NVIDIA OpenShell (their internal K8s platform), which Phoenix does not run. Lifting NemoClaw means either adopting OpenShell or substantially rewriting the orchestration surface.

**Phoenix bucket fit.** Conditional. If Phoenix Twin Peaks adopts NVIDIA OpenShell for a local/enterprise runtime tier, NemoClaw becomes a direct lift candidate for axes 1 + 6. If Phoenix stays on standard K8s or container-native tooling, NemoClaw is design-influence only.

**Demo-theater filter.** Passed, with the caveat that the 94 KB single source file needs a deeper read before any lift-and-adapt decision. NVIDIA branding is present but the code density and deployment discipline are real.

**Verdict.** Public salvage source (conditional — OpenShell-coupled). Study source always. Lift source only if NVIDIA OpenShell adoption is on the Phoenix roadmap.

---

## 5. IronClaw Findings

**Reality.** `nearai/ironclaw`. Public, dual-licensed `MIT OR Apache-2.0`, 11,846 stars, 1,350 forks, **Rust**, 32.4 MB, created 2026-02-03, pushed 2026-04-17. Owner: NEAR AI (NEAR protocol's AI wing, reputable org). Cargo package `name = "ironclaw"`, `version = "0.25.0"`, `edition = "2024"`, `rust-version = "1.92"`.

**Description and stated posture.** "OpenClaw inspired implementation in Rust focused on privacy and security." Cargo.toml description: *"Secure personal AI assistant that protects your data and expands its capabilities on the fly."*

**Workspace structure — decisive finding.** Six Rust crates in one workspace:
- `ironclaw_common` — shared types
- `ironclaw_safety` — **the guardrail crate, has its own dedicated `fuzz/` subdirectory**
- `ironclaw_skills` — plugin/skills surface
- `ironclaw_engine` — runtime
- `ironclaw_gateway` — control-plane
- `ironclaw_tui` — terminal UI

Dedicated fuzz-testing on the safety crate is the clearest single signal in this pass that IronClaw is security-first in practice, not just in language. Rust's memory-safety guarantees compound that.

**Hardening / boundary-isolation patterns.** Real and isolated. The workspace split puts safety and gateway on separate crate boundaries, meaning they can be reasoned about and tested independently. `deny.toml` enforces license and security policies at build time via `cargo-deny`. Three Dockerfiles (`Dockerfile`, `Dockerfile.test`, `Dockerfile.worker`) indicate multi-role container strategy.

**FEATURE_PARITY.md (31 KB) + COVERAGE_PLAN.md (33 KB).** They track compatibility with OpenClaw explicitly and document their security coverage plan as committed repo content. That is unusual transparency discipline.

**Is the useful code isolable?** Yes. Rust workspace crates are designed for exactly this. `ironclaw_safety` is liftable on its own. `ironclaw_gateway` similarly. Phoenix could adopt the safety crate as a reference for axis 7 hardening patterns without taking the rest of the stack.

**Test and fuzz discipline.** Repo root includes `fuzz/` (corpus + fuzz_targets), and `crates/ironclaw_safety/fuzz/` is called out as a nested fuzz tree. Continuous adversarial testing on the exact layer that matters.

**Language axis note.** This is the only Rust candidate in either pass. Adopting IronClaw means accepting a Rust dependency into Phoenix's stack, which is a strategic choice beyond this verification pass — flagged for Shane + Firedancer's review.

**Phoenix bucket fit.** Axis 7 (security/guardrails) — very strong, possibly the strongest in either pass for this axis specifically. Axis 1 (mission control) — useful via `ironclaw_gateway` if Rust is acceptable. Does not compete with OpenClaw for broad gateway duty; complements it as a hardened alternative for the security-critical lane.

**Demo-theater filter.** Passed cleanly. Rust workspace discipline, dedicated fuzz suite on the safety-critical crate, explicit feature-parity and coverage tracking, published quality gates. Security-first in architecture, not only in branding.

**Verdict.** Public salvage source. Strongest candidate for Phoenix axis 7 hardening. Language-axis decision required before adoption.

---

## 6. Nemotron Findings

**Reality.** `NVIDIA-NeMo/Nemotron` is the **Developer Asset Hub** — Apache-2.0 repo containing training recipes, usage cookbooks, deployment guides, datasets, and end-to-end reference examples. 951 stars, 200 forks, Jupyter Notebook primary language, pushed 2026-04-17. Homepage: `docs.nvidia.com/nemotron/latest/`. The repo itself is not the artifact; it is the index for the artifacts.

**Family members verified via `usage-cookbook/` directory listing:**
- `Nemotron-3-Nano` (router / triage class)
- `Nemotron-3-Super`
- `Nemotron-3-Ultra-Base` (announced at GTC San Jose 2026 per README)
- `Nemotron-Nano-9B-v2` (9B parameters, Studio-capable with modest hardware)
- `Llama-Nemotron-Super-49B-v1.5` (49B, Studio-capable with significant hardware)
- `Llama-3.1-Nemotron-Safety-Guard-V3` (safety-specialized guard model — directly relevant to Phoenix axis 7)
- `Nemotron-Nano2-VL` (vision-language variant)
- `Nemotron-Parse-v1.1` (parsing-specialized)

**Ollama availability.** Direct Ollama library check was CORS-blocked during this pass. Based on NVIDIA's historical release pattern, Nano-class models (including Nemotron-Nano-9B-v2) have typically shipped GGUF/Ollama-compatible variants within days of release; the Super-49B has community quantizations; the Ultra is cloud-only via NIM. Verification against `ollama.com/library` is flagged as an open question.

**License for practical use.** The repo code is Apache-2.0 (clean). The model weights ship under NVIDIA's **Open Model License Agreement** (commercially usable with attribution and some content-use restrictions — no deepfakes, etc.). This is usable for Phoenix commercial deployment but should be reviewed by whoever owns Phoenix licensing decisions before production rollout.

**Role in Phoenix Twin Peaks — recommendation.** Treating the mission question seriously:

- **Router / triage model:** `Nemotron-3-Nano` or `Nemotron-Nano-9B-v2`. Small enough to run locally on modest hardware, fast enough for dispatch decisions. Strong candidate.
- **Lean-mode sovereign fallback:** `Nemotron-Nano-9B-v2` is the likely anchor. 9B is a sweet spot for quantized local inference (~5-6 GB VRAM at Q4). Realistic on a workstation-class box.
- **General local worker (Studio-capable mid-size):** `Llama-Nemotron-Super-49B-v1.5`. Needs ~40 GB VRAM quantized, so effectively an A6000 / RTX 6000 Ada / H100 tier box. Real but expensive.
- **Oversized / out of scope:** Nemotron-3-Ultra-Base — cloud-only in practice.
- **Bonus axis-7 contribution:** `Llama-3.1-Nemotron-Safety-Guard-V3` is a drop-in safety classifier that Phoenix could pair with either IronClaw or NanoClaw to add a model-layer safety check. This is the most Phoenix-actionable single artifact in the Nemotron family.

**Is Nemotron a realistic Twin Peaks runtime lane right now?** Yes — specifically the Nano-9B and Safety-Guard-V3. The Super-49B is realistic only with dedicated workstation-class hardware. The Ultra is not.

**Verdict.** Not a code-salvage row. Public runtime candidate. Recommend pairing `Nemotron-Nano-9B-v2` as the local router/fallback and `Llama-3.1-Nemotron-Safety-Guard-V3` as a model-layer safety classifier. Revisit Super-49B adoption if/when Phoenix hardware tier supports it.

---

## 7. Source Family Separation

The four rows sit on different axes and do not collapse:

- **NanoClaw** is about **container isolation** at the agent level, for a small-footprint deployment. Core idea: one agent, one container, with a security-scoped mount allowlist stored outside the project. Axis: isolation / container architecture.
- **NemoClaw** is about **NVIDIA OpenShell integration** — it extends the OpenClaw plugin-SDK to run OpenClaw inside NVIDIA's K8s platform with NIM/vLLM inference routing. Axis: gateway / control-plane + local-model runtime (conditional on OpenShell adoption).
- **IronClaw** is about **memory-safe Rust-based hardening** — a workspace-level split where the safety crate has its own fuzz suite. Axis: security / hardening.
- **Nemotron** is a **model family**, not a codebase. Axis: local-model runtime. Its Phoenix role is runtime choice, not source adaptation. Safety-Guard-V3 is the bonus piece that crosses into axis 7 at the model layer.

Specifically, NanoClaw and NemoClaw are not the same thing and do not merge — different owners, licenses, purposes, ecosystems, and sizes. Nemotron is not a claw repo and does not merge with any of them. IronClaw is an OpenClaw-inspired Rust reimplementation but sits on its own axis (Rust + security-first) and does not collapse into OpenClaw's TypeScript family.

---

## 8. Best Candidate By Axis

- **Local-model runtime (axis 8/9 adjacent, Phoenix Twin Peaks runtime choice):** Nemotron — specifically `Nemotron-Nano-9B-v2` as router/fallback and `Llama-3.1-Nemotron-Safety-Guard-V3` as a model-layer safety classifier. `Llama-Nemotron-Super-49B-v1.5` if hardware permits.
- **Isolation / container architecture:** NanoClaw. Strongest container-per-agent design in this pass, with real external-allowlist mount security and three-dependency leanness.
- **Security / hardening:** IronClaw. Strongest single candidate for this axis in either Pass 01 or Pass 05. Rust memory safety + dedicated safety crate with fuzz suite + explicit coverage tracking.
- **Gateway / control-plane:** NemoClaw for the OpenShell path specifically. OpenClaw remains the primary gateway source from Pass 01 for the general path.
- **Adjacent ecosystem only:** none of the four rows collapse into this label this pass. All four have concrete Phoenix axis fit (though NemoClaw's is conditional).

---

## 9. Risks / License / Access Notes

- **NanoClaw (MIT):** clean. Attribution required on redistribution. No license blocker. Single concern: the `@onecli-sh/sdk` bridge is an additional dependency surface that should be briefly vetted before vendoring.
- **NemoClaw (Apache-2.0):** clean repo license. The 94 KB `nemoclaw.ts` single file should get a deeper read before any lift. The OpenShell coupling is a strategic dependency — adopting NemoClaw as-is effectively commits Phoenix to NVIDIA OpenShell.
- **IronClaw (MIT OR Apache-2.0 dual):** clean. Rust adoption is a stack-level decision, not a license one — flagged for Shane + Firedancer.
- **Nemotron repo (Apache-2.0):** clean for the recipe code. **Model weights ship under NVIDIA Open Model License Agreement** — commercially usable with attribution and content-use restrictions. Should be reviewed before production rollout.
- **Ollama availability** was CORS-blocked during this pass and should be re-verified directly against `ollama.com/library` before final runtime selection — listed as open question.
- **No copyleft (GPL/AGPL/SSPL) exposure** in any of the four rows. Risk surface stays small.

---

## 10. Fastest Safe Next Move

Open three build-ledger issues after this report is committed:

1. **"NanoClaw isolation-seam adaptation — container-runner, mount-security, ipc into Phoenix axis 7 bucket."** Reference Section 3 findings. Scope to lift-and-adapt the three named modules under MIT attribution. Do not vendor the full 13.5 MB repo.
2. **"IronClaw safety-crate study for Phoenix hardening playbook."** Reference Section 5 findings. Scope to study `ironclaw_safety` + its fuzz suite as a reference model for axis 7 hardening, regardless of whether Rust is adopted. If Rust is acceptable, promote to lift-and-adapt.
3. **"Nemotron runtime selection for Twin Peaks lean-mode fallback."** Reference Section 6 findings. Scope to validate `Nemotron-Nano-9B-v2` Ollama availability, then pair it with `Llama-3.1-Nemotron-Safety-Guard-V3` as a model-layer safety classifier. Licensing review required before production.

NemoClaw does not warrant a build-ledger issue until Shane + Firedancer decide whether NVIDIA OpenShell is on the Phoenix roadmap. Park it as design-influence for now; promote to first-wave if OpenShell becomes a commitment.

---

**Best Phase 5 candidates: `qwibitai/nanoclaw` for agent-level container isolation (MIT, axis 7), `nearai/ironclaw` for memory-safe Rust-based hardening with a fuzz-tested safety crate (dual MIT/Apache-2.0, axis 7), and `Nemotron-Nano-9B-v2` paired with `Llama-3.1-Nemotron-Safety-Guard-V3` for the Twin Peaks local-runtime and model-layer safety lanes (NVIDIA Open Model License, runtime axis) — with `NVIDIA/NemoClaw` held as a conditional gateway candidate pending an OpenShell-adoption decision.**
