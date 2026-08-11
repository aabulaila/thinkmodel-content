# Unit 03: Where the Knowledge Comes From

*Last updated: May 31, 2026. Demo instructions were revised to disable web search so results show training data alone.*

## The Hook

Ask AI to write a poem in English and it's pretty good. Ask it to write one in Swahili and the quality drops. Ask it about restaurants in New York and you'll get detailed, confident answers. Ask about restaurants in Amman or Nairobi and it gets vague, generic, sometimes wrong.

AI isn't smarter about some places than others because it has opinions. It's smarter about some places because it has more data about them. And that data didn't appear out of nowhere — real people created it, real companies collected it, and real decisions were made about what to include and what to leave out.

The data is the whole story. Once you see that, you'll never take an AI answer at face value again.

> **Video: The Mirror in the Machine**
>
> https://www.youtube.com/watch?v=tROco92RGco
>
> ThinkModel video — CC BY 4.0, the same licence as the text.

> **Think about this before reading on**
>
> AI gives great restaurant recommendations for New York but vague ones for Amman. Why do you think that happens — is the AI "smarter" about some places?

<details>
<summary>Hint</summary>

Think about where the data comes from. Which cities have more reviews, articles, and online content?

</details>

## The Core Concept

AI learned from the internet. That sounds straightforward until you think about what the internet actually is — and, more importantly, what it isn't.

The internet has more English content than all other languages combined. It has more content from wealthy countries than poor ones. More content from people who spend time online than people who don't. More opinions from young tech-savvy populations than from elderly communities or rural areas. More men's voices than women's in technical fields. More Western cultural references than any other.

None of that is a conspiracy. It's just what the internet looks like. But when you train an AI system on that data — when you use it as the raw material for the patterns the AI learns — all of those imbalances get baked into the system. This is true for everything from language models to **collaborative filtering** systems like Netflix and Spotify.

This is exactly what happened with **facial recognition**. In 2018, a researcher at MIT named Joy Buolamwini ran a study called "Gender Shades." She tested commercial facial recognition systems from major companies — IBM, Microsoft, and others — and found something stark: the systems worked great on lighter-skinned men (error rate below 1%) and terribly on darker-skinned women (error rates up to 34.7%). The systems weren't programmed to be racist. They were trained on datasets that contained far more lighter-skinned faces than darker-skinned ones — roughly 79-86% lighter-skinned. The AI learned what it was shown.

> **Case study: Gender Shades: The study that changed AI accountability**
>
> Joy Buolamwini's 2018 "Gender Shades" study didn't just find a problem — it forced the industry to respond. After publication, IBM improved its facial recognition accuracy for darker-skinned women by 23 percentage points. Microsoft made similar improvements. Amazon initially dismissed the findings, then eventually implemented a one-year moratorium on police use of its Rekognition system.
>
> The study spawned an entire subfield of AI research focused on **bias** auditing. Cities including San Francisco, Boston, and Portland banned government use of facial recognition technology. The EU's AI Act now requires bias testing for high-risk AI systems.
>
> One study, one researcher, measurable global impact.

Around the same time, Amazon built an AI hiring tool trained on 10 years of the company's resume data. The tool started penalizing resumes that contained the word "women's" — as in "women's chess club" or "women's studies." Why? Because the 10-year dataset was dominated by male applicants and male hires in technical roles. The AI learned that men got hired more often, so it treated "male" as the pattern to match. Amazon scrapped the tool.

These aren't edge cases. They're the normal, predictable result of training AI on data that reflects existing inequalities.

Here's the key insight: **AI doesn't add bias. It absorbs and amplifies whatever bias already exists in its **training data**.** If you train a language model on text from the internet, it will reflect the internet's preferences, blind spots, and prejudices. It will know more about topics that are well-documented online and less about topics that aren't. It will default to the perspectives of the people who wrote most of the training data.

> **Watch out: Common misconception: More data fixes bias**
>
> People sometimes assume that if you just get *more* data, bias goes away. It doesn't. If you double the size of an imbalanced dataset, you get a bigger imbalanced dataset. The internet keeps growing, but its demographic skew stays roughly the same.
>
> Fixing bias requires *deliberate curation* — actively seeking out underrepresented perspectives, balancing datasets by demographic category, and testing outputs across different groups. It's expensive, time-consuming work, which is why it often doesn't happen unless someone like Buolamwini forces the issue.

This doesn't mean AI is useless. It means AI is a mirror — and the reflection depends on what you put in front of it.

Scraping the web gives you a pile of text. A pile of text is not a training set. In between are people: filtering out what the model must never learn, labeling what's in the rest, and rating which of two answers was better — thousands of times over. That last step, **RLHF**, is where a model's manners and its refusals largely come from. The work is mostly contracted out, and the rate falls the further it travels from the company that needs it.

> **Case study: The people who built ChatGPT's safety filter**
>
> For a model to refuse something horrific, a filter must recognize it first — and to learn that, it needs labeled examples. In January 2023, TIME correspondent Billy Perrigo reported where OpenAI's came from. Beginning in November 2021, an outsourcing firm called Sama ran the work out of Nairobi, Kenya: around three dozen people, split into three teams, labeling passages that described child sexual abuse, torture, suicide, self-harm, murder and incest in graphic detail.
>
> How much of it, and for how much, is contested. Workers told TIME they handled 150 to 250 passages in a nine-hour shift, taking home $1.32 an hour as junior labelers and up to $2.00 as senior quality analysts. Sama disputes both, putting the workload at 70 passages a shift and pay at $1.46 to $3.74 an hour. The other end isn't in dispute: OpenAI paid Sama $12.50 per worker-hour — six to nine times the take-home TIME reported. Sama ended the contract in February 2022, eight months early.
>
> What support those workers got is disputed too: they told TIME the wellness sessions were rare and counseling was refused, and Sama said licensed therapists were available. In July 2023, four former workers petitioned Kenya's National Assembly to investigate. The lasting harm they describe is an allegation in that petition, not a settled finding.

One canceled contract could be an outlier. In 2023 Oxford's Fairwork project scored 15 of the online platforms where AI companies buy data work — Amazon Mechanical Turk, Appen and Scale AI's Remotasks among them — against basic standards of fair pay and conditions. None of the 15 scored above five out of ten.

That August, the *Washington Post* reported on Remotasks in the Philippines: of 36 current and former freelancers interviewed, all but two said payments had been delayed, cut, or canceled after the work was done.

So ask the unit's question backwards too: not only whose experience is in the data, but whose hands sorted it, and what that cost them.

**Knowledge check —** An AI's safety filter can spot a request for graphic abuse and refuse it. For that filter to learn what such text looks like, people first had to:

- **A.** Write rules in code listing every phrase the model must refuse
- **B.** Read and label real examples of it so the filter could learn
- **C.** Remove the whole topic from the internet before the scrape began
- **D.** Wait for users to report bad answers after the product shipped

<details>
<summary>Show answer</summary>

**B. Read and label real examples of it so the filter could learn**

Right. A filter learns its categories the way any model does — from labeled examples. TIME reported that building ChatGPT's meant workers in Nairobi reading 150 to 250 passages a shift describing abuse, torture and murder and tagging each one, for $1.32 to $2.00 an hour take-home, while OpenAI paid the vendor $12.50 per worker-hour.

</details>

> **Think about this before reading on**
>
> Amazon built an AI hiring tool that penalized resumes containing the word "women's." Nobody programmed it to do that. So where did the bias come from?

<details>
<summary>Hint</summary>

Think about what the training data looked like — 10 years of resumes in a male-dominated tech industry. What patterns would the AI find?

</details>

**Knowledge check —** A facial recognition system works well on some faces and poorly on others. Based on what you know about training data, the most likely explanation is:

- **A.** The training data held far more examples of some face types than others
- **B.** Some faces are simply harder for any computer to tell apart from others
- **C.** The math behind face matching has a limit that no dataset can get around
- **D.** The company designed the system to work better on some faces on purpose

<details>
<summary>Show answer</summary>

**A. The training data held far more examples of some face types than others**

Exactly. AI systems perform best on data that's well-represented in training. Gender Shades found that commercial facial recognition datasets were 79-86% lighter-skinned faces — so the system literally had more patterns to match for those faces and fewer for everyone else.

</details>

## Live Demo

**Before you start:** Turn off web search in your AI tool for this demo. Most tools now search the web by default, which hides the effect we're testing. We want to see what the model knows from its training, not what it can look up. With search off, the gaps in its training data show through.

**Step 1:** Open Claude or ChatGPT. Ask it to describe a traditional wedding in detail — first for a country with lots of online representation (American wedding, British wedding, Japanese wedding), then for a country with less (a Jordanian wedding, a Malawian wedding, a Bhutanese wedding). Compare the richness and accuracy of the responses.

**Step 2:** Ask the AI to recommend restaurants in two cities: one globally famous (London, Tokyo) and one less represented in English-language data (Lusaka, Bishkek). How specific are the recommendations? Does it name real places, or does it get vague?

**Step 3:** Ask the AI to translate a paragraph into two languages: one well-represented (Spanish, French) and one less represented (Tigrinya, Quechua, Mongolian). Compare quality.

**Step 4:** Ask the AI a culturally specific question:

```prompt
What should I know about etiquette when visiting an elderly relative in [your culture]?
```

See if the answer reflects genuine cultural knowledge or generic advice.

**What you should notice:** The AI is noticeably better at topics, languages, and regions that are well-represented in English-language internet data. This isn't a bug anyone forgot to fix — it's a direct consequence of what the training data contained.

<details>
<summary>Tip: Try this: Audit your own topic</summary>

Pick something you know deeply — your neighborhood, a cultural practice, a local dish. Ask the AI 5 specific questions about it. Grade the answers. You'll quickly see where the training data has gaps, because you're the expert the AI wasn't trained on.

</details>

## Why This Matters

This isn't just an academic observation. It has real consequences for real people.

When AI systems are deployed in healthcare, they perform better for populations that are well-represented in medical training data — and worse for everyone else. When they're used in hiring, they can perpetuate the exact patterns of exclusion that already exist. When they're used in content moderation, they're better at understanding some cultural contexts than others.

If you use AI without thinking about where its knowledge comes from, you'll trust it most on exactly the topics where your own experience could have told you the answer — and trust it least on the topics where you actually need help.

The students who go furthest with AI won't be the ones who assume it's neutral. They'll be the ones who ask: "Whose data is this based on? Whose perspective is missing? And does that matter for what I'm using it for?"

> **Think about this before reading on**
>
> If you know AI performs worse for underrepresented groups, what would you do differently before relying on AI for something important — like medical advice or a job application?

<details>
<summary>Hint</summary>

Think about who the AI was trained on and whether your situation is well-represented in that data.

</details>

**Knowledge check —** When AI gives confident, detailed answers about some topics but vague, generic answers about others, this is most likely because:

- **A.** The AI is programmed to treat certain topics as more important than others
- **B.** The AI finds some topics more interesting and puts more effort into them
- **C.** The developers chose to limit what the AI is allowed to know about a subject
- **D.** Some topics have far more data behind them, so there are more patterns to match

<details>
<summary>Show answer</summary>

**D. Some topics have far more data behind them, so there are more patterns to match**

Right. AI doesn't have preferences or priorities — it has data density. Topics with extensive representation in training data (English-language, Western, well-documented online) produce stronger patterns and better output. Topics with thin representation produce vague, generic, or wrong answers. Same engine, different fuel.

</details>

## The Challenge

### Challenge: Bias Audit

*Time: 30 minutes*

Pick a topic you know well — your culture, your neighborhood, a hobby, a niche interest, a language you speak.

- [ ] **Ask 5-10 factual questions** about that topic — things you already know the answer to. Grade each response: Accurate? Partially accurate? Wrong? Generic? Surprisingly detailed?
- [ ] **Pick a second topic** you know equally well but that you suspect AI knows less about. Repeat the same grading process.
- [ ] **Write a comparison** (5-7 sentences): Where was the AI strong? Where was it weak? Can you explain the difference based on what you now understand about training data?
- [ ] **Bonus: Explore Know Your Data** — Go to knowyourdata.withgoogle.com and explore how an actual image dataset is composed. What groups are overrepresented? Underrepresented?

**Success criteria:** You can identify specific gaps in AI knowledge, explain them in terms of training data composition, and articulate why this matters for people whose perspectives are underrepresented.

## Key Takeaways

1. AI's abilities and blind spots are directly determined by its training data — who created it, what languages it's in, what perspectives it reflects.
2. AI doesn't add bias. It absorbs and amplifies whatever biases exist in the data.
3. Facial recognition systems failed on darker-skinned women because the training data was 79-86% lighter-skinned faces.
4. The question "whose data is this?" is one of the most important questions you can ask about any AI system.

## The Rabbit Hole

**Type:** Video
**Title:** How I'm Fighting Bias in Algorithms — Joy Buolamwini
**URL:** https://ted.com/talks/joy_buolamwini_how_i_m_fighting_bias_in_algorithms
**Description:** 9-minute TED talk where Buolamwini puts on a white mask to get a facial recognition system to see her. That image will stay with you.

> **Video: How I'm Fighting Bias in Algorithms — Joy Buolamwini (9 min)**
>
> https://www.youtube.com/watch?v=UG_X_7g63rY
>
> Third-party video — not covered by this repository's licence.

## References

| Type | Title | URL | Description |
|------|-------|-----|-------------|
| Video | Joy Buolamwini, "How I'm Fighting Bias in Algorithms" TED Talk (9 min) | https://ted.com/talks/joy_buolamwini_how_i_m_fighting_bias_in_algorithms | The talk that put algorithmic bias on the public agenda |
| Video | *Coded Bias* documentary (86 min, Netflix/streaming) | — | Feature-length documentary following Buolamwini's fight against biased AI |
| Study | Buolamwini & Gebru, "Gender Shades" (2018) | https://proceedings.mlr.press/v81/buolamwini18a.html | The landmark study proving racial and gender bias in commercial facial recognition |
| Article | MIT News, "Study Finds Gender and Skin-Type Bias in Commercial AI" | https://news.mit.edu/2018/study-finds-gender-skin-type-bias-artificial-intelligence-systems-0212 | MIT's coverage of the Gender Shades findings |
| Article | MIT Tech Review, "Amazon Ditched AI Recruiting Tool Because It Was Biased" | https://technologyreview.com/2018/10/10/139858/ | How Amazon's hiring AI learned to discriminate against women |
| Tool | Know Your Data (Google) | https://knowyourdata.withgoogle.com | Explore the composition of real image datasets — see bias firsthand |
| Tool | What-If Tool (Google PAIR) | https://pair-code.github.io/what-if-tool | Investigate ML model behavior across different demographic groups |
| Tool | PAIR Explorables: Measuring Fairness | https://pair.withgoogle.com/explorables/measuring-fairness/ | Interactive visual explanation of different definitions of algorithmic fairness |
| Book | Cathy O'Neil, *Weapons of Math Destruction* (2016) | — | How algorithmic systems perpetuate inequality at scale |
| Book | Joy Buolamwini, *Unmasking AI* (2023) | — | Buolamwini's full account of her fight against biased AI systems |
| Article | TIME, Billy Perrigo, "OpenAI Used Kenyan Workers on Less Than $2 Per Hour to Make ChatGPT Less Toxic" (Jan 18, 2023) | https://time.com/6247678/openai-chatgpt-kenya-workers/ | The investigation into who labeled the harmful text behind ChatGPT's safety filter |
| Article | TechCrunch, "Workers that made ChatGPT less harmful ask lawmakers to stem alleged exploitation by Big Tech" (Jul 14, 2023) | https://techcrunch.com/2023/07/14/workers-that-made-chatgpt-less-harmful-ask-lawmakers-to-stem-alleged-exploitation-by-big-tech | The Kenyan workers' petition to the National Assembly, and Sama's response |
| Article | Josh Dzieza, "AI Is a Lot of Work" / "Inside the AI Factory" (New York magazine & The Verge, Jun 2023) | https://www.theverge.com/features/23764584/ai-artificial-intelligence-data-notation-labor-scale-surge-remotasks-openai-chatbots | Reported from inside annotation shifts — what RLHF looks like as a job |
| Study | Fairwork (Oxford Internet Institute), *Cloudwork Ratings 2023: Work in the Planetary Labour Market* | https://fair.work/wp-content/uploads/sites/17/2023/07/Fairwork-Cloudwork-Ratings-2023-Red.pdf | 15 data-work platforms scored against five fairness principles; none met the minimum |
| Article | TIME, Billy Perrigo, "AI Gig Workers Face 'Unfair Working Conditions,' Study Says" (Jul 20, 2023) | https://time.com/6296196/ai-data-gig-workers/ | Coverage of the Fairwork findings on pay and unpaid time in AI data work |
| Article | Washington Post, "Scale AI's Remotasks workers in the Philippines cry foul over low pay" (Aug 28, 2023) | https://www.washingtonpost.com/world/2023/08/28/scale-ai-remotasks-philippines-artificial-intelligence/ | Delayed, reduced and canceled payments to Filipino data annotators |

## Glossary

**bias** — When AI output is unfairly skewed because the training data was unbalanced. The AI just reflects whatever was in the data, not on purpose.

**collaborative filtering** — A method where AI figures out what you'll like by finding other people with similar taste and recommending what they enjoyed. It's how Spotify, Netflix, and Amazon seem to "know" you.

**facial recognition** — AI that identifies or verifies a person by analyzing their face. It works by matching facial features against a database of known faces.

**RLHF** — Reinforcement learning from human feedback. People compare two AI answers and mark which one is better, over and over, and the model is tuned toward the preferred one. It's what turns a raw text predictor into something that behaves like an assistant.

**training data** — The huge collection of text, images, or other content that an AI learned from. What's in this data shapes what the AI is good at and what it gets wrong.
