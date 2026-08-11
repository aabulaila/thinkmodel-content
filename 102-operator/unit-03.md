# Unit 03: Research Like a Team of Ten

*Last updated: August 9, 2026. Product names in this unit shift; the relay and the verification discipline don't.*

## The Hook

There's a kind of AI product that doesn't answer your question in three seconds. You ask, and it disappears for ten minutes. While it's gone, it runs dozens of searches, opens hundreds of pages, follows leads, discards dead ends, and comes back with a multi-page report, structured, sourced, and footnoted.

They're called research agents, and every major AI provider now ships one. Used well, they compress a day of reading into a coffee break. Used badly, they produce something more dangerous than ignorance: a beautifully formatted report you didn't check, wearing the costume of diligence.

The difference between those two outcomes isn't the agent. It's whether the person who commissioned it understands the one rule of delegation this unit is built on.

> **Video: The Handoff**
>
> Available in the ThinkModel reader at https://thinkmodel.ai
>
> ThinkModel video — CC BY 4.0, the same licence as the text.

> **Think about this before reading on**
>
> A research agent reads three hundred pages for you and writes a confident summary. What exactly did you delegate, and what's still yours?

<details>
<summary>Hint</summary>

Separate the activity (finding, reading, compiling) from the outcome (believing a claim enough to act on it).

</details>

## The Core Concept

The mental model: **delegate the reading, never the believing.**

A research agent is a reading machine of superhuman stamina and mediocre judgment. It will genuinely cover more ground in ten minutes than you could in a day. What it won't reliably do is weigh source quality the way you would, notice when two sources are copying the same original error, or care whether a claim is load-bearing for your decision. Those are acts of believing, and believing is the part that stays human, because you're the one who acts on the result.

The landscape as of August 2026: **deep research modes** in ChatGPT, Gemini, and Claude (each provider names it slightly differently) send an **research agent** off to investigate for minutes at a time and return long, cited reports. **Perplexity** ([perplexity.ai](https://perplexity.ai)) is a search-first assistant that answers with citations by default and has a deeper research mode of its own. And **NotebookLM** ([notebooklm.google.com](https://notebooklm.google.com)), your grounded workspace from Unit 01, is where research goes after it's gathered. Free paths exist across all of these; deep research modes on free tiers are usually capped at a few runs per month, which is enough for this course.

Notice what just happened in that last sentence: the tools formed a chain. That chain is this course's central pattern, so it gets a name. **The Handoff** is the moment one tool's output becomes the next tool's input, deliberately, with you deciding what crosses. From this unit forward, every Live Demo ends with one. Stringing handoffs together is how single tools become systems, and it's the road that ends, in Unit 08, with systems that run on their own.

The research version of the chain is the **verified research relay**, and it's this unit's artifact:

1. **Commission** a research agent with a brief, not a question (breadth).
2. **Hand off** the report plus its best sources into a grounded notebook (depth).
3. **Interrogate** the notebook, where every answer cites your actual sources.
4. **Verify** the load-bearing claims yourself, at the original source (belief).

It's how a good newsroom works. Stringers and wire services gather everything (breadth). An editor pulls the credible material into one working file (the handoff). The journalist works that file hard (depth). And before publication, the load-bearing facts get checked against the primary source, by a human whose name goes on the story (belief). Nobody prints the wire feed raw. The relay exists because gathering and believing are different jobs.

Why does the commissioning step matter so much? Because a research agent inherits every ambiguity in your request and multiplies it across a hundred pages. "Tell me about creatine" produces a generic tour. A brief produces an investigation: scope, the decision this feeds, sources to prefer, sources to avoid, output shape, and what to flag as uncertain. You already know this pattern; it's the instruction block from Unit 01, applied to a single mission instead of a standing workspace. Draft one properly before you spend a research run on it:

> **Interactive**
>
> This unit has an interactive exercise (`prompt-lab`) that runs in the ThinkModel reader at https://thinkmodel.ai. It cannot be reproduced in plain text.

> **Case study: The report that looked like diligence**
>
> The legal profession ran this unit's experiment at scale, involuntarily. Since 2023, courts around the world have sanctioned lawyers for filing documents containing AI-fabricated citations, and public trackers of such incidents passed several hundred cases in US courts alone by 2025, with new ones still landing in 2026. The pattern is always the same: fluent, formatted, confident research output, submitted by a professional who delegated the believing.
>
> Modern research agents make this failure quieter, not rarer. Their citations are usually real now. But real citations can still point to weak sources, misread the source they point to, or lean on one blog post that three other cited pages were themselves quoting. The costume of diligence got better. The rule didn't change: the human who acts on the report checks the claims the action rests on.

> **Watch out: Common misconception: many sources mean strong evidence**
>
> A forty-source report feels rigorous. But agents count sources; they don't weigh them. Five of those forty may be reprints of the same press release. The decisive claim may rest on the weakest link in the bibliography. And a claim repeated across many pages of the internet gets found more often, which means an agent can mistake popularity for truth exactly the way a search engine does.
>
> So don't audit the whole report; that's delegating the reading back to yourself. Find the two or three claims your decision actually rests on, and chase those to their original sources. Depth on what matters beats breadth of suspicion.

> **Think about this before reading on**
>
> An agent's report cites forty sources. Your decision depends on three claims in it. What's the highest-value twenty minutes of verification you can do?

<details>
<summary>Hint</summary>

You can't check everything, and you don't need to. What does the decision rest on?

</details>

**Knowledge check —** Two students research the same purchase decision. Amal types "best budget laptops" into a research agent. Zain gives it: his budget, his three uses, a request to prefer manufacturer specs and independent reviews over affiliate listicles, a comparison-table output shape, and an instruction to flag anything uncertain. Why will Zain's report be dramatically more useful?

- **A.** Zain wrote far more words, and research agents reliably reward longer prompts with better reports
- **B.** The agent spends more minutes searching when it is handed more instructions to work through
- **C.** It won't be better, since a research agent runs the same search routine whatever you type
- **D.** Zain commissioned with a brief, so the agent's hundreds of autonomous choices got steered

<details>
<summary>Show answer</summary>

**D. Zain commissioned with a brief, so the agent's hundreds of autonomous choices got steered**

A research agent makes hundreds of small decisions while it works: which searches to run, which links to open, what to trust, what to include. A brief steers every one of those decisions; a bare question leaves every one to a guess. Length isn't the mechanism. Steering is. This is Unit 01's lesson applied to a mission instead of a workspace: the machine that writes the brief now writes it for an agent.

</details>

## Live Demo

**Free path:** Gemini's and ChatGPT's deep research have limited free runs, Perplexity's core search is free, and NotebookLM is free. One free deep-research run is all this demo needs; Perplexity substitutes if you've used yours.

**Step 1, commission the Studio's brief.** The Studio needs a weekly trend report to draft posts from. Here's its commissioning brief; read it as the worked example of the shape:

```prompt
Research current trends in neighborhood coffee shop marketing for the coming month. Scope: small independent shops, not chains. Prefer: industry publications, platform-published creator guidance, and named case studies. Avoid: listicles with affiliate links and content older than 12 months unless it's foundational. Output: five trends, each with what it is, one real example, and one way a small shop could act on it this week. Flag anything you're uncertain about instead of smoothing it over.
```

**Step 2, commission your own.** Pick a real question from one of your Unit 01 domains, something you'd genuinely spend an afternoon researching. Write your brief with the same anatomy (scope, decision, prefer, avoid, shape, flags) and launch a deep research run.

**Step 3, The Handoff.** When the report returns, don't stop at reading it. Export or copy it into a new NotebookLM notebook, and add two or three of the report's most important original sources alongside it. The agent's output just became your workspace's input. That move is the Handoff, and you'll make it in every unit from now on.

**Step 4, interrogate.** Ask the notebook the questions that matter for your decision. Every answer now cites your actual sources, and clicking a citation takes you to the passage. Ask at least one question designed to stress the report: "What do these sources disagree about?"

**Step 5, verify the load-bearing three.** Name the three claims your decision rests on. Chase each to its primary source, outside the notebook if needed. Grade each: holds, holds with caveats, or doesn't hold. If any claim fails, note what the agent did wrong: bad source, misread source, or overconfident synthesis.

> **The report reader**
>
> Asks a bare question, receives forty formatted pages, reads the summary, acts on it. Feels thorough because the report looks thorough. Has outsourced breadth, depth, and belief in one click, and will discover the weak claim at the worst possible time.

> **The relay operator**
>
> Commissions with a brief, hands the report into a grounded notebook with its key sources, interrogates it against the real decision, and personally verifies the three claims that carry weight. Ten extra minutes. The belief stays home.

## Operator Moves

**Commission with a brief, never a question.** Six lines: scope, the decision this feeds, prefer, avoid, output shape, flag uncertainty. Save the skeleton in your Unit 01 workspace and reuse it; a research run is too expensive, in time and in free-tier quota, to spend on a guess.

**The three-claim spot check.** After any research output, name the claims the decision rests on (there are almost never more than three) and chase them to primary sources. This is the whole verification budget, spent where it pays.

**Never cite what you haven't opened.** If a claim from AI research is going into your essay, your presentation, or your decision, you open the original source first. No exceptions. This single rule is what separates you from every cautionary tale in the case study above.

## Why This Matters

This unit is where you stop being one person. A commissioned agent plus a grounded notebook plus a verification pass genuinely covers what a small research team covers, and it does it on free tiers, on a phone. The students and professionals who learn to commission and verify get compounding returns on every question they'll ever ask.

It's also where the course's central pattern locked in. The Handoff you made in Step 3 is the same move you'll make when a terminal agent's work flows into your files (Unit 04), when a skill packages a workflow for reuse (Unit 05), and when a graph strings the whole chain together to run overnight (Unit 08). Systems are just handoffs made permanent. You now know what crosses each gap, because you carried it across by hand.

And the rule scales with the power. The more capable agents get, the more tempting it becomes to delegate the believing, and the more expensive that delegation gets. The operators who thrive are the ones whose verification discipline grows in proportion to their delegation.

> **Think about this before reading on**
>
> As research agents get better, their errors get rarer but harder to spot. Does that make your verification pass more important or less?

<details>
<summary>Hint</summary>

Think about what "rarer but better camouflaged" does to the cost of the errors that remain.

</details>

**Knowledge check —** A research agent's report says a supplement improves sleep "according to multiple studies," citing four sources. Before acting on it, the highest-value check is:

- **A.** Count the citations, since four separate sources clear the bar for a claim like this
- **B.** Open the cited sources and check they are independent and say what the report claims
- **C.** Ask the agent whether it is sure, and proceed if it confirms the claim a second time
- **D.** Rerun the question in a second AI tool and accept the claim if both tools agree

<details>
<summary>Show answer</summary>

**B. Open the cited sources and check they are independent and say what the report claims**

This is delegating the reading, never the believing, in one move. Four citations can be four echoes of one press release; a source can be real and still not say what the report says it says. Opening the sources checks independence and fidelity at once, and it's a ten-minute job because you're only doing it for the claim you'll act on. Cross-checking in a second tool (option D) has some value, but both tools read the same internet, so agreement can just mean they found the same original error.

</details>

## The Challenge

### Challenge: The Verified Research Relay

*Time: 45 minutes*

Run the full relay on a question from your own life, and keep the artifact.

- [ ] **Pick a real question** from one of your Unit 01 domains, one where being wrong would actually cost you something (a purchase, a study choice, a health or training decision, a project direction).
- [ ] **Write the commissioning brief** with all six parts: scope, the decision it feeds, prefer, avoid, output shape, flag uncertainty. Save it to the relevant workspace.
- [ ] **Run the research** with any deep research tool (free path above) and complete The Handoff: report plus two or three key original sources into a grounded notebook.
- [ ] **Interrogate the notebook** with at least three decision-relevant questions, including "what do these sources disagree about?"
- [ ] **Verify the load-bearing claims:** name up to three, chase each to its primary source, and grade each: holds, holds with caveats, doesn't hold.
- [ ] **Write the verdict:** five sentences. What will you actually do, which verified claims support it, and what did the agent get wrong or overstate?

**Success criteria:** a saved brief, a grounded notebook containing the relay, three graded claims with primary sources named, and a decision you can defend claim by claim without opening the AI's report again.

## Key Takeaways

1. Delegate the reading, never the believing. Research agents have superhuman stamina and mediocre judgment; belief stays with the person who acts.
2. Commission with a brief, not a question: scope, decision, prefer, avoid, shape, flags. An autonomous agent multiplies whatever steering you give it, including none.
3. The Handoff is the course's central pattern: one tool's output becomes the next tool's input, with you deciding what crosses. Breadth agent, grounded depth, human belief.
4. Verify by triage: the two or three load-bearing claims, chased to primary sources. Never cite what you haven't opened.

## The Rabbit Hole

**Type:** Article
**Title:** Introducing deep research, OpenAI
**URL:** https://openai.com/index/introducing-deep-research/
**Description:** The launch essay for the product category this unit tames, including the makers' own framing of what it's for and where it fails. Read it as an operator: notice which claims are about gathering, and which quietly reach toward believing.

## References

| Type | Title | URL | Description |
|------|-------|-----|-------------|
| Article | OpenAI, "Introducing deep research" | https://openai.com/index/introducing-deep-research/ | The defining product launch for autonomous research agents |
| Article | Google, Gemini Deep Research overview | https://gemini.google/overview/deep-research/ | Google's version, with free-tier access notes |
| Docs | Anthropic, Claude Research help | https://support.claude.com/en/articles/11088861-using-the-research-feature | How Claude's multi-step research feature works and which plans include it |
| Tool | Perplexity | https://perplexity.ai | Search-first assistant with citations by default; free tier |
| Tool | NotebookLM (Gemini Notebook) | https://notebooklm.google.com | The grounded destination for every research handoff |
| Case tracker | AI Hallucination Cases database | https://www.damiencharlotin.com/hallucinations/ | The running public tally of fabricated citations in court filings |
| Article | CalMatters, AI-fabricated citations in US courts (2025) | https://calmatters.org/economy/technology/2025/09/chatgpt-lawyer-fine-ai-regulation/ | How delegated believing plays out at professional stakes |

## Glossary

**research agent** — An AI that plans a research task, runs many searches, reads the results, and compiles a sourced report on its own, usually taking several minutes per question.
