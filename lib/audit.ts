/* The audit pass.

   THE NUMBERS COME FROM lib/rules.ts. The group counts, the total, and the
   rule numbers are shared with /rules and are imported rather than retyped —
   if they drift the site contradicts itself in public, and on this page the
   arithmetic is load-bearing because the closing note explains the 60 − 54 gap.

   Inline markup in the copy: **stars** → <b>. See components/inline.tsx. */

import {
  AUDITED_GROUPS,
  AUDITED_RULES,
  RULE,
  TOTAL_RULES,
  UNCHECKED_RULES,
  Spell,
  spell,
} from "@/lib/rules";

/* ---------- the run, and the finding it raised ---------- */

export const run = {
  screens: 8,
  rules: TOTAL_RULES,
  broken: 1,
  seconds: 1.9,
} as const;

/** 59 — held is whatever was not broken, so the two cannot disagree */
export const held = run.rules - run.broken;

export const finding = {
  group: "Coverage",
  rule: RULE.disputed,
  verdict: "Broken",
  detail: "Every state is drawn",
  screens: ["Queue · screen 03", "Detail · screen 06"],
};

/* the screen being read, behind the finding */
export const screen = {
  ref: "claims-desk · queue",
  page: "03",
  of: "08",
  title: "Ready for decision",
  caption: "Rules read against this screen:",
  /** the broken one is drawn in coral */
  steps: [
    { text: "Every figure names the rows it derives from" },
    { text: "Status values come from a closed set" },
    { text: "Every state in the data is drawn on screen", hit: true },
    { text: "Settled records are not offered actions" },
    { text: "Each route referenced resolves to a page" },
  ],
  log: [
    { rule: RULE.total, verdict: "held", text: "footer derives its own total", ok: true },
    { rule: RULE.disputed, verdict: "broken", text: "Disputed appears on no screen", ok: false },
    { rule: RULE.settled, verdict: "held", text: "no action offered on settled", ok: true },
  ],
  note: "Re-run after the fixture changes…",
};

/* ---------- what the pass can and cannot settle ---------- */

export type ReachItem = { text: string; tag: string };

export const reach = {
  decidable: {
    title: "Decidable, so it reports",
    lede: "Questions with an answer in the data or the markup, where a disagreement is a fact rather than an opinion.",
    items: [
      { text: "A figure with no traceable source", tag: "derivation" },
      { text: "A status in the data with no appearance", tag: "coverage" },
      { text: "An action offered on a record that cannot take it", tag: "affordance" },
      { text: "A route referenced that does not exist", tag: "structure" },
      { text: "A component missing one of its four states", tag: "coverage" },
    ] as ReachItem[],
  },
  notDecidable: {
    title: "Not decidable, so it stays quiet",
    lede: "Questions where the honest answer is a judgement. The audit does not have one and does not pretend to.",
    items: [
      { text: "Whether the density suits the reader", tag: "taste" },
      { text: "Whether this screen leads with the right thing", tag: "taste" },
      { text: "Whether the wording earns its space", tag: "taste" },
      { text: "Whether the product is worth building", tag: "not its job" },
    ] as ReachItem[],
  },
};

export const reachNote =
  "A report that flags forty things is a report nobody reads to the end. The pass is deliberately narrow, and everything it does say is worth acting on.";

/* ---------- the checks it runs ---------- */

/* One blurb per audited group, keyed by name. The counts and the order come
   from lib/rules.ts, so adding a rule to a group moves this page too. */
const blurbs: Record<string, string> = {
  Derivation:
    "Figures that summarise other figures, and whether the screen can say where each one came from.",
  Coverage:
    "Every value present in the fixtures, and whether a screen exists for each one. Including the four states.",
  Affordance:
    "Actions offered against the state of the record they sit on, and whether that state permits them.",
  Structure:
    "Routes, breadcrumbs and cross-references, and whether each one resolves to something that exists.",
  Language:
    "Labels that claim more than the data supports, and words the system was not given permission to invent.",
};

/* the source lists them derivation, coverage, affordance, structure, language */
const ORDER = ["Derivation", "Coverage", "Affordance", "Structure", "Language"];

export const checks = ORDER.map((name) => {
  const group = AUDITED_GROUPS.find((g) => g.name === name);
  if (!group) throw new Error(`/audit lists a group /rules does not have: ${name}`);
  return { group: name, blurb: blurbs[name], count: group.count };
});

/** 54 */
export const totalChecks = AUDITED_RULES;

/* The note explaining the gap. Every figure is derived, so it cannot drift.

   THIS DIVERGES FROM audit.html ON PURPOSE. The source says the remaining six
   are "compiled into the components, which means there is nothing left to
   check". That cannot be right: /rules says three rules are compiled, not six,
   and names them as Derivation's — and Derivation is audited here at its full
   eleven, so no compiled rule was subtracted from the 54. The six that actually
   drop out are the Expression group, which is taste. That is the argument
   #reach already makes two sections above, so the note now agrees with it. */
export const checksNote =
  `${Spell(totalChecks)} checks against ${spell(TOTAL_RULES)} rules. The remaining ` +
  `${spell(UNCHECKED_RULES)} are the expressive choices each shell must make on purpose, ` +
  `and judging those is the one thing the pass refuses to do.`;

/* ---------- when it runs ---------- */

export type Moment = { when: string; title: string; body: string; soon?: string };

export const moments: Moment[] = [
  {
    when: "In the session",
    title: "Before you look at it yourself",
    body: "Ask for the pass as soon as the screens exist. It is faster at finding a missing state than you are, and it never gets bored on screen six.",
  },
  {
    when: "Before handoff",
    title: "Before anyone else sees it",
    body: "The findings are named rules, so the conversation with a developer starts from a list rather than from a feeling that something is off.",
  },
  {
    when: "On a change",
    title: "After the data model moves",
    body: "A new status upstream is the most common way coverage quietly breaks. Re-run the pass and it says which screens never heard about it.",
    /* marked as likely rather than promised, the way /changelog marks roadmap items */
    soon: "Command-line run · on the roadmap",
  },
];

export const momentsNote =
  "The pass works by hand today. Making it a command with an exit code a pipeline can read is the next piece of work, and it is marked as likely rather than promised.";

/* the five questions are the shared set in lib/faq.ts; only the way in differs */
export const faqLede =
  "What a reader asks once they have seen a pass run: what it costs them, what it misses, and what happens when it disagrees.";
