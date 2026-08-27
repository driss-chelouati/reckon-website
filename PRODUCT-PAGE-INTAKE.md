# Product page intake

Paste this into the Claude Design session that holds the template, or hand it to
anyone reading the built template. Every answer becomes a field in a
`ProductPage` record in `lib/product-pages.ts` — the page component holds no
copy — so the closer the answers are to the shapes below, the faster the page
goes up.

Answer in one pass, in the order given, using the skeleton at the bottom.

---

## How to answer

1. **Read it out of the template, not out of the brief.** Every figure, route,
   status value and string below must exist in the built product. If the
   template disagrees with the brief, the template wins.
2. **Never round, never tidy.** Figures are quoted exactly as the screen renders
   them — `$18,600.00`, not "about $18k". A plausible number is worse than no
   number.
3. **"Not in the template" is a valid answer** and is wanted wherever it is
   true. A section left out beats a section filled with values nobody checked —
   the status set in particular is optional and the page closes over the gap.
4. **Say whether a figure is stored or derived.** Derived figures are most of
   the argument the page makes; if a number on screen is the sum of rows under
   it, say so and name the rows.
5. **Quote the product's own vocabulary.** If the stored value is `submitted`
   and the screen reads "With brand", give both.
6. **House style:** sentence case except mono labels, em dashes not hyphens,
   curly quotes, flat and declarative. Banned: "AI-native", "seamless",
   "effortless", "supercharge", tiers language. No invented metrics, no
   before/after claims, no testimonials.
7. **No counts of the worked products or the component inventory** anywhere in
   the prose.

---

## What I need

### 0. Identification

- `slug` — the URL segment, e.g. `cargo-claims`, `talent`
- Product name as it appears in the menu, e.g. "Cargo claims"
- Domain, one word: Logistics, Support, Finance, Media…
- State: `audited` or `progress`
- Template file, if there is one: filename in `public/templates/` and the
  button label, e.g. "Preview interactive design"

### 1. Index card — the megamenu and `/products`

Short, one clause each, no full stops on the last three:

- **Blurb** — 2 sentences, 25–40 words. What the operator is up against, and
  the one hard constraint the product is built around.
- **Screens** — the number in the template
- **Covers** — 3–4 nouns comma-separated, e.g. "Queue, record, decision,
  recovery"
- **Breaks on** — the single worst case, ≤ 8 words, e.g. "A claim time-barred
  before you open it"
- **Menu note** — optional, ≤ 5 words, only if this one earns a slot in the
  menu's start-here strip

### 2. Page header

- **Rail right** — `Domain · what it is`, lowercase after the middot
- **Headline** — one sentence, ≤ 9 words, a claim about the product
- **Lede** — 25–50 words. What it is, and what looking at it is meant to settle.
- **Meta — exactly four**, each a `label / value / note` triple. Label is a mono
  caption (1–3 words), value is short and concrete, note is lowercase and ≤ 6
  words. One of them should be the operator. Good set: who operates it, the
  clock it runs on, how much status it declares, what the data is like.

### 3. Hero shot

The full-width screenshot under the header — the screen the day starts on.

- Which screen it is, and its screenshot number
- `of` — caption above the frame, e.g. "Work queue · full screen"
- `captionLead` + `caption` — a short bold lead, then a continuation starting
  with " · " carrying two real figures off that screen
- `size` — a fragment for the corner, e.g. "the screen the day starts on",
  "9 on the book"

### 4. The job, before any of it is a screen

- Rail right, headline (≤ 8 words), lede 25–50 words naming the operator and
  the deadline or constraint that shapes everything
- **Exactly three steps**, in the order the work happens. For each: a one-word
  title (Investigate / Decide / Recover), 35–60 words of body carrying at least
  one hard rule from the product, and a `note` of ≤ 7 words, lowercase, that
  says the thing the body could not — e.g. "the cap is derived, never typed".

### 5. The screens

Four or five, in the order the work happens, each answering a question the last
one raised. For each:

- **Title** — a sentence, not a screen name, ≤ 10 words
- **Body** — 40–70 words. What the screen owes an answer for, and what it
  refuses to do.
- **Three points** — one line each, ≤ 90 characters, at least two of them
  carrying an exact figure or an exact string from the UI
- **Shot number**, and `of` — the caption, e.g. "Claim · evidence"
- **Route** — the registered path, e.g. `/claims/:id/evidence`. If the template
  holds back its route inventory, give the destination's name instead and say
  which it is.
- **Kind** — two lowercase words joined by a middot: `record · reconciliation`,
  `queue · read-only`, `checklist · gated`, `decision surface`

Also, for the section lede: **the route count** — total registered, and how they
split across destinations. Say plainly if some destination deliberately does not
exist (no list screen for X, because X is only ever reached through Y).

### 6. The status set — skip if it has not been read out of the template

- Rail right — e.g. "A closed set with defined transitions"
- Headline and lede. The lede's job is the line between stored and derived:
  name the value everybody expects to find in the enum that is **not** there
  because it is computed at render (overdue, time-barred, expiring).
- **The values of one field**, in transition order, in the stored form
  (`awaiting_documents`). Mark one as `hot2` — the state where the operator is
  the one being waited on — and mark the terminal ones `term`.
- **Foot** — 40–70 words: how many values, how many terminal, why one is
  deliberately neutral, and the totals across every field (e.g. "five fields,
  twenty-five values").

### 7. The awkward cases

**Exactly three** fixtures that break a screen. For each:

- **Title** — the case in ≤ 9 words, e.g. "A payment the bank sent back"
- **Naively** — 20–35 words. What a generated product does here, stated without
  scorn: the wrong number, the silent fallback, the em dash.
- **Here** — 25–45 words. What this product does instead, with the figure.

They must be real records in the fixture set, not hypotheticals.

### 8. The audit

- Rail right, headline, and a lede of 40–70 words naming **one specific thing
  the audit found** — an aggregate that disagreed with the array under it, a
  figure stored in two places — and what changed as a result. If the audit found
  nothing, say so; do not invent a finding.
- The screenshot that shows it, its `of`, `captionLead`, `caption` and a `size`
  fragment such as "traced" or "checkable"

### 9. Closing

- **Headline in two halves**, each its own sentence, ≤ 6 words each — the second
  turns the first, e.g. "The rules are industry-agnostic." / "The product is
  not."
- **Lede** — 20–40 words

### 10. Files

- Screenshots numbered in page order, `01-<product>.png` upward, going in
  `public/img/products/<product>/`. One per shot slot: hero, one per screen, one
  for the audit. A slot with no image draws the dashed placeholder, which is
  fine — say which are missing.
- Template HTML for `public/templates/`, if it exists

---

## Answer skeleton

Fill this in and send it back as-is.

```
SLUG:
NAME:
DOMAIN:
STATE:
TEMPLATE FILE:

INDEX CARD
  blurb:
  screens:
  covers:
  breaks on:
  menu note:

HEADER
  rail right:
  headline:
  lede:
  meta 1:  label | value | note
  meta 2:  label | value | note
  meta 3:  label | value | note
  meta 4:  label | value | note

HERO
  shot #:      of:
  caption lead:            caption:
  size:

THE JOB
  rail right:      headline:
  lede:
  step 01: title | body | note
  step 02: title | body | note
  step 03: title | body | note

THE SCREENS
  rail right:      headline:
  route count:
  lede:
  screen 01: title | body | point | point | point | shot # | of | route | kind
  screen 02: …
  screen 03: …
  screen 04: …
  screen 05: (optional)

THE STATUS SET   (omit entirely if unread)
  rail right:      headline:
  lede:
  values (stored form, transition order; mark hot2 / term):
  foot:

THE AWKWARD CASES
  rail right:      headline:
  lede:
  case 01: title | naively | here
  case 02: title | naively | here
  case 03: title | naively | here

THE AUDIT
  rail right:      headline:
  lede:
  shot #:      of:
  caption lead:            caption:            size:

CLOSING
  headline:  first half / second half
  lede:

FILES
  screenshots present:
  screenshots missing:
```

---

## Worked example — the register to aim for

From the claims desk, so the shape of a good answer is unambiguous:

```
meta 2:  The clock | One year | from delivery, and derived

screen 01:
  title:  The claim, and what it is actually worth
  body:   The queue promises a payable figure; this is the screen that owes an
          answer for it. Claimed, less depreciation and betterment, salvage and
          the deductible, then a hard rule at the liability cap. No other screen
          subtracts anything.
  point:  $18,600.00 claimed, $7,400.00 of defensible adjustments, $11,200.00 assessed
  point:  The cap is the higher of 480 packages × 666.67 SDR and 9,600 kg × 2 SDR
  point:  On this container the two bases are sixteen times apart
  shot #: 02   of: Claim · assessment   route: /claims/:id
  kind:   record · reconciliation

case 03:
  title:    A payable figure that does not exist yet
  naively:  The column renders $0.00, or an em dash, or quietly falls back to
            the amount claimed.
  here:     “Not assessed”. A claim the desk turned down reads “Nothing payable”
            instead — three states, three strings, and none of them a zero.
```

---

## What happens with the answers

Two files and one line of routing:

1. A record in `productPages` in `lib/product-pages.ts`, keyed by slug —
   `generateStaticParams()` reads `Object.keys(productPages)`, so the route
   appears the moment the record does.
2. The index card fields onto the product's entry in `lib/products.ts`.
3. The route added to `liveRoutes` in `lib/nav.ts` in the same change, or
   `SiteLink` keeps rendering it as a plain `<a>`.

Screenshots are static imports from `public/img/products/<product>/`, so Next
reads their dimensions at build time.
