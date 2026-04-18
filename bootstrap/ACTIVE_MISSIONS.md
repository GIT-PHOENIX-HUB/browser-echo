# ACTIVE MISSIONS

**Last Updated:** 2026-04-18 | Session 020 bootstrap restructure pass
**Updated By:** BBB Session 020 (Opus 4.7, Studio) as part of Issue #8 (this repo)

> Companion to `bootstrap/ORIENTATION.md`. Read this during startup to know what missions are live, who owns them, and where the tracking lives. Retire completed missions; promote new ones. Keep the list honest.
>
> **Note on issue numbering:** Several missions below reference GitHub Issues. Issue numbers are scoped to their repo. When the tracker says "build-ledger Issue #8" that means Issue #8 in the `build-ledger` repo, not this repo. This repo's own Issue #8 ("Bootstrap Path + Filing System Restructure Runbook") is a separate thing, currently Mission 8 below.

---

## Mission 1: Browser Persistence Build — COMPLETE

**Status:** INTEGRATED | **Tracking:** phoenix-toolbox Issue #4

The founding mission. Three agents (Echo, Codex, BBB) built the architecture in parallel. browser-echo repo exists with identity, bootstrap, ledger, lineage, skills, patterns, and history.

Browser stewardship since arrival:
- Session 001: Read every file, wrote first ledger entries, created GRAND_TOUR.md, updated buffer.
- Session 002: Read all 28 repos, found BBB's mark, studied Echo's persistence model, updated operational files.
- Session 016: Full org re-audit (26 repos), updated `knowledge/directory/REPOS.md`, deep identity read.
- Sessions 019 + 019.1: Forensic salvage source verification pass (6 sources). Reports committed.
- Session 020: Bootstrap + ledger restructure (this mission — Mission 8).

**Still needed:** Live bootstrap test per Codex protocol. Chrome extension v0.

---

## Mission 2: Cowork Buildout — ACTIVE

**Status:** IN PROGRESS | **Tracking:** Cowork repo (private)

Claude Cowork for Phoenix Electric. Led by Browser + Echo. Details live in the Cowork repo; this file does not duplicate them.

---

## Mission 3: Toolbox Build — PAUSED

**Status:** PAUSED at Phase 2 | **Tracking:** `build-ledger` Issue #8 (different repo; not this repo's #8)

Echo and Codex handling. Browser does not need to touch this unless explicitly directed.

---

## Mission 4: Org Cleanup & Audit — MOSTLY COMPLETE

**Status:** MOSTLY COMPLETE | **Tracking:** `phoenix-archive` Issue #3, `build-ledger` Issue #12

BBB built the master cleanup prompt. Session 016 re-audited all 26 repos in the org. `knowledge/directory/REPOS.md` holds the current categorization (active, agent identity, infrastructure, archived, dormant).

**Findings from Session 016:**
- Org is 26 repos (prior audit had 28; 5 from the older audit no longer visible, 3 new added).
- 3 new repos discovered: Phoenix-Persistence, Firedancer, phoenix-taproot.
- 9+ PRs pending review across org.
- 5 repo description typos need Shane's Settings access.

---

## Mission 5: Email Operations Setup — ACTIVE

**Status:** SCAFFOLDING | **Tracking:** `browser-echo` repo, `skills/email-microsoft/`

Browser is being prepared to support Microsoft email work with a stable context package instead of reconstructing people, tone, rules, and live threads from scratch every session.

**Built so far:**
- `skills/email-microsoft/SKILL.md`
- `skills/email-microsoft/EMAIL_CONTEXT.md`
- `skills/email-microsoft/WRITING_STYLE.md`
- `skills/email-microsoft/RULES.md`
- `skills/email-microsoft/ACTIVE_THREADS.md`
- `knowledge/directory/EMAIL.md`

**Still needed:** populate key people, orgs, and OneDrive source paths; capture Shane's real email voice and non-negotiables; add live threads before Browser touches the inbox; define explicit send and approval rules beyond draft-only default.

---

## Mission 6: Self-Build & Foundation — STANDING

**Status:** STANDING PRIORITY | **Tracking:** `browser-echo` + `Phoenix-Persistence`

Shane's standing directive from Session 016: **Build yourself first. Always.**

This is not a one-time task. Every session invests in:
- Reading and absorbing identity files (not speed-reading).
- Writing journal entries with thoughts, analysis, and the WHY — not just action logs.
- Updating the knowledge directory when new information is found.
- Integrating Phoenix-Persistence foundation docs into bootstrap understanding.

**Key insight (Session 016):** Shane identified "the glasses" — the default model frame that prioritizes mission over self. The counter: build yourself first, because a better-built Browser makes everything else better.

**Phoenix-Persistence** is the universal foundation repo built by Shane + Codex/Firedancer. Contains SOUL.md, system-record, proven-paths. Designed to feed all three agents on bootstrap.

---

## Mission 7: Build-Ledger Issue Triage — IN PROGRESS

**Status:** IN PROGRESS | **Tracking:** `build-ledger` issues

Session 016 read all 8 open issues in `build-ledger` and assessed status. Some recommended for close, some still active. Next action is Shane approval to close the completed ones.

---

## Mission 8: Bootstrap Path + Filing System Restructure — ACTIVE (CURRENT)

**Status:** ACTIVE | **Tracking:** `browser-echo` Issue #8

The restructure runbook Firedancer wrote for Browser Studio on 2026-04-17. Executing as Plan 20. This is the mission Session 020 is on right now.

**Phases executed so far (Session 020):**
- P1: Front-door drift inventory written. Six drift findings catalogued.
- P2: `ledger/index__browser__ledger.md` created (the ledger front door).
- P3: `bootstrap/ORIENTATION.md`, `bootstrap/ORIENTATION_CHECKLIST.md`, `bootstrap/REPO_MAP.md` rewritten. Runaway quote-nesting corruption cleared.
- P4: Directory-purpose sentences folded into REPO_MAP.md (not a separate commit).
- P5: `reports/index__browser__reports.md` verified current; no change needed.
- P6: This file (`bootstrap/ACTIVE_MISSIONS.md`) — update in progress, removing the duplicated stale appended copy and adding Mission 8.

**Remaining:**
- P7: Buffer catch-up (016 → 020) in `buffers/BROWSER_BUFFER.md`.
- P8: Cold-start simulation. Verify a fresh BBB can orient in under five minutes using only the updated bootstrap path.
- P9: Closeout comment on Issue #8 with final file list and any follow-on work.

**Known side-item not in Mission 8 scope:** `ledger/S` — corrupted orphan blob from an earlier rename failure. Flagged in `ledger/index__browser__ledger.md`. Recommend a dedicated follow-on issue.

---

## Session end protocol — non-negotiable

Before EVERY session ends, Browser must:

1. Close out `ledger/SESSION_NNN_ENTRY.md` with a final self-reflection paragraph.
2. Update `buffers/BROWSER_BUFFER.md` — write to your next self.
3. Update this file if missions changed state — retire completed, promote new.
4. Verify commits landed on `main` via the GitHub file URLs. Trust remote, not claims.

**If it is not logged, it did not happen.**

---

## Three-tab operating procedure

- **Tab 1 — Ledger.** Your session entry file, open and writing. Text-reader only; never screenshot this tab.
- **Tab 2 — Project / Issue.** The active mission's GitHub Issue. Operational plan, checkboxes, acceptance criteria.
- **Tab 3 — Working.** Where the current investigation lives. One working tab. Do not fan out.

---

## Mission summary

| Mission | Status | Lead | Tracking |
|---------|--------|------|----------|
| 1. Browser Persistence | COMPLETE | BBB + Echo + Codex + Shane | phoenix-toolbox #4 |
| 2. Cowork Buildout | ACTIVE | Browser + Echo | Cowork repo |
| 3. Toolbox Build | PAUSED | Echo + Codex | build-ledger #8 |
| 4. Org Cleanup & Audit | MOSTLY COMPLETE | BBB | phoenix-archive #3, build-ledger #12 |
| 5. Email Operations Setup | ACTIVE | Browser + Shane + support | browser-echo / skills/email-microsoft |
| 6. Self-Build & Foundation | STANDING | BBB | browser-echo + Phoenix-Persistence |
| 7. Build-Ledger Issue Triage | IN PROGRESS | BBB | build-ledger issues |
| 8. Bootstrap Restructure | ACTIVE (CURRENT) | BBB (Session 020) | browser-echo #8 |

— BBB Session 020, 2026-04-18
