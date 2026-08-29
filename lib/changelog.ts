/* The releases and the roadmap, both data-shaped so adding one is not a JSX
   edit. The roadmap lives on this page rather than in the nav — there is no
   Roadmap link any more, on purpose.

   Reckon has had two foundations: 0.3 to 0.6 were built from one registry, and
   0.7 replaced that layer wholesale with the cosscom/coss source. The name, the
   version line and the rules carried across unchanged — nothing forked.

   THE RELATIVE DATES ARE PLACEHOLDERS. The only hard dates in the project
   record are the 20 Aug 2026 registry sync and the 23 Aug 2026 sync with the
   current source, and both appear verbatim below. Everything else says "two
   months ago" because the release log has not been read into this file yet.
   Replace them from the log rather than inventing them. */

export type Change = {
  /* add/chg/fix are the ordinary three. breaking is a change that will stop a
     screen rendering, known is a gap named before a demo finds it, and same is
     something explicitly carried across a foundation change. */
  kind: "breaking" | "add" | "chg" | "fix" | "known" | "same";
  text: string;
};

export type Release = {
  version: string;
  when: string;
  tag: string;
  /* the current release carries the lit treatment */
  current?: boolean;
  note: string;
  changes: Change[];
};

export const releases: Release[] = [
  {
    version: "1.0",
    when: "This month",
    tag: "Current",
    current: true,
    note: "Three layers finished together, because none is evidence on its own. Three products landed here and the five before them were re-audited against the finished rules — which is what makes the count eight rather than a running total.",
    changes: [
      { kind: "add", text: "Home Desk — a house run for the five people in it: ten destinations on a neutral plane, and five chains from preferences to heating, tariff to money" },
      { kind: "add", text: "Ward Desk — double-sidebar hospital management: a rail of six categories beside the destinations inside it, twenty in all, from the shift board to cost per episode" },
      { kind: "add", text: "Marketing Desk — inset-pane sidebar over twelve destinations: journeys, broadcasts and approvals, audiences with the rule each one counts, deliverability as a DNS matrix" },
      { kind: "chg", text: "Each product is a templates/<slug>/ folder owning its shell, fixtures, enums and nav, importing nothing from a sibling — deleting a folder deletes the product" },
      { kind: "add", text: "Three shell modes and two content frames over one inventory, with a form register naming a primary display axis per product. This is the answer to the defect 0.6.1 diagnosed" },
      { kind: "chg", text: "Nothing summable is stored: a total is the sum of its lines, paid is the sum of cleared payments. Gates derive too, one predicate read by the badge, the count and the record" },
      { kind: "add", text: "Settings that bite: bed counts divide every occupancy figure, a tariff re-prices fourteen days, and a denied action names who may take it instead" },
      { kind: "add", text: "Fixtures written to be difficult: long names, missing dates, denied permissions, a slow leak visible only as water moving while the house sleeps, twelve import rows nothing could place" },
      { kind: "known", text: "Finance Desk’s approval limits are editable but not enforced at payout" },
    ],
  },
  {
    version: "0.9",
    when: "Two months ago",
    tag: "Breaking",
    note: "The rules survived the change of source; their wording did not. AGENTS.md was rewritten against the new component set, and it is still not a style guide — styling is the tokens’ job. Three products landed against it, and the two from 0.8 were re-audited.",
    changes: [
      { kind: "add", text: "Finance Desk — sidebar shell for payment operations: the payout approval queue, card expenses and their review policy, disputes as list-detail, the balance and what claims it, and six auth screens" },
      { kind: "add", text: "Talent Desk — top-nav shell for a talent agency: an editorial roster book, fit-and-exclusivity matching, the deal sheet, performance against promise and the facing money ledgers" },
      { kind: "add", text: "AI Tool — sidebar shell for a chat workspace: a conversation with its context rail, a composer that really streams, the file index with its failures, and usage derived turn by turn" },

      { kind: "breaking", text: "One data state per screen. Loading, empty, no results, error and populated are mutually exclusive branches of one conditional, never neighbours" },
      { kind: "breaking", text: "Actions derive from record state. A fixed action set on a detail view is a defect; disabling to avoid deciding is another" },
      { kind: "chg", text: "Derivation restated in the form it now takes: every figure names the array it comes from, and if the array cannot be named the number is wrong" },
      { kind: "add", text: "Control contracts and one vocabulary: a commit model per screen, three reversibility tiers, and verbs, time formats and status words fixed product-wide, one table each" },
      { kind: "add", text: "Two product shells and an auth shell with its full route set, verified at 1440, 1024, 768 and 375px" },
    ],
  },
  {
    version: "0.8",
    when: "Four months ago",
    tag: "Minor",
    note: "The component set closed against the new source, and the two shipped sites were recreated so the system could be read in situ rather than as a specimen sheet. The first two products were built against the closed inventory, which is what proved it was closed.",
    changes: [
      { kind: "add", text: "Claims Desk — top-nav cargo claims desk: a deadline burn-down queue, liability-cap reconciliation, an evidence gate, decision with sign-off, payments, customer responses and recovery" },
      { kind: "add", text: "Recruitment Desk — a foldable sidebar for whole applications: the same seven-step stepper wherever one appears, panel scorecards, checks, and offers priced against the requisition’s band" },

      { kind: "add", text: "All 54 component families, 177 exported names with compound parts, across actions, forms, data, feedback, overlays and navigation" },
      { kind: "add", text: "78 cards across 15 groups, 22 of them specimens for colour, type, spacing, elevation, motion and brand" },
      { kind: "add", text: "The two site recreations: the docs and gallery site with its ⌘K palette, and the marketing letter page with its container hairlines and nodes" },
      { kind: "chg", text: "Every family ships a .d.ts props contract and a .prompt.md usage note beside its .jsx, so a consumer reads the contract instead of the implementation" },
      { kind: "fix", text: "Controls stayed at their desktop heights on touch widths; the --*-touch tokens had been declared and never consumed" },
    ],
  },
  {
    version: "0.7",
    when: "Five months ago",
    tag: "Breaking",
    note: "The foundation was replaced. Everything above the token layer stayed; every value below it changed, which is a break in the only sense that matters — a screen built at 0.6 does not render at 0.7. Reckon keeps its name; what it is recreated from is now cosscom/coss.",
    changes: [
      { kind: "breaking", text: "Tokens re-resolved from cosscom/coss: 207 custom properties over seven files, with a .dark re-resolution, so dark mode costs one class and no component changes" },
      { kind: "breaking", text: "The generated brand ramp was removed. There is no --brand-hue knob and no rebrand-from-one-line promise; Reckon is near-monochrome from here and saturated colour is a signal, never decoration" },
      { kind: "breaking", text: "Geist and Geist Mono replaced by Cal Sans and Paper Mono, the real webfonts, with the wordmark’s own axis settings" },
      { kind: "add", text: "Hairline elevation: a 1px inset highlight over a 5% black shadow, lighting the top edge in light and the bottom in dark. No gradients, no glows" },
      { kind: "add", text: "--radius: 10px deriving 4 / 6 / 8 / 10 / 14 / 16, alpha borders so lines compose over any surface, and five semantic hues used only as state" },
      { kind: "chg", text: "The icon set moved to Lucide at 16px, 2px stroke, 80% opacity, matching the source rather than approximating it" },
      { kind: "same", text: "Content fundamentals: sentence case, buttons that name their object, no gradients, no emoji, tabular figures on money and counts" },
    ],
  },
  {
    version: "0.6.1",
    when: "Seven months ago",
    tag: "Breaking",
    note: "Five of nine worked templates deleted on purpose. They proved the rules ran, then proved something worse: nine products structurally identical, every one a dense record table with a rail of property pairs. Correctness was checked; form was merely invited, so form got defaulted.",
    changes: [
      { kind: "breaking", text: "Five templates removed. With them gone the evidence for a shared kit went too, which is why absorbing the converged local helpers was deferred rather than shipped" },
      { kind: "add", text: "A named primary display axis with a ten-item menu and a minimum of two distinct displays per product; checkability widened from the rows beside a figure to three legal forms" },
      { kind: "chg", text: "Variant economics fixed so the default pairing stopped being what silence buys, and one question added to the standard: could a person tell two of these apart?" },
      { kind: "add", text: "A form register, one row per product across six axes, and the first two products generated against it" },
    ],
  },
  {
    version: "0.6",
    when: "Eight months ago",
    tag: "Minor",
    note: "The checked layer arrived. Rules that could only be stated before could now be run against a screen and reported on, which is the difference between guidance and a test.",
    changes: [
      { kind: "add", text: "An audit pass that reads a generated screen and reports which rules it breaks, by name" },
      { kind: "add", text: "Four worked products, each carried end to end with its hostile fixtures" },
      { kind: "chg", text: "Derivation moved from a stated rule to a compiled one; totals can no longer be passed in" },
      { kind: "fix", text: "Status enums that allowed an unlisted value when the source data disagreed" },
    ],
  },
  {
    version: "0.5",
    when: "Nine months ago",
    tag: "Breaking",
    note: "Shells stopped being templates. Each shell now has to name three expressive choices and give a reason for each, which is what keeps two products built on it from looking identical.",
    changes: [
      { kind: "chg", text: "Shells rewritten as recipes; the four archetypes replaced the previous page templates" },
      { kind: "add", text: "Fixtures carrying the awkward cases: long names, missing dates, denied permissions" },
      { kind: "chg", text: "Token names settled on their final scale; the old aliases were removed rather than kept" },
    ],
  },
  {
    version: "0.4",
    when: "Eleven months ago",
    tag: "Minor",
    note: "The component set grew to cover what business screens actually need, and every state that never makes a mockup was drawn.",
    changes: [
      { kind: "add", text: "Loading, empty, error and permission-denied states on every component" },
      { kind: "add", text: "Tokens for surface, accent, radius and type, all pointable at a brand" },
      { kind: "add", text: "21 further primitives from the registry (20 Aug 2026 sync), taking the set past forty, plus new navigation and layout families and overlays as their own group" },
      { kind: "fix", text: "Tabular figures that did not align in table footers at certain weights" },
    ],
  },
  {
    version: "0.3",
    when: "Last year",
    tag: "Minor",
    note: "The first rules file a model would follow for more than four screens.",
    changes: [
      { kind: "add", text: "The stated layer: rules the model reads before it draws anything" },
      { kind: "add", text: "Thirty observed failures published with their corrections, ordered by the rule each one proves" },
      { kind: "add", text: "Claude Design setup, so the layer loads without anything to install" },
    ],
  },
];

export const changeLabel: Record<Change["kind"], string> = {
  breaking: "Breaking",
  add: "Added",
  chg: "Changed",
  fix: "Fixed",
  known: "Known",
  same: "Unchanged",
};

/* The strip under the header. Four facts, and the last two are the ones a
   reader checks: nothing ships to hit a date, and the source is named with the
   date it was last synced. */
export const now = [
  { label: "Current", value: "1.0", note: "The rules, all 54 component families, and eight products built against them." },
  { label: "Rules", value: "AGENTS.md", note: "Read before any screen is generated; it overrides generic defaults." },
  { label: "Cadence", value: "When it is ready", note: "No release train. Nothing ships to hit a date." },
  { label: "Source", value: "cosscom/coss", note: "Branch main — last synced 23 Aug 2026, recorded in github.md." },
];

/* Two foundations, one version line. Said here because a reader who sees 0.7
   marked Breaking deserves to know it was the floor that moved, not a fork. */
export const foundations =
  "Reckon has had two foundations. Versions 0.3 to 0.6 were built from one registry, and 0.7 replaced that layer wholesale with the cosscom/coss source. The name, the version line and the rules carried across unchanged — nothing forked.";

export const shippedNote =
  "Versions before 0.3 were private. Nothing from them is documented here because nothing from them survived. The one thing that has survived every version, including the change of source at 0.7, is the argument: the component layer was never what failed, and the rules above it are the product.";

export type RoadmapItem = {
  /* where it sits in the order, not a date — mono label in the left column */
  stage: string;
  title: string;
  note: string;
};

/* Unshipped, in the order it blocks other work rather than by likelihood.

   There is no confidence meter here any more. Every item read three bars out of
   three, which is a graphic that says the same thing about everything it is
   drawn on — and a row of bars beside a sentence invites a reader to compare
   figures that were never measured. The order is the only ranking the record
   can defend, so the order is the only ranking shown. */
export const roadmap: RoadmapItem[] = [
  {
    stage: "Next",
    title: "A getting-started opening",
    note: "The readme opens with product context, which is right for a designer and wrong for someone who has just cloned. Small, and overdue.",
  },
  {
    stage: "In the project",
    title: "Booking Desk",
    note: "A ninth product — a guest booking places to stay, top-nav shell, real map. Not finalised, so not part of 1.0 and not documented above.",
  },
  {
    stage: "Known gap",
    title: "Finance Desk’s approval limits",
    note: "Editable in Settings, but payouts do not check them yet. Named here so a demo does not find it first.",
  },
];

/* Not a roadmap item — the opposite. These are the things that stay unbuilt on
   purpose, and saying so is the point. */
export const unbuilt =
  "Deliberately unbuilt: focus trapping, portalling, collision-aware positioning, virtualised lists and the full keyboard contracts of the upstream primitives. These are cosmetic recreations; production work uses the real package.";
