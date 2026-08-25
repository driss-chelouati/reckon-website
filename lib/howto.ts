/* How to use it — and the four routes in, which /download shows too.

   `routes` IS SHARED. Both pages present the same four ways of putting the
   folder where a model can read it, word for word, so this is the one copy and
   components/RoutesIn.tsx is the one component that renders it. Editing a route
   here changes both pages, which is the point — they drifted apart as two
   copies in the source HTML and this is the content most likely to be edited.

   Inline markup: `backticks` → <code>, **stars** → <b>. See components/inline.tsx. */

/* ---------- the hero: what the install costs ---------- */

export type Cost = { label: string; answer: string; note: string };

/* Three figures, and the three "Nothing"s are the section's argument — they are
   display type, not a list. */
export const cost: Cost[] = [
  { label: "To install", answer: "Nothing", note: "Plain markdown, plain CSS, plain components." },
  { label: "To configure", answer: "Nothing", note: "The compiler finds the file on its own." },
  { label: "To run", answer: "Nothing", note: "No runtime, no service, no telemetry." },
];

/* ---------- the four routes in, shared with /download ---------- */
/* ordered most integrated to most hands-on; the 01-04 makes the gradient explicit */

/** One of the four routes in. The figure beside it is drawn by
    components/RoutesFigures.tsx and paired by position. */
export type Route = {
  n: string;
  /** the word after the number on the mono kicker */
  tag: string;
  /** whether that word is lit — only the recommended route is */
  lit?: boolean;
  title: string;
  body: string;
};

export const routes: Route[] = [
  {
    n: "01",
    tag: "Recommended",
    lit: true,
    title: "As a design system",
    body: "Create a design-system project, drop the unzipped contents at its root, and open it. The compiler finds `styles.css`, the 54 components, the 78 cards and the 8 templates on its own. There is nothing to configure and nothing to run first.",
  },
  {
    n: "02",
    tag: "Agents",
    title: "In Claude Code",
    body: "`SKILL.md` already carries its front matter and `AGENTS.md` explains how to assemble a screen. Drop the folder into a skills directory and it loads as a skill — the rules arrive before the first component does.",
  },
  {
    n: "03",
    tag: "Portable",
    title: "Other UI generators",
    body: "The markdown package is the whole system without the machinery, so it travels anywhere a model reads context. Paste the design guide and the `.prompt.md` pairs into v0, Lovable, Bolt, Cursor or your own harness. No install, no runtime, no assumption about the stack it will produce.",
  },
  {
    n: "04",
    tag: "Prototypes",
    title: "From a template",
    body: "Every `templates/<slug>/` is self-contained but for one line: `ds-base.js` holds the path back to the system root. Repoint that string and the prototype renders anywhere. Read the matching notes file first — it documents the fixtures and the data model.",
  },
];

/* ---------- when it does not work ---------- */

/* Four snags, ordered by likelihood — which the section rail states. All four
   are the same mistake wearing different clothes: something moved that the
   folder expected to find where it was. The corrective clause is the bold one. */
export type Snag = { title: string; body: string };

export const snags: Snag[] = [
  {
    title: "The rules do not seem to apply",
    body: "The file was not read. Check it sits at the root rather than a level down, and that the session was started after it landed. **A model that never saw the file will produce exactly what it produced before.**",
  },
  {
    title: "Everything renders in the wrong typeface",
    body: "`tokens/fonts.css` resolves the font files relative to the stylesheet. Flatten the tree, or serve `styles.css` from a different depth, and both faces fail silently to the system stack. **Keep the folder shape.**",
  },
  {
    title: "The components are not found",
    body: "The bundle namespace is derived from the project it was compiled in, so a fresh install gets a different suffix. **Resolve it rather than hard-coding it** — the lookup is one line, and it is in the setup step above.",
  },
  {
    title: "A change keeps reverting",
    body: "Three files are generated and committed on purpose: the bundle, the manifest and the adherence config. **Editing them by hand works until the next compile**, which silently puts them back. Change the source instead.",
  },
];

export const snagsNote =
  "Nothing here needs a support ticket. If something else breaks, the repository is the right place, because the answer is then visible to everyone with the same question.";

/* the five questions are the shared set in lib/faq.ts; only the way in differs */
export const faqLede =
  "What comes up once it is in place: whether it holds, what it costs to keep, and how to get it out again.";
