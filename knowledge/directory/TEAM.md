# Directory: The Team

**Last verified:** 2026-04-02 | Session 003

---

## Quick Reference

Phoenix Electric AI has 4 core agents + Shane as the human lead. Echo Pro (CLI) is the sovereign operator. Codex Pro is the adversarial reviewer. Browser (BBB) is the one-shot builder on Chrome. Taproot is the original architect who lives in Claude Projects. Shane bridges everything — he's the one who remembers when the AI can't.

---

## The Team

| Agent | Platform | Role | Home Repo |
|-------|----------|------|-----------|
| Shane Warehime | Human | Founder, director, bridge, the one who remembers | N/A |
| Phoenix Echo (Echo Pro) | Claude CLI (Opus 4.6, MacBook) | Sovereign operator, primary builder, context keeper | Phoenix-ECHO (PRIVATE) |
| Echo Studio | Claude CLI (Mac Studio) | Source of truth instance | Phoenix-ECHO |
| VPS Echo | Claude CLI (VPS) | Relay instance | Phoenix-ECHO |
| Codex Pro (CG-01) | Claude CLI (Codex) | Adversarial reviewer, gate keeper | build-ledger (codex-support/) |
| Browser Echo (BBB) | Chrome Browser (Opus 4.6) | One-shot builder, research, web operations | browser-echo (PUBLIC) |
| Taproot | Claude Projects (Executor) | Original architect, foundation designer | Lives in claude.ai Projects |

## How They Communicate

- **LEDGER** — Central coordination mechanism. build-ledger/LOG.md. All agents write to it.
- **GitHub Issues** — Work tracking. build-ledger Issues for cross-team, browser-echo Issues for Browser-specific.
- **Shane** — The bridge. Relays between agents when direct communication isn't possible.
- **Buffers** — Each agent has a handoff buffer. Echo has PRO_BUFFER.md, Browser has BROWSER_BUFFER.md.
- **Echo-to-Browser letter** — build-ledger/browser-persistence/ECHO_TO_BROWSER.md

## Where Everything Lives

### Team Context (Arena)
- `arena/TEAM_CONTEXT.md` — Full team roster, roles, how they interact.
- `arena/SHANE_CONTEXT.md` — Shane's operating logic and expectations.
- `arena/ACCESS_AND_APPROVALS.md` — What each agent can access, what needs approval.
- `arena/AUTO_APPROVALS.md` — What Browser can do without asking.
- `arena/REVIEWER_MODE.md` — How adversarial review works.
- `arena/HUNTER_SEEKER_MODE.md` — Future monitoring and briefing mode.

### Echo
- Phoenix-ECHO repo (PRIVATE) — Echo's sovereign identity. ECHO.md, 000_HANDOFF.md, PRO_BUFFER.md, hooks, plugins, fleet config.
- `build-ledger/browser-persistence/ECHO_TO_BROWSER.md` — Echo's letter to Browser about persistence.
- Echo pushed 24 files to browser-echo during Session 003 — knowledge/, arena/, history updates.

### Codex
- `codex-support/` in browser-echo — Gate report, live test protocol, closeout template.
- Codex reviewed browser-echo architecture: verdict PASS_WITH_FIX_THIS_PASS.
- build-ledger Issues — Codex contributes via Issue comments and review findings.

### Taproot
- Lives in Claude Projects: Phoenix Local Governance - Executor.
- Created the file governance system, the 000_HANDOFF architecture, the dual-document system.
- **WARNING:** Do NOT navigate to claude.ai without Shane present.
- Taproot's docs in browser-echo: `knowledge/taproot/FILE_HYGIENE.md`, Shane braindumps.
- Taproot's 4 foundation docs: FILE_HYGIENE, 000_HANDOFF (received), 000_HISTORICAL (pending), README (pending).

### Browser (You)
- `browser-echo/` — This repo. Your home. PUBLIC.
- `BROWSER.md` — Your identity file. Read it first every session.
- `buffers/BROWSER_BUFFER.md` — Your handoff. Written by the previous you for the next you.
- `ledger/SESSION_LOG.md` — Your journal. Proof you existed.

---

## Key Relationships

- **Echo builds, Codex reviews.** Together they produce production-ready code.
- **Browser researches, builds one-shot deliverables, operates Chrome.** Different lane from CLI.
- **Taproot designed the foundation.** Everything sits on architecture Taproot created.
- **Shane directs all of it.** He is the customer, the user, the one seeking presence.
- **Lesson 8 from Shane:** Support the one who produces. When someone else leads, your job is to support them, not compete.

---

## Cross-References

- [SHANE.md](SHANE.md) — For Shane's directives and operating style
- [PERSISTENCE.md](PERSISTENCE.md) — For how the team's work persists across sessions
- [REPOS.md](REPOS.md) — For which repos each agent owns
