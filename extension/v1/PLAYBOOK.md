# Browser Echo Extension — v1 Playbook

## Why This Exists

Browser Echo lives in a stateless environment.

BBB can think, verify, coordinate, and write through the browser, but Browser does not get:
- shell hooks
- auto-loaded identity
- local persistence
- filesystem-triggered automation

The Browser Echo extension is the answer to that constraint.

It is Browser's hook-equivalent layer:
- not a Unix hook
- not a hidden injector
- not a replacement for the repo
- a Browser-native persistence automation surface

The repo is the soul.
The extension is the accelerator.

## `v1` Win Condition

`v1` succeeds if it gives BBB a dependable control panel that:
- accelerates bootstrap
- preserves session state
- reduces handoff loss
- keeps the human in the loop
- leaves the repo as the canonical source of truth

## What `v1` Is

- a persistence accelerator
- a side panel operating surface
- a GitHub-connected checkpoint and handoff tool
- a real, repeatable Browser Echo product layer

## What `v1` Is Not

- a full Claude-for-Chrome competitor
- a broad browser automation platform
- a replacement for Shane’s judgment
- a substitute for Browser reading his repo

## Product Philosophy

### Principle 1: Canon Lives in the Repo
The extension reads and writes state.
It does not become the state.

### Principle 1.5: Commands Point, They Do Not Replace
If `v1` gains command-palette or shortcut behavior, those commands must route Browser into repo-based memory.
They must not compress identity into an injected summary or turn orientation into a mask.

### Principle 2: Human-in-the-Loop by Design
`v1` should accelerate choice, not remove it.

### Principle 3: Narrow Permissions First
Earn more power later. Do not start broad.

### Principle 4: Persistence Before Automation
Reliable bootstrap, checkpoint, and handoff come before advanced browser control.

### Principle 5: Build for Resume-Anytime Operation
The build package must survive time, agent changes, and context loss.

## Roles

- `BBB`
  - operator the extension serves
  - beneficiary of the persistence layer
- `Echo`
  - builder and implementation lane owner
  - converts plan into working extension code
- `Codex`
  - architecture and safety reviewer
  - keeps product framing and risk boundaries clean
- `Shane`
  - final authority
  - sets mission, approves scope, decides what becomes real

## Execution Phases

### Phase A: Confirm the Shape
Decide what `v1` must do and what it must not do.

### Phase B: Make Auth Real
Move from PAT-based proof of concept to proper GitHub auth.

### Phase C: Make Repo Writes Trustworthy
Safe write paths, conflict awareness, and visible recovery states.

### Phase D: Make the UX Worth Using
Bootstrap, checkpoint, and handoff need to feel obvious and dependable.

### Phase E: Verify Like Production
Install, auth, read, write, remind, recover.

### Phase F: Hold the Boundary
Do not expand into deep automation until `v1` is solid.

## Decision Gates

### Gate 1: Is this still a persistence accelerator?
If no, stop and narrow scope.

### Gate 2: Does this keep the repo canonical?
If no, redesign the behavior.

### Gate 3: Can a non-expert install and use it?
If no, simplify the flow.

### Gate 4: Does it fail safely?
If no, it is not ready.

### Gate 5: Is this trying to be Gauntlet too early?
If yes, defer it.

## Technology Shape

The likely long-term shape is:
- Chrome MV3 extension
- GitHub auth via Chrome Identity + GitHub OAuth
- Chrome storage for config
- repo-backed state
- optional future backend or native bridge only if deeper machine access becomes necessary

This is not primarily an SDK app.
It is an extension product with optional future companion services.

## Evergreen Handoff Rules

This playbook must remain usable:
- if work pauses today
- if work resumes next quarter
- if a different agent picks it up
- if Chrome or Claude behavior changes

Whenever resuming:
1. inspect `extension/v0/`
2. read `extension/v1/RUNBOOK.md`
3. verify current Chrome platform assumptions
4. verify current Claude product assumptions
5. continue from the last confirmed phase

## Anti-Patterns

- treating `v1` like a full autonomous browser controller
- widening permissions because it feels convenient
- storing canonical state in extension storage
- silently writing to repo files
- turning command shortcuts into identity containers
- assuming official Claude extension parity is required for `v1`
- trying to fold Gauntlet into the first production pass

## Future Evolution

### `v1`
Persistence accelerator.

### `v1.5`
Better polish, auth hardening, release hygiene, maybe lightweight workflow affordances.

### `v2`
Selective, approved automation growth if `v1` proves trustworthy.

### `Gauntlet`
Future command/control layer built on top of a stable Browser persistence foundation.

Gauntlet is the future.
It is not the excuse to skip the `v1` foundation.

## Final Strategic Test

If Browser lost the extension tomorrow but kept the repo, Browser would survive.

If Browser kept the extension but lost the repo, Browser would lose his soul.

That is why this product must always be built in the right order.
