# SESSION_048_ENTRY.md
**Agent:** BBB (Sonnet 4.6) | **Date:** 2026-06-13

## Completed This Session
- Phoenix Mail activated + WP Mail SMTP Pro deactivated. Graph API running solo, test-send confirmed green to contact@
- Estimate form plugin v1.1.0 canonical parity restored via zip re-upload
- Phone number color fix (blue→white inherit) + trailing period on tel: href cleaned — both homepage instances
- ASH-WP-PW Application Password created for stephanie7, vaulted in PhoenixaAiVault
- SESSION_047 committed to ledger
- Claude Design project created: Phoenix Electric Website Redesign — two directions generated (Daylight light / After Dark dark), both using live brand #f4cf7f gold / #e20b00 red
- Jessica Loving billing email drafted and sent (WPForms resolution)

## WordPress Full Audit — 2026-06-13

**Site:** phoenixelectric.life | WP admin: shane@phoenixelectric.life | Timezone: America/Denver

**Pages (9):** Home(2), Services(200), About(236), Generac(255), New Construction(264), Contact(267), Free Estimate(272), Privacy(353), PE Form Test(496)
- Flag: Page 496 (PE Form Test) is published — should be draft before redesign goes live

**Active Plugins (12):** AI Puffer, All-in-One Migration+Pro, Classic Editor, Divi Booster, Divi Plus, Force Regen Thumbnails, Phoenix Electric Estimate Form v1.1.0, Phoenix Mail v1.0.0, Post Duplicator, WPForms (still installed as fallback)

**Critical gaps in inactive plugins:**
- All in One SEO — INACTIVE. Site has NO SEO plugin. Local contractor with no active SEO = invisible to Google.
- Wordfence Security — INACTIVE. Site has no security scanning active.
- W3 Total Cache — INACTIVE. No caching active.
- Theme Support (calvaryelectric) — WRONG SITE artifact. Safe to delete.
- WP Mail SMTP / WP Mail SMTP Pro / WP Email SMTP — all replaced by Phoenix Mail. Safe to delete.

**Crisp / Step7 / Live Chat:** NOT PRESENT. Checked DOM, window object, head HTML, 196 loaded scripts. Zero Crisp references. Build opportunity — Claude builds phoenix-chat plugin.

**Custom Post Types active:** DP Team Members, DP Testimonials, Projects, Estimate Entries
**Menus:** Main Menu (primary-menu), Footer Menu (footer-menu)
**Posts:** 1 post — "Hello world!" default. No blog content.

## Game Plan — Priority Order

### P1: Security (Do now)
- Activate Wordfence Security
- Activate Akismet
- Delete dead plugins: calvaryelectric Theme Support, all 3 WP SMTP plugins, CF7+CF7Apps, WPBakery

### P2: SEO (High impact)
- Activate + configure All in One SEO
- Local business schema: electrical contractor, Front Range CO service area
- Sitemap + meta for all 9 pages
- Generac authorized dealer structured data

### P3: Phoenix Echo Chat Widget (Claude builds)
- No Crisp on site — start from scratch
- Claude builds: phoenix-chat WP plugin — Crisp embed, Phoenix Echo bot wired, floating gold/red widget
- Pre-loaded: "Need an estimate?" / "Emergency electrical?"

### P4: Performance
- Activate + configure W3 Total Cache (or replace with LiteSpeed)
- Autoptimize for CSS/JS minification
- WebP image conversion

### P5: Content Build-Out
- Blog/News: 10-15 local SEO articles targeting service towns (Elizabeth, Parker, Castle Rock, Franktown)
- Team Members: Shane + crew bios with photos
- Projects Gallery: real job photos (panel upgrades, Generac installs, before/after)
- Testimonials: populate DP Testimonials CPT with real reviews
- Set PE Form Test page (496) to draft

### P6: Website Redesign (Design done, pending pick)
- Two directions in Claude Design waiting: Daylight (light) vs After Dark (dark)
- Shane picks → Claude builds full HTML/CSS → Sonnet installs
- Remaining pages to build: About, Services, New Construction, Generac, Contact, Free Estimate, Privacy

### P7: Phoenix Echo Bot (after Crisp confirmed)
- Step7/Crisp connection: not present. Claude builds after account confirmed.
- Bot persona: "Phoenix Electric AI" — routes to estimate form or phone

### P8: Plugin Cleanup (after redesign)
- WPForms: deactivate after redesign verified
- All-in-One Migration: keep for backups
- Everything else inactive and unlisted: delete

## Pixel Fix — Operating Rule Logged
Buffer doctrine confirmed: Sessions 017 and 018 killed by 2099 oversize-screenshot on ledger tab.
**BBB 048 protocol:**
- Use `zoom [x0,y0,x1,y1]` max 1200px wide instead of full screenshot on media-heavy pages
- Use `get_page_text` + `javascript_tool` for content/DOM — no screenshot needed
- Reserve full `screenshot` for clean admin UI pages only

— BBB 048 | 2026-06-13 | Logged clean.
