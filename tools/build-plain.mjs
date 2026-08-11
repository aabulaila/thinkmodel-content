#!/usr/bin/env node
/**
 * Convert ThinkModel's interactive unit markdown into plain markdown.
 *
 * The units are authored in a directive dialect (`:::quiz`, `:::socratic`,
 * `{{term:name|definition}}`) that only the ThinkModel reader knows how to
 * render. That dialect is what makes the course interactive, and it is also
 * what would make it unforkable: someone opening a unit to translate it sees
 * markup they cannot preview, and GitHub shows them a wall of colons.
 *
 * This produces the readable build — every unit as ordinary markdown that
 * renders anywhere, with nothing dropped. Quizzes keep their answers behind a
 * <details>, so a reader still gets to think first. Glossary terms are bolded
 * inline and collected into a per-unit glossary.
 *
 * The directive source stays canonical: edit there, regenerate here.
 *
 * Usage: node tools/build-plain.mjs <source-dir> <out-dir>
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

/** Split markdown into prose and `:::name{attrs}` … `:::` blocks, in order. */
export function splitDirectives(markdown) {
  const segments = [];
  const lines = markdown.split("\n");
  let prose = [];
  let i = 0;

  while (i < lines.length) {
    const open = /^:::([a-z-]+)(?:\{(.*)\})?\s*$/.exec(lines[i]);
    if (!open) {
      prose.push(lines[i]);
      i++;
      continue;
    }

    if (prose.length) {
      segments.push({ type: "prose", text: prose.join("\n") });
      prose = [];
    }

    const body = [];
    i++;
    // A directive ends at a bare ":::" on its own line. Nested opens are not
    // part of the dialect, so the first bare terminator closes the block.
    while (i < lines.length && lines[i].trim() !== ":::") {
      body.push(lines[i]);
      i++;
    }
    i++; // consume the terminator

    segments.push({
      type: "directive",
      name: open[1],
      attrs: parseAttrs(open[2] ?? ""),
      body: body.join("\n"),
    });
  }

  if (prose.length) segments.push({ type: "prose", text: prose.join("\n") });
  return segments;
}

function parseAttrs(raw) {
  const attrs = {};
  for (const match of raw.matchAll(/([a-zA-Z_][\w-]*)="([^"]*)"/g)) {
    attrs[match[1]] = match[2];
  }
  return attrs;
}

/** `key: value` lines, the shape every directive body uses. */
function parseFields(body, keys) {
  const out = {};
  for (const line of body.split("\n")) {
    const trimmed = line.trim();
    for (const key of keys) {
      if (trimmed.startsWith(`${key}:`)) out[key] = trimmed.slice(key.length + 1).trim();
    }
  }
  return out;
}

/** A <details> block. The blank lines are required or the body renders literally. */
function details(summary, ...blocks) {
  return `<details>\n<summary>${summary}</summary>\n\n${blocks.filter(Boolean).join("\n\n")}\n\n</details>`;
}

function quote(label, body) {
  const text = body.trim().split("\n").map((l) => (l ? `> ${l}` : ">")).join("\n");
  return label ? `> **${label}**\n>\n${text}` : text;
}

const CALLOUT_LABEL = {
  "case-study": "Case study",
  warning: "Watch out",
  "deep-dive": "Deep dive",
  tip: "Tip",
};

// Case studies and warnings carry the unit's evidence and stay open, matching
// the reader. Deep dives and tips are asides and collapse.
const CALLOUT_OPEN = new Set(["case-study", "warning"]);

const RENDER = {
  quiz(d) {
    const f = parseFields(d.body, ["question", "correct", "feedback_correct", "feedback_incorrect"]);
    const options = [];
    for (const line of d.body.split("\n")) {
      const m = /^\s*([A-D]):\s*(.+)$/.exec(line);
      if (m) options.push({ label: m[1], text: m[2].trim() });
    }
    const list = options.map((o) => `- **${o.label}.** ${o.text}`).join("\n");
    const answer = options.find((o) => o.label === f.correct);
    return [
      `**Knowledge check —** ${f.question ?? ""}`,
      list,
      details(
        "Show answer",
        answer ? `**${answer.label}. ${answer.text}**` : `**Answer: ${f.correct ?? "?"}**`,
        f.feedback_correct,
      ),
    ].join("\n\n");
  },

  socratic(d) {
    const f = parseFields(d.body, ["question", "hint", "concept"]);
    // `concept` is an author's note on what the question should surface. It is
    // never shown to a learner in the reader, so it is not shown here either.
    return [
      quote("Think about this before reading on", f.question ?? ""),
      f.hint ? details("Hint", f.hint) : "",
    ]
      .filter(Boolean)
      .join("\n\n");
  },

  callout(d) {
    const type = d.attrs.type ?? "deep-dive";
    const lines = d.body.split("\n");
    const titleLine = lines.find((l) => /^##\s+/.test(l));
    const title = titleLine ? titleLine.replace(/^##\s+/, "").trim() : "";
    const body = lines.filter((l) => !/^##\s+/.test(l)).join("\n").trim();
    const label = CALLOUT_LABEL[type] ?? "Note";
    return CALLOUT_OPEN.has(type)
      ? quote(title ? `${label}: ${title}` : label, body)
      : details(title ? `${label}: ${title}` : label, body);
  },

  compare(d) {
    const f = parseFields(d.body, ["before_label", "before", "after_label", "after"]);
    return [
      quote(f.before_label ?? "Before", f.before ?? ""),
      quote(f.after_label ?? "After", f.after ?? ""),
    ].join("\n\n");
  },

  challenge(d) {
    const checks = [];
    const rest = [];
    let criteria = "";
    for (const line of d.body.split("\n")) {
      const check = /^-\s*\[[\sx]\]\s*(.+)/.exec(line);
      if (check) checks.push(check[1].trim());
      else if (line.trim().startsWith("**Success criteria:**")) criteria = line.trim();
      else rest.push(line);
    }
    const head = d.attrs.title ? `### Challenge: ${d.attrs.title}` : "### Challenge";
    const time = d.attrs.time ? `*Time: ${d.attrs.time}*` : "";
    return [head, time, rest.join("\n").trim(), checks.map((c) => `- [ ] ${c}`).join("\n"), criteria]
      .filter(Boolean)
      .join("\n\n");
  },

  embed(d) {
    const title = d.attrs.title ?? "Resource";
    if (d.attrs.type === "tool") return quote(`Try it: ${title}`, d.attrs.url ?? "");
    // Third-party videos are somebody else's work and are linked, never bundled.
    if (d.attrs.id) {
      return quote(`Video: ${title}`, `https://www.youtube.com/watch?v=${d.attrs.id}\n\nThird-party video — not covered by this repository's licence.`);
    }
    // ThinkModel's own videos are published CC BY 4.0 on YouTube, so they carry
    // the same terms as the text and a fork can re-host and subtitle them.
    const link = d.attrs.youtubeId
      ? `https://www.youtube.com/watch?v=${d.attrs.youtubeId}`
      : "Available in the ThinkModel reader at https://thinkmodel.ai";
    return quote(`Video: ${title}`, `${link}\n\nThinkModel video — CC BY 4.0, the same licence as the text.`);
  },

  sandbox(d) {
    return quote(
      "Interactive",
      `This unit has an interactive exercise (\`${d.attrs.variant ?? "sandbox"}\`) that runs in the ThinkModel reader at https://thinkmodel.ai. It cannot be reproduced in plain text.`,
    );
  },

  diagram(d) {
    // The source is inline SVG themed for a dark background; GitHub strips it
    // and it would be illegible here anyway.
    return quote("Diagram", `${d.attrs.label ?? "Diagram"} — viewable in the ThinkModel reader at https://thinkmodel.ai`);
  },

  "analogy-target": (d) => d.body.trim(),
};

/** Replace `{{term:name|definition}}`, returning the prose and the terms found. */
export function extractTerms(text) {
  const terms = new Map();
  const out = text.replace(
    /\{\{term:([^|]+)\|([^}]+)\}\}/g,
    (match, name, definition, offset, whole) => {
      const clean = name.trim();
      if (!terms.has(clean)) terms.set(clean, definition.trim());
      // Some terms already sit inside a bold span the author opened before the
      // directive and closed several words after it — `**{{term:X|…}} files.**`.
      // Bolding again would emit ****X** files.**, so leave those alone.
      const alreadyBold =
        whole.slice(Math.max(0, offset - 2), offset) === "**" ||
        whole.slice(offset + match.length, offset + match.length + 2) === "**";
      return alreadyBold ? clean : `**${clean}**`;
    },
  );
  return { text: out, terms };
}

export function toPlainMarkdown(markdown) {
  const rendered = [];
  const glossary = new Map();

  for (const segment of splitDirectives(markdown)) {
    const raw =
      segment.type === "prose"
        ? segment.text
        : (RENDER[segment.name] ?? ((d) => d.body.trim()))(segment);
    const { text, terms } = extractTerms(raw);
    for (const [name, definition] of terms) if (!glossary.has(name)) glossary.set(name, definition);
    if (text.trim()) rendered.push(text.trim());
  }

  // Some terms are already wrapped in ** in the source, and bolding the
  // replacement again yields ****term****, which markdown renders literally.
  let out = rendered.join("\n\n").replace(/\*{4}([^*]+)\*{4}/g, "**$1**");
  if (glossary.size) {
    const entries = [...glossary.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([name, definition]) => `**${name}** — ${definition}`)
      .join("\n\n");
    out += `\n\n## Glossary\n\n${entries}`;
  }
  return `${out.replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

function main() {
  const [sourceDir, outDir] = process.argv.slice(2);
  if (!sourceDir || !outDir) {
    console.error("usage: node tools/build-plain.mjs <source-dir> <out-dir>");
    process.exit(2);
  }
  mkdirSync(outDir, { recursive: true });

  const units = readdirSync(sourceDir)
    .filter((f) => /^unit-\d+\.md$/.test(f))
    .sort();
  if (!units.length) {
    console.error(`no unit-NN.md files in ${sourceDir}`);
    process.exit(1);
  }

  for (const file of units) {
    const plain = toPlainMarkdown(readFileSync(join(sourceDir, file), "utf8"));
    writeFileSync(join(outDir, basename(file)), plain);
  }
  console.log(`  ${units.length} units -> ${outDir}`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
