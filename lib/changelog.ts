/* The releases and the roadmap, both data-shaped so adding one is not a JSX
   edit. The roadmap lives on this page rather than in the nav — there is no
   Roadmap link any more, on purpose. */

export type Change = { kind: "add" | "chg" | "fix"; text: string };

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
    version: "0.6",
    when: "This month",
    tag: "Current",
    current: true,
    note: "The checked layer arrives. Rules that could only be stated before can now be run against a screen and reported on, which is the difference between guidance and a test.",
    changes: [
      { kind: "add", text: "An audit pass that reads a generated screen and reports which rules it breaks, by name" },
      { kind: "add", text: "Four worked products, each carried end to end with its hostile fixtures" },
      { kind: "chg", text: "Derivation moved from a stated rule to a compiled one — totals can no longer be passed in" },
      { kind: "fix", text: "Status enums that allowed an unlisted value when the source data disagreed" },
    ],
  },
  {
    version: "0.5",
    when: "Two months ago",
    tag: "Breaking",
    note: "Shells stopped being templates. Each one now has to name three expressive choices and give a reason for each, which is what keeps two products built on it from looking identical.",
    changes: [
      { kind: "chg", text: "Shells rewritten as recipes; the four archetypes replace the previous page templates" },
      { kind: "add", text: "Fixtures carrying the awkward cases — long names, missing dates, denied permissions" },
      { kind: "chg", text: "Token names settled on their final scale; the old aliases were removed rather than kept" },
    ],
  },
  {
    version: "0.4",
    when: "Four months ago",
    tag: "Minor",
    note: "The component set grew to cover what business screens actually need, and every state that never makes a mockup was drawn.",
    changes: [
      { kind: "add", text: "Loading, empty, error and permission-denied states on every component" },
      { kind: "add", text: "Tokens for surface, accent, radius and type, all pointable at a brand" },
      { kind: "fix", text: "Tabular figures that did not align in table footers at certain weights" },
    ],
  },
  {
    version: "0.3",
    when: "Seven months ago",
    tag: "Minor",
    note: "The first rules file that a model would follow for more than four screens.",
    changes: [
      { kind: "add", text: "The stated layer: rules the model reads before it draws anything" },
      { kind: "add", text: "Claude Design setup, so the layer loads without anything to install" },
    ],
  },
];

export const changeLabel: Record<Change["kind"], string> = {
  add: "Added",
  chg: "Changed",
  fix: "Fixed",
};

export type RoadmapItem = {
  stage: string;
  /* how sure, out of three; the label is what a screen reader gets */
  confidence: 1 | 2 | 3;
  confidenceLabel: string;
  title: string;
  note: string;
  points: string[];
};

export const roadmap: RoadmapItem[] = [
  {
    stage: "In progress",
    confidence: 3,
    confidenceLabel: "high confidence",
    title: "The rest of the products",
    note: "Six more worked products, each carried through the same way as the first four.",
    points: [
      "Onboarding, support, billing",
      "Clinical, grants, device fleet",
      "Each with its own hostile fixtures",
    ],
  },
  {
    stage: "Likely",
    confidence: 2,
    confidenceLabel: "medium confidence",
    title: "The audit, as a check you run",
    note: "The checked layer works by hand today. It should run the way a linter runs.",
    points: [
      "A command, not a conversation",
      "Rules named in the output",
      "Exit code a pipeline can read",
    ],
  },
  {
    stage: "Considering",
    confidence: 1,
    confidenceLabel: "low confidence",
    title: "Rules that read your codebase",
    note: "Generating a house rules file from a repository that already has its own conventions.",
    points: [
      "Reads your components and naming",
      "Proposes rules, never applies them",
      "Still an idea, not a plan",
    ],
  },
];
