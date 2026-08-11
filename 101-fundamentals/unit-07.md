# Unit 07: Context Is Everything

*Last updated: May 21, 2026. Video embeds and links were refreshed on this date; the context principles stand.*

## The Hook

You've probably noticed that when you ask AI a vague question, you get a vague answer. Ask it something specific — with background, constraints, and examples — and suddenly it's shockingly good.

That gap between a lazy input and a great one isn't luck. It's not about finding magic words. And it's definitely not about "**prompt engineering**" — a term that makes it sound like you need to trick the AI into performing.

It's about context. The single most valuable skill in working with AI is learning to give it the right context. People in the AI industry have started calling this **context engineering**, and it's the skill this entire program builds toward.

> **Video: Why Context Engineering Wins**
>
> https://www.youtube.com/watch?v=dyTHF2WrMYU
>
> ThinkModel video — CC BY 4.0, the same licence as the text.

> **Think about this before reading on**
>
> When you ask AI a vague question and get a vague answer, is the AI being lazy — or is something else going on? What do you think determines the quality of AI output?

<details>
<summary>Hint</summary>

Think about the intern analogy — if you give a vague brief, what kind of work do you get back?

</details>

## The Core Concept

In June 2025, Tobi Lütke — the CEO of Shopify — posted something that resonated across the entire AI community: "I really like the term 'context engineering' over prompt engineering. It describes the core skill better: the art of providing all the context for the task to be plausibly solvable by the LLM."

Simon Willison, one of the most respected voices in software development, echoed the shift. Anthropic published a detailed engineering guide on it. And Andrej Karpathy framed it as a fundamental design discipline, not a gimmick.

So what's the difference? "Prompt engineering" sounds like you're tweaking words to game the system. **Context engineering** is about something much more substantial: **designing the complete information environment the AI needs to do its best work.**

Think of it this way. AI is like an extremely well-read intern. It's read millions of books, articles, and conversations. It's capable, knowledgeable in a broad sense, and fast. But if you walk up to that intern and say, "Write me a thing," you'll get a generic, mediocre thing. Not because the intern is bad — but because you gave a bad brief.

Now imagine walking up and saying: "I need a 300-word email to our biggest client explaining that we're raising prices by 10%. The client is price-sensitive but values our quality. Our relationship is strong but we haven't communicated in three weeks. The tone should be confident but not cold. Here's an example of how we've communicated with them before. And don't mention the competitor who just lowered their prices."

Same intern. Dramatically different output. The difference isn't the intern's skill — it's the quality of the brief.

> **Case study: How Anthropic engineers use context engineering**
>
> Anthropic's engineering team published a guide describing context engineering as "the art of giving the model enough of the right information at the right time to reliably produce the output you need." They break it into specific practices:
>
> **Curate what goes in.** AI has a limited **context window** (working memory). Don't dump everything in; select what's relevant.
>
> **Structure for clarity.** Use headings, labels, and clear formatting so the AI can parse your input efficiently. Markdown headers work better than walls of text.
>
> **Include examples.** Showing the AI what good output looks like — even one example — dramatically improves results. This is called **few-shot prompting**.
>
> **State constraints explicitly.** Don't hope the AI will figure out what to avoid. Tell it: "Don't use jargon. Keep it under 200 words. Don't mention competitors."

Context engineering is briefing the AI. It includes:

- **Who you are and what you need** — your role, your goal, the situation
- **Who the output is for** — audience, expertise level, relationship
- **What good looks like** — examples of desired output, tone, format
- **What to avoid** — constraints, things to exclude, common mistakes
- **Relevant information** — data, background, previous work, documents

The more relevant context you provide, the less the AI has to guess — and guessing is where AI goes wrong.

> **Watch out: Common misconception: Context engineering is about finding "magic prompts"**
>
> The internet is full of "prompt templates" and "magic phrases" that supposedly unlock better AI output. Most of them are gimmicks. Adding "think step by step" or "you are an expert" can help marginally, but they're not the game-changer people claim.
>
> The real skill isn't finding the right words — it's providing the right *information*. Context engineering is about substance, not syntax. A well-structured brief with relevant details, clear constraints, and a concrete example will outperform any "magic prompt" every time.

> **Think about this before reading on**
>
> What's the difference between "finding the right words" and "providing the right information" when talking to AI? Why does this distinction matter?

<details>
<summary>Hint</summary>

Think about magic prompt templates vs. actually briefing the AI with relevant details.

</details>

Here's the mental shift: you're not writing a prompt. You're designing an input.

> **Interactive**
>
> This unit has an interactive exercise (`prompt-lab`) that runs in the ThinkModel reader at https://thinkmodel.ai. It cannot be reproduced in plain text.

And the quality of that input determines the quality of the output more than any other single factor — including which AI model you use.

**Knowledge check —** What's the key difference between "prompt engineering" and "context engineering"?

- **A.** Prompt engineering is the beginner version, and context engineering is the expert one
- **B.** Context engineering needs coding to feed the model data, while prompting is just typing
- **C.** Prompt engineering tunes the wording; context engineering designs the information given
- **D.** They are two names for one practice, since both are about getting better output

<details>
<summary>Show answer</summary>

**C. Prompt engineering tunes the wording; context engineering designs the information given**

Exactly. Prompt engineering implies tweaking words to game the system. Context engineering is about providing the right information: who you are, what you need, who it's for, what good looks like, and what to avoid. It's about substance, not syntax — and it produces dramatically better results because the AI has to guess less.

</details>

> **Think about this before reading on**
>
> If everyone has access to the same AI, why do some people get dramatically better results? What's the real differentiator?

<details>
<summary>Hint</summary>

Think about context engineering — it's not about the tool, it's about how you use it.

</details>

## Live Demo

**Step 1 — The naked prompt:** Ask the AI:

```prompt
Write a cover letter for a marketing job.
```

Read the result. It's probably generic and could apply to anyone.

**Step 2 — Add identity context:** Try:

```prompt
I'm a 17-year-old applying for my first marketing internship at a local sneaker brand. I run a TikTok account with 2,000 followers where I review sneakers. I have no formal work experience. Write a cover letter.
```

**Step 3 — Add audience and tone context:** Add:

```prompt
The company is small, casual, and values creativity over credentials. The hiring manager is 28 and posted the job on Instagram. Keep the tone conversational but professional. Under 250 words.
```

**Step 4 — Add examples and constraints:** Add:

```prompt
Here's a cover letter style I like: [paste an example]. Don't use phrases like 'I am writing to express my interest' or 'I am a hard worker.' Open with something that shows I understand their brand.
```

**Step 5 — Compare all four.** Put them side by side. The first one could have been written by anyone for anything. The last one sounds like it was written by you, for this specific job, by someone who gets the brand. Same AI. Same model. The only thing that changed was the context you provided.

> **Without context**
>
> "Write a cover letter for a marketing job." → Generic, formal, could apply to anyone applying for any marketing role. Uses clichéd phrases. Has no personality, no specificity, no sense of who the applicant is or what company they're applying to.

> **With full context**
>
> Identity + audience + tone + examples + constraints → Specific to this applicant, this company, this role. Conversational but professional. Opens with brand knowledge. Avoids clichés. Reads like it was written by someone who actually cares about sneakers. Same model, dramatically different output.

<details>
<summary>Tip: Try this: Build a context template for tasks you repeat</summary>

If you use AI regularly for similar tasks (writing emails, summarizing notes, drafting social posts), create a reusable context template. Include your standard role/audience/tone information and swap out the specific content each time. You'll get consistently better output without rebuilding context from scratch.

</details>

## Why This Matters

Context engineering is the highest-leverage skill you can develop with AI right now. Not because it's a clever trick, but because it's how you convert AI from a generic text generator into a personalized, powerful tool.

Everyone has access to the same AI. The people getting dramatically better results aren't using a secret version. They're providing better context. They're thinking harder about what the AI needs to know to do the job well.

This is also a career skill. In every industry — from marketing to medicine to law — the people who can effectively direct AI tools are becoming disproportionately valuable. "I'm good at AI" increasingly means "I'm good at figuring out what to tell AI so it produces great work."

And it's an efficiency skill. Remember: every token costs money. A well-structured input that gets the right answer on the first try is cheaper and faster than five rounds of back-and-forth with vague prompts.

**Knowledge check —** You ask AI to write an email and the output is generic and unhelpful. The most effective fix is to:

- **A.** Switch to a bigger model, since generic output means this one is too weak for email
- **B.** Add context: who you are, who it is for, the tone, and what to include or avoid
- **C.** Regenerate until one looks right, since the same input gives better output eventually
- **D.** Tell it to try harder and be more creative, so it puts more effort into the draft

<details>
<summary>Show answer</summary>

**B. Add context: who you are, who it is for, the tone, and what to include or avoid**

Context is the fix. The AI didn't produce bad output because it's bad at emails — it produced generic output because you gave it generic input. Adding who, what, for whom, tone, constraints, and examples gives the AI enough information to produce something specific and useful. This is context engineering in action.

</details>

## The Challenge

### Challenge: The Context Engineering Workout

*Time: 30 minutes*

Pick a real task you'd actually use AI for. Then build the input in layers:

Now lay all five outputs side by side. Write 3-4 sentences describing what changed at each layer and which addition made the biggest difference.

- [ ] **Layer 1 — The raw request** — What do you need? One sentence. Send it. Save the output.
- [ ] **Layer 2 — Add role and audience** — Who are you? Who is this for? Resend. Save.
- [ ] **Layer 3 — Add format and constraints** — Length, tone, structure, what to include, what to avoid. Resend. Save.
- [ ] **Layer 4 — Add examples** — Paste an example of what "good" looks like. Or describe it. Resend. Save.
- [ ] **Layer 5 — Add the edge case** — Think about what could go wrong. Add a constraint that prevents it. Resend. Save.

**Success criteria:** The Layer 5 output is dramatically better than Layer 1, and you can articulate which context additions had the most impact.

## Key Takeaways

1. Context engineering is the art of giving AI everything it needs to do its best work — who you are, what you need, what good looks like, and what to avoid.
2. It's the highest-leverage skill in using AI. Same model, same cost — dramatically better output.
3. Think of it as briefing an extremely capable intern. The better the brief, the better the work.
4. "Prompt engineering" is about tweaking words. Context engineering is about designing the complete information environment.

## The Rabbit Hole

**Type:** Article
**Title:** Effective Context Engineering for AI Agents — Anthropic
**URL:** https://anthropic.com/engineering/effective-context-engineering-for-ai-agents
**Description:** The official guide from the people who build Claude. Explains context engineering as a design discipline, not a hack. Technical but accessible.

## References

| Type | Title | URL | Description |
|------|-------|-----|-------------|
| Article | Anthropic, "Effective Context Engineering for AI Agents" (2025) | https://anthropic.com/engineering/effective-context-engineering-for-ai-agents | The definitive guide to context engineering from Claude's makers |
| Article | Simon Willison, "Context Engineering" (June 2025) | https://simonwillison.net/2025/jun/27/context-engineering/ | Respected developer's perspective on the shift from prompting to context |
| Article | Phil Schmid, "The New Skill in AI is Not Prompting, It's Context Engineering" | https://philschmid.de/context-engineering | Clear practical guide to context engineering principles |
| Reference | Tobi Lütke on context engineering | https://x.com/tobi/status/1935533422589399127 | The Shopify CEO's post that popularized the term |
| Video | Tina Huang, "Context Engineering Clearly Explained" (~12 min) | https://youtube.com/results?search_query=Tina+Huang+Context+Engineering+Clearly+Explained | Accessible video walkthrough of context engineering |
| Tutorial | DataCamp, "Context Engineering: A Guide With Examples" | https://datacamp.com/blog/context-engineering | Step-by-step tutorial with practical examples |
| Tool | Anthropic Prompt Engineering Tutorial (free, 9 chapters) | https://github.com/anthropics/prompt-eng-interactive-tutorial | Interactive tutorial covering context engineering fundamentals |
| Docs | Anthropic Prompting Best Practices | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices | Official best practices from Anthropic |
| Docs | Anthropic Prompt Engineering Overview | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview | Complete overview of prompt and context engineering techniques |
| Book | Ethan Mollick, *Co-Intelligence: Living and Working with AI* (2024) | — | How to think about AI as a collaborator, not just a tool |

## Glossary

**Context engineering** — Giving AI everything it needs to do a great job: who you are, what you want, what good looks like, what to avoid, and any helpful background info.

**context window** — The maximum amount of text an AI can "hold in mind" at once, like its working memory. Anything outside this limit is invisible to the AI.

**few-shot prompting** — Giving the AI one or more examples of what you want in your prompt so it can follow the pattern. Even one example makes a big difference.

**prompt engineering** — The practice of carefully wording your AI inputs to get better results. It's a useful starting point, but context engineering (giving AI the right information) matters much more than finding "magic words."
