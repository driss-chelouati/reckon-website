# Reckon site — design conventions

What the CSS cannot tell you. Read this before designing or building any new page.

The rule of thumb: **this page is built from hairlines, not boxes.** When you reach for a card,
check whether a rule and some space would do the job. Usually it would.

---

## Tokens

Never hard-code a value that has a token. Never introduce a colour that isn't here.

```
--bg        #08080B     the page. Nothing is darker.
--surface   rgba(255,255,255,.026)   card fill
--surface-2 rgba(255,255,255,.042)   raised / active card fill
--edge      rgba(255,255,255,.055)   emphasised border
--edge-2    rgba(255,255,255,.038)   default border
--hair      rgba(255,255,255,.045)   rules and dividers

--fire      #F97A5C   brand. Buttons, active states, one accent per card.
--fire-hi   #FF8E72   hover, lit edges, chart strokes
--fire-lt   #FFB49E   brand-coloured text on dark

--pen       #F2678A   failure states only. Never decorative.
--tie       #8E96FF   confirmations, secondary data series
--ink       #EDEEF2   primary text
--ink-2     #9FA2AE   body text
--ink-3     #6A6D79   labels, captions, metadata

--r-lg 12px  --r-md 10px  --r-sm 8px
--gut  clamp(18px,3.2vw,44px)     --max 1280px
```

**Radius**: 12px is the ceiling for cards. Chips 5–6px. Small indicators are 1–2px squares,
not circles. The only fully rounded thing on the site is the hero eyebrow pill — that is a
deliberate single exception, do not create a second one.

---

## Type

Three faces, three jobs, no exceptions.

- **Newsreader** (serif, 400) — section headlines, big figures in prose, pull quotes.
  Never for UI labels. Tracking always negative: `-.02em` to `-.04em` as size increases.
- **Instrument Sans** — body, card titles, buttons.
- **JetBrains Mono** — every number, every label, every caption, every code fragment.
  Uppercase with `letter-spacing:.13em–.17em` for labels; sentence case otherwise.
  Always `font-variant-numeric:tabular-nums` on figures that sit in a column.

Body 14–15.5px. Captions and metadata 9–11px mono. Section headlines
`clamp(30px,4vw,48px)`. The hero is the only thing allowed above that.

---

## Colour discipline

1. **One accent per card.** If a card already has a coral chip, its heading is not also coral.
2. **`--pen` means something is wrong.** It never appears for emphasis, decoration or variety.
   If nothing has failed, there is no rose on screen.
3. **`--tie` means resolved** — a tick, a confirmation, a second data series. Not a third brand
   colour.
4. Coral on a dark ground goes muddy below ~40% opacity. For fills use `--fire` at full
   strength or `rgba(249,122,92,.10–.22)` as a tint; do not use midpoints.
5. In WebGL and additive canvas, brand colours must be **lifted** — `#FF8E72` or brighter — or
   they render brown against near-black.

---

## The lit edge

Every card carries the same light: a masked 1px gradient border, bright at the top-left corner,
gone by the lower third. This is the single most repeated device on the site. Copy it exactly:

```css
.thing::before{
  content:""; position:absolute; inset:0; border-radius:inherit; pointer-events:none;
  padding:1px;
  background:linear-gradient(168deg, rgba(255,255,255,.20),
    rgba(255,255,255,.03) 42%, rgba(255,255,255,0) 78%);
  -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite:xor; mask-composite:exclude;
}
```

Light comes from **above and slightly left**, always. Any glow, bloom or shadow that implies a
different source is wrong.

---

## Section anatomy

Every section is `.band > .sec`. `.sec` owns the rhythm: a hairline on top,
`clamp(30px,3.2vw,42px)` above and `clamp(112px,12vw,180px)` below. Do not override it.

Each section opens with the same two pieces:

1. **`.srail`** — a mono row: a label on the left, a fact on the right. The right-hand side
   should carry information, not decoration. *"27 pages, audited line by line"* is right;
   *"Section 3"* is not.
2. **`.shead`** — headline left, lede and a numbered link right. The numbered links run in one
   sequence down the page (01, 02, 03…) and each points at the next section. Adding a section
   means renumbering the chain.

Ledes are 25–50 words. Longer than that and the section is doing the hero's job.

---

## Which layout for which content

Reach for these before inventing anything:

| Content | Pattern |
|---|---|
| 3–4 parallel items, short | `.idx` — hairline-divided columns, no boxes |
| Two things compared | `.prs` / `.wtab` — a ledger read across, coloured left rules |
| Items that need an icon and a footer stat | `.pcd` — boxed cards with hexagon-masked icons |
| One artefact with a caption | `.mpanel` — panel, artefact bleeding out of the bottom, caption beneath |
| Quotes, varied lengths | `.tbento` — uneven 12-column grid, length tracks card size |
| Q&A | `.qa` — index left, one answer right, verdict first in serif |

**Do not build a fourth kind of card.** If the content doesn't fit one of these, the content is
probably wrong, not the system.

---

## Motion

- Reveal animations run **once**, on scroll into view, then stop. Nothing on this site loops
  except the ambient figures and the drifting dot bands.
- Standard easing `cubic-bezier(.2,.7,.3,1)`; 0.3–0.5s for state changes, 1s+ only for
  something travelling a distance.
- Stagger 60–220ms depending on how many items. Enough to read as a sequence, not a wave.
- Hover lifts 2px, never more. The shadow tint stays under 20% opacity.
- **Hover never reveals content.** It lifts and warms. Anything a reader needs must be visible
  without a pointer — half your visitors are on a phone.
- Every animation needs a `prefers-reduced-motion` path that renders the resolved state.

---

## Writing

- Flat and declarative. Concrete over adjectives. This audience is irritated by marketing
  language, but the buyer is paying for less rework — say that plainly.
- Never claim a measured before/after. Never invent a metric, a count or a testimonial.
- Do not put a number on the worked products or the component inventory. Both are growing;
  a count on the page dates itself and caps the impression.
- Banned: "AI-native", "seamless", "effortless", "supercharge", tiers language, the dead
  codename *Replicant UI*.
- The keeper line: **a plausible number is worse than no number.**
- Sentence case everywhere except mono labels. Em dashes, not hyphens. Curly quotes.

---

## Responsive

Breakpoints in use: 1020, 940, 900, 860, 820, 760, 640, 620, 560, 480, 400.
Do not add new ones without checking whether an existing one does the job.

- 860 is where the nav collapses to the burger.
- 1020 is where multi-column data tables must stack — a five-column table cannot survive
  half-width.
- Below 820, absolutely positioned artefacts go `static` and their masks come off.
- Test at 390px. Nothing may overflow horizontally; `body` has `overflow-x:hidden`, which
  hides the symptom but not the bug.

---

## Before you ship a page

- Does every figure name where it came from? (The site argues this. It should obey it.)
- Is there rose on screen for anything that hasn't failed?
- More than one accent in a single card?
- A fully rounded element that isn't the hero pill?
- A fourth card type that could have been one of the existing three?
- Does it hold at 390px, and at reduced motion?
