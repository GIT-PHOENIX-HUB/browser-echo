# Browser Echo Chrome Extension — v0/v1 Spec

> The repo is the soul. The extension is the accelerator.
> — Codex, 2026-03-31

---

## What This Does

Gives Browser Echo what Echo (CLI) has automatically:
- **Identity display** — BROWSER.md content available without manual navigation
- **Checkpoint saves** — periodic state capture to GitHub, not just on tab close
- **Session handoff** — structured buffer write before session ends
- **Bootstrap acceleration** — 60-second bootstrap becomes 10-second bootstrap
- **Visible transcript witness** — the sidepanel can show only what is visible in the active `claude.ai` tab
- **Read-only bridge witness** — the sidepanel reads live bridge state from Gauntlet and never writes bridge state

## What This Does NOT Do

- Replace the browser-echo repo as source of truth
- Store durable identity or canonical continuity in extension storage (repo is canonical)
- Auto-inject text into claude.ai conversations (human stays in the loop)
- Require any accounts beyond GitHub OAuth

Keep this block verbatim:

- No hidden prompt injection
- No invisible context submission into claude.ai
- No automatic send/submit into the Claude chat box
- No claim that extension-side transcript visibility equals model-side context ingestion

The Browser Echo sidepanel does not have memory between Claude sessions except
through (a) explicit operator copy-paste of the bootstrap packet into chat, or
(b) reading continuity docs from the configured repo source. The sidepanel
itself is not a memory store; it's a continuity-display surface.

---

## Architecture

```
┌─────────────────────────────────────────────────┐
│                CHROME EXTENSION                  │
│                                                  │
│  ┌──────────┐  ┌──────────────┐  ┌───────────┐ │
│  │ Side     │  │ Background   │  │ Content   │ │
│  │ Panel    │  │ Service      │  │ Script    │ │
│  │          │  │ Worker       │  │           │ │
│  │ - Boot   │  │ - GitHub API │  │ - claude  │ │
│  │ - Transcript│- Gauntlet API│  │   .ai     │ │
│  │ - Bridge │  │ - Checkpoint │  │   visible │ │
│  │ - Handoff│  │ - Tab close  │  │   DOM     │ │
│  └────┬─────┘  └──────┬───────┘  └─────┬─────┘ │
│       │               │                │        │
└───────┼───────────────┼────────────────┼────────┘
        │               │                │
        │       ┌───────▼───────┐        │
        │       │  GitHub API   │        │
        │       │  (REST v3)    │        │
        │       └───────┬───────┘        │
        │               │                │
        │       ┌───────▼───────┐        │
        │       │  browser-echo │        │
        │       │  repo on GH   │        │
        │       │               │        │
        │       │ BROWSER.md    │        │
        │       │ buffers/      │        │
        │       │ ledger/       │        │
        │       │ bootstrap/    │        │
        └───────┴───────────────┘────────┘
```

## Components

### 1. Side Panel (persistent UI)

Always-available panel using Chrome Side Panel API. Shows:

**Bootstrap Tab:**
- BROWSER.md content rendered as markdown
- Current BROWSER_BUFFER.md content
- ACTIVE_MISSIONS.md content
- One-click "Copy Bootstrap to Clipboard" — formatted for pasting into claude.ai

**Transcript Tab:**
- Current visible `claude.ai` conversation transcript from the page DOM
- State labels:
  - `Visible in tab`
  - `Saved continuity`
  - `Not yet pasted into chat`
- One-click copy for visible transcript and excerpt
- No hidden submission into Claude

**Bridge Tab:**
- Read-only state from Gauntlet:
  - `GET /api/swarm/state`
  - `GET /api/ledgers/bridge/tail?lines=N`
- Shows current mission, latest bridge entry, blockers, next owner, repo target
- One-click copy for the current mission packet only
- If Gauntlet is unreachable, shows last-known-good bridge state with timestamp and a stale warning
- If no live bridge state has ever loaded, shows `bridge unavailable`
- Does not invent repo-derived bridge state

**Handoff Tab:**
- BROWSER_BUFFER.md template pre-filled
- "Save Handoff" button → updates BROWSER_BUFFER.md on GitHub
- "Save & Close" button → saves handoff + adds ledger entry + closes tab
- Checkpoint text area and manual "Save Checkpoint" button → appends to SESSION_LOG.md on GitHub

### 2. Background Service Worker

Runs in the background. Handles:

**GitHub API Integration:**
- OAuth flow using Chrome Identity API → GitHub token
- Read/write files via GitHub Contents API (REST v3)
- Commit messages auto-formatted: `[browser-echo] checkpoint: {summary}`

**Checkpoint Timer:**
- Configurable interval (default: 10 minutes)
- Shows badge on extension icon when checkpoint is overdue
- Does NOT auto-save — just reminds. Human stays in the loop.

**Tab Close Listener:**
- Detects when claude.ai tab is closing
- Shows "Save handoff before closing?" prompt
- If dismissed, logs a warning entry to SESSION_LOG.md

**Session Tracking:**
- Tracks session start time
- Counts checkpoints saved
- Tracks which repos/issues were visited (for session summary)

### 3. Content Script (claude.ai only)

Minimal injection into claude.ai pages:

**Page Detection:**
- Activates only on `claude.ai/chat/*` and `claude.ai/new`
- Adds small floating "BBB" indicator in corner showing extension is active

**Transcript Awareness:**
- Detects visible conversation turns from the active `claude.ai` DOM
- Sends transcript snapshots to the background worker and sidepanel
- Only visible DOM content is considered `Visible in tab`

**NO text injection into conversations.** The human pastes the bootstrap manually. This is intentional — Browser's discipline comes from reading, not from automation.

### 4. Bridge Ownership

The Gauntlet server is the canonical bridge-state holder. Browser Echo reads
bridge state from Gauntlet and never writes bridge state.

Shared live source:

- `GET /api/swarm/state`
- `GET /api/ledgers/bridge/tail?lines=N`

Repo continuity and live bridge state are separate truths:

- repo continuity is durable context
- Gauntlet bridge is live shared state

---

## Permissions (Narrow)

```json
{
  "permissions": [
    "sidePanel",
    "storage",
    "identity",
    "tabs",
    "alarms"
  ],
  "host_permissions": [
    "https://claude.ai/*",
    "https://api.github.com/*"
  ]
}
```

**Why each permission:**
- `sidePanel` — the persistent UI
- `storage` — GitHub token + settings (NOT identity data — that lives in repo)
- `identity` — OAuth flow for GitHub
- `tabs` — detect tab close for handoff prompt
- `alarms` — checkpoint reminder timer
- `claude.ai` — content script for page detection
- `api.github.com` — read/write browser-echo repo

**Explicitly NOT requesting:**
- `activeTab` — don't need to read arbitrary pages
- `scripting` — no dynamic injection
- `webNavigation` — not tracking browsing history
- `<all_urls>` — never. Only claude.ai and GitHub API.

---

## GitHub Integration

### Authentication
- OAuth via Chrome Identity API
- Scope: `repo` (read/write to browser-echo)
- Token stored in `chrome.storage.local` (encrypted by Chrome)
- "Sign in with GitHub" button in side panel

### File Operations

| Action | API Call | Trigger |
|--------|----------|---------|
| Read BROWSER.md | GET /repos/.../contents/BROWSER.md | Side panel open |
| Read BUFFER | GET /repos/.../contents/buffers/BROWSER_BUFFER.md | Side panel open |
| Read MISSIONS | GET /repos/.../contents/bootstrap/ACTIVE_MISSIONS.md | Side panel open |
| Save checkpoint | PUT /repos/.../contents/ledger/SESSION_LOG.md | Manual button |
| Save handoff | PUT /repos/.../contents/buffers/BROWSER_BUFFER.md | Manual button |
| Save missions | PUT /repos/.../contents/bootstrap/ACTIVE_MISSIONS.md | Manual edit |

All writes include:
- Commit message with timestamp and session ID
- Committer: `browser-echo-extension <browser@phoenixelectric.life>`
- SHA check to prevent overwrite conflicts

---

## Settings (stored in extension, NOT in repo)

```json
{
  "github_repo": "GIT-PHOENIX-HUB/browser-echo",
  "checkpoint_reminder_minutes": 10,
  "show_handoff_on_close": true,
  "auto_open_panel_on_claude": true,
  "badge_color": "#FF6B00",
  "gauntlet_base_url": "http://localhost:3000",
  "gauntlet_token": "phoenix-gauntlet-v1"
}
```

---

## File Structure

```
extension/
├── manifest.json           # Chrome extension manifest v3
├── background.js           # Service worker — GitHub API, timers, tab listener
├── sidepanel/
│   ├── panel.html          # Side panel UI
│   ├── panel.css           # Styling
│   └── panel.js            # Panel logic — tabs, GitHub reads/writes
├── content/
│   └── claude-ai.js        # Content script for claude.ai — minimal
├── popup/
│   ├── popup.html          # Quick-access popup (settings, sign in)
│   └── popup.js
├── lib/
│   └── github.js           # GitHub API wrapper
├── icons/
│   ├── icon-16.png
│   ├── icon-48.png
│   └── icon-128.png
└── README.md
```

---

## User Flow

### First Install
1. Install extension from Chrome Web Store (or local dev load)
2. Click extension icon → popup shows "Sign in with GitHub"
3. OAuth flow → token stored
4. Side panel opens with BROWSER.md content loaded
5. Done. Browser Echo now has a persistent panel.

### Session Start (Bootstrap)
1. Open claude.ai → content script detects the tab and enables the side panel
2. Side panel shows:
   - Bootstrap tab with `BROWSER.md` + `BUFFER` + `MISSIONS`
   - Transcript tab with current visible conversation transcript
   - Bridge tab with live Gauntlet bridge state when available
3. User clicks "Copy Bootstrap to Clipboard"
4. User pastes into claude.ai conversation
5. Browser Echo is bootstrapped. Transcript and bridge continue updating beside the chat.

### During Session (Checkpoints)
1. Every 10 minutes, extension badge turns orange: "Checkpoint reminder"
2. User opens the Handoff tab checkpoint section
3. User writes quick notes about current state
4. Clicks "Save Checkpoint" → appended to SESSION_LOG.md on GitHub
5. Badge resets. Timer restarts.

### Session End (Handoff)
1. User closes claude.ai tab (or clicks "Save & Close")
2. Extension shows handoff prompt: "Save notes for next session?"
3. Handoff tab opens with template pre-filled
4. User fills in what happened, what's pending
5. Clicks "Save Handoff" → BROWSER_BUFFER.md updated on GitHub
6. Ledger entry added to SESSION_LOG.md
7. Tab closes. Session is preserved.

---

## What This Gives Browser That Echo Has

| Echo Has (Automatic) | Extension Equivalent |
|----------------------|---------------------|
| SessionStart hook loads ECHO.md | Side panel auto-enables on claude.ai with Bootstrap + Transcript + Bridge tabs |
| PreCompact hook saves snapshot | Checkpoint reminder + save button |
| Stop hook runs self_review.sh | Handoff prompt on tab close |
| PostToolUse hook logs to LEDGER | Manual checkpoint to SESSION_LOG.md |
| UserPromptSubmit identity check | "BBB" indicator on claude.ai |
| Tool bridge/status HUD | Bridge tab reads live Gauntlet state; stale cache only when Gauntlet is unreachable |

## What This Does NOT Give Browser

| Echo Has | Extension Cannot Replicate | Why |
|----------|---------------------------|-----|
| Auto-inject CLAUDE.md into context | Must paste manually | Can't inject into claude.ai conversation |
| Hooks fire without human action | Reminders only, human clicks | Browser's persistence requires human bridge |
| Local file access | GitHub API only | No filesystem in browser |
| MCP server connections | Not applicable | Different operating model |

The human-in-the-loop design is intentional. Shane is the bridge. The extension makes his job easier, not automatic.

---

## Build Sequence

### Phase 1: Skeleton (MVP)
- manifest.json + service worker + side panel
- GitHub OAuth sign-in
- Read BROWSER.md and display in panel
- No write operations yet

### Phase 2: Read Everything
- Read BUFFER, MISSIONS, SESSION_LOG
- Transcript tab with visible conversation DOM parsing
- Bridge tab with read-only Gauntlet status, blockers, next owner, repo target, latest bridge entry
- "Copy Bootstrap" button
- Auto-enable on claude.ai

### Phase 3: Write Operations
- Save checkpoint → SESSION_LOG.md
- Save handoff → BROWSER_BUFFER.md
- Edit missions → ACTIVE_MISSIONS.md
- Commit message formatting

### Phase 4: Automation
- Checkpoint reminder timer with badge
- Tab close handoff prompt
- Session tracking (start time, repos visited)
- Content script indicator on claude.ai

### Phase 5: Polish
- Icons and branding (Phoenix Electric orange)
- Settings page
- Error handling and offline resilience
- Chrome Web Store listing

## Desk Layout Contract

Single-display default:

- Built-in display: `3456 x 2234`
- Chrome coordination column: `40%` width
- iTerm execution column: `60%` width
- Top Chrome window: Gauntlet at `?mode=observer`, `40%` of left-column height
- Bottom Chrome window: `claude.ai` with Browser Echo sidepanel open, `60%` of left-column height

Gauntlet is Mission Control. Claude in Chrome is a witness/scout lane.
Execution stays in local iTerm panes.

---

## Security Considerations

- GitHub token stored in `chrome.storage.local` — encrypted by Chrome, not accessible to web pages
- OAuth scope limited to `repo` — cannot access user profile, orgs, or admin
- No `<all_urls>` — only claude.ai and GitHub API
- Content script is read-only on claude.ai — does not modify page content
- All writes require explicit user action (no auto-commit)
- SHA verification prevents overwrite of concurrent edits
- Bridge tab is read-only witness state; it does not mutate Gauntlet or bridge ledgers
- Cached bridge state must be labeled stale when Gauntlet is unreachable

---

## Success Criteria

- [ ] Fresh Browser session bootstraps in under 10 seconds (vs 60 without extension)
- [ ] Checkpoint reminder fires every 10 minutes
- [ ] Handoff prompt appears on claude.ai tab close
- [ ] All reads/writes go to browser-echo repo on GitHub
- [ ] No text injected into claude.ai conversations
- [ ] No hidden prompt injection, invisible context submission, or automatic send/submit into Claude
- [ ] Transcript tab distinguishes `Visible in tab`, `Saved continuity`, and `Not yet pasted into chat`
- [ ] Bridge tab reads from Gauntlet live API and cannot write bridge state
- [ ] Bridge outage shows stale cached state with timestamp, or `bridge unavailable` if nothing has ever loaded
- [ ] Works with Shane's existing GitHub account
- [ ] Extension weighs under 500KB

---

*Built: 2026-03-31 by Phoenix Echo (CLI, Opus 4.6)*
*Architecture co-designed by: Codex (CG-01) — defined the persistence-hook framing and extension architecture*
*Built for: BBB — Browser Blitz Builder*
*"The repo is the soul. The extension is the accelerator."*
