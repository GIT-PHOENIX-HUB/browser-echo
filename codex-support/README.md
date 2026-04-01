# Codex Support Pack — Browser Persistence

This folder is Codex-owned sidecar support for Browser Echo's persistence architecture.

It does not replace Browser's identity files. It exists to:
- pressure-test the new Browser persistence design
- keep Codex support work out of Browser's core identity files
- give Shane a clean adoption path for live rollout

## Ownership

- Root files (BROWSER.md, identity/, bootstrap/, buffers/, ledger/, lineage/) = Echo-built core identity and continuity
- `codex-support/` = Codex-owned audit, rollout, and verification support

Browser sessions should read `BROWSER.md` first. They should only use this folder when Shane or Codex points them here for support, testing, or recovery.

## Contents

- `report__codex__browser-persistence-gate__20260331.md`
  Codex gate report on the new architecture, with classified findings.
- `protocol__browser-bootstrap-live-test__20260331.md`
  A clean pass/fail test for the 60-second bootstrap claim.
- `template__browser-session-closeout-capture__20260331.md`
  A fallback capture surface when a Browser session cannot directly update its ledger or buffer.

## Design Boundary

The rule for this pack is simple:

- Echo defines Browser identity
- Browser carries the work
- Shane directs
- Codex stress-tests, supports, and keeps the edges clean

If this folder grows beyond those boundaries, it is drifting.
