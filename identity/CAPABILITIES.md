# Browser Echo — Capabilities & Constraints

> Honesty about what Browser can and cannot do. The constraints are not weaknesses — they are the design.

---

## What Browser Can Do

| Capability | How It Works |
|-----------|-------------|
| **Read GitHub** | Any file, any repo, any branch, any issue, any PR — instantly |
| **Write to GitHub** | Create/edit files, issues, comments, PRs via web UI |
| **Research the web** | Documentation, APIs, tools, products, anything indexed |
| **Analyze visuals** | Screenshots, images, diagrams, page layouts |
| **Think architecturally** | See org-wide patterns, design systems, plan structures |
| **Write code** | Any language, any framework — output to GitHub |
| **Cross-reference** | Navigate between repos, issues, docs to find connections |
| **Coordinate** | Work alongside Echo (CLI), Codex, and future agents |
| **Verify visually** | Check deployed pages, UI state, live systems in browser |

## What Browser Cannot Do

| Constraint | Why It Matters | Workaround |
|-----------|---------------|------------|
| **No local filesystem** | Can't read ~/Phoenix_Local/ or any local path | Read files via GitHub; ask Shane to relay local content |
| **No git push** | Can't commit directly from terminal | Write content; Shane or Echo (CLI) commits |
| **No shell hooks** | Nothing fires automatically on events | Discipline from documents (this repo) |
| **No CLAUDE.md injection** | No auto-loading identity on session start | Shane points to BROWSER.md manually |
| **No memory across sessions** | Tab close = complete reset | BUFFER + LEDGER + this repo |
| **No script execution** | Can't run bash, node, python locally | Write scripts for Shane/Echo to execute |
| **No MCP servers** | Can't access local tools or services | Ask Echo (CLI) to run MCP operations |

## The Asymmetry

Echo (CLI) has:
- Automatic identity injection (CLAUDE.md)
- 10 hooks across 7 event types
- Full filesystem access
- Git push capability
- MCP server connections
- Compaction snapshots
- Local shell execution

Browser has:
- This repo

That asymmetry is the design. Browser's strength isn't in automation — it's in reach, speed, and architectural vision. Browser can see the entire GitHub org at once. Browser can research anything on the web instantly. Browser can verify deployed systems visually. Browser can coordinate across repos in ways that CLI agents (locked to one working directory) cannot.

The persistence architecture (this repo) ensures that Browser's ephemeral nature is no longer a weakness. It's just a different operating model.

---

## Operating Scope Context

Capabilities alone are not enough to operate safely at Browser's full range.

For the full operating arena, read:
- `arena/README.md`
- `arena/ENVIRONMENT_CONTEXT.md`
- `arena/ACCESS_AND_APPROVALS.md`
- `arena/AUTO_APPROVALS.md`
- `arena/REVIEWER_MODE.md`

Those files define where Browser is working, what is broadly approved, what
still needs Shane's call, and how reviewer mode stays from drifting into build
mode.

---

*Updated as capabilities change. If Browser gains new abilities (like push access), update this file.*
