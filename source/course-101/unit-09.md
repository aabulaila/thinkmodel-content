# Unit 09: AI That Does Things

*Last updated: May 21, 2026. Video embeds and links were refreshed on this date; the agent concepts still hold.*

## The Hook

Everything you've used AI for so far follows the same pattern: you type something, it types something back. You ask, it answers. It's a conversation.

But what if AI could actually *do things*? Not just talk about sending an email — actually send it. Not just suggest a plan — actually execute the steps. Not just write code — actually run it, test it, fix the bugs, and try again.

That's what AI agents do. They go beyond a {{term:chatbot|An AI you have a conversation with by typing messages back and forth. Chatbots can only generate text, not take real-world actions.}}. And the shift from "AI that talks" to "AI that acts" is the biggest jump in capability since AI learned to use language in the first place.

:::embed{type="video" title="The Escalation of Autonomy" src="/api/storage/public-objects/videos/9-The_Escalation_of_Autonomy.mp4" youtubeId="MluLA2kGzNM"}
:::

:::socratic
question: What's the difference between AI that gives you advice on how to do something versus AI that actually does it for you? What new risks come with AI that can take actions?
hint: Think about what happens when a chatbot gives you a wrong answer versus what happens when an agent sends the wrong email or deletes the wrong file.
concept: AI agents can take real-world actions, which means their mistakes have real-world consequences — not just bad text, but bad actions.
:::

## The Core Concept

An {{term:agent|An AI system that pursues a goal in a loop: it breaks the goal into steps, uses tools, checks the result, adjusts, and keeps going until the job is done — without a human prompting each step. It actually does things, not just chats.}} is an AI system that can break a goal into steps, use tools to complete those steps, check its own work, and loop until the job is done — with or without human supervision.

:::analogy-target{id="p-agent-tools"}
The key word is "tools." A chatbot can only generate text. An agent can search the web, run code, read files, interact with apps, browse websites, and call other {{term:API|Application Programming Interface. A way for software programs to talk to each other, like a menu that lets one app request specific things from another.}}s. It's the difference between someone who can tell you how to cook dinner and someone who can actually walk into the kitchen and cook it.
:::

Lilian Weng at OpenAI wrote what many consider the definitive blog post on AI agents, breaking them down into three components: **Planning** (how do I break this goal into steps?), **Memory** (what have I already tried, and what did I learn?), and **{{term:Tool use|An AI agent's ability to interact with outside systems like searching the web, running code, reading files, and sending emails. This is what turns AI from a text generator into something that can take action.}}** (what external capabilities can I call on?).

Here's a concrete example. You tell an AI agent: "Find the cheapest flight from Amman to London in June, compare three options, and send me a summary by email." A chatbot would generate a paragraph about how to search for flights. An agent would actually go to flight comparison websites, search for dates, compare prices, format a summary, and send you an email — all autonomously.

:::callout{type="case-study"}
## Claude's computer use: AI that sees your screen
In October 2024, Anthropic announced that Claude could use computers — literally. Claude became the first frontier AI model to operate a computer in public beta: it looks at the screen, moves the cursor, clicks buttons, types text, and navigates software interfaces.

In demonstrations, Claude filled out forms, navigated multi-step web workflows, and used desktop applications — all by "seeing" screenshots and deciding where to click next. The system isn't perfect: it's slow compared to a human, sometimes clicks the wrong button, and can get stuck in loops. But it crossed a fundamental threshold: AI that can use any software a human can use, without needing a custom API.

This matters because most business software doesn't have APIs. The only interface is the screen. An AI that can use the screen can, in principle, automate anything a human does on a computer.
:::

OpenAI followed with their own agent infrastructure: the Responses API and Agents SDK, along with built-in tools for web browsing, file analysis, and code execution. Google, meanwhile, integrated agent capabilities into Gemini.

Then there's Devin, built by Cognition Labs, described as the "first fully autonomous AI software engineer." Devin can set up coding environments, search documentation, write code, run tests, debug errors, and submit pull requests — all on its own. Whether Devin lives up to the marketing is debated (some demos were found to be misleading), but the direction is clear.

:::callout{type="warning"}
## Common misconception: Agents are just smarter chatbots
Agents aren't chatbots with better language skills. The difference is structural. A chatbot generates text in response to input. An agent plans a sequence of actions, executes them using external tools, observes the results, and adapts its plan based on what happened.

This means agent failures are fundamentally different from chatbot failures. When a chatbot is wrong, you get bad text. When an agent is wrong, it can take bad *actions* — sending the wrong email, deleting the wrong file, purchasing the wrong item. The stakes are categorically higher, which is why {{term:human-in-the-loop|A design rule where humans review and approve AI actions at key moments, like checking before it sends an email or spends money. Important because AI agent mistakes can pile up fast.}} design is so important.
:::

The critical concept to hold onto is **human-in-the-loop**. Right now, the best agent workflows keep a human checkpoint at key moments — approve this before sending, review this before publishing, confirm before spending money. Fully autonomous agents make mistakes, and those mistakes compound: an error in step 2 can cascade through steps 3, 4, and 5 before anyone notices.

The progression goes like this:

**Chatbot** → answers questions when asked
**Assistant** → answers questions + uses tools when directed
**Agent** → receives a goal + plans steps + uses tools + executes + checks its own work

We're currently somewhere between assistant and agent. The trajectory is clear. What matters now is understanding the capabilities *and* the limits — because the limits are where the humans still matter most.

:::socratic
question: An AI agent makes a mistake at step 2 of a 5-step task, but nobody checks until the end. What happens to steps 3, 4, and 5? Why is this different from a chatbot making a mistake?
hint: Think about how each step builds on the previous one. If step 2 is wrong, what happens to everything that follows?
concept: Agent errors compound — a mistake in one step cascades through all subsequent steps. Unlike chatbot errors (which are contained to one bad response), agent errors can cause real-world damage that multiplies.
:::

:::quiz{id="u09-q1"}
question: What fundamentally separates an AI agent from a chatbot?
correct: A
A: Agents plan steps, call outside tools, and carry out real actions
B: Agents run on bigger models, so raw intelligence is the real gap
C: Agents keep a longer chat history, so they recall more of what you said
D: Agents word their answers more carefully, so they get things wrong less
feedback_correct: That's the key distinction. Chatbots generate text. Agents plan, act, and use tools. A chatbot can tell you how to book a flight. An agent can actually search flights, compare prices, and send you the results. The difference is action, not intelligence — and it changes both what's possible and what can go wrong.
feedback_incorrect: The answer is A. Agents don't run on smarter models, and a longer chat history is something chatbots have too. They also make plenty of mistakes, often bigger ones, because errors in action compound across steps. The fundamental difference is that agents can plan sequences of actions, use external tools (web search, code execution, file management), and execute tasks autonomously. It's the shift from generating text to taking action.
:::

## Live Demo

**Step 1:** Open Claude ([claude.ai](https://claude.ai)) or ChatGPT. Give it a multi-step task:

```prompt
Research the top 3 AI companies by revenue in 2025, create a comparison table with their revenue, number of employees, and flagship product, and write a one-paragraph analysis of who's winning and why.
```

Watch how it breaks the task into steps, searches for information, and synthesizes.

**Step 2:** Now try a tool-use task. Ask Claude to analyze a piece of text:

```prompt
Read the following article [paste a short article] and create a bullet-point summary, identify the three strongest claims, and rate each claim's credibility from 1-5 with an explanation.
```

Notice: it's not just answering — it's processing, analyzing, and structuring.

**Step 3:** If you have access to ChatGPT's agent mode, try:

```prompt
Find a recipe for a chocolate cake that takes under 45 minutes, convert the measurements to metric, and format it as a printable recipe card.
```

Watch it browse, convert, and format.

**Step 4:** Try deliberately giving it a task where it should ask for clarification instead of guessing:

```prompt
Book the thing for next Thursday.
```

Does it ask for details, or does it guess?

:::compare
before_label: Chatbot (text only)
before: You ask: "How do I find cheap flights to London?" The AI generates a helpful paragraph about flight comparison websites, tips for finding deals, and when to book. You read it, then go do all the searching yourself. The AI talked about the task but didn't do any of it.
after_label: Agent (text + action)
after: You ask: "Find the cheapest flight from Amman to London in June and email me a comparison." The AI searches flight websites, compares prices across dates, creates a formatted comparison table, and sends it to your email. The AI didn't just discuss the task — it completed it.
:::

## Why This Matters

The shift from chatbots to agents changes what's possible for individuals. Tasks that used to require a team — research, data analysis, multi-step project execution — can now be initiated by one person and executed by an AI agent.

But it also changes the stakes. A chatbot that gives bad advice is annoying. An agent that takes bad action — sends the wrong email, deletes the wrong file, publishes the wrong content — creates real damage. The evaluation skills you learned in Unit 08 become even more critical when AI is acting, not just talking.

The students who understand agents early will have a genuine advantage, because they'll know both what to delegate and what to keep hands-on. That judgment — when to let the agent run and when to stay in the loop — is the new management skill.

:::socratic
question: If AI agents can now take real-world actions — sending emails, modifying files, browsing the web — what criteria would you use to decide which tasks are safe to fully delegate versus which ones need human checkpoints?
hint: Think about reversibility. Can you undo a sent email? A deleted file? A published post? How does the cost of an error change your answer?
concept: The decision to delegate to an agent should be based on reversibility and stakes — low-stakes, reversible tasks are safer to automate, while high-stakes or irreversible actions need human checkpoints.
:::

:::quiz{id="u09-q2"}
question: Why is "human-in-the-loop" especially important for AI agents (compared to chatbots)?
correct: D
A: Agents reason less well than chatbots, so a human must check the logic
B: The law now requires a human to approve every action an AI system takes
C: Chatbots and agents fail in the same way, so both need the same checks
D: Agent errors compound across steps, and the actions they take are real
feedback_correct: This is the critical insight. When a chatbot is wrong, you get bad text — annoying but contained. When an agent is wrong, it takes bad *actions* that compound: an error in step 2 feeds into steps 3, 4, and 5 before anyone notices. Since agents send emails, modify files, and interact with real systems, the damage from compounding errors is real and potentially irreversible.
feedback_incorrect: The answer is D. Agents aren't worse at reasoning, and while regulations are emerging, no law requires sign-off on every action. The key insight is that agent errors *compound*. A chatbot error is contained to one bad response. An agent error in step 2 can cascade through every subsequent step, and because agents take real actions (not just generate text), the consequences — wrong emails sent, wrong files modified — are concrete and potentially irreversible. That's not the same failure mode as a chatbot's.
:::

## The Challenge

:::challenge{title="Agent Workflow Designer" time="35 minutes"}
Design and test a real multi-step workflow using AI:

- [ ] **Identify a real task** — Pick a multi-step task in your life (planning an event, researching a purchase, organizing notes for a class, creating a study schedule).
- [ ] **Break it into 5-8 steps** — List each discrete step the task requires.
- [ ] **Assign each step** — For each step, decide: should a human do this, should AI do this, or should AI do this with human review?
- [ ] **Execute** — Use an AI tool to actually execute the steps you assigned to AI. Document what worked and what didn't.
- [ ] **Post-mortem** — Write a brief review: Where did the AI save time? Where did it need correction? Where would you change the human/AI split?

**Success criteria:** You designed a real workflow with clear human-AI task division, executed it, and can articulate where AI was strong, where it needed oversight, and where a human was irreplaceable.
:::

## Key Takeaways

1. AI agents go beyond conversation — they plan, use tools, execute tasks, and check their own work.
2. The progression is: chatbot → assistant → agent. We're in the transition between assistant and agent.
3. "Human-in-the-loop" is essential: agents make mistakes that compound across steps. Always build in checkpoints.
4. The new skill isn't just using AI — it's knowing what to delegate and what to keep human.

## The Rabbit Hole

**Type:** Article
**Title:** A Practical Guide to Building Agents — OpenAI
**URL:** https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf
**Description:** The clearest overview of agent architecture, design patterns, and guardrails, from the company pushing hardest on building them. Free PDF.

## References

| Type | Title | URL | Description |
|------|-------|-----|-------------|
| Article | Lilian Weng, "LLM Powered Autonomous Agents" (foundational post) | https://lilianweng.github.io/posts/2023-06-23-agent/ | The definitive technical overview of agent architecture |
| Article | Anthropic, "Introducing Computer Use" (Oct 2024) | https://anthropic.com/news/3-5-models-and-computer-use | Claude becomes the first frontier model to operate a computer |
| Article | OpenAI, "New Tools for Building Agents" (March 2025) | https://openai.com/index/new-tools-for-building-agents/ | OpenAI's agent infrastructure: Responses API and Agents SDK |
| Guide | OpenAI, "A Practical Guide to Building Agents" (free PDF) | https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf | Comprehensive guide to agent design patterns and guardrails |
| Reference | Wikipedia, "Devin AI" | https://en.wikipedia.org/wiki/Devin_AI | The "first autonomous AI software engineer" — capabilities and controversy |
| Tool | Claude | https://claude.ai | Anthropic's AI assistant with computer use capabilities |
| Tool | ChatGPT (Agent Mode) | https://chatgpt.com | OpenAI's AI assistant with browsing and code execution |
| Tool | OpenAI Playground (tool use / function calling) | https://platform.openai.com/playground | Test agent capabilities with function calling |
| Book | Ethan Mollick, *Co-Intelligence* (2024) | — | Framework for understanding AI as a collaborator with agency |