# Reckon — website handoff

Static HTML design for the Reckon marketing site, to be ported to Next.js.
Everything here is the design, not a sketch. Port faithfully.

## Read in this order

1. **`HANDOFF-3.md`** — start here. Port order, what changed, routing, page transitions,
   definition of done. **This is the current brief.**
2. **`HANDOFF.md`** — the original setup brief. Stack choices, project init, the animation
   cleanup rules, the CSS-only mechanisms that must not become React state. Still applies.
3. **`CONVENTIONS.md`** — the design system's own rules: colour meaning, layout patterns,
   type roles, motion rules, copy rules. Read before changing any visual decision.

## The eight pages

| File | Route |
|---|---|
| `landing.html` | `/` |
| `how-it-works.html` | `/how-it-works` |
| `failure-modes.html` | `/failure-modes` |
| `design-system.html` | `/design-system` |
| `pricing.html` | `/pricing` |
| `changelog.html` | `/changelog` |
| `showcase.html` | `/products` |
| `product-claims-desk.html` | `/products/[slug]` — slug `cargo-claims` |

Each file is standalone and inlines its own copy of three.js (~590KB, about 85% of each file).
Extract the shared stylesheet, nav, footer and aura **before** porting any page — see
`HANDOFF-3.md` §2.

## Known gaps, deliberate

- Eleven routes in the megamenu do not exist yet. Leave the links; do not scaffold placeholders.
- The hire card on `/pricing` links to `#contact`, which does not exist. Flag it.
- Product page copy is placeholder and will be rewritten. Keep it in a content module.
- Screenshot placeholders on the product page accept a real `<img>` drop-in later.
