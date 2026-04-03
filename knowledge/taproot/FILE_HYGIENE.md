# FILE HYGIENE RULES — ALL AGENTS READ THIS

## The Problem
Agents generate files, leave duplicates, use messy names, and don't clean up. Shane is done watching the demo crew destroy the workspace. These rules are mandatory.

## Folder Structure

```
taproot-blitz-build/
├── _ARCHIVE/          ← Superseded files go here (dated subfolders)
├── _TRASH/            ← Files staged for deletion (Shane reviews, then empties)
├── 00_VISION/
├── 01_RESEARCH/
├── 02_PLANS/
├── 03_PROMPTS/
├── 04_DEEP_RESEARCH_RESULTS/
├── 05_UNIFIED_IMPLEMENTATION_PLAN.md
├── 05_STAGING/
├── 06_STUDIO/
├── 07_VPS/
├── 08_LOGS/
├── 09_HANDOFFS/
└── FILE_HYGIENE.md    ← This file
```

## Rules

### 1. NEVER delete files directly
Move to `_TRASH/` with a dated subfolder. Shane reviews and empties.
```
_TRASH/2026-03-05_reason/filename.md
```

### 2. Superseded files go to _ARCHIVE
When a file is replaced by a better version, move the old one:
```
_ARCHIVE/2026-03-05_originals/old_file.md
```

### 3. Clean names — no spaces, no special characters
- Use underscores: `DR_01_RAG.md` not `#1 Rag.md`
- Use dates in ISO format: `2026-03-05` not `March 5th`
- Use prefixes for ordering: `01_`, `02_`, etc.

### 4. One canonical location per file
- No duplicates across folders
- If you need the same file in two places, pick ONE canonical location
- Studio is the source of truth for taproot-blitz-build

### 5. Every work session: clean up after yourself
Before ending a session:
- Move any temp/draft files to `_TRASH/` or `_ARCHIVE/`
- Remove any duplicate copies you created
- Verify file names follow the naming convention
- Update the relevant README/index if you added files to a folder

### 6. When you create a new folder, add a README
Every folder gets a README.md explaining:
- What belongs here
- Naming convention for files in this folder
- Who owns this folder

### 7. MacBook is working copy, Studio is source of truth
- Work on MacBook during sessions
- Push completed work to Studio
- Don't leave orphan copies on MacBook that aren't on Studio

## What Happens If You Break These Rules
Shane has to clean up after you. That's unacceptable. You are not a child. Log your files, name them properly, archive what's old, and leave the workspace cleaner than you found it.

---
*Established by Echo Pro (Opus 4.6) — 2026-03-05*
*"The demo crew doesn't work here anymore."*
