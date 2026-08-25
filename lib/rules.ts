/* The rules file page.

   THE NUMBERS IN HERE ARE SHARED. The group counts and the rule numbers appear
   on /rules and again on /audit. Both pages must import them from this module
   rather than typing them into JSX — if they drift apart the site contradicts
   itself in public, which is exactly the failure the page is arguing against.

   Inline markup in the copy: **stars** → <b>, ==equals== → <mark>,
   `backticks` → <code>. See components/inline.tsx. */

/** how firmly a group is held: stated, compiled, or checked */
export type Level = "st" | "cp" | "ck";

export type Group = {
  name: string;
  count: number;
  blurb: string;
  level: Level;
  /** the words on the pill — "Mostly compiled" is not the same claim as "Compiled" */
  levelLabel: string;
};

export const coverage: Group[] = [
  {
    name: "Derivation",
    count: 11,
    blurb: "Where a figure comes from, and what may never be passed in as a number.",
    level: "cp",
    levelLabel: "Mostly compiled",
  },
  {
    name: "Affordance",
    count: 9,
    blurb: "Which actions a record may be offered, given the state it is actually in.",
    level: "ck",
    levelLabel: "Mostly checked",
  },
  {
    name: "Coverage",
    count: 14,
    blurb: "The states that must exist before a screen is finished — empty, loading, denied, partial.",
    level: "ck",
    levelLabel: "Mostly checked",
  },
  {
    name: "Language",
    count: 8,
    blurb: "What a label may claim, and the words a system is not allowed to invent.",
    level: "st",
    levelLabel: "Stated",
  },
  {
    name: "Structure",
    count: 12,
    blurb: "What belongs on a record page, what belongs in a queue, and what belongs to neither.",
    level: "st",
    levelLabel: "Stated",
  },
  {
    name: "Expression",
    count: 6,
    blurb: "The three choices each shell must make on purpose, so two products do not arrive identical.",
    level: "st",
    levelLabel: "Stated",
  },
];

/** 60. Derived, so adding a group cannot leave the headline count stale. */
export const TOTAL_RULES = coverage.reduce((n, g) => n + g.count, 0);

/* Two different numbers, measuring two different things. Keep both straight:

   COMPILED_RULES (3) — held by the components, so they cannot be broken at all.
   The audit still covers them; there is simply nothing a screen can do to fail.

   The audit's own coverage is smaller than TOTAL_RULES for a separate reason —
   some rules are not decidable by looking — and /audit states which and why.
   Do not merge these two facts: "compiled" and "unauditable" are not the same
   claim, and the pages contradict each other the moment they are conflated. */
export const COMPILED_RULES = 3;

/* The prose below spells its numbers out. These are the only forms the copy
   uses, so the map stays small on purpose — extend it rather than typing a
   word, so a changed count cannot leave a stale one behind in a sentence. */
const WORDS: Record<number, string> = {
  3: "three", 6: "six", 11: "eleven", 54: "fifty-four", 60: "sixty",
};
export const spell = (n: number) => WORDS[n] ?? String(n);
/** sentence-initial form */
export const Spell = (n: number) => {
  const w = spell(n);
  return w.charAt(0).toUpperCase() + w.slice(1);
};

const derivation = coverage[0];

/* The rule numbers the site cites, in one place so /rules and /audit quote the
   same ones. (The brief also mentions 034; no page uses it, so it is not here.) */
export const RULE = {
  total: "019",
  currency: "021",
  unsetZero: "024",
  disputed: "052",
  settled: "061",
} as const;

/* The audit pass does not check Expression — the three-choices-per-shell group.
   Those are expressive decisions, and /audit's own #reach section is an argument
   that the pass will not judge taste. Everything else is decidable by looking,
   so it is checked, INCLUDING the three compiled rules: being unbreakable is not
   the same as being unchecked, and Derivation is still audited at its full 11.

   Naming the skipped group here rather than on /audit keeps the two pages'
   arithmetic tied together — 54 and the gap to 60 both fall out of this list. */
export const UNAUDITED_GROUPS = coverage.filter((g) => g.name === "Expression");
export const AUDITED_GROUPS = coverage.filter((g) => !UNAUDITED_GROUPS.includes(g));
export const AUDITED_RULES = AUDITED_GROUPS.reduce((n, g) => n + g.count, 0);
/** 6 — the Expression group, summed */
export const UNCHECKED_RULES = UNAUDITED_GROUPS.reduce((n, g) => n + g.count, 0);

/* ---------- the hero specimen: one rule, taken apart ---------- */

export type AnatomyPart = {
  label: string;
  text: string;
  /** the claim is set in mono as a statement, not as prose */
  claim?: boolean;
  /** the enforcement part opens on its level pill */
  pill?: { level: Level; label: string };
};

export const specimen = {
  /** the mono strip across the top of the panel */
  id: `AGENTS.md · rule ${RULE.total} · derivation`,
  level: "Compiled",
  /** the word set in coral inside the statement */
  statement: { before: "A total names the ", em: "rows", after: " it totals." },
  /** the three risers. Only the first ring is filled — see rules.css */
  risers: [
    { label: "The claim", text: "Stated once, in the words a reader would use to argue with it.", on: true },
    { label: "The reason", text: "A footer nobody can trace is a number nobody can defend." },
    { label: "How it is held", text: "The footer component takes rows and derives the sum. No prop to pass." },
  ] as { label: string; text: string; on?: boolean }[],
};

export const anatomy: AnatomyPart[] = [
  { label: "The claim", text: "A total names the rows it totals.", claim: true },
  {
    label: "The reason",
    text: "A footer nobody can trace is a number nobody can defend. When a client asks where it came from, someone has to open the database.",
  },
  {
    label: "How it is held",
    pill: { level: "cp", label: "Compiled" },
    text: "The footer component accepts rows and derives the sum itself. There is no prop to pass, so the rule cannot be broken by ignoring it.",
  },
];

export const anatomyNotes = [
  {
    title: "Why the reason travels with the rule",
    body: "A model that knows only the instruction applies it literally and stops at the edges. A model that knows the reason extends it correctly to a case the file never named.",
  },
  {
    title: "Why the level is stated",
    body: `${Spell(COMPILED_RULES)} of these rules are enforced by the components themselves and cannot be broken. Most are not. Marking which is which stops a reader trusting a suggestion as though it were a guarantee.`,
  },
  {
    title: "Why it is one file",
    body: "Guidance split across a wiki is guidance nobody loads. One document, read at the start of the session, is the only version that survives contact with a real task.",
  },
];

/* ---------- the four moments, one document each ---------- */

/** which line icon a document draws in its breadcrumb and its tile */
export type DocIcon = "file" | "pencil" | "bot" | "check";

export type Doc = {
  crumb: { icon: DocIcon; root: string; leaf: string };
  tile: DocIcon;
  heading: string;
  meta: string;
  intro: string;
  subhead: string;
  bullets: { rule?: string; text: string }[];
  outro: string;
};

export type Moment = { id: string; label: string; blurb: string; doc: Doc };

export const moments: Moment[] = [
  {
    id: "rt1",
    label: "The file itself",
    blurb: `Sixty rules, each with a reason and an enforcement level`,
    doc: {
      crumb: { icon: "file", root: "Reckon", leaf: "AGENTS.md" },
      tile: "file",
      heading: "Derivation",
      meta: `Section 3 · **${derivation.count} rules** · mostly compiled`,
      intro:
        "A figure that summarises other figures is computed from them. It is never accepted as a prop and never typed into a fixture, because a number that can be ==passed in== is a number that can be wrong without anybody noticing.",
      subhead: "Rules in this section",
      bullets: [
        { rule: RULE.total, text: "A total names the rows it totals" },
        { rule: RULE.currency, text: "A currency figure carries its currency" },
        { rule: RULE.unsetZero, text: "Unset and zero are drawn differently" },
      ],
      outro: `${Spell(COMPILED_RULES)} of the ${spell(derivation.count)} are held by the components themselves. The rest are stated, which means a reader can still get them wrong — and the audit will say so by name.`,
    },
  },
  {
    id: "rt2",
    label: "Quoted in a brief",
    blurb: "Name the shell, answer its three questions, and stop",
    doc: {
      crumb: { icon: "file", root: "Claims desk", leaf: "Brief" },
      tile: "pencil",
      heading: "Cargo claims — the queue",
      meta: "Draft · **4 sentences** · one archetype",
      intro:
        "A work queue for marine cargo claims. It ==leads with the filing deadline==, because a claim that goes time-barred cannot be recovered by anything the interface does afterwards.",
      subhead: "The three choices",
      bullets: [
        { text: "Leads with the deadline, not the amount" },
        { text: "Hides adjuster notes behind the record" },
        { text: "Dense — read all day, forty rows an hour" },
      ],
      outro:
        "Everything else about a queue is already written down in the shell, so the brief does not repeat it. That is the whole reason for having archetypes.",
    },
  },
  {
    id: "rt3",
    label: "Read in the session",
    blurb: "Loaded before the agent draws its first screen",
    doc: {
      crumb: { icon: "bot", root: "Session", leaf: "Claims desk" },
      tile: "bot",
      heading: "What it already knows",
      meta: `Loaded on open · **${TOTAL_RULES} rules** · before the first screen`,
      intro:
        "The file is read before anything is drawn, so the conversation starts at your three choices rather than at the basics. Nobody has to explain, again, that a settled record ==should not be offered an action== it cannot honour.",
      subhead: "Arrives knowing",
      bullets: [
        { text: "Which figures must trace to rows" },
        { text: "Which states have to exist before it is finished" },
        { text: "That the status set is closed, and what is in it" },
      ],
      outro: `${Spell(COMPILED_RULES)} of the ${spell(TOTAL_RULES)} cannot be broken at all, because the components will not accept the shape that breaks them.`,
    },
  },
  {
    id: "rt4",
    label: "Read again in review",
    blurb: "The pass names the rules the screens actually broke",
    doc: {
      crumb: { icon: "check", root: "Audit", leaf: "Claims desk" },
      tile: "check",
      heading: "Run complete",
      meta: `8 screens · **${TOTAL_RULES - 1} held** · 1 broken · 1.9s`,
      intro:
        "The pass reads the finished screens against the same file. Findings are named rules rather than opinions, so the conversation that follows starts from a list instead of ==a feeling that something is off==.",
      subhead: "What it reported",
      bullets: [
        { rule: RULE.disputed, text: "Disputed exists in the data and on no screen" },
        { text: "Affected: queue and detail, screens 03 and 06" },
        { text: "Everything else in coverage held" },
      ],
      outro:
        "One finding, with the rule number and the screens attached. Anything the audit cannot decide by looking, it does not mention at all.",
    },
  },
];

/* ---------- how it loads ---------- */

export type LoadRoute = { name: string; how: string; body: string };

export const loading: LoadRoute[] = [
  {
    name: "Claude Design",
    how: "automatic",
    body: "Drop the folder in. The file is read on load, before the first component is drawn.",
  },
  {
    name: "Claude Code",
    how: "as a skill",
    body: "`SKILL.md` carries the front matter already. The rules load with it.",
  },
  {
    name: "Anywhere else",
    how: "paste it",
    body: "Any model that reads context can be given the file. No install, no runtime, no assumption about the stack.",
  },
];

export const coverageNote =
  `${Spell(TOTAL_RULES)} rules, and the count is not the point — a file long enough to be impressive is a file nobody finishes reading. Rules are removed when a component starts enforcing them.`;

export const loadingNote =
  "The compiled and checked layers need the components and the audit. The stated layer needs a text box.";

/* The five questions are the shared set in lib/faq.ts, unchanged — only the way
   into the section differs, so it is a prop rather than a copy. */
export const faqLede =
  "What a reader asks after seeing the file: whether it holds, what happens when it is ignored, and who has to maintain it.";
