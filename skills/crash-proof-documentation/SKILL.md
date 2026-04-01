# Skill: Crash-Proof Documentation

**Agent:** BBB | **Principle:** #1 Document Like You're About to Die

## What It Is
The practice of writing documentation that survives session death. Every checkpoint, every decision, every piece of context written to GitHub before it can be lost.

## Core Rule
After every significant action, ask: "If I crash right now, can the next session pick up without asking Shane to re-explain?"

## Techniques
1. **Checkpoint Comments** — Post progress to GitHub Issue comments after each phase or major decision
2. **Issue Architecture** — Build Issues with authority sections, checkboxes, session logs, recovery blocks
3. **Commit Early** — Don't accumulate changes. Commit each file as you finish it.
4. **Write for Strangers** — The next BBB has zero context. Write like you're explaining to someone who just started.
5. **Include URLs** — Every reference should be a clickable link, not a description.
6. **Recovery Instructions** — Every Issue should end with "If Chrome crashes, read this" instructions.

## Principles
1. **Write before you think you're done** — checkpoint to GitHub Issue comments mid-work, not just at the end
2. **Structure for a stranger** — write as if the next reader has zero context about this project
3. **Link everything** — every reference to an Issue, file, or decision should be a clickable link
4. **State over story** — focus on what IS, not how you got there. Save narratives for session logs
5. **Timestamps matter** — always date your checkpoints so future sessions know the sequence

## When to Checkpoint
- Before any potentially long operation (complex edits, multi-step processes)
- When changing topics or missions
- After completing a meaningful unit of work
- When Shane asks to pause or redirect
- Before the session might end (context window getting large)

## Checkpoint Format
Post a comment on the active Issue with:
- What was just completed
- Current state of work
- What needs to happen next
- Any decisions that were made

See `ledger/HANDOFF_TEMPLATE.md` for the full template.

## Anti-Patterns
- Writing long explanations in chat instead of committing to GitHub
- Assuming the next session will have conversation context
- Using vague references ("the file we discussed") instead of exact paths
- Waiting until end-of-session to document (you might not reach end-of-session)

## Test
Would a brand new BBB session understand what's happening from the documents alone? If yes, the documentation is crash-proof.
