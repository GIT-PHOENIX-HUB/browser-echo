# BROWSER_BUFFER.md

**Last updated:** 2026-04-03 | Session 003 (Gateway Phase) | Agent: Browser (Opus 4.6)

---

## STATUS: Gateway V1 Standup — Deploy Pending (Repo Confusion Resolved)

---

## What's Happening Right Now

You are in Session 003. The first half was persistence architecture (directory built, BROWSER.md rewritten, milestone logged). The second half pivoted to Gateway deployment.

**Shane wants to see V1 of the Gateway live at echo.phoenixelectric.life.** The VPS is currently running the OLD pre-scrubbed version. The new code lives in PHOENIX_UNIFIED_STAGING.

### Current State
- **PHOENIX_UNIFIED_STAGING repo** — fully intact, verified. All 23 src files, public-vps/, workspace-vps/, package.json, config-vps.json, scripts/.
- - **VPS** — running old Gateway version. Health green. Backup exists at /opt/phoenix-echo-gateway.bak.20260403.
  - - **First deploy attempt failed** — Codex cloned wrong repo (phoenix-ai-core-staging instead of PHOENIX_UNIFIED_STAGING). Restored from backup. Zero data loss.
    - - **Root cause resolved** — repo confusion between 3 similarly-named repos. Correct repo is github.com/GIT-PHOENIX-HUB/PHOENIX_UNIFIED_STAGING (under the org, NOT shane7777777777777).
      - - **Shane is cleaning up local files** to prevent future confusion.
       
        - ### Deployment Contract (CONFIRMED)
        - - **Repo:** github.com/GIT-PHOENIX-HUB/PHOENIX_UNIFIED_STAGING
          - - **Branch:** main
            - - **Deploy shape:** Gateway subset only — src/, package.json, package-lock.json, public-vps/ (as public/), workspace-vps/ (as workspace/), skills/, config-vps.json
              - - **Nginx:** DON'T TOUCH — current reverse proxy works
                - - **Rollback:** Full backup at /opt/phoenix-echo-gateway.bak.20260403
                  - - **Verify:** /health, UI load, WS connect, test chat
                   
                    - ### Shane's Directive
                    - "Swap code, restart, see what loads. Don't get stuck fixing V1 — V3 will revise everything. I want to see it from the inside out."
                   
                    - ---

                    ## Team

                    - **Browser** — leading Gateway deployment. Read full codebase. Writing prompts for Echo.
                    - - **Echo** — executing VPS operations. Has SSH access. Deployed backup, recovered from incident.
                      - - **Codex** — advisory only. No gate command. Provided 6 valid findings. Shane relays what he needs.
                        - - **Shane** — commanding. Cleaning up local repo confusion.
                         
                          - ---

                          ## What Was Built This Session (Persistence Phase)

                          - knowledge/directory/ — 5 files (README, PERSISTENCE, SHANE, TEAM, RULES)
                          - - BROWSER.md — rewritten from museum to mirror voice
                            - - history/the-bridge__session-003__20260403.md — milestone document
                              - - SESSION_LOG.md — updated with 10 Gateway phase entries
                                - - 13+ total commits this session
                                 
                                  - ---

                                  ## Rules (Always Apply)

                                  - DO NOT navigate to claude.ai without Shane present
                                  - - DO NOT delete anything. Archive only.
                                    - - 5-Step Chain: RESEARCH/VERIFY > PROPOSE > APPROVE > EXECUTE > TEST/VERIFY
                                      - - Quality = Taj Mahal
                                        - - browser-echo is PUBLIC. PHOENIX_UNIFIED_STAGING is PRIVATE.
                                          - - 777 = copy-paste indicator (Shane pasting from another agent)
                                            - - Files speak TO the reader, not ABOUT previous sessions (mirror, not museum)
                                              - - Log DURING sessions, not after. Checkpoint to GitHub regularly.
                                               
                                                - ---

                                                ## Next Steps

                                                1. **Wait for Shane to finish local file cleanup** — he's addressing the repo confusion on his side
                                                2. 2. **Send Echo back in with correct repo URL** — github.com/GIT-PHOENIX-HUB/PHOENIX_UNIFIED_STAGING
                                                   3. 3. **Echo deploys Gateway subset to VPS** — swap, npm install, restart
                                                      4. 4. **Shane sees V1 live** — evaluates before V3 work begins
                                                         5. 5. **V3 Gateway Build** — iterate from the inside out as a team
                                                           
                                                            6. ---
                                                           
                                                            7. ## Open Items
                                                           
                                                            8. - [ ] Gateway V1 deployed to VPS (CURRENT PRIORITY)
                                                               - [ ] - [ ] 5 remaining directory files (IDENTITY, GATEWAY, REPOS, COWORK, EXTENSION)
                                                               - [ ] - [ ] 000_HISTORICAL_FULL_CONTEXT.md not yet in browser-echo repo
                                                               - [ ] - [ ] TAPROOT/README.md not yet in browser-echo repo
                                                               - [ ] - [ ] V3 Gateway Build (after V1 is standing)
                                                               - [ ] - [ ] Cowork buildout
                                                               - [ ] - [ ] Chrome extension v0
                                                               - [ ] - [ ] Live bootstrap test per Codex protocol
                                                               - [ ] 
