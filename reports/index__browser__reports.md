# Browser Echo — Reports Index

Front door for finished reports filed under `browser-echo/reports/`.
This is a living file and should be updated in place as new Browser Echo reports are added.

## Filing Convention

`report__browser__{purpose}__{date}.md`

- `purpose` is a short kebab-cased scope slug
- `date` is `YYYYMMDD`
- one report = one file
- filed reports are treated as durable records; later revisions should normally land as new dated files rather than silent rewrites

## Reports On File

| Filename | Title / Scope | Date | One-Sentence Conclusion |
|---|---|---|---|
| `report__browser__salvage-source-verification-pass-01__20260417.md` | Pass 01 forensic source verification for the salvage bucket program (OpenClaw, Pipecat, Claude Code, Kashef surfaces, ruflo) | 2026-04-17 | Six source families were classified with honest labels: OpenClaw and Pipecat emerged as the strongest first-wave structural sources, Claude Code was marked closed substrate / reference only, Kashef's public artifact was instructional rather than salvageable code, and ruflo was reduced to narrow study seams rather than a trusted whole. |
| `report__browser__phase-05__nemotron-claw-family-verification__20260417.md` | Phase 05 verification of the Nemotron / Claw-adjacent family (NanoClaw, NemoClaw, IronClaw, Nemotron hub) | 2026-04-17 | NanoClaw, NemoClaw, and IronClaw verified as real public source lanes on distinct axes, while Nemotron was correctly classified as a runtime/model lane rather than a broad code-salvage source. |
| `report__browser__twin-peaks-r3-nemotron-runtime-verification__20260417.md` | R3 / Twin Peaks targeted verification of the current Nemotron runtime doctrine for Mac Studio sovereignty | 2026-04-17 | `nemotron-3-nano:4b` is the best fast/router lane, `nemotron-3-nano:30b` is the strongest local sovereign workhorse, `nemotron-cascade-2:30b` is a serious Apple-Silicon reasoning alternate, `nemotron-3-super:120b` is a real-but-caution lane, and the GPT-OSS bridge plus 70B swap-in should retire to historical status. |

## Known Follow-On Research

Only include open threads that would materially improve existing doctrine if resolved.

- Super-120B cookbook deep read. `OpenScaffoldingResources`, `SparkDeploymentGuide`, `grpo-dapo`, and `lora-text2sql` in the Super cookbook were identified but not fully read; relevant if Phase 08 centers on the Super lane.
- Safety-Guard sovereignty path bench. `Llama-3.1-Nemotron-Safety-Guard-8B-v3` was verified as real and usable, but the local Mac Studio path still needs an actual reachability/performance check.
- Nano2-VL / Parse scoping. These official NVIDIA family members were verified as existing but not assessed for Twin Peaks runtime fit; relevant only if local vision-language or document-parsing becomes a real requirement.
- Cascade-2 canonical deployment docs. Cascade-2 is clearly a serious lane, but its canonical deployment docs were not found in the same NVIDIA-NeMo cookbook tree as Nemotron-3.
- Mac Studio runtime-path verification. vLLM, SGLang, HF Transformers, MLX, and Ollama were all surfaced as relevant paths, but Studio-local comparative validation has not yet been run.
- Plain-language license read. NVIDIA Open Model License and the separate Llama 3.1 Community License were identified, but not yet reduced into a simple operational note for Phoenix decision-making.

## Update Rule

When a new report is filed:

1. add one row to Reports On File
2. add only real unresolved threads to Known Follow-On Research
3. remove follow-on items once they are resolved or deliberately deferred

A front door that only grows becomes noise.
A front door that stays current becomes memory.
