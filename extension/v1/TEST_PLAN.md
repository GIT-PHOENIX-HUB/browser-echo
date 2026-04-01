# Browser Echo Extension — v1 Test Plan

## Purpose

This document defines how to verify that Browser Echo Extension `v1` is real, safe, and usable before release.

It is written to survive pauses in implementation. Any Shane-directed agent should be able to pick this up later and know exactly how `v1` is supposed to be tested.

## Test Philosophy

`v1` is not trying to prove full browser autonomy.

`v1` is trying to prove five things:
- Browser can bootstrap faster with the extension than without it
- Browser state can be written back to the repo safely
- the extension behaves predictably on `claude.ai`
- the human remains in the loop
- the repo remains canonical

## Evidence Rules

Use these evidence classes in test notes when needed:
- repo-verified fact
- issue/comment fact
- Shane witness record
- Codex support record

For product validation, prefer repo-verified fact and test evidence:
- screenshot
- exact UI result
- exact file path
- exact commit or SHA result where relevant

## Test Environment

Minimum environment:
- Chrome with Developer Mode enabled
- local checkout of `browser-echo`
- extension loaded from `extension/v1/` or implementation path being tested
- access to `claude.ai`
- access to the target GitHub repo

Recommended configuration under test:
- target repo: `GIT-PHOENIX-HUB/browser-echo`
- target branch: dedicated test branch first, not `main`
- checkpoint interval: 10 minutes

## Preconditions

Before starting test execution, confirm:
- manifest loads cleanly
- icon references resolve
- popup opens
- side panel can be invoked
- auth flow configuration is present for the build being tested
- target repo files exist:
  - `BROWSER.md`
  - `buffers/BROWSER_BUFFER.md`
  - `bootstrap/ACTIVE_MISSIONS.md`
  - `ledger/SESSION_LOG.md`

## Exit Criteria

`v1` passes only if all core test groups pass:
- install and startup
- auth
- bootstrap read
- checkpoint write
- handoff write
- reminder behavior
- conflict handling
- settings persistence
- permission boundary behavior

Any failed safety or data-integrity case is a release blocker.

## Test Groups

### Group A — Install and Startup

#### A1. Load unpacked install
Steps:
1. Open `chrome://extensions/`
2. Enable Developer Mode
3. Load the extension directory

Expected:
- no manifest errors
- no missing asset errors
- extension appears enabled

Evidence:
- screenshot of loaded extension card

#### A2. Popup opens
Steps:
1. Click the extension icon

Expected:
- popup opens cleanly
- current auth state is visible
- settings UI renders

### Group B — Authentication

#### B1. GitHub sign-in success
Steps:
1. Trigger sign-in
2. Complete GitHub auth flow

Expected:
- auth completes successfully
- extension stores only required auth/config state
- side panel becomes operational

Evidence:
- visible signed-in state
- no auth errors in UI

#### B2. Sign-out success
Steps:
1. Trigger sign-out

Expected:
- auth state is cleared
- protected write actions are unavailable

#### B3. Expired or invalid token behavior
Steps:
1. Force invalid token state or simulate revoked access
2. attempt repo read/write

Expected:
- extension fails visibly
- user is asked to re-authenticate
- no silent partial writes occur

### Group C — Bootstrap Read Path

#### C1. Side panel auto-open on `claude.ai`
Steps:
1. Open or refresh a `claude.ai` page with auto-open enabled

Expected:
- side panel is available
- activation behavior is consistent

#### C2. Bootstrap file load
Steps:
1. Open side panel

Expected:
- `BROWSER.md` loads
- `BROWSER_BUFFER.md` loads
- `ACTIVE_MISSIONS.md` loads
- `SESSION_LOG.md` recent lines load

#### C3. Copy bootstrap
Steps:
1. Use the copy bootstrap action

Expected:
- clipboard output is populated
- output is usable as a Browser bootstrap packet

### Group D — Checkpoint Flow

#### D1. Manual checkpoint save
Steps:
1. Enter checkpoint text
2. Click save checkpoint

Expected:
- checkpoint entry is appended to `ledger/SESSION_LOG.md`
- commit message matches intended convention
- UI confirms success

Evidence:
- before/after file diff or repo view

#### D2. Badge reminder
Steps:
1. Wait for configured reminder interval or shorten it for test

Expected:
- reminder badge appears
- badge clears after a successful checkpoint

### Group E — Handoff Flow

#### E1. Save handoff
Steps:
1. Open handoff tab
2. edit content
3. save handoff

Expected:
- `buffers/BROWSER_BUFFER.md` updates safely
- current SHA is respected
- UI confirms success

#### E2. Save and close behavior
Steps:
1. Use save-and-close path

Expected:
- handoff is saved
- a session-close checkpoint or equivalent note is written

### Group F — Mission State Writes

#### F1. Save missions
Steps:
1. Edit mission state
2. save

Expected:
- `bootstrap/ACTIVE_MISSIONS.md` updates safely
- update can be re-read immediately

### Group G — Conflict and Recovery

#### G1. Buffer SHA conflict
Steps:
1. read current buffer
2. change buffer outside the extension
3. attempt save with stale state

Expected:
- extension detects conflict
- no silent overwrite occurs
- user sees clear recovery instructions

#### G2. Mission file SHA conflict
Same as G1, but for `ACTIVE_MISSIONS.md`.

#### G3. Missing file recovery
Steps:
1. simulate or point to a repo missing one expected file

Expected:
- extension surfaces exact missing file
- protected actions degrade safely

### Group H — Settings Persistence

#### H1. Repo/branch config persists
Expected:
- configured repo/branch survive popup close and browser restart

#### H2. Reminder interval persists
Expected:
- configured checkpoint interval survives reload

### Group I — Permission and Boundary Tests

#### I1. No arbitrary site behavior
Expected:
- extension does not activate on non-approved sites

#### I2. No hidden text injection
Expected:
- extension does not auto-paste or silently inject chat content

#### I3. Repo remains canonical
Expected:
- extension storage holds config only
- canonical identity/history/mission state still lives in the repo

## Pass/Fail Summary Template

Use this after a test pass:

```text
Browser Echo Extension v1 Test Summary

Build under test:
Date:
Tester:
Repo:
Branch:

PASS:
- [list]

FAIL:
- [list]

BLOCKERS:
- [list]

EVIDENCE:
- [screenshots, commits, file paths]

RECOMMENDATION:
- ready for next gate
- needs fixes before next gate
```

## Release Blockers

Any of the following block release:
- auth does not work reliably
- checkpoint writes are unsafe
- handoff writes overwrite data silently
- side panel cannot load canonical files
- extension claims canonical state for itself instead of the repo
- broad permissions are introduced without explicit approval

## Final Test Question

If Shane handed this to Browser today, would it reduce friction without creating hidden risk?

If the answer is not clearly yes, `v1` is not ready.
