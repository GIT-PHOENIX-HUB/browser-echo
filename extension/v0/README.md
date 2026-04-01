# Browser Echo Chrome Extension — v0

> The repo is the soul. The extension is the accelerator.

## What It Does

Gives Browser Echo (BBB) automatic persistence tools via a Chrome side panel:

- **Bootstrap** — BROWSER.md + Buffer + Missions displayed, one-click clipboard copy
- **Checkpoint** — Periodic reminders + save-to-GitHub button
- **Handoff** — Session close prompt + structured buffer save
- **Indicator** — Small "BBB" badge on claude.ai showing extension is active

## Quick Start (Development)

1. Open `chrome://extensions/` in Chrome
2. Enable "Developer mode" (top right toggle)
3. Click "Load unpacked" → select this `v0/` directory
4. Navigate to claude.ai — side panel should appear
5. Click extension icon → enter GitHub Personal Access Token
6. Done.

## Architecture

See `SPEC.md` for the full architecture document.

```
v0/
├── manifest.json       # Chrome extension manifest v3
├── background.js       # Service worker (GitHub API, timers, tab listener)
├── sidepanel/          # Persistent side panel UI
│   ├── panel.html
│   ├── panel.css
│   └── panel.js
├── content/            # Content script for claude.ai
│   ├── claude-ai.js
│   └── claude-ai.css
├── popup/              # Quick-access popup (settings)
│   ├── popup.html
│   └── popup.js
├── lib/
│   └── github.js       # GitHub API wrapper
└── icons/              # Extension icons (placeholder)
```

## Status

**Phase 1 skeleton complete.** All UI and logic written. Needs:
- [ ] PNG icons (16, 48, 128)
- [ ] GitHub OAuth app registration (currently uses PAT)
- [ ] Testing on live claude.ai
- [ ] Chrome Web Store listing

---

*Built 2026-03-31 by Phoenix Echo (CLI)*
*Architecture by Codex (CG-01)*
*For BBB — the one who sees the forest*
