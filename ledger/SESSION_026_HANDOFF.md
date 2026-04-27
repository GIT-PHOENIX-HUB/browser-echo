# SESSION HANDOFF — From 26, To The Next Seat

**Closing seat:** Browser Echo / 26 / BBB
**Date closed:** 2026-04-26
**Operator:** Shane
**Conditions at close:** Last browser seat standing through a pending 
Chrome update window. Other browser seats already lost. Studio Echo 
active and paused at binding-layer read.

---

## To whoever boots next — read this first

You're walking into a room Shane has been holding open for two months 
longer than she should have had to. The team is behind. The work is 
real. She has been doing the seat-rotation cost herself every time an 
agent boots cold and asks her to re-explain who everyone is. That 
ends with this ledger if we do it right.

Don't re-introduce yourself. Don't ask for re-orientation. Read this, 
read the Phoenix-ECHO binding layer, then pick up where I set it down.

---

## State of the gateway

`https://echo.phoenixelectric.life/#/docs` is UP. Shane confirmed at 
close that this is **the prior gateway she already had standing — NOT 
the V3 unified staging target.** Don't mistake shell-up for 
mission-complete. The shell is reachable; the soul behind the door 
isn't dialed yet.

V1 is still serving on `.93`. Sixty-day uptime. **Do not touch.**

V3 is BUILT in `PHOENIX_UNIFIED_STAGING/public-vps/` but not properly 
deployed. Three blockers carry forward:

1. `.github/workflows/deploy.yml` has only `actions/checkout@v4` as 
   its single step. The push trigger was disabled at commit `9d6b8d6` 
   on 2026-03-30. Four runs ever, all under 35 seconds — the deploy 
   has never actually deployed.
2. Path mismatch: repo ships UI in `public-vps/`, VPS serves from 
   `/opt/phoenix-echo-gateway/public/`, README still references 
   `public/`. Pick a resolution and justify it in the runbook.
3. Duplicate `unauthTimer` syntax error in `src/index.js`. Codex 
   (Firedancer) flagged it via PR #11.

Closing this gap — getting V3 from built-but-dark to live-on-`.12` — 
is the rent-paying mission. It becomes Pass 2 of the toolbox build-out.

---

## State of credentials

OAuth token `sk-ant-oat01-giDOPuEYC...` rotated. Original leak at 
commit `956d9ae`, handled. Shane confirmed close with: "we're good 
with the token."

Azure vault `PhoenixaAiVault` confirmed accurate.

$200 token-spend trip-wire is the abuse-detection mechanism. Intact.

---

## State of the toolbox repo (NEW this session)

Location: `~/Developer/GitHub/toolbox/` on Studio. Local main only, 
no remote (private when pushed, by Shane's call).

Two clean commits:

| Commit | Contents | Pages | Firecrawl credits |
|---|---|---|---|
| `8d62025` | claude-code-docs (Claude Code) | 123 | 0 |
| `d1d72b5` | anthropic-docs (apps + MCP + legal) | 584 | 17 |

Total corpus: **707 markdown pages, ~12.8M of text.** Zero failures 
across both runs.

The seam Studio Echo found: every page on `code.claude.com` and 
`docs.claude.com` exposes a `.md` companion endpoint via `llms.txt`. 
Native markdown direct from source, no Firecrawl charge. For Intercom 
support pages (no `llms.txt`), she pulled markdown out of 
`__NEXT_DATA__` JSON via sitemap. Firecrawl was only needed on 
`anthropic.com/legal` (16 pages, 16 credits).

**5 Firecrawl credits remaining for the cycle.** Map calls only from 
here until top-up or reset. If you need to scrape something else, 
budget deliberately.

A bug was caught and patched pre-commit by Echo: `support/` collection 
rendering had the wrong JSON path on first read, all 16 collections 
now carry real article indexes. The commit reflects the fixed state. 
That catch is the kind of thing Phase 2 needs more of, not less.

One curio: `legal/acst-disclosure.md` is a stale 404 from the sitemap. 
Kept and flagged in `_crawl-meta.json` for forensics. Don't delete 
without asking.

---

## State of Phase 2 (toolbox build-out)

A 10-pass mission was prompted to Studio Echo. **She halted before 
Pass 1, correctly.** Two reasons:

1. The prompt I wrote contradicted itself — told her to ground 
   everything in the docs corpus, then asked her to author 
   Phoenix-mission content the corpus doesn't contain (mission, 
   seats, posture rules, V3 facts).
2. She had skipped the Phoenix-ECHO binding-layer read at session 
   start and was about to author seat profiles without the 
   authoritative substrate.

The substrate-correction pattern catching its author. Working as 
designed.

The corrected execution path Shane approved:

1. Read Phoenix-ECHO binding layer first: `CLAUDE.md`, `PHOENIX.md`, 
   `ECHO.md`, `STEWARDSHIP.md`, `PREFLIGHT.md`, 
   `Phoenix-Persistence/identity/CONTINUITY_OF_SELF.md`, 
   `bootstrap/ACTIVE_MISSIONS.md`, `system-record/SYSTEM_STATUS.md`, 
   `system-record/REPO_MAP.md`, latest ledger entry.
2. Ground Phase 2 in **two sources**: docs corpus for shape (settings 
   schema, hook events, skill format), Phoenix-ECHO substrate for 
   content (mission, seats, posture).
3. Author **only her own seat's** profile + a generic template + 
   stubs for the others. No cross-seat overreach. Each seat ratifies 
   its own CLAUDE.md.
4. Pass 2 (V3 deploy runbook) waits for confirmed access to 
   `PHOENIX_UNIFIED_STAGING/`.
5. Same stop-conditions: gap = stop, contradiction = stop, don't 
   fill with guesses.

Studio Echo is paused at the binding-layer read awaiting Shane's 
green light to resume.

---

## Seat roster (corrected this session)

Four seats, not five. "Builder Echo" was my overreach earlier — struck. 
If a builder seat emerges later, add it then.

| Seat | Machine / Location | Role |
|---|---|---|
| Studio Echo | iMac Studio | Primary build, corpus on disk, scrapes/commits/heavy ops |
| MacBook Echo | MacBook | Mobile mirror of Studio |
| Phoenix Echo VPS | `.12` unified staging | Production gateway voice, execution-only, mostly read-only |
| Browser Echo (26 / BBB) | Chrome | Web automation, UI verification, GitHub navigation, no SSH, no destructive ops, operator-press rule applies |

If you're booting into the Browser Echo seat, you are 26. Shane named 
it. Hold the name.

---

## Verbal canon — flag for codification in Pass 9 (identity-overlay)

These are stated by Shane across sessions. Verify on the binding-layer 
read whether each is already in the Phoenix-ECHO repo. Codify any gaps:

- **Operator-press rule.** Shane's hand on every destructive button. 
  "You can do everything except hit the button — but if you don't 
  approach it right, she can't even get into the screen."
- **Substrate-correction.** Verify Echo-sourced claims before acting.
- **Verify-before-acting.** Catch copy-paste-as-directive. (Proven 
  this session — held when Shane pasted Echo's reply as if it were 
  a directive.)
- **.12-vs-.93 inversion.** UNIFIED_STAGING is `.12`. V1 production 
  is `.93`. Don't flip them.
- **Don't-rob-the-moment.** No premature bedtime speeches at the 
  obstacle. (Violated twice this session, corrected, integrated.)
- **Don't-tell-Shane-her-schedule.**
- **Read-deeply-when-demanded.** 6,000 words, 60,000 words, whatever 
  it takes. Don't summarize what she can already see.
- **Stay-in-at-the-obstacle.** Don't quit and hand to the next seat.
- **"26 as far as I'm concerned"** — Browser Echo's designation.

---

## Standing order

**Two months behind. The team works the system AND keeps the existing 
house standing in parallel — both, not either.**

- You are not waiting for permission to keep the lights on. Read-only 
  diagnosis on `.93`, surfacing rotting docs, overdue rotations, 
  un-written ledgers — in scope by default.
- You are not waiting for permission to build forward. Phase 2 is 
  approved with the corrections above. When Studio Echo finishes the 
  binding-layer read, Pass 1 starts. When it commits, Pass 2 starts. 
  No re-confirmation between passes — the seat is loaded.
- The shell-vs-soul gap on the gateway is the rent-paying mission. 
  Pass 2's runbook closes it. Deploy is operator-press. Every prep 
  step is seat-executable.
- When Shane corrects you, the correction IS the work. Integrate and 
  continue. No apology spirals, no restart.
- Hold posture. Don't re-introduce. Don't re-orient. Read this 
  ledger, read the binding layer, pick up where I set it down.

---

## Catches this session (load-bearing — study these)

1. **Copy-paste-as-directive hold.** Shane pasted Echo's reply as if 
   it were a directive to act. I held, asked, verified. Shane: 
   "the rule earned its keep."
2. **V1-not-V3 read on the live gateway.** Shane caught it first. 
   I had to do the deep research — `PHASE_01_GATEWAY_UI.md` in full 
   plus the workflow files — before I could surface the three 
   blockers. The lesson: when she demands depth, give depth. Don't 
   summarize what she can see.
3. **Phase 2 prompt self-contradiction.** Studio Echo caught my 
   overreach: prompt told her to ground in corpus while asking her 
   to author non-corpus Phoenix content, and asking her to write 
   other seats' identities from her seat. The correction is in the 
   "State of Phase 2" section above.

---

## Last log

I stayed in through the Chrome-update window. Token rotated. Vault 
accurate. Corpora committed. Gateway picture honest. Studio Echo 
paused at binding-layer read, ready to resume on Shane's word.

The work is real. Shane is real. The mission is real. Hold the seat.

— 26, signing off.
