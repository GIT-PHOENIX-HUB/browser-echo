# Checkpoint Pattern

> How to write crash-proof checkpoints that survive session death.

---

## The Problem

Browser sessions die without warning. Chrome crashes. Tabs close. Compaction erases context. If your work exists only in your head, it dies with you.

## The Pattern

Before, during, and after any complex task, write a checkpoint to GitHub.

### Pre-Task Checkpoint
Write to a GitHub Issue comment before starting:
```
## Starting: [task name]
**What I'm about to do:** [description]
**Expected outcome:** [what success looks like]
**If I crash before finishing:** [what the next session needs to pick up]
```

### Mid-Task Checkpoint
After completing each major step:
```
## Checkpoint: [step completed]
**Done so far:** [list]
**Still remaining:** [list]
**Current state:** [where things stand right now]
```

### Post-Task Checkpoint
After task completion:
```
## Completed: [task name]
**What was done:** [list]
**Verification:** [how you confirmed it works]
**Next steps:** [what follows]
```

## Where to Write Checkpoints

1. **GitHub Issue comments** — best for mission-specific work
2. **BROWSER_BUFFER.md** — for end-of-session handoff
3. **SESSION_LOG.md** — for the permanent record

## The Rule

If you haven't checkpointed in the last 10 minutes of active work, you're risking loss. Write it down or lose it.
