/* The /download page's content. Three lists here will be edited far more often
   than the markup around them: the counts under the header, the three ways of
   taking the system, and the ledger of limits. The four getting-started steps
   keep their prose here too — their figures are bespoke and stay as components.

   Inline markup in these strings is minimal on purpose: `backticks` become
   <code> and **stars** become <b>. See app/download/inline.tsx. */

/** the count strip across the header */
export type Count = { n: string; label: string };

export const counts: Count[] = [
  { n: "207", label: "Custom properties, across seven token files" },
  { n: "54", label: "Component families, 177 exported names" },
  { n: "78", label: "Design System cards, across fifteen groups" },
  { n: "8", label: "Templates — whole interactive prototypes" },
];

/** one of the three ways in. `inset` is the archive: the panel inside the card */
export type Route = {
  id: string;
  /** the left-hand mono label on the column head */
  kicker: string;
  /** the right-hand one, in coral */
  who: string;
  title: string;
  body: string;
  items: string[];
  cta: {
    href: string;
    label: string;
    /** the primary button tears its label on hover; the neutral two do not */
    primary?: boolean;
    download?: boolean;
    rel?: string;
    /** the line under the button */
    meta: string;
  };
  inset?: boolean;
};

export const routes: Route[] = [
  {
    id: "markdown",
    kicker: "Markdown",
    who: "Read or feed it",
    title: "The rules only",
    body: "Every document and nothing else: no CSS, no components, no bundle. What a person reads, and what a model is given.",
    items: [
      "`readme.md` — the design guide itself",
      "`AGENTS.md` and `SKILL.md`",
      "54 `.prompt.md` pairs, one per family",
      "`LICENSE`, `NOTICE` and the changelog",
    ],
    cta: {
      href: "/downloads/reckon-rules-1.0.zip",
      label: "Download the markdown",
      download: true,
      meta: "~78 KB · no assets",
    },
  },
  {
    id: "repository",
    kicker: "Repository",
    who: "Build on it",
    title: "Get it on GitHub",
    body: "The project as it actually stands. Clone it for the history, or to change something and keep your changes separate from mine.",
    items: [
      "Commit history, issues and whatever lands next",
      "Fork it, or pull an update instead of re-downloading",
      "AGPL-3.0-or-later, with upstream credited in `NOTICE`",
      "Same contents as the archive, nothing held back",
    ],
    cta: {
      href: "https://github.com/driss-chelouati/reckon",
      label: "View the repository",
      rel: "noopener",
      meta: "git clone · public · AGPL-3.0",
    },
  },
  {
    id: "archive",
    kicker: "Archive",
    who: "Use it now",
    title: "Download the package",
    body: "A dated snapshot with everything in it, including the generated bundle — so it renders the moment it lands.",
    items: [
      "Tokens, component CSS and all 54 families",
      "The three generated files, committed on purpose",
      "Eight templates, and the eight `AGENTS-notes` data models inside them",
      "Fonts and marks included, nothing to fetch",
    ],
    cta: {
      href: "/downloads/reckon-1.0.zip",
      label: "Download the .zip",
      primary: true,
      download: true,
      meta: "v1.0 · September 2026 · ~4.6 MB",
    },
    inset: true,
  },
];

/** the two provenance boxes */
export type Provenance = { title: string; paras: string[] };

export const provenance: Provenance[] = [
  {
    title: "Lineage",
    paras: [
      "Reckon’s component set recreates the visual language behind **coss.com** and its component library, built from the open-source `cosscom/coss` monorepo. The upstream project is open source and its assets travel with this package, credited in `NOTICE`.",
      "Worth naming in full: `cosscom/coss`, coss.com/ui, Base UI, Lucide and Tailwind v4.",
    ],
  },
  {
    title: "Licence",
    paras: [
      "The recreation work — tokens, component CSS, specimen cards, templates and the design guide — is **AGPL-3.0-or-later**, matching the upstream default it derives from. The token layer comes from a source with no MIT-licensed equivalent, so anything narrower would be a claim the provenance does not support.",
      "Designing an interface with it is use, not derivation, and a product built with Reckon is not automatically AGPL. Copying the token files, the component implementations or the rules into your own distributed project is derivation, and §13 means network use counts. `LICENSE` and `NOTICE` travel with the source.",
    ],
  },
];

/** the labelled ledger of what this is not */
export type Limit = { label: string; body: string };

export const limits: Limit[] = [
  {
    label: "Not production",
    body: "**These are cosmetic recreations, not production Base UI.** No focus trapping, no portalling, no collision-aware positioning, no virtualised lists, no complete keyboard contracts. For production, the real package is the answer.",
  },
  {
    label: "Generated",
    body: "**Three files are generated and committed on purpose** — the bundle, the manifest and the adherence config — so a clone renders without a build. Never hand-edit them; the next compile reverts it silently.",
  },
  {
    label: "Paths",
    body: "**Font paths resolve relative to the stylesheet.** Flatten the tree, or serve `styles.css` from a different depth, and both faces fail to the system stack.",
  },
  {
    label: "Namespace",
    body: "**The bundle namespace is not portable.** It is derived from the project it was compiled in, so a fresh install gets a different suffix. This is the single most likely thing to break on arrival.",
  },
  {
    label: "Known gap",
    body: "**Finance Desk’s approval limits are editable but not yet enforced** — payouts do not check them. Worth knowing before a stakeholder finds it in a demo.",
  },
];
