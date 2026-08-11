# Unit 05: This Stuff Isn't Free

*Last updated: May 31, 2026. Economics and creativity statistics were updated to current figures.*

## The Hook

Every time you send a message to Claude or ChatGPT, a computer somewhere — probably in one of many {{term:data centers|Huge warehouse-sized buildings filled with thousands of powerful computers. They run AI models, store data, and use as much electricity as a small town.}} filled with thousands of specialized chips running at full blast — does a massive amount of work to generate your answer. That building uses as much electricity as a small town. The chips inside it cost more than most houses. The engineers maintaining it get paid very well.

Then you get your response in three seconds, for free.

Something doesn't add up. If this costs so much, why isn't anyone charging you? And if someone is paying for it, who — and why?

:::embed{type="video" title="The Math That Doesn't Add Up" src="/api/storage/public-objects/videos/5-The_Math_That_Doesn_t_Add_Up.mp4" youtubeId="aSWGGmeY9lo"}
:::

:::socratic
question: If every AI query costs money to process, why do you think companies like OpenAI and Anthropic offer free tiers? What's in it for them?
hint: Think about how other tech companies (like social media) make money from free products.
concept: Free tiers are a business strategy — companies trade short-term losses for user acquisition and data, betting on future revenue.
:::

## The Core Concept

Let's talk about money. Actual money.

Training GPT-4 — just the training, before anyone used it — cost roughly $78 million in {{term:compute|The raw processing power needed to train and run AI models. More compute means more powerful models, but it also means higher costs and more energy use.}} alone. Google's Gemini Ultra cost an estimated $191 million. These numbers are growing fast: {{term:training run|The process of teaching an AI model by feeding it all of its training data. For top AI models, this means thousands of specialized chips running for weeks or months, costing tens to hundreds of millions of dollars.}} costs are roughly doubling every year. By 2027, a single training run could exceed $1 billion.

But training is a one-time cost. The ongoing cost — running the model every time someone asks a question — is called {{term:inference|Each time you ask a trained AI model a question and it generates an answer, that's inference. The cost per question is small and falling fast, but with hundreds of millions of people asking, it adds up to billions a year.}}. Every message you send gets processed by thousands of specialized chips called {{term:GPUs|Graphics Processing Units, computer chips originally made for video games that turned out to be perfect for the math AI needs. Nvidia makes most of them.}}, and each query costs a fraction of a cent. That sounds small, but multiply it by hundreds of millions of users sending multiple messages a day, and the numbers get enormous.

:::analogy-target{id="p-ai-economics"}
OpenAI is on track to lose roughly $14 billion in 2026, burning around $17 billion in cash. Anthropic, growing faster but spending heavily too, burned about $5.6 billion last year. These companies are spending far more money running AI than they're making from it. Sequoia Capital, one of Silicon Valley's most respected venture firms, published an analysis called "AI's $600B Question" that asked: the AI industry is spending enough on Nvidia chips alone to generate $600 billion in annual revenue — but actual AI revenue is a fraction of that. Where's the money coming from, and when does it start paying off?
:::

The answer, for now, is investors. Companies like Microsoft, Google, and Amazon are pouring billions into AI companies betting that the technology will eventually justify the cost. It's a gamble — a very large, very expensive gamble.

That's half the answer. The other half is you.

The idea is older than the internet. In 1973 the video piece *Television Delivers People*, by Richard Serra and Carlota Fay Schoolman, said it flatly: "You are the product of t.v." The phrasing you've probably heard — if you're not paying for it, you're the product being sold — was posted by Andrew Lewis to MetaFilter on 26 August 2010, and close variants were circulating on Usenet by 1999.

With AI assistants the trade is literal: your conversations can become training data for the next model. The providers genuinely differ, and the difference lives in the defaults.

On personal accounts the default leans toward sharing. Google says Keep Activity is on by default for anyone 18 or over. OpenAI ships "Improve the model for everyone" switched on for Free, Plus and Pro. Anthropic was opt-in for consumers until August 2025, then moved Free, Pro and Max to opt-out. All three run the opposite default for business, education and API customers, who are not trained on unless they ask to be — the account paying a bill gets the stricter setting. And opting out has a floor: Google keeps human-reviewed chats up to three years even after you delete your activity, and Anthropic still uses chats flagged for safety review.

These switches govern what happens next. They don't unsend what you already sent.

:::sandbox{variant="data-price"}
:::

Then the second currency: attention. OpenAI put ChatGPT at more than 900 million weekly users in February 2026. A habit that size is an asset whether or not it's billed today.

None of this is hidden. It's just unread.

:::callout{type="case-study"}
## When your chats become evidence
In the copyright case that the New York Times and other news plaintiffs brought against OpenAI, the fight was over consumer ChatGPT conversation logs. The plaintiffs first sought 120 million of them. OpenAI countered that a sample of 20 million was more than enough, and the plaintiffs took the deal. Then, in October 2025, OpenAI changed course and offered to hand over only the conversations a keyword search tied to the plaintiffs' articles.

In January 2026, US District Judge Sidney Stein refused, affirming Magistrate Judge Ona Wang's order to produce the whole 20-million-chat sample, {{term:de-identified|Stripped of the details that link a record to a named person or account. It is not the same as deleted, and it is not always permanent.}} and unfiltered, as "neither clearly erroneous nor contrary to law." The court took the privacy interest seriously and called it sincere, but held it adequately protected by the reduced sample size, OpenAI's de-identification, and the protective order already in the case. It also noted that users had voluntarily submitted those conversations to OpenAI in the first place.

Nobody in that sample chose to be in it. That's the shape of the trade: data you hand over becomes a thing that exists, and it is then subject to other people's decisions — a policy change, a court order, a change of ownership.
:::

:::quiz{id="u05-q3"}
question: Your personal chats with a major AI assistant may be used to train the next model. Based on this section, the most accurate statement is:
correct: B
A: Every provider puts consumer and business accounts on one policy
B: Consumer accounts default to sharing; business tiers do not
C: Switching the setting off erases the chats you already sent
D: The setting stays off until you go into settings and turn it on
feedback_correct: Right. On personal accounts the default leans toward sharing — Google states that Keep Activity is on by default for users 18 and over, OpenAI's "Improve the model for everyone" ships on for Free, Plus and Pro, and Anthropic moved consumers to opt-out in August 2025. Business tiers run the opposite way: ChatGPT Business, Enterprise, Edu and the API are not trained on unless the customer opts in, and Anthropic excludes Claude for Work, Government, Education and API use entirely. The customer paying a business bill gets the stricter default.
feedback_incorrect: The answer is B. Consumer and business accounts are not on one policy — that gap is the point. The setting does not stay off until you switch it on; on personal accounts it ships on, which is why opting out is something you have to go and do. And switching it off governs what happens next, not what already happened: Google keeps human-reviewed chats up to three years even after you delete your activity, and Anthropic still uses safety-flagged chats after you opt out.
:::

:::callout{type="case-study"}
## The $600 billion question
In June 2024, Sequoia Capital partner David Cahn published a simple calculation that shook the AI industry. Nvidia was on track to sell $150 billion in AI chips per year. The companies buying those chips needed to earn roughly 4x their hardware cost to break even (accounting for energy, buildings, staff, and profit). That meant the AI industry needed to generate $600 billion in annual revenue to justify its spending.

At the time, the entire AI industry's revenue — including all of OpenAI, Google's AI products, and everyone else — was roughly $100 billion. The gap between spending and revenue was half a trillion dollars.

Cahn's conclusion wasn't that AI was a bubble. It was that either AI revenue needs to grow 6x, or a lot of companies are going to lose a lot of money. That question hasn't been answered yet.
:::

Here's why this matters to you: the economics explain almost everything about the AI industry that otherwise seems confusing.

**Why are there different models?** Because bigger models cost more to run. Claude Opus is smarter than Claude Sonnet, but it costs roughly 5-10x more per query. Companies offer cheaper, smaller models for simple tasks and expensive, powerful models for hard ones.

**Why do free tiers have limits?** Because every message costs money. When you hit a usage cap on the free version of ChatGPT or Claude, it's because the company literally can't afford to give away unlimited access to their most powerful model.

**Why is AI improving so fast?** Partly because the massive investment is funding enormous research teams and massive compute. The race is fueled by a fear that whoever builds the best AI first will dominate the next era of technology.

**Why is AI concentrated in a few companies?** Because training {{term:frontier models|The most powerful, most expensive AI models available at any given time — the latest flagship models from labs like OpenAI, Anthropic, and Google. Building one costs billions of dollars, and which model leads changes every few months.}} requires billions of dollars in hardware and energy. This isn't a garage startup situation. You need data centers, chip allocations from Nvidia, and billions in funding. As of 2025, the top AI labs — OpenAI, Anthropic, Google DeepMind, Meta AI — are all backed by trillion-dollar companies.

:::callout{type="deep-dive"}
## The energy footprint you don't see
Data centers globally consumed roughly 415 terawatt-hours of electricity in 2024 — about 1.5% of all electricity generated on Earth, on the International Energy Agency's numbers. That is every data center, not just the AI ones: AI is a fast-growing part of the total rather than the whole of it. The IEA projects the total will more than double by 2030, reaching the equivalent of Japan's entire electricity consumption.

A single text question is small: Google measured an average Gemini prompt at about 0.24 watt-hours — roughly what a television uses in nine seconds — and independent analysts put ChatGPT in the same range. You may still see the claim that one AI query costs ten times a web search; that figure compared a worst-case AI estimate against a 2009 number for search, and it no longer holds.

The weight is in training and in scale. Epoch AI estimates that training xAI's Grok 4 in 2025 took about 310 gigawatt-hours — roughly what 30,000 American homes use in a year — and the power behind these training runs has been roughly doubling annually. Water follows the same shape: an average Gemini text prompt uses about 0.26 millilitres, five drops, but Microsoft's total water use jumped 34% in 2022 as AI training ramped up, to about 6.4 million cubic metres.

AI isn't just an abstract technology. It has a physical footprint that shows up in power grids, water bills, and carbon emissions.
:::

:::socratic
question: If training a frontier AI model costs hundreds of millions of dollars, what does that mean for who gets to build AI and who doesn't? Why does this matter?
hint: Think about how many organizations in the world have access to hundreds of millions of dollars for a single project.
concept: The economics of AI concentrate power — only a handful of well-funded organizations can build frontier models, shaping a technology that affects everyone.
:::

Understanding the economics doesn't make AI less useful. But it does make you a more informed user.

:::sandbox{variant="cost-calculator"}
:::

When a tool is "free," you're not the customer — you're the product, or you're the bet. And when you're paying, you should understand what you're paying for.

:::quiz{id="u05-q1"}
question: AI companies like OpenAI and Anthropic are currently losing billions of dollars per year. The primary reason is:
correct: A
A: Running the models for every query costs more than subscriptions and fees bring in
B: The one-time bill for training the models outweighs every other cost they carry
C: Free tiers are the whole problem, and paying users alone would cover the compute bill
D: The technology fails too often, so most people who try it refuse to pay for it
feedback_correct: Right. The core economic challenge is that inference costs — running the model for every query from every user — add up to billions per year. These companies have millions of users, many on free tiers, and the revenue from paid subscriptions and API access doesn't yet cover the enormous compute costs. Investors are betting this will change.
feedback_incorrect: The answer is A. Training is a one-time cost, and it is small next to what these companies burn every year. The technology works well — that's why hundreds of millions of people use it. Free tiers do add to the loss, but paid subscriptions and API fees still don't cover the compute bill on their own. Every query costs money to process, and at this scale those fractions of a cent add up to billions.
:::

:::socratic
question: A company is choosing between a cheaper, smaller AI model and a more expensive, powerful one for customer support. What factors should they consider beyond just the quality of answers?
hint: Think about volume of queries, cost per query, and what happens when cheaper models give wrong answers.
concept: AI model selection is an economic decision — balancing quality, cost, scale, and the cost of errors.
:::

## Live Demo

**Step 1:** Go to [openai.com/pricing](https://openai.com/pricing) and [anthropic.com/pricing](https://anthropic.com/pricing). Look at the per-token costs for different models.

**Step 2:** Open any AI tool. Write a medium-length prompt (about 200 words) and get a response. Estimate how many tokens that exchange used (rough rule: 1 token ≈ ¾ of a word, so a 200-word prompt + 500-word response ≈ 930 tokens).

**Step 3:** Calculate what that conversation cost the company. Using GPT-4o pricing as an example: input tokens might cost $2.50 per million, output tokens $10 per million. Your conversation might cost a fraction of a cent — but multiply by a million users doing the same thing.

**Step 4:** Calculate how much it would cost to run 10,000 queries per day on the most expensive model. Then on the cheapest model. The difference in cost directly shows why companies offer different model tiers.

**Step 5:** Look at the Visual Capitalist infographic:

:::embed{type="tool" title="Training Costs of AI Models Over Time — Visual Capitalist" url="https://visualcapitalist.com/training-costs-of-ai-models-over-time/"}
:::

The original Transformer model in 2017 cost $930 to train. GPT-4 cost $78 million. That's an 84,000x increase in seven years.

:::callout{type="tip"}
## Try this: Calculate your own AI cost
Take a conversation you've had with AI today. Count the rough word count of your inputs and the AI's outputs. Convert to tokens (÷ 0.75). Look up the per-token price for the model you used. Multiply. Now multiply that by the number of messages you send per week. That's what your usage costs someone — and it's why "free" tiers can't last forever.
:::

## Why This Matters

The economics of AI determine who gets access and who doesn't. If the most powerful AI costs $200/month, that creates a divide between people who can afford it and people who can't. If AI training requires billions of dollars, only a handful of companies will build frontier models — and those companies will decide what the models can and can't do.

This isn't theoretical. It's happening now. The gap between free-tier AI and paid AI is already significant, and it's growing. Understanding the economics helps you make smarter decisions about which tools to use, why they work the way they do, and what's really going on when something is offered "for free."

It also sets up the next unit perfectly: if every token costs money and every query burns compute, then the way you structure your input to AI isn't just about getting better answers — it's about efficiency. The people who communicate well with AI aren't just getting better output. They're getting better output per dollar.

:::quiz{id="u05-q2"}
question: The fact that training a frontier AI model costs hundreds of millions of dollars has which direct consequence?
correct: D
A: AI will stay too expensive for ordinary people, so most will never get to use it
B: Training costs will fall fast as chips improve, so the barrier is only temporary
C: Only governments can afford the bill, so states will end up owning the best models
D: Only a few companies with huge capital can build frontier models, concentrating power
feedback_correct: This is one of the most important structural facts about AI. Building frontier models isn't just expensive — it requires the kind of capital that only the world's largest companies can provide. This means the values, priorities, and decisions of a very small group of companies shape a technology that affects everyone. Understanding this concentration of power is key to being an informed AI user.
feedback_incorrect: The answer is D. AI is already accessible to regular people through free and paid tiers — cost doesn't lock out users, it locks out *builders*. Training costs aren't falling either; they are roughly doubling every year. And the money isn't coming from governments: the top labs are backed by trillion-dollar companies. That concentrates enormous power over a world-shaping technology in very few hands.
:::

## The Challenge

:::challenge{title="AI Budget Planner" time="30 minutes"}
Imagine you're starting a small business and want to use AI for three tasks: writing marketing copy, answering customer questions, and summarizing daily reports.

- [ ] **Research pricing** — Go to openai.com/pricing and anthropic.com/pricing. Pick a model for each task.
- [ ] **Estimate token usage** — How many tokens would each task use daily? (Remember: 1 token ≈ ¾ of a word.)
- [ ] **Calculate monthly cost** — Multiply daily token usage × per-token price × 30 days for each task.
- [ ] **Optimize** — Redo the calculation using the cheapest model that could still do each job. How much did you save?
- [ ] **Write a recommendation** — Which model for which task, and why? When is the expensive model worth it?

**Success criteria:** You can explain why different tasks justify different models, estimate real costs, and make a reasonable cost-optimization argument.
:::

## Key Takeaways

1. Training a frontier AI model costs tens to hundreds of millions of dollars. Running it costs fractions of a cent per query — but at scale, that adds up to billions.
2. The economics explain why models come in tiers, why free versions have limits, and why the industry is concentrated in a few companies.
3. Data centers use about 1.5% of global electricity (IEA, 2024), projected to double by 2030. AI is one growing part of that, and it has a real physical footprint.
4. When AI is free, someone else is paying. Understanding who — and why — makes you a more informed user.

## The Rabbit Hole

**Type:** Article
**Title:** AI's $600B Question — Sequoia Capital
**URL:** https://sequoiacap.com/article/ais-600b-question/
**Description:** Short, sharp analysis asking whether the AI industry's spending can ever be justified by revenue. Written by one of the most respected venture capital firms in the world.

## References

| Type | Title | URL | Description |
|------|-------|-----|-------------|
| Article | Sequoia Capital, "AI's $600B Question" (2024) | https://sequoiacap.com/article/ais-600b-question/ | The analysis that questioned whether AI spending can be justified |
| Report | IEA, "Energy and AI" (2025) | https://iea.org/reports/energy-and-ai | International Energy Agency's assessment of AI's energy footprint |
| Article | Epoch AI, "How Much Does It Cost to Train Frontier AI Models?" | https://epoch.ai/blog/how-much-does-it-cost-to-train-frontier-ai-models/ | Detailed breakdown of training costs across major models |
| Visual | Visual Capitalist, "Training Costs of AI Models Over Time" | https://visualcapitalist.com/training-costs-of-ai-models-over-time/ | From $930 (2017 Transformer) to $78M (GPT-4) — the cost explosion visualized |
| Audio | NPR Planet Money, "What AI Data Centers Are Doing to Your Electric Bill" (2025) | https://npr.org/2025/12/19/nx-s1-5649814/ai-data-center-electricity-bill | How AI infrastructure affects local energy costs |
| Tool | OpenAI Pricing | https://openai.com/pricing | Current per-token costs for all OpenAI models |
| Tool | Anthropic Pricing | https://anthropic.com/pricing | Current per-token costs for all Claude models |
| Report | Stanford HAI AI Index Report 2025 | https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts | Comprehensive annual snapshot of the AI industry including economics |
| Book | Agrawal, Gans & Goldfarb, *Power and Prediction* (2022) | — | How AI economics will reshape industries and decision-making |
| Article | Quote Investigator, "Quote Origin: You're Not the Customer; You're the Product" | https://quoteinvestigator.com/2017/07/16/product/ | Traces the line from Serra and Schoolman's 1973 video piece through Usenet to Andrew Lewis's 2010 post |
| Docs | Google, "Gemini Apps Privacy Hub" (updated August 2026) | https://support.google.com/gemini/answer/13594961 | Keep Activity's default, the 18-month auto-delete, human review, and the three-year reviewed-chat copy |
| Docs | OpenAI Help Center, "How your data is used to improve model performance" | https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance | The "Improve the model for everyone" control, and why personal and business accounts default differently |
| Docs | Anthropic, "Updates to Consumer Terms and Privacy Policy" (2025) | https://anthropic.com/news/updates-to-our-consumer-terms | The August 2025 move to opt-out, five-year retention, and which plans are excluded |
| Docs | Anthropic Privacy Center, "How do you use personal data in model training?" | https://privacy.claude.com/en/articles/10023548 | The Model Improvement setting, Incognito chats, and five-year versus 30-day retention |
| Article | ABA Journal, "ChatGPT creator must turn over 20M chat logs in copyright litigation" (2026) | https://abajournal.com/news/article/chatgpt-creator-must-turn-over-20m-chat-logs-in-copyright-litigation-federal-judge-says | The January 2026 ruling ordering production of de-identified consumer chat logs |