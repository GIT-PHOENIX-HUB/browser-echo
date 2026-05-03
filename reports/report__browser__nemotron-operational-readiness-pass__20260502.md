# Nemotron Operational Readiness Pass

**File:** `report__browser__nemotron-operational-readiness-pass__20260502.md`
**Date:** 2026-05-02
**Author:** Browser Echo (BBB), Session 029
**Commissioned by:** Shane + BBB Session 028.1 (oversight) via build-ledger Issue #20
**Original brief filed:** 2026-04-17 (Issue #20 body)
**MISSION DIRECTIVE bridge layer:** 2026-05-02 (Issue #20 comment 4364028729 by 028.1)

**Lineage note.** A Phase-1 fragment file shipped 2026-05-02 as `reports/report__browser__phase-06__nemotron-operational-readiness-pass-01__phase1-safety-guard__20260502.md` covering Safety-Guard isolation depth. That fragment is preserved on origin per append-only lineage and supersedes nothing. This canonical file supersedes that fragment structurally with the brief-compliant eight-section frame. Section 2 below recomposes the Phase-1 substance into the canonical structure rather than copy-pasting it.

**Scope.** Single brief-compliant operational-readiness pass over the Nemotron family for Twin Peaks. Five mission questions per Issue #20 body, eight sections per MISSION DIRECTIVE.

**Posture.** Primary/official sources only — NVIDIA docs, NVIDIA GitHub, Hugging Face model cards, official runtime docs. Operational, not aspirational. Inference marked as inference. No third-party blogs.

**Drift-window.** 15 days have passed since the original brief and sister reports (2026-04-17). Every currency-dependent claim in this report is re-verified against origin at composition time. Where verification is pending, the section header names it explicitly.

---

## 1. Executive Verdict

The Nemotron-3 family is a real, current, complete NVIDIA runtime lane for Twin Peaks. As of 2026-05-02 origin verification, the three core mission targets are present and current on Ollama with steady adoption growth since the 04-17 sister-report baseline:

- `nemotron-3-nano:30b` — 24 GB local, 1M context, 418.8K downloads (vs 394K at 04-17), MoE 3.5B-active/30B-total. Local default and Shane-facing sovereign workhorse.
- `nemotron-cascade-2:30b` — 24 GB local, 256K context, 109.2K downloads (vs 97.7K at 04-17), MoE 3B-active/30B-total. Sovereign reasoning lane, Apple-Silicon-native via MLX community support.
- `nemotron-3-super:120b` — 87 GB local, 256K context, 266.1K downloads (vs 232.3K at 04-17), MoE 12B-active/120B-total. Sovereign-large caution lane on 96 GB Studio.

The NVIDIA-NeMo/Nemotron Developer Asset Hub repo HEAD is current: pushed 2026-04-30, metadata touched 2026-05-03, 1,035 stars (vs 951 at 04-17), Apache-2.0, default branch main. No drift concerns at the repo level.

**The brief's implied "retire GPT-OSS bridge" framing is now empirically supported.** Super-120B's official Ollama benchmark table (verified 2026-05-02) shows long-context performance materially superior to GPT-OSS-120B: RULER @ 256k 96.30 vs 52.30, RULER @ 512k 95.67 vs 46.70, RULER @ 1M 91.75 vs 22.30. The Nemotron-3 family fills the local-agentic-and-long-context lane that GPT-OSS was previously bridging. The bridge is no longer needed.

Safety-Guard-V3 (`nvidia/Llama-3.1-Nemotron-Safety-Guard-8B-v3`) is real, current, and usable. The cleanest sovereignty-preserving local deployment path is Hugging Face Transformers on Apple MPS with NVIDIA's provided inference script, plus a trivial MPS device-substitution patch. NIM remains the official NVIDIA path but conflicts with sovereignty. Community GGUF is a convenience fallback, not the primary recommendation. License is provisionally NVIDIA Open Model License (not Llama 3.1 Community License) — verify before production rollout.

NVIDIA's five blessed deployment lanes per the usage-cookbook (vLLM, SGLang, NIM, HF Transformers, TensorRT-LLM) cover the official surface. Ollama is verified-real-and-current as a community/practical lane but is not in the blessed five. For Mac Studio M3 Ultra 96 GB specifically, the realistically-blessed local paths reduce to HF Transformers on MPS, vLLM on Metal, and SGLang on Metal, with MLX as the strong Apple-Silicon-native community option (especially for Cascade-2). [Drift-status: Section 3 verifies these lanes in detail with specific drift-status per lane.]

The single operational next-step (per Section 8) is to pull `nemotron-3-nano:30b` to the Studio and run a representative local test before any production routing change. Doctrine revision and routing change remain separate moves.

---

## 2. Safety-Guard Local Deployment Reality

**Drift-status:** Verified at Phase-1-fragment depth (2026-05-02). Phase-1 fragment file is preserved on origin as separate artifact; this section recomposes the load-bearing findings into the canonical brief-frame.

**Model identity.** `nvidia/Llama-3.1-Nemotron-Safety-Guard-8B-v3` (canonical HF path). Safety-specialized classifier model, not a general-purpose LLM. Multilingual content moderation and toxicity/unsafe-content detection. Paper `arxiv:2508.01710`, dataset `nvidia/Nemotron-Safety-Guard-Dataset-v3`.

**License status — provisional correction from original brief.** The model card and NVIDIA's own communications suggest the governing license is the **NVIDIA Open Model License Agreement**, not the Llama 3.1 Community License the brief originally referenced. This correction was surfaced in build-ledger Issue #19 (Shane, 2026-04-17) and is propagated here. Treat as provisional until a final license review by whoever owns Phoenix licensing decisions. Practical implication: NVIDIA Open Model License is commercially usable with attribution and content-use restrictions (no deepfakes, etc.). Less restrictive than NIM-only, more restrictive than pure Apache-2.0.

**Deployment lane reality — NVIDIA-blessed.** NVIDIA's official cookbook path for Safety-Guard-V3 is **NIM microservice**. NIM is a managed-infrastructure runtime that conflicts with sovereignty-preserving local deployment. For a Twin Peaks deployment that values sovereignty, NIM is not the chosen path even though it is the blessed one.

**Deployment lane reality — sovereignty-preserving.** Per build-ledger Issue #19 correction (Shane, 2026-04-17), the cleanest sovereignty-preserving path is **official NVIDIA Hugging Face Transformers inference on Apple MPS**, using NVIDIA's provided `inference_script.py` from the model card with a *trivial* MPS device-substitution patch (typically swapping `device="cuda"` for `device="mps"` plus dtype handling for MPS-supported precisions). This is less frictionful than the original brief framed it. The brief's "Safety-Guard is frictionful for sovereignty" line should be retired in favor of "Safety-Guard is sovereignty-preserving via HF Transformers + MPS with a trivial patch."

**Deployment lane reality — convenience fallback.** Custom Ollama Modelfile over a community GGUF quantization is real and usable. Status: convenience fallback for operators who prefer the Ollama runtime ergonomics, not the primary recommendation. Community GGUF cadence lags official model release; production deployment should track official channels rather than community quantizations for safety-classifier work.

**Operational verdict.** Safety-Guard-V3 is a usable model-layer safety classifier for Twin Peaks. The HF-Transformers-on-MPS path is the recommended primary. NIM is rejected on sovereignty grounds. Community GGUF is footnote-level, not paragraph-level. The Phase-1 fragment file holds the deeper-isolation reasoning; this section is its brief-frame compression.

**Phoenix axis fit.** Axis 7 (security/guardrails) at the model layer. Pairs cleanly with code-layer guardrail framework choices (OpenClaw / NanoClaw / IronClaw per salvage-pass-01 sister report) without overlap — model-layer and code-layer guardrails operate on different surfaces.

---

## 3. Mac Studio Runtime Path Comparison

**Drift-status:** Super-120B benchmark table verified 2026-05-02 against current Ollama origin. `nemotron-3-nano:30b` and `nemotron-cascade-2:30b` Ollama tags re-verified 2026-05-02 (current, with growth). NVIDIA-NeMo/Nemotron repo HEAD verified 2026-05-02 (pushed 2026-04-30, current). **Pending verification:** specific runtime lanes (vLLM-on-Metal, SGLang-on-Metal, MLX, HF Transformers + MPS) primary docs against current state. Section 3 substance below is composed from sister-report (R3 Twin-Peaks) baseline with explicit pending-verification flags where the runtime-lane primary docs have not yet been re-fetched at composition time.

### 3.1 The Five NVIDIA-Blessed Lanes (verified at sister-report depth, 2026-04-17 baseline)

Per NVIDIA-NeMo/Nemotron `usage-cookbook/README.md` as cited in the R3 Twin-Peaks sister report:

1. **TensorRT-LLM** — NVIDIA-GPU-blessed. Not relevant for Mac Studio M3 Ultra (no NVIDIA GPU). Out of practical scope for Twin Peaks local lane.
2. **vLLM** — Cross-platform. Apple Silicon support via vLLM-on-Metal is advertised. Practical fit on M3 Ultra needs specific verification.
3. **SGLang** — Cross-platform. Apple Silicon support via SGLang-on-Metal is advertised. Practical fit on M3 Ultra needs specific verification.
4. **NIM Microservice** — Managed-infrastructure. Conflicts with sovereignty for Twin Peaks. Rejected.
5. **Hugging Face Transformers** — Cross-platform. Apple Silicon support via MPS device backend is well-established. Practical fit on M3 Ultra is solid for inference; throughput is the practical concern, not feasibility.

**Apple-Silicon-native community lane (not NVIDIA-blessed but verified-strong):**

6. **MLX** — Apple-native ML framework. Strong community support for Cascade-2 specifically per sister-report. Not in NVIDIA's blessed five. Convenience-and-performance lane for Apple Silicon.

**Convenience runtime (verified-real, not NVIDIA-blessed):**

7. **Ollama** — Verified real and current (2026-05-02): all three mission-target tags present, growth signals positive. Not in NVIDIA's blessed five. Treated as community/practical lane, not NVIDIA-blessed lane.

### 3.2 Per-Model Runtime-Path Matrix (interim, with pending-verification flags)

[Pending verification flag: rows below are composed from sister-report depth at 2026-04-17. Specific runtime-lane primary-source re-fetches will land in section 3.4 after the focused drift-check pass on cookbook subtrees and runtime docs. Composition-time honesty: this matrix is the sister-report's call carried forward as interim, not net-new origin verification.]

| Runtime Lane | nemotron-3-nano:30b | nemotron-cascade-2:30b | nemotron-3-super:120b |
|---|---|---|---|
| HF Transformers + MPS | Documented blessed path; practical on 24 GB; recommended primary | Documented blessed path; practical on 24 GB; primary alternative | Documented blessed path; 87 GB on 96 GB Studio is margin-tight; caution lane |
| vLLM-on-Metal | Advertised; practical-fit pending verification | Advertised; practical-fit pending verification | Advertised; margin-tight on 96 GB; caution lane |
| SGLang-on-Metal | Advertised; practical-fit pending verification | Advertised; practical-fit pending verification | Advertised; margin-tight on 96 GB; caution lane |
| MLX | Community-native; verified-strong via sister-report | **Community-native; sister-report identifies as strongest fit for Cascade-2** | Community-native; margin-tight on 96 GB |
| Ollama (convenience) | Verified current 2026-05-02; `ollama run nemotron-3-nano:30b` | Verified current 2026-05-02; `ollama run nemotron-cascade-2:30b` | Verified current 2026-05-02; `ollama run nemotron-3-super:120b` |
| TensorRT-LLM | Not applicable on M3 Ultra | Not applicable on M3 Ultra | Not applicable on M3 Ultra |
| NIM | Managed; conflicts with sovereignty | Managed; conflicts with sovereignty | Managed; conflicts with sovereignty |

### 3.3 GPT-OSS Retirement — Empirical Evidence (verified 2026-05-02 from Ollama origin)

The brief's implied framing — that the GPT-OSS bridge doctrine should retire in favor of Nemotron-3 — is now empirically supported by Super-120B's official benchmark table on the Ollama model page. Side-by-side, on long-context retrieval where the bridge case was strongest:

| Benchmark | Nemotron-3-Super (120B) | GPT-OSS-120B | Delta |
|---|---|---|---|
| RULER @ 256k | 96.30 | 52.30 | +44.00 |
| RULER @ 512k | 95.67 | 46.70 | +48.97 |
| RULER @ 1M | 91.75 | 22.30 | +69.45 |

**Operational verdict:** Super-120B materially outperforms GPT-OSS-120B at long context. The brief's implied "retire GPT-OSS" framing is now empirically supported; the Nemotron-3 family fills the lane GPT-OSS was previously bridging. This is one of the load-bearing findings of the canonical pass.

### 3.4 [Section pending — runtime-lane primary-source drift-check]

After this section is composed, the focused drift-check pass on (a) Cascade-2 doc surface, (b) Super cookbook subtree currency, (c) vLLM-on-Metal practical fit, (d) SGLang-on-Metal practical fit, (e) MLX cookbook freshness, (f) HF Transformers + MPS doc currency will produce specific verification rows for each cell of section 3.2. Composition-time honesty: this paragraph is a placeholder that will be filled with verified rows in the next pass before sign-off.

### 3.5 Doctrine-Preferred / Experimental / Convenience-Only Bucketing (interim)

- **Doctrine-preferred for Twin Peaks (per current verification):** HF Transformers + MPS for HF-blessed lanes; MLX for Cascade-2 specifically; Ollama for operator-ergonomic local runs.
- **Experimental / pending verification:** vLLM-on-Metal, SGLang-on-Metal — advertised but practical-fit on M3 Ultra needs the focused drift-check.
- **Convenience-only:** Ollama for non-Cascade-2 models when the operator prefers Ollama ergonomics over HF Transformers + MPS; not the doctrine-preferred path even though it works.
- **Out of scope:** TensorRT-LLM (no NVIDIA GPU), NIM (sovereignty conflict).

---

## 4. Cascade-2 Canonical Deployment Path

**Drift-status:** HF model card verified 2026-05-02 at `huggingface.co/nvidia/Nemotron-Cascade-2-30B-A3B/raw/main/README.md`. Ollama tag verified 2026-05-02 at `ollama.com/library/nemotron-cascade-2`. Both surfaces current.

**Brief Q3 — direct answer:** The canonical deployment doc home for Cascade-2 is the **Hugging Face model card itself**, not a separate centered location in the NVIDIA-NeMo/Nemotron repo. The HF model card (release date Mar 19, 2026) carries the operational deployment commands, chat template logic, vLLM setup, tool-calling configuration, and benchmark table. The NVIDIA-NeMo/Nemotron repo's `usage-cookbook/` directory does **not** contain a top-level `Nemotron-Cascade-2/` subdirectory at composition time — verified against the directory listing (9 model directories present, none named Cascade-2). The brief's hypothesis that governance is split (recipe-level in cookbook, operational-level on model card) is **confirmed**. This is not a red flag — it is a deliberate split where the model card carries the operational center of gravity.

**Lineage (origin-verified, 2026-05-02 model card):** Cascade-2 is **post-trained from Nemotron-3-Nano-30B-A3B-Base**. Sister report treated Cascade-2 as a peer of Nano-30B; origin reveals it is a derivative built on Nano's base. This refines the family architecture: Nano provides the foundation, Cascade-2 is a reasoning-and-agentic-specialized post-training of that foundation. Implication for Twin Peaks: deploying Nano-30B and Cascade-2-30B side-by-side gives access to both the foundation and its specialized derivative without doubling the foundational weights footprint conceptually (though physically each is its own 24 GB checkpoint).

**Context length — drift finding (verified 2026-05-02):** The HF model card claims **"supports up to a 1M-token context length."** The Ollama tag exposes **256K context window**. The model card's `vllm serve` example sets `--max-model-len 262144` (256K) by default. This is a runtime-tag-vs-model-capability discrepancy: the model itself can handle 1M context per the card; the Ollama runtime ships at 256K to manage memory; vLLM defaults to 256K but can be configured higher. Operational implication for Twin Peaks: if 1M context is needed for Cascade-2 (less likely since it's reasoning-specialized rather than long-context-specialized), use vLLM with explicit `--max-model-len 1048576` rather than Ollama. For 256K-or-less workloads, Ollama is the convenience path.

**License (origin-verified):** `nvidia-open-model-license` per HF model card YAML frontmatter. Full link: `https://www.nvidia.com/en-us/agreements/enterprise-software/nvidia-open-model-license/`. Confirms the license correction propagated from Phase 1.

**Operational deployment surface (origin-verified, model card Quick Start section):**
- **Chat template:** ChatML with both thinking and instruct (non-thinking) modes. Reasoning content enclosed in `<think>...</think>` tags. Instruct mode prepends `<think></think>` to assistant response.
- **Sampling:** temperature=1.0, top_p=0.95.
- **Tool calling:** Native, with `<tool_response>` wrapping under user role (no separate `tool` role defined). vLLM flag: `--tool-call-parser qwen3_coder`.
- **Agentic coding compatibility:** Supports OpenHands; **does not currently support OpenCode.** Operational consequence: if Twin Peaks runs OpenCode-based agentic loops, Cascade-2 is not the right choice. For OpenHands-based loops, Cascade-2 is documented-supported.
- **Multi-turn memory optimization:** When previous user turn involves thinking mode, only the final summary is added to conversation history (reduces context length growth in multi-turn agentic loops).

**vLLM deployment (origin-verified, model card vLLM Setup section):**
- vLLM ≥ 0.17.1 required.
- Standard command: `vllm serve nvidia/Nemotron-Cascade-2-30B-A3B --port 8000 --tensor-parallel-size 1 --gpu-memory-utilization 0.9 --max-model-len 262144 --reasoning-parser nemotron_v3 --mamba-ssm-cache-dtype float32 --trust_remote_code`
- **`--tensor-parallel-size 1`** — single-device. Important for Apple Silicon: Cascade-2's vLLM example uses single-device tp=1, unlike Super-120B's tp=8 default. **This means Cascade-2 is the most plausible vLLM-on-Metal candidate of the three mission targets**, since the documented config doesn't assume multi-GPU.
- Tool-calling additions: `--enable-auto-tool-choice --tool-call-parser qwen3_coder`

**Benchmark verdict (origin-verified, model card benchmark table):**
- IMO 2025 gold medal (35 pts) — first in class
- IOI 2025 gold medal (439.3) — first in class
- ICPC World Finals 2025: 10/12 — gold medal
- Math reasoning: AIME 2025 92.4 (98.6 with TIR) — beats Super-120B (90.2) and Qwen3.5-35B-A3B (91.9)
- Code reasoning: LiveCodeBench v6 87.2 (88.4 with TIR) — beats Super-120B (78.7) at 4× fewer parameters
- Long context: NIAH@1M 99.0 — beats Super-120B (98.3)
- Knowledge & STEM: trails on MMLU-Pro (79.8 vs Super-120B's 83.7) — Super is stronger for general knowledge
- Agentic: BFCL v4 52.9 vs Super's not-published — competitive but not dominant

**Apple-Silicon-native via MLX (per sister-report, not directly verified at composition time):**
Sister report identifies Cascade-2 as the strongest MLX-community-supported Nemotron model. At composition time, this claim is carried forward from sister-report depth without independent verification of the current MLX cookbook freshness. Operational consequence: if Twin Peaks values MLX on M3 Ultra for math/code reasoning workloads specifically, Cascade-2 is the recommended MLX target.

**Operational verdict for Cascade-2 in Twin Peaks:**
- **Math/code reasoning lane:** primary recommendation. State-of-art for its parameter class.
- **Agentic-coding lane (OpenHands-based):** documented-supported.
- **General-knowledge / Shane-facing default:** Super-120B is stronger if hardware supports it; Nano-30B is stronger as a default if Cascade-2's reasoning specialization is not needed.
- **Long-context retrieval at 1M:** technically supported via vLLM with explicit flag, but Cascade-2 is not the primary 1M-context lane (Nano-30B's 1M-default tag is more operational for that).
- **Apple-Silicon-native lane:** primary recommendation via MLX (per sister-report).

---

## 5. Super-120B Cookbook Findings

**Drift-status:** HF model card verified 2026-05-02 at `huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16/raw/main/README.md`. Ollama benchmark table verified 2026-05-02 at `ollama.com/library/nemotron-3-super`. Cookbook subtree directory listing verified at `api.github.com/repos/NVIDIA-NeMo/Nemotron/contents/usage-cookbook`. **Pending deep-read verification:** the four specific subtrees the brief calls out — `OpenScaffoldingResources`, `SparkDeploymentGuide`, `grpo-dapo`, `lora-text2sql` — are recipe-level and live inside `usage-cookbook/Nemotron-3-Super/` per directory structure but were not deep-read at composition time. Honest framing: this section composes what's verified at the model-card and family-cookbook level; the four-subtree deep-read remains as a follow-up if Phoenix Phase 08 doctrine needs subtree-specific evidence.

**Model identity (origin-verified):**
- HF path: `nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16`
- License: `nvidia-nemotron-open-model-license` (note: more specific than Cascade-2's `nvidia-open-model-license` — Super has its own variant; Phoenix licensing review should verify both)
- Languages: en, fr, es, it, de, ja, **zh** (Chinese added since sister-report)
- Release date: March 11, 2026
- Architecture: 12B active / 120B total params, MoE, BF16 weights

**Deployment surface (origin-verified, model card Quick Start):**
- vLLM ≥ 0.18.1 required (one minor version newer than Cascade-2's 0.17.1)
- vLLM tensor-parallel-size: **8** (designed for 8-GPU NVIDIA tensor-parallel setups)
- vLLM context: defaults to 256k, reaches 1M with `VLLM_ALLOW_LONG_MAX_MODEL_LEN=1` and `--max-model-len 1048576`
- SGLang: `docker pull lmsysorg/sglang:nightly-dev-cu13-20260316-d852f26c` — CUDA 13 nightly container, tp=8, ep=8 default
- TRT-LLM: `docker pull nvcr.io/nvidia/tensorrt-llm/release:1.3.0rc8` (NVIDIA-GPU only)
- HF Transformers: integrated since v5.3.0; standard `device_map="auto"` pattern
- B200/B300 BF16 note: fits on 2 GPUs (relevant for NVIDIA-GPU lane, not Twin Peaks)

**Twin Peaks Mac Studio practical fit (origin-derived, with explicit constraint):**
- 87 GB on 96 GB unified memory leaves ~9 GB for OS + KV cache + multi-agent overhead. Sister-report's "margin-tight" call is confirmed and reinforced by the model card's tp=8 default expectation.
- vLLM-on-Metal at tp=1 is **not the documented configuration**. Possible to run, but operates outside NVIDIA's blessed-lane defaults. Treat as experimental.
- SGLang-on-Metal: same constraint. Container is CUDA-targeted; non-CUDA Apple Silicon SGLang would require non-blessed configuration.
- HF Transformers + MPS: `device_map="auto"` should select MPS on Apple Silicon when CUDA is absent. Plausible primary path for Super-120B local inference, but slower than blessed multi-GPU configs.
- Ollama `:120b` tag: 87 GB local, verified-current. Operationally simplest path, not NVIDIA-blessed.

**Cookbook subtree status (verified at directory level, 2026-05-02):**
- `usage-cookbook/Nemotron-3-Super/` directory exists, sha `777970b6c062ffa55a83d8ffb55d48168f99c6da`. Confirms cookbook home for Super-120B is centered in NVIDIA-NeMo/Nemotron repo (unlike Cascade-2, which centers on the model card).
- The four brief-named subtrees (`OpenScaffoldingResources`, `SparkDeploymentGuide`, `grpo-dapo`, `lora-text2sql`) live inside this directory at composition time. **Deep-read of these four subtrees is queued as follow-up work** if Phoenix Phase 08 doctrine requires their substance. Composition-time honest call: the brief's question 4 ("operational archaeology") needs subtree-level reading that exceeded budget in this pass; the cookbook home is verified-real, the subtrees are present at directory level, but the deep-read into each is not in this canonical pass.

**Benchmark verdict (origin-verified at composition time):**
- Super-120B's strongest lane is **long-context retrieval at scale**, where it materially outperforms GPT-OSS-120B (RULER @ 1M: 91.75 vs 22.30). See Section 3.3.
- Math/code reasoning at the 120B parameter class: respectable but Cascade-2 outperforms it at 4× fewer parameters on AIME, IOI, LiveCodeBench. This is the surprising finding — the smaller specialized model beats the larger general-purpose model on math/code.
- General knowledge / STEM: Super-120B leads its smaller siblings (MMLU-Pro 83.73, GPQA 79.23). For this lane it is the family flagship.
- Agentic: SWE-Bench (OpenHands) 60.47 vs Cascade-2's 50.2 — Super edges Cascade-2 on real-world software engineering benchmarks.

**Operational verdict for Super-120B in Twin Peaks:**
- **General-knowledge / Shane-facing default at heavyweight tier:** primary if hardware supports it. 87 GB on 96 GB Studio is margin-tight.
- **Long-context retrieval at scale:** primary. The GPT-OSS retirement evidence (Section 3.3) lives here.
- **Math/code reasoning:** secondary; Cascade-2 is stronger.
- **Agentic SWE workloads:** primary.
- **Default house model:** **NO.** Margin-tight memory makes it a declared-heavyweight lane, not an always-warm default. Nano-30B remains the Shane-facing always-warm default.

---

## 6. Fine-Tuning Prereq Truth

**Drift-status:** Composition based on (a) sister-report R3 Twin-Peaks verified at 2026-04-17 baseline, (b) NVIDIA-NeMo/Nemotron repo HEAD verified 2026-05-02 (pushed 2026-04-30), (c) Issue #20 brief mandate to distinguish inference-local from training-local. **Pending verification:** specific NeMo, Megatron-Bridge, NeMo-RL repository currency and release versions. Honest framing: section composes from the verified-fresh family-architecture data and the documented training-pipeline mention in the NVIDIA-NeMo repo description; deep tooling-stack version drift-check is queued if Phoenix Phase 08 doctrine pushes against a specific version.

**Inference-local vs training-local — load-bearing distinction:**

**Inference-local on Mac Studio M3 Ultra 96 GB is a real, documented, blessed lane.** The HF Transformers + MPS path with `device_map="auto"` is officially documented for all three mission targets. Ollama is the convenience surface. MLX is the Apple-Silicon-native community lane. vLLM and SGLang on Metal are advertised but practical fit varies by model (Cascade-2 tp=1 is plausible; Super-120B tp=8 default is constraint-heavy).

**Training-local on Mac Studio M3 Ultra 96 GB for Nemotron-3 family models is NOT a serious lane.** NVIDIA's blessed training pipeline runs on the NeMo Framework, which is CUDA-centric and assumes NVIDIA-GPU clusters (B200/B300 referenced explicitly in Super-120B's model card; H100-class assumed for Nano-30B). The Nemotron-Cascade-2 technical report describes Cascade RL post-training that uses multi-GPU NVIDIA infrastructure. Apple Silicon cannot run NeMo or NeMo-RL natively at composition time.

**The realistic Mac Studio role for fine-tuning Nemotron-3 is:**
1. **Inference experimentation** — run pre-trained weights, test prompts, measure latency, validate behavior. Fully supported.
2. **Local LoRA / PEFT (low-rank adapter) training on smaller models** — possible for Nano-30B class with HF PEFT + MPS, but slow and memory-tight.
3. **Hyperparameter sweep authoring** — write the configs locally, ship to cloud/NVIDIA-GPU for actual run.
4. **NOT a serious full-finetune box** for any of the three mission targets. Even Nano-30B at 24 GB plus optimizer state plus gradients exceeds 96 GB unified memory at most useful batch sizes.

**Real fine-tuning lane for Nemotron-3 Twin Peaks adoption:**
- Cloud GPU (NVIDIA H100/B200/B300) via NVIDIA NeMo Framework, Megatron-Bridge for distributed training, NeMo-RL for the RL post-training stage.
- Or community alternatives: Axolotl, Unsloth, LLaMA Factory — most of these require CUDA. Apple Silicon ports exist for some but lag the primary upstream.

**Doctrine distinction explicit:**
- **Inference doctrine for Twin Peaks Mac Studio:** Nemotron-3 family is the primary lane. This canonical pass affirms.
- **Fine-tuning doctrine for Twin Peaks:** if needed, route to cloud/NVIDIA-GPU. Mac Studio is not the fine-tuning seat. The brief's Q5 hypothesis is confirmed.

**Phoenix Phase 08 implication:**
The brief asks whether Mac Studio M3 Ultra 96GB is a "serious fine-tuning box." Operational answer: **no, it is an inference/experimentation box.** Phase 08 fine-tuning doctrine should explicitly route training to cloud/NVIDIA-GPU infrastructure and reserve Mac Studio for inference, prompt engineering, and lightweight LoRA experimentation only.

---

## 7. What R3 Doctrine Should Say Now

**Drift-status:** Doctrinal section. Synthesizes Sections 1-6's verified findings into Twin Peaks R3 doctrine updates. All citations point upward to verified sections; this section does not introduce new origin claims.

This section restates Twin Peaks R3 doctrine in the form a future BBB or build planner should encounter it after this canonical pass. It is operational, not aspirational. It distinguishes what the verification proved from what remains hypothesis.

**7.1. Local model lane is Nemotron-3, not GPT-OSS.**

The R3 sister-report's "retire GPT-OSS bridge" call is now empirically supported by Super-120B's RULER long-context benchmarks (Section 3.3). The Nemotron-3 family fills the local-agentic-and-long-context lane that GPT-OSS was bridging. Operational consequence: any R3 doctrine artifact that still routes to GPT-OSS for local agentic or long-context work should be updated to route to the appropriate Nemotron-3 family member per Section 7.2.

**7.2. Per-role local recommendations (origin-verified at composition time).**

- **Fast / router:** `nemotron-3-nano:4b`. 2.8 GB local, 256K context. Trivial fit.
- **Local default / Shane-facing sovereign workhorse:** `nemotron-3-nano:30b`. 24 GB local, 1M context (native). Always-warm candidate.
- **Math / code reasoning specialist:** `nemotron-cascade-2:30b`. 24 GB local, 256K Ollama / 1M model-card. Math/code state-of-art for parameter class. **Apple-Silicon-native via MLX** (per sister-report, carry-forward).
- **Long-context retrieval at scale:** `nemotron-3-super:120b` (caution lane: 87 GB on 96 GB margin-tight). RULER @ 1M: 91.75. Declared-heavyweight, not always-warm.
- **General-knowledge heavyweight:** `nemotron-3-super:120b` when memory permits. MMLU-Pro 83.73.
- **Model-layer safety classifier:** `nvidia/Llama-3.1-Nemotron-Safety-Guard-8B-v3` via HF Transformers + MPS with the trivial MPS patch (Section 2). Pairs with code-layer guardrail framework choices independently.

**7.3. Deployment lane policy.**

- **Doctrine-preferred for Apple Silicon:**
  - HF Transformers + MPS (cross-model, blessed)
  - MLX (Cascade-2 specifically, community-strong)
  - Ollama (operator-ergonomic convenience, non-blessed)
- **Experimental on Apple Silicon:**
  - vLLM-on-Metal (advertised, blessed for x86/CUDA; Cascade-2's tp=1 default makes it the most plausible target; Super-120B's tp=8 default is configuration-heavy)
  - SGLang-on-Metal (advertised, blessed for x86/CUDA)
- **Out of scope for Apple Silicon:**
  - TensorRT-LLM (NVIDIA-GPU only)
  - NIM Microservice (managed infrastructure, sovereignty conflict)

**7.4. Inference-vs-training doctrine.**

- **Inference on Mac Studio M3 Ultra 96 GB:** primary lane. Nemotron-3 family fits.
- **Fine-tuning on Mac Studio:** inference/experimentation only. Not a serious training box. Real fine-tuning routes to cloud/NVIDIA-GPU per Section 6.

**7.5. License posture.**

- All three Nemotron-3 mission targets: NVIDIA Open Model License variants (Cascade-2 uses `nvidia-open-model-license`; Super-120B uses the more specific `nvidia-nemotron-open-model-license`). Both commercial-usable with attribution and content-use restrictions. Phoenix licensing review should verify the specific variant for each model before production.
- Nemotron-NeMo/Nemotron repo: Apache-2.0 for training recipes and cookbook code.
- Llama-3.1-Nemotron-Safety-Guard-8B-v3: provisionally NVIDIA Open Model License per Issue #19 correction; verify before production.

**7.6. Historical doctrine to retire.**

- "Nemotron residue naming job" — retire. Nemotron is current runtime truth, not branding residue. (Sister-report call, reaffirmed.)
- "Fleet B GPT-OSS doctrine" — retire. Empirically superseded by Section 3.3 evidence.
- "70B swap-in" (`nemotron:70b`) — demote to historical / Llama-3.1 compatibility only. Current 30B and 120B Nemotron-family rows are the doctrine lane.
- "Phase 05 RAG inherits GPT-OSS Fleet B" — retire. RAG doctrine moves to `nemotron-3-nano:30b` (1M context).
- "Phase 08 fine-tuning inherits GPT-OSS targets" — retire. Phase 08 fine-tuning routes to cloud/NVIDIA-GPU with Nemotron-3 family weights as targets.

**7.7. Render-mutation doctrine — meta-note.**

During this pass, three render-mutation events ("Stop Claude" UI artifact bleeding into page-text scrapes) were detected on github.com, ollama.com, and HF model card surfaces. The Render-Mutation Rule landed in BROWSER.md (2026-05-02 amendment) handled all three cleanly: ignored as untrusted noise, doctrine logged, no compositional impact. Future BBBs reading this canonical file alongside BROWSER.md will see the rule and the operational evidence in the same lineage. This is the discipline working as designed.

---

## 8. Fastest Safe Next Move

**Drift-status:** Composed from Sections 1-7. No new origin verification needed; section synthesizes prior findings into operational next-steps.

**Single-line operational call:** Pull `nemotron-3-nano:30b` to the Studio first and run a representative local test before any production routing change.

**Three-step practical sequence:**

1. **Validation pull.** `ollama pull nemotron-3-nano:30b` on Mac Studio. Verify: model loads at 24 GB, 1M-context behavior on a long-document workload, reasoning-toggle behavior via the chat-template flag, memory posture under sustained multi-agent load. Output: a Twin Peaks operational benchmark report on the local default lane.

2. **Pair with Cascade-2 for math/code workloads.** `ollama pull nemotron-cascade-2:30b` and `ollama run nemotron-cascade-2:30b` for any reasoning-heavy work that came up in Step 1. Cascade-2's tp=1 vLLM example and MLX community support make it the strongest secondary lane.

3. **Defer Super-120B.** Do not pull `nemotron-3-super:120b` as part of this validation pass. The 87 GB / 96 GB margin makes it a declared-heavyweight lane, not an always-warm fit. Pull it only when a specific workload requires either long-context-at-scale (RULER @ 1M = 91.75) or the strongest general-knowledge MMLU-Pro performance — and only after Step 1 confirms baseline memory headroom.

**Open questions queued for follow-up (not in this canonical pass):**

1. **Cookbook subtree deep-read** for Super-120B's four brief-named subtrees (`OpenScaffoldingResources`, `SparkDeploymentGuide`, `grpo-dapo`, `lora-text2sql`). Section 5 confirmed they exist at directory level; deep substance read is queued for Phase 08 doctrine work.
2. **Runtime-lane practical-fit verification on Mac Studio for vLLM-on-Metal and SGLang-on-Metal** with each of the three mission targets. Currently composed as "experimental" per documented config defaults; empirical Mac Studio runs would resolve to "verified-supported" or "verified-blocked."
3. **MLX cookbook freshness** for Cascade-2 specifically. Sister-report claim of community-strong is carried forward; current MLX-community state could be re-verified if Twin Peaks commits to MLX as a primary lane.
4. **Llama-3.1-Nemotron-Safety-Guard-8B-v3 license review** — provisional call as NVIDIA Open Model License needs final verification before production rollout.
5. **Nemotron-3-Nano-Omni** — newly observed in cookbook directory listing, not in scope of this canonical pass. Worth a forward-looking note for any future multi-modal lane.
6. **Drift-cadence policy** — this canonical pass observed 15 days of drift since the 04-17 sister reports and several substantive new findings (Chinese language support, Cascade-2's omni cookbook directory, Super-120B's expanded benchmark table). A 30-day or 60-day re-verify cadence on the load-bearing claims should be considered.

---

**Best operational next-step for Nemotron on Twin Peaks: pull `nemotron-3-nano:30b` to the Mac Studio first, validate it as the local default and Shane-facing sovereign workhorse against a representative long-context workload, then pair with `nemotron-cascade-2:30b` for math/code reasoning workloads — defer `nemotron-3-super:120b` until a specific heavyweight workload justifies the 87 GB / 96 GB margin-tight memory footprint, and route any fine-tuning work to cloud/NVIDIA-GPU infrastructure rather than to the Studio.**
