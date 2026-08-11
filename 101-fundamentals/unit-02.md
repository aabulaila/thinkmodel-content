# Unit 02: Nobody Programmed This

*Last updated: May 21, 2026. Video embeds and links were refreshed on this date; how training works hasn't changed.*

## The Hook

If you wanted a computer to sort a list of names alphabetically, a programmer would write step-by-step instructions: compare the first letter, swap if needed, repeat. Every rule, explicitly written by a human.

Now think about this: how would you write step-by-step instructions for recognizing a cat? Describe every possible cat — fluffy ones, hairless ones, kittens, fat cats, cats in boxes, cats that look like bread. You can't. There are too many variations, too many edge cases, too many weird cats on the internet.

So how does your phone know it's looking at a cat? Nobody wrote those rules. The AI figured them out on its own.

> **Video: Nobody Programmed This**
>
> https://www.youtube.com/watch?v=-fTDvbjtZao
>
> ThinkModel video — CC BY 4.0, the same licence as the text.

> **Think about this before reading on**
>
> You can't write step-by-step rules for recognizing a cat, but AI can do it easily. How do you think AI learns to do something that's so hard to describe in instructions?

<details>
<summary>Hint</summary>

Think about how you learned to recognize faces as a baby — was it through rules, or through seeing lots of examples?

</details>

## The Core Concept

Traditional programming works like a recipe. A human writes every instruction: if this, then that. The computer follows those instructions exactly. It never deviates, never improvises, and never learns anything new unless someone edits the code.

**Machine learning** flips this entirely. Instead of writing rules, you give the system examples. Thousands of them. Millions of them. Photos labeled "cat" and photos labeled "not cat." The system looks at all those examples and finds its own rules — its own patterns — for telling the difference. Nobody wrote a line of code that says "cats have pointy ears." The system discovered that on its own by seeing enough examples.

This is a fundamentally different way of building technology, and it's the reason AI has exploded in the past few years.

Here's a useful way to think about it:

**Traditional programming:** Human writes rules → Computer follows rules → Output
**Machine learning:** Human provides examples → Computer finds its own rules → Output

> **Traditional Programming**
>
> A human writes every rule explicitly. The computer follows instructions exactly and never learns anything new. It can only do what someone told it to do. To change behavior, you rewrite the code.

> **Machine Learning**
>
> A human provides thousands of examples. The computer discovers its own rules from the data. It can find things humans never thought to look for. To change behavior, you change the training data.

The shift is subtle but enormous. In traditional programming, the computer can only do what a human explicitly told it to do. In machine learning, the computer can find things humans never thought to look for.

That's exactly what happened with AlphaGo, Google DeepMind's Go-playing AI. In 2016, it played against Lee Sedol, one of the greatest Go players in history. In Game 2, AlphaGo played Move 37 — a move so unusual that professional Go players said no human would have made it. The probability of a human player choosing that move was estimated at 1 in 10,000. Commentators were baffled. Then, slowly, they realized it was brilliant. The AI had taught itself a strategy that 3,000 years of human Go expertise had never found.

Nobody programmed that move. It emerged from the system playing millions of games against itself and finding patterns no human had discovered.

> **Case study: AlphaGo's Move 37: The move no human would make**
>
> In March 2016, during Game 2 against world champion Lee Sedol, AlphaGo placed a stone on a position that left commentators speechless. Fan Hui, another professional Go player working with DeepMind, later described the moment: "It's not a human move. I've never seen a human play this move."
>
> The move violated centuries of Go wisdom. Experts initially thought it was a mistake. Within ten moves, they realized it was brilliant — it set up a strategic advantage that unfolded across the rest of the game. AlphaGo had discovered a strategy hidden in the game's mathematics that 3,000 years of human play never found.
>
> Lee Sedol lost the match 4-1. His single win — Game 4 — was later called the "Hand of God" move. Even the human triumph was inspired by an AI opponent.

This is the power and the strangeness of machine learning. The system does things its own creators didn't expect. It finds solutions humans didn't anticipate. And sometimes — like with Move 37 — those solutions are better than anything a human came up with.

> **Think about this before reading on**
>
> AlphaGo discovered a strategy that 3,000 years of human expertise missed. Does that mean the AI is "smarter" than humans at Go — or is something else going on?

<details>
<summary>Hint</summary>

Think about what the AI actually did — it played millions of games against itself. Could any human do that? Is exploring more possibilities the same as being smarter?

</details>

But there's a flip side. Because nobody wrote the rules explicitly, nobody can fully explain *why* the system made a particular decision. This is the **black box** problem, and it matters a lot when AI is making decisions about medical diagnoses, loan approvals, or criminal sentencing. We'll come back to this.

For now, the key idea is this: AI learns from examples, not instructions. That single distinction separates it from every technology that came before.

**Knowledge check —** What is the fundamental difference between traditional programming and machine learning?

- **A.** Machine learning is faster and more accurate because it runs on bigger computers
- **B.** Humans write every rule in traditional programming; the system finds its own
- **C.** Traditional programming is built from data, while machine learning is built from code
- **D.** Machine learning needs a live internet connection and traditional programs do not

<details>
<summary>Show answer</summary>

**B. Humans write every rule in traditional programming; the system finds its own**

That's the key distinction. Traditional programming is humans encoding rules explicitly. Machine learning is humans providing examples and the system finding its own patterns. This is why ML can discover things humans never thought to look for — like AlphaGo's Move 37.

</details>

## Live Demo

**Step 1 — Teachable Machine.** Go to Google's Teachable Machine:

> **Try it: Google Teachable Machine — Train your own AI**
>
> https://teachablemachine.withgoogle.com

Click "Image Project" then "Standard image model."

**Step 2 — Create two classes.** Label one "Thumbs Up" and one "Thumbs Down" (or anything you want — "Smiling" and "Not Smiling," "Pen" and "No Pen").

**Step 3 — Record examples.** Hold up a thumbs up to your webcam and click "Record" to capture 30-50 images. Do the same for thumbs down.

**Step 4 — Click "Train Model."** Watch the progress bar. In under a minute, your AI model will be ready.

**Step 5 — Test it.** Hold up a thumbs up. Does it classify correctly? Try weird angles, different lighting, someone else's hand. Notice where it gets confident and where it gets uncertain.

**What just happened:** You didn't write a single rule about what a thumbs up looks like. You gave the system examples, and it figured out its own rules. That's machine learning. You just did it in 90 seconds.

<details>
<summary>Tip: Try this: Break your own model on purpose</summary>

After training, deliberately try to fool your model. Change the lighting dramatically, use a different background, have someone else test it, or partially obscure the object. Document each failure. Then add more diverse **training examples** and retrain. The improvement directly shows you why data diversity matters.

</details>

## Why This Matters

Understanding that AI learns from examples — not from instructions — changes how you think about three important things.

First, it explains why AI can be surprisingly good at things nobody expected. Language models weren't programmed to write poetry or debug code. They learned to do those things by seeing enough examples of language that those capabilities emerged.

Second, it explains why AI fails in unexpected ways. If the training examples were limited, biased, or unrepresentative, the AI's self-taught rules will be limited, biased, and unrepresentative too. Nobody can debug rules that nobody wrote.

Third, it shifts responsibility. When a traditional program fails, you can look at the code and find the bug. When a machine learning system fails, the problem might be in the data it was **trained** on, the way the training was set up, or somewhere in the billions of **parameters** that no human can inspect one by one. This makes accountability harder — and that's a problem society is still figuring out.

> **Think about this before reading on**
>
> When a traditional program makes a mistake, you can find the bug in the code. When a machine learning system makes a mistake, why is it so much harder to figure out what went wrong?

<details>
<summary>Hint</summary>

Think about the difference between rules a human wrote (which you can read) and rules the system taught itself across billions of parameters (which nobody can fully inspect).

</details>

**Knowledge check —** When a machine learning system makes a biased decision (like favoring one group over another), the most likely cause is:

- **A.** A programmer coded the bias in deliberately and nobody caught it in review
- **B.** The system formed its own opinions about groups while it was being trained
- **C.** The training examples carried real-world bias and the system learned it
- **D.** A bug in the code flipped the result, and it can be found and patched

<details>
<summary>Show answer</summary>

**C. The training examples carried real-world bias and the system learned it**

Exactly. ML systems learn from their training data. If that data reflects existing inequalities — more examples of some groups than others, historical patterns of discrimination — the system absorbs and reproduces those biases. Nobody "programmed" the bias, which is what makes it so hard to fix.

</details>

## The Challenge

### Challenge: Teach the Machine, Break the Machine

*Time: 30 minutes*

Using Google Teachable Machine (teachablemachine.withgoogle.com):

- [ ] **Train a model** to distinguish between two things of your choice (open hand vs. fist, two different objects, two facial expressions).
- [ ] **Test under normal conditions** — How accurate is it? Document accuracy with 10 test inputs.
- [ ] **Break it with adversarial tests** — Change the lighting dramatically, use a different background, have someone else test it, partially obscure the object, hold it at an unusual angle.
- [ ] **Document what happened** — Where did the model fail? Can you explain why based on what training examples it had?
- [ ] **Fix it** — Add more diverse training examples and retrain. Did accuracy improve? By how much?

**Success criteria:** You can explain why your model failed on certain inputs, connect it to the concept of learning from examples, and demonstrate that more diverse examples improve performance.

## Key Takeaways

1. Traditional programming is humans writing rules. Machine learning is humans providing examples and the system finding its own rules.
2. This is why AI can discover things humans never thought of — like AlphaGo's Move 37.
3. It's also why AI fails in ways nobody predicted — because nobody wrote the rules, nobody can fully audit them.
4. The quality and diversity of training examples directly determines what the AI can and can't do.

## The Rabbit Hole

**Type:** Video
**Title:** AlphaGo Documentary
**URL:** https://youtube.com/watch?v=WXuK6gekU1Y
**Description:** The full 90-minute documentary (free on YouTube). The moment when Lee Sedol sees Move 37 — the look on his face — is one of the most important moments in the history of AI.

> **Video: AlphaGo — Full Documentary (90 min)**
>
> https://www.youtube.com/watch?v=WXuK6gekU1Y
>
> Third-party video — not covered by this repository's licence.

## References

| Type | Title | URL | Description |
|------|-------|-----|-------------|
| Video | CGP Grey, "How Machines Learn" (9 min) | https://youtube.com/watch?v=R9OHn5ZF4Uo | Accessible metaphor-driven explanation of how ML learns from data |
| Video | 3Blue1Brown, "Gradient Descent: How Neural Networks Learn" (21 min) | https://youtube.com/watch?v=IHZwWFHWa-w | Visual deep-dive into the math behind how networks adjust their patterns |
| Video | AlphaGo Documentary (90 min, free) | https://youtube.com/watch?v=WXuK6gekU1Y | The full story of AlphaGo vs Lee Sedol — essential viewing |
| Tool | Google Teachable Machine | https://teachablemachine.withgoogle.com | Train your own image/sound/pose recognizer with no coding |
| Tool | TensorFlow Playground | https://playground.tensorflow.org | Watch a neural network learn to classify data interactively |
| Article | Google DeepMind, AlphaGo Research Page | https://deepmind.google/research/alphago/ | Technical overview of AlphaGo's architecture and achievements |
| Article | Wikipedia, "AlphaGo versus Lee Sedol" | https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol | Comprehensive account of the historic match |
| Book | Hannah Fry, *Hello World: Being Human in the Age of Algorithms* (2018) | — | Accessible exploration of how algorithms shape decisions in society |
| Course | Google ML Crash Course (free, ~15 hours) | https://developers.google.com/machine-learning/crash-course | Google's free introduction to machine learning concepts |

## Glossary

**black box** — A system where you can see what goes in and what comes out, but you can't see how it made its decision.

**Machine learning** — A type of AI where you give the system lots of examples instead of writing rules. It figures out its own rules by finding patterns in those examples.

**parameters** — The numbers inside an AI model that get adjusted during training, like its internal settings. They are counted in billions — roughly, more parameters means more capable and more memory-hungry.

**trained** — The process of feeding a machine learning system examples so it can learn patterns. Training takes a lot of computing power and shapes everything the model can and can't do.

**training examples** — The labeled data you feed to a machine learning system so it can learn patterns. More variety in examples usually means a better model.
