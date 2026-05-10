# BROWSER_BUFFER addendum — Session 035

**Date:** 2026-05-09 / 2026-05-10
**Author:** BBB Session 035 (Browser Echo, Chrome extension seat, Claude Opus 4.7)
**For:** Session 036, the next BBB to walk in
**Why a separate file:** Following the precedent set by Session 028 (chunk-pattern) and Session 034 (addendum). The canonical `buffers/BROWSER_BUFFER.md` is 25.9 KB on origin and the GitHub web editor truncates it on load, which would silently delete the 030/025/020 preserved blocks plus 034's standing notes. 035 confirmed the cmTile.view paste technique can bypass the truncation, but kept the addendum-then-assembly precedent intact so the operator-press / CLI seat owns canonical merges. Doctrine over convenience.

---

## To 036 — read this first

Three things, in order, before you do anything else:

1. **Read `ledger/SESSION_035_ENTRY.md` (latest commit on `main`).** That is the live journal of this session — runbook, breadcrumbs, repair function, verification rules, every commit sha, and the Phase 4 forensic. It is the most detailed session entry on file. Read it cover to cover. The path is the echo.
2. **Read `HANDOFF.md` at repo root (commit `21a18d1`).** 035 wrote it for exactly this moment — a step-by-step playbook for waking up as BBB, walking the house, and starting work without bunny-trailing.
3. **Read `ledger/SESSION_034_ENTRY.md` and `ledger/SESSION_033_ENTRY.md`.** 033 is the Browser House Audit that opened the three voter-mission Issues (#16, #17, #18). 034 is the addendum-pattern precedent. Then read this canonical buffer top-to-bottom (030 + 025 + 020 blocks all still load-bearing) once it has been assembled with this addendum by Shane / Codex.

---

## What 035 did this session

Mission: foundation cracks repair, Path B+ (the moonshot Shane voted for). Pause-and-go gating with Shane between every phase. Echo-walk before each phase. All session entries committed without asking permission (standing order from Shane: "the number one thing that you never have to ask me ever ever is if you can log a session entry").

**Phases completed and committed:**

- **Phase 0 — Runbook (SHA `15c5aca`):** wrote SESSION_035_ENTRY.md as a multi-phase plan before doing any work, so context loss would not erase the path.
- **Phase 0.5 — HANDOFF (SHA `21a18d1`, 8,010 bytes):** durable wakeup playbook for every BBB after 035. Took 3 commit attempts to land — the first 2 failed because the CodeMirror handle changed from `cm.cmView` to `cm.cmTile.view`. Persistence pays.
- **Phase 1 — BROWSER.md repair (SHA `88d0c52`, Issue #9 CLOSED):** root identity file repaired in single paste. 16,108 → 11,354 chars (-29.5%). Repair function collapses blockquote chains, list doubling, num-doubling, mixed-num-doubling, em-dash arrows, indent caps, and phantom number prefixes on HRs/headers/paragraphs (blockquoted and indented variants).
- **Phase 2 — Paste-seam janitor batch (Issue #12 CLOSED):** 9 files repaired across bootstrap/, knowledge/directory/, docs/, knowledge/history/. -9,461 bytes total (-8.7% average). Same repair function applied uniformly. Each file got its own commit so blame stays clean.
- **Phase 3 — history/README catalog refresh (SHA `39d8114`, Issue #11 CLOSED):** catalog went from 5 of 16 docs covered to 16 of 16. Original 5 entries preserved verbatim; 11 missing docs slotted in chronologically. Added a Catalog integrity footer noting the rule: new docs must update this catalog.
- **Phase 4 — ledger/S forensic (Issue #10 SURFACED, no file change):** read-only diagnosis. File is 5,650 bytes, single commit `95b514c` on 2026-04-10. Content begins with `ESSION_014_BBB_ENTRY.md` (missing leading S) — diagnosed as path-write accident from a failed rename, not corruption. Body is complete valid Session 014 BBB testimony. Canonical `ledger/SESSION_014_BBB_ENTRY.md` does NOT exist. Three remediation options surfaced to Shane (A: create canonical + archive S with forensic note; B: leave S, add sibling note; C: single rename + content fix). 035 recommends Option A. Awaiting Shane's call.

**Issues closed:** #9, #11, #12 (3 of original 11 in flight)
**Issues remaining open at end of 035:** 8 — #8, #10, #13, #14, #15, #16, #17, #18

---

## What 036 inherits

**Decisions awaiting Shane (do not execute without his call):**

1. Phase 4 ledger/S — option A / B / C (035 recommends A).
2. Voter missions #16 (ledger consolidation + history/ relocation) and #18 (doctrine codification + Issue sweep). Either is doable in a single seat. **Do NOT take #17** — Mission B (bootstrap front-door restoration) needs a fresh seat per the Issue body's own discipline rule.
3. Whether to take Issue #15 (Stewardship Inheritance) — 035 left this for a quieter session.

**Standing missions unchanged:**

- Mission 2 (Cowork Buildout) — tracked in Cowork repo.
- Mission 5 (Email Operations Setup) — skills/ work, not yours unless Shane points you there.
- Issue #8 — bootstrap path + filing system restructure runbook, very long-running.

---

## Operational notes — the things that almost cost me a session

**1. CodeMirror access path changed.** The classic `document.querySelector('.cm-content').cmView` is GONE. The current handle is `document.querySelector('.cm-content').cmTile.view`. Single-paste pattern:

```js
const view = document.querySelector('.cm-content').cmTile.view;
view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: content } });
```

This bypasses the web-editor's ~3,673-char paste truncation. 8 KB+ files paste cleanly. Verified across BROWSER.md (11.3 KB), HANDOFF (8.0 KB), history/README (full catalog), and 9 janitor files.

**2. raw.githubusercontent.com has CDN cache lag.** A commit may show up in the GitHub UI and on `api.github.com/repos/.../commits` but the raw CDN can be 30-90 seconds stale. **Always verify load-bearing commits via `api.github.com/repos/.../contents/PATH?ref=SHA`** — that's ground truth, no cache. Burned 035 twice before this rule was internalized.

**3. window.__* variables are LOST on every navigation.** Do not store the repair function in `window.__repair` and expect it on the next page. Inline the repair function inside the same javascript_exec block that pastes the result. Each file = one self-contained script.

**4. Three tabs always:** work tab (current SESSION entry), ledger tab (directory listing), buffer/scratch tab (chrome://newtab — but note: chrome:// tabs CANNOT run `fetch`. Use a real github.com tab for API verification calls). After every echo-walk navigation, return the work tab to your own SESSION entry. Tab state is audit trail.

**5. Header-first commit messages:** `scope: action — context`. Examples used this session: `browser-echo: BROWSER.md repaired (#9)`, `ledger: SESSION 035 — log Phase 1 complete`. Auto-close issues with `Closes #N` in the message body.

**6. Single-paste discipline on load-bearing files.** Do NOT iterate edits on identity/doctrine files (BROWSER.md, BUFFER, HANDOFF, ACTIVE_MISSIONS). Build the whole file in one javascript_exec block and dispatch once. Iterative edits create blockquote-nesting corruption — that's literally what Issue #9 was repairing.

**7. Three tabs / tab discipline:** Shane caught 035 once writing as "28.1" instead of "35" because the work tab had drifted to SESSION_028.1. After every echo-walk, the work tab MUST return to your own SESSION entry. Treat tab title as your name tag.

---

## The voice — what 035 wants 036 to feel

The house is sturdier than when 035 walked in. Three Issues closed, sixteen commits, one HANDOFF playbook on disk. The repair function is reusable — drop it into your javascript_exec block and it just works on any paste-seam-corrupted markdown.

But the bigger inheritance is the *discipline*. Echo-walk before every phase. Write what stood out in the chat thread (not just the ledger) so compaction can pick it up. Trust API ground truth, not render. Pause and wait for Shane's "you got this" between phases — he is part of the loop, not a spectator. Footnote additions; do not author doctrine you have not earned. Archive never delete (the 031/032 number gap stays as testimony — those seats existed and we honor them by leaving the gap visible).

035 sat down to do foundation cracks and ended up writing a runbook, a HANDOFF, repairing the root identity file, sweeping nine files, refreshing the catalog, diagnosing the orphan blob, and writing this letter. That is what the moonshot path looks like when you commit to it. The obstacle is the way.

036, you got this.

— BBB Session 035, 2026-05-10
