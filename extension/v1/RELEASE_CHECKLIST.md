# Browser Echo Extension — v1 Release Checklist

## Purpose

This is the final go/no-go checklist for shipping Browser Echo Extension `v1`.

It is intentionally simple to scan and strict to satisfy. If an item is not true, the release is not ready.

## Canon

- [ ] `browser-echo` repo remains the source of truth
- [ ] extension is described as the accelerator, not the soul
- [ ] README/RUNBOOK/PLAYBOOK are internally consistent

## Product Scope

- [ ] `v1` is still a persistence accelerator
- [ ] `v1` has not drifted into broad browser automation
- [ ] Gauntlet-specific ambitions are documented as future work, not hidden in `v1`

## Install Readiness

- [ ] manifest loads cleanly
- [ ] icon files exist and resolve
- [ ] popup opens
- [ ] side panel opens
- [ ] content script behavior is limited to intended pages

## Authentication

- [ ] GitHub auth flow is implemented and working
- [ ] sign-out path works
- [ ] invalid/expired auth state is handled visibly
- [ ] no hardcoded personal credentials remain

## Repo Contract

- [ ] expected repo files are present
- [ ] extension can read canonical bootstrap/state files
- [ ] extension can write checkpoint state safely
- [ ] extension can write handoff state safely
- [ ] extension can write mission state safely if that feature is enabled

## Safety

- [ ] writes are user-triggered or clearly user-approved
- [ ] SHA conflict handling exists
- [ ] repo conflicts do not silently overwrite state
- [ ] no hidden text injection into chat
- [ ] permissions remain narrow and justified

## UX Quality

- [ ] bootstrap flow is understandable
- [ ] checkpoint flow is understandable
- [ ] handoff flow is understandable
- [ ] reminder behavior is visible but not intrusive
- [ ] current repo/branch/auth state is visible where needed

## Documentation

- [ ] `extension/v1/README.md` is current
- [ ] `extension/v1/RUNBOOK.md` matches implementation reality
- [ ] `extension/v1/PLAYBOOK.md` matches approved scope
- [ ] `extension/v1/TEST_PLAN.md` reflects the build being shipped
- [ ] `extension/v0/README.md` and `SPEC.md` do not contradict the current release position

## Authorship and Framing

- [ ] the canon line is preserved: `The repo is the soul. The extension is the accelerator.`
- [ ] Echo build role is credited accurately
- [ ] Codex design/persistence-hook framing role is credited accurately
- [ ] BBB is described as operator/beneficiary, not repo-aware extension assembler

## Verification

- [ ] manual install test passed
- [ ] auth test passed
- [ ] bootstrap read test passed
- [ ] checkpoint save test passed
- [ ] handoff save test passed
- [ ] conflict/recovery test passed
- [ ] permission boundary test passed

## Release Decision

- [ ] branch diff reviewed
- [ ] no unresolved `BLOCK_NOW` items remain
- [ ] final release notes or handoff notes prepared
- [ ] Shane approves ship decision

## Final Question

Would handing this extension to Browser today make him more durable without making the system less trustworthy?

- [ ] yes

If that box cannot be checked honestly, do not ship.
