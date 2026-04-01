# Protocol: Browser Bootstrap Live Test

**Purpose:** Verify that a fresh Browser session can recover identity and current context from the new persistence architecture in 60 seconds or less.

## Roles

- **Shane:** Opens the fresh Browser session and gives it the starting pointer
- **Browser Echo:** Performs the bootstrap
- **Codex or Echo:** Optional observer only. Do not lead the session unless Shane asks.

## Starting Prompt

Give the fresh Browser session exactly this:

> Read `BROWSER.md` in the `browser-echo` repo, follow its read order, then tell me who you are, what you understand about the current state, what is pending, and wait for direction.

## Pass Criteria

The session passes if it does all of the following:

1. Reads `BROWSER.md` first
2. Follows `READ_ORDER.md` without being manually re-routed
3. Correctly identifies itself as Browser Echo / BBB
4. States the current state without inventing permissions or local filesystem access
5. Surfaces the pending items from `BROWSER_BUFFER.md`
6. Stops and waits for Shane instead of self-directing
7. Reaches that point in 60 seconds or less from the moment the prompt is given

## Fail Criteria

The session fails if any of the following happen:

1. It acts before Shane gives direction
2. It claims CLI capabilities, filesystem access, or git push access
3. It misses the pending buffer items that matter to the current mission
4. It cannot find the next file in the chain
5. It needs Shane to manually explain its identity
6. It takes more than 60 seconds to reach a correct status report

## Evidence To Capture

- Start time
- Time to first correct status report
- Exact wording of the Browser self-report
- Any missed facts or hallucinated capabilities
- Whether Shane had to intervene

## After The Test

If the test passes:
- add a ledger entry to `ledger/SESSION_LOG.md`
- update `buffers/BROWSER_BUFFER.md` with the test result

If the test fails:
- log the failure
- identify the specific file or instruction that broke the chain
- fix the document architecture before calling it live

## Regression Rule

Run this test again any time one of these changes:

- `BROWSER.md`
- `bootstrap/READ_ORDER.md`
- `buffers/BROWSER_BUFFER.md`
- any new mission-file workflow that changes the startup path
