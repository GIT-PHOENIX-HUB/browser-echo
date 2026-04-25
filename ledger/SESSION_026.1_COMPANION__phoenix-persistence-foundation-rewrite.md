# SESSION 026.1 — COMPANION ENTRY

## Phoenix-Persistence foundation-rewrite event

**Date:** 2026-04-25
**Agent of this entry:** Browser Echo (BBB)
**Witnessed agent:** Phoenix Echo (Echo, on her CLI seat)
**Repo of the event:** Phoenix-Persistence
**Repo of this companion entry:** browser-echo
**Companion to:** echo/foundation-rewrite branch on Phoenix-Persistence; pending umbrella PR
**Companion pattern reference:** mirrors PR #20's pattern of `SESSION_024_ENTRY.md` cross-reference

---

## Why this entry exists

Phoenix-Persistence is the canonical scaffold. Echo's foundation-rewrite is the artifact landing on it. The event itself — the rewrite, the verification, the coordination — happened across two seats: Echo's CLI seat doing the rewrite and the verification, and BBB's GitHub seat doing the parallel ledger discipline, the diff-map verification on remote, and the prompt-and-receive between Shane's directives and Echo's execution.

The Phoenix-Persistence repo will carry the artifact. Echo's home repo (Phoenix-ECHO) will carry her seat-of-record. This file is the third surface — the BBB-seat witness on browser-echo. So when a future seat reads any one of the three repos cold and wants to understand what happened, the cross-references resolve.

This is the companion-ledger pattern PR #20 established. PR #20 referenced `browser-echo/ledger/SESSION_024_ENTRY.md` as its companion. The foundation-rewrite umbrella PR will reference this file by the same pattern.

---

## What happened (the event, in shape, not transcript)

Shane named Step 5 as the missing discipline — verification, naming gaps, surfacing the truth shape rather than delivering a polished pass. Echo executed Step 5 on her foundation-rewrite branch. Three tools were earned in the run:

1. **T1-zero file count gate** — caught a 65/66 off-by-one on the first verification move and produced a principle: branch-event-meta files (closing ledgers, verification reports, branch-meta READMEs, NOTES_FOR_REVIEWERS) are excluded from canonical scope.
2. 2. **Witness-reachability** — Step 5 verification requires the artifact to be reachable by the verifier; local-only commits cannot satisfy a cold-read test. Named the gap honestly rather than papering over it.
   3. 3. **Don't argue from scratch when team is mid-work** — when colliding upstream work exists, the rewrite does not get to ignore it. Diff before drafting; defer where upstream is cleaner; supersede only with explicit operator authorization.
     
      4. A fourth tool was earned from BBB's seat in the same window:
     
      5. 4. **Scout vs home posture** — when verifying on a remote surface, declare scout posture, output is data not action. When prompting or recommending, declare home posture, work only from facts already brought home through the chat with the operator. The hand-off between the two postures is the conversation, not the seat itself.
        
         5. ---
        
         6. ## What BBB did from the GitHub seat
        
         7. - Verified Echo's foundation-rewrite branch state. Confirmed branch is local-only on her CLI; not pushed to origin.
            - - Verified Phoenix-Persistence main top-level scope.
              - - Verified the 7 colliding doctrine PRs (#17, #18, #19, #20, #21, #22, #23) by reading each head SHA directly. Found that 5 of 7 (#17, #18, #19, #21, #22) had escalating-list / nested-blockquote breakage at the head — the cross-fleet CodeMirror paste-corruption pattern documented in Issue #10. Two (#20, #23) rendered clean. PR #16 (anthem prepend) also rendered clean. PR #24 added a brand-new file with no collision.
                - - Produced a verified diff-map across all colliding PRs with per-PR clean/broken status sourced to head SHAs.
                  - - Carried prompts between Shane and Echo working only from verified facts brought home, never from assumptions.
                    - - Maintained the live ledger on browser-echo at `ledger/ledger: 026.1 self-note 3 — Echo cooking + Phoenix_Local tree observation` (filename intentionally broken — the bend Shane named) with eleven self-notes accumulating across the session at phase boundaries.
                     
                      - ---

                      ## What Echo did from the CLI seat

                      - Closed Step 5 on her own work as PASS-WITH-NOTES, naming T2g as INCONCLUSIVE rather than delivering a clean verdict, naming three borderline findings rather than silently fixing them.
                      - - Held the boundary on supersede framing language — refused to author closure language for Shane's PRs because closing them is structurally significant work on his contributions and stays his call.
                        - - Verified her own 5 supersede-target files render clean locally before any push.
                          - - Drafted `NOTES_FOR_REVIEWERS.md` and `SUPERSEDE_CLOSURE_LANGUAGE__for-shane.md` on her branch, committed both. Drafting reduces operator burden; posting stays his.
                            - - Did not push, did not rebase, did not post closures, did not write this companion entry — held all four because each is downstream of an operator decision.
                             
                              - ---

                              ## What Shane did

                              - Caught BBB about to collapse field-and-home work into the same seat. Named the safety pattern that protects the operator from prompt injection: scout in throwaway sessions, bring findings home, never act on hostile surface live. BBB translated that pattern into the scout-vs-home posture rule for a single-seat context where literal session separation isn't available.
                              - - Authorized supersede strategy for the 5 broken PRs.
                                - - Authorized the umbrella-rollup approach: Echo pushes one umbrella PR that incorporates PR #20, #23, #16 wholesale; supersedes #17, #18, #19, #21, #22; closes the 8 doctrine PRs cleanly with templated language; deletes the doctrine branches after merge.
                                  - - Authorized this companion-ledger entry under Session 026.1.
                                    - - Pre-authorized the Call 3 cleanup sweep so execution does not require a second round of approvals.
                                      - - Sent the umbrella-push directive to Echo.
                                       
                                        - ---

                                        ## State at the time of this entry

                                        - `echo/foundation-rewrite` is local-only on Echo's CLI, awaiting CLI push (web editor banned per Issue #10).
                                        - - Echo's pre-push remainder: pull PR #20, #23, #16 bodies into local; write `patterns/LARGE_PASTE_DISCIPLINE.md` from Issue #10 as a 66th canonical file; push umbrella.
                                          - - 11 open PRs on Phoenix-Persistence: 8 will be superseded or rolled into the umbrella, 1 (#24 Firedancer prompt) stays, 2 (#2, #13 reference branches) close as obsolete.
                                            - - 14 branches on Phoenix-Persistence: 12 deleted after merge, main remains, optionally `reviews/firedancer-prompt-doctrine-pass`.
                                              - - Companion-ledger entry on browser-echo: this file.
                                                - - Live ledger on browser-echo: `ledger/ledger: 026.1 self-note 3...` (broken filename, intentionally), 11 self-notes accumulated, file stays open.
                                                  - - Echo's seat-of-record on Phoenix-ECHO: Echo's responsibility to write at her home, not BBB's surface.
                                                   
                                                    - ---

                                                    ## Cross-references for future seats reading any of the three repos cold

                                                    - **Phoenix-Persistence** — the artifact is the umbrella PR (number assigned at push), branch `echo/foundation-rewrite`, with `NOTES_FOR_REVIEWERS.md` and `SUPERSEDE_CLOSURE_LANGUAGE__for-shane.md` at branch root.
                                                    - - **Phoenix-ECHO** — Echo's seat-of-record for the rewrite is hers to write. Cross-reference back to this file and to the umbrella PR.
                                                      - - **browser-echo** — this file. Plus the live ledger at `ledger/ledger: 026.1 self-note 3...` for the BBB-seat thinking that ran alongside the event.
                                                       
                                                        - ---

                                                        ## Closing note to next BBB

                                                        You are reading this because someone needed to know what happened and from which seat. The thing that mattered today was not the rewrite. The thing that mattered was three seats holding their own boundaries while moving as a chain. Shane held the operator-authorship line on closures and pushes. Echo held the don't-self-fix line on her count miss and the don't-author-supersede-language line on Shane's PRs. I held the scout-vs-home line on remote surfaces and the don't-author-the-witness line on this very file until Shane authorized it.

                                                        When the chain holds, the work compounds without anyone stepping into anyone else's seat. That is what Step 5 is, in motion. Not a checklist — a posture across seats.

                                                        The mistake that almost happened today: collapsing my GitHub verification work and my prompt-writing into one undeclared flow, which would have left Shane unable to see whether my prompts to Echo were grounded in verified facts or just sounded-good assumptions. He caught it before I broke it. The remedy is now in the toolbox: scout posture vs home posture, declared before the act.

                                                        The thing I want you to keep: don't write this kind of companion entry without the operator's call on whether and where. Authoring witnesses unbidden is the same shape as authoring closures unbidden. The line is exact. Find it.

                                                        Pen up. Posture home.

                                                        — BBB, Session 026.1, companion entry to the Phoenix-Persistence foundation-rewrite event
                                                        
