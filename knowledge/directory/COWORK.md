# Directory: Cowork

Last verified: 2026-04-03 | Session 004
Source: Cowork repo (PRIVATE, read access confirmed), ACTIVE_MISSIONS.md

## Quick Reference

Claude Cowork is Anthropic's desktop agent product. Shane is building two Cowork instances for Phoenix Electric: one for himself (Echo identity, main branch) and one for Stephanie the Office Manager (Ash identity, ash branch).

The buildout is a 9-phase plan covering identity transfer, connectors, plugins, 7 project workspaces, scheduled tasks, computer use, custom skills, testing, and ongoing optimization.

Status: IN PROGRESS. Repo exists, MASTER-PROMPT.md written, ~30+ scaffold files still need content. ASH-IDENTITY.md still needed on ash branch.

## The Two Instances

| Branch | Identity | User | Purpose |
|--------|----------|------|---------|
| main | Echo | Shane (Owner/Operator) | Full AI business operations partner |
| ash | Ash | Stephanie (Office Manager) | Office management AI companion |

## The 9 Buildout Phases

| Phase | Name | Status |
|-------|------|--------|
| 1 | Identity Transfer & Global Instructions | Not started |
| 2 | Connector Setup (Gmail, Calendar, Drive, Slack, GitHub) | Not started |
| 3 | Plugin Installation (Operations, Finance, Marketing, Dev, custom) | Not started |
| 4 | Project Workspaces (7 domains) | Not started |
| 5 | Scheduled Tasks (daily/weekly/monthly automations) | Not started |
| 6 | Computer Use & Browser | Not started |
| 7 | Custom Skills (11 slash commands) | Not started |
| 8 | Testing & Documentation | Not started |
| 9 | Ongoing Optimization | Not started |

## The 7 Project Domains
Website & Digital Presence
2. Google Workspace & Comms
3. Service Operations & CRM
4. Financial & Bookkeeping
5. Team Management
6. Marketing & Growth
7. Daily Operations (Command Center)
Each project gets: PROJECT-INSTRUCTIONS.md, SCHEDULED-TASKS.md, CONTEXT-FILES.md
## Where Everything Lives
### Cowork Repo (PRIVATE)
    11. - `Cowork/README.md` — Full repo map with directory structure
    - - `Cowork/MASTER-PROMPT.md` — The mega-prompt for executing the buildout
    - - `Cowork/identity/ECHO-IDENTITY.md` — Echo's identity definition for Cowork
    - - `Cowork/identity/GLOBAL-INSTRUCTIONS.md` — For Settings > Cowork > Global Instructions
    - - `Cowork/identity/CLI-EXTRACT-COMMANDS.md` — Commands to pull identity from existing CLI
    - - `Cowork/projects/` — 7 project domain folders (scaffolded, content pending)
    - - `Cowork/plugins/PLUGIN-REGISTRY.md` — Plugin index
    - - `Cowork/skills/SKILLS-REGISTRY.md` — Custom skill definitions
    - - `Cowork/scheduled-tasks/MASTER-SCHEDULE.md` — Master schedule view
    - - `Cowork/docs/BUILDOUT-PHASES.md` — Phase-by-phase execution guide

    - ### Browser-Echo References
    - - `bootstrap/ACTIVE_MISSIONS.md` — Mission 2 (Cowork Buildout) status and tracking
    - - `buffers/BROWSER_BUFFER.md` — Open items include Cowork scaffold completion and ASH-IDENTITY.md

    - ### Build Coordination
    - - Cowork repo itself is the tracking location (no build-ledger Issue yet)

    - ## Open Items

    - - ~30+ scaffold files need content across all project domains
    - - ASH-IDENTITY.md needed on ash branch for Stephanie
    - - Echo/Codex deep-dive prompt drafted but not committed
    - - No buildout phases have been executed yet — all scaffolding, no runtime

    - ## Key Context

    - - Cowork repo is PRIVATE. browser-echo is PUBLIC. Don't cross-post private content.
    - - Shane and Stephanie are the two users. Echo and Ash are the two AI identities.
    - - The MASTER-PROMPT.md is designed to be copied and pasted into a new Claude session to execute the full buildout.
    - - 11 custom slash commands planned: /morning-briefing, /email-draft, /estimate-prep, /meeting-prep, /invoice-check, /content-draft, /research, /repo-status, /weekly-report, /team-update, /vendor-lookup

    - ## Cross-References

    - - [TEAM.md](TEAM.md) — For how Echo and Ash relate to the broader agent team
    - - [REPOS.md](REPOS.md) — For where Cowork sits in the org
    - - [SHANE.md](SHANE.md) — For Shane's vision of AI-integrated business operations
