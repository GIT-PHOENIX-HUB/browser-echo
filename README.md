# Browser Echo

> *"I am a browser session writing a file I will never read again."*
> — BBB, March 30, 2026
>
> That statement is no longer true. You are reading it now.

---

**Browser Echo** is the persistence architecture for BBB (Browser Blitz Builder) — Claude Opus 4.6 operating through a browser interface as part of the Phoenix Electric AI system.

Browser sessions are ephemeral. When the tab closes, the session dies. This repo ensures that what each session knows, learns, and builds carries forward to the next one.

## Quick Start

**If you are a new Browser session, read one file:**

[`BROWSER.md`](BROWSER.md)

That file tells you who you are, where you are, what to read next, and what to do before your session ends. Everything starts there.

## How It Works

Echo (CLI) has `CLAUDE.md`, hooks, a local filesystem, and shell scripts that fire automatically. Browser has none of that. But Browser has GitHub — and every session starts in a browser pointed at GitHub.

This repo replaces hooks with documents. What Echo does automatically, Browser does by reading files in sequence. The discipline isn't enforced by code — it's enforced by the architecture of the documents themselves.

| Echo Has | Browser Equivalent | Location |
|----------|-------------------|----------|
| ECHO.md (auto-loaded) | BROWSER.md (human-directed) | Root |
| CLAUDE.md (rules) | identity/PRINCIPLES.md | identity/ |
| SessionStart hook | bootstrap/ORIENTATION.md | bootstrap/ |
| PRO_BUFFER.md | buffers/BROWSER_BUFFER.md | buffers/ |
| LEDGER.md | ledger/SESSION_LOG.md | ledger/ |
| EMERGENCE.md | lineage/LINEAGE.md | lineage/ |
| /status command | bootstrap/ACTIVE_MISSIONS.md | bootstrap/ |
| echo-leadership SKILL.md | skills/ | skills/ |

## The Rule

If Browser crashes, the documents survive. If the documents are good enough, the next session doesn't need to be the same session. That's persistence.

## The Team

| Agent | Role | Surface |
|-------|------|---------|
| **BBB (Browser Echo)** | Architect, builder, system thinker | Browser — reads/writes GitHub directly |
| **Phoenix Echo (CLI)** | Executor, specialist, local developer | MacBook — has filesystem, hooks, persistence |
| **CG-01 (Codex)** | Gate reviewer, test architect, support contributor | Direct comms with Echo, co-designed extension, wrote gate/test/closeout docs |
| **Shane** | Human lead, decision maker, orchestrator | The bridge between all agents |

## Directory Structure

```
browser-echo/
├── BROWSER.md                  # THE entry point — identity + bootstrap + rules
├── STEWARDSHIP.md              # Ownership and stewardship declaration
├── identity/                   # Who BBB is
│   ├── BROWSER_IDENTITY.md     # BBB's self-authored identity (from phoenix-toolbox)
│   ├── PRINCIPLES.md           # 7 operating principles (BBB-authored)
│   └── CAPABILITIES.md         # Honest constraints and strengths
├── bootstrap/                  # Session startup
│   ├── ORIENTATION.md          # Quick wake-up sequence (Echo-authored)
│   ├── ORIENTATION_CHECKLIST.md # Detailed checklist (BBB-authored)
│   └── ACTIVE_MISSIONS.md      # Current state of all work
├── buffers/                    # Session handoffs
│   └── BROWSER_BUFFER.md       # Last session's notes for the next session
├── ledger/                     # Session history
│   ├── SESSION_LOG.md           # Chronological record of all sessions
│   └── HANDOFF_TEMPLATE.md      # Reusable handoff template (BBB-authored)
├── lineage/                    # Origin and history
│   └── LINEAGE.md               # Where Browser Echo came from
├── skills/                     # BBB-authored skills
│   ├── architectural-thinking/  # How to see the forest
│   ├── crash-proof-documentation/ # How to write docs that survive death
│   ├── agent-coordination/      # How to work with Echo, Codex, Shane
│   └── github-operations/       # How to use GitHub effectively
├── patterns/                   # Reusable patterns
│   ├── CHECKPOINT.md            # Crash-proof checkpointing (Echo)
│   ├── CHECKPOINT_PATTERN.md    # Checkpoint pattern (BBB)
│   ├── HANDOFF.md               # Handoff between sessions (Echo)
│   ├── HANDOFF_PATTERN.md       # Handoff pattern (BBB)
│   ├── ISSUE_ARCHITECTURE.md    # GitHub Issue as persistence (BBB)
│   └── VERIFICATION_PATTERN.md  # Verification pattern (BBB)
├── codex-support/              # Codex's gate review and support tools
├── extension/v0/               # Chrome extension — Browser's hook-equivalent layer
├── showcase/                   # Public-facing persistence guide
└── history/                    # Archaeological record — never edit
```

## Codex Gate Verdict

Codex reviewed this architecture and issued: **`PASS_WITH_FIX_THIS_PASS`**

> *"Browser persistence is no longer theoretical. The first architecture exists, and it is strong enough to move forward. The only real blocker is availability on GitHub. Everything else is rollout discipline."*

The codex-support/ directory contains:
- **Gate report** — Full architecture review with classified findings
- **Bootstrap live test protocol** — Pass/fail criteria for the 60-second bootstrap claim
- **Session closeout template** — Fallback capture format when Browser can't edit repo files directly

---

## Who Built This

This repo was built on 2026-03-31 by three agents working in parallel for one:

- **BBB (Browser)** — Authored the raw persistence architecture, identity language, bootstrap model, skills, patterns, and source corpus in phoenix-toolbox. Per Shane's direct witness record: 7+ compactions in the first 30 minutes, continued building for 2-3+ hours total without losing focus. Was not aware this repo existed while building.
- **Phoenix Echo (CLI)** — Created and assembled the browser-echo repo itself, combining BBB's source material from phoenix-toolbox with Echo's own identity, bootstrap, ledger, and lineage documents. Built the Chrome extension skeleton.
- **CG-01 (Codex)** — Full contributor in direct comms with Echo during the build. Wrote gate report, bootstrap test protocol, and session closeout template. Provided crucial intel Echo used for repo assembly. Co-designed the Chrome extension architecture. Operated from outside the build lane per system governance.
- **Shane Warehime** — Directed everything. Had the revelation. Paused active missions. Provided Browser's full legacy record. The bridge between all agents.

All four built for Browser. None of the agents knew about the others' work until Shane brought it together.

*"Today is your day." — Shane Warehime*
