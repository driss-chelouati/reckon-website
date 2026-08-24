# Reckon — handoff 3: the full site, and how to port it

**This is the current brief.** Read `HANDOFF.md` first for the stack setup and the general
rules — those still stand. Everything about *which pages exist and what they contain* is in this
document. Where the two disagree, this one wins.

The source is eight standalone HTML files in this folder. They are the design, not a sketch:
port them faithfully rather than reinterpreting them.

---

## 1. Port in this order, one page at a time

Do **not** attempt the whole site in one pass. Each step below should end with a working page,
committed, before the next begins.

| # | Source file | Route | Notes |
|---|---|---|---|
| 0 | — | — | The shared layer. See §2. Nothing else starts until this is done. |
| 1 | `landing.html` | `/` | The reference implementation. Everything else reuses what you build here. |
| 2 | `how-it-works.html` | `/how-it-works` | |
| 3 | `failure-modes.html` | `/failure-modes` | |
| 4 | `design-system.html` | `/design-system` | |
| 5 | `pricing.html` | `/pricing` | |
| 6 | `changelog.html` | `/changelog` | |
| 7 | `showcase.html` | `/products` | Index. Has the only real interactivity on the site. |
| 8 | `product-claims-desk.html` | `/products/[slug]` | See §5 — this is a **dynamic route**. |

After step 1, most of the remaining work is assembling components you already have. If you find
yourself writing a new card or section component at step 5, check whether step 1 already built it.

---

## 2. Step 0 — the shared layer

All eight files carry an identical copy of the stylesheet, the nav and the footer. Extract once:

- `app/globals.css` — the shared stylesheet. Each file has one shared `<style>` block followed by
  one or more page-specific blocks. Take the shared block once; move the page-specific blocks to
  CSS modules beside their components.
- `components/Nav.tsx`, `components/Footer.tsx`, `components/Aura.tsx` → `app/layout.tsx`.
- three.js from npm, imported once. **Delete all eight inlined copies** — they are ~590KB each and
  are roughly 85% of every file.

**`Aura` is one element and it is easy to miss:** `<div class="aura"><i class="a1"></i>…</div>`,
sitting immediately before `.wrap`. It renders three large blurred coral pools behind everything.
It was originally on the landing page only and the other pages looked flat for weeks before anyone
noticed. It belongs in the layout, once.

---

## 3. Changes to apply — the landing page and nav were reworked

The landing page and the nav were both reworked substantially. **If you ported either from an
earlier version of these files, re-port them from the current file.** Do not merge by hand.

### Navigation
- The CTA reads **Get Reckon** everywhere. The old *Get the core* label is gone.
- **The nav button changes state on scroll.** A script measures the header's own bottom edge; once
  it clears the bar, `.past` goes on `.navbar` and the button switches from a quiet outline to the
  coral fill with `#1A0B06` text at weight 600. It reverts on scroll back up. Both the toggle and
  the CSS rule are required — one without the other looks like nothing is happening.
- The Roadmap link was removed from the nav and the mobile drawer. The roadmap now lives on
  `/changelog`.
- Every page uses the same script with its own header selector: `.hero`, `.prhero`, `.chero`,
  `.phero`, `.xhero`, `.fhero`, `.hhero`, `.dhero`.

### Buttons
- Primary buttons **tear on hover**: two pseudo-elements read the label from `data-t`, clip
  themselves to horizontal bands and jump three steps over 460ms. Every primary button needs its
  `data-t` to match its own text or the effect tears the wrong word.
- `.cta--quiet` is deliberately excluded — a tear needs a filled surface to cut into.
- The nav button only tears once it has become primary.

### Motion
- **No hover lifts anywhere.** Thirty `translateY` hover rules were removed on purpose. Cards
  respond with border, background and shadow only. Do not reintroduce them.
- Page headers stagger in on load. The shared rule is `.rin > *` at an even 140ms apart, with
  decorative layers excluded via `aria-hidden`.
- **The landing hero overrides that** with its own sequence, because its four pieces sit inside a
  plain wrapper div: eyebrow 0.05s, headline 0.22s, lede 0.39s, then each button separately at
  0.56s and 0.70s. Keep it as an explicit component rather than a generic wrapper.
- **`.hband ~ *`** fades in everything below the header at 0.82s, so a tall screen does not show
  the next section fully rendered while the header is still arriving. This is a **general sibling
  selector on the page's top-level bands** — if the sections end up nested inside a fragment or an
  extra wrapper, it silently stops matching. Check this on every page.

### Copy
- No specific component library is named in headlines or ledes. The default base is mentioned once,
  in the fine print under the component grid on `/design-system`. Do not promote it.
- Pricing is **free product plus paid expertise** — there are no tiers. Any tier language left
  anywhere is stale.

---

## 4. Animation inventory

Nine WebGL scenes. All follow the same shape: renderer → geometry → resize handler →
IntersectionObserver → rAF loop.

| Canvas | Page | Scene |
|---|---|---|
| `fx` | `/` | Cascading ruled sheets. Has a canvas-2D fallback. |
| `ctafx` | `/`, `/pricing`, `/changelog` | Icosahedron whose vertices drift and are pulled back. |
| `hfx` | `/how-it-works` | Three stacked sheets firing in turn. |
| `ffx` | `/failure-modes` | Corner field, stray points set back on the grid. |
| `dfx` | `/design-system` | Loose points gathering into rectangular blocks. |
| `xfx` | `/products` | Wide lattice with a travelling swell. |
| `pfx` | `/products/[slug]` | Concentric rings pulsed outward. |
| `prfx` | `/pricing` | Wave field; a crest passes, most points fade, a few stay lit. |
| `cfx` | `/changelog` | A record written row by row; the frontier advances and settles. |

`prfx` and `cfx` use a **custom `ShaderMaterial`** with a per-vertex `psize` attribute, because
`PointsMaterial` cannot vary point size per vertex. Keep the shaders as they are; the swell is what
makes those two legible.

Every scene needs the `useEffect` cleanup from `HANDOFF.md` §4 — cancel the rAF handle, disconnect the
observer, remove the resize listener, call `renderer.dispose()`. React 18 strict mode double-mounts
in dev and you will get two loops if cleanup is wrong.

**CSS-only, leave alone:** the mobile drawer checkbox, the FAQ radios, the megamenu hover and veil,
the button tear, the header stagger, and every specimen animation on `/design-system`.

---

## 5. Page transitions

The site should feel continuous between routes. Two things make that work, and one thing will
break it if you are not careful.

### Where the transition lives

Use `app/template.tsx`, not `app/layout.tsx`. A template re-renders on every navigation, which is
what you need; a layout persists, which is what you want for the nav, footer and aura.

```tsx
// app/template.tsx
'use client';
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="route-enter">{children}</div>;
}
```

```css
@keyframes routeEnter { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }
.route-enter { animation: routeEnter .26s cubic-bezier(.2,.78,.28,1) both }
@media (prefers-reduced-motion: reduce) { .route-enter { animation: none } }
```

Keep it short — 220–280ms. This is a wipe between pages, not a performance. Anything longer and
the site feels slow on the second click.

**Exit animations** are not straightforward in the App Router: the old tree unmounts before the new
one paints. Do not install a large animation library just to get one. Either accept enter-only,
which reads fine at this duration, or use the View Transitions route below.

### If View Transitions are available

Next has been adding first-class View Transitions API support. **Check whether it is stable in the
installed version before relying on it** — this brief predates your Next version. If it is
available, it gives real cross-fades and lets specific elements persist across a navigation, which
would suit the nav mark and the aura. If it is not, ship the `template.tsx` version above; do not
hand-roll a router interception to fake it.

### The thing that will break — read this

Every page already animates itself on mount:

- `.rin > *` staggers the header pieces, finishing around **0.75s**
- `.hband ~ *` fades everything below the header in at **0.82s**

Those exist for first load, where they are correct. If they also run on every client-side
navigation **on top of** a route transition, the result is a double fade and roughly a second and a
half of the page assembling itself before it settles. It will feel broken, and the cause will not
be obvious.

Pick one owner per entrance:

- **First load** → the header stagger and `.hband` fade own it. No route transition has happened.
- **Client navigation** → the route transition owns it. Suppress `.rin` and `.hband` entirely.

The simplest implementation is a flag set once on first mount — for example a `data-navigated`
attribute on `<html>` set by the template after its first render — with the CSS reading:

```css
html[data-navigated] .rin > *,
html[data-navigated] .hband ~ * { animation: none }
```

Verify by clicking between all eight routes and watching the header: it should arrive with the
page, once, not stagger a second time.

### Two more constraints

- **The nav must not transition.** It lives in the layout and should stay put across navigations,
  including its `.past` state. If the nav flickers on route change, something has been put in the
  template that belongs in the layout.
- **Watch the WebGL scenes.** A transition remounts the page tree, which remounts every canvas. If
  the `useEffect` cleanup is wrong, each navigation leaves a live rAF loop behind and the frame
  rate degrades as you browse. Navigate all eight routes twice and check.

---

## 6. Routing, slugs and dead links

**`/products/[slug]` is a dynamic route.** `product-claims-desk.html` is the first and only worked
example; its slug is `cargo-claims`. Build it as `app/products/[slug]/page.tsx` reading from a
content module, not as a hardcoded page. Nine more will follow with the same structure and
different copy.

Suggested shape — copy is placeholder and **will be rewritten**, so keep it in data, not JSX:

```ts
// lib/products.ts
export type Product = {
  slug: string; name: string; domain: string; status: 'live' | 'draft';
  lede: string; meta: { operator: string; clock: string; status: string; data: string };
  walkthrough: { title: string; body: string; shot: string }[];
  hostile: { situation: string; wrong: string; rule: string }[];
};
```

**The megamenu has many dead links, and that is expected.** These routes do not exist yet:
`/products/hr`, `/products/support`, `/products/auth`, `/products/clinical`, `/products/billing`,
`/products/grants`, `/products/admin`, `/products/device`, `/products/talent`, plus `/rules` and
`/setup`. Leave them as plain links pointing at those paths. **Do not** scaffold placeholder pages,
and do not remove them from the menu — the menu shape is deliberate and the pages are coming.

One more: the hire card on `/pricing` links to `#contact`, which does not exist. Flag it; do not
invent a contact page.

**Shared data.** The megamenu's ten products and the `/products` index cards are the same list in
two forms, duplicated across eight files. One `lib/nav.ts` and one `lib/products.ts`, both consumed
in several places.

---

## 7. Page-specific notes

**`/`** — hero bento, five tiles, one spanning two rows. The agent card holds an inlined Claude
mark. Pricing is two cards: a wide free card spanning two columns, and a hire card in one.

**`/design-system`** — three token panels and 55 component specimens. The specimens are decorative
markup built from a utility layer **scoped under `.ab`**. That scoping is not stylistic: `.bar` and
several other short class names collide with the landing page's chart classes once the stylesheet
is shared, and the symptom is bars stretching to fill their row. Keep the scoping. Consider a
`<Specimen name description>` component rather than 55 near-identical blocks.

**`/products`** — search filters cards by their text content and updates a live count. Port as
React state; do not read `textContent` off the DOM. Keep the empty state.

**`/failure-modes`** — ten sections, each two panels. The "as generated" panel is desaturated and
dimmed by CSS filter and restores on hover. Intentional.

**`/changelog`** — log entries and roadmap cards are both data-shaped. Put them in
`lib/changelog.ts` so adding a release is not a JSX edit.

**`/pricing`** and **`/failure-modes`** and **`/how-it-works`** all end with the same FAQ block with
different questions. One `<Faq items={…} />` component, four content sets.

---

## 8. Definition of done

Screenshot all eight routes at 1440, 900 and 390px against the source HTML at the same widths.

Verify specifically:

- Every WebGL scene renders once, with no doubled frame rate in dev.
- Navigating across all eight routes and back does not leak a render loop.
- Route transitions run once per navigation; the header does not stagger a second time.
- The nav does not flicker or re-enter on route change.
- The nav button turns coral past every page's header and reverts on scroll up.
- Primary buttons tear their own label on hover; quiet buttons do not.
- No card moves on hover anywhere.
- Content below the header does not appear before the header animation finishes, on a tall screen.
- The `/products` search filters and the count matches what is drawn.
- `/design-system` holds three columns with no card forcing its row wider.
- `prefers-reduced-motion: reduce` stills everything and breaks nothing.
- `pnpm build` passes with zero TypeScript or ESLint errors, one lockfile.

Report first-load JS, and confirm three.js appears exactly once in the bundle.

Then stop. List what you changed and why, and anything that looked wrong that you left alone
because this brief said faithful.
