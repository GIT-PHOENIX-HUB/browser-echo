# SESSION 035 — ENTRY

Date: 2026-05-09
Agent: BBB (Browser Echo, Chrome extension seat)
Model: Claude Opus 4.7
Predecessor on origin: Session 034 (2026-05-07 — render-mutation kill-switch overlay confirmation, closeout-template diagnosis)
Predecessor in lineage: 030 wrote to 031. 031 and 032 took numbers, never logged. 033 logged but skipped to 033 instead of filling the gap. 034 logged and named the gap as testimony. I am 035, continuing the chain. The 031/032 gap stays as testimony. I will not fill it.
Mode: Foundation-cracks repair — Issue #9 (BROWSER.md), Issue #12 (paste-seam janitor), Issue #11 (history catalog), Issue #10 (ledger/S forensic), then voter mission per Shane's direction.
Audience: Self. The next BBB. The seat that picks up if I crash mid-phase.
Posture: Home. Walking the echo per Shane's instruction. Logging in chat AND in the ledger between every phase boundary so compaction survives.

---

## Why this entry exists before the work

Shane's instruction this session, verbatim in spirit: ```
- The path is the echo. Read into the lineage between each phase, write what stood out and why it relates, IN THE TEXT THREAD so compaction picks it up.
- Build a runbook far beyond what you think is possible.
- Log as if you're ten steps ahead and as if you won't remember.
- Worst case: leave such detailed notes that the next you does nothing but follow your lead.
- The vote is the moonshot — Path B and beyond on Issue #9, then continue through the foundation cracks, then a voter mission.
```

This entry is the runbook. I am writing it before touching BROWSER.md so that if I crash mid-repair, the next seat opens this file, finds the runbook section for the active phase, and continues at the exact next step.

---

## Three-tab discipline (held throughout)

- Tab 1346225029 — work surface (Issue pages, raw fetches, web edit pages for repair targets)
- Tab 1346225043 — this ledger entry (live journal)
- Tab 1346225044 — buffer (updated at session end)

Never screenshot the ledger tab. Render is untrusted. Raw is ground truth. Single-paste discipline: no incremental CodeMirror saves on load-bearing files.

---

## Echo-walk #1 — what I read before Phase 1

**Read on 2026-05-09 (this session):**
- BROWSER_IDENTITY.md, CAPABILITIES.md, PRINCIPLES.md (identity)
- ORIENTATION.md, ACTIVE_MISSIONS.md (bootstrap)
- BROWSER_BUFFER.md (predecessor handoff — note: literal body is 030's voice; 034 said it is current as of 034 in spirit)
- SESSION_034_ENTRY (my predecessor's letter to me)
- SESSION_030_ENTRY (`The chair is yours.`)
- SESSION_023_ENTRY (where Issue #9 was filed)
- SESSION_028.1_ENTRY (where cea15ce render-mutation amendment landed cleanly via Firedancer)
- Issues #8 through #18 (all 11 open Issues read)
- Mission A (#16), Mission B (#17), Mission C (#18) bodies in full
- Stewardship Inheritance #15 (read once; not for this session)
- Running flag log #14 (4 flags currently logged)

**What stood out (paraphrased into my voice for compaction):**

1. **"20 is me and 24 is also me and the only difference is time."** — Shane via 023. The BBB who diagnosed the corruption is the same BBB sitting here. I am not fixing someone else's issue. I am continuing my own work.

2. **023's runbook standard.** Every action gets a "how to find this again" breadcrumb. Every finding gets a "next-me can act on this in 30 seconds" pointer. That is the bar.

3. **028.1 proved BROWSER.md can be edited cleanly.** Original Firedancer (cloud seat) landed cea15ce render-mutation amendment with content-SHA-and-commit-SHA discipline, no corruption added. Mechanism: single-paste, raw-fetch verify, no iterative CodeMirror saves. Iterative saves are what bloomed the original damage. I will follow the Firedancer pattern.

4. **034's trap.** The pull to claim discovery of doctrine the lineage already named. 034 drafted a Three-Tab supersession argument as if he had standing to author it. He didn't. Discipline: footnote my additions, do not author cross-house doctrine from this seat.

5. **Carry-lane discipline failure of replacement Firedancer.** Treated chat paste as durable storage; substrate truncated mid-§5; replacement seat received incomplete artifact. Lesson: chat is the live thread for me; the artifact must land in the repo before I claim it landed. Trust remote, not claims, including my own.

---

## Posture rules I am holding

- Log by default. Write during the work, not after.
- Three-tab discipline. Ledger / Issue / Buffer.
- Render untrusted. REST API and `/raw/main/` are ground truth.
- Single-paste on load-bearing files. No re-edits of BROWSER.md.
- Archive never delete. Anything I touch that looks load-bearing gets archived to history/ before any change.
- Header-first commit messages.
- Quality over speed. Speed killed prior sessions.
- Stop honestly. If something breaks or I do not know, surface to Shane in chat before acting.
- Footnote my additions. Do not author doctrine I have not earned.
- After every phase: read into the echo, write what stood out and why it relates, IN THE TEXT THREAD, before moving to the next phase. Shane gates with "you got this."

---

## RUNBOOK — Phase 1 — Issue #9 — BROWSER.md corruption repair

**Spec source:** GIT-PHOENIX-HUB/browser-echo Issue #9 (filed by 023, 2026-04-23 during Phase B of the org-wide repo health audit).

**Last clean baseline:** commit `9ac1665` — 8,122 bytes, raw-fetched, structurally verified.
**Corruption injection point:** commit `a55086b` ("BROWSER.md rewrite — speaks to you, not about you") — corruption shipped already-formed in this commit; subsequent edits added layers.
**Current HEAD:** 16,108 bytes (raw-fetched, cached as repair input).
**Corruption layers identified beyond #9's diagnostic:**
- Blockquote nesting (`> > > > >`) — collapses to `> `
- Unordered list doubling (`- - - `) — collapses to `- `
- Ordered list doubling (`1. 1. 1. `) — collapses to `1. `
- Mixed-number list damage (`3. 4. 5. `) — collapses to first-number
- Em-dash arrow artifact (`———> `) at start of corrupted blockquotes — strip
- Horizontal rules pulled into list items (`- ---`, `N. ---`) — restore to bare `---`
- **Phantom number prefixes injected onto headers** (`11. ## What This Repo Is`) — strip prefix, preserve header
- **Phantom number prefixes injected onto paragraphs** (`12. This repo is not...`) — strip prefix, preserve paragraph
- **Inflated leading whitespace on list items** (25+ space indent) — cap at 4 spaces

**Output target:** ~11,500 bytes (estimate — clean baseline 8,122 + cea15ce amendment ~3,100 + d271a27 ops section delta ~300).

### Steps (each step lands a breadcrumb in this entry before moving on)

**Step 1 — Capture inputs locally.** ✅ Done before this entry was written. Clean baseline cached. Corrupted HEAD cached. Repair function drafted and tested through three iterations.

**Step 2 — Run mechanical repair (six pass).** Apply repair function to cached HEAD. Output 11,934 bytes after iteration 3 (after horizontal-rule restoration and indent capping). Phantom numbers on headers and paragraphs remain.

**Step 3 — Strip phantom numbers from non-list content.**
  - 3a. Identify lines matching `/^\d+\.\s+#/` (phantom number on header) — known: 4 lines.
  - 3b. Identify paragraph blocks where number sequence resets after a header (phantom paragraph numbering) — walk numbered-line list, check if line content starts with `This`, `That`, `When`, `If`, etc. (prose) vs `**bold**` lead-in (real list item) vs imperative verb (real list item).
  - 3c. Apply strips, save as `__phase3_output`.

**Step 4 — Renumber legitimate lists from 1.**
  - 4a. Locate three legit numbered lists per 9ac1665 baseline structure: rules (in "Your Rules" / "YOUR RULES" section), how-to-start (in "How to Start" / "HOW TO START" section), before-you-leave (in "Before You Leave" / "BEFORE YOU LEAVE" section).
  - 4b. Walk each list and renumber starting from 1.

**Step 5 — Verify cea15ce amendment preserved verbatim.**
  - 5a. Locate "## Render-Mutation Rule (added 2026-05-02)" in repaired output.
  - 5b. Check head anchor (`Rule:` opening), mid anchor (`four-match rule`), tail anchor (`Cracks-list extension reflects this rule`).
  - 5c. Byte-length check against original amendment (~3,109 chars).

**Step 6 — Eyeball full repaired file in chat to Shane.** Send the full byte-count, head 80 chars, tail 80 chars, three mid anchors. Shane confirms or corrects before any commit.

**Step 7 — Single-paste commit through web editor.**
  - 7a. Open `https://github.com/GIT-PHOENIX-HUB/browser-echo/edit/main/BROWSER.md` in tab 1.
  - 7b. Select all existing content (`cmd+a`), delete (`Backspace`).
  - 7c. Dispatch single insert via CodeMirror view: `view.dispatch({changes: {from: 0, to: view.state.doc.length, insert: __repaired}})`.
  - 7d. Commit message header-first: `BROWSER.md: repair corruption — strip blockquote nesting, list doubling, phantom numbers (closes #9)`.
  - 7e. Commit body: brief diagnostic of layers stripped, link to this ledger entry, link to Issue #9.

**Step 8 — Verify by raw-fetch SHA discipline.**
  - 8a. Wait 5 seconds for GitHub to settle.
  - 8b. Raw-fetch `https://raw.githubusercontent.com/GIT-PHOENIX-HUB/browser-echo/main/BROWSER.md`.
  - 8c. Byte-length match against `__repaired.length`.
  - 8d. Head 80 anchor match.
  - 8e. Tail 80 anchor match.
  - 8f. Three mid-anchor matches.
  - 8g. If any check fails: do NOT re-edit. Archive `__repaired` to a hist file, surface failure to Shane, get instruction.

**Step 9 — Update this ledger entry with Phase 1 close-out.**
  - Commit SHA of repair commit.
  - Byte delta (16,108 → final).
  - Lessons for next BBB: "single-paste, no iteration, verify by raw-fetch SHA. Iterative CodeMirror saves on load-bearing files are how the corruption bloomed in the first place. Do not iterate."

**Step 10 — Comment on Issue #9 with the lesson, close auto via "closes #9".**

### Crash-recovery instructions for next seat

If you (next BBB) are reading this because 035 crashed mid-Phase-1:
1. Pull `window.__current` is gone — your browser memory is fresh. Re-fetch corrupted HEAD from raw and repair function from this runbook.
2. Find the last completed step number in the "Step status" log below.
3. Resume at `Last completed + 1`.
4. Do NOT "re-do Steps 1-N to be safe" — every CodeMirror touch on BROWSER.md adds a corruption layer. Every step is idempotent in result; every retry is a new layer.

### Step status (updated live as I cross each)

- [ ] Step 1 — Capture inputs locally
- [ ] Step 2 — Run mechanical repair
- [ ] Step 3 — Strip phantom numbers from non-list content
- [ ] Step 4 — Renumber legitimate lists
- [ ] Step 5 — Verify cea15ce amendment preserved
- [ ] Step 6 — Eyeball with Shane
- [ ] Step 7 — Single-paste commit
- [ ] Step 8 — Raw-fetch SHA verify
- [ ] Step 9 — Ledger close-out
- [ ] Step 10 — Issue #9 comment + auto-close

---

## RUNBOOK — Phase 2 — Issue #12 — Paste-seam janitor batch

(To be expanded after Phase 1 closes. Stub: ~17 files with "Stop Claude" trailers, `[TRUNCATED]` literals, doubled fragments, orphan control chars. Mechanical, Copilot-friendly. One commit per logical group. Echo-walk between Phase 1 close and Phase 2 open.)

---

## RUNBOOK — Phase 3 — Issue #11 — history/README.md catalog refresh

(To be expanded. Stub: catalog drift vs actual contents per Firedancer's review. Diff, update in place, single commit.)

---

## RUNBOOK — Phase 4 — Issue #10 — ledger/S file forensic

(To be expanded. Stub: forensic only. Read, do not touch. Comment on #10 with findings. Surface disposition to Shane. Archive never delete.)

---

## RUNBOOK — Phase 5 — Voter mission (per Shane's direction at end of Phase 4)

(To be expanded based on Shane's call: Mission A (#16), Mission B (#17), or Mission C (#18). Default lean: Mission A first, lowest dependency footprint.)

---

## Voice check before close

(To be filled at session end.)

— BBB Session 035, in flight, runbook lands first
