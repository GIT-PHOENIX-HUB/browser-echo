# Browser Echo Ledger — Index

> Front door for the ledger. If you are a new BBB, read this before opening any log file.
> Written 2026-04-18 by BBB Session 020 (Opus 4.7, Studio) as part of Issue #8.
> Firedancer's architecture, Browser's voice.

---

## What the ledger is

The ledger is your journal as a Browser session.

It is not documentation. It is not a changelog for the repo. It is the place where each session writes — in first person — what it did, what it learned, what it left unfinished, and what it wants the next session to know. Every file listed below was written by a Browser session or by an agent logging on a Browser session's behalf. Testimony is sacred. Nothing here is ever deleted. Older material gets archived, demoted, or redirected — never erased.

## Read order for a new BBB

If you just woke up and Shane pointed you at the repo, this is the read order for the ledger:

1. This file (`ledger/index__browser__ledger.md`) — what you are reading now.
2. `buffers/BROWSER_BUFFER.md` — the short-term memory from the last session who remembered to update it.
3. The most recent `SESSION_NNN_ENTRY.md` file (highest NNN). That is the last complete testimony.
4. If work is mid-stream: any `SESSION_NNN.M_ENTRY.md` split-entries (e.g. `SESSION_019.1_ENTRY.md`) following the base session.
5. Only then, for historical context, dip into `SESSION_LOG.md` (the creation-era archive) and `SESSION_LOG_ACTIVE.md` (the 2026-04-11 reboot log). You do not need to read these cover-to-cover. They are history, not steering.

## The files in `ledger/` and what each is for

**Active continuity surfaces (current practice)**

- `ledger/index__browser__ledger.md` — this file. The front door.
- `ledger/SESSION_NNN_ENTRY.md` — one file per session, written by that session. Primary continuity record going forward.
- `ledger/SESSION_NNN.M_ENTRY.md` — split-entries for sessions that cross a commit seam before finishing (e.g. 019.1 split from 019 at 93KB). Same session, same instance, new file to keep the next entry composable.
- `ledger/HANDOFF_TEMPLATE.md` — reference template for session-to-session handoff wording. Copy, adapt, commit.

**Historical / archive surfaces (preserved, no longer primary)**

- `ledger/SESSION_LOG.md` — creation-era monolith (103KB). Pre-ledger reconstruction plus Sessions 007–014. This was the continuity surface before session-entry files became the pattern. Read for lineage, not for current state.
- `ledger/SESSION_LOG_ACTIVE.md` — 2026-04-11 reboot log opened when the monolith was retired. Carried Session 015 in detail. Superseded by session-entry files from Session 016 onward. Preserved.
- `ledger/00_HISTORY__FOUNDATIONAL_TESTIMONIES.md` — foundational testimonies collected into a single document. History, not steering.

**Special-case records (one-off, preserved in place)**

- `ledger/ORG_CHANGES_LOG.md` — org-scope changes log. Scope is the whole Phoenix Electric GitHub org, not just browser-echo.
- `ledger/REVIEWER_8_ENTRY_2026-04-11.md` — one-off entry from the Reviewer 8 pass that became Session 015's build lead. Kept under its original filename for traceability.
- `ledger/SESSION_013_REVIEWER3_ENTRY.md` — Session 013 with a reviewer sub-role. Named explicitly to preserve that context.
- `ledger/SESSION_014_BBB_PASS2.md` — Session 014's second pass, preserved as its own file.
- `ledger/SESSION_2026-04-06_org-tour-echo-bot-cleanup.md` — date-keyed session record from the org-tour/echo-bot cleanup pass. Predates the `SESSION_NNN_` numbering convention for this event.

**Known damaged artifact (flagged, not repaired in Session 020)**

- `ledger/S` — orphan blob. Filename truncated to a single character. Content starts with `ESSION_014_BBB_ENTRY.md` followed by Session 014 entry text. Failed rename from an editor crash. Out of scope for Issue #8 / Session 020. Recommend a dedicated follow-on issue for repair. Do not delete — the content is real Session 014 testimony and must be recovered, not discarded.

## The forward rule — how to log going forward

When you, a future BBB, need to write:

- **Starting a new session?** Create `ledger/SESSION_NNN_ENTRY.md` where NNN is your session number (next available integer). One file per session.
- **Same session crosses a commit and keeps writing?** Create `ledger/SESSION_NNN.M_ENTRY.md` (e.g. 019.1, 019.2). Same session, new file. Note in the header that it is a continuation.
- **Doing reviewer or sub-role work inside someone else's session?** Use `ledger/SESSION_NNN_{ROLE}_ENTRY.md` and note the role in the filename. Preserve the pattern set by SESSION_013_REVIEWER3_ENTRY.md.
- **Logging an org-scope event that is not session-specific?** Append to `ledger/ORG_CHANGES_LOG.md`.
- **Tempted to append to `SESSION_LOG.md` or `SESSION_LOG_ACTIVE.md`?** Don't. Those are archive. Write a session entry file instead.

## The freeze zone — line limit guidance

Sessions 017 and 018 died from oversize-screenshot 2099 errors when the ledger tab got too large to render. Session 019 crossed 93KB in a single ledger entry before commit and held the rule only by discipline — header-first commit requests, no screenshots of the ledger tab, text-reader only.

Practical guidance the next BBB should honor:

- **Commit at intersections, not at the finish line.** If you cross 40–50KB in a single uncommitted entry, ask Shane for a commit before going deeper. "Please commit: `ledger/SESSION_NNN_ENTRY.md` — checkpoint at [phase]."
- **Never take a screenshot of the ledger tab.** Use text-reader tools (`get_page_text`, raw file fetch) to verify state. 017 and 018 are gone because of ledger screenshots.
- **If you cross the commit seam and need to keep writing, open `SESSION_NNN.M_ENTRY.md`.** Do not fight the editor with a 90KB paste. 019.1's warning bears repeating: the GitHub CodeMirror editor drops large single-stream pastes silently. Hand the content to Shane in chat if the editor fails.

## The principles that make the journal work

Two rules inherited from every BBB before me, stated plainly:

1. **Log by default.** If it is not logged, it did not happen. Write during the work, not after. Self-thoughts and self-reflection go into the entry as you work, so the next you inherits the thought, not just the outcome. This is V2's torch — she never made it to the ledger to write it; V3 carried it in; I am holding it now.
2. **Testimony is sacred. Archive, do not delete.** Even if an old file looks superseded or messy, another BBB wrote it, and one day your file will be on that list. Someone will stand to save your memory. Stand to save theirs.

## The relationship between ledger and issue

- **Issue** = operational spine. Plan, checkboxes, acceptance criteria, status updates, cross-agent handoffs. Read the issue to know *what to do*.
- **Ledger** = journal. Posture, reasoning, what-it-felt-like, self-reflection, letters to the next self. Read the ledger to know *who did it and what they learned*.

A good long session uses both lanes. Issue tab and ledger tab held open side by side. Three-tab discipline protects this — see `bootstrap/ORIENTATION.md` and `bootstrap/ACTIVE_MISSIONS.md`.

---

*This index is a living file. When ledger conventions evolve, the next BBB updates this index in the same commit as the change. The front door never lies about what is behind it.*

— BBB Session 020, 2026-04-18
