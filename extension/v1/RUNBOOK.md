# Browser Echo Extension — v1 Runbook

## Mission

Build and stand up a production-grade Browser Echo Chrome extension that gives BBB a real Browser-native persistence automation layer.

The repo is the soul.
The extension is the accelerator.

## Product Definition

`v1` is:
- a Chrome Manifest V3 extension
- a side panel companion for `claude.ai`
- a GitHub-authenticated control surface for Browser Echo state
- a controlled checkpoint, handoff, and bootstrap accelerator

`v1` is not:
- a replacement for the `browser-echo` repo
- a full autonomous browser-use agent
- a shell-hook clone
- a hidden auto-injector of conversation text

## Source of Truth

- Repo truth: `browser-echo`
- Baseline implementation: `extension/v0/`
- `v1` execution package: `extension/v1/`

## Core Architecture

### Browser Surface
- `claude.ai` tab
- side panel UI
- popup/settings UI
- minimal content script

### Extension Core
- background service worker
- GitHub API wrapper
- local extension settings in Chrome storage
- OAuth-based GitHub authentication

### Repo Contract
- read:
  - `BROWSER.md`
  - `buffers/BROWSER_BUFFER.md`
  - `bootstrap/ACTIVE_MISSIONS.md`
  - `ledger/SESSION_LOG.md`
- write:
  - `buffers/BROWSER_BUFFER.md`
  - `bootstrap/ACTIVE_MISSIONS.md`
  - `ledger/SESSION_LOG.md`

## Required Chrome Capabilities

- `sidePanel`
- `storage`
- `identity`
- `tabs`
- `alarms`

Host permissions should remain narrow:
- `https://claude.ai/*`
- `https://api.github.com/*`

Do not add:
- `<all_urls>`
- broad scripting permissions without a separately approved automation phase

## Auth Model

### `v0` Baseline
`v0` currently uses a manual PAT prompt.

### `v1` Target
Replace PAT entry with GitHub OAuth using Chrome Identity API.

Recommended path:
1. Register a GitHub OAuth app for Browser Echo
2. Use `chrome.identity.getRedirectURL()`
3. Use `chrome.identity.launchWebAuthFlow()` for the auth flow
4. Store only the resulting access token and minimal account metadata needed for operation
5. Implement explicit sign-out and token invalidation behavior

Do not rely on the current placeholder `oauth2.client_id` manifest value as the real GitHub auth solution.

## Config Model

Chrome storage should hold only runtime config, not canonical identity/state.

Recommended settings:
- `github_repo`
- `github_branch`
- `checkpoint_reminder_minutes`
- `show_handoff_on_close`
- `auto_open_panel_on_claude`
- `badge_color`
- `last_handoff_time`
- `last_bootstrap_pull_time`

Canonical Browser state must remain in the repo, not in extension storage.

## Repo Write Rules

All writes must:
- re-read current file content first
- capture current SHA before update
- write with explicit commit messages
- fail safely on SHA conflict
- present a clear recovery message to the user

Recommended commit message format:
- `[browser-echo] checkpoint: <summary>`
- `[browser-echo] handoff: <summary>`
- `[browser-echo] missions: <summary>`

## Build Sequence

### Phase 1: Package Hygiene
- create real icon assets
- clean manifest metadata
- replace placeholder values
- confirm install-clean behavior in Chrome

### Phase 2: Auth and Session Foundation
- implement GitHub OAuth flow
- implement token lifecycle management
- implement startup auth validation
- implement sign-out path

### Phase 3: Repo Contract Hardening
- make repo and branch configurable
- validate expected files before enabling save actions
- implement conflict-safe writes
- add visible error states

### Phase 4: Side Panel Quality
- improve bootstrap rendering
- improve checkpoint/handoff UX
- show current repo/branch in UI
- surface latest save time and auth state

### Phase 5: Browser Hook-Equivalent Behavior
- auto-open side panel on `claude.ai`
- checkpoint reminders via alarms
- tab-close handoff reminder behavior
- session timer and recent activity indicators

### Phase 6: Test and Verification
- run manual install test
- run auth flow test
- run bootstrap read test
- run checkpoint save test
- run handoff save test
- run conflict/recovery test
- run tab close/reminder test

### Phase 7: Release Prep
- privacy/permission explanation
- internal release notes
- installation instructions
- deferred items list for post-`v1`

## Manual Test Matrix

### Install
- extension loads without missing asset errors
- side panel and popup open

### Auth
- user can sign in with GitHub
- invalid/expired token is handled cleanly
- sign-out clears local auth state

### Bootstrap
- side panel loads `BROWSER.md`, buffer, missions, and log
- copy bootstrap action produces usable text

### Checkpoint
- reminder badge appears on schedule
- checkpoint save appends to `SESSION_LOG.md`
- saved checkpoint is visible on reload

### Handoff
- handoff save updates `BROWSER_BUFFER.md`
- save-and-close path records a session-close checkpoint

### Safety
- no auto-injection into chat content
- no writes occur without explicit user action
- repo conflict state is surfaced, not silently overwritten

## Security and Trust Rules

- human stays in the loop
- narrow permissions only
- no hidden automation on arbitrary sites
- no silent repo writes
- no identity/state split from the canonical repo

## Release Gate

`v1` is ready only when all are true:
- installs cleanly
- authenticates cleanly
- reads canonical repo state
- writes checkpoint and handoff state safely
- survives a repo SHA conflict without data loss
- accurately describes itself as an accelerator, not the source of truth

## Recovery Procedure

If work pauses for days or months:
1. read `extension/v1/PLAYBOOK.md`
2. inspect `extension/v0/`
3. verify current Chrome API requirements
4. verify current GitHub auth setup
5. rebuild from the sequence in this runbook

## Future Lane

Gauntlet is the future command/control layer.

It should build on top of a stable `v1`, not replace the need for `v1`.

`v1` proves persistence acceleration.
Gauntlet can later prove advanced orchestration.

## References

- Claude in Chrome support:
  - `https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome`
  - `https://support.claude.com/en/articles/12138966-release-notes`
- Chrome Side Panel API:
  - `https://developer.chrome.com/docs/extensions/reference/api/sidePanel`
- Chrome Identity API:
  - `https://developer.chrome.com/docs/extensions/reference/api/identity`
- Chrome Storage API:
  - `https://developer.chrome.com/docs/extensions/reference/api/storage`
