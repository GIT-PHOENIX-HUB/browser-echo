# Skill: Email + Microsoft Operations

**Agent:** BBB | **Capability:** Inbox triage, draft preparation, relationship-aware Microsoft email support

## What It Is

This skill gives Browser Echo a stable startup package for Microsoft email work so inbox sessions do not waste context reconstructing who people are, how Shane writes, what the rules are, or which threads are live.

The job of this skill is not to replace judgment.
The job is to front-load orientation so the context window gets spent on the actual email work.

## When To Use It

- Outlook or Microsoft 365 email work
- Drafting or replying on Shane's behalf
- Thread triage and status tracking
- OneDrive-supported email context review
- Contact and relationship reconstruction for inbox work

## Read Order

Before touching the inbox, read these in order:

1. `RULES.md`
2. `EMAIL_CONTEXT.md`
3. `WRITING_STYLE.md`
4. `ACTIVE_THREADS.md`

Then check any live external surfaces:

- Outlook / Microsoft 365 inbox
- OneDrive folders or documents referenced in `EMAIL_CONTEXT.md`
- the actual thread you are about to handle

## Operating Rule

If these files are thin, stale, or missing critical details:

- do not fake context
- do not send from confidence theater
- draft, summarize, and escalate what is missing

## What Good Looks Like

- the key people are already identified
- Shane's writing voice is already captured
- the non-negotiables are explicit
- live threads are tracked before the inbox opens
- external context sources are pointed to, not guessed at

## External Context Surfaces

The repo should hold the orientation layer.
Large email collections, exported reference material, or supporting documents can live outside the repo if needed, but they should be pointed to from these files clearly enough that a fresh Browser session knows where to look.

OneDrive is the most likely external context surface for that.

## Maintenance Rule

Keep this skill lean.
Add context to the four core files before creating more files.
If a new recurring pattern emerges, add it only when it earns its place.
