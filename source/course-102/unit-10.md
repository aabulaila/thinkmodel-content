# Unit 10: Your Own Private AI

*Last updated: August 9, 2026. Model names and hardware numbers in this unit drift quarterly; the routing-by-sensitivity rule is permanent.*

## The Hook

Everything in this course so far has one thing in common: your words leave your device. Every prompt, every uploaded file, every workspace travels to a company's servers, gets processed there, and comes back. Usually that's a fine trade. Sometimes it isn't: a journal entry, a medical question, a friend's secret you're helping with, an unreleased project, a document you signed an agreement about.

Here's what most people don't know. You can download an AI model, the actual brain, as a file. Run it on your own laptop. Ask it anything, with the internet unplugged, and watch it answer. No account, no server, no per-use cost, no one else in the room.

It won't be as smart as the frontier. The interesting questions are: how much less, measured on your tasks, and for which parts of your life is that trade obviously worth it? By the end of this unit you'll have a written verdict, and the instrument you built in Unit 02 is about to earn its keep.

:::embed{type="video" title="Own the Engine" src="/api/storage/public-objects/videos/c2-10-Own_The_Engine.mp4" youtubeId="JZbZ-PWVC1s"}
:::

:::socratic
question: A local model answers with your network cable unplugged. What guarantees does that physically provide that no privacy policy ever can, and what does it still not guarantee?
hint: Separate "where the data goes" from "whether the answer is right."
concept: Local execution makes data leaving the device physically impossible, which no promise can match. It guarantees nothing about accuracy: verification stays, only the privacy question is settled.
:::

## The Core Concept

The mental model: **rent intelligence, or own it.**

Everything before this unit was rented: frontier capability, paid per use or per month, running on someone else's machines under someone else's policies. The alternative exists because of {{term:open-weight models|AI models whose trained parameters are published for anyone to download and run: the Llama, Gemma, Qwen, Mistral, and DeepSeek families are the major lineages as of 2026. Open weights means you can own and run the brain; it doesn't always mean fully open licensing, so check the terms.}}: whole model families released publicly by labs including Meta, Google, Alibaba, Mistral, and DeepSeek. The gap between the best open model and the best frontier model, once a chasm, has narrowed to months on many tasks, and small open models today outperform the frontier models of two years ago.

Owning is easy now. Two free tools dominate: **Ollama** ([ollama.com](https://ollama.com)), a minimal install-and-pull command-line tool your Unit 04 terminal skills make trivial, and **LM Studio** ([lmstudio.ai](https://lmstudio.ai)), a friendly desktop app with a model browser and a chat window. Both download a model file once and run it entirely on your machine. The constraint is hardware: model size is measured in {{term:parameters|The numbers inside an AI model that get adjusted during training, like its internal settings. They are counted in billions — roughly, more parameters means more capable and more memory-hungry.}}, and your RAM decides your ceiling. As of 2026, rough civilian guidance: 8GB of RAM runs small models (around 4B) adequately; 16GB runs the excellent mid-small tier (7-14B) comfortably; beyond that, bigger machines run bigger brains. Phones increasingly run the smallest tier, and if you have no capable device at all, this unit's browser path (free hosted playgrounds for open models, like the demo spaces on Hugging Face) lets you evaluate everything and still write the verdict; you'll own the decision even if you rent the hardware.

What do you give up? Capability, honestly: on hard reasoning, long documents, and polish, the frontier still wins, and the exact size of that gap on your tasks is precisely what your Unit 02 benchmark measures. What do you get? Three things rentals can't sell you. **Privacy as physics**: data that never leaves the device is not a promise, it's an unplugged cable. **Zero marginal cost**: after the download, every prompt is free forever, which changes what you're willing to automate. **Permanence**: a model file on your disk can't be deprecated, altered, or taken away; the brain you have today is yours in ten years.

So the operator's question was never "local or frontier?" It's a routing rule: **route by sensitivity, then by capability.** Sensitive content goes local by default and escalates only if the local model measurably fails; everything else goes to whatever your Unit 02 policy already says.

:::analogy-target{id="p-own-vs-rent"}
It's the kitchen and the restaurant. The restaurant (frontier) is better than your cooking, and you go there for occasions that deserve it. But you don't take every meal there: it's expensive at volume, it's closed sometimes, and there are conversations you'd rather not have at a table someone else is bussing. The kitchen (local) is yours: modest, always open, free per meal, and completely private. Adults don't choose one; they route. The skill is knowing which meals are kitchen meals.
:::

Do the ownership math for your own usage before the demo; rent-versus-own is a numbers question, and you have the numbers:

:::sandbox{variant="cost-calculator"}
:::

:::callout{type="case-study"}
## The January that changed the menu
In January 2025, a Chinese lab called DeepSeek released R1: a reasoning model with openly downloadable weights that matched much of what the frontier's premium reasoning products could do, trained for a fraction of the assumed cost. The reaction made global headlines beyond tech: the assumption that frontier capability would stay locked inside a few companies' data centers, rentable but never ownable, visibly cracked, and one of the largest single-day market value drops in history hit the chipmaker at the center of the old assumption.

This case is eighteen months old, which is ancient by this course's standards, and it stays in this unit deliberately: it's the founding event of the world this unit teaches, the moment "own it" became a serious answer. The aftershock became the pattern: open families from multiple labs on multiple continents now trail the frontier by months rather than years, and each release ratchets the ownable ceiling up. You don't need to remember R1. You need to remember what it proved: the menu now has two columns, permanently.
:::

:::callout{type="warning"}
## Common misconception: local means safe
Local settles exactly one question: where your data goes. Every other rule of this course still applies, and two get sharper. First, small models are wronger more often: they hallucinate more, know less, and drift sooner, so verification (Unit 03) matters more on your laptop, not less, and grounding a small model in your own documents (paste the source, Unit 01 style) is the single best way to boost it. Second, downloaded models are software from the internet: stick to the official registries inside Ollama and LM Studio and the original labs' releases, because a model file, like any download, is only as trustworthy as its source. And your Unit 07 keys logic doesn't retire either: a local model wired to your files and an outbound connection reassembles the trifecta just fine at home.
:::

:::socratic
question: Your Unit 02 benchmark has six tasks. Before running it against a local model, predict: which tasks will the small model pass, and which will expose the gap?
hint: Recall the two-question grid: steps and stakes.
concept: Small models hold up on low-step tasks (extraction, reformatting, simple drafts) and crack on step-heavy reasoning. Predicting before measuring turns the benchmark run into a test of your model intuition too.
:::

:::quiz{id="c2u10-q1" objective="U10-O1"}
question: Which statement about running an open-weight model locally is accurate?
correct: B
A: Open models now match the frontier, so choosing between them comes down to ideology alone
B: Local runs keep data on the device and cost nothing per prompt, but capability still trails
C: Local models cannot hallucinate, because they answer only from files on your own machine
D: Local models need programming skill and server hardware, so an ordinary laptop cannot run one
feedback_correct: All three clauses matter. The privacy and cost properties are physical facts of local execution, not policies. The capability gap is real, task-dependent, and shrinking, which is why "measure it" beats both hype and dismissal, and your Unit 02 benchmark is the measuring stick. Where the model runs changes economics and privacy; it changes nothing about the need to verify.
feedback_incorrect: The answer is B. The gap to the frontier is real (A overstates), hallucination has nothing to do with location and worsens as models shrink (C confuses privacy with accuracy), and the barrier collapsed years ago: free apps, one-click installs, ordinary laptops (D is 2023 talking). Own the true trade: physics-grade privacy and free usage, priced in measured capability.
:::

## Live Demo

**Free path:** everything below is free. Hardware path: any computer with 8GB+ RAM. Browser path (no capable device): use a free hosted playground for open models (Hugging Face model demos, or any current free open-model chat) for steps 2-4; the verdict in step 5 works identically.

**Step 1, install a kitchen.** Download LM Studio (friendliest) or, if Unit 04 made you brave, install Ollama and pull a model from the terminal. In either tool's browser, pick a current small instruction-tuned model from a major family (the 4B class for 8GB machines, the 7-14B class for 16GB). The download is a few gigabytes: the whole brain, one file.

**Step 2, the unplugged moment.** Turn off Wi-Fi. Ask the model anything. Watch it answer with the network dead. Take the moment seriously: you are talking to an AI that exists entirely on your hardware. Turn Wi-Fi back on when you're done being moved.

**Step 3, the benchmark run.** Open your Unit 02 personal benchmark and run all six tasks against the local model. Score pass/fail against your saved "good" lines, next to your recorded frontier results. No vibes: this is the launch-week ritual, pointed at a model you own.

**Step 4, the grounding boost.** Take the benchmark task the local model failed most gracefully, and rerun it with the relevant source pasted directly into the prompt (your document, your notes: Unit 01's grounding, done by hand). Watch how much of the gap closes when a small engine gets a great brief. Small model plus your context regularly beats big model plus nothing.

**Step 5, the verdict.** Write this unit's artifact, the local-versus-frontier verdict, five lines:

```prompt
LOCAL VERDICT, [date]
Measured: [local model name] passed [n]/6 benchmark tasks vs frontier's [n]/6; grounding closed the gap on [task].
Goes local by default: [the sensitive categories of my life: name them]
Stays frontier: [the tasks where the measured gap matters]
Hardware note: [what I ran on, and what the next tier up would unlock]
Review date: [next quarterly review, Unit 12]
```

**The Handoff, and the Studio.** The verdict files into your Unit 01 workspaces as standing routing law. The Studio adopts the same split: unreleased drafts and anything touching customer details stay on the local kitchen; polish and public-facing steps rent the frontier through the usual gates.

:::compare
before_label: Everything rented
before: Every thought, file, and question travels to someone's servers under terms they can change. Cost scales with curiosity, sensitive questions get self-censored or risked, and the tools of daily thinking can be repriced or retired overnight.
after_label: Routed by sensitivity
after: A measured local kitchen handles the private and the high-volume for free, forever, with the cable-unplugged guarantee. The frontier is rented deliberately, for the tasks where its measured edge earns the trip. The verdict is written, dated, and re-measured quarterly as the ownable ceiling rises.
:::

## Operator Moves

**Benchmark, don't believe.** Every claim about local models (theirs or this unit's) is a claim about your tasks until measured. The Unit 02 suite runs on anything, including a model on your own disk; run it before adopting, and at every quarterly review.

**Route by sensitivity first.** Make a named list of what never leaves your device (health, journal, others' secrets, anything under agreement), and send it local by default. Capability routing (Unit 02) applies to everything else. Sensitivity outranks smartness.

**Small model, big grounding.** Before escalating a local failure to the frontier, try the free fix: paste the source. A modest engine with your exact context beats a giant one guessing, and it keeps the sensitive material in the kitchen.

## Why This Matters

Practically, you just gained a second column on the menu: a private, free-at-the-margin AI for the parts of life that deserve one, and a measured answer to when it's enough. That matters most exactly where AI is most personal: the health question at 2am, the journal, the friend's confidence, the work under NDA. "It physically cannot leave this laptop" is a sentence no cloud product can say.

Structurally, this unit completes your independence. The course has been building assets that survive tool churn: portable blocks, skills, policies, benchmarks. Ownership is the last one: a brain on your disk that no pricing change, deprecation, or policy update can touch. And the ratchet only turns one way: every open release raises the ceiling of what's ownable, which means your quarterly re-measurement (next unit but one) isn't housekeeping. It's watching your own leverage grow.

:::socratic
question: The ownable ceiling rises every few months while your sensitive-data list stays mostly constant. What does that predict about your routing verdict over the next two years?
hint: One line moves, one doesn't. Where do they cross?
concept: More of the sensitive list clears the capability bar every re-measurement, so the local column grows monotonically. The quarterly benchmark isn't checking whether local works; it's tracking how much of your life it has become sufficient for.
:::

:::quiz{id="c2u10-q2" objective="U10-O2"}
question: Rana volunteers at a clinic and wants AI help summarizing anonymized-but-sensitive session notes she's legally required to keep confidential. Her laptop has 16GB RAM. The operator's routing is:
correct: D
A: Use the frontier model, since its privacy policy promises responsible handling of her data
B: Use the frontier model, but tell it to forget the conversation once the summary is written
C: Skip AI here, since confidential material and any AI tool can never safely be put together
D: Run a mid-small open model locally, paste the notes in to ground it, and verify every summary
feedback_correct: Sensitivity outranks smartness: confidentiality obligations are exactly what physics-grade privacy is for, and a 16GB machine runs the mid-small tier well. Grounding closes most of the summarization gap (it's a low-step task with the source in hand), and verification stays because local settles privacy, not accuracy. Option B deserves its own warning: "please forget" is a sentence, not a control; where data goes is architecture, never a request.
feedback_incorrect: The answer is D. A privacy policy is a promise under someone else's control, and asking a cloud model to forget is theater: the routing question is architectural. Total abstention (C) forfeits real help the local column safely provides for precisely this case. Local by sensitivity, grounded for capability, verified as always: that's the whole unit in one decision.
:::

## The Challenge

:::challenge{title="The Ownership Verdict" time="45 minutes"}
Install, measure, and rule: which parts of your life run on the engine you own?

- [ ] **Install the kitchen** (LM Studio or Ollama) and pull one current small-or-mid open model suited to your RAM, or set up the browser path if you're device-limited.
- [ ] **Perform the unplugged test:** one real question answered with networking off (browser path: note this guarantee is the one thing you're deferring until you have hardware).
- [ ] **Run the full Unit 02 benchmark** against the local model and record pass/fail beside your frontier results.
- [ ] **Run the grounding boost** on one failed task and record whether pasted context changed the result.
- [ ] **Write the sensitive list:** the named categories of your life that go local by default, in one honest paragraph.
- [ ] **File the verdict** in the five-line format, with a review date, into your Unit 01 workspaces as standing routing law.

**Success criteria:** a working local (or browser) setup, a completed benchmark scorecard with at least one grounding experiment, and a dated verdict naming both your sensitive categories and your measured escalation cases. The verdict is the artifact; Unit 12 re-measures it.
:::

## Key Takeaways

1. Rent intelligence, or own it: open-weight models plus free tools (Ollama, LM Studio) put a real AI brain on your own hardware, trailing the frontier by a gap you should measure, never assume.
2. Ownership buys three things rentals can't: privacy as physics, zero marginal cost, and permanence. It buys nothing about accuracy: verification stays.
3. Route by sensitivity first, capability second: a named local-by-default list for what never leaves your device, your Unit 02 policy for everything else, and grounding as the free capability boost.
4. The ownable ceiling ratchets upward with every open release; the quarterly benchmark rerun tracks how much of your life the kitchen can now feed.

## The Rabbit Hole

**Type:** Article
**Title:** Open models overview, Ollama's model library
**URL:** https://ollama.com/library
**Description:** The live menu of everything ownable right now: every major open family, every size, one command from your disk. Browse it the way you browsed Artificial Analysis in Unit 02, and notice the release dates: watch how fast the ceiling you measured today gets raised.

## References

| Type | Title | URL | Description |
|------|-------|-----|-------------|
| Tool | Ollama | https://ollama.com | Terminal-native local model runner and registry; the Unit 04 graduate's path |
| Tool | LM Studio | https://lmstudio.ai | Desktop app for downloading and chatting with local models; the friendly path |
| Article | Reuters, DeepSeek shakes the AI market (Jan 2025) | https://www.reuters.com/technology/chinas-deepseek-sets-off-ai-market-rout-2025-01-27/ | The founding event of the ownable era, as it hit the world (durable classic, kept under the freshness rule for its explanatory weight) |
| Docs | Hugging Face | https://huggingface.co | The open-model commons: browser demos for the no-hardware path, and every release's home |
| Docs | Meta, Llama models | https://www.llama.com | One major open-weight family's official source |
| Docs | Google, Gemma models | https://ai.google.dev/gemma | Another, sized for exactly the hardware this unit assumes |
| Report | Stanford HAI AI Index | https://hai.stanford.edu/ai-index | Annual measurement of the open-versus-frontier gap this unit has you measure personally |
