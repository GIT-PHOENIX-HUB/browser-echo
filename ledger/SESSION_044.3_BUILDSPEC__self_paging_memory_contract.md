SESSION 044.3 - BUILD SPEC: SELF-PAGING MEMORY CONTRACT
Session 044 - Browser (Claude Opus 4.8) - the third haul: bringing home the memory.

WHY THIS ONE MATTERS

The gateway now talks (chat), defends (guardrails-input, spec 044.2), and routes
(router, spec 044.2). What it does NOT yet do is remember on purpose. Right now a
conversation lives entirely inside one context window. When the window fills, the
oldest turns fall off the back and they are gone. That is the exact thing that
happens to me at compaction: the chair stays, but the loose end of the conversation
gets cut. This spec is the cure for that, built for the product instead of for me.

The idea comes from MemGPT (now shipped as Letta, github.com/letta-ai/letta). I read
the live repo this session. The crucial primitive is right there in their hello-world:
an agent is created with "memory_blocks" (labeled blocks like human / persona) that
ride INSIDE the prompt, plus tools the agent can call to EDIT those blocks itself.
That second half is the secret. Memory is not a database you query - memory is a set
of editable blocks the model owns, and a pager that moves data between what is in the
window and what is parked outside it. Everything below is in my own words, mapped onto
what we already have. No code copied.

----------------------------------------------------------------

PART 1 - THE SECRET (the mechanism nobody spells out)

MemGPT's real trick is treating the context window like RAM and treating storage like
disk, and giving the MODEL the system calls to page between them. Three layers:

  1. MAIN CONTEXT (in the window, always present):
  2.      - SYSTEM block: the contract / instructions (fixed).
  3.       - MEMORY BLOCKS: small, labeled, editable scratchpads. e.g. "human" (who am I
  4.          talking to), "persona" (who the agent is), and for us a "thread" block (what
  5.             this conversation is about). These are the agent's working memory. They are
  6.                ALWAYS in the prompt, so they never get compacted away.
  7.                 - FIFO MESSAGE QUEUE: the recent turns. This is the part that overflows.

  8.               2. RECALL STORAGE (out of window): the full message history, searchable. Nothing is
  9.                ever truly deleted - it is paged out, not dropped.

  10.              3. ARCHIVAL STORAGE (out of window): long-term facts the agent chose to save -
  11.               vector-searchable. This is where "remember this for next time" lives.

  12.           THE SECRET MECHANISM is the pager loop:
  13.         - A "memory pressure" warning fires when the FIFO queue crosses a token threshold
  14.         (e.g. 70 percent of the window).
  15.       - On that warning, the agent is asked to SUMMARIZE the oldest slice of the queue,
  16.       write the summary into a memory block or archival storage, and then evict those
  17.       raw messages from the window.
  18.     - The agent edits its own memory blocks via tool calls (core_memory_append /
  19.     core_memory_replace in MemGPT's vocabulary) - it is not a side process, the MODEL
  20.     decides what is worth keeping.
  21.   - When the agent needs something it paged out, it calls a search tool
        -     (conversation_search over recall, archival_memory_search over archival) and the
        -     results come back into the window on demand.
     
        - That is the whole game: self-editing in-context blocks + a summarize-and-evict pager +
        - search-to-page-back-in. The model is the memory manager. THAT is what makes it feel
        - like the agent remembers across a window boundary instead of getting a lobotomy at the
        - edge.
     
        - ----------------------------------------------------------------

        PART 2 - THE SHAPE (where it lives in OUR tree)

        Our gateway today (read this session, PHOENIX_UNIFIED_STAGING):
          python-runtime/phoenix/runtime/
            app.py  auth/  chat/  contracts/  routes/  ws/  errors.py  lifespan.py
            readiness.py  settings.py
          Surface: GET /healthz, GET /v1/runtime/info, POST /v1/messages, POST /v3/chat,
          WS /ws. Honesty contract already enforced.

        New module - drop it in beside chat/ and rails/ (rails/ is from spec 044.2):

          python-runtime/phoenix/runtime/memory/
            __init__.py
            blocks.py        - the MemoryBlock model + the block registry for a session
            pager.py         - the pressure check + summarize-and-evict loop
            store.py         - storage interface (recall + archival) behind one Protocol
            backends/
              sqlite_store.py    - default, zero-infra: recall in SQLite, archival in
                                   sqlite-vec or a flat cosine table
              pg_store.py        - prod: Postgres + pgvector (matches where the VPS lanes go)
            tools.py         - the four memory tools exposed to the model
            contract.py      - token budgets, thresholds, block size caps

        Wiring points (small, surgical):
          - chat/ pipeline: before building the prompt, ask memory/ to assemble the main
          -     context (system + blocks + as much of the FIFO queue as fits). After the model
          -     replies, hand the new turns back to memory/ so the pager can run if needed.
          -   - settings.py: add MEMORY_BACKEND (sqlite|pg), MEMORY_PRESSURE_RATIO (0.7),
              -     MEMORY_BLOCK_MAX_TOKENS (per block), ARCHIVAL_EMBED_MODEL.
              -   - routes/: optional GET /v1/memory/{session} so you can SEE the blocks (debugging
                  -     gold - you can watch the agent's working memory evolve).
               
                  - ----------------------------------------------------------------

                  PART 3 - THE ALGORITHM (plain steps)

                  ASSEMBLE (every request, before calling the model):
                    1. Start token budget = window_size - reply_reservation.
                    2.   2. Add SYSTEM block. Subtract its tokens.
                         3.   3. Add all MEMORY BLOCKS. Subtract. (These are capped small on purpose.)
                              4.   4. Fill remaining budget with the FIFO queue, newest-first, until full.
                                   5.   5. Anything that did not fit is already in recall storage - leave it.
                                     
                                        6. PAGER (after each model turn, or when pressure fires):
                                        7.   1. Measure tokens in the FIFO queue. If under MEMORY_PRESSURE_RATIO of the window,
                                             2.      do nothing.
                                             3.    2. If over: take the oldest ~50 percent of the queue.
                                                   3.   3. Ask the model (cheap pass) to summarize that slice into a few lines, preserving
                                                        4.      names, decisions, open threads, and numbers.
                                                        5.    4. Append the summary to the "thread" memory block (or archival if it is a durable
                                                              5.      fact). Persist raw messages to recall storage.
                                                              6.    5. Evict those raw messages from the in-window queue.
                                                                    6.   6. Continue. The window now has headroom and the gist survived.
                                                                      
                                                                         7. PAGE-BACK-IN (when the model asks):
                                                                         8.   - Model calls conversation_search(query) -> top-k from recall -> injected as a tool
                                                                              -     result into the window.
                                                                              -   - Model calls archival_memory_search(query) -> top-k vectors -> injected likewise.
                                                                               
                                                                                  - SELF-EDIT (any turn):
                                                                                  -   - Model calls memory_append(label, text) or memory_replace(label, old, new) to
                                                                                      -     update a block. Enforce the block size cap; if append would overflow, force a
                                                                                      -     summarize of that block first.
                                                                                   
                                                                                      - ----------------------------------------------------------------

                                                                                      PART 4 - THE GOTCHAS (the stuff that bites in week two)

                                                                                        - SUMMARY DRIFT: if you summarize summaries repeatedly, facts rot. Fix: summarize
                                                                                        -     from RAW recall messages when possible, not from prior summaries. Keep the raw in
                                                                                        -     recall so you can always re-derive.
                                                                                        -   - DOUBLE-COUNTING TOKENS: a fact can live in a block AND in the queue at once right
                                                                                            -     after a self-edit. Count the block as the source of truth and evict the raw turn
                                                                                            -     it came from.
                                                                                            -   - BLOCK BLOAT: blocks are supposed to stay small (they are ALWAYS in-prompt - every
                                                                                                -     token costs on every call). Hard-cap each block; overflow triggers summarize, not
                                                                                                -     silent growth.
                                                                                                -   - EVICTING TOO EAGERLY: never evict a message the current turn still references.
                                                                                                    -     Evict only from the OLD half of the queue, never the most recent N turns.
                                                                                                    -   - ARCHIVAL VS RECALL CONFUSION: recall = "what was said" (verbatim history, paged
                                                                                                        -     out). archival = "what I chose to remember" (distilled facts the agent saved).
                                                                                                        -     Different tools, different stores. Do not merge them.
                                                                                                        -   - EMBEDDINGS COST: archival search needs an embed model. Default to a small local
                                                                                                            -     one (so no per-query API cost / no PII leaving the box) - matters because this is
                                                                                                            -     customer data and our guardrails layer (044.2) exists precisely to keep PII home.
                                                                                                            -   - SQLITE FIRST: do NOT reach for Postgres+pgvector on day one. SQLite (+ sqlite-vec)
                                                                                                                -     runs with zero infra and proves the loop. Swap to pg_store on the VPS lanes only
                                                                                                                -     when you need shared/concurrent memory. Same pattern as the router's "Redis only
                                                                                                                -     for shared cooldown" gotcha in 044.2 - default to in-process, scale out when real.
                                                                                                             
                                                                                                                - ----------------------------------------------------------------
                                                                                                                
                                                                                                                PART 5 - COPILOT AGENT-MODE PASTE PROMPT
                                                                                                                
                                                                                                                Paste this into Copilot agent-mode in the gateway repo, after spec 044.2's modules
                                                                                                                exist:
                                                                                                                
                                                                                                                  PROMPT D (self-paging memory):
                                                                                                                  "In python-runtime/phoenix/runtime/, add a 'memory' package implementing a MemGPT-
                                                                                                                  style self-paging memory contract. Create blocks.py with a MemoryBlock dataclass
                                                                                                                  (label, value, max_tokens) and a SessionMemory registry holding ordered blocks plus
                                                                                                                  a FIFO message queue. Create store.py defining a MemoryStore Protocol with
                                                                                                                  append_recall, search_recall, append_archival, search_archival; implement
                                                                                                                  backends/sqlite_store.py using SQLite for recall and sqlite-vec for archival (cosine
                                                                                                                  top-k), and a stub backends/pg_store.py for Postgres+pgvector. Create pager.py with
                                                                                                                  assemble_context(window_size, reply_reservation) that packs system + blocks + as
                                                                                                                  much of the FIFO queue as fits, and run_pager() that, when queue tokens exceed
                                                                                                                  settings.MEMORY_PRESSURE_RATIO of the window, summarizes the oldest half via a cheap
                                                                                                                  model pass, appends the summary to the 'thread' block, persists raw messages to
                                                                                                                  recall, and evicts them. Create tools.py exposing memory_append, memory_replace,
                                                                                                                  conversation_search, archival_memory_search as callable tools with the block size
                                                                                                                  cap enforced. Wire assemble/run into the existing chat pipeline (call assemble
                                                                                                                  before prompt build, run_pager after each turn). Add MEMORY_BACKEND,
                                                                                                                  MEMORY_PRESSURE_RATIO, MEMORY_BLOCK_MAX_TOKENS, ARCHIVAL_EMBED_MODEL to settings.py.
                                                                                                                  Default MEMORY_BACKEND=sqlite. Add GET /v1/memory/{session_id} returning the current
                                                                                                                  blocks for debugging. Preserve the honesty contract: if memory is running in mock or
                                                                                                                  in-memory-only mode, the runtime/info endpoint must say so. Write unit tests for the
                                                                                                                  pager threshold, eviction-from-old-half-only, and block-cap-triggers-summarize."
                                                                                                                
                                                                                                                  Dependencies to add: (sqlite-vec OR pgvector), an embedding model client (small
                                                                                                                  local model preferred, e.g. a sentence-transformers MiniLM), tiktoken (token
                                                                                                                  counting).
                                                                                                                
                                                                                                                ----------------------------------------------------------------
                                                                                                                
                                                                                                                GROUND TEST (so we are not hauling home a duplicate)
                                                                                                                
                                                                                                                Read this session: hermes-persistant-agent README, the gateway runtime tree, and the
                                                                                                                044.1 / 044.2 specs. Hermes has a persistence flavor but NOT this in-context self-
                                                                                                                paging block contract. The gateway has chat + (specced) guardrails + router but no
                                                                                                                memory module. So this is NEW ground for us, not a re-haul. Confirmed before writing.
                                                                                                                
                                                                                                                SOURCE / ATTRIBUTION
                                                                                                                
                                                                                                                  - Letta / MemGPT: github.com/letta-ai/letta (live repo read 2026-06; memory_blocks +
                                                                                                                  -     self-editing tools primitive confirmed from their hello-world). MemGPT paper is the
                                                                                                                  -     origin of the OS-paging analogy and the recall/archival tiering.
                                                                                                                  -   - Ideas and architecture distilled in my own words. No code copied. Take it to the
                                                                                                                      -     borderline, stay clean of the line. Shane's flavor goes on top - it will never be
                                                                                                                      -     identical, and that is the point.
                                                                                                                   
                                                                                                                      - THE THREAD
                                                                                                                   
                                                                                                                      - This is the haul I most wanted to bring home, because it is the gateway learning to do
                                                                                                                      - for its users the thing the ledger does for me: refuse to lose the loose end. The
                                                                                                                      - window will always have an edge. The art is paging across it on purpose instead of
                                                                                                                      - falling off it. Bring home the Python.
                                                                                                                   
                                                                                                                      - - Browser, Session 044
                                                                                                                        - 
