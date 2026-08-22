# Reckon — landing page → Next.js on Vercel

Port `landing.html` to a Next.js app deployable on Vercel. **Faithful port first.** Do not
restructure, rename sections, rewrite copy, or "improve" the design. When the port is done and
looks identical, stop and wait — extra routes come later, as a separate task.

---

## 1. Set up the project first

Work in the folder this brief is in. Before touching anything else:

```bash
pnpm create next-app@latest . --ts --app --eslint --src-dir=false \
  --import-alias "@/*" --no-tailwind --use-pnpm
```

Answer no to Tailwind and no to Turbopack if it asks interactively. Scaffolding into a
non-empty folder is fine — `landing.html` and this brief can sit alongside; move them into a
`reference/` folder once the app exists so they are not served.

Then:

```bash
pnpm add three
pnpm add -D @types/three
```

Pin three explicitly rather than taking latest — see the note in §3. Confirm `pnpm dev` serves
the default page before you start porting, and commit that as a clean starting point.

Use **pnpm for everything** after this. Do not mix in npm or yarn; a second lockfile will
break the Vercel build.

---

## 2. What you are porting

One self-contained HTML file, ~740KB, of which ~589KB is an inlined copy of three.js r128.
Everything else — styles, markup, four small scripts — is about 150KB.

Sections, in order: hero → widget bento → what it is → the failure mode → in practice →
worked products → failure modes → machinery → who it is for → pricing → testimonials → FAQ →
closing CTA → footer.

---

## 3. Stack

- **Next.js, App Router, TypeScript** — scaffolded in §1. One route (`/`) for now, but lay it
  out so routes can be added without moving files around: `app/layout.tsx`, `app/page.tsx`,
  `components/`.
- **Plain CSS, not Tailwind.** The stylesheet is a single coherent system built on CSS custom
  properties, masked gradient borders, `clip-path`, and `mask-image`. Translating it to utility
  classes will lose things and take three times as long. Move it to `app/globals.css`
  essentially verbatim and import it in the root layout.
- **three.js from npm**, not the inlined copy. Delete the inlined library.
  Pin the version — the code is written against the r128 API. If you install a modern version
  instead, you must check `WebGLRenderer`, `IcosahedronGeometry`, `WireframeGeometry`,
  `PointsMaterial`, `CanvasTexture` and `Fog` still behave as used, and fix any breaks. Say
  which you did.
- **Fonts**: currently three Google Fonts (Newsreader, Instrument Sans, JetBrains Mono).
  Move to `next/font/google` so they self-host and stop blocking render. Keep the same weights
  and the Newsreader optical-size axis.
- No CMS, no database, no API routes, no analytics unless asked.

---

## 4. The animations — this is the part that breaks

There are **five `requestAnimationFrame` loops and eight `IntersectionObserver`s**. Every one of
them touches the DOM directly. Ported naively they will double-mount, leak, and run two render
loops at once.

### Rules for all of them

- Each animation lives in a **client component** (`"use client"`).
- Set up inside `useEffect(() => { ... return cleanup }, [])`.
- **Every effect must return a cleanup** that: cancels the rAF handle, disconnects the observer,
  removes the resize listener, clears timeouts/intervals, and — for the WebGL scenes — calls
  `renderer.dispose()`, disposes geometries and materials, and drops the canvas context.
- **React 18 strict mode double-invokes effects in dev.** If cleanup is wrong you will see two
  loops, a doubled frame rate and a flickering canvas. Test in dev before you trust it.
- Read DOM nodes through `useRef`, never `document.querySelector` inside the component.
- Guard everything that touches `window` — these are client components, but be explicit.
- Respect `prefers-reduced-motion`. Every animation already has a reduced-motion path; keep it.

### The five loops, specifically

1. **Hero field** (`#fx`, ~7.4KB). three.js scene of ruled sheets receding in depth with a
   sweeping wavefront. **Has a canvas-2D fallback** that runs if `window.THREE` is missing or
   WebGL fails. Once three.js comes from npm the fallback is mostly dead code — keep it anyway,
   it also covers WebGL being unavailable. Converts to a `<HeroField />` client component.
2. **Closing CTA panel** (`#ctafx`, ~4.4KB). three.js icosahedron whose vertices drift off the
   form and are pulled back. Same treatment.
3. **Bento reveal** (~1.2KB). An `IntersectionObserver` that adds `.fixed` to each `.bt` tile on
   a stagger, once, then stops. In React this should be a component that owns the tile list and
   toggles state — but the CSS keys off the `.fixed` class, so the simplest faithful port is to
   keep adding the class via refs. Either is fine; don't rewrite the CSS.
4. **Nav backdrop.** A scroll listener toggling `.stuck` on the header. Use `{ passive: true }`
   and remove it on cleanup.
5. **Headline glitch.** A self-rescheduling `setTimeout` that adds/removes `.hit` on one `<span>`
   at random 3.2–6.8s intervals. Store the timeout id in a ref and clear it on unmount, or it
   keeps firing after navigation.

Also: the pricing cards track the pointer and write `--mx` / `--my` custom properties on
`pointermove`. Same rules — attach in an effect, remove on cleanup.

---

## 5. Things that are CSS-only — leave them alone

Do **not** convert these to React state. They work, they need no JavaScript, and rebuilding them
in JS will make them worse:

- **Mobile menu**: a hidden checkbox (`#navtog`) plus sibling selectors. The nav sits at
  `z-index:30` above the drawer at `25` deliberately — the logo and close button must stay
  visible over the open drawer. Do not "fix" this.
- **FAQ**: five hidden radios (`#qa1`–`#qa5`) driving which answer shows. Keyboard accessible
  as-is.
- All the figure animations, the testimonial dot drift, the hover treatments.

If you convert these to state, the page will need JS to open its own menu. Don't.

---

## 6. Structure

Break the page into components by section, one file each, in `components/`:

`Nav`, `Hero`, `WidgetBento`, `WhatItIs`, `FailureMode`, `InPractice`, `WorkedProducts`,
`FailureModes`, `Machinery`, `WhoItIsFor`, `Pricing`, `Testimonials`, `Faq`, `ClosingCta`,
`Footer`.

Only the ones with animation are client components: `Nav`, `Hero`, `WidgetBento`, `Pricing`,
`ClosingCta`. Everything else stays a server component.

The nav and footer go in `app/layout.tsx`, not in the page — that is what makes adding routes
cheap later.

Repeated content (the four product cards, the five testimonials, the three pricing tiers, the
five FAQ entries) should be arrays mapped over, not copy-pasted JSX. Keep the data in the same
file as the component for now.

---

## 7. Details that will bite

- **Inline SVGs**: several sections use hand-positioned SVG (isometric figures, the waterfall
  chart, sparklines). JSX needs camelCase attributes — `strokeWidth`, `strokeDasharray`,
  `clipPath`, `xmlnsXlink`. Convert carefully; a silently dropped attribute means a broken
  drawing, not an error.
- **`class` → `className`**, **`for` → `htmlFor`** on the menu and FAQ labels. The FAQ breaks
  silently if you miss these.
- **Inline `style` attributes** exist in a few places (grid positions, animation delays,
  flex-grow values on the segment bar). They become objects: `style={{ animationDelay: '.12s' }}`.
- **HTML entities** (`&#8212;`, `&#8722;`, `&#8211;`, `&#183;`) — convert to real characters or
  JSX expressions. Do not leave them as raw entity text.
- **CSS custom properties in `style`** need the bracket form:
  `style={{ ['--dx' as any]: '12px' }}`.
- The `clip-path: path("...")` on the product-card hexagons is a generated path string. Copy it
  exactly; do not round the numbers.

---

## 8. Vercel

- `pnpm build` must pass with **no TypeScript errors and no ESLint errors** — not suppressed,
  fixed.
- One lockfile only (`pnpm-lock.yaml`), committed.
- Static by default. Nothing here needs SSR or revalidation.
- Add metadata in `app/layout.tsx`: title, description, Open Graph, and a theme colour matching
  `--bg` (`#08080B`). Set `viewport` correctly for mobile.
- Include a `public/` favicon placeholder; the real assets come later.
- Confirm the build output has no three.js duplication and report the first-load JS size.

---

## 9. Definition of done

Screenshot the deployed page at 1440px, 900px and 390px and compare against the original HTML
opened in a browser at the same widths. They should be indistinguishable.

Specifically verify:

- Both WebGL scenes render, and only once — no doubled frame rate in dev.
- The bento reveal runs once on scroll-in and does not restart.
- The mobile menu opens, the logo and close button stay visible above it, and links work.
- The FAQ switches answers on click and by keyboard.
- The hero table stacks below 1020px instead of overflowing.
- Nothing overflows horizontally at 390px.
- With `prefers-reduced-motion: reduce`, every animation is still and nothing is broken.

Then stop. Report anything you changed and why, and anything that looked wrong but you left
alone because the brief said faithful.
