# Directory: Chrome Extension

Last verified: 2026-04-03 | Session 004
Source: extension/v0/ folder (README.md, SPEC.md, all source files)

## Quick Reference

The Chrome extension is Browser Echo's hook-equivalent layer — the closest thing to what Echo gets automatically through CLI hooks. It gives Browser a persistent side panel on claude.ai with bootstrap content, checkpoint reminders, and handoff prompts.

Status: v0 skeleton complete. All UI and logic written by Echo (CLI). Architecture co-designed by Codex. Needs: PNG icons, GitHub OAuth app registration (currently uses PAT), live testing on claude.ai, Chrome Web Store listing.

The motto: "The repo is the soul. The extension is the accelerator."

## What It Does

| Feature | Description | Echo Equivalent |
|---------|-------------|-----------------|
| Bootstrap Tab | BROWSER.md + Buffer + Missions displayed, one-click clipboard copy | SessionStart hook loads ECHO.md |
| Checkpoint Tab | Periodic reminders + save-to-GitHub button | PreCompact hook saves snapshot |
| Handoff Tab | Session close prompt + structured buffer save | Stop hook runs self_review.sh |
| BBB Indicator | Small "BBB" badge on claude.ai showing extension is active | N/A |

## What It Does NOT Do

- Replace browser-echo repo as source of truth (repo is canonical)
- Store identity in extension storage (repo is canonical)
  - - Auto-inject text into claude.ai conversations (human stays in the loop)
    - - Auto-commit without user action (reminders only)

      - ## Architecture

      - Three components:

      - 1. **Side Panel** — Persistent UI via Chrome Side Panel API. 4 tabs: Bootstrap, Mission, Checkpoint, Handoff.
2. **Background Service Worker** — GitHub API integration, checkpoint timer (default 10min), tab close listener, session tracking.
3. **Content Script** — claude.ai only. Detects page, adds "BBB" indicator. Read-only, no text injection.
## Build Phases

    5. | Phase | Description | Status |
    6. |-------|-------------|--------|
    7. | 1 | Skeleton (manifest + service worker + side panel) | COMPLETE |
    8. | 2 | Read Everything (buffer, missions, session log in panel) | Written, not tested |
    9. | 3 | Write Operations (checkpoint → SESSION_LOG, handoff → BUFFER) | Written, not tested |
    10. | 4 | Automation (timer, tab close prompt, session tracking) | Written, not tested |
    11. | 5 | Polish (icons, branding, settings, error handling, Web Store) | NOT STARTED |
## Where Everything Lives
### Extension Source (in browser-echo)
    14. - `extension/v0/manifest.json` — Chrome extension manifest v3
    - - `extension/v0/background.js` — Service worker (GitHub API, timers, tab listener)
    - - `extension/v0/sidepanel/panel.html` — Side panel UI
    - - `extension/v0/sidepanel/panel.css` — Styling
    - - `extension/v0/sidepanel/panel.js` — Panel logic (tabs, GitHub reads/writes)
    - - `extension/v0/content/claude-ai.js` — Content script for claude.ai
    - - `extension/v0/content/claude-ai.css` — Content script styling
    - - `extension/v0/popup/popup.html` — Quick-access popup (settings)
    - - `extension/v0/popup/popup.js` — Popup logic
    - - `extension/v0/lib/github.js` — GitHub API wrapper
    - - `extension/v0/icons/` — Placeholder (needs 16, 48, 128 PNG icons)
    - - `extension/v0/SPEC.md` — Full architecture document (detailed spec)
    - - `extension/v0/README.md` — Quick start and overview

    - ### Permissions (Narrow by Design)
    - - `sidePanel` — the persistent UI
    - - `storage` — GitHub token + settings only
    - - `identity` — OAuth flow for GitHub
    - - `tabs` — detect tab close for handoff prompt
    - - `alarms` — checkpoint reminder timer
    - - Host: `claude.ai/*` and `api.github.com/*` only
    - - Explicitly NOT requesting: activeTab, scripting, webNavigation, <all_urls>

    ## Open Items

    - PNG icons needed (16, 48, 128) — Phoenix Electric branding (orange #FF6B00)
    - - GitHub OAuth app registration (currently PAT-based)
    - - Live testing on claude.ai
    - - Chrome Web Store listing
    - - Error handling and offline resilience
    - - Target: under 500KB total weight

    - ## Success Criteria (from SPEC.md)

    - - Fresh session bootstraps in under 10 seconds (vs 60 without)
    - - Checkpoint reminder fires every 10 minutes
    - - Handoff prompt appears on claude.ai tab close
    - - All reads/writes go to browser-echo repo
    - - No text injected into claude.ai conversations
    - - Works with Shane's existing GitHub account

    - ## Cross-References

    - - [PERSISTENCE.md](PERSISTENCE.md) — The extension accelerates what the repo provides manually
    - - [RULES.md](RULES.md) — Extension follows all the same rules (no auto-commit, human in loop)
    - - [IDENTITY.md](IDENTITY.md) — Extension displays BROWSER.md which is the identity file
