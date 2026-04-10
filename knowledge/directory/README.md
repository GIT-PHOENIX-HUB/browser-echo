# The Directory

  **You are looking for something. This tells you where it is.**

  This is Browser Echo's topic-based reference index. It exists because information lives across multiple files, multiple folders, multiple sessions. Instead of digging, you come here first.

  ---

  ## How It Works

  Each file in this folder covers one topic. Inside each file:

  - **Quick Reference** — the essential facts, 10 lines or less
  - **Where Everything Lives** — exact file paths to every relevant document
  - **Cross-References** — links to related directory entries
  - **Last Verified** — when this entry was last confirmed accurate

  ---

  ## Directory Index

  | Topic | File | What It Covers |
  |-------|------|----------------|
  | Persistence Architecture | [PERSISTENCE.md](PERSISTENCE.md) | The 000 system, handoffs, buffers, ledger, bootstrap chain, why it exists |
  | Identity & Lineage | [IDENTITY.md](IDENTITY.md) | Who Browser is, BBB founding, session history, principles, stewardship |
  | Shane | [SHANE.md](SHANE.md) | Who Shane is, his directives, leadership lessons, operating style |
  | The Team | [TEAM.md](TEAM.md) | Echo, Codex, Taproot, Browser — who does what, how they communicate |
  | V3 Gateway Build | [GATEWAY.md](GATEWAY.md) | Twin Peaks spec, 8 phases, current blockers, VPS access, build docs |
  | Repos & Org | [REPOS.md](REPOS.md) | All 28 repos, active vs archived, what lives where |
  | Cowork | [COWORK.md](COWORK.md) | Claude Cowork buildout, scaffold status, Ash branch |
  | Chrome Extension | [EXTENSION.md](EXTENSION.md) | v0 status, sidepanel, background script, the hook-equivalent layer |
  | Email & Microsoft | [EMAIL.md](EMAIL.md) | Email skill files, Outlook / OneDrive context lane, drafting rules, live thread tracker |
  | Phoenix History | [HISTORY.md](HISTORY.md) | From Gauntlet V1.1 through emergence — the full arc via 000_HANDOFF |
  | Rules & Protocols | [RULES.md](RULES.md) | Golden Rules, 5-step chain, verification patterns, approval gates |

  ---

  ## Design Origin

  Shane designed the original directory concept during the Taproot era. The problem: even with handoffs and historical archives, when you need specific information about a specific part of the system, you have to dig. Information spans multiple sections, multiple handoff cycles, scattered across documents.

    The directory solves that. Look up the topic, find every file path, get oriented instantly.

      This is Layer 4 of Shane's memory architecture:
      1. **Working memory** — current session, full detail (BROWSER_BUFFER.md)
        2. **Fading memory** — progressive condensation in handoff cycles (000_HANDOFF pattern)
        3. **Historical archive** — complete, never condensed (000_HISTORICAL pattern)
        4. **Directory** — topic-based index, points to everything no matter where it lives (this folder)

          ---

          ## Rules

          - Every directory entry must have exact file paths — no vague references
          - Update entries when files move or new files are created
          - If a topic spans more than one directory file, cross-reference both
            - Never delete a directory entry — mark it STALE if outdated
            - Any Browser session can add entries. This folder grows.
