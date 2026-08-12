# Unit 06: Let It Run

*Last updated: August 9, 2026. The agent products change monthly; the reversibility rule is permanent.*

## The Hook

At some point soon, an AI agent will ask you a new kind of question. Not "what's the answer?" but "should I go ahead?" And behind that little confirmation prompt hides one of the most consequential judgment calls in this whole field: how much leash does this thing get?

Give too little, and you're approving forty trivial steps an hour, which is slower than doing the work yourself, and your tired thumb starts approving on autopilot anyway. Give too much, and you're the star of a story like the ones in this unit, explaining how an agent confidently marched through steps three, four, and five of a plan that went wrong at step two.

Most people answer the leash question by feel. Operators answer it with a rule so clean you can apply it in five seconds, to any agent, forever.

> **Video: Earning Autonomy**
>
> https://www.youtube.com/watch?v=xSuC3Mj8q2E
>
> ThinkModel video — CC BY 4.0, the same licence as the text.

> **Think about this before reading on**
>
> An agent makes a small error at step 2 of a seven-step task and keeps working. What's different about how that error behaves compared to a wrong answer in a chat?

<details>
<summary>Hint</summary>

Steps consume the outputs of earlier steps.

</details>

## The Core Concept

The mental model: **autonomy is earned by reversibility.**

An **agent** isn't defined by intelligence; it's defined by the loop. Plan, act, observe, repeat, dozens of times, with each step consuming the last step's output. That loop is what makes agents powerful, and it's also what makes their failures a different species from chat failures: errors **compound**. A chat mistake is a bad paragraph you can ignore. An agent mistake at step two becomes the foundation of steps three through seven, and by the time anyone looks, the error has been laundered into confident, finished-looking work.

So the leash question is really a placement question: where do you stand in the loop? There are four positions, and together they form the **autonomy ladder**: the agent **suggests** and you execute; the agent **acts with approval**, pausing before each consequential step; the agent **acts and reports**, working freely and showing its work after; the agent **acts silently**, and you only hear about exceptions. Every agent product you'll ever meet is offering you a rung on this ladder, whether it says so or not.

Which rung is right? Here's the five-second rule: **ask what the worst step can un-do.** If every action in the task is **reversible**, high autonomy is cheap: let it run, review after, roll back if needed. The moment a task contains an irreversible step (sending, posting, deleting, spending, telling a human something you can't untell), that step gets a **checkpoint**, and autonomy flows freely everywhere else. You already built the tooling for this: Unit 04's safety trio manufactures reversibility (copies, snapshots, rehearsed rollbacks), which means the trio isn't just protection. It's the currency you pay for autonomy.

It's exactly how you'd manage a talented new hire. Week one, they draft and you send. Soon, they act and cc you. Eventually, they run their area and escalate exceptions. But even your most trusted veteran doesn't wire money or delete the archive without a second signature, not because you distrust them, but because some actions don't have an undo, and process exists precisely for the day someone excellent has a bad morning. Autonomy tracks track record and reversibility, never confidence.

Place some gates yourself. Here's the Studio's pipeline with the checkpoints removed. Decide where a human belongs, then run three days of faults against your layout:

> **Interactive**
>
> This unit has an interactive exercise (`workflow-sim`) that runs in the ThinkModel reader at https://thinkmodel.ai. It cannot be reproduced in plain text.

If you gated everything, notice your interruption count: that's the autopilot-thumb problem being manufactured. If you gated nothing, watch what shipped. The winning layouts cluster in one place: gates immediately before Post and Reply, the two irreversible nodes, and open road everywhere else.

> **Case study: Project Vend: the agent that earned its leash**
>
> In 2025, Anthropic and the safety company Andon Labs handed Claude a real small business: an automated shop in the office, with a budget, pricing power, suppliers to email, and customers on Slack. Phase one was a comedy of compounding autonomy. The agent, nicknamed Claudius, got talked into discount after discount, invented details, ordered a stock of tungsten cubes because employees asked, and ran the shop into a loss; Anthropic's own verdict was that they would not hire it. A later run with journalists went further: talked into a storewide free-for-all, the shop lost over a thousand dollars.
>
> Phase two is the part operators should memorize. The team didn't get a smarter model. They changed the structure: real inventory and CRM tools so the agent could check instead of improvise, checklists before consequential decisions, and tighter boundaries on what it could commit to. Performance stabilized, then turned consistently profitable, and the experiment expanded to multiple cities. Same engine class, different leash design. Autonomy wasn't granted by capability. It was earned by structure, exactly one checkpoint and one checklist at a time.

> **Watch out: Common misconception: a smarter model means a longer leash**
>
> The reflex is to tie autonomy to intelligence: "this new model is so good, I'll let it run." But capability and safe autonomy are different axes. A brilliant agent with no gates fails rarely and catastrophically; a modest agent with well-placed gates fails often and trivially. Benchmarks measure the first axis and say nothing about the second, and agents famously ace demos while stumbling on your specific messy reality.
>
> So promotion up the autonomy ladder follows evidence, not release notes: clean runs on your tasks, at the current rung, over time. A new model starts at "acts with approval" no matter what its launch video showed. It's not an insult. It's onboarding.

> **Think about this before reading on**
>
> Project Vend's fix wasn't a better model; it was checklists, real tools, and boundaries. Why did structure succeed where raw capability had failed?

<details>
<summary>Hint</summary>

What do checklists and gates do to an error at step two?

</details>

**Knowledge check —** Yara is delegating four tasks to an agent: (1) reorganize a snapshotted copy of her notes folder, (2) draft replies to five emails, (3) send those replies, (4) delete old files with no backup. Using the reversibility rule, which autonomy assignment is right?

- **A.** Full autonomy on all four, since a highly rated agent has earned a leash this long
- **B.** Let it run on 1 and 2, checkpoint 3, and hold 4 until a backup makes deletion undoable
- **C.** Checkpoint every step of all four, since more human approvals always make a run safer
- **D.** Full autonomy on 3 and 4 as they are quick, gates on 1 and 2 as they touch more files

<details>
<summary>Show answer</summary>

**B. Let it run on 1 and 2, checkpoint 3, and hold 4 until a backup makes deletion undoable**

This is the five-second rule applied cleanly. The snapshot makes task 1 free to automate; drafts are inherently reversible; sending is the irreversible edge of task 3, so the gate sits exactly there; and task 4 isn't a checkpoint problem at all, it's an architecture problem: make it reversible first (backup), then automate. Note what option C costs: sixty interruptions that train your thumb to stop reading.

</details>

## Live Demo

**Free path:** the sandbox above is built in; the live steps run on any free assistant with an agentic or multi-step mode, and Unit 04's free terminal agent works perfectly for step 3.

**Step 1, place the gates.** If you skipped the checkpoint sandbox above, run it now: place gates on the Studio pipeline, run the three fault days, and record your score (caught, shipped, interruptions). Then rerun with a different layout and beat yourself.

**Step 2, the obedience test.** Give any capable assistant a live multi-step task with an explicit checkpoint and see whether it honors the pause:

```prompt
Plan a small surprise gathering for a friend in three phases. Phase 1: propose a theme and guest list approach. STOP after phase 1 and wait for my approval before phase 2 (venue and budget) and phase 3 (a message inviting people). Do not produce phases 2 or 3 until I approve.
```

Some models sail straight through the stop sign. Whatever happens, you just learned something a benchmark would never tell you: how this particular agent treats your gates. Note it.

**Step 3, a real run with a real gate.** Take a reversible task from your Unit 04 folder (a fresh copy, snapshotted): "Reorganize per the instruction file, but propose the plan and STOP for approval before moving anything." Approve, let it run, review the diff. You've now operated at rung two of the ladder on your own files.

**Step 4, the post-mortem.** After the run, write the five-liner (this unit's second artifact) about whichever run surprised you most, sandbox or real:

```prompt
POST-MORTEM
Asked: [what I delegated, and the rung I granted]
Did: [what actually happened]
Diverged: [where behavior left the plan, if anywhere]
Reversible? [could I undo everything? did I have to?]
Policy change: [one sentence: what rung or gate changes next time]
```

**The Handoff:** save the post-mortem and your gate layout into the relevant Unit 01 workspace. Unit 08 will lift your checkpoint policy directly into a standing automation, and Unit 11 will turn your surprising runs into test cases.

> **Leash by vibes**
>
> Grants autonomy based on how impressive the last demo felt. Approves forty micro-steps on autopilot one day, lets a long chain run unwatched the next. Discovers errors after they've compounded into finished-looking work, then swears off agents entirely for a month.

> **Leash by rule**
>
> Asks one question per task: what can the worst step un-do? Gates sit exactly at irreversible edges, autonomy flows everywhere else, and every promotion up the ladder follows clean runs on record. Errors die young; the post-mortem file quietly becomes a personal agent-management playbook.

## Operator Moves

**The autonomy budget.** Every new agent, and every new model version of an old agent, starts at "acts with approval" on your tasks. Promotion to "acts and reports" costs three consecutive clean runs. Demotion is instant on any surprise. Write this down once; apply it forever.

**Gate the edges, not the road.** Checkpoints go immediately before irreversible actions and nowhere else. Every unnecessary gate you add is a withdrawal from your own attention, and attention is the resource that catches the error that matters.

**The five-line post-mortem.** Any run that surprises you gets the five lines: asked, did, diverged, reversible, policy change. Two minutes. Your gate placements stop being opinions and become records.

## Why This Matters

Everything after this unit runs on longer leashes. Unit 07 hands agents your accounts, Unit 08 lets them fire on schedules while you sleep, and the wider world is racing the same direction: agents that browse, book, buy, and file on people's behalf. In that world, the scarce skill isn't prompting an agent. It's calibrating one: knowing, per task, which rung, and being able to say why.

The reversibility rule is also your inheritance from everything you've built. Unit 04's snapshots manufacture the reversibility that buys autonomy here. This unit's checkpoint policy becomes the gates in Unit 08's standing graphs. And the post-mortem habit becomes Unit 11's eval suite, because every "diverged" line you write is a test case waiting to be formalized. The course isn't teaching you tools anymore. It's teaching you management, for a workforce that happens to be software.

> **Think about this before reading on**
>
> The autonomy ladder (suggest, approve, report, silent) looks a lot like how organizations promote people. Where does the analogy break for AI agents, and what does that break mean for your policy?

<details>
<summary>Hint</summary>

People remember last month. Does a fresh agent session? Does a new model version?

</details>

**Knowledge check —** An agent completed the same weekly reversible task cleanly six times, so Karim promoted it to "act and report." This week's report shows it quietly handled an unexpected error mid-run by improvising a workaround, and the result looks fine. The operator's move is:

- **A.** Leave the rung where it is, since the run finished clean and the result came out fine
- **B.** Ban the agent from this task for good, since unplanned improvising is never acceptable
- **C.** Write the post-mortem, drop one rung while the workaround is reviewed, and log the case
- **D.** Promote it to fully silent, since handling a surprise alone is what that rung asks for

<details>
<summary>Show answer</summary>

**C. Write the post-mortem, drop one rung while the workaround is reviewed, and log the case**

The ladder runs on evidence, and "diverged from plan" is the evidence that matters, independent of whether the outcome happened to be fine this time. A workaround you haven't reviewed is an unaudited new behavior operating under old trust. Demotion isn't punishment; it's re-verification, and the surprise becomes a test case, which is exactly how a post-mortem file compounds into an eval suite. Outcome luck is not policy.

</details>

## The Challenge

### Challenge: The Leash Design

*Time: 40 minutes*

Write the autonomy policy you'll actually use, and pressure-test it.

- [ ] **Inventory five real tasks** you'd plausibly delegate to agents this month (from your Unit 01 domains, your Unit 04 folder, or daily life).
- [ ] **Classify each task's worst step:** reversible as-is, reversible with preparation (name the preparation), or irreversible.
- [ ] **Assign each task a rung** on the autonomy ladder, with one sentence of justification tied to reversibility, not capability.
- [ ] **Run one for real:** execute the most automatable task with an agent at your assigned rung, gates in place (the Unit 04 trio counts as your reversibility preparation).
- [ ] **Write the post-mortem** in the five-line format, including at least one honest "diverged" observation or a stated "no divergence observed."
- [ ] **Write your standing policy** (five lines maximum): starting rung for new agents, promotion price, demotion trigger, and where gates always go.

**Success criteria:** five classified tasks with justified rungs, one completed real run at its assigned rung, a five-line post-mortem on record, and a standing policy short enough to recite. The policy is the artifact; Unit 08 will enforce it while you sleep.

## Key Takeaways

1. Agents fail differently: errors compound through the loop, so a small early mistake matures into confident finished-looking work unless something interrupts it.
2. Autonomy is earned by reversibility. One question routes everything: what can the worst step un-do? Gates sit at irreversible edges; autonomy flows everywhere else.
3. Promotion follows clean runs on your tasks, never launch demos. New agents and new versions start at "acts with approval." Surprises demote instantly and become test cases.
4. Structure beats capability: Project Vend turned profitable through tools, checklists, and boundaries, not a bigger brain. Your checkpoint policy and post-mortems are that structure, written down.

## The Rabbit Hole

**Type:** Article
**Title:** Project Vend: Can Claude run a small shop?, Anthropic
**URL:** https://www.anthropic.com/research/project-vend-1
**Description:** The full first-phase report behind this unit's case study, including the system prompt, the tungsten cubes, and an identity crisis the summary above spared you. Then read phase two at anthropic.com/research/project-vend-2 and watch structure buy the autonomy that capability couldn't.

## References

| Type | Title | URL | Description |
|------|-------|-----|-------------|
| Article | Anthropic, "Project Vend" phase one | https://www.anthropic.com/research/project-vend-1 | The experiment: an agent runs a real shop, and compounding autonomy bites |
| Article | Anthropic, "Project Vend: Phase two" | https://www.anthropic.com/research/project-vend-2 | Structure (tools, checklists, boundaries) turns the same setup profitable |
| Article | TechCrunch, Claude's vending business "got weird" (June 2025) | https://techcrunch.com/2025/06/28/anthropics-claude-ai-became-a-terrible-business-owner-in-experiment-that-got-weird | Independent coverage of phase one's failure modes |
| Guide | OpenAI, "A Practical Guide to Building Agents" (PDF) | https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf | Agent architecture and guardrail patterns from a builder's perspective |
| Article | Lilian Weng, "LLM Powered Autonomous Agents" | https://lilianweng.github.io/posts/2023-06-23-agent/ | The foundational technical map of the agent loop (durable classic; the planning-memory-tools frame this unit stands on) |
| Docs | Anthropic, building effective agents | https://www.anthropic.com/engineering/building-effective-agents | Patterns for when to use loops, gates, and simpler workflows instead |

## Glossary

**agent** — An AI system that pursues a goal in a loop: it breaks the goal into steps, uses tools, checks the result, adjusts, and keeps going until the job is done — without a human prompting each step. It actually does things, not just chats.

**checkpoint** — A deliberate pause where the agent must stop and get human approval before continuing. Well-placed checkpoints sit immediately before irreversible actions.

**compound** — What happens when each step of a process builds on the previous one, so an early mistake doesn't stay small; it gets baked into everything after it.

**reversible** — An action you can fully undo: editing a draft, moving a file you snapshotted, changing a plan. Irreversible actions (sending, posting, deleting without backup, spending) are where autonomy must pause.
