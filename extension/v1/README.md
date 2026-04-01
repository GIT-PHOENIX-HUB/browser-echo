# Browser Echo Extension — v1

> The repo is the soul. The extension is the accelerator.

This directory is the evergreen build package for the Browser Echo Chrome extension.

It is designed to be usable:
- today
- next month
- after a pause
- after a context reset
- by any Shane-directed agent picking the work back up

## Purpose

`v1` is the first real Browser-native persistence automation layer:
- a Chrome Manifest V3 extension
- a side panel companion for `claude.ai`
- a controlled GitHub-connected write surface for Browser Echo state
- the closest functional equivalent Browser has to a hook layer

It is not a shell-hook system like Echo has. It is Browser's automation surface.

## Canon

- `browser-echo` repo is the source of truth for identity, history, missions, and handoff state.
- `extension/v0/` is the working skeleton and proof of concept.
- `extension/v1/` is the evergreen operating package for the production build.
- Future Gauntlet integration belongs after `v1` proves the persistence/control-panel model.

## Documents

- `RUNBOOK.md`
  - How to build, configure, test, secure, ship, and recover the extension
- `PLAYBOOK.md`
  - Why the extension exists, what `v1` is and is not, execution phases, decision gates, and future evolution
- `TEST_PLAN.md`
  - Manual verification matrix, evidence requirements, and pass/fail criteria for `v1`
- `RELEASE_CHECKLIST.md`
  - Final pre-ship checklist for packaging, safety review, install sanity, and release readiness

## Starting Point

Current baseline lives in `../v0/`:
- `manifest.json`
- `background.js`
- `lib/github.js`
- `sidepanel/`
- `popup/`
- `content/`
- `SPEC.md`

`v0` proves the shape.
`v1` is where that shape becomes durable, testable, and repeatable.

## Future Direction

Gauntlet is the future command layer, not the initial requirement.

`v1` must first prove:
- reliable bootstrap
- reliable checkpointing
- reliable handoff
- safe GitHub auth and writes
- clear human-in-the-loop behavior

Only after that should the extension expand toward deeper automation.
