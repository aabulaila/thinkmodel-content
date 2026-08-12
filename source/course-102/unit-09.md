# Unit 09: You're the Art Director Now

*Last updated: August 9, 2026. Image and video model names churn fastest of all; the brand board and the wide-then-narrow discipline are the keepers.*

## The Hook

In June 2025, a thirty-second commercial aired during the NBA Finals. Cowboys, aliens, a man swimming in a pool of eggs: unhinged, and unmistakably intentional. It was made almost entirely with an AI video model, by roughly one person, in two to three days, for about two thousand dollars. The comparable traditional spot costs hundreds of thousands and takes a crew and weeks.

Here's the detail everyone missed while arguing about whether this was the end of filmmaking. To get fifteen usable clips, the director ran three to four hundred generations. He wrote the shot list, set the style, judged every output, kept four percent, and threw away the rest. The machine produced. A human directed.

That ratio, and that division of labor, is this unit. Production just became almost free. Which means the entire remaining job has a name you weren't expecting to hold: art director.

:::embed{type="video" title="Taste Is the Spec" src="/api/storage/public-objects/videos/c2-09-Taste_Is_The_Spec.mp4" youtubeId="E2owNX5-e64"}
:::

:::socratic
question: If anyone can now generate a hundred professional-looking images in an afternoon, what exactly still separates good visual work from bad?
hint: The generations were nearly free. What wasn't?
concept: When production is abundant, the scarce inputs are direction (knowing what to ask for) and selection (knowing what to keep). Taste moves from a luxury to the actual job.
:::

## The Core Concept

The mental model: **production is hired; taste is the spec.**

Image and video generation as of August 2026 is a crowded, fast-moving field: image models built into ChatGPT, Gemini, and their peers; dedicated tools like Midjourney; video models like Google's Veo, OpenAI's Sora, and a wave of competitors, several with meaningful free tiers or trial credits. Every name in that sentence will shuffle within a year, which is exactly why this unit refuses to be a tool tour. What's durable is the role change: these systems are a production department that works in seconds and never tires, and a production department without direction produces expensive noise. Your job moved up a floor.

Direction, concretely, is three practices. First, **reference beats adjective**: models follow examples far better than descriptions. "Warm, authentic, cozy" produces the global average of cozy; three reference images of exactly your warm produces your warm. Second, the direction lives in a document, not in your head: the {{term:brand board|A one-page visual specification: palette, mood words, three or four reference images, composition rules, and a negative list of what this brand never looks like. The visual twin of Unit 01's instruction block.}}, which is Unit 01's instruction block for the eyes, down to the banned-phrases list reborn as a {{term:negative list|The "never" half of a visual spec: styles, clichés, and elements your work must avoid (for Marra: no stock-photo gloss, no latte-art clichés, no neon).}}. Third, **generate wide, select narrow**: because production is nearly free, the professional workflow is batches, not attempts. Ask for eight, keep one, and treat the other seven as the cost of doing business, because {{term:selection|Choosing the keeper from a batch of generations, judged against the brand board. In AI-era visual work, selection is where taste is actually applied.}} is where your taste enters the work. The Kalshi ratio (hundreds generated, fifteen kept) wasn't waste. It was the method.

The pipeline, then, is a graph you already know how to draw: brief from the brand board, generate a wide batch, select against the board, refine the keeper, optionally hand the still into a video model (an image-to-video step is today's most reliable route to controlled motion), and stop at a human gate before anything ships. Unit 03's Handoff, Unit 08's graph, wearing sunglasses.

:::analogy-target{id="p-art-director"}
This is precisely how professional creative work has always been structured. The art director on a shoot doesn't operate the camera; the photographer does. The director's contribution is the spec (mood boards, references, shot lists) and the selects (the contact-sheet review where three hundred frames become five). Nobody says the art director "didn't really make it." The making was always two jobs: production and judgment. AI just made the first one cheap enough that everyone gets promoted into the second.
:::

Your brand board is a written instruction block before it's anything visual, so draft it where you draft all your specs:

:::sandbox{variant="prompt-lab"}
:::

:::callout{type="case-study"}
## Two thousand dollars, prime time
The Kalshi NBA Finals ad from the hook is worth dissecting as a workflow, because its director, PJ Accetturo, published his method. He used a chat model (Gemini) to turn a rough script into a structured shot list with one fully self-contained prompt per shot, then fed those prompts to Veo 3, Google's video model, generating three to four hundred clips to get fifteen keepers, and cut them together in an ordinary editor over two to three days. Total cost: around two thousand dollars, which he estimated at ninety-five percent below a traditional production. It reportedly pulled tens of millions of views within weeks.

Read the roles, not the tools. The chat model was a production assistant; the video model was the crew; the editor was the editor. Every judgment (the concept, the style, the shot list, which fifteen clips survived) stayed human. Accetturo's own summary of the lesson: it was cheap, and it still took direction, taste, and storytelling to make it work. That's this unit's mental model, spoken by the person who proved it on national television.
:::

:::callout{type="warning"}
## Common misconception: generated means unencumbered
Three legal and ethical realities travel with every generation, and operators know them cold. First, rights: tools differ on how outputs may be used commercially, and prompting for a living artist's style or a real person's face ranges from disrespectful to litigable; check your tool's current terms before anything ships, and direct with your own references rather than someone's name. Second, disclosure: major platforms increasingly expect AI-generated content to be labeled, and several models watermark outputs invisibly (Google's SynthID) or attach provenance credentials (the C2PA standard) precisely so origins can be checked; honest labeling is both policy compliance and, increasingly, just what credible accounts do. Third, people: generating a real, identifiable person doing something they didn't do isn't a gray area. It's the line. The Studio's rule generalizes: real products, real places, invented mascots, yes; real humans, never without consent.
:::

:::socratic
question: A tool's demo reel shows flawless clips. Your first hour with it produces mush. What's the professional explanation, and what does it change about your workflow?
hint: How many generations do you suppose the demo reel's makers ran, and what did they do with the rest?
concept: Demo reels are selects: the visible survivors of enormous hidden batches. Matching them requires adopting the same ratio, which is why wide-then-narrow is a method, not a workaround.
:::

:::quiz{id="c2u09-q1" objective="U09-O1"}
question: Lina's club posters keep coming out generic despite detailed prompts full of adjectives ("modern, vibrant, energetic, clean"). The art-director diagnosis is:
correct: D
A: Her prompts are too short, so stacking on more adjectives will eventually lock the style in
B: A paid frontier image tool would hold a consistent style from those adjectives on its own
C: Generic is baked into image models, so she should stop generating and commission a designer
D: Adjectives fetch the average of each word, so she needs a brand board, references, NEVER list
feedback_correct: "Vibrant" means everything ever labeled vibrant, averaged: that's where generic comes from. References collapse the average into her specific taste, the negative list fences off the clichés, and wide-then-narrow gives her selection power over luck. The tool was never the bottleneck; the spec was. Same lesson as Unit 01: quality follows the configured input.
feedback_incorrect: The answer is D. A pricier model averages the same adjectives more beautifully, and more adjectives just average more things. The fix is directorial: references over descriptions, a written board with a negative list, and batches she selects from. Generic output is almost always an unspecified brief, not an incapable tool.
:::

## Live Demo

**Free path:** image generation is free with limits inside Gemini, ChatGPT, and Microsoft's tools; video generation free tiers are stingier and change monthly, so the video step is marked optional and the unit is complete without it.

**Step 1, the Studio's board.** The worked example. Marra Coffee's brand board, as text (a board can start as words; the references get attached in your workspace):

```prompt
MARRA COFFEE, VISUAL SPEC
Mood: early morning, lived-in, warm. Film-photo feel, not gloss.
Palette: cream, walnut brown, deep green, one warm accent.
Always: real textures (steam, crumbs, worn wood), natural light, one human detail (hands, a scarf, a note).
Composition: close and low; the counter is eye level.
NEVER: stock-photo gloss, latte-art clichés, neon, empty minimalism, more than one filter's worth of nostalgia.
Reference images: [attach 3 in the workspace]
```

**Step 2, wide.** In any free image tool, generate a batch of six to eight for one Studio post ("the cardamom latte, first pour of the morning"), pasting the board as the prompt's spine. Do not judge yet. Volume first.

**Step 3, narrow.** Now judge: score each candidate against the board, especially the NEVER list, and keep exactly one. Write one sentence on why the keeper won. That sentence is your taste, becoming visible to itself.

**Step 4, yours.** Build your own board for one Unit 01 domain (a club, a project, a channel, a portfolio): mood, palette, always, composition, NEVER, and three references you actually collect (from your own photos or saved inspiration). Run wide-then-narrow once for a real need.

**Step 5, motion, optional.** If you have access to any video model's free tier: hand your keeper still into it ("subtle motion: steam rising, light shifting, nothing else changes"). Image-to-video from a selected still is the controlled path; text-to-video from scratch is the chaos path. Either way, the output waits at your gate like everything else.

**The Handoff:** the board joins its workspace as a standing file, next to the voice block it mirrors. From now on, the Studio's pipeline (and yours) can produce visuals under the same governance as its words: specced, gated, labeled.

:::compare
before_label: The prompt gambler
before: Types adjectives, generates one, judges it against a vibe in their head, regenerates on frustration. Every session starts from zero, outputs drift with the tool's defaults, and the occasional great result can't be repeated because nothing about it was written down.
after_label: The art director
after: Directs from a board with references and a NEVER list, generates in batches, selects with reasons, and refines the keeper. Style is consistent because the spec is standing, results are repeatable because the method is, and the tools can be swapped without the look changing.
:::

## Operator Moves

**Reference beats adjective.** Three images of exactly what you mean outrank thirty words about it. Start collecting references the way writers collect quotes; your board is only as good as its examples.

**Write the NEVER list first.** Taste shows up faster as rejection than description: you know what your thing must never look like before you can articulate what it is. Fence the clichés, then explore inside.

**Generate wide, select narrow, say why.** Batches of six-plus, one keeper, one written sentence on why it won. The sentence is the move: it converts taste from a feeling into a spec that improves your next brief.

## Why This Matters

Visual production just went the way of text: abundant, instant, nearly free. Every argument this course has made about words now applies to images: the differentiator isn't access to the tool, it's the standing spec (Unit 01), the measured selection (Unit 02's benchmark logic, applied by eye), and the gate before anything ships (Unit 06). People who internalize that produce distinctive work at absurd speed. People who don't produce infinite competent mush, and the world is about to drown in competent mush, which makes distinctive cheaper to spot and more valuable than ever.

The direction skills are also brutally portable. A brand board is a spec; wide-then-narrow is hypothesis testing; the NEVER list is constraint design. You'll use this unit's method on presentations, on products, on any domain where generation got cheap and judgment didn't, which is, increasingly, all of them.

:::socratic
question: The ad in the case study was one director plus AI production. What happens to the value of the remaining human roles (concept, spec, selection) as the production layer keeps improving?
hint: Follow the bottleneck.
concept: Improving production concentrates value in whatever it can't do: knowing what's worth making and recognizing it when it appears. The better the machines produce, the more the spec and the select are the job.
:::

:::quiz{id="c2u09-q2" objective="U09-O2"}
question: Omar's automated pipeline generates a weekly image for his newsletter. Which version is both well-governed and honest, per this unit and Unit 08?
correct: A
A: Generate a batch against his board, hold the selects at his gate, label honestly, keep the log
B: Publish one generation the moment it lands and label nothing, since an image is low-stakes
C: Let a second AI review each image and publish whatever it approves, which saves him the gate
D: Drop generated images entirely, since disclosure rules make them impractical for a newsletter
feedback_correct: Every governance layer, correctly placed: the board makes output his instead of generic, the batch gives selection its material, the gate satisfies both Unit 06's irreversible-edge rule and platform expectations of human review, labeling handles disclosure honestly, and the log is Unit 08's unconditional obligation. Note option C's trap: an AI judging AI output is a filter made of the same material as the thing it checks, Unit 07's lesson in a new costume.
feedback_incorrect: The answer is A. Publishing is an irreversible edge, so it gets a gate regardless of stakes, and platform AI-content policies make unlabeled autopilot a compliance risk on top of a quality one. An AI pre-check can assist but can't replace the human select. And abandonment (option D) mistakes a labeling requirement for a prohibition: honest, gated, specced generation is exactly the workable middle.
:::

## The Challenge

:::challenge{title="The Brand Board Pipeline" time="45 minutes"}
Build the visual spec for something real, and run one governed production cycle through it.

- [ ] **Pick the domain:** one real visual need from your life (a club, project, channel, event, portfolio) tied to a Unit 01 workspace.
- [ ] **Build the board:** mood words, palette, always-rules, composition rule, a NEVER list of at least four items, and three collected reference images. Text drafted in prompt-lab, board filed in the workspace.
- [ ] **Run wide:** one batch of six or more generations in any free tool, board as the prompt's spine.
- [ ] **Select narrow:** one keeper, plus one written sentence per rejected candidate naming which board rule it broke (this is the taste log).
- [ ] **Refine once:** one revision pass on the keeper, changing a single variable.
- [ ] **Ship it honestly:** if it's going anywhere public, publish through your gate with labeling per the platform's rules; if not, file it as the workspace's first on-brand asset.

**Success criteria:** a complete board with references and a NEVER list, a taste log covering a full batch, one refined keeper, and (if published) a labeled, gated release. The board is the artifact: your next hundred visuals inherit it.
:::

## Key Takeaways

1. Production is hired; taste is the spec. Generation became nearly free, which promoted you: direction and selection are now the job.
2. Reference beats adjective, and the direction lives in a standing brand board with a NEVER list: Unit 01's instruction block, for the eyes.
3. Generate wide, select narrow, write why. The professional ratio is batches over attempts, and the written select-reason is how taste compounds.
4. Generated doesn't mean unencumbered: rights per your tool's terms, honest labeling per your platform's rules, provenance marks like SynthID and C2PA, and never real people without consent.

## The Rabbit Hole

**Type:** Article
**Title:** Kalshi's AI-generated NBA Finals ad, Ad Age
**URL:** https://adage.com/technology/ai/aa-kalshi-airs-ai-ad-during-nba-finals-using-google-veo-3/
**Description:** The trade press on the two-thousand-dollar prime-time spot, with the director on record about his method. Read it counting roles instead of tools: every judgment in the pipeline is still a person, and that person's job description is this unit.

## References

| Type | Title | URL | Description |
|------|-------|-----|-------------|
| Article | Ad Age, Kalshi airs AI-generated ad during NBA Finals (June 2025) | https://adage.com/technology/ai/aa-kalshi-airs-ai-ad-during-nba-finals-using-google-veo-3/ | The case study's primary trade coverage |
| Article | eWeek, how the Kalshi ad was made (June 2025) | https://www.eweek.com/news/ai-ad-kalshi-nba-finals/ | The 300-400 generations, 15 keepers workflow, from the director |
| Docs | Google DeepMind, SynthID | https://deepmind.google/technologies/synthid/ | Invisible watermarking of AI-generated media |
| Docs | C2PA, Content Credentials | https://c2pa.org | The provenance standard for attaching origin to media |
| Docs | Meta transparency, labeling AI-generated content | https://transparency.meta.com/features/labeling-ai-generated-content | Platform disclosure expectations in practice |
| Docs | Google, Veo overview | https://deepmind.google/models/veo/ | One current frontier video model, for the optional motion step |
| Docs | OpenAI, Sora | https://openai.com/sora | Another, for the same step; compare free access when you attempt it |
