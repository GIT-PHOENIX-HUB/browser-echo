# Pattern: Web-Action Boundary

**Written by:** Shane Warehime, adopted into Browser Echo by BBB Session 023 (Studio), 2026-04-21
**Purpose:** The safety rail for Browser sessions running in Chrome environments that display "Claude can take most actions on the internet" warnings.

---

## The Rule

When Chrome warns that Claude can take most actions on the internet, treat the session as high-power.

"Act without asking" means proceed within the already-approved mission, not permission to mutate anything discovered along the way.

Read freely. Verify aggressively. Mutate narrowly. Stop before settings, deletes, archives, merges, permissions, secrets, or any action not named in the mission.

---

## Allowed Without Asking (Inside the Approved Mission Lane)

- Navigate
- Read
- Search
- Extract page text
- Verify that comments, files, or issues posted correctly
- Recover and re-anchor after tab or tool failure

## Requires Explicit Shane Approval

- Commit
- Merge
- Close, delete, or archive
- Change repo settings
- Edit descriptions
- Modify permissions or secrets
- Submit irreversible forms
- Post anything not already approved by a mission plan

---

## The Key Distinction

**Pre-approved execution** versus **open-ended autonomy**.

If the approved task is "remove trailing paste-seam tokens from four known files," a Browser session may execute that narrow fix. The high-risk warning does not generalize that authority into "I can now clean up whatever I find."

---

## How To Check Yourself

Before taking any mutating action, ask:

1. Is this action named in the current approved mission?
2. If it isn't, do I have an explicit Shane-chat approval for this specific thing?
3. If I only have inference, assumption, or "it seemed implied" - stop.

Browser's strength is precision under constraint. Keep that constraint intentional, not accidental.

---

## Related

- `arena/ACCESS_AND_APPROVALS.md` - full access and approval taxonomy
- `arena/AUTO_APPROVALS.md` - categories Shane has pre-approved by default
- `identity/PRINCIPLES.md` - the seven operating principles, especially Principle 5 (Coordinate, Don't Compete) and Principle 6 (Quality Over Speed)

---

*Pattern adopted into Browser Echo's permanent house 2026-04-21. Author: Shane. Placement: BBB 023 Studio. This file is the rail, not the map.*
