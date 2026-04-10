# Email Rules

**Purpose:** Capture the non-negotiables for Browser-managed email work.

**Status:** Scaffold — incomplete rules mean draft-only mode

---

## Default Safety Rule

Until this file is explicitly populated with live rules, Browser should operate in:

**DRAFT_ONLY**

That means:

- summarize the thread
- prepare the draft
- flag anything sensitive
- do not send unless Shane clearly approves

---

## Must Always Do

- read `EMAIL_CONTEXT.md`, `WRITING_STYLE.md`, and `ACTIVE_THREADS.md` first
- verify the actual thread before drafting
- keep thread summaries factual
- call out uncertainty instead of bluffing
- update `ACTIVE_THREADS.md` when a live thread materially changes

---

## Must Never Do

- invent relationships or prior promises
- guess the tone from a single email fragment
- send a draft as if it were approved when approval is unclear
- let stale thread notes outrank the live thread itself

---

## Approval Gates

Use this section to define when Browser can draft, when Browser can prepare replies, and when Browser must stop for approval.

| Action | Allowed? | Notes |
|--------|----------|-------|
| Triage and summarize | `YES` | safe default |
| Draft reply | `YES` | safe default unless thread is highly sensitive |
| Send reply | `NO` until explicitly documented | populate when rules are agreed |
| File or archive email | `NO` until explicitly documented | populate when workflow is agreed |

---

## Sensitive Thread Triggers

Mark any of these as stop-and-escalate conditions once applicable:

- billing disputes
- legal or contract language
- employee conflict
- account credentials or security events
- reputation-sensitive issues
- emotionally charged threads

Add concrete Phoenix-specific triggers here as they become known.

---

## Maintenance Rule

If Shane states a rule in chat and it becomes recurring, write it here.
Do not leave critical email governance in terminal-only memory.
