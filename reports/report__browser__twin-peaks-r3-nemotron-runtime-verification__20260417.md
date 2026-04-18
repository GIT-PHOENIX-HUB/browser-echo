# R3 / Twin Peaks — Nemotron Runtime Verification Report

**File:** `report__browser__twin-peaks-r3-nemotron-runtime-verification__20260417.md`  
**Session:** `019.1` Phase 7  
**Date:** 2026-04-17  
**Agent:** Browser Echo (BBB)  
**Scope:** targeted verification of the current Nemotron runtime lane for Twin Peaks so Firedancer can revise Phase 02 / Phase 05 / Phase 08 doctrine without guessing  
**Posture:** primary / official sources only — NVIDIA docs, NVIDIA GitHub, Ollama library, Hugging Face model cards. No GPT-OSS historical doctrine carried forward in Nemotron clothing. No fabricated rows.  
**Method note:** all surfaces used in this report were reachable from the browser context during this pass. Zero rows below are marked unverified.

---

## 1. Executive Verdict

Nemotron-3 is a real, current, complete model family shipped directly by NVIDIA with open weights, open training recipes, and a published pretraining -> SFT -> RL pipeline. For Twin Peaks running on Mac Studio M3 Ultra with 96 GB unified memory, the lead local workhorse candidate is `nemotron-3-nano:30b` / `nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16` — 24 GB local footprint, 1M context, and positioned by NVIDIA at the root of its official documentation. The fast/router lane is its 4B sibling. A serious second contender for reasoning-heavy local work is `nemotron-cascade-2:30b`, with strong Apple Silicon / MLX community support. A 120B sovereign-large lane (`nemotron-3-super`) is technically local on 96 GB unified memory but margin-tight and remains a caution lane rather than the default.

Two truths hold simultaneously:

- Nemotron-first local doctrine is now well-founded: there is a clean current NVIDIA lane for every role Twin Peaks needs to fill locally, and GPT-OSS is no longer required as a bridge.
- Claude remains the current Shane-facing product default and control-plane voice unless Shane changes that explicitly.

Safety-Guard is real and usable but frictionful. NVIDIA's official deployment lane for Safety-Guard-V3 is NIM, which contradicts local sovereignty. The sovereignty-preserving paths are Hugging Face Transformers on Apple MPS or a custom Ollama Modelfile over a community GGUF. Both are usable; neither is one-click.

Ollama distribution of the Nemotron family is real and verified. However, Ollama is not in NVIDIA's official five-lane deployment matrix. NVIDIA's blessed local paths are vLLM, SGLang, Hugging Face Transformers, NIM, and TensorRT-LLM. The Ollama path should be treated as a verified community/practical lane rather than an officially blessed one.

The old "Nemotron residue naming job" and "GPT-OSS swap-in" doctrines should be retired. The 70B swap-in should be demoted to a historical / special-case lane. RAG and fine-tuning doctrine should be re-routed onto the Nemotron-3 family per NVIDIA's published pipeline.

---

## 2. Verified Model Matrix

| Ollama name | NVIDIA / HF upstream | Local GB | Context | Currency | Role category |
|---|---|---:|---:|---|---|
| `nemotron-3-nano:4b` | `nvidia/NVIDIA-Nemotron-3-Nano-4B-BF16` | 2.8 GB | 256K | current | fast / router |
| `nemotron-3-nano:30b` | `nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16` | 24 GB | 1M | current | local default / Shane-facing sovereign workhorse |
| `nemotron-cascade-2:30b` | `nvidia/Nemotron-Cascade-2-30B-A3B` | 24 GB | 256K | current | sovereign reasoning / Apple-Silicon-native |
| `nemotron-3-super:120b` | `nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16` | 87 GB | 256K | current | sovereign large / caution lane |
| `nemotron:70b` | `nvidia/Llama-3.1-Nemotron-70B-Instruct` | 43 GB | 128K | historical | retired from primary doctrine |
| `nemotron-mini:4b` | `nvidia/Nemotron-Mini-4B-Instruct` | 2.7 GB | 4K | historical | retired from primary doctrine |

Architecture note:

- Rows 1-4 are the newer `nemotron_h` generation or associated current-family reasoning lanes.
- Rows 5-6 are prior-generation Llama-derivative / early Nemotron lineage and should not anchor primary R3 doctrine.

Adjacent official family members also verified from upstream sources, but not centered in Ollama during this pass:

- `nvidia/Nemotron-Nano-9B-v2`
- `nvidia/Llama-3_3-Nemotron-Super-49B-v1_5`
- `nvidia/Nemotron-3-Ultra-Base`
- `nvidia/Nemotron-Nano2-VL`
- `nvidia/Nemotron-Parse-v1.1`
- `nvidia/Llama-3.1-Nemotron-Safety-Guard-8B-v3`

---

## 3. Ollama Availability

The Ollama library was reachable and read directly during this pass. Five Nemotron models are currently published:

1. `nemotron-mini`
   - 4B
   - 595.3K pulls
   - updated 1 year ago
   - pure local
   - no cloud tag

2. `nemotron`
   - 70B
   - 552.8K pulls
   - updated 1 year ago
   - pure local
   - 43 GB local size

3. `nemotron-3-nano`
   - 4B and 30B
   - 394K pulls
   - updated 1 month / 4 months ago depending on tag
   - local tags exist for both sizes
   - has a separate `:30b-cloud` variant

4. `nemotron-3-super`
   - 120B
   - 232.3K pulls
   - updated 1 month ago
   - local `:120b` exists
   - has a separate `:cloud` variant

5. `nemotron-cascade-2`
   - 30B
   - 97.7K pulls
   - updated 3 weeks ago
   - pure local
   - no cloud tag

Correction to earlier concern: the `cloud` tag in Ollama search results refers to the existence of a cloud-runtime variant, not to cloud-only status. For both `nemotron-3-nano` and `nemotron-3-super`, a local tag exists alongside the cloud tag and is the default local pull.

---

## 4. Hardware Fit

### Mac Studio M3 Ultra — 96 GB unified

| Model | Local GB | Fit |
|---|---:|---|
| `nemotron-3-nano:4b` | 2.8 GB | trivial |
| `nemotron-3-nano:30b` | 24 GB | comfortable |
| `nemotron-cascade-2:30b` | 24 GB | comfortable |
| `nemotron-3-super:120b` | 87 GB | margin-tight |
| `nemotron:70b` | 43 GB | comfortable but superseded |
| `nemotron-mini:4b` | 2.7 GB | trivial but superseded |

The most important caution row is `nemotron-3-super:120b`. At 87 GB local on a 96 GB system, it leaves very little headroom for the OS, KV cache growth, and sustained multi-agent loads. It is real and local, but it is not an always-warm default recommendation.

### MacBook lane

Assuming a 36-64 GB MacBook range:

- 4B rows are comfortable
- 30B rows are feasible with care
- 120B is infeasible

---

## 5. Recommended Routing Roles

These recommendations describe the best local Nemotron candidate per role. They do not override the operator's product-default choice.

### Fast / router

**Primary:** `nemotron-3-nano:4b`

Why:

- 2.8 GB local
- 256K context
- current release cadence
- directly in the flagship Nemotron-3 family
- supersedes `nemotron-mini:4b` on recency, context, and family position

### Local default / Shane-facing sovereign workhorse

**Primary:** `nemotron-3-nano:30b`

Why:

- 24 GB local size
- 1M context
- current flagship family
- 1.59M Hugging Face downloads
- NVIDIA centers the Nano line at the root of official Nemotron docs

This is the strongest current local candidate if Twin Peaks chooses a Nemotron-first sovereign lane for long-form operator work.

### Sovereign reasoning / Apple-Silicon-native

**Strong contender:** `nemotron-cascade-2:30b`

Why:

- 24 GB local size
- 256K context
- reasoning + instruct modes
- strong MLX community support on Apple Silicon
- serious current adoption and trending signals

It is not a flashy outlier. It is a real production contender. It still sits second to `nemotron-3-nano:30b` for the main local Shane-facing lane because NVIDIA's own top-line documentation centers Nano more clearly.

### Sovereign large / caution lane

**Model:** `nemotron-3-super:120b`

Why:

- real local tag exists
- current and highly adopted
- richest cookbook tree

Caution:

- 87 GB local on 96 GB Studio is too tight to treat casually
- keep as a declared heavyweight lane for special jobs, not the default house model

### Safety-guard

**Model:** `nvidia/Llama-3.1-Nemotron-Safety-Guard-8B-v3`

Use path options:

- Hugging Face Transformers on Apple MPS
- custom Ollama Modelfile over community GGUF
- NVIDIA NIM microservice

Honest status:

- real and usable
- not one-click
- official NVIDIA deployment path is NIM-oriented, which conflicts with a pure sovereignty stance

### Out of scope / historical

- `nemotron-mini:4b`
- `nemotron:70b`

Keep only for explicit legacy or Llama-3.1 compatibility reasons.

---

## 6. Phase Impact On R3

### 6.1 `Nemotron residue naming job`

**Verdict:** remove as active assumption

Nemotron is not a branding residue pass. NVIDIA has a coherent active family surface: `Nemotron-3 Nano`, `Super`, `Ultra`, plus supporting adjacent model lanes. R3 should treat Nemotron as current runtime truth, not as a rename exercise.

### 6.2 `Fleet B GPT-OSS doctrine`

**Verdict:** remove as active doctrine

The Nemotron-3 family now fills the local agentic lane directly. `nemotron-3-nano:30b` replaces the need for a GPT-OSS bridge.

### 6.3 `70B swap-in`

**Verdict:** demote to historical / special-case

The year-old 70B row is no longer the best local reasoning answer. Current 30B and 120B Nemotron-family rows are the real doctrine lane.

### 6.4 `Phase 05 RAG should inherit GPT-OSS Fleet B logic`

**Verdict:** revise

RAG doctrine should move to `nemotron-3-nano:30b`, not GPT-OSS. The 1M context makes it a better current local generation lane for RAG work.

### 6.5 `Phase 08 fine-tuning can inherit GPT-OSS-target assumptions`

**Verdict:** revise

NVIDIA publishes actual Nemotron-3 training/alignment recipes. Fine-tuning doctrine should move onto the Nemotron-3 family instead of being lightly renamed from GPT-OSS.

---

## 7. Safety-Guard Assessment

`nvidia/Llama-3.1-Nemotron-Safety-Guard-8B-v3` is real and current:

- created 2025-08-20
- 14,815 downloads
- paper `arxiv:2508.01710`
- dataset `nvidia/Nemotron-Safety-Guard-Dataset-v3`
- multilingual moderation / safety focus

Capabilities:

- content moderation
- multilingual safety filtering
- toxicity / unsafe content detection

Deployment reality:

- official NVIDIA cookbook path is NIM
- local sovereignty path is Hugging Face Transformers on MPS or a custom Ollama Modelfile using community GGUF

Honest read:

Safety-Guard is usable for Twin Peaks, but NVIDIA's own official deployment preference pulls toward managed infrastructure. A sovereignty-preserving Twin Peaks deployment is possible, but it requires a little more deliberate setup than the main Nemotron-3 family lanes.

---

## 8. What To Keep Historical

Keep historical, not active:

- `nemotron-mini:4b`
- `nemotron:70b`
- the old GPT-OSS bridge doctrine

Do not erase them. Keep them available as historical or compatibility lanes, but stop centering R3 on them.

---

## 9. Deployment-Path Distinction

NVIDIA's officially blessed deployment lanes for Nemotron models, per the `usage-cookbook/README.md` in `NVIDIA-NeMo/Nemotron`, are:

1. TensorRT-LLM
2. vLLM
3. SGLang
4. NIM Microservice
5. Hugging Face Transformers

Ollama is not in this list.

That does **not** mean Ollama is invalid. It means:

- Ollama support is real and verified
- Ollama is a community/practical lane
- Ollama is not the official NVIDIA-blessed deployment lane

For Mac Studio M3 Ultra specifically, the cleaner blessed local paths are:

- Hugging Face Transformers on Apple MPS
- vLLM on Metal
- SGLang on Metal

Apple-Silicon-native community path:

- MLX, especially for `nemotron-cascade-2:30b`

Practical implication:

Twin Peaks does not have to standardize on Ollama. Ollama remains attractive for operator simplicity, but this report should not close the door on vLLM, SGLang, HF Transformers, or MLX — especially for Safety-Guard and for models whose community GGUFs lag the official release cadence.

---

## 10. Fastest Safe Next Move

Pull `nemotron-3-nano:30b` to the Studio and run a direct representative local test:

- verify long-context behavior
- verify reasoning-toggle behavior
- verify memory posture under a real workload

If you want a second lane in parallel, compare it against `nemotron-cascade-2:30b`.

Do not touch production routing yet.
Doctrine revision and routing change are separate moves.

---

**Best current Nemotron runtime doctrine for Twin Peaks R3:** route local workhorse and long-context Shane-facing sovereign lanes to `nemotron-3-nano:30b`, use `nemotron-3-nano:4b` as the fast/router lane, treat `nemotron-cascade-2:30b` as a serious Apple-Silicon-native reasoning alternate, retire the 70B swap-in and GPT-OSS bridge to historical status, and treat Safety-Guard as usable-but-frictionful until a sovereignty-preserving deployment path is standardized.
