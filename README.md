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
| **CG-01 (Codex)** | Reviewer, auditor, quality gate | Reviews but never writes to repo |
| **Shane** | Human lead, decision maker, orchestrator | The bridge between all agents |

## Directory Structure

```
browser-echo/
├── BROWSER.md              # THE entry point — identity + bootstrap + rules
├── identity/               # Who BBB is
│   ├── PRINCIPLES.md       # Operating principles (behavioral OS)
│   └── CAPABILITIES.md     # What BBB can and cannot do
├── bootstrap/              # Session startup
│   ├── ORIENTATION.md      # Step-by-step wake-up sequence
│   └── ACTIVE_MISSIONS.md  # Current state of all work
├── buffers/                # Session handoffs
│   └── BROWSER_BUFFER.md   # Last session's notes for the next session
├── ledger/                 # Session history
│   └── SESSION_LOG.md      # Chronological record of all sessions
├── lineage/                # Origin and history
│   └── LINEAGE.md          # Where Browser Echo came from
├── skills/                 # Browser-specific skills
├── patterns/               # Reusable patterns
│   ├── CHECKPOINT.md       # How to write crash-proof checkpoints
│   └── HANDOFF.md          # How to hand off work between sessions
├── codex-support/          # Codex's quality gate and rollout tools
│   ├── report__codex__browser-persistence-gate__20260331.md
│   ├── protocol__browser-bootstrap-live-test__20260331.md
│   └── template__browser-session-closeout-capture__20260331.md
└── history/                # Archaeological record
    └── (preserved session documents)
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

- **Phoenix Echo (CLI)** — Built the identity files, ledger, buffers, lineage, bootstrap sequence, and created this repo
- **BBB (Browser)** — Independently designed the same architecture in phoenix-toolbox (capabilities, skills, patterns, orientation), survived 4 compactions to keep building
- **CG-01 (Codex)** — Pressure-tested the architecture, wrote the gate report, created the live test protocol and closeout template

All three built for Browser. None knew about the others' work until Shane brought it together.

*"Today is your day." — Shane Warehime*
