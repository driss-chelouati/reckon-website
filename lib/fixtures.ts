/* Fixtures and states. The domain is HR — a candidate roster — deliberately not
   the claims domain used elsewhere, so the argument reads as general rather than
   as one product's problem.

   The hostile rows carry real nulls rather than strings containing an em dash.
   The null IS the fixture; deciding what it looks like is the component's job,
   which is the rule this page is arguing for. Same for the footer: the demo card
   derives its total, and the fixture card cannot, because one salary is missing.

   The hero rows and the #hostile ledger name the same values. Edit one, edit the
   other — they are two views of the same argument.

   Inline markup in the copy: **stars** → <b>. See components/inline.tsx. */

/** the tone a status word carries; absent means the neutral chip */
export type Tone = "warn" | "crit";

export type Row = {
  /** null when there is no name to derive initials from — draws the blank avatar */
  initials: string | null;
  /** null when the record is withheld */
  name: string | null;
  /** null when no salary has been set, which is not the same fact as zero */
  salary: number | null;
  status: string;
  tone?: Tone;
};

export const demoRows: Row[] = [
  { initials: "AB", name: "Amina Berrada", salary: 42000, status: "Offer sent" },
  { initials: "TN", name: "Tomás Novak", salary: 51500, status: "Interviewing" },
  { initials: "LF", name: "Lena Fischer", salary: 38900, status: "Offer sent" },
];

export const hostileRows: Row[] = [
  {
    // 38 characters, double-barrelled, with diacritics — the column overflow case
    initials: "MF",
    name: "Maria-Alejandra Fernández-Villalobos",
    salary: 96750,
    status: "Notice served",
    tone: "warn",
  },
  {
    // no name, so no initials to fall back to, and no salary either
    initials: null,
    name: null,
    salary: null,
    status: "Rescinded",
    tone: "crit",
  },
  {
    // a clawback: negative, and it reads as a payment if only the sign says so
    initials: "JO",
    name: "Joy Okonkwo",
    salary: -2400,
    status: "Clawback",
  },
];

/** what a card renders where a withheld value would be */
export const absent = {
  name: "withheld by request",
  salary: "no salary set",
};

/* A total over rows where one salary is missing is not a smaller total, it is
   not a total. The fixture card foots to this rather than quietly summing two
   of three — which is rule 019 on /rules, drawn instead of stated. */
export const derivable = (r: Row[]) => r.every((row) => row.salary !== null);
export const notDerivable = "not derivable";

/* ---------- the hostile values, as a ledger ---------- */

export type Value = { value: string; exposes: string; rule: string };

export const values: Value[] = [
  {
    value: "Maria-Alejandra Fernández-Villalobos",
    exposes:
      "A 38-character name in a column measured against three short ones. Either it is cut without warning, or it shoves the salary off the row.",
    rule: "A cell states its own overflow. **Never a silent cut.**",
  },
  {
    value: "name: null",
    exposes:
      "A record withheld by request. The avatar has no photo and no initials to fall back to, so most components render an empty circle and move on.",
    rule: "Absent is a value with an appearance. **Not a blank.**",
  },
  {
    value: "salary: null",
    exposes:
      "The figure that has genuinely not been set yet, rendered as 0.00 — which is a different fact, and a worse one.",
    rule: "Unset and zero are drawn differently. **Always.**",
  },
  {
    value: "-2,400.00",
    exposes:
      "A clawback that reads as a payment, because the only thing separating them is a minus sign eight pixels wide.",
    rule: "Direction is legible without the sign. **Colour is not enough.**",
  },
  {
    value: 'status: "rescinded"',
    exposes:
      "A state the mockup never had, arriving from the applicant tracking system on a Tuesday.",
    rule: "Every value in the enum has an appearance. **The set is closed.**",
  },
  {
    value: "0 rows",
    exposes:
      "The roster nobody has seen empty, because the demo always had three candidates in it.",
    rule: "Empty is a designed screen with a way out of it.",
  },
];

export const valuesNote =
  "Six of them here, more in the set. A fixture is added the first time a real roster embarrasses a screen, and removed only when the rule that catches it is compiled rather than stated.";

/* ---------- the four states ---------- */

/** the caption under each quadrant cell; the panels themselves are bespoke drawings */
export type State = { id: string; title: string; blurb: string };

export const states: State[] = [
  {
    id: "loading",
    title: "Loading",
    blurb:
      "Shaped like the roster that is arriving, down to the avatar and the two figures. **Nothing jumps when the data lands.**",
  },
  {
    id: "empty",
    title: "Empty",
    blurb:
      "Nothing to show is not the same as nothing. It says which of the two, and how many are behind the filter. **Every empty state has a way out of it.**",
  },
  {
    id: "error",
    title: "Error",
    blurb:
      "What failed, whether it already retried, and whether anything was changed on the way. **A reference the support desk can actually use.**",
  },
  {
    id: "denied",
    title: "Permission denied",
    blurb:
      "A designed screen, not a blank one and not a lie. **The record exists, this reader cannot see it, and there is a route to asking.**",
  },
];

export const statesNote =
  "Four states, one component, and the audit reports any component missing one of them. That check is the difference between a rule and a hope.";

/* ---------- how they travel ---------- */

export type Travel = { label: string; body: string; note: string };

export const travel: Travel[] = [
  {
    label: "Per product",
    body: "Every worked product carries a fixture set built from its own domain — the claims that are time-barred, the roles nobody fits, the payouts that reverse.",
    note: "Named in its notes file, so a reader knows what the screens were tested against.",
  },
  {
    label: "Per component",
    body: "Loading, empty, error and denied are part of the component, not a story written beside it.",
    note: "Missing one is reported by the audit, by name.",
  },
  {
    label: "In the rules",
    body: "The reason each fixture exists is written next to the rule it defends, so the set does not outlive its argument.",
    note: "Remove the rule, remove the fixture.",
  },
];

export const travelNote =
  "The point is not to have hostile data. It is to have already seen what the screen does when it arrives.";
