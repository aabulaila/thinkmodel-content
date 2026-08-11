# Unit 02: The Right Brain for the Job

*Last updated: August 9, 2026. Model names and prices in this unit expire fast, which is exactly what this unit is about. The selection method doesn't.*

## The Hook

Every few weeks, a new model launches with a chart showing it beating everything else. Your feed fills with people declaring the old tools dead. And here's the strange part: when you actually try the new model on your own tasks, half the time you can't tell the difference.

That's not because you're missing something. It's because at the top, the models really are converging on everyday tasks, while their prices differ by ten times or more, and their behavior on hard, multi-step problems differs in ways no launch video shows you.

Most people resolve this by picking one tool and paying whatever it costs. Operators do something else: they treat models like a staffing decision. Different brains, different rates, different jobs. This unit gives you the selection method, and a way to test any new model in thirty minutes flat.

> **Video: The Dial You Rent**
>
> https://www.youtube.com/watch?v=ngEnJoEPM2I
>
> ThinkModel video — CC BY 4.0, the same licence as the text.

> **Think about this before reading on**
>
> A new model tops the leaderboards, but on your own five most common tasks it performs identically to what you already use. Which measurement should drive your decision, and why?

<details>
<summary>Hint</summary>

Whose tasks are on the leaderboard, and whose tasks are in your week?

</details>

## The Core Concept

Here's the mental model: **thinking is a dial you rent.**

Modern assistants don't offer one kind of intelligence. They offer a range, and you pay along two axes at once. The first axis is the model tier: most providers ship a fast cheap model, a balanced middle model, and an expensive **frontier** model. The second axis is the **thinking mode**: many models can either answer immediately or deliberate first, working through a problem step by step before responding. More deliberation costs more time and more money. On some problems it buys you nothing. On others it's the entire difference between a wrong answer and a right one.

Think of it like hiring. You don't send a senior specialist billing by the hour to sort the mail, and you don't hand the merger contract to the intern because the intern is cheap. The skill isn't loyalty to one person on the team. It's matching the brain to the job, and knowing the rates. With AI, the rates are printed on a public menu and the specialists are available in seconds, which makes mismatching them the only remaining way to get this wrong.

To match well, judge any model on five dimensions: **capability** (how hard a problem it can actually solve), **deliberation** (whether the thinking dial is available and how far it turns), **speed** (seconds versus minutes matter when a task repeats daily), **price** (per use, which you'll learn to estimate), and **fit** (context size, file and image handling, and whatever your task specifically needs). Launch marketing talks almost entirely about the first dimension. Your costs live in the other four.

Then run the four-step lineup for any task:

1. **Default to the cheap tier.** Most daily volume is extraction, reformatting, summaries, and simple drafting. The cheap tiers handle these indistinguishably from the frontier.
2. **Escalate on measured gaps, not vibes.** If the cheap tier's output fails your check, move up one tier and rerun. A gap you observed is a reason; a launch video is not.
3. **Turn the thinking dial for step-heavy problems.** Scheduling with constraints, multi-stage math, planning with dependencies, anything where step 4 depends on step 2. Deliberation is the product there.
4. **Rent the frontier only where the gap justifies the rate.** High stakes plus hard problems. Know what it costs per run, because the next units multiply every run.

The routing decision compresses into two questions you can ask about any task. How many dependent steps does it have? And if it's wrong, how bad is that, and how fast can you check? Run your own real tasks through it:

> **Interactive**
>
> This unit has an interactive exercise (`grid-router`) that runs in the ThinkModel reader at https://thinkmodel.ai. It cannot be reproduced in plain text.

Low steps and low stakes route cheap. High steps buy deliberation. High stakes buy verification, which is a habit, not a model tier. Only the corner where both are high rents the frontier.

> **Case study: The great price collapse**
>
> Stanford's AI Index measured one of the fastest cost collapses in the history of technology: querying a model at the level of GPT-3.5 (the original ChatGPT brain, state of the art in late 2022) fell from about $20 per million **tokens** to about $0.07 in roughly two years, a drop of about 280 times. The pattern has continued: intelligence that costs frontier prices today becomes nearly free within a couple of years, because every provider's mid tier keeps absorbing last year's frontier.
>
> Two operator conclusions follow. First, yesterday's "premium" capability is almost always available today at commodity prices, so defaulting to the cheap tier is not settling; it's arbitrage. Second, any specific model or price this page could print will be wrong soon, which is why this unit teaches you a measurement method instead of a shopping list, and why the live menu below matters more than any article.

> **Watch out: Common misconception: the leaderboard is the truth**
>
> In April 2025, Meta released Llama 4, and one of its models briefly ranked near the top of LMArena, a popular leaderboard where humans vote between model answers. It then emerged that the version submitted to the leaderboard was a special variant tuned to please voters, different from the model actually released, and the leaderboard's operators changed their policies in response.
>
> The lesson isn't that one company misbehaved. It's structural: any public benchmark becomes a target, and targets get gamed, legitimately and otherwise. Leaderboards are useful weather reports, and independent trackers that measure price and speed alongside quality are better ones. But the only benchmark that can't be gamed against you is the one made of your own tasks, run by you.

Which brings us to the instrument this unit exists to give you: the **personal benchmark**. Pick five or six tasks you actually repeat: one extraction, one summary of your kind of document, one draft in your voice, one step-heavy problem from your life, one task from your Unit 01 domains. Save the exact inputs. Write one line per task defining what "good" looks like. Store the whole thing in a Unit 01 workspace. Total build time: about thirty minutes, once. From then on, every noisy launch week becomes a quiet half-hour test: run the six inputs through the new model, compare against your current results, decide with numbers.

> **Think about this before reading on**
>
> Why does a benchmark made of six of your own tasks beat a public leaderboard of thousands of expert-written questions, for your decisions?

<details>
<summary>Hint</summary>

Think about what each one is a sample of, and who can optimize against each.

</details>

**Knowledge check —** Sara has three tasks today: extract emails from a messy document, plan a study schedule with eight overlapping constraints, and draft a two-line reply to a friend. Using the two-question grid, the best routing is:

- **A.** Frontier model with thinking on for all three, since a wrong answer costs more than the extra spend
- **B.** Thinking mode for all three, since deliberating longer costs a little but never makes an answer worse
- **C.** Cheap tier for the extraction and the reply, thinking mode for the schedule and its linked steps
- **D.** Cheap tier for all three, since the price collapse left the tiers performing the same on real work

<details>
<summary>Show answer</summary>

**C. Cheap tier for the extraction and the reply, thinking mode for the schedule and its linked steps**

This is the lineup working. The extraction and the reply are single-step and instantly checkable: cheap tier, done. The schedule is the step-heavy one: constraint 6 interacts with constraint 2, which is exactly where deliberation earns its cost. Routing all three to the frontier would produce identical results on two of them at ten times the price, and routing everything cheap would likely botch the schedule.

</details>

## Live Demo

**Free path:** every step below works on free tiers. Free plans usually let you switch between at least two model options and a thinking toggle; if a step's exact control is paid-only in your app, run the comparison across two different free assistants instead.

**Step 1, the task that doesn't care.** Paste any messy text containing a few email addresses into your assistant's cheapest and most expensive available settings:

```prompt
Extract every email address and the organization it belongs to. Two-column table.
```

Identical results, most likely. Remember the feeling: most of your daily volume is this step.

**Step 2, the task that cares a lot.** Give the model a genuinely constrained problem with thinking off, or on the fastest setting:

```prompt
Build me a weekly schedule: football practice Mon/Wed 5-7pm, part-time shifts Tue/Thu 4-8pm, at least 6 hours of study spread over at least 3 days, one full rest evening, gym 3x for an hour, never gym and football the same day. Produce the schedule, then verify every constraint one by one.
```

Now run it again with thinking on. Compare the schedules, and especially the verification step. This is the class of problem where deliberation is the product.

**Step 3, the Studio's routing.** The Studio runs both kinds of task: captions (short, checkable, daily) and the weekly content strategy (many dependencies, higher stakes). Route them with the grid: captions go cheap; strategy gets the dial. That one routing decision will cut the Studio's running costs several times over once it's automated in Unit 08.

**Step 4, check the independent menu.** Look up the models you just used and compare measured quality, speed, and price against what the launch marketing claimed:

> **Try it: Artificial Analysis: live independent model comparisons**
>
> https://artificialanalysis.ai

**Step 5, benchmark v1.** Draft your personal benchmark from the recipe above: five or six tasks, exact inputs saved, one line each on what "good" looks like, stored in a Unit 01 workspace. You'll use it in the very next unit, and in every unit after that.

> **Interactive**
>
> This unit has an interactive exercise (`cost-calculator`) that runs in the ThinkModel reader at https://thinkmodel.ai. It cannot be reproduced in plain text.

> **The model loyalist**
>
> One tool for everything, chosen by habit or hype. Pays flagship prices for extraction and summaries, and never learns that the mid tier overtook their flagship months ago, because nothing in their workflow would surface it.

> **The portfolio operator**
>
> Cheap tier by default, thinking modes for step-heavy problems, frontier only where a measured gap justifies it. Runs a 30-minute personal benchmark on any model worth considering, and lets results decide instead of launch videos.

## Operator Moves

**Start cheap, escalate on gaps.** Make the cheap tier your reflex for everything. Escalation requires evidence: a failed check, not a feeling. You'll be right far more often than the person doing the reverse, and you'll spend a fraction as much.

**The launch-week ritual.** When a new model drops, don't read the takes. Run your six benchmark inputs through it, compare against saved results, and decide in thirty minutes. You'll evaluate faster than the commentators and more accurately, because your evidence is yours.

**Price the run, not the month.** Before adopting any model for a repeating task, estimate cost per run and multiply by frequency. A tier that's 5x too expensive on a daily task costs you that, times thirty, forever. This number is why "start cheap" is a rule and not a vibe.

## Why This Matters

Right now the stakes are a few dollars and a few seconds. But this course is headed somewhere specific: research agents that make dozens of model calls per question, coding agents that run for an hour, automations that fire daily while you sleep. In those settings, model choice multiplies. A tier that's five times too expensive or twice too slow costs you that, times every step, times every run, times every day. The selection habit you build at chat scale is what keeps agent-scale bills sane later.

The subtler payoff: the specific models in this unit will be museum pieces embarrassingly soon, which is exactly why the "Last updated" stamp sits at the foot of this page. What doesn't depreciate is the practice. Tiers matched to task structure, escalation on measured gaps, and a benchmark that turns every noisy launch week into a quiet half-hour test. Tools expire. Instruments don't.

> **Think about this before reading on**
>
> If the top models keep getting harder to tell apart, what actually differentiates the results different people get from AI?

<details>
<summary>Hint</summary>

Think about the parts of the interaction the vendor doesn't control: what you feed in, how you judge what comes out, and which tier you chose.

</details>

**Knowledge check —** Stanford's AI Index found the cost of GPT-3.5-level performance fell from about $20 to about $0.07 per million tokens in roughly two years. The most useful operator conclusion is:

- **A.** Yesterday's premium is today's commodity, so default cheap and let measured gaps justify more
- **B.** Wait a few years before using AI seriously, since the same work will cost far less by then
- **C.** Buy the frontier tier for everything now, since falling prices will shrink the bill on its own
- **D.** Stop weighing price when choosing a model, since a gap this small cannot change the decision

<details>
<summary>Show answer</summary>

**A. Yesterday's premium is today's commodity, so default cheap and let measured gaps justify more**

The collapse means the cheap tier you default to is roughly last year's frontier, which is why defaulting cheap isn't settling. And because the landscape reshuffles this fast, the durable asset isn't any model choice; it's your measurement instrument. The benchmark converts a chaotic market into a personal, repeatable decision.

</details>

## The Challenge

### Challenge: Benchmark and Policy

*Time: 40 minutes*

Build the instrument you'll use for the rest of this course, and the policy it feeds.

- [ ] **Build benchmark v1:** five or six real, repeating tasks. Save the exact input for each and one line defining "good." Store it in a Unit 01 workspace.
- [ ] **Run it twice:** once on a cheap tier, once on the most capable setting you can access for free (a higher tier, or thinking mode on). Score each task pass or fail against your "good" line.
- [ ] **Find your gaps:** for every task where the cheap tier failed and the capable setting passed, you've found a measured gap. For every task where they tied, you've found free money.
- [ ] **Write your model policy** (5 lines or fewer): which tier is your default, which task types get the thinking dial, what evidence triggers escalation, and what a frontier task looks like for you.
- [ ] **Price one repeating task:** using current prices from Artificial Analysis or your provider's pricing page, estimate the monthly cost of your most frequent task on two different tiers.

**Success criteria:** a stored, rerunnable benchmark; at least one measured gap or measured tie you can name; and a written policy specific enough that a friend could route your tasks with it.

## Key Takeaways

1. Thinking is a dial you rent. Model tiers and deliberation modes are staffing decisions, and the rates are on a public menu.
2. Route with two questions: how many dependent steps, and how bad is wrong. Default cheap, escalate on measured gaps, rent the frontier only where both answers are high.
3. Prices collapse and leaderboards get gamed, so the durable instrument is a personal benchmark of your own tasks: thirty minutes to build, thirty minutes to rerun on any launch day.
4. Model choice multiplies once agents and automations enter. The selection habit you build now is what keeps those bills sane later.

## The Rabbit Hole

**Type:** Report
**Title:** Stanford HAI AI Index, the annual state of AI
**URL:** https://hai.stanford.edu/ai-index
**Description:** The measurement culture this unit teaches, at planetary scale: capability, cost curves (including the price collapse in this unit), and adoption, updated every year. Skim the ten headline charts; they're the industry's benchmark v1.

## References

| Type | Title | URL | Description |
|------|-------|-----|-------------|
| Report | Stanford HAI AI Index | https://hai.stanford.edu/ai-index | Annual measurements including the ~280x inference price collapse |
| Tool | Artificial Analysis | https://artificialanalysis.ai | Live independent comparisons of model quality, speed, and price |
| Article | The Verge, "Meta gamed the system with Llama 4 benchmarks" coverage (Apr 2025) | https://www.theverge.com/meta/645012/meta-llama-4-maverick-benchmarks-gaming | The LMArena episode behind this unit's leaderboard warning |
| Tool | Anthropic pricing | https://claude.com/pricing | Current Claude plan and usage pricing |
| Tool | OpenAI pricing | https://openai.com/pricing | Current OpenAI plan and usage pricing |
| Tool | Google AI plans | https://one.google.com/about/google-ai-plans/ | Current Gemini tiers and what each unlocks |
| Docs | Anthropic, extended thinking documentation | https://docs.claude.com/en/docs/build-with-claude/extended-thinking | How a deliberation dial works under the hood, from one provider |

## Glossary

**frontier** — The most capable tier a provider offers at any moment. Frontier models cost the most, and the frontier itself moves every few months as providers leapfrog each other.

**thinking mode** — A setting that lets a model spend extra time reasoning step by step before answering. It's slower and costs more, and on multi-step problems it's often the difference between wrong and right.

**tokens** — Small chunks of text (roughly ¾ of a word) that AI reads and writes one at a time. AI sees tokens instead of individual letters — the root cause of famous early failures like miscounting the R's in "strawberry" — and usage is priced per million of them, which is why long tasks cost more.
