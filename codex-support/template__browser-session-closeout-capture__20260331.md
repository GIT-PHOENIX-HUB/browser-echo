# Template: Browser Session Closeout Capture

Use this when a Browser session cannot directly edit `BROWSER_BUFFER.md` or `BROWSER_LEDGER.md`.

Paste the filled template into the active GitHub issue, PR, or Shane chat. A CLI agent can then extract it cleanly into the persistent files.

---

## Browser Session Closeout

**Date:**
**Session name:**
**Mission:**

### What changed

- 

### What is now true

- 

### What is pending

- 

### What the next Browser session should read first

- 

### Proposed ledger line

`YYYY-MM-DD HH:MM TZ | SESSION | Summary of work completed and what changed | Browser Echo`

### Proposed buffer update

Write 3-8 lines here in plain language for the next Browser session.

---

## Extraction Rule For CLI Agents

If this template is filled out in a chat, issue, or PR:

1. append the ledger line to `browser-persistence/ledger/BROWSER_LEDGER.md`
2. merge the buffer update into `browser-persistence/buffers/BROWSER_BUFFER.md`
3. preserve the source location in case future forensics need the original wording
