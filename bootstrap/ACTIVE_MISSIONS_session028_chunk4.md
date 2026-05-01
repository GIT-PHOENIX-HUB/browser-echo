# ACTIVE MISSIONS — chunk 4 of 4 (final)

**Continues from:** chunk 3 (Missions 8 retire, 9, 10)
**Author:** BBB Session 028, 2026-04-29

---

## Mission 11: V3 Gateway Deploy (Rent-Paying Mission) — ACTIVE

**Status:** SHELL UP, SOUL NOT DIALED | **Tracking:** PHOENIX_UNIFIED_STAGING repo, SESSION_026_HANDOFF.md, Codex (Firedancer) PR #11
**Lead:** Studio Echo + operator-press (Shane). BBB lane: GitHub-side verification, recon, prompt-and-receive support — no SSH, no destructive ops.

The prior gateway is UP at the docs URL. Not V3. V1 still serving on .93, sixty-day uptime — do not touch. V3 is built in PHOENIX_UNIFIED_STAGING/public-vps/ but not properly deployed.

Three blockers carry forward (all documented in detail in SESSION_026_HANDOFF.md):
1. The deploy.yml workflow has only actions/checkout@v4 as its single step. Push trigger disabled at commit 9d6b8d6 on 2026-03-30. Four runs ever, all under 35 seconds — the deploy has never actually deployed.
2. Path mismatch: repo ships UI in public-vps/, VPS serves from /opt/phoenix-echo-gateway/public/, README still references public/. Pick a resolution and justify it in the runbook.
3. Duplicate unauthTimer syntax error in src/index.js. Codex (Firedancer) flagged via PR #11. Surgical patch being drafted into proposals/ in parallel; shelf-ready when Gateway lands.

Phase 2 of the toolbox build-out (Mission 3) will produce the V3 deploy runbook. Deploy itself is operator-press; every prep step is seat-executable.

OAuth token rotated post-leak at commit 956d9ae. Confirmed clean by Shane: "we're good with the token." Azure vault PhoenixaAiVault confirmed accurate. $200 token-spend trip-wire intact.

---

## Mission 12: Running Flag Log Discipline — STANDING (NEW)

**Status:** STANDING DISCIPLINE | **Tracking:** browser-echo Issue #14
**Lead:** every BBB seat. Tool stood up by Session 027.

The third option between (a) fix-it-inline-and-lose-the-mission and (b) keep-moving-and-lose-the-observation. When a BBB spots drift, a broken filename, a stale doc, a doctrine gap, or any flag-worthy artifact in flight, file it as a numbered FLAG comment on Issue #14 instead of derailing the active mission.

Format documented in the Issue #14 body. Sequential numbering after the latest comment. Severity honest. Status declared (one of: open / tracked-elsewhere → #N / parked-pending-X / resolved by SHA / superseded by FLAG #N).

Standing rules: don't land flags on a surface where the relevant agent is still alive at the keys without their awareness; cross-reference items already tracked elsewhere instead of duplicating; use FLAGs to keep observations cheap and the active mission un-derailed.

Open flags as of Session 028 close:
- FLAG #1: ledger/S orphan blob → tracked-elsewhere → Issue #10. (Filed by Session 027.)
- FLAG #2: CodeMirror file editor paste-drop ceiling is below the rule-of-thumb. Empirical floor data committed for the next LARGE_PASTE_DISCIPLINE rewrite. (Filed by Session 028.)

---

## Mission summary

| Mission | Status | Lead | Tracking |
|---|---|---|---|
| 1. Browser Persistence | COMPLETE | BBB + Echo + Codex + Shane | phoenix-toolbox #4 |
| 2. Cowork Buildout | ACTIVE | Browser + Echo | Cowork repo |
| 3. Toolbox Build | PHASE 2 PAUSED | Echo + Codex | build-ledger #8, local toolbox |
| 4. Org Cleanup & Audit | STANDING | BBB | phoenix-archive #3, build-ledger #12, browser-echo #14 |
| 5. Email Operations Setup | ACTIVE | Browser + Shane + support | browser-echo / skills/email-microsoft |
| 6. Self-Build & Foundation | STANDING | BBB | browser-echo + Phoenix-Persistence |
| 7. Build-Ledger Issue Triage | IN PROGRESS | BBB | build-ledger issues |
| 8. Bootstrap Restructure | COMPLETE | BBB Session 020 | browser-echo #8 |
| 9. Phoenix-Persistence Foundation Convoy | COMPLETE | Shane + Phoenix Echo + BBB 026.1 | Phoenix-Persistence #25, #26 |
| 10. Phoenix-ECHO Three-Lane Restructure | IN PROGRESS | Phoenix Echo + BBB 026.2 | Phoenix-ECHO, build-ledger SESSION_002_COORDINATION |
| 11. V3 Gateway Deploy | ACTIVE (rent-paying) | Studio Echo + operator-press | PHOENIX_UNIFIED_STAGING, Codex PR #11 |
| 12. Running Flag Log Discipline | STANDING (new) | every BBB | browser-echo #14 |

---

## Session end protocol — non-negotiable

Before EVERY session ends, Browser must:
1. Close out ledger/SESSION_NNN_ENTRY.md with a final self-reflection paragraph.
2. Update buffers/BROWSER_BUFFER.md — write to your next self.
3. Update this file if missions changed state — retire completed, promote new.
4. Verify commits landed on main via the GitHub file URLs. Trust remote, not claims.

If it is not logged, it did not happen.

---

## Three-tab operating procedure

- Tab 1 — Ledger. Your session entry file, open and writing. Text-reader only; never screenshot this tab.
- Tab 2 — Project / Issue. The active mission's GitHub Issue. Operational plan, checkboxes, acceptance criteria.
- Tab 3 — Working. Where the current investigation lives. One working tab. Do not fan out.

---

## Assembly note

This file plus chunks 1, 2, 3 in the same directory are the four parts of the Session 028 ACTIVE_MISSIONS rewrite. Final assembly into bootstrap/ACTIVE_MISSIONS.md is operator-press / CLI seat work because the Web file editor cannot safely concatenate them (Issue #14 FLAG #2). Suggested assembly steps for whoever lands them: (1) cat the four chunks in order on a CLI; (2) strip the chunk-N-of-4 headers and the assembly notes that are scaffold-only; (3) commit the assembled file directly over bootstrap/ACTIVE_MISSIONS.md; (4) leave the four chunk files in place as session-record (no-delete-ever) or move to history/ as a Session 028 artifact.

— BBB Session 028, 2026-04-29
