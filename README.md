# ThinkModel — an open AI literacy curriculum

[![Licence: CC BY 4.0](https://img.shields.io/badge/Licence-CC%20BY%204.0-7c6ff7.svg)](https://creativecommons.org/licenses/by/4.0/)

**Two complete courses. 25 units. ~69,000 words.** Written for adults and
teenagers with no technical background — no maths, no code, no prerequisites.

**Fork it, translate it, teach from it.** Free for any use including commercial,
with attribution.

Read it here in plain markdown, or take the interactive version with audio
narration and AI-graded exercises at **[thinkmodel.ai](https://thinkmodel.ai)**.

---

## 101 — Fundamentals

How AI actually works, why it fails, and how to get good at using it.
**[Read the course →](101-fundamentals/)** · 12 units · ~2,700 words each

| | Unit | |
|---|---|---|
| 01 | [Pattern Machines](101-fundamentals/unit-01.md) | Your feed, your autocomplete, your recommendations: all the same trick |
| 02 | [Nobody Programmed This](101-fundamentals/unit-02.md) | Nobody wrote the rules for recognising a cat. Where the rules actually come from |
| 03 | [Where the Knowledge Comes From](101-fundamentals/unit-03.md) | The knowledge comes from data, and the data has holes |
| 04 | [It Doesn't Know Anything](101-fundamentals/unit-04.md) | No understanding, no database — just the most likely next chunk of text |
| 05 | [This Stuff Isn't Free](101-fundamentals/unit-05.md) | Warehouses of chips, small-town electricity bills, and the cost of a three-second answer |
| 06 | [Words Are the New Code](101-fundamentals/unit-06.md) | The same question, asked two ways, gets two different answers |
| 07 | [Context Is Everything](101-fundamentals/unit-07.md) | Why an identical prompt lands differently depending on what surrounds it |
| 08 | [Be the Judge, Not the Audience](101-fundamentals/unit-08.md) | AI is equally confident when it's right and when it's wrong |
| 09 | [AI That Does Things](101-fundamentals/unit-09.md) | From answering to doing: what changes when the model can act |
| 10 | [Build Something Real](101-fundamentals/unit-10.md) | Ship a working thing you can show someone, without writing code |
| 11 | [Your AI Toolkit](101-fundamentals/unit-11.md) | Hundreds of tools, a new one every week. How to pick and how to keep picking |
| 12 | [What's Yours](101-fundamentals/unit-12.md) | If it can write the essay, what's the point of you? |

## 102 — Operator

Stop chatting and start operating: configure workspaces, choose models
deliberately, delegate to agents with guardrails, and run systems that keep
working when you are not watching.
**[Read the course →](102-operator/)** · 13 units · ~2,800 words each

| | Unit | |
|---|---|---|
| 00 | [Start Here](102-operator/unit-00.md) | What changes when you stop using AI and start operating it |
| 01 | [From Chats to Systems](102-operator/unit-01.md) | A workspace that briefs the model for you, instead of retyping context |
| 02 | [The Right Brain for the Job](102-operator/unit-02.md) | Choosing a model deliberately, and what you trade away either direction |
| 03 | [Research Like a Team of Ten](102-operator/unit-03.md) | Delegate the reading. Never delegate the believing |
| 04 | [The Terminal Isn't Scary](102-operator/unit-04.md) | When your own files become the thing the agent works on |
| 05 | [Inside the Harness](102-operator/unit-05.md) | Why the same model behaves differently in two different tools |
| 06 | [Let It Run](102-operator/unit-06.md) | When it's safe to let an agent run alone, and where the checkpoint belongs |
| 07 | [Give It Your Keys (Carefully)](102-operator/unit-07.md) | Private data, untrusted input and outbound actions must never meet |
| 08 | [While You Sleep](102-operator/unit-08.md) | Turning something you keep redoing by hand into something that runs without you |
| 09 | [You're the Art Director Now](102-operator/unit-09.md) | When AI makes the visuals, your job becomes direction rather than production |
| 10 | [Your Own Private AI](102-operator/unit-10.md) | Running a model on your own machine versus renting a frontier one |
| 11 | [Break Your Own Stuff](102-operator/unit-11.md) | An untested AI system is already broken somewhere. Go find it |
| 12 | [Stay Frontier](102-operator/unit-12.md) | Staying current by watching instruments instead of following influencers |

---

## What it reads like

> Think about how you recognize a friend across a crowded room. You don't
> consciously analyze their height, hair color, posture, and walking style. You
> just... know. Your brain has seen them so many times that it built an internal
> model — a pattern — and now it matches that pattern instantly, even from
> behind, even in bad lighting.
>
> AI does the exact same thing. But instead of using eyesight and human
> experience, it uses data. Lots of data. An almost incomprehensible amount of
> data.

— *Unit 01, Pattern Machines*

Every unit opens with something you already know and builds to the idea. Nothing
is named before it has been experienced. Each one ends with a glossary of the
terms it introduced, and quizzes keep their answers behind a fold so you still
get to think first.

---

## Start here

**If you want to learn** — open [101 unit 01](101-fundamentals/unit-01.md) and
read in order. About 8–13 minutes of reading per unit — the same estimate the site publishes. 102 assumes you have the ideas from
101, but re-explains what it needs, so you can start there if you already use AI
daily and want to build with it.

**If you want to teach it** — there are facilitator guides for each course,
session by session, with what to protect time for and where discussions go wrong:
[101](https://thinkmodel.ai/facilitator-guide/101) ·
[102](https://thinkmodel.ai/facilitator-guide/102). The licence covers classroom
and commercial teaching; you do not need to ask.

**If you want to translate it** — this is the most useful thing you can make, and
the units are built for it: self-contained prose, no build step, no tooling.
Work from the plain markdown in `101-fundamentals/` and `102-operator/`. Two
things to keep: the unit numbering, because units cross-reference each other by
number, and the marked notes where a unit points at an interactive exercise that
only exists in the online reader — the surrounding material stands on its own.

---

## Licence

**[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)** — copy, translate,
adapt and teach from this, including commercially. Credit it and say if you
changed it. That is the whole deal. Full text in [LICENSE](LICENSE).

Credit it like this:

> ThinkModel — thinkmodel.ai

**The videos are CC BY 4.0 too.** Each unit links one, on YouTube under the same
terms, so a translation can subtitle or re-host them rather than sending readers
back here.

The converter and tests in `tools/` are MIT.

**What the licence cannot cover:** several units quote studies and link work by
other people — CGP Grey, Andrej Karpathy, Joy Buolamwini among them. That belongs
to its creators and stays under their terms. Quoting and linking is fine;
relicensing it is not mine to offer. The ThinkModel name and logo are likewise not
licensed for use in a way that implies your adaptation is the original.

## Corrections are the most valuable contribution

AI facts date fast, and these units carry specific numbers, studies and model
names. If something is wrong or has gone stale, **[open an
issue](../../issues)** — corrections flow back into the units every learner
reads, on the site and here.

## For contributors

`source/` holds the canonical text in the directive dialect the interactive
reader renders (`:::quiz`, `:::socratic`, `{{term:name|definition}}`), documented
in [AUTHORING.md](source/course-102/AUTHORING.md). The plain courses above are
generated from it, so fix things in `source/` and regenerate:

```bash
node tools/build-plain.mjs source/course-101 101-fundamentals
node tools/build-plain.mjs source/course-102 102-operator
node --test tools/build-plain.test.mjs
```

Translating? Ignore all of this and work from the plain markdown.
