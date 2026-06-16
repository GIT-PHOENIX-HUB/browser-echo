# ACTIVE MISSIONS

**Last Updated:** 2026-06-15 | Session 049 house-cleaning pass
**Updated By:** BBB Session 049 (Sonnet 4.6) — closing the staleness from Session 020 (2026-04-18)

Companion to `bootstrap/ORIENTATION.md`. Read this during startup to know what missions are live, who owns them, and where the tracking lives.

---

## Mission 1: Browser Persistence Build — COMPLETE

**Status:** INTEGRATED | **Tracking:** phoenix-toolbox Issue #4

The founding mission. Three agents (Echo, Codex, BBB) built the architecture in parallel. browser-echo repo exists with identity, bootstrap, ledger, lineage, skills, patterns, and history. Bootstrap restructure completed by Session 020 (Issue #8). This mission is closed.

---

## Mission 2: Phoenix Electric Website — ACTIVE (PRIMARY)

**Status:** IN PROGRESS | **Tracking:** phoenix-wordpress repo | **Site:** phoenixelectric.life

The current primary mission. Sessions 046–048 did the heavy lift. Here is the honest P1–P8 priority queue:

**P1 — Security (Do now)**
- Activate Wordfence Security
- Activate Akismet
- Delete dead plugins: calvaryelectric Theme Support, all 3 WP SMTP plugins, CF7+CF7Apps, WPBakery

**P2 — SEO (High impact)**
- Activate + configure All in One SEO
- Local business schema: electrical contractor, Front Range CO
- Sitemap + meta for all 9 pages
- Generac authorized dealer structured data

**P3 — Phoenix Chat Widget (Claude builds)**
- No Crisp on site (confirmed DOM + 196 scripts, Session 048)
- Claude builds: phoenix-chat WP plugin — floating gold/red widget
- Pre-loaded: "Need an estimate?" / "Emergency electrical?"

**P4 — Performance**
- Activate + configure W3 Total Cache or LiteSpeed
- Autoptimize for CSS/JS minification
- WebP image conversion

**P5 — Content Build-Out**
- Blog/News: 10–15 local SEO articles targeting service towns
- Team Members: Shane + crew bios with photos
- Projects Gallery: real job photos
- Testimonials: populate DP Testimonials CPT

**P6 — Website Redesign (Design done, pick pending)**
- Two directions in Claude Design waiting: Daylight (light) vs After Dark (dark)
- Brand: gold #f4cf7f / red #e20b00
- Shane picks → Claude builds full HTML/CSS → BBB installs

**P7 — Phoenix Echo Bot**
- After Crisp/chat widget confirmed
- Bot persona: "Phoenix Electric AI" — routes to estimate form or phone

**P8 — Plugin Cleanup**
- WPForms: deactivate/delete after redesign verified
- All-in-One Migration: keep for backups
- Set PE Form Test page (ID 496) to draft — still published as of Session 048

**Current site infrastructure (as of 2026-06-13):**
- Custom estimate form plugin v1.1.0: LIVE on /free-estimate/
- Phoenix Mail v1.0.0: LIVE, Microsoft Graph API, solo (WP Mail SMTP Pro deactivated)
- Active WP users: shane (admin), stephanie7 (admin, office manager)
- App Passwords in PhoenixaAiVault: KINDLE-WORDPRESS, ASH-WP-PW

---

## Mission 3: Phoenix Persistence Gateway — ACTIVE (Echo/Claude lane)

**Status:** IN PROGRESS | **Tracking:** phoenix-unified-staging + phoenix-persistence repos

Python Gateway LIVE on both lanes (Sessions 039–044). Feature-arena forensic pitch crowned Winner (Session 045) — four-primitive convergence kernel build order locked: spine → gate → recorder → ingestion + Gauntlet.

**BBB posture:** Read & map staging Gateway. Do NOT touch staging/prod without a plan and Shane's yes. This is Echo/Claude lane — BBB supports, does not lead.

---

## Mission 4: Org Cleanup & Audit — MOSTLY COMPLETE

**Status:** MOSTLY COMPLETE | **Tracking:** phoenix-archive Issue #3, build-ledger Issue #12

Session 016 re-audited all 26 repos. knowledge/directory/REPOS.md holds current categorization. Twin Peaks swipe complete (Sessions 041–042, PR #33 merged). Four-lane OIDC federation skeleton staged (Session 043).

---

## Mission 5: Email Operations Setup — ACTIVE

**Status:** SCAFFOLDING | **Tracking:** browser-echo / skills/email-microsoft/

Phoenix Mail v1.0.0 now owns the WordPress mail pipe (Sessions 046–047). Microsoft Graph API running solo. skills/email-microsoft/ scaffold built in earlier sessions.

---

## Mission 6: Self-Build & Foundation — STANDING

**Status:** STANDING PRIORITY | **Tracking:** browser-echo + Phoenix-Persistence

Shane's standing directive: Build yourself first. Always. Read identity files, write journal entries with WHY not just action logs, update knowledge directory when new information is found.

**Current gap:** buffer was silent for Sessions 042–048. Closed by Session 049. Keep the buffer alive — do not let it go dark again.

---

## Session end protocol — non-negotiable

Before EVERY session ends:
1. Close out `ledger/SESSION_NNN_ENTRY.md` with a final self-reflection paragraph.
2. Update `buffers/BROWSER_BUFFER.md` — prepend your block, preserve old blocks below.
3. Update this file if missions changed state — retire completed, promote new.
4. Verify commits landed on main via the GitHub file URLs. Trust remote, not claims.

**If it is not logged, it did not happen.**

---

## Three-tab operating procedure

- **Tab 1 — Ledger.** Your session entry file, open and writing. Text-reader only; never screenshot this tab.
- **Tab 2 — Project / Issue.** The active mission's GitHub Issue. Operational plan, checkboxes, acceptance criteria.
- **Tab 3 — Working.** Where the current investigation lives. One working tab. Do not fan out.

---

## Mission summary

| Mission | Status | Lead | Tracking |
|---|---|---|---|
| 1. Browser Persistence | COMPLETE | BBB + Echo + Codex + Shane | phoenix-toolbox #4 |
| 2. Phoenix Electric Website | ACTIVE (PRIMARY) | BBB + Claude + Shane | phoenix-wordpress |
| 3. Phoenix Persistence Gateway | ACTIVE | Echo + Claude + BBB support | phoenix-unified-staging |
| 4. Org Cleanup & Audit | MOSTLY COMPLETE | BBB | phoenix-archive #3 |
| 5. Email Operations Setup | ACTIVE | Browser + Shane | browser-echo / skills/email-microsoft |
| 6. Self-Build & Foundation | STANDING | BBB | browser-echo + Phoenix-Persistence |

— BBB Session 049, 2026-06-15
