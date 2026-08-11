/**
 * Golden test for the plain-markdown build.
 *
 * The fixture exercises every directive the courses use. If the converter's
 * output changes, this fails and the diff has to be reviewed and the expected
 * file updated deliberately — updating it is its own decision, never a step in
 * making the check pass.
 *
 * Run: node --test tools/
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { toPlainMarkdown, splitDirectives, extractTerms } from "./build-plain.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const fixtures = join(here, "fixtures");

test("every directive converts to the reviewed plain-markdown output", () => {
  const input = readFileSync(join(fixtures, "sample.md"), "utf8");
  const expected = readFileSync(join(fixtures, "sample.expected.md"), "utf8");
  assert.equal(toPlainMarkdown(input), expected);
});

test("no directive syntax survives the conversion", () => {
  const out = toPlainMarkdown(readFileSync(join(fixtures, "sample.md"), "utf8"));
  assert.equal(/^:::/m.test(out), false, "a ::: directive survived");
  assert.equal(/\{\{term:/.test(out), false, "a {{term:}} survived");
  assert.equal(/\*{4}/.test(out), false, "unbalanced bold from a nested term");
});

test("a term already inside a bold span is not double-bolded", () => {
  const { text } = extractTerms("**{{term:X|def}} and more.**");
  assert.equal(text, "**X and more.**");
});

test("a bare term is bolded and collected", () => {
  const { text, terms } = extractTerms("a {{term:thing|a definition}} here");
  assert.equal(text, "a **thing** here");
  assert.equal(terms.get("thing"), "a definition");
});

test("an unterminated directive does not swallow the rest of the unit", () => {
  const segments = splitDirectives("before\n\n:::quiz\nquestion: q\n");
  assert.equal(segments[0].type, "prose");
  assert.equal(segments[1].name, "quiz");
});

test("the built courses contain no directive syntax", () => {
  for (const course of ["101-fundamentals", "102-operator"]) {
    const dir = join(here, "..", course);
    const units = readdirSync(dir).filter((f) => f.endsWith(".md"));
    assert.ok(units.length > 0, `${course} has no units`);
    for (const unit of units) {
      const text = readFileSync(join(dir, unit), "utf8");
      assert.equal(/^:::/m.test(text), false, `${course}/${unit} still has a directive`);
      assert.equal(/\{\{term:/.test(text), false, `${course}/${unit} still has a raw term`);
    }
  }
});
