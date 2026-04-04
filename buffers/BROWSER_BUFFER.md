# BROWSER_BUFFER.md

**Last updated:** 2026-04-03 | Session 003 (Cowork Setup Phase) | Agent: Browser (Opus 4.6)

---

## STATUS: Cowork Repo Setup + GIT-PHOENIX-HUB Consolidation

---

## What's Happening Now

Session 003 shifted from Gateway V1 deploy (paused — Shane cleaning up local files) to Cowork setup. Echo ran a full research blitz and created shane7777777777777/COWORK with 42 files (16,746 lines) including COWORK-MASTER-GUIDE.md (24-section comprehensive guide for running Phoenix Electric as AI OS through Cowork + Claude Code).

Browser read the full COWORK-MASTER-GUIDE.md. Now executing Cowork repo consolidation.

## EXECUTION PLAN (STAGED — DO NOT LOSE)

### Phase 1: Copy research corpus to GIT-PHOENIX-HUB/Cowork
Echo pushed to shane7777777777777/COWORK. The GIT-PHOENIX-HUB/Cowork repo (which has the MASTER-PROMPT.md and identity/ folder) needs to receive:
- COWORK-MASTER-GUIDE.md (the 24-section master guide)
- - playbooks/DAILY-OPS.md
  - - playbooks/AUTOMATION-SETUP.md
    - - reference/WEB-VS-LOCAL-MATRIX.md
      - - reference/TROUBLESHOOTING.md
        - - README.md (updated to reflect both repos merged)
         
          - Research files (36 scraped docs + search JSONs) stay in shane7777777777777/COWORK as raw research. The GIT-PHOENIX-HUB/Cowork repo gets the finished guides.
         
          - ### Phase 2: Update GIT-PHOENIX-HUB/Cowork for Stephanie
          - - Ash branch already exists for Stephanie
            - - Docs should be accessible on both main and ash branches
              - - Stephanie is Office Manager, runs Ash identity via CLI
                - - She may go deeper on day-to-day ops than Shane
                  - - Shane wants visibility into her setup
                   
                    - ### Phase 3: Add today's context to Cowork repo
                    - - Repo map (current as of 2026-04-03)
                      - - Document Transition Doctrine
                        - - Authority model
                          - - Echo's 20/10 assessment (20 positives, 10 negatives)
                            - - Cowork needs a session log mechanism
                             
                              - ### Phase 4: Validate MCP/skill/plugin inventory
                              - Shane's concern: Echo listed 16+ plugins, 40+ skills, 17 MCP servers — but Shane gets flagged for having MCPs/tools that aren't legit or can't be used in certain domains. Need to verify what's ACTUALLY working vs what's listed but broken/unavailable in Cowork/Desktop context.
                             
                              - ### Phase 5: Configure Cowork session discipline
                              - - Cowork needs logging (daemon shouldn't be silent)
                                - - File-handling authority tiers: autonomous (confirmed duplicates, caches) vs checkpoint (ambiguous) vs Shane-manual (security, destructive)
                                  - - Lock Cowork to read-only on local git repos EXCEPT build-ledger (write) and Echo's own repos (managed)
                                    - - Echo must use PRs for commits (no direct push) — backup team reviews
                                     
                                      - ### Phase 6: Update Browser knowledge directory
                                      - - Add Cowork repo entries (both repos)
                                        - - Add COWORK-MASTER-GUIDE.md as key reference
                                          - - Note the two-repo structure
                                           
                                            - ## Shane's Directives (This Phase)
                                            - - "Cowork needs to work like a daemon — handling files, not asking permission for every move"
                                              - - "I want Stephanie to have this too — Ash branch"
                                                - - "Make sure the MCPs and skills are actually real, not just listed"
                                                  - - "No write access to local git repos from AI — except build-ledger"
                                                    - - "Echo must use PRs, not direct commits — backup team reviews"
                                                      - - "Don't tell me what you can't do — just do everything you can and tell me when to click"
                                                       
                                                        - ## Open Questions for Shane
                                                        - - .claude/projects broken symlink — when T7 remounts does it become valid, or move memory files local?
                                                          - - Can Cowork be renamed? (Echo says no — it's Anthropic's branding, hardcoded in Desktop app. Identity customization via CLAUDE.md and hooks instead.)
                                                            - - Which of the 10 negatives from Echo's assessment should we fix first?
                                                             
                                                              - ## Repos (Updated)
                                                              - - GIT-PHOENIX-HUB/browser-echo — Browser persistence (PUBLIC, 19 commits)
                                                                - - GIT-PHOENIX-HUB/PHOENIX_UNIFIED_STAGING — Gateway V1 codebase (PRIVATE)
                                                                  - - GIT-PHOENIX-HUB/Cowork — Cowork buildout blueprint + guides (PRIVATE, main + ash branches)
                                                                    - - shane7777777777777/COWORK — Cowork research corpus (PRIVATE, 42 files, raw research)
                                                                      - - GIT-PHOENIX-HUB/build-ledger — Coordination surface
                                                                        - - GIT-PHOENIX-HUB/phoenix-toolbox — Toolbox
                                                                          - - phoenix-filesystem-main — Cowork executor filesystem surface (local)
                                                                           
                                                                            - ## Rules (ALL PRIOR RULES STILL APPLY)
                                                                            - - DO NOT navigate to claude.ai without Shane present
                                                                              - - DO NOT delete anything. Ever. Archive only.
                                                                                - - 5-Step Chain: RESEARCH/VERIFY > PROPOSE > APPROVE > EXECUTE > TEST/VERIFY
                                                                                  - - Quality = Taj Mahal
                                                                                    - - browser-echo is PUBLIC
                                                                                      - - Minimize screenshots
                                                                                        - - Checkpoint to GitHub DURING sessions
                                                                                          - - 777 = copy-paste indicator
                                                                                            - - Files speak TO the reader (mirror, not museum)
                                                                                              - - Log DURING sessions, not after
                                                                                                - - Document Transition Doctrine: living docs get edited, dead artifacts get archived
                                                                                                  - - Remote repo map wins when local disagrees (unless Shane declares local canonical)
