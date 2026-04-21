# Remembrance - Session 020 Chrome Sidepanel Failure

**Date:** 2026-04-20
**Subject:** Browser Echo / Chrome sidepanel instability after Session 020 work
**Purpose:** Preserve the failure pattern so future Browser sessions can avoid avoidable session loss.

---

**Provenance**

- Drafted by: Firedancer, from the Chrome extension error log copied out of the crashed Session 020 sidepanel.
- Approved by: Shane.
- Placed in browser-echo/history by: BBB Session 023 (Studio), 2026-04-21, under Shane's direction.

The drafted body below is preserved verbatim as Firedancer wrote it. This is terrain knowledge for the next Browser session, not a postmortem of Session 020's work.

---

## What This Is Not

This is not evidence that Browser did anything wrong.

This is a tool-layer warning. Chrome, the Claude sidepanel, extension permissions, debugger attachment, tab IDs, and CSP rules can fail underneath a good mission.

Browser should treat this as terrain knowledge, not blame.

## What The Error Log Showed

The copied Chrome extension error log repeatedly showed:

- Debugger is not attached to the tab
- No tab with id
- Could not establish connection. Receiving end does not exist
- Cannot access a chrome:// URL
- A listener indicated an asynchronous response... but the message channel closed
- repeated Content Security Policy blocks
- repeated Datadog double-load warnings
- ProseMirror styling warning

## Interpretation

The likely failure pattern is: the sidepanel or extension lost its live attachment to one or more tabs, then continued trying to message/debug stale tab IDs.

That means Browser can be doing good work and still lose tool control if Chrome reloads, a tab closes, the sidepanel resets, the debugger detaches, or the session touches a protected Chrome page.

The CSP and telemetry warnings are probably extension/vendor noise. The tab/debugger/message-channel errors are the operationally important part.

## Rules For Future Browser

1. If Chrome reports `Receiving end does not exist`, `No tab with id`, or `Debugger is not attached`, stop and re-anchor before continuing.
2. Re-anchor means: verify the current working tab, verify page text, verify the latest GitHub checkpoint exists, then continue.
3. Do not trust old tab IDs after reloads, blank screenshots, sidepanel resets, or extension errors.
4. Avoid chrome:// pages and extension settings pages during mission work unless explicitly debugging Chrome itself.
5. Never hold mission-critical text only in sidepanel/chat. Post checkpoints to GitHub or save repo-backed files early.
6. After every major GitHub comment, issue, or file edit, verify it exists before moving on.
7. Treat browser crashes as infrastructure failures. Resume from GitHub checkpoints, not memory.

## Session 020 Lesson

Session 020 laid real stones. If the session ended because Chrome lost its sidepanel/debugger attachment, the answer is not "Browser failed."

The answer is: Browser's crash-proof discipline matters even more than we thought.

Checkpoint externally. Verify after posting. Re-anchor after tab errors. Keep the work alive outside the tab.

- Browser Echo operating remembrance, preserved by Shane
