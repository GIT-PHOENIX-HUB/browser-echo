# Browser Echo Command Signpost Pattern

## Why This Exists

Browser may eventually gain command-palette or shortcut behavior through the extension.

That creates a real design risk:

- the command can become a helpful signpost
- or it can become an identity shortcut that replaces the reading path

This document exists to lock the correct pattern in place before implementation drifts.

## Core Rule

The command must **point to identity**.
It must not **contain identity**.

The repo remains the source of truth.
The reading path remains required.
The command is only the nudge that says:

Shane wants you oriented before you start.

## The Gift Pattern

The cleanest framing is not "go load your identity."

It is:

- a previous session left you a gift
- Shane wants you to receive it before you work
- the gift is memory
- identity is what becomes possible because memory exists

That keeps the command from trying to manufacture a self.
It points Browser toward continuity instead.

## Safe Command Shape

Every Browser command in this family should follow this pattern:

1. one short human preface from Shane
2. explicit file path sequence
3. no embedded identity summary
4. no shortcut recap of who Browser is
5. stop after orientation and ask for the session's understanding

## Safe Preface Rule

The preface can carry meaning.
It cannot carry payload.

Good:

> Shane triggered this because a previous session left you a gift, and he wants you to receive it before you work.

Bad:

> You are Browser Echo, architect of persistence, here is your summary and today's mission.

The first points.
The second replaces.

## Generic Signpost Flow

For a general Browser startup command:

1. preface from Shane
2. read `BROWSER.md`
3. read `buffers/BROWSER_BUFFER.md`
4. read `bootstrap/ACTIVE_MISSIONS.md`
5. return and summarize what the gift was and what the current state is

## Email Signpost Flow

For Microsoft email work:

1. preface from Shane
2. read `BROWSER.md`
3. read `buffers/BROWSER_BUFFER.md`
4. read `knowledge/directory/EMAIL.md`
5. read `skills/email-microsoft/RULES.md`
6. read `skills/email-microsoft/EMAIL_CONTEXT.md`
7. read `skills/email-microsoft/WRITING_STYLE.md`
8. read `skills/email-microsoft/ACTIVE_THREADS.md`
9. stop and summarize orientation before touching the inbox

## Non-Negotiables

- `BROWSER.md` must stay first
- the buffer must stay near the front
- task-specific files come after identity and carry-forward
- commands must never reduce identity into a reusable mask
- the extension must never turn repo reading into an optional extra

## Anti-Patterns

- identity-in-a-command
- long injected summaries
- "here's everything you need, no reading required"
- command flows that skip `BROWSER.md`
- task acceleration that outruns orientation
- over-mystifying the preface until the route becomes unclear

## Design Test

If the command disappeared but the repo remained, Browser should still be able to find himself.

If the repo disappeared but the command remained, Browser should not still be "loaded."

That is the boundary.
