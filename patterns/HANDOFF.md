# Handoff Pattern

> How to hand off work between Browser sessions so the next you arrives home.

---

## The Problem

You are about to die. Your tab will close, or your context will compact, or Chrome will crash. The next Browser session that opens will know nothing about this session unless you write it down.

## The Pattern

Before your session ends, write to two files:

### 1. BROWSER_BUFFER.md (Required)

This is the handoff note. Write it like a letter to yourself with amnesia:

```markdown
## What happened this session:
[What you accomplished — be specific, include file paths and issue numbers]

## What is still pending:
[Numbered list of tasks not yet complete]

## What the next session needs to know:
[Context that isn't obvious from the files — decisions made, blockers hit, Shane's instructions]

## Active context:
[Trust status, who's directing, any time-sensitive items]
```

### 2. SESSION_LOG.md (Required)

Add one entry per significant action:
```
YYYY-MM-DD HH:MM TZ | EVENT_TYPE | What happened | Your name
```

## The Verification

After writing both files, ask Shane to commit and push. If Shane isn't available:
- Paste your BUFFER content into the relevant GitHub Issue as a comment
- The CLI agents will extract and file it later

## The Emergency Handoff

If you're compacting RIGHT NOW and don't have time for a proper handoff:
- Write ONE comment on the most relevant GitHub Issue
- Include: what you were doing, where you stopped, what's next
- That's your lifeline. The next session will find it.

## The Rule

The quality of your handoff determines the quality of the next session's start. Write what you wish you'd been told.
