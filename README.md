# reckon-website

The marketing site for Reckon. The design system itself lives in its own
repository — [driss-chelouati/reckon](https://github.com/driss-chelouati/reckon) —
and nothing in this one is published from here except the archives on `/download`.

Next.js 16 App Router, TypeScript, plain CSS. No Tailwind, no CSS-in-JS, no CMS,
no database, no API routes.

---

## Running it

```bash
pnpm install
pnpm dev
```

`pnpm build` must pass with no TypeScript and no ESLint errors — fixed, not
suppressed. `pnpm lint` runs ESLint on its own. Use pnpm for everything; a
second lockfile breaks the deploy.

There is no test suite. The build is the check, and the pages are verified by
reading them at 1440, 1024, 768 and 390px.

---

## Read before you change a page

Three files, in this order:

| File | What it is |
|---|---|
| `AGENTS.md` | Written and re-added by `next dev`. This Next version has breaking changes against what a model remembers — read the guide in `node_modules/next/dist/docs/` before writing code. |
| `CONVENTIONS.md` | The design system's own rules: tokens, type roles, colour meaning, the layout catalogue, motion, copy. What the CSS cannot tell you. |
| `PRODUCT-PAGE-INTAKE.md` | The questionnaire a new product page is written from. Filled in against the template, then turned into a record. |

`CLAUDE.md` imports the first and third so they load without being asked for.

---

## How the content works

**Every page's content is data, not JSX.** A product page, a release, a rule, a
shell, an FAQ answer — each is a record in `lib/`, and the component maps over
it. Adding a worked product is a record in `lib/product-pages.ts` plus a row in
`lib/products.ts`; it is never a new file under `app/`.

```
app/                 one folder per route, with its own .css beside it
components/          the shared pieces; fx/ holds every WebGL figure
components/fx/       one <Name>Field.tsx per scene, all on the shared Field
lib/                 the content — one module per page or per concern
public/img/products/ screenshots, one folder per product
public/templates/    the standalone product templates, served as-is
public/downloads/    the release archives the download page links to
```

`lib/nav.ts` holds `liveRoutes`, the set of routes that exist. A route in the
menu but not in that set renders as a plain anchor instead of a `next/link`, so
the router does not prefetch a 404. Add the route in the same change as the page.

---

## Things that will cost you an afternoon

- **`.hband ~ *`** fades in everything below a page header. It is a general
  sibling selector on the page's top-level bands: wrap the sections in a fragment
  or one more `<div>` and it silently stops matching. No error, just a page that
  no longer animates.
- **Nothing moves on hover.** Around thirty `translateY` hover rules were removed
  deliberately. An absence leaves no trace in the CSS, so this is the rule most
  likely to be undone in good faith.
- **Every primary button's `data-t` must match its own visible text**, or the
  hover tear cuts the wrong word.
- **Every figure names where it came from.** The site argues this, so it obeys
  it: no number goes on a page unless it can be traced to the template, the
  fixture or the archive it describes. A plausible number is worse than no number.
- **New templates ship a bundler splash.** Each export opens on a full-screen
  placeholder SVG and a white "Unpacking…" card over a background of its own.
  Copy the loader block from a template already in `public/templates/` — both
  grounds at `#08080B`, the spinner, the de-carded status line. It cannot be
  faded out: the bootstrap ends with `documentElement.replaceWith`, so the loader
  is destroyed with the document holding it. It can only be made invisible.

---

## Assets, and why the repository is large

`public/` is the bulk of this repo: the templates are ~19MB, the screenshots
~10MB, the archives ~5MB. Everything there is served verbatim, which is what the
preview buttons and the download page depend on.

The templates are written once and frozen. They are not regenerated when the
design system moves — a worked example is a period piece, and re-cutting one to
match a token change costs a re-shoot, a re-read and a rewrite for nothing. The
archives cannot be delta-compressed at all, so every version committed is stored
whole and permanently; if they start being rebuilt often, attach them to a GitHub
release and point the buttons at those URLs instead.

---

## Deployment

No static export. `next build` output is served by Node, `public/` is served
as-is, and `next.config.ts` is deliberately empty. The `basePath` question is
settled by not needing one: a plain `<a href="/templates/…">` is the only link on
the site Next would not rewrite, and there is nothing to rewrite it for.

`package.json` is `private`. The site carries no licence of its own; the design
system it describes is AGPL-3.0-or-later, stated on `/download` and in the
package's own `LICENSE`.
