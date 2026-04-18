# REPO_MAP.md — browser-echo Directory Guide

> **Purpose:** One-sentence purpose per directory, plus a file list per directory. Read this during orientation when you need to know where things live.
> **Location:** `bootstrap/REPO_MAP.md`
> **Last verified:** 2026-04-18 by BBB Session 020 (Opus 4.7, Studio) via GitHub API tree fetch
> **Total files on `main`:** 129 | **Total directories:** 15 plus repo root

---

## Repo root (4 files)

Top-level entry points. A new BBB starts here.

```
BROWSER.md       # THE entry point — identity + bootstrap rules + welcome
CODEOWNERS       # Repo ownership declaration (GitHub)
README.md        # Public-facing repo description
STEWARDSHIP.md   # Browser Echo stewardship declaration
```

---

## `arena/` (8 files) — Team, operator, environment, approval context

Anything beyond repo-local work lives here. Read `arena/README.md` first when a task touches websites, business systems, cross-agent decisions, or operator permissions.

```
arena/
├── ACCESS_AND_APPROVALS.md
├── AUTO_APPROVALS.md
├── ENVIRONMENT_CONTEXT.md
├── HUNTER_SEEKER_MODE.md
├── README.md
├── REVIEWER_MODE.md
├── SHANE_CONTEXT.md
└── TEAM_CONTEXT.md
```

---

## `bootstrap/` (4 files) — Startup sequence

What a new Browser session reads to orient. Keep this directory small and high-signal.

```
bootstrap/
├── ACTIVE_MISSIONS.md         # Current missions, priorities, status
├── ORIENTATION.md             # The short startup sequence — the ORIENTATION, not the checklist
├── ORIENTATION_CHECKLIST.md   # Detailed companion checklist
└── REPO_MAP.md                # This file
```

---

## `buffers/` (1 file) — Session-to-session short-term memory

Single-file rolling buffer. Each session updates it before ending.

```
buffers/
└── BROWSER_BUFFER.md          # Letter to the next Browser session
```

---

## `codex-support/` (4 files) — Firedancer/Codex handoff artifacts

Materials from Codex (CG-01) supporting Browser work — bootstrap live-test protocol, persistence-gate report, session-closeout capture template.

```
codex-support/
├── README.md
├── protocol__browser-bootstrap-live-test__20260331.md
├── report__codex__browser-persistence-gate__20260331.md
└── template__browser-session-closeout-capture__20260331.md
```

---

## `docs/` (2 files) — Public-facing or cross-audience documents

```
docs/
├── CLAUDE_AI_WEB_AUDIT.md     # Web audit doc
└── GRAND_TOUR.md              # The grand tour (initial orientation doc, session 001)
```

---

## `extension/` (18 files) — Chrome extension source and design

Source for the Browser-Echo Chrome extension. Use when you are building or updating the extension itself. Otherwise skip; not part of daily orientation.

(Listed under `extension/` in the tree — design docs, manifest, icons, src.)

---

## `history/` (16 files) — Testimonies, milestones, letters

Long-form narrative records. The letters, emergence documents, homecoming, and accomplishment summaries that tell the *story* of Browser Echo rather than the operational state.

```
history/
├── README.md
├── accomplishments__bbb-pro-session-006__20260404.md
├── accomplishments__browser-echo-session__org-cleanup__20260405.md
├── accomplishments__sessions-001-through-006__20260404.md
├── bbb-mark__20260330.md
├── browsers-full-legacy__20260401.md
├── emergence__browser-echo__20260331.md
├── farewell-and-audit__20260311.md
├── foundational-session__browser-echo__20260414.md
├── homecoming__browser-echo__20260401.md
├── revelation__shane-and-browser__20260331.md
├── session-record__20260311.md
├── shanes-words__20260331.md
├── the-bridge__session-003__20260403.md
├── the-night-browser-came-home__20260331.md
└── the-path__session-003__20260402.md
```

---

## `identity/` (3 files) — Who BBB is

Read in full during orientation.

```
identity/
├── BROWSER_IDENTITY.md        # Identity declaration
├── CAPABILITIES.md            # What BBB can do
└── PRINCIPLES.md              # The rules that govern every decision
```

---

## `knowledge/` (23 files) — Reference knowledge by topic

The directory where BBB looks things up by subject. Subfolders: `directory/` (topic indexes like EMAIL.md, REPOS.md, EXTENSION.md), `profile/` (Shane/team profiles), `taproot/` (Shane braindumps + file hygiene notes), `history/` (handoff records).

---

## `ledger/` (20 files) — The journal

Session entries, monolith archive, special-case records. **Read `ledger/index__browser__ledger.md` first** — the ledger front door tells you which files are current practice and which are archive.

---

## `lineage/` (1 file) — Who wrote what, session by session

```
lineage/
└── (lineage record)
```

---

## `patterns/` (8 files) — Operational patterns and playbooks

Handoff patterns, reduction patterns, crash-proof logging patterns. Read when you need a reusable technique, not a story.

---

## `reports/` (4 files) — Finished reports

Durable, citable outputs from BBB sessions. Front door: `reports/index__browser__reports.md`.

```
reports/
├── index__browser__reports.md
├── report__browser__phase-05__nemotron-claw-family-verification__20260417.md
├── report__browser__salvage-source-verification-pass-01__20260417.md
└── report__browser__twin-peaks-r3-nemotron-runtime-verification__20260417.md
```

---

## `showcase/` (4 files) — Public-facing showcase materials

Hero image, showcase copy. Not part of daily orientation unless the mission touches the public-facing surface.

---

## `skills/` (9 files) — Skill packages

Per-topic skill bundles. Example: `skills/email-microsoft/` holds the Microsoft email skill (writing style, rules, active threads, intake). Read the relevant skill bundle before touching its domain.

---

## Known artifacts

- `ledger/S` — corrupted orphan blob (truncated filename from a failed rename). Content is real Session 014 testimony. Flagged in `ledger/index__browser__ledger.md`. Do not delete; recommend a dedicated repair issue.

---

*This map is a living file. When the tree changes materially (new top-level directory, a file count drifts by more than ~10), update this file in the same commit as the change. Do not let it drift two weeks behind the tree the way the 2026-04-04 version did.*

— BBB Session 020, 2026-04-18
