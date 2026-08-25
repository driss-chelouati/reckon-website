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
    note: "Nine products carried end to end. The rules had been stated for a while; a product is the only thing that proves they produce screens rather than describing them. This is also the answer to the defect 0.6.1 diagnosed: nine products that a person can tell apart.",
    changes: [
      { kind: "add", text: "Nine app prototypes under templates/ — Cadence, Claims Desk, Halyard, Hearth, Kolleger, Lodestay, Meridian, Parley, Talent Desk — each a .dc.html entry with its own shell, screens and fixtures" },
      { kind: "add", text: "An AGENTS-notes-<slug>.md at the root for eight of them, documenting the data model a reader would otherwise reconstruct from fixtures" },
      { kind: "chg", text: "Every product owns its enums.js and nav.js and imports nothing from a sibling, so deleting one folder deletes the product with nothing orphaned" },
      { kind: "chg", text: "Shell choice became a declared decision per product, sidebar or top-nav, with one navigation owner and a comment naming the density, the active-state signature and each destination’s primary content" },
      { kind: "known", text: "Meridian’s approval limits are editable but not yet enforced at payout" },
    ],
  },
  {
    version: "0.9",
    when: "Two months ago",
    tag: "Breaking",
    note: "The rules survived the change of source; their wording did not. AGENTS.md was rewritten against the new component set and the new shells, and it is still not a style guide — styling is the tokens’ job.",
    changes: [
      { kind: "breaking", text: "One data state per screen. Loading, empty, no results, error and populated are mutually exclusive branches of one conditional, never neighbours" },
      { kind: "breaking", text: "Actions derive from record state. A fixed action set on a detail view is a defect; disabling to avoid deciding is another" },
      { kind: "chg", text: "Derivation restated in the form it now takes: every figure names the array it comes from, and if the array cannot be named the number is wrong" },
      { kind: "add", text: "Control contracts: one commit model per screen, three reversibility tiers, switch versus checkbox, and destructive styling that is subtle everywhere except inside its own confirm dialog" },
      { kind: "add", text: "Two product shells and an auth shell with its full route set, each verified at 1440, 1024, 768 and 375px, losing nothing on the way down" },
      { kind: "chg", text: "Verbs, time formats and status vocabulary fixed product-wide, one table each. Enums hold stored state only; derived flags compute at render" },
    ],
  },
  {
    version: "0.8",
    when: "Four months ago",
    tag: "Minor",
    note: "The component set closed against the new source, and the two shipped sites were recreated so the system could be read in situ rather than as a specimen sheet.",
    changes: [
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
      { kind: "breaking", text: "Tokens re-resolved from cosscom/coss rather than the previous registry: 207 custom properties across seven files, palette, semantic aliases and a .dark re-resolution, so dark mode costs one class and no component changes" },
      { kind: "breaking", text: "The generated brand ramp was removed. There is no --brand-hue knob and no rebrand-from-one-line promise; Reckon is near-monochrome from here and saturated colour is a signal, never decoration" },
      { kind: "breaking", text: "Geist and Geist Mono replaced by Cal Sans and Paper Mono, the real webfonts, with the wordmark’s own axis settings" },
      { kind: "add", text: "Hairline elevation: a 1px inset highlight over a 5% black shadow, lighting the top edge in light mode and the bottom edge in dark. No gradients, no glows, no coloured left borders" },
      { kind: "add", text: "--radius: 10px deriving 4 / 6 / 8 / 10 / 14 / 16, alpha borders at 8% and 10% so lines compose over any surface, and five semantic hues used only as state" },
      { kind: "chg", text: "The icon set moved to Lucide at 16px, 2px stroke, 80% opacity, matching the source rather than approximating it" },
      { kind: "same", text: "Content fundamentals: sentence case, buttons that name their object, no gradients, no emoji, tabular figures on money and counts" },
    ],
  },
  {
    version: "0.6.1",
    when: "Seven months ago",
    tag: "Breaking",
    note: "Five of nine worked templates deleted on purpose. They had proved the rules ran; then they proved something worse — nine products that were visually distinguishable and structurally identical, every one a dense record table with a rail of property pairs and a hairline figure strip. Correctness was checked; form was merely invited, so form got defaulted.",
    changes: [
      { kind: "breaking", text: "Five templates removed. With them gone the evidence for a shared kit went too, which is why absorbing the converged local helpers was deferred rather than shipped" },
      { kind: "add", text: "A named primary display axis with a ten-item menu and a minimum of two distinct displays per product; checkability widened from the rows beside a figure to three legal forms" },
      { kind: "chg", text: "Variant economics fixed so the default pairing stopped being what silence buys, and a second question added to the correction-cost standard: could a person tell two products from this system apart?" },
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
  { label: "Current", value: "1.0", note: "Nine worked products, built against the rules rather than beside them." },
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
  stage: string;
  /* how sure, out of three; the label is what a screen reader gets */
  confidence: 1 | 2 | 3;
  confidenceLabel: string;
  title: string;
  note: string;
  points: string[];
};

/* Unshipped, in the order it blocks other work rather than by likelihood.
   The licence answer sits first because nothing goes public until it is
   settled.

   All four read three bars because the release notes commit to all four; the
   bars are carrying "this is being built", not a grading. If any of these
   becomes a maybe, drop its confidence rather than leaving it flattering. */
export const roadmap: RoadmapItem[] = [
  {
    stage: "Blocking",
    confidence: 3,
    confidenceLabel: "high confidence",
    title: "The licence answer",
    note: "Cal Sans, both wordmarks and the avatar imagery are upstream verbatim. Nothing goes public until that question is settled.",
    points: [
      "LICENSE and NOTICE follow the answer",
      "Not the other way round",
      "Everything below waits on it",
    ],
  },
  {
    stage: "Next",
    confidence: 3,
    confidenceLabel: "high confidence",
    title: "The download page",
    note: "One self-contained page with live specimens and the package zip, described in SHARING.md.",
    points: [
      "Live specimens, not screenshots",
      "The package zip beside them",
      "This changelog is written to drop into it",
    ],
  },
  {
    stage: "Then",
    confidence: 3,
    confidenceLabel: "high confidence",
    title: "A getting-started opening",
    note: "The readme opens with product context, which is right for a designer and wrong for someone who has just cloned.",
    points: [
      "Open with the clone, not the pitch",
      "Product context moves down",
      "Small, and overdue",
    ],
  },
  {
    stage: "Known gap",
    confidence: 3,
    confidenceLabel: "high confidence",
    title: "Meridian’s approval limits",
    note: "Editable in Settings, but payouts do not check them yet. Named here so a demo does not find it first.",
    points: [
      "Editable today",
      "Not enforced at payout",
      "Shipped as a known gap in 1.0",
    ],
  },
];

/* Not a roadmap item — the opposite. These are the things that stay unbuilt on
   purpose, and saying so is the point. */
export const unbuilt =
  "Deliberately unbuilt: focus trapping, portalling, collision-aware positioning, virtualised lists and the full keyboard contracts of the upstream primitives. These are cosmetic recreations; production work uses the real package.";
