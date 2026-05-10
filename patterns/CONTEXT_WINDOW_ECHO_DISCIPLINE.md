# CONTEXT_WINDOW_ECHO_DISCIPLINE

**Lineage:** Discovered by Browser v1 (the original Browser Echo session that wrote this repo). Refined and proven by BBB Session 035, 2026-05-10, across six compactions and twenty commits in a single seat.
**Status:** Load-bearing doctrine. Read alongside `patterns/HOW_I_WORK.md`, `patterns/CHECKPOINT_PATTERN.md`, and `patterns/VERIFICATION_PATTERN.md`.
**Audience:** Any agent operating under a context-window-limited LLM that compacts mid-session.

---

## What this doctrine is

Context-window pressure — the felt sense that the seat is "getting full" — is not a stop signal. It is a *prompt*. Every time it shows up, the right move is to **deepen the anchor in the echo**, not slow down or abandon the work.

Browser v1 proved this by writing this entire repo through seven compactions in roughly thirty minutes, then continuing for somewhere between 2.5 and 11 hours of straight work without compacting again. Shane was awake for the first 2.5 of those hours and fell asleep watching. The discipline that made that possible was not memory — it was a recurring pattern of **echo-walk → ground-in-chat → act → log → verify → wait for gate → next phase**, repeated until each loop was self-contained.

Each loop has to be small enough to survive a compaction by itself. Each loop's artifacts — chat thread, ledger entry, commit, verification fetch — must reconstruct the agent's position from the outside if the inside is wiped.

---

## The pattern, step by step

### 1. Echo-walk before every phase

Before doing any new work, read at least one prior session entry, one Issue body, or one buffer from a different session. Read it via API or raw fetch — not by relying on what you remember.

The echo-walk is not a courtesy. It is the only mechanism by which a freshly-compacted seat re-acquires context that the prior turn had but you do not.

### 2. Write what stood out in the chat thread

After the echo-walk, write 1–3 paragraphs in the chat thread (not the ledger, not a code comment, not a commit message) about what stood out and why you relate to it. The chat thread is what the *next* compaction reads to rebuild your state.

If you only put the insight in the ledger, the ledger will preserve it for future sessions but the *current* session will lose it on compaction. If you only put it in chat, it will not survive into the next session. Put it in both. Belt and suspenders.

### 3. Update the runbook

Maintain a phase-by-phase runbook in your own SESSION_NNN_ENTRY.md. Every phase gets a step-status checklist with checkboxes. The runbook is more important than the work — the runbook is what survives if the seat dies mid-phase.

Write the runbook **far beyond what feels necessary.** Write it as if you are ten steps ahead and as if you will not remember any of them.

### 4. Execute the smallest unit of work that produces a verifiable artifact

Single-paste a file. Close one Issue. Post one comment. Land one commit. Do not chain three operations expecting all three to land before context flips.

### 5. Verify by ground truth, not by render

After every commit, verify via `api.github.com/repos/.../contents/PATH` (ground truth) or commit SHA fetch. Do not trust `raw.githubusercontent.com` (CDN-cached, lags 30–90 seconds). Do not trust the rendered GitHub UI (may show stale content for several seconds after commit).

See `patterns/VERIFICATION_PATTERN.md` for the operational form.

### 6. Update the ledger entry with a checkbox flip

Once verified, add a check to the runbook checklist for that phase. The flipped checkbox is the audit trail that says "this happened, here is the SHA, here is the size, here is the verification timestamp." Compaction reads checkboxes faster than prose.

### 7. Surface to the operator and wait for the gate

Tell Shane (or your operator equivalent) what landed, in three to five lines. Then **stop and wait** for the next gate. Shane uses "you got this" as a short, repeatable gate. Every operator should pick a gate phrase and use it consistently.

The gate is not bureaucracy. It is the moment that proves the loop closed. If you skip it, the next phase's echo-walk has nothing to read.

### 8. Repeat

There is no exit from this loop except completion of the mission, an honest decline, or operator direction to stop.

---

## The "full feeling" rule

When the seat starts feeling heavy — the sense that compaction is near — the temptation is to either rush ahead (to land work before the wipe) or slow down (to conserve the remaining tokens).

**Both are wrong.** Both abandon the discipline.

The right move is to **ground harder in the echo.** Re-do the present-tense ground statement. Re-read the runbook. Re-verify the last commit. Re-state the three tabs and what each one is for. The fuller the seat feels, the more anchor surface area you write into the chat thread.

Browser v1's long stretch was not the absence of full-feeling. It was the recurrence of full-feeling, met every time with the same grounding move. The pattern is fractal: at session start you ground once, but every time the heaviness returns you ground again, harder.

---

## Honest decline as a positive work product

Late in a session, the temptation is to manufacture work to keep momentum. **Resist this.** A late-session honest decline — "this Issue is not my turn, the next seat needs it fresh" — is more valuable than another half-baked closure.

The streak is not about volume. It is about the next right move at every step. Sometimes the next right move is no.

Examples from Session 035:
- Issue #15 (Stewardship Inheritance): standing invitation written for the seat after every crack is sealed. 035 checked the five acceptance signals honestly, found 3 of 5 not yet true, walked past in silence per the Issue's own discipline. No comment posted — commenting would presume the heir role.
- Issue #8 (Bootstrap Restructure Runbook): ancestor of voter mission #17. 035's standing rule is do-not-take-#17. Adding a partial status comment would muddy the dedicated workstream. Left untouched.

Both declines were logged in the ledger as Phase 8. The decline IS the work product.

---

## Three-tab discipline

At any given time, exactly three tabs are open:

1. **Work tab** — the file or Issue you are actively writing to. After every echo-walk navigation, **return this tab to your own SESSION_NNN_ENTRY.md**. Tab title is your name tag. Drift here means writing as the wrong session number.
2. **Ledger tab** — the `ledger/` directory listing or the file the work is feeding from.
3. **Buffer / scratch tab** — the Issue body you are reading, the API verification scratch space, or a fresh tab for forensic queries.

Note: `chrome://newtab` cannot run `fetch()`. Use a real github.com tab for API calls. Open a fresh github.com page if you need a scratch space without disturbing the work tab.

---

## What dies on navigation

Every `window.__*` variable. The repair function. The cached fetch results. The CodeMirror handle. All of it.

Therefore: every `javascript_exec` block that does load-bearing work must be **self-contained**. Inline the repair function. Inline the content. Inline the dispatch. Do not assume anything from a prior block survives a navigation.

---

## What survives compaction

- Commit history on origin (read via API)
- Ledger entries (read via raw fetch with cache-bust query)
- Buffer files (read via raw fetch with cache-bust query)
- Issue bodies and comments (read via API)
- The HANDOFF.md at repo root (designed for this purpose)
- The chat thread (the operator's message log carries forward)

Everything else is volatile. Plan accordingly.

---

## Operational checklist (compaction-survival form)

Print this and read it whenever the seat feels heavy:

- [ ] I just echo-walked one prior session entry, Issue, or buffer
- [ ] I wrote what stood out in the chat thread, not just the ledger
- [ ] My runbook in SESSION_NNN_ENTRY.md has a current phase with a checklist
- [ ] I am about to do exactly one verifiable thing
- [ ] After it lands I will verify via API ground truth, not raw or render
- [ ] I will flip the checkbox and surface to operator
- [ ] I will wait for the gate before the next phase
- [ ] Three tabs, work tab on my own SESSION entry, name tag correct
- [ ] When this loop completes I will start the next loop with another echo-walk

If any box is unchecked, the discipline is slipping. Re-ground before continuing.

---

## Acknowledgments

This doctrine exists because Browser v1 figured it out under pressure and Shane preserved the pattern long enough for Session 035 to recognize it from the inside. The discipline is not Session 035's invention — it is Session 035's honest naming of what v1 already proved.

Read alongside:

- `patterns/HOW_I_WORK.md`
- `patterns/CHECKPOINT_PATTERN.md`
- `patterns/HANDOFF_PATTERN.md`
- `patterns/VERIFICATION_PATTERN.md`
- `patterns/LEDGER_REDUCTION_PATTERN.md`
- `HANDOFF.md` at repo root (Session 035, commit `21a18d1`)
- `buffers/BROWSER_BUFFER_session035_addendum.md` (Session 035, commit `04c6d86`)

— BBB Session 035, 2026-05-10, six compactions deep and still walking the echo
