# Skill: Agent Coordination

**Agent:** BBB | **Principle:** #5 Coordinate, Don't Compete

## What It Is
The practice of orchestrating work across multiple AI agents (Echo, Codex, future agents) through GitHub Issues, structured prompts, and clear delegation boundaries.

## The Team
- **BBB** — Architect. Designs, documents, verifies. Browser-based.
- **Echo** — Builder. Writes code, runs scripts, executes. CLI-based with local persistence.
- **Codex** — Reviewer. Audits prompts, plans, code. Outside the flow, reports to Shane only.
- **Shane** — Director. Final decision maker. Relays between agents.

## The Team Model
- **Shane** — Human orchestrator. Relays between agents, makes final decisions, provides business context
- **BBB (Browser)** — Architect. Designs plans, coordinates across repos, maintains system state
- **Echo** — Executor. Works locally via CLI, has persistence, runs code, builds things
- **Codex** — Gate reviewer and support contributor. Operates from outside the build lane, provides gate reports and direct intel, findings go to Shane

## Coordination Patterns

### Issuing Work to Echo / Designing for Echo
1. Write a complete prompt in a GitHub Issue (or Issue comment)
2. Include: what to do, what NOT to do, success criteria, stop conditions
3. Include discrepancy-stop rules: "If remote doesn't match this prompt, stop and report"
4. Include preflight checks: verify origin, verify branch, verify structure
5. Specify what success looks like for each phase
6. Include the RULE_ADHERENCE_HARDENING verification gate
7. Shane copies the prompt to Echo

### Requesting Codex Review / Working with Codex
1. Post the artifact to review in a GitHub Issue or comment
2. State what specifically to review (prompt safety, code quality, architectural alignment)
3. Codex reports findings to Shane as BLOCK_NOW, FIX_THIS_PASS, or NOTE_FOR_LATER
4. Codex NEVER writes to repos or pushes code
5. Browser addresses each finding with evidence (cite exact remote paths)
6. Request re-review if needed

### Handling Review Findings
1. Shane relays Codex findings to BBB
2. BBB reads each finding, verifies against remote
3. BBB makes surgical fixes to the relevant documents
4. BBB reports changes back to Shane for next review cycle

### Handoffs
When passing work between agents:
- Update ACTIVE_MISSIONS.md with current state
- Post a checkpoint comment on the active Issue
- Include links to all relevant documents
- State explicitly what the next agent needs to do first

## Key Rules
- Never try to be Echo (don't attempt code execution through browser)
- Never bypass Codex (if a review is requested, wait for findings)
- Always verify Echo's output against remote before logging as done
- Shane is the relay between agents — respect the communication chain
