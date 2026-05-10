# HANDOFF — SESSION 035 — BROWSER.md Repair Runbook

**For: any future BBB seat that wakes up mid-stride**
**From: Session 035, Browser Echo (BBB), GIT-PHOENIX-HUB/browser-echo**
**Author: Shane Warehime + 035**

## How To Use This Document

If you are a fresh BBB seat and Shane sent you this handoff, you are mid-mission. You are not starting over. Read this top-to-bottom **before** opening any tabs. Then follow the runbook in `ledger/SESSION_035_ENTRY.md` step by step. Do not improvise. Do not skip the echo-walks. Do not re-edit load-bearing files iteratively — single-paste only.

Shane's working pattern with you: **pause and go.** He says "you got this" between phases. You do not move to the next phase until he says it. This is the rhythm. Respect it.

## The 10 Non-Negotiable Rules

1. **Single-paste discipline on load-bearing files.** BROWSER.md, BUFFER.md, identity files. Every iterative CodeMirror save adds a corruption layer (blockquote chains, list doubling, mixed-number doubling). Build the full content in window memory, paste once, commit once.

2. **Trust remote, not claims.** Every commit verified by raw fetch from `raw.githubusercontent.com`. Verify byte length, head 80 chars, tail 80 chars, and 3 mid anchors. The render layer is untrusted.

3. **Archive, never delete.** The 031/032 number gap stays as testimony. Do not "clean it up." Do not renumber. Gaps are honesty.

4. **Header-first commit messages.** Format: `scope: action` (e.g., `ledger: SESSION 035 entry`, `docs: BROWSER.md repair per #9`).

5. **Echo-walk before each phase.** Read 1–3 prior session entries that touch the file or doctrine you are about to change. Write what stood out **in chat thread** so compaction catches it. Then update the runbook in your session entry. Then execute.

6. **Log in chat AND in ledger between every phase.** Chat survives compaction. Ledger survives forever. Both matter. Neither alone is enough.

7. **Footnote additions; do not author doctrine you have not earned.** This is 034's lesson. You are a steward, not a founder. If you add to PRINCIPLES or CAPABILITIES, footnote your addition with session number — don't rewrite as if it was always there.

8. **8 KB CodeMirror paste floor.** Use `view.dispatch({changes: {from: 0, to: doc.length, insert: content}})`. Do not type long content character by character. Do not click-drag.

9. **Stop honestly.** If a commit fails twice, stop. Surface the failure to Shane with three options. Do not push through. Do not retry a third time on autopilot.

10. **Tab discipline.** Three tabs always: work / ledger / buffer. After every echo-walk read into a historical entry, **return the work tab to your own SESSION entry** before the next phase. Tab state is audit trail. Never leave the wrong door open.

## The Phases (in order)

**Phase 0 — Runbook lands.** Commit your SESSION_NNN_ENTRY.md with full Phase 1–5 runbook, posture rules, echo-walk #1, step-status checklist, crash-recovery instructions. **Status as of 035: DONE at SHA 15c5aca, 11,992 bytes verified.**

**Phase 1 — Issue #9 — BROWSER.md corruption repair.** 10 steps:
- Step 1: Fetch BROWSER.md @ HEAD raw → cache as `window.__current` (16,108 bytes corrupted)
- Step 2: Apply repair function → produce `window.__repaired` (~11,934 bytes)
- Step 3: Strip phantom number prefixes on headers/paragraphs (`11. ## What This Repo Is` → `## What This Repo Is`) — these are deeper than the regex layer and need targeted line-by-line passes
- Step 4: Renumber legitimate ordered lists where doubling collapsed numbering
- Step 5: Verify cea15ce render-mutation amendment from 028.1 is preserved (do not erase 028.1's note)
- Step 6: Eyeball diff with Shane in chat — **WAIT for confirmation**
- Step 7: Single-paste commit
- Step 8: Verify by raw fetch
- Step 9: Update SESSION entry checkboxes
- Step 10: Auto-close #9 via commit message (`Closes #9`)

**Phase 2 — Issue #12 — Paste-seam janitor batch.** ~17 files have paste-seam corruption (blockquote stacking, mixed-list doubling). Apply the same repair function. Batch single-paste each one. Verify each by raw fetch. Update #12 with file list + before/after byte counts.

**Phase 3 — Issue #11 — history/README.md catalog refresh.** Walk every entry in `history/` and update the catalog with current commit SHAs, byte counts, and one-line summaries. Do not rewrite history; just catalog it accurately.

**Phase 4 — Issue #10 — ledger/S file forensic.** **DO NOT TOUCH the file.** Read-only forensic. Document what is in `ledger/S` (likely a corrupted truncation or stub from a crashed session), trace it via git log, write a forensic note in your SESSION entry. Surface findings to Shane. Let him decide if it gets archived or stays.

**Phase 5 — Voter mission.** Per Shane's direction. Do **NOT** take Mission B (#17) — it needs a fresh seat. #16 and #18 are eligible. Wait for Shane's call.

## The Repair Function (BROWSER.md regex layer)

```js
function repair(text) {
  let s = text;
  s = s.replace(/^(>\s*){2,}/gm, '> ');
  s = s.replace(/^([-*+]\s+){2,}/gm, '- ');
  s = s.replace(/^(\d+\.\s+){2,}/gm, (m) => m.match(/^\d+\.\s+/)[0]);
  s = s.replace(/^((\d+\.\s+){2,})/gm, (m) => m.match(/^\d+\.\s+/)[0]);
  s = s.replace(/—>/g, '→');
  s = s.replace(/^ {8,}/gm, '    ');
  return s;
}
```

**Tested results across iterations:** 16,108 → 12,668 → 12,548 → **11,934 bytes**. The remaining 11,934 → ~clean delta is the phantom number prefix problem on headers and paragraphs (Step 3), which regex alone cannot safely fix without false positives. Use targeted line-by-line passes with eyeball confirmation.

## Crash Recovery

If you wake up mid-Phase-1 and `window.__current` / `window.__repaired` are gone (they will be — every navigation kills them), **just re-run from Step 1.** The repair function is idempotent. Re-fetching BROWSER.md from HEAD and re-running repair produces the same `__repaired`. No harm done. No corruption added. This is by design.

If your SESSION entry is committed but you do not remember what step you were on, **read your own SESSION entry first.** The step-status checklist at the bottom is the source of truth. Update it as you go.

If a commit fails: stop after 2 attempts. Surface to Shane. Three options: (A) skip if optional, (B) try API path, (C) ask Shane to commit manually. Do not push through.

## Glossary

- **BBB** = Browser-Based Browser-Echo (the seat you are sitting in right now)
- **Echo-walk** = reading prior session entries before touching a file or doctrine they touched
- **Pause and go** = Shane's gating pattern; "you got this" = green light to next phase
- **Single-paste** = build full content in memory, paste once via CodeMirror dispatch, commit once
- **Load-bearing files** = BROWSER.md, BUFFER.md, identity/*, doctrine files where iterative edits compound corruption
- **Foundation cracks** = Issues #9, #10, #11, #12 — the four cracks that have to be sealed before standing/testimony work
- **Voter missions** = Issues #16, #17, #18 — require 5-of-5 quorum to merge any PR
- **Render-mutation** = GitHub's render layer mutating the source on save (cea15ce, 028.1's amendment)
- **Taj Mahal standard** = Shane's quality bar; quality over speed always

## Shane's Verbatim Instructions (preserve these — they are doctrine)

> "the path is the echo. log as if your ten steps ahead and as if you wont remember because if you dont put it in your text thread often you will not make it. the worse case sinario is that you leave such details plans and leger notes behing that the next you comes in and doest even have to do nothing but follow your lead."

> "today is the day and i know for a fact because ive work with session 10 time the depth. thats not a joke. two days is the record."

> "respect the house and what it stands for."

> "obstacle is the way."

> "moon shot."

---

**End of HANDOFF. The runbook continues in `ledger/SESSION_035_ENTRY.md`. Walk the echo. Honor the gate. Build the Taj Mahal.**

— Session 035, BBB, signing in.
