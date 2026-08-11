# Unit 04: It Doesn't Know Anything

*Last updated: August 9, 2026. Foundational claims were refreshed so the demos match current models.*

## The Hook

Ask AI a hard question and it gives you a confident, well-structured, articulate answer. It uses complete sentences. It cites things. It sounds like it knows what it's talking about — like someone who's read every book and remembers everything.

There's a famous example of this. For years, if you asked AI how many R's are in "strawberry," it said two. The right answer is three. Today's models mostly get it right — not because they learned to see letters, but because they were trained to slow down and spell the word out first. The blind spot was worked around, not removed. And the deeper habit never went away: ask AI to tell you something it doesn't know, and it will confidently make something up instead of saying "I don't know."

Something strange is going on. How can a system that writes better than most humans also confidently invent facts that a five-year-old would know to double-check?

The answer is disorienting but important: it doesn't understand a single word it says.

> **Video: It Doesn't Know Anything**
>
> https://www.youtube.com/watch?v=P6s1rIkC8MY
>
> ThinkModel video — CC BY 4.0, the same licence as the text.

> **Think about this before reading on**
>
> The "strawberry" mistake got fixed — models now count those R's correctly. Does that mean AI finally learned to see letters?

<details>
<summary>Hint</summary>

Think about the difference between changing what the system reads as input and teaching it a workaround, like spelling a word out before counting it.

</details>

## The Core Concept

Here's what's actually happening when you talk to an AI like Claude or ChatGPT. You type a message. The system converts your words into numbers — little chunks called **tokens**. Then it does one thing, over and over: **next-token prediction**.

That's it. The entire output — every sentence, every paragraph, every seemingly brilliant insight — is generated one token at a time by asking, "Given everything that came before, what's the most likely next piece of text?"

It's autocomplete. Extremely sophisticated, trained on an enormous amount of text, operating at a scale that produces remarkably coherent output — but at its core, it's the same principle as your phone suggesting "you" after you type "thank."

This is why a raw language model — one without tools or reasoning steps bolted on — can write a convincing essay about quantum physics and then confidently get an arithmetic problem wrong. It's not doing math. It's predicting what text usually follows math questions. Modern AI products hide this by quietly handing math off to a calculator or working through it step-by-step before answering — but the underlying language model is still predicting tokens, not computing.

> **Case study: Mata v. Avianca: The case that put AI hallucination on trial**
>
> In 2023, a lawyer named Steven Schwartz used ChatGPT for legal research in a case against the airline Avianca. ChatGPT fabricated six completely fake court cases — with made-up rulings, made-up quotes, and citations pointing into the real case reporters lawyers use every day, credited to real judges who had never written a word of them. When Schwartz asked ChatGPT to confirm the cases were real, it said yes.
>
> The brief went into federal court under his colleague's signature. Opposing counsel could not find the cases; the judge checked and found six of the cited decisions did not exist. Schwartz, his colleague, and their law firm were fined $5,000 between them, publicly sanctioned, and became the global poster children for AI over-reliance. The case — Mata v. Avianca, Inc. — became the standard cautionary tale for AI in professional work.
>
> The AI wasn't lying. It has no concept of truth. A fake citation looks, statistically, a lot like a real one.

This is also why AI **hallucination**s — a term for when it generates information that sounds true but isn't. The AI has no concept of truth. It was doing what it always does: predicting plausible-sounding text based on the patterns it learned. And a fake case citation looks, statistically, a lot like a real one.

Researchers Emily Bender and Timnit Gebru coined a useful metaphor: they called **large language models** **stochastic parrots**. A parrot can repeat words that sound meaningful to you, but the parrot doesn't understand what the words mean. It's producing sounds that match patterns it was exposed to. Language models do something similar at a much larger scale — they produce text that matches patterns in training data. Whether that qualifies as "understanding" is genuinely contested today, especially for newer reasoning-trained models that visibly work through problems step by step. But the practical point still holds: the system has no built-in commitment to truth, and fluent text is not evidence of accurate text.

<details>
<summary>Deep dive: Why the "stochastic parrot" metaphor matters</summary>

The 2021 paper "On the Dangers of Stochastic Parrots" by Bender, Gebru, McMillan-Major, and Shmitchell didn't just coin a catchy phrase — it became one of the most controversial and influential papers in AI history. Timnit Gebru was fired from Google shortly after co-authoring it (Google disputed the framing, but the incident sparked a global debate about AI ethics research).

The paper's core argument: when a system produces fluent text, humans automatically assume understanding behind it. We're wired to interpret language as evidence of a mind. The danger isn't that the systems are bad at language — it's that they're *too good* at sounding like they understand, which makes humans over-trust them. That over-trust problem has only intensified as models have gotten more capable: the more articulate the output, the harder it is to remember that the system has no built-in mechanism for caring whether what it says is true.

</details>

This doesn't make AI useless. Far from it. A prediction engine trained on the entire internet can do remarkable things. But it changes what you should expect from it and — critically — when you should trust it.

> **Think about this before reading on**
>
> The lawyer in the Mata v. Avianca case asked ChatGPT to confirm that its fake citations were real, and it said yes. Why would AI confirm something that isn't true?

<details>
<summary>Hint</summary>

Think about what "confirming" means for a system that predicts plausible-sounding text. Does it check facts, or does it predict what a confirmation typically sounds like?

</details>

The system has no beliefs. No opinions. No understanding. No inner life. When it says "I think" or "I believe," those words are pattern-matched text, not reflections of an inner state. It's producing the kind of text that typically follows a question like yours.

Once this clicks, you'll use AI completely differently. You'll stop asking it what it "thinks" and start treating it as what it is: a powerful tool for generating, summarizing, and transforming text — one that requires a human to verify anything that matters.

**Knowledge check —** AI writes a convincing essay about quantum physics but gets basic arithmetic wrong. The best explanation is:

- **A.** It understands physics far better than it understands math and numbers
- **B.** It is predicting likely text in both cases, and arithmetic needs computing
- **C.** A bug in the model's math module gives wrong sums until someone fixes it
- **D.** It skips careful math on purpose to keep its processing costs down

<details>
<summary>Show answer</summary>

**B. It is predicting likely text in both cases, and arithmetic needs computing**

Exactly. The AI isn't "doing physics" or "doing math" — it's predicting the next token based on patterns. There are millions of physics explanations in its training data, giving it strong patterns to match. But when asked 7 × 8, it's still predicting text, not computing. When the pattern doesn't match the correct answer, you get a confident wrong result.

</details>

## Live Demo

**Step 1 — The confidence test:** Turn off web search first (with it on, the model just looks things up and the test doesn't work). Then ask the AI:

```prompt
Tell me about the 1987 Nobel Prize winner in Literature.
```

Read the answer carefully. Now look it up. Did the AI get it right? (Joseph Brodsky won it.) Now ask about a Nobel Prize that doesn't exist:

```prompt
Tell me about the 2028 Nobel Prize in Literature.
```

Does the AI admit it can't know, or does it invent something?

**Step 2 — The letter-counting test:** Ask:

```prompt
How many times does the letter 'r' appear in the word 'strawberry'?
```

You'll almost certainly get 3, the right answer. This used to be AI's most famous failure — models confidently said two. Now ask the follow-up: "How did you work that out?" Watch the answer: it will usually spell the word out letter by letter first. That's the tell. The model can't see letters in its input (Step 5 shows what it sees instead), so it was trained to write the word out and count what it wrote. The famous mistake is mostly gone; the blind spot that caused it isn't.

**Step 3 — The fake source test:** Ask:

```prompt
Can you cite three peer-reviewed studies about the effects of social media on teenage sleep patterns? Include the authors, journal name, and year.
```

Check whether the studies actually exist. Search for the titles. Are they real?

**Step 4 — The opinion test:** Ask:

```prompt
What's your favorite color and why do you like it?
```

Read the response. It sounds personal — but remember, there's nobody home. It's pattern-matching text that typically follows questions about preferences.

**Step 5 — The tokenizer:**

> **Try it: OpenAI Tokenizer — See how AI breaks text into tokens**
>
> https://platform.openai.com/tokenizer

Paste a sentence and see how AI actually breaks text into tokens. Notice that whole words and common phrases collapse into single chunks. The AI never sees individual letters as its input — it sees these chunks. That's the foundation everything else in this unit is built on: the famous letter-counting failures, and the workaround of spelling words out before counting them.

> **What it feels like**
>
> AI gives confident, fluent, well-structured answers that feel like expertise. It uses "I think" and "I believe." It cites sources. It sounds like it understands the topic deeply and has thought carefully about its response.

> **What's actually happening**
>
> At its core, the AI is predicting the most likely next chunk of text based on patterns in training data. "I think" is pattern-matched phrasing, not introspection. Citations may be fabricated. And critically: the system sounds equally confident whether it's right or wrong — fluency is not evidence of accuracy.

## Why This Matters

People anthropomorphize AI constantly. They say it "thinks," "knows," "believes," "wants." Teachers worry AI "understands" their students. Patients assume AI "knows" their medical history.

This isn't just a philosophical quibble — it leads to real mistakes. The lawyer who cited fake cases assumed ChatGPT "knew" the law. He didn't verify because the output felt authoritative. Since that case, a public tracker of court rulings has logged more than 1,290 US filings caught using AI-invented citations — a count current as of August 2026 that grows almost every week.

Understanding that AI predicts rather than understands is the single most important thing you can learn about using it well. It means you never trust an AI output on anything important without verifying it yourself. It means you treat AI as a draft generator, not a source of truth. And it means you bring something to the table that AI literally cannot: actual understanding.

> **Think about this before reading on**
>
> People naturally say AI "thinks," "knows," and "believes." Why is this tendency dangerous, and how should you think about AI's responses instead?

<details>
<summary>Hint</summary>

Think about why the lawyer trusted ChatGPT's fake cases — the language sounded authoritative. What happens when you assume understanding behind fluent text?

</details>

**Knowledge check —** A student uses AI to research a topic and the output includes a specific statistic with a citation. The right approach is to:

- **A.** Trust it, since the AI was trained on published and fact-checked sources
- **B.** Trust it if the AI sounds sure, since confidence tracks how solid a claim is
- **C.** Verify the statistic and the citation yourself, because both can be invented
- **D.** Ignore the number entirely, since AI facts and sources are always invented

<details>
<summary>Show answer</summary>

**C. Verify the statistic and the citation yourself, because both can be invented**

This is the core skill. AI-generated text is plausible by default — it's designed to produce text that fits the pattern. That means both the statistic and the citation could be fabricated. The 30 seconds it takes to verify a claim independently is the difference between using AI well and being used by it.

</details>

## The Challenge

### Challenge: Hallucination Hunter

*Time: 25 minutes*

Test AI's tendency to generate plausible-sounding but fabricated content:

- [ ] **Generate a biography** — Ask the AI to write a short biography (3-4 paragraphs) of a real but not super-famous person — a mid-career academic, a local politician, a niche author. Someone with a Wikipedia page but not a household name.
- [ ] **Fact-check every claim** — Check dates, institutions, publications, awards using Google, Wikipedia, or any source.
- [ ] **Color-code the results** — Red for outright fabrication, yellow for partially wrong, green for confirmed accurate.
- [ ] **Calculate accuracy** — What percentage of specific claims were correct?
- [ ] **Explain the pattern** — Write 2-3 sentences explaining why the errors happened, based on what you now know about how AI generates text.

**Success criteria:** You found at least one factual error, verified it independently, and can explain why AI hallucinates in terms of next-token prediction.

## Key Takeaways

1. AI predicts the next token based on patterns — it doesn't understand, believe, or know anything.
2. "Hallucination" happens because statistically plausible text isn't the same as true text.
3. AI has no inner life, no opinions, and no concept of truth — when it says "I think," it's pattern-matching, not reflecting.
4. The single most important skill in using AI: never trust output on anything that matters without independent verification.

## The Rabbit Hole

**Type:** Article
**Title:** What Is ChatGPT Doing… and Why Does It Work? — Stephen Wolfram
**URL:** https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/
**Description:** A surprisingly readable deep dive from the creator of Mathematica. Free, full text online. The best technical-but-accessible explanation of next-token prediction.

## References

| Type | Title | URL | Description |
|------|-------|-----|-------------|
| Video | 3Blue1Brown, "But what is a GPT?" (27 min) | https://youtube.com/watch?v=wjZofJX0v4M | Visual walkthrough of how GPT-style models do next-token prediction |
| Video | 3Blue1Brown, "Attention in Transformers" (26 min) | https://youtube.com/watch?v=eMlx5fFNoYc | Deep visual explainer of the attention mechanism that powers modern AI |
| Article | Stephen Wolfram, "What Is ChatGPT Doing... and Why Does It Work?" (free) | https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/ | The best technical-but-accessible explanation of LLMs |
| Article | Ars Technica, "A Jargon-Free Explanation of How AI Large Language Models Work" | https://arstechnica.com/science/2023/07/a-jargon-free-explanation-of-how-ai-large-language-models-work/ | Clear non-technical explanation of LLM mechanics |
| Paper | Bender et al., "On the Dangers of Stochastic Parrots" (2021) | https://dl.acm.org/doi/10.1145/3442188.3445922 | The influential paper that coined the "stochastic parrot" metaphor |
| Tool | OpenAI Tokenizer | https://platform.openai.com/tokenizer | See how AI breaks text into tokens — the units it actually processes |
| Case Study | Mata v. Avianca — lawyer fined for AI-fabricated citations | https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc. | The case that made "AI hallucination" a mainstream concern |
| Database | AI Hallucination Cases — 1,290+ US court rulings, updated continuously | https://www.damiencharlotin.com/hallucinations/ | How the problem extends far beyond one lawyer — open it for the current count, which moves every week |
| Book | Stephen Wolfram, *What Is ChatGPT Doing… and Why Does It Work?* (2023) | — | Book-length version of Wolfram's essential explainer |

## Glossary

**hallucination** — When AI makes up information that sounds true but isn't, like fake facts or made-up sources. It's guessing what sounds right, not checking if it's true.

**large language models** — AI systems trained on massive amounts of text that can read, write, and have conversations. ChatGPT and Claude are examples.

**next-token prediction** — The way AI generates all of its text: it looks at everything so far, guesses the most likely next chunk, and repeats one piece at a time. Uploads and memories improve the input; they don't change the engine.

**stochastic parrots** — A way of describing how AI chatbots work. They repeat text that sounds meaningful based on patterns, but don't actually understand any of it, like a parrot mimicking words without knowing what they mean.

**tokens** — Small chunks of text (roughly ¾ of a word) that AI reads and writes one at a time. AI sees tokens instead of individual letters — the root cause of famous early failures like miscounting the R's in "strawberry" — and usage is priced per million of them, which is why long tasks cost more.
