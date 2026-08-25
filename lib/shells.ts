/* Shells and archetypes — the four shapes every operational product grows, and
   the three choices each shell refuses to make for you.

   Inline markup in the copy: **stars** → <b>. See components/inline.tsx. */

/* ---------- the three stacked hero records ---------- */

/** which inlined company mark a record draws; see app/shells/specimens.tsx */
export type LogoKey = "flame" | "leaf" | "gear";

/** a row inside a record card. `dashed` is the open-circle marker */
export type RecordRow = { group: string; text: string; age: string; dashed?: boolean; alert?: boolean };

export type Record = {
  /* The marks are placeholders and do not correspond to the names. When real
     ones arrive the mark and the name travel together as this one record. */
  logo: LogoKey;
  name: string;
  status: string;
  cover: string;
  exposure: string;
  claims: number;
  rows: RecordRow[];
  /** the trailing placeholder rows that fade out under the mask */
  trail: string[];
  /** the source cell carries a download glyph on the front card only */
  sourceIcon?: boolean;
};

export const records: Record[] = [
  {
    logo: "flame",
    name: "Baltic Freight",
    status: "Assessed",
    cover: "Marine",
    exposure: "32,160.00",
    claims: 8,
    rows: [
      { group: "Urgent", text: "Survey report outstanding", age: "4d" },
      { group: "Open", text: "Recovery from carrier", age: "6d", dashed: true },
    ],
    trail: ["88%", "62%", "74%"],
  },
  {
    logo: "leaf",
    name: "Meridian Cargo",
    status: "In review",
    cover: "Inland",
    exposure: "14,800.00",
    claims: 14,
    rows: [
      { group: "Urgent", text: "Deadline within 48 hours", age: "1d" },
      { group: "Open", text: "Salvage valuation pending", age: "5d", dashed: true },
    ],
    trail: ["80%", "58%", "70%"],
  },
  {
    logo: "gear",
    name: "Nordvik Shipping",
    status: "Assessed",
    cover: "Marine",
    exposure: "20,600.00",
    claims: 11,
    sourceIcon: true,
    rows: [
      { group: "Urgent", text: "Time-barred in two days", age: "2d", alert: true },
      { group: "Open", text: "Second approver required", age: "3d", dashed: true },
      { group: "", text: "Handling charge unreconciled", age: "3d", dashed: true },
    ],
    trail: ["84%", "56%", "72%"],
  },
];

/* ---------- the four archetypes ---------- */

/** the caption under each quadrant cell; the specimens are bespoke drawings */
export type Archetype = {
  id: string;
  title: string;
  body: string;
  /** exactly one cell carries the stacked treatment — on all four it reads as a pattern */
  stacked?: boolean;
};

export const archetypes: Archetype[] = [
  {
    id: "queue",
    title: "Work queue",
    body: "A list somebody works down, ordered by what is burning out rather than by what arrived last. **Severity orders the list, and the reason for the order is on screen.**",
  },
  {
    id: "record",
    title: "Record page",
    body: "One object, its figures traced to where they came from, and only the actions its state permits. **A settled record is never offered a button it cannot honour.**",
    stacked: true,
  },
  {
    id: "decision",
    title: "Decision surface",
    body: "Where somebody commits and carries the consequence afterwards. **Gated on the evidence being present, and honest about what cannot be undone.**",
  },
  {
    id: "reconciliation",
    title: "Reconciliation view",
    body: "Two sides that have to agree, with the gap between them named rather than implied. **The difference is a figure in its own right.**",
  },
];

export const archetypesNote =
  "Four archetypes, and a product is usually three of them arranged around a domain. A fifth has not yet earned its place.";

/* ---------- the three choices a shell will not make ---------- */

export type Choice = { n: string; title: string; question: string; answer: string };

export const choices: Choice[] = [
  {
    n: "01",
    title: "What leads",
    question: "Of everything on this screen, what does the reader see first, and why that?",
    answer: "A claims desk leads with the deadline. A billing view leads with the amount. **Both are defensible; neither is default.**",
  },
  {
    n: "02",
    title: "What it refuses to show",
    question: "What is deliberately absent, and where does a reader go when they need it?",
    answer: "A queue that shows every field is a spreadsheet. **Leaving something out is a decision, and it needs a destination.**",
  },
  {
    n: "03",
    title: "Its density and rhythm",
    question: "Is this read all day at speed, or opened twice a week with care?",
    answer: "An operator at forty rows an hour wants a different screen from an approver signing four. **Same rules, different shape.**",
  },
];

export const choicesNote =
  "Three answers, written down where the next person can find them. A choice with no reason recorded is a choice the next redesign will quietly reverse.";

/* ---------- how a shell gets used ---------- */

export type Usage = {
  when: string;
  title: string;
  body: string;
  outcomeLabel: string;
  outcome: string;
};

export const usage: Usage[] = [
  {
    when: "In the brief",
    title: "Name the archetype, answer its three questions",
    body: "Four sentences is usually enough, because everything else about that shape is already written down. That is the whole point of having archetypes.",
    outcomeLabel: "What you write",
    outcome: "“A work queue. Leads with the filing deadline, hides the adjuster notes, read all day at speed.”",
  },
  {
    when: "In the session",
    title: "The agent reads the shell before it draws",
    body: "It arrives already knowing what a queue owes its reader, so the conversation starts at your three choices instead of at the basics.",
    outcomeLabel: "What you skip",
    outcome: "Explaining, again, that a settled record should not be offered a button it cannot honour.",
  },
  {
    when: "In review",
    title: "The audit checks the shell’s own rules",
    body: "Alongside the rest of the pass. Whether severity really orders the queue, and whether anything was offered an action its state forbids.",
    outcomeLabel: "What comes back",
    outcome: "A named rule and a screen number, rather than a feeling that something is off.",
  },
];

export const usageNote =
  "The four shells cover the shapes. What they will never cover is the domain — and the domain is why anybody opens the product in the first place.";
