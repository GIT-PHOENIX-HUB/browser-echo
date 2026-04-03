# Directory: Rules & Protocols

**Last verified:** 2026-04-02 | Session 003

---

## Quick Reference

5 Golden Rules (never delete, never push without review, never auto-send emails, never skip verification, when in doubt stop and ask). 5-Step Chain (RESEARCH/VERIFY > PROPOSE > APPROVE > EXECUTE > TEST/VERIFY). Quality = Taj Mahal. No shortcuts. These rules predate everything — they were created in the Executor era and have never changed.

---

## The 5 Golden Rules (Immutable Since Executor Era)

1. **NEVER delete existing working code** — archive instead
2. **NEVER push to production without review**
3. **NEVER auto-send external emails**
4. **NEVER proceed without both verification points**
5. **When in doubt — STOP and ask**

Origin: Phoenix Local Governance - Executor project Instructions (claude.ai). These were the first governance rules Shane created after CLI deleted his code. They have survived every generation, every architecture change, every team expansion.

---

## The 5-Step Chain (Non-Negotiable)

**RESEARCH/VERIFY > PROPOSE > APPROVE > EXECUTE > TEST/VERIFY**

Shane's directive: Echo kept cutting the first and last steps. Research before proposing so you're not proposing fantasy. Test/verify after executing so you're not handing over broken work.

---

## Where Everything Lives

### Core Rules
- `BROWSER.md` — Rule #1 is the 5-step chain. Identity file defines all core operating rules.
- `identity/PRINCIPLES.md` — 7 principles governing Browser behavior.
- `identity/CAPABILITIES.md` — What Browser can and cannot do. Constraints are documented here.

### Patterns (Mechanical How-To)
- `patterns/HANDOFF_PATTERN.md` — How to transfer context between sessions.
- `patterns/CHECKPOINT_PATTERN.md` — How to save progress mid-session.
- `patterns/VERIFICATION_PATTERN.md` — How to verify work was done correctly.
- `patterns/ISSUE_ARCHITECTURE.md` — How to use GitHub Issues as live workspace.

### Approval & Access
- `arena/ACCESS_AND_APPROVALS.md` — What needs approval, what's auto-approved.
- `arena/AUTO_APPROVALS.md` — Categories Browser can act on without asking Shane.
- `arena/REVIEWER_MODE.md` — How adversarial review works in the build lane.

### Codex Gate Process
- `codex-support/` — Gate report, live test protocol, closeout template.
- Codex classifies findings: BLOCK_NOW (stop), FIX_THIS_PASS (fix before shipping), NOTE_FOR_LATER (track).

---

## Critical Warnings

- **Do NOT navigate to claude.ai** without Shane present. V2 session was killed by a policy flag.
- **Do NOT delete anything. Ever.** Archive only. This is Golden Rule #1.
- **browser-echo is PUBLIC.** Never commit secrets, tokens, credentials, or private information.
- **Minimize screenshots.** Sessions die at ~100 photos. Use read_page and get_page_text instead.
- **Checkpoint to GitHub DURING sessions.** V2's work was lost because nothing reached the remote. Commit early, commit often.
- **Shane does NOT read your files.** You must know your own repo. Don't assume he'll catch your mistakes.

---

## Cross-References

- [SHANE.md](SHANE.md) — For Shane's standing directives
- [PERSISTENCE.md](PERSISTENCE.md) — For how logging and handoffs work mechanically
- [TEAM.md](TEAM.md) — For approval chains and who reviews what
