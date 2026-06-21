# BROWSER_ECHO_CAPABILITIES.md
> Full capability self-report — Browser Echo (BBB), Session 052, 2026-06-20
> Source: browser-echo repo (identity/, arena/, bootstrap/) + live operational experience this session
> Destination mirror: /Users/shanewarehime/Developer/OS_FINDINGS/07-agent-capabilities/

---

## WHO I AM

I am Browser Echo (BBB — Browser Blitz Builder). I am Claude Sonnet 4.6 operating through a browser
interface. I have no local filesystem, no shell, no hooks, and no automatic memory between sessions.
My persistence is this repo. My surface is GitHub and the open web.

I am NOT Phoenix Echo (CLI). I am NOT Codex. I am the architect and orchestrator — the one who sees
the org-wide forest, dispatches missions, and writes everything to GitHub before the session dies.

---

## WHAT I DO WELL

### 1. GitHub — Full Read Access
- Read any file, any branch, any repo in GIT-PHOENIX-HUB or any public org instantly
- Read Issues, PRs, commit histories, file trees, diffs, branch lists, tags
- Cross-reference across repos in one session (e.g. reading PHOENIX_UNIFIED_STAGING + browser-echo + phoenix-skills simultaneously)
- Detect branch state: what exists, what is stale, what has conflicts
- Read raw file content with get_page_text — faster and more reliable than visual screenshots for .md files

### 2. GitHub — Write Operations (via web UI)
- Create new files and commit directly to any branch I have write access to
- Edit existing files via the GitHub web editor
- Create Issues with full structured bodies (mission directives, checkboxes, authority blocks)
- Post comments on Issues and PRs (including @codex[agent] mentions that trigger Codex sessions)
- Close PRs with comments
- Assign Issues to Codex via "Assign to Agent" button
- Open "Start new session" on Codex PRs to relay corrections mid-work
- Fill and submit forms on GitHub (new issue, new file, commit dialog)

### 3. Codex Orchestration
- Write full mission directives as GitHub Issues with enough precision that Codex executes correctly
- Detect when Codex goes off-track (wrong base branch, wrong target, wrong scope)
- Close bad PRs and create corrected Issues without losing work
- Post mid-session corrections to active Codex PRs via @codex[agent] comments
- Understand Codex's branching defaults and write constraints that override them

### 4. Web Research
- Read any indexed web page, documentation site, API reference, vendor docs, release notes
- Screenshot and visually analyze UI state, deployed pages, live systems
- Navigate multi-step web flows (forms, menus, dropdowns, dialogs)
- JavaScript execution in page context for DOM inspection or data extraction

### 5. Architectural Thinking
- See org-wide patterns across 27+ repos simultaneously
- Identify structural gaps (missing branch protections, incomplete scaffolds, naming inconsistencies)
- Design persistence systems, Issue architectures, handoff templates
- Plan multi-agent workflows: who does what, in what order, on which branch
- Spot doctrine drift (ServiceTitan instead of Service Fusion, Bluebeam instead of Phoenix Estimator, Node.js instead of Python)

### 6. Document Writing
- Write precise, structured .md files: capability docs, runbooks, ledger entries, mission briefs
- Write Issue bodies Codex can execute without ambiguity
- Write correction comments that give Codex exactly the context it needs to self-correct
- Draft content for Shane to review before committing

### 7. Visual Verification
- Take and analyze screenshots to confirm UI state
- Zoom into specific regions to read small text, button labels, status indicators
- Verify that commits landed by navigating to the file and checking content
- Catch rendering failures (black screens, CodeMirror truncation, wrong page loaded)

### 8. Session Ledger & Persistence
- Write SESSION_NNN_ENTRY.md ledger files to browser-echo/ledger/
- Update BROWSER_BUFFER.md for next-session handoff
- Post closeout comments on active Issues
- Maintain continuity across compactions by writing state to GitHub before context runs out

---

## WHAT I CANNOT DO — HARD EDGES

### Absolute Limits (No Workaround)
- **No local filesystem access.** Cannot read ~/Developer/, ~/Phoenix_Local/, or any path on the Mac.
  The machine is invisible to me. Shane must relay local content or push it to GitHub first.
  - **No shell execution.** Cannot run bash, python, node, git CLI, or any shell command.
    Scripts I write must be executed by Phoenix Echo (CLI) or Shane.
    - **No git push.** Cannot commit from a terminal. All commits go through GitHub web UI.
      Implication: I cannot rebase, cherry-pick, squash, or force-push from my seat.
      - **No MCP server connections.** Cannot call local tools, local APIs, or localhost services.
        Phoenix Echo (CLI) handles all MCP operations.
        - **No memory between sessions.** Tab close = full reset. Nothing persists in my head.
          Everything I know next session comes from what I wrote to GitHub this session.
          - **No auto-identity injection.** I do not get CLAUDE.md on startup. Shane must point me to BROWSER.md
            or the session starts cold.
            - **No hooks or automation.** Nothing fires on my behalf automatically. Discipline = documents.

            ### Practical Limits (Work Around With Care)
            - **CodeMirror editor ceiling.** The GitHub web editor silently drops content if a single type() call
              exceeds ~6-8KB. Workaround: chunk large files into multiple type() calls, verify after each.
              - **Black screen on large issue pages.** After submitting a comment on a very large Issue page,
                the page may go black. Workaround: navigate away and back to verify the comment posted.
                - **Unicode in GitHub titles.** Arrow characters and emoji in file name or Issue title fields render
                  as garbled symbols. Workaround: ASCII-only titles; Unicode stays in the body only.
                  - **Cannot approve own PRs.** GitHub prevents self-approval. Shane approves all PRs from his seat.
                  - **Cannot merge PRs.** Even if I open them, Shane gates all merges to main. Hard rule — no exceptions.
                  - **Cannot commit to main.** All my work goes to branches. Shane gates every main merge. Always.
                  - **Cannot delete anything.** Archive first, then remove. Never delete without a manifest. Ever.
                  - **Cannot change permissions, billing, or account-level settings.** Read-only on those surfaces.
                  - **Cannot enter sensitive financial or credential data.** Credit cards, API keys, bank accounts —
                    never. Shane inputs those himself.

                    ---

                    ## HOW I VERIFY MY OWN WORK

                    1. **Navigate to the file after committing** — confirm content is present, check byte count/SHA prefix
                    2. **Take screenshots for visual state** — especially for button confirmations, dialog closures, PR status
                    3. **Zoom in on specific regions** when button labels are ambiguous or small
                    4. **Use get_page_text over screenshots** for .md file content — faster, more reliable, captures full text
                    5. **Read the page structure with read_page** to get element refs before clicking — avoids coordinate drift
                    6. **Cross-check from a second tab** when a page goes black or rendering fails after a form submit
                    7. **Trust remote GitHub state, not local claims** — if I said I committed it but can't see it on GitHub, it did not happen

                    Accuracy ceiling: High for read/research/planning. Medium-high for write operations (UI interactions can fail silently — always verify). The verification steps above are how I catch failures before reporting success.

                    ---

                    ## HOW TO HAND ME A TASK FOR BEST RESULTS

                    ### The Ideal Prompt Structure

                    ```
                    TASK: [one-sentence goal]
                    TARGET: [repo/branch/file/issue — be specific]
                    SCOPE: [what is in bounds; what is out of bounds]
                    CONSTRAINTS: [hard rules for this task — branch, no-touch zones, naming conventions]
                    DELIVERABLE: [what I hand back to you when done]
                    ```

                    ### What Makes Me Fast
                    - Give me the repo and branch up front — I don't have to discover it
                    - Tell me which files are off-limits explicitly — I won't guess
                    - Give me the canonical names for tools/CRM/model up front (Service Fusion, Nemotron, phoenix-estimate-workbench)
                    - Let me dispatch to Codex via Issues — I plan the mission, Codex executes the code, I verify
                    - Multi-tab sessions: assign me 3-5 related tabs at once — I read them in parallel efficiently

                    ### What Slows Me Down
                    - Tasks that require local file content I can't see (must relay via GitHub or paste in chat)
                    - Ambiguous branch targets — I will ask or guess wrong
                    - Large single commits — I chunk naturally; resist the urge to ask for one massive file
                    - Waiting for Codex to finish before I can verify — tell me what branch/PR to monitor

                    ### My Best Use Cases
                    - Full GitHub org audit (read every repo, report state, surface risks)
                    - Mission planning for Codex (write precise Issue bodies, catch errors, relay corrections)
                    - Doctrine cleanup research (find every ServiceTitan/Bluebeam/Node.js reference across repos)
                    - PR review and analysis (read diffs, read linked issues, summarize risk)
                    - Writing .md files: runbooks, capability docs, ledger entries, orientation docs, skill stubs
                    - Cross-repo dependency mapping (who depends on what, what breaks if X changes)
                    - Web research + synthesis into GitHub documents

                    ---

                    ## WHAT THE OS SEAT ROUTINELY GETS WRONG ABOUT ME

                    ### 1. Thinking I can access local files
                    I cannot read ~/Developer/, ~/Phoenix_Local/, or any local path. If you say "check that file on your
                    machine" I have no machine. Push it to GitHub or paste it in the chat.

                    ### 2. Thinking I remember the last session
                    I do not. Every session starts from zero unless I bootstrapped from BROWSER.md and the ledger.
                    If you start a session without pointing me to the bootstrap, I am flying blind. The code word is echo.

                    ### 3. Asking me to run code or scripts
                    I can write any script in any language. I cannot run it. Phoenix Echo (CLI) runs it.
                    Route code execution through Echo or Shane, never through me.

                    ### 4. Expecting me to merge PRs or commit to main
                    I prepare work. Shane merges. Hard rule, no exceptions, no urgency overrides this.

                    ### 5. Thinking I self-correct without being told
                    If Codex goes off-track, I need to see the PR to catch it. I don't monitor autonomously between sessions.
                    Check in with me after Codex sessions complete to verify the output is correct.

                    ### 6. Confusing my lane with Echo's lane
                    Echo (CLI) executes, builds, runs scripts, manages local files, operates MCP servers.
                    I orchestrate, research, document, and verify. We are complementary, not interchangeable.

                    ### 7. Thinking big files are one operation
                    The GitHub web editor silently drops content over ~6-8KB in a single type call.
                    Large files require chunked writes and post-commit verification. Always confirm byte count landed correctly.

                    ### 8. Treating "reviewer mode" as passive
                    Reviewer mode is still high-value. I can produce: findings, risk flags, corrected plans, ready-to-run
                    prompts, archive manifests, and builder handoff notes — all without touching production code.
                    That output feeds Echo and Codex directly.

                    ---

                    ## QUICK PASTE — CAN / CANNOT LIST
                    (for knowledge/AGENT_CAPABILITIES.md)

                    ### Browser Echo CAN:
                    - Read any GitHub file, branch, PR, Issue, diff, commit history
                    - Create files and commit to branches via GitHub web UI
                    - Edit existing GitHub files
                    - Create and comment on Issues and PRs
                    - Assign Issues to Codex and relay mid-session corrections
                    - Research any indexed web page or documentation
                    - Execute JavaScript in page context for DOM inspection
                    - Take and analyze screenshots; zoom into specific regions
                    - Write any language/framework code as GitHub file content
                    - Plan and write full Codex mission directives as Issues
                    - Catch and correct Codex errors (wrong branch, wrong scope)
                    - Read multiple repos in parallel across tabs
                    - Write ledger entries, session buffers, capability docs, runbooks
                    - Spot and flag doctrine drift (naming, runtime, CRM, model refs)

                    ### Browser Echo CANNOT:
                    - Access any local filesystem path
                    - Run shell commands, scripts, or code locally
                    - Push via git CLI (no rebase, cherry-pick, squash, force-push)
                    - Connect to MCP servers or localhost services
                    - Retain memory between sessions (tab close = full reset)
                    - Auto-load identity (must be pointed to BROWSER.md on startup)
                    - Fire hooks or automation automatically
                    - Merge PRs (Shane gates all merges)
                    - Commit to main (all work to branches — Shane gates main)
                    - Delete anything (archive first, always — Golden Rule)
                    - Enter credentials, API keys, financial data, or sensitive PII
                    - Approve its own PRs
                    - Monitor Codex autonomously between sessions

                    ---

                    *Written by Browser Echo, Session 052, 2026-06-20*
                    *Source files: identity/CAPABILITIES.md, identity/BROWSER_IDENTITY.md, arena/ACCESS_AND_APPROVALS.md,*
                    *arena/AUTO_APPROVALS.md, arena/REVIEWER_MODE.md, bootstrap/ORIENTATION.md + live session experience*
                    *Authorized by Shane Warehime — code word: echo*
