# Unit 06: Words Are the New Code

*Last updated: May 21, 2026. Video embeds and links were refreshed on this date; the prompting principles stand.*

## The Hook

For decades, if you wanted to tell a computer what to do, you had to learn its language. C++. Python. JavaScript. You needed to understand syntax, variables, loops, functions — an entire vocabulary that most people never learned because it felt like learning math on top of math.

Then, practically overnight, the interface changed. You could just... type what you wanted. In English. In Arabic. In whatever language you think in. And the computer would do it.

This is the most important shift in the history of human-computer interaction. The interface to the most powerful technology ever built is now the thing you already know how to do: talk.

> **Video: Words Are the New Code**
>
> https://www.youtube.com/watch?v=gBVG0atS71U
>
> ThinkModel video — CC BY 4.0, the same licence as the text.

> **Think about this before reading on**
>
> For decades you needed to learn programming languages to tell a computer what to do. Now you can just type in English. Who benefits most from this change, and who might lose out?

<details>
<summary>Hint</summary>

Think about how many people in the world can write code versus how many can write a sentence.

</details>

## The Core Concept

Andrej Karpathy — one of the founders of OpenAI and one of the most respected AI researchers in the world — posted something in January 2023 that caught fire: "The hottest new programming language is English." It got over 10 million views. And he wasn't joking.

What he meant is that **natural language interface** has become the primary way humans interact with powerful AI systems. You don't need to write code to build an app, generate an image, analyze data, or automate a workflow. You describe what you want in words, and the AI does it.

This sounds like a minor convenience. It's actually a revolution in access.

Think about it this way. Before this shift, the number of people who could "program" a computer was maybe 30 million worldwide — the professional software developers. Now, the number of people who can instruct an AI to do complex tasks is basically everyone who can form a sentence. That's billions of people who went from being consumers of technology to potential creators of it.

Karpathy later expanded this idea into what he called **vibe coding** — the practice of describing what you want to build in natural language and letting AI generate the code. You focus on the vision, the AI handles the implementation. The term went so viral it became Collins Dictionary's Word of the Year in 2025.

> **Case study: From "learn to code" to "learn to communicate"**
>
> In 2025, a journalist in Kenya with no coding background used AI building tools to create a team management application for a fintech company. A teacher in Ohio used natural language to build a custom quiz app for her classroom. A 14-year-old built a functioning weather app and published it to the internet in an afternoon.
>
> None of them wrote a line of code. They described what they wanted, reviewed what the AI built, and iterated until it worked. The barrier to building software didn't lower — it effectively disappeared.
>
> This doesn't make software engineers obsolete. It makes everyone else capable of building simple tools. The role of the engineer shifts from writing all the code to designing complex systems, handling edge cases, and ensuring reliability at scale.

But here's the part most people miss: just because the interface is language doesn't mean all language works equally well. A vague **prompt** gets a vague answer. A specific, well-structured prompt gets a dramatically better one. The skill isn't "knowing how to type" — it's knowing how to communicate clearly, precisely, and with the right amount of context.

This turns out to be a very human skill. People who write well, think clearly, and can explain what they want — those people are suddenly the most effective users of the most powerful technology on the planet. Coding ability matters less than it used to. Communication ability matters more than it ever has.

You probably already know this instinctively. You've noticed that when you ask AI a lazy question, you get a lazy answer. When you give it detail, specificity, examples, and constraints, the output jumps in quality. That gap between a lazy prompt and a great one is enormous — and learning to close it is what the next unit is all about.

> **Think about this before reading on**
>
> If natural language is now the interface to powerful AI, does that mean people who speak English have an unfair advantage? What about people who speak less-represented languages?

<details>
<summary>Hint</summary>

Think back to Unit 03 — training data is dominated by English. How does that affect the quality of AI responses in other languages?

</details>

**Knowledge check —** When Karpathy said "the hottest new programming language is English," he meant:

- **A.** Traditional programming languages are obsolete, so nobody needs to learn code now
- **B.** Natural language has become the primary way people instruct powerful AI systems
- **C.** Anyone who can type gets the same results, so wording a request no longer matters
- **D.** Software engineers are being replaced, since AI writes the code they used to write

<details>
<summary>Show answer</summary>

**B. Natural language has become the primary way people instruct powerful AI systems**

That's the core insight. The shift from code to conversation as the interface didn't just change how we interact with computers — it changed who can interact with them. Anyone who can form a clear sentence can now instruct AI to do complex tasks. That's a shift from 30 million developers to billions of potential creators.

</details>

## Live Demo

**Step 1 — The lazy prompt:** Open Claude or ChatGPT. Type:

```prompt
Write something about climate change.
```

Read the response. It's probably generic, broad, and forgettable.

**Step 2 — Add specificity:** Now type:

```prompt
Write a 200-word explanation of why sea levels are rising, aimed at a 14-year-old who's smart but has never studied climate science.
```

Read the difference. Same topic, dramatically better output.

**Step 3 — Add constraints and format:** Try:

```prompt
Write a 200-word explanation of why sea levels are rising, aimed at a 14-year-old. Use exactly one real-world example. End with a question that would make them want to learn more. Don't use the word 'important.'
```

Notice how constraints force the AI to produce something more specific and creative.

**Step 4 — Compare across tools:** Copy your best prompt and paste it into two or three different AI tools (Claude, ChatGPT, Gemini). Same words in, different output. This shows that the AI is a variable, but so is your input — and your input is the variable you control.

**Step 5 — The meta-test:** Ask the AI:

```prompt
What made my last prompt better than my first one?
```

See if it can articulate the principles you just discovered through doing.

> **Vague prompt**
>
> "Write something about climate change." → Generic, broad, forgettable output. Could apply to any audience, any purpose. Reads like a middling encyclopedia entry. The AI is guessing at everything: tone, audience, length, angle.

> **Specific prompt**
>
> "Write a 200-word explanation for a 14-year-old, one real example, end with a question, don't say 'important.'" → Focused, engaging, appropriately pitched. The constraints force creativity and specificity. Same AI, dramatically better output.

<details>
<summary>Deep dive: Why vague prompts produce vague output</summary>

When you give AI a vague prompt, you're asking it to predict text based on the broadest possible pattern. "Write something about climate change" matches millions of climate-related texts in training data — so the AI averages across all of them, producing something generic.

Specificity narrows the pattern space. When you add audience ("14-year-old"), format ("200 words"), and constraints ("don't say 'important'"), you're filtering the prediction toward a much smaller, more specific set of patterns. The AI has less room to default to generic output and more information to produce something tailored.

This is exactly why context engineering (Unit 07) is the highest-leverage skill in AI — it's about controlling the prediction space.

</details>

## Why This Matters

The shift from code to conversation as the interface isn't just a tech story — it's a power story. Historically, the ability to make computers do useful things was gatekept by a technical skill most people didn't have. Now that gate is open.

This means the skills that make you effective with AI are the same skills that make you effective in life: clear thinking, precise communication, the ability to describe what you want and why. These are writing skills. Thinking skills. Communication skills.

It also means that people who only know how to make vague requests — "write me something good" — will get mediocre results, while people who craft detailed, structured inputs will get results that look like they hired a professional. The gap between users will be enormous, and it won't be based on technical ability. It'll be based on how well you communicate.

> **Think about this before reading on**
>
> If clear communication is now the most important "technical" skill, what does that mean for how schools should teach? Should writing and communication classes be treated as seriously as coding or math?

<details>
<summary>Hint</summary>

Think about what skills actually matter when anyone can instruct AI with words. What separates effective users from ineffective ones?

</details>

**Knowledge check —** Two people use the same AI model for the same task. Person A gets mediocre output. Person B gets excellent output. The most likely explanation is:

- **A.** Person B gave more specific input: clear context, constraints, and examples
- **B.** Person B pays for a higher tier, which quietly upgrades the same model
- **C.** Person B has used the tool for months, so it already knows what the task needs
- **D.** The model is random, so quality is mostly luck and Person B got a better roll

<details>
<summary>Show answer</summary>

**A. Person B gave more specific input: clear context, constraints, and examples**

This is the core lesson. Same model, same task — the difference is the input. Person B gave the AI more to work with: specificity, constraints, audience, format, examples. Most assistants do carry some memory between chats now, but what they keep is incidental — scraps picked up along the way, not the brief this task needed. Your input quality is still the single biggest variable you control.

</details>

## The Challenge

### Challenge: The Communication Ladder

*Time: 25 minutes*

Pick one task (write an email, explain a concept, create a study plan, draft a social media post — anything you'd actually use AI for).

- [ ] **Write the worst possible prompt** — One vague sentence. Send it. Save the output.
- [ ] **Write a slightly better version** — Add who it's for and what you want. Save the output.
- [ ] **Write a good version** — Add tone, length, constraints, and an example of what "good" looks like. Save the output.
- [ ] **Write the best version you can** — Include context, audience, format, examples, and what to avoid. Save the output.
- [ ] **Compare all four** — Screenshot all four responses side by side. The visual difference tells the story.

**Success criteria:** The quality gap between your worst and best prompt is dramatic and visible, and you can articulate what made each version better.

## Key Takeaways

1. Natural language is now the interface to the most powerful technology ever built. You don't need to code — you need to communicate.
2. This shift democratized access: billions of people went from technology consumers to potential technology creators.
3. The quality of your output depends on the quality of your input. Vague prompts produce vague results.
4. Clear thinking and precise communication are now technical skills.

## The Rabbit Hole

**Type:** Video
**Title:** Intro to Large Language Models — Andrej Karpathy
**URL:** https://youtube.com/watch?v=zjkBMFhNj_g
**Description:** 60-minute talk explaining how LLMs work as "operating systems" where natural language is the programming language. Dense but accessible, from the person who coined the concept.

> **Video: Intro to Large Language Models — Andrej Karpathy (60 min)**
>
> https://www.youtube.com/watch?v=zjkBMFhNj_g
>
> Third-party video — not covered by this repository's licence.

## References

| Type | Title | URL | Description |
|------|-------|-----|-------------|
| Video | Andrej Karpathy, "Intro to Large Language Models" (60 min) | https://youtube.com/watch?v=zjkBMFhNj_g | How LLMs work as operating systems with language as the interface |
| Reference | Karpathy, "The hottest new programming language is English" (2023) | https://x.com/karpathy/status/1617979122625712128 | The tweet that captured the shift — 10M+ views |
| Article | Wikipedia, "Vibe Coding" — history and context | https://en.wikipedia.org/wiki/Vibe_coding | How the concept went from tweet to Collins Word of the Year |
| Article | MLNotes, "The Hottest New Programming Language is English" | https://mlnotes.substack.com/p/the-hottest-new-programming-language | Deep analysis of what the language-as-interface shift means |
| Tool | Claude | https://claude.ai | Anthropic's AI assistant — strong at nuanced writing and reasoning |
| Tool | ChatGPT | https://chat.openai.com | OpenAI's AI assistant — broad integrations and voice mode |
| Tool | Gemini | https://gemini.google.com | Google's AI assistant — tight integration with Google products |
| Book | Don Norman, *The Design of Everyday Things* (revised 2013) | — | The classic on interface design — now more relevant than ever |

## Glossary

**natural language interface** — A way of talking to a computer using regular everyday language instead of code. AI made this possible by learning to understand what you mean.

**prompt** — The message you type into an AI, whether it's a question, instruction, or description. The clearer your prompt, the better the AI's answer.

**vibe coding** — Describing what you want to build in plain language and letting AI write the code for you. You focus on the idea, the AI handles the technical stuff. Collins Dictionary's Word of the Year 2025.
