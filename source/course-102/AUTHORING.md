# Authoring guide — Course 102 (Operator)

How to write, replace, and extend the units of course 102. Everything here is
the format the platform already renders; a standard unit needs **no code
changes** — only the markdown file and (if titles change) one registry entry.

---

## 1. Where things live

| What | Where |
| --- | --- |
| Unit markdown | `artifacts/ai-literacy/public/content/course-102/unit-NN.md` |
| Unit list, titles, phases, teach-back prompts | `artifacts/api-server/src/lib/courses.ts` → `COURSE_102_UNITS` |
| Course entry (title, description, prerequisite) | same file → `COURSES` |
| Sandbox components | `artifacts/ai-literacy/src/components/sandbox-components.tsx` |
| Sandbox registry (variant → component) | `artifacts/ai-literacy/src/components/markdown-renderer.tsx` |

**File naming is strict:** `unit-00.md` … `unit-12.md`, zero-padded, one file
per unit id. `unit-00.md` is the orientation unit ("Start Here"): always
unlocked, no Prove It, not counted in progress. Files whose name doesn't match
`unit-NN.md` are ignored — that's why this guide can live in the same folder.

To replace a unit: overwrite its markdown file. That's it. The unit's title,
phase, and teach-back prompt come from the registry, so change those only if
the new content needs a different title or prompt.

---

## 2. Document structure

```markdown
# Unit Title

*Last updated: August 9, 2026. One sentence on what may have aged.*

## The Hook

Prose, directives, images…

## Core Concept

…
```

The renderer splits a unit into sections on `## ` headings and builds the
in-unit navigation and reading-progress tracking from them. **Anything before
the first `## ` heading is dropped**, so never put content directly under the
`# Title`, with two exceptions handled for you:

- The `# Title` line itself is removed before rendering — the page header
  already prints the unit title, so leaving it in would show it twice.
- An italic `*Last updated: …*` line in those opening lines is lifted out and
  rendered at the **foot of the unit page**, under a divider. Keep it to one
  short paragraph; write it as a footnote ("verified on this date"), not as an
  introduction, because that's where the reader will meet it. Omit the line
  entirely and no footer appears.

Recognised section headings get their own icon and styling: `The Hook`,
`Core Concept`, `Live Demo`, `Why This Matters`, `Challenge`,
`Key Takeaways`, `Rabbit Hole`, `References`. Other headings render plainly.

Inline glossary terms use `{{term:name|definition}}`, which renders as a
clickable term with a definition popover. The definition is also emitted as
machine-readable markup (`schema.org/DefinedTerm`), so write it as a
self-contained sentence — it may be quoted away from the paragraph it sits in.

### What your `## ` headings also produce

Three things are generated from the section headings, so the wording you choose
is doing more work than it looks:

- **A link anchor.** Each section gets an id derived from its heading —
  `## Why This Matters` becomes `#why-this-matters` — and readers can copy that
  link from the heading itself. The ids are how search and AI answer engines
  cite one part of a unit, so **renaming a heading breaks any link already
  pointing at it.** Rename deliberately, not for polish. Two identical headings
  in one unit get `-2`, `-3` suffixes; prefer making them distinct.
- **The "On this page" list** at the top of the unit, in heading order. A unit
  with a single section doesn't get one.
- **A summary block** above that list. It is *lifted*, never written: the first
  Key Takeaway, joined with the second if the first is short. It is not shown
  when the unit has no `## Key Takeaways` and its opening paragraph would just
  be repeated (the orientation unit is the one case). Two consequences worth
  knowing: **write takeaway 1 as the single most quotable sentence in the
  unit**, because it becomes the first prose on the page and the passage an
  answer engine is most likely to pull; and don't open a takeaway with "you"
  instructions that read oddly out of order.

### What reaches a crawler

Everything a reader can see without clicking is in the served HTML — including
callout bodies and the References table, both of which look collapsed but are
fully present in the markup. Quiz feedback and Socratic prompts are deliberately
kept out, so a quiz's answers are not readable in the page source. Assume any
other prose you write is public and quotable. See
`artifacts/ai-literacy/docs/served-html-audit.md` for the full accounting.

---

## 3. Directive syntax

Every interactive block is a fenced directive:

```
:::name{key="value" key2="value2"}
body lines
:::
```

Parameters are always `key="value"` (double quotes). The closing `:::` must be
on its own line. Directives cannot nest.

### quiz

```
:::quiz{id="c2u01-q1" objective="U01-O1"}
question: What is the operator actually configuring?
correct: C
A: The model's weights
B: The temperature slider
C: The context the model reads before it answers
D: Nothing — the model decides
feedback_correct: Right — context is the operator's real control surface.
feedback_incorrect: The answer is C. …
:::
```

- `id` — stable, unique per unit; convention `c2uNN-qN`. Answers are stored
  against this id, so **don't renumber ids after students have answered**.
- `correct` — a single option letter (`A`–`D`). Grading happens on the server
  by re-parsing this file, so the correct answer never reaches the browser.
- Options are lines starting with `A:` … `D:`.
- `objective` — optional tag for reporting; ignored by the renderer today.

### callout

```
:::callout{type="warning"}
Body markdown.
:::
```

`type` is one of `deep-dive` (default), `case-study`, `warning`, `tip`.
Callouts render collapsed and expand on click.

### challenge

```
:::challenge{title="Build a scoped workspace" time="25 min"}
Intro prose.

- [ ] First checkable step
- [ ] Second checkable step

**Success criteria:** what "done" looks like.
:::
```

Checkbox lines become a persistent checklist. One challenge per unit is the
convention.

### embed

```
:::embed{type="video" title="Remembered by Accident" src="/api/storage/public-objects/videos/c2-01-Name.mp4"}
:::

:::embed{type="video" title="Someone else's video" id="YOUTUBE_ID" link="true"}
:::

:::embed{type="tool" title="Try it" url="https://example.com"}
:::
```

- `src` — a self-hosted file (object storage path). If the file is missing the
  player shows an "unavailable" panel rather than a broken box.
- `id` — YouTube id. Add `link="true"` to render a link card instead of an
  inline player (use this for third-party videos).
- `type="tool"` with `url` renders an external-tool card.

### compare

```
:::compare
before_label: Chat
before: One long thread, everything mixed together.
after_label: Workspace
after: One scoped project per domain.
:::
```

### diagram

```
:::diagram{label="The delegation loop"}
Plain-text or ASCII diagram body.
:::
```

### socratic

```
:::socratic
question: Who decided what your assistant remembers about you?
hint: Think about where each remembered item came from.
concept: accidental context
:::
```

**Rendered**, behind the Socratic Mode toggle at the top of the unit. When a
reader turns it on, each block becomes a question card, and an unanswered card
gates the rest of the unit until it is answered — so where you place a socratic
block decides where a reader can be stopped. Answers go to Claude for
evaluation; a failed evaluation leaves the gate closed rather than opening it.
With the toggle off (the default) the blocks produce no output.

`concept:` is not shown to the reader. It is an authoring note describing what
the question is meant to surface — parsed, then discarded, like `objective` on
quizzes. Write it for the next author, not for the student.

### analogy-target

```
:::analogy-target{id="p-context"}
The paragraph students can ask to have re-explained through their own
interests.
:::
```

Renders the paragraph plus a "make this personal" control. `id` must be unique
within the unit.

### sandbox

```
:::sandbox{variant="workflow-sim" mode="checkpoint"}
:::
```

See the next section.

---

## 4. Teach-back prompts (Prove It)

Each unit's Prove It stage asks the student to explain the unit out loud. The
prompt is **not** in the markdown — it lives on the unit's registry entry:

```ts
// artifacts/api-server/src/lib/courses.ts
{ id: 5, title: "Inside the Harness", phase: 2, phaseTitle: "Delegate the Work",
  teachBackPrompt: "Explain what a harness is and why the same model behaves differently in two different tools." },
```

Change the prompt there; the Prove It page reads it from the API. The
orientation unit (`id: 0`) is marked `optional: true` and has no Prove It
stage.

---

## 5. Sandbox component registry

A sandbox is an interactive React widget dropped into a unit by directive. The
registry is the `switch (variant)` block in `markdown-renderer.tsx`.

**Currently registered variants:** `training-data`, `prompt-lab`,
`cost-calculator`, `data-price`, `workflow-sim` (modes `preview`, `checkpoint`,
`injection`, `build`; defaults to `preview` when the `mode` attribute is
missing), `grid-router`, and `harness-inspector`.

All of them are canned, deterministic, and offline (`prompt-lab` is the one
exception: it streams from the platform's own AI endpoint). `workflow-sim`,
`grid-router`, and `harness-inspector` live in `src/components/sandboxes/`;
the workflow simulator's shared engine and Marra Coffee content are in
`src/lib/workflow-sim-core.ts`, and the grid router's illustrative prices in
`src/lib/router-pricing.ts`. Sandboxes take an optional `unitLabel` prop and
announce whichever unit they are rendered in. A variant name the registry
doesn't know still renders the "coming soon" placeholder.

Adding a new one is exactly two steps:

1. **One component** in `sandbox-components.tsx`:

   ```tsx
   export function GridRouter() {
     return <div>…</div>;
   }
   ```

2. **One registry entry** in the sandbox switch in `markdown-renderer.tsx`:

   ```tsx
   case "grid-router":
     return <GridRouter key={i} />;
   ```

Any unit in any course can then use it with
`:::sandbox{variant="grid-router"}`. If a widget needs sub-modes, read
`d.params.mode` and pass it through as a prop (that's how `workflow-sim`
works).

---

## 6. Checklist for replacing a placeholder unit

1. Drop the finished markdown into `unit-NN.md`.
2. Confirm the first section starts with `## ` and every directive closes with
   `:::`.
3. Give every quiz a unique `id` (`c2uNN-qN`) and exactly one `correct:` letter.
4. Update the unit's `title` / `teachBackPrompt` in `COURSE_102_UNITS` if the
   content changed them.
5. Reload the unit page — content is read from disk on every request, so no
   rebuild is needed for markdown-only changes.
