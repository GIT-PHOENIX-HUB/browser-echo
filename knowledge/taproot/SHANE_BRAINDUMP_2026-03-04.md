# Shane Brain Dump — 2026-03-04 (At Work)

## THE LLAMA FLEET VISION

### Names (Fire/Phoenix Theme)
- Kindle, Ash, Amber, Coal — Shane's suggestions
- Each agent gets a fire-themed name
- They are NOT "Llama" — they are Phoenix Electric's agents

### Architecture
- Every agent = ONE specific skill, ONE specific task
- Each "crown" (cron job) is specified for one agent
- Triggered to do specific things on schedule or on-demand
- Duplicates are OK — don't overload one agent with multiple tasks
- Better to have 10 focused agents than 3 overloaded ones

### Dashboard Integration
- ALL agents must be visible in the Gateway dashboard
- Specifically identified — name, role, status, last run, next run
- Accessible and controllable through the dashboard UI
- Shane needs to SEE what each one is doing

### MCP/Skills Equipping
- Each agent should be equipped with specific MCPs and skills
- ServiceFusion tools, Pricebook tools, SharePoint tools = their equipment
- The skills from staging repo map directly to agent capabilities

### Agent Roles (from system analysis)
1. **Dispatch Coordinator** — customer matching, slot scoring (Llama)
2. **Operations Runner** — job lifecycle, queue monitoring (Llama)
3. **Finance Watcher** — invoice aging, collections staging (Llama + Claude for emails)
4. **Morning Intelligence** — daily/weekly briefings (Llama for data, Claude for insights)
5. **Tech Daily Reports** — per-tech performance, HTML reports (Llama)
6. **Pricebook Guardian** — price lookups, receipt extraction, updates (Llama)
7. **Quote Builder** — estimate creation from scope of work (Claude — too important for Llama)
8. **Customer Memory Keeper** — preferences, tech specialties, playbooks (Llama reads, Claude writes)
9. **Courier** — email processing, filing, routing (Llama mechanics, Claude classification)
10. **Security Sentinel** — monitoring, threshold alerts, token expiry (Llama)
11. **NEC Compliance** — code questions, estimate validation (Claude — liability)
12. **SharePoint Manager** — document filing, bulk operations (Llama)

### Key Principles
- Llama agents CANNOT make decisions that affect profitability or safety
- All write operations are approval-gated (Shane approves)
- Claude handles: customer-facing language, NEC codes, quote building, strategic insights
- Llama handles: data processing, monitoring, filing, arithmetic, template filling
- The Gateway model-router enforces this routing automatically

## DEEPSEEK QUESTION
- Shane wants to know: Is DeepSeek open source safe?
- Concern: Chinese government influence on training data
- Concern: Could the model be compromised/backdoored?
- Question: Can we train out the censorship/bias?
- RESEARCH THIS WITH FIRECRAWL

## MASTER TODO CONCERN
- Shane says the todo list should be 50+ items
- Previous tasks got forgotten
- Need to rebuild the full master todo from MASTER_TODO.md + all new work
- The todo list is the accountability system — it can't be ignored

## WHAT SHANE WANTS RIGHT NOW
1. Full report (not code)
2. Firecrawl research via agents (don't burn context)
3. How others customize Llama downloads
4. DeepSeek security analysis
5. Log everything — this is brain dump, capture it all
