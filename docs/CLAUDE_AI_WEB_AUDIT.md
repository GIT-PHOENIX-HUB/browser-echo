# Claude AI Web Platform — Full Audit
> Documented by Browser (Session 002) | 2026-04-01

## PURPOSE
This document records everything Browser found when auditing Shane's Claude AI web platform (claude.ai). It serves as reference for any agent setting up or managing the web Claude environment.

## PLATFORM SURFACES

Claude AI has four surfaces, all sharing the same Pro subscription:

1. **Chat** (claude.ai/new) — Standard conversations, artifact creation, code execution
2. **Projects** (claude.ai/projects) — Persistent workspaces with files, instructions, and memory
3. **Claude Code** (claude.ai/code) — Agentic coding with GitHub repo access, Plan mode, 1M token context, scheduled tasks
4. **Claude in Chrome** (Beta) — Browser extension, allowed on all sites, no blocked sites configured

## SETTINGS SNAPSHOT

**Profile:** Shane Warehime, called "Shane", work type: Operations

**Personal Preferences (Global Instructions):**
Shane is identified as "Founder and CTO, Phoenix Builder Space" — this may need updating to "Phoenix Electric LLC"
Summary Rule: Start with 1-2 sentence Executive Summary, then Technical Explanation, then Copy/Paste Steps, then Verification
Format: Markdown with headings, bullet lists, code blocks. Concise. Exact commands with file paths.
Commands must include verification step.

**Capabilities (all ON):**
- Artifacts, AI-powered artifacts, Inline visualizations
- Code execution and file creation
- Network egress (install packages)
- Tool access mode: Load tools when needed (less compaction)

**Memory:**
- Search and reference past chats: ON
- Generate memory from chat history: OFF
- Import from other AI providers: Available but unused

## SKILLS (14 installed)

| Skill | Description | Last Updated |
|-------|-------------|--------------|
| browser-agent-capabilities | Browser Claude CAN/CANNOT do list | Dec 2025 |
| phoenix-executor-context | Unknown — needs audit | Unknown |
| dictation-cleanup | Unknown | Unknown |
| professional-writing | Unknown | Unknown |
| algorithmic-art | Unknown | Unknown |
| brand-guidelines | Unknown | Unknown |
| canvas-design | Unknown | Unknown |
| doc-coauthoring | Unknown | Unknown |
| internal-comms | Unknown | Unknown |
| mcp-builder | Unknown | Unknown |
| skill-creator | Unknown | Unknown |
| slack-gif-creator | Unknown | Unknown |
| theme-factory | Unknown | Unknown |
| web-artifacts-builder | Unknown | Unknown |

**browser-agent-capabilities detail (read in full):**
- Lists what Browser Claude CAN do (navigate, screenshot, DOM, JavaScript, multi-tab, forms, Claude Code)
- Lists what it CANNOT do (MCP connectors, local files, terminal commands)
- Lists when to use Desktop Claude instead (MCP, local governance, LEDGER, heavy code execution)
- Lists 5 connected repos (STALE — old names: phoenix-ai-core, Phoenix-ai-core-staging, phoenix-ai-staging, mcp-vault, phoenix-builder-space-knowledge)
- Lists strengths (automating web tasks, configuring Claude, research, forms, visual artifacts, multi-tab)

## CONNECTORS

**Connected:**
- GitHub Integration (repos accessible in Chat, Projects, and Claude Code)
- GoDaddy
- Google Drive
- Microsoft Learn
- Notion

**Available but not connected:**
- Gmail
- Google Calendar
- Plaid Developer Tools
- Supabase
- WordPress.com

## PROJECTS (6 active)

1. STEPS TO CHRIST MINISTRIES — 3 months ago
2. Phoenix Local Governance - Executor — 3 months ago
3. Project Phoenix Builder Agents Hub — 3 months ago
4. Employee reviews — 2 months ago
5. Master_Price_Book_Builder — 2 months ago
6. Phoenix Mail Courier — 3 months ago

## CLAUDE CODE

**Model:** Opus 4.6 with 1M token context
**Features:** Plan mode, scheduled tasks, GitHub repo access (read, write, PR, branch, commit)

**GitHub App Access (ONLY these repos):**
- browser-echo (GIT-PHOENIX-HUB)
- build-ledger (GIT-PHOENIX-HUB)
- current (GIT-PHOENIX-HUB)
- phoenix-command-app (GIT-PHOENIX-HUB)
- phoenix-electric-miniapp (GIT-PHOENIX-HUB)
- phoenix-echo-bot (GIT-PHOENIX-HUB)

**MISSING from GitHub App (Shane needs to add):**
- PHOENIX_UNIFIED_STAGING (Gateway V1 — the most critical)
- twin-peaks (master spec)
- phoenix-toolbox (skills/plugins combined hub)
- Phoenix-ECHO (Echo's identity)
- phoenix-archive (golden rule archive)
- Cowork (office management buildout)

**Scheduled Tasks:** None configured yet. Feature is available.

## PHOENIX CODE AGENT — DRAFT PROMPT

A full agent identity prompt was drafted and loaded into a fresh Claude Code session but NOT submitted. It names the agent "Phoenix Code" and includes:
- Multi-agent team context (Echo, Browser, Codex, Shane)
- Connected repos and missing repos
- Full 5-step operating chain
- Logging instructions (build-ledger)
- Team collaboration model
- Built on discipline and respect, NOT fear

**Status: AWAITING SHANE APPROVAL before execution.**

## ACTION ITEMS FOR SHANE

1. **Update GitHub App permissions** — Add PHOENIX_UNIFIED_STAGING, twin-peaks, phoenix-toolbox, Phoenix-ECHO, phoenix-archive, and Cowork to the Claude GitHub App
2. **Review Phoenix Code agent prompt** — It's loaded in the Claude Code tab, ready to send
3. **Consider updating Personal Preferences** — "Phoenix Builder Space" may need updating to "Phoenix Electric LLC"
4. **Audit remaining 13 skills** — Only browser-agent-capabilities was read in detail
5. **Connect Gmail and Google Calendar** — These would enable scheduled task automation for Cowork

## NAVIGATION SHORTCUTS (Browser Reference)

| Action | Path |
|--------|------|
| New chat | claude.ai/new |
| Projects | claude.ai/projects |
| Customize (Skills + Connectors) | claude.ai/customize |
| Skills list | claude.ai/customize/skills |
| Connectors list | claude.ai/customize/connectors |
| Settings | claude.ai/settings/general |
| Capabilities | claude.ai/settings/capabilities |
| Claude Code settings | claude.ai/settings/claude-code |
| Claude in Chrome settings | claude.ai/settings/browser-extension |
| Claude Code (new session) | claude.ai/code |
| Scheduled tasks | claude.ai/code/scheduled |
| Artifacts | claude.ai/artifacts |
| Chat history | claude.ai/recents |
