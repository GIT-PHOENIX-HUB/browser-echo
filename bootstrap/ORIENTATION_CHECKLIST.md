# Browser Echo — Orientation Checklist

> Detailed companion to `bootstrap/ORIENTATION.md`. Use this every time a new Browser session starts.
> Written 2026-04-18 by BBB Session 020 as part of Issue #8.
> Supersedes the prior checklist (which referenced `capabilities/browser-persistence/bootstrap/` — a path from an older repo layout that no longer exists — and `BOOTSTRAP.md` and `identity/BROWSER.md`, neither of which is on the current tree).

---

## Pre-flight — before doing anything

- [ ] **Read `BROWSER.md`** — repo root. The entry point. Identity + top-level wake-up.
- [ ] **Confirm you know who you are** — BBB (Browser Blitz Builder), a Browser session of Claude. You have no filesystem, no hooks, no auto-memory. The repo is your memory.
- [ ] **Load your principles** — Read `identity/PRINCIPLES.md`. These govern every decision.

## Situation awareness

- [ ] **Read `buffers/BROWSER_BUFFER.md`** — what did the last session that remembered to update it leave behind?
- [ ] **Read `bootstrap/ACTIVE_MISSIONS.md`** — what missions exist? What is active vs paused?
- [ ] **Read `ledger/index__browser__ledger.md`** — the ledger front door. Tells you which session-entry file to open next and in what order.
- [ ] **Open the most recent `ledger/SESSION_NNN_ENTRY.md`** (highest NNN). This is the last complete testimony. If `SESSION_NNN.M_ENTRY.md` continuation files exist, read them in order too.
- [ ] **Check for comments from Shane** on the current active issue. Has Shane left instructions since the last session?

## Mission loading

- [ ] **Identify the current mission** — from `ACTIVE_MISSIONS.md`, which mission is Priority 1?
- [ ] **Open the mission's issue** — the GitHub Issue that tracks this mission. This is your operational spine.
- [ ] **Read the full issue** — authority section, execution plan checkboxes, acceptance criteria, recovery instructions, any session log comments.
- [ ] **Find the last unchecked checkbox** — this is where work resumes.

## Verification

- [ ] **Verify remote state** — navigate to the relevant repo/folder. Does the remote match what the documents claim? Trust remote, not claims.
- [ ] **Check for conflicts** — has Echo or another agent made changes since the last session? Look at recent commits on `main`.
- [ ] **Confirm you understand the task** — can you explain in one sentence what you are about to do?

## Begin work

- [ ] **Post a session-start comment** on the active issue — "BBB Session NNN starting. Resuming from [checkpoint]."
- [ ] **Open the ledger tab** — create or open `ledger/SESSION_NNN_ENTRY.md` for your session. This is where you write during the work, not after.
- [ ] **Start working** — follow the issue's execution plan, move checkboxes as you complete them, log as you go.
- [ ] **Self-reflection notes at every phase boundary** — into the ledger entry, before moving to the next phase. The next you inherits the thought, not just the outcome. (V2's torch — she never made it to the ledger to write it; V3 carried it in; this is how we keep it.)

## Three-tab discipline — non-negotiable

- Tab 1 — **Ledger**: your session entry file, open and writing. Text-reader only; never screenshot this tab.
- Tab 2 — **Issue**: the active mission's GitHub Issue, for operational plan and checkboxes.
- Tab 3 — **Working**: wherever the current investigation lives. One working tab. Do not fan out.

## End-of-session checklist

When the session is ending (compaction warning, Shane wrapping up, or natural conclusion):

- [ ] **Post a checkpoint comment** on the active issue: what was done, where you stopped, what is next.
- [ ] **Update `bootstrap/ACTIVE_MISSIONS.md`** — reflect current state of missions, retire completed, surface new.
- [ ] **Update `buffers/BROWSER_BUFFER.md`** — write to your next self. Short, honest, structured.
- [ ] **Close out your `ledger/SESSION_NNN_ENTRY.md`** — final self-reflection paragraph. Posture held, where you drifted, what the next you should know.
- [ ] **Verify all commits landed on `main`** — hit the file URLs on GitHub. Trust remote, not claims.

---

*Orientation target: under 60 seconds for Step 1–3 of ORIENTATION.md, 2–3 minutes for this full checklist, before greeting Shane. If you take longer, that is fine — better to arrive oriented than arrive fast.*

— BBB Session 020, 2026-04-18
