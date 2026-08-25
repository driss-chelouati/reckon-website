/* Who it is for — the value proposition split three ways, plus the section that
   says who it is not for.

   Inline markup in the copy: `backticks` → <code>, **stars** → <b>,
   ==equals== → <mark>. See components/inline.tsx. */

/* ---------- the strip under the header ---------- */

export type Claim = { who: string; headline: string; blurb: string };

export const claims: Claim[] = [
  {
    who: "Designers",
    headline: "The judgement is written down, so the taste is yours.",
    blurb: "Every shell names three expressive choices it expects you to make on purpose.",
  },
  {
    who: "Developers",
    headline: "Output you can build from, not decode.",
    blurb: "Figures trace to data, actions match the record, and states exist before a user finds them.",
  },
  {
    who: "Teams",
    headline: "One product, not eleven that resemble each other.",
    blurb: "Consistency that survives more than one person and more than one week.",
  },
];

/* ---------- the three audience rows ---------- */

/** the right-hand column of a gain: what the reader keeps, or what is decided for them */
export type Gain = { text: string; tag: string };

export type Row = {
  id: string;
  /** the section rail and its right-hand fact */
  rail: { left: string; right: string };
  /** the section headline and lede, above the row */
  headline: string;
  lede: string;
  next: { num: string; href: string; label: string };
  /** the row itself */
  label: string;
  title: string;
  body: string;
  gains: Gain[];
  /** the figure's own two-part caption */
  figure: { left: string; right: string };
};

export const rows: Row[] = [
  {
    id: "designers",
    rail: { left: "For designers", right: "Constraint where it helps · room where it counts" },
    headline: "The rules cover the parts you were never going to enjoy.",
    lede: "Nobody became a designer to decide, for the fortieth time, what an empty table should say. Those decisions are made once and written down, which leaves the ones that actually distinguish a product.",
    next: { num: "01", href: "#developers", label: "For developers →" },
    label: "The room you keep",
    title: "Three choices per shell, made on purpose.",
    body: "A system that only constrains produces identical products, so every shell has to name three expressive decisions and give a reason for each. That is the part a generator cannot do for you, and the part worth your afternoon.",
    gains: [
      { text: "Density, rhythm and where the eye lands first", tag: "yours" },
      { text: "What a screen leads with, and what it refuses to show", tag: "yours" },
      { text: "Empty, loading, denied and partial states", tag: "decided" },
      { text: "Which actions a settled record may be offered", tag: "decided" },
    ],
    figure: { left: "One shell", right: "Two products" },
  },
  {
    id: "developers",
    rail: { left: "For developers", right: "Fewer questions back · fewer figures to verify" },
    headline: "A screen you can build without reverse-engineering the intent.",
    lede: "The expensive part of a handoff is not the CSS. It is the half-hour spent working out where a number came from, whether that button should exist on a closed record, and what the screen does when the list is empty.",
    next: { num: "02", href: "#teams", label: "For teams →" },
    label: "What changes",
    title: "The rules you would have enforced anyway, enforced earlier.",
    body: "Three of them are held in the components themselves, which means they are not advice. A footer takes rows and derives its own total; there is no prop to pass, so the rule cannot be broken by ignoring it.",
    gains: [
      { text: "Totals derive from the rows they summarise", tag: "compiled" },
      { text: "Status values come from a closed set", tag: "compiled" },
      { text: "Every route referenced is a route that exists", tag: "checked" },
      { text: "Loading, empty, error and denied are already drawn", tag: "checked" },
    ],
    figure: { left: "One figure", right: "Three named rows" },
  },
  {
    id: "teams",
    rail: { left: "For teams", right: "Coherence that outlives the person who set it up" },
    headline: "Eight screens that look like one product.",
    lede: "Generated interfaces drift. Not badly on any single screen — badly across eleven of them, built on different days by different people, each defensible and none of them agreeing.",
    next: { num: "03", href: "#fit", label: "Whether it fits →" },
    label: "What changes",
    title: "Agreement without a design police.",
    body: "Consistency enforced by review is consistency that lasts until the reviewer is on holiday. Rules held in components and checked by an audit hold whether or not anybody is watching, which is the only kind that survives a second team.",
    gains: [
      { text: "The same figure means the same thing on every screen", tag: "across" },
      { text: "A status chip in one product reads the same in the next", tag: "across" },
      { text: "New joiners inherit the reasoning, not just the file", tag: "onboarding" },
      { text: "Review time goes to the argument, not the alignment", tag: "process" },
    ],
    figure: { left: "Four products", right: "Three agreements each" },
  },
];

/* ---------- the developers' figure: a derived total and its rows ---------- */

/* Each person may carry a photograph. None have been supplied, so every avatar
   currently draws its initials — .wpav already styles both paths. Dropping a
   file into /public and setting `photo` is the whole change. */
export type Person = { name: string; initials: string; photo?: string };

export type Provenance = {
  owner: Person;
  /** what the owner's figure is of */
  context: string;
  sources: { person: Person; amount: number }[];
  /** the signature the figure is derived through, and the prop it does not take */
  signature: string;
  refusedProp: string;
};

export const provenance: Provenance = {
  owner: { name: "Sofia Delacroix", initials: "SD" },
  context: "Engineering · Q3 headcount",
  sources: [
    { person: { name: "Amina Berrada", initials: "AB" }, amount: 42000 },
    { person: { name: "Tomás Novak", initials: "TN" }, amount: 51500 },
    { person: { name: "Lena Fischer", initials: "LF" }, amount: 38900 },
  ],
  signature: "ListFooter({ rows })",
  refusedProp: "total: number",
};

/** 132,400 — added up here rather than typed, because the figure is the argument */
export const provenanceTotal = provenance.sources.reduce((n, s) => n + s.amount, 0);

/* ---------- the teams figure: four products ---------- */

/** which inlined company mark a product draws; see app/who-its-for/figures.tsx */
export type LogoKey = "flame" | "leaf" | "gear" | "clover";

export type Product = {
  name: string;
  screens: number;
  owner: string;
  status: "live" | "draft";
  /* The marks are placeholders chosen for colour and do not correspond to the
     names. When real client logos arrive the mark and the name travel together
     as this one record, so they cannot be paired up wrongly again. */
  logo: LogoKey;
};

export const products: Product[] = [
  { name: "Claims desk", screens: 8, owner: "Mariam Idrissi", status: "live", logo: "flame" },
  { name: "Talent desk", screens: 6, owner: "Diego Ortiz", status: "live", logo: "leaf" },
  { name: "Billing desk", screens: 5, owner: "Ana Ferreira", status: "live", logo: "gear" },
  { name: "Onboarding", screens: 4, owner: "Joy Okonkwo", status: "draft", logo: "clover" },
];

/** the three agreements named under the product rows */
export const agreements = [
  { key: "a", label: "Title rule" },
  { key: "b", label: "Status set" },
  { key: "c", label: "Derived footer" },
];

/* ---------- made for, and not ---------- */

export const fit = {
  madeFor: {
    lede: "Software where a wrong figure is a support ticket and a missing state is a phone call.",
    items: [
      "Operational tools — claims, billing, scheduling, fulfilment",
      "Internal products nobody demos but everybody uses",
      "Anything with records, states and figures that must agree",
      "Teams using design agents and getting plausible, wrong output",
      "One person carrying a product that needs to look like several",
    ],
  },
  notFor: {
    lede: "Work where the judgement it encodes is beside the point, or actively in the way.",
    items: [
      "Marketing sites, campaigns and landing pages",
      "Consumer apps where delight outranks derivation",
      "Teams who want a component library and nothing more",
      "Anyone looking for a look rather than a set of decisions",
      "Production accessibility guarantees — use real primitives",
    ],
  },
};

export const fitNote =
  "If the second column describes your work, the honest answer is that this will not help much. Say so early and nobody wastes an afternoon.";
