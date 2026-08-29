/* The worked-product pages. Every product in lib/products.ts has one —
   cargo-claims, talent, payment-ops, recruitment-desk, marketing-desk, ai-tool,
   ward-desk and hearth — so nothing in the menu or the index currently points at
   a page that is not here. A booking desk was listed and pulled on 29 Aug 2026
   to be brought back later; its icon is still in the set.

   Every string on the page is a field. Adding the next product means adding a
   record, not a JSX file. Every screenshot slot takes an optional `image`, and a
   slot without one draws the dashed placeholder instead — every slot on every
   product carries a real shot today, so the placeholder is for the next one in.

   cargo-claims is no longer placeholder: every figure, route, status value and
   fixture named below is read out of the claims-desk template itself. Nothing
   here may be adjusted for rhythm — if a number is wrong, it is wrong in the
   product, not in the prose.

   The claims desk is finished and will not be regenerated. The template in
   public/templates and the six screenshots beside this file are snapshots of
   one build, so the copy and the images cannot drift apart again — an earlier
   set predated the Sign-off destination and put every desk-wide total on this
   page out by a build, which is the failure this note exists to prevent a
   second time. When the design system moves, it moves without this product:
   re-cutting a worked example to match a token change buys nothing and costs a
   re-shoot, a re-read and a rewrite. Leave it as the period piece it is. */

import type { StaticImageData } from "next/image";
import shotQueue from "@/public/img/products/claims-desk/01-claims-desk.png";
import shotAssessment from "@/public/img/products/claims-desk/02-claims-desk.png";
import shotEvidence from "@/public/img/products/claims-desk/03-claims-desk.png";
import shotDecision from "@/public/img/products/claims-desk/04-claims-desk.png";
import shotSignoff from "@/public/img/products/claims-desk/05-claims-desk.png";
import shotRecovery from "@/public/img/products/claims-desk/06-claims-desk.png";
import shotBook from "@/public/img/products/talent-desk/01-talent-desk.png";
import shotCreator from "@/public/img/products/talent-desk/02-talent-desk.png";
import shotBrief from "@/public/img/products/talent-desk/03-talent-desk.png";
import shotDeal from "@/public/img/products/talent-desk/04-talent-desk.png";
import shotMoney from "@/public/img/products/talent-desk/05-talent-desk.png";
import shotSignin from "@/public/img/products/talent-desk/06-talent-desk.png";
import shotWrap from "@/public/img/products/talent-desk/07-talent-desk.png";
import shotDash from "@/public/img/products/finance-desk/01-finance-desk.png";
import shotPayouts from "@/public/img/products/finance-desk/02-finance-desk.png";
import shotExpenses from "@/public/img/products/finance-desk/03-finance-desk.png";
import shotCard from "@/public/img/products/finance-desk/04-finance-desk.png";
import shotDisputes from "@/public/img/products/finance-desk/05-finance-desk.png";
import shotBalances from "@/public/img/products/finance-desk/06-finance-desk.png";
import shotTeam from "@/public/img/products/finance-desk/07-finance-desk.png";
import shotDesk from "@/public/img/products/recruitment-desk/01-recruitment-desk.png";
import shotQueue2 from "@/public/img/products/recruitment-desk/02-recruitment-desk.png";
import shotApplication from "@/public/img/products/recruitment-desk/03-recruitment-desk.png";
import shotOffers from "@/public/img/products/recruitment-desk/04-recruitment-desk.png";
import shotCompliance from "@/public/img/products/recruitment-desk/05-recruitment-desk.png";
import shotRequisition from "@/public/img/products/recruitment-desk/06-recruitment-desk.png";
import shotBadge from "@/public/img/products/recruitment-desk/07-recruitment-desk.png";
import shotOverview30 from "@/public/img/products/marketing-desk/01-marketing-desk.png";
import shotOverview7 from "@/public/img/products/marketing-desk/02-marketing-desk.png";
import shotJourney from "@/public/img/products/marketing-desk/03-marketing-desk.png";
import shotApprovals from "@/public/img/products/marketing-desk/04-marketing-desk.png";
import shotSend from "@/public/img/products/marketing-desk/05-marketing-desk.png";
import shotDeliver from "@/public/img/products/marketing-desk/06-marketing-desk.png";
import shotPeople from "@/public/img/products/marketing-desk/07-marketing-desk.png";
import shotNewChat from "@/public/img/products/ai-tool/01-ai-tool.png";
import shotThread from "@/public/img/products/ai-tool/02-ai-tool.png";
import shotFiles from "@/public/img/products/ai-tool/03-ai-tool.png";
import shotUsage from "@/public/img/products/ai-tool/04-ai-tool.png";
import shotSeats from "@/public/img/products/ai-tool/05-ai-tool.png";
import shotBilling from "@/public/img/products/ai-tool/06-ai-tool.png";
import shotShared from "@/public/img/products/ai-tool/07-ai-tool.png";
import shotToday from "@/public/img/products/hospital-desk/01-hospital-desk.png";
import shotBoard from "@/public/img/products/hospital-desk/02-hospital-desk.png";
import shotTheatre from "@/public/img/products/hospital-desk/03-hospital-desk.png";
import shotRound from "@/public/img/products/hospital-desk/04-hospital-desk.png";
import shotInvoice from "@/public/img/products/hospital-desk/05-hospital-desk.png";
import shotChase from "@/public/img/products/hospital-desk/06-hospital-desk.png";
import shotTariff from "@/public/img/products/hospital-desk/07-hospital-desk.png";
import shotHouse from "@/public/img/products/home-desk/01-home-desk.png";
import shotRooms from "@/public/img/products/home-desk/03-home-desk.png";
import shotCameras from "@/public/img/products/home-desk/04-home-desk.png";
import shotKit from "@/public/img/products/home-desk/05-home-desk.png";
import shotEnergy from "@/public/img/products/home-desk/06-home-desk.png";

/** the numbered link that closes each section and points at the next one */
export type NextLink = { num: string; href: string; label: string };

export type ProductPage = {
  slug: string;
  /** the right-hand fact on the header rail */
  railRight: string;
  headline: string;
  lede: string;
  meta: { label: string; value: string; note: string }[];
  /** the full-width shot under the header */
  hero: { shot: string; image?: StaticImageData; of: string; caption: string; captionLead: string; size: string };
  /** the standalone template in public/templates, opened in its own tab. A file,
      not a route, so it is a plain href and stays out of lib/nav.ts — and the
      one link on the site Next will not rewrite for you, so a basePath would
      have to be applied to this field by hand. Omit it and the button does not
      render — a product can have a page before it has a template, though every
      written one has its export now.

      These files are written once and frozen. They are heavy (claims-desk is
      2.1MB) but they are fetched only when a reader asks for one, so they are
      served straight out of public/ with the default revalidating cache rather
      than fingerprinted or given headers of their own. */
  preview?: { href: string; label: string };
  job: {
    railRight: string;
    headline: string;
    lede: string;
    next: NextLink;
    /** Three parallel columns, so a body wants about thirty words — cargo-claims
        runs 29 to 35 and is the length to write to. These sit in .idx, which is
        the hairline-divided pattern for short parallel items; past forty words
        the three columns stop scanning and become three paragraphs the reader
        has to work through in order. Anything that will not fit belongs in the
        note, or on the screen that demonstrates it. */
    steps: { n: string; title: string; body: string; note: string }[];
  };
  screens: {
    railRight: string;
    headline: string;
    lede: string;
    next: NextLink;
    walk: {
      n: string;
      title: string;
      body: string;
      points: string[];
      shot: string;
      image?: StaticImageData;
      of: string;
      route: string;
      kind: string;
    }[];
  };
  /** Omitted while a product's status set has not been read out of its template
      yet. The section is the page's own argument — status is data — so it is
      better absent than filled with values nobody has checked, and the numbered
      link chain closes over the gap. */
  states?: {
    railRight: string;
    headline: string;
    lede: string;
    next: NextLink;
    /** "hot" is the one the desk acts on; "term" is terminal */
    values: { name: string; mark?: "hot2" | "term" }[];
    foot: string;
  };
  hostile: {
    railRight: string;
    headline: string;
    lede: string;
    next: NextLink;
    cases: { label: string; title: string; naively: string; here: string }[];
  };
  /** Omitted where no second pass has been run yet. The section reports what
      checking the product turned up, so on an unaudited product there is
      nothing to put in it and inventing a finding would be the one lie this
      page cannot afford. The numbered link chain closes over the gap. */
  audit?: {
    railRight: string;
    headline: string;
    lede: string;
    next: NextLink;
    shot: string;
    image?: StaticImageData;
    of: string;
    captionLead: string;
    caption: string;
    size: string;
  };
  /** the two lines of the closing CTA, one per line. Each half wants to be
      about twenty characters — the CTA sets at 68px on one centred column, so a
      longer half wraps and the two-line shape becomes four. "One brief in." /
      "A whole product out." is the length to write to. */
  closing: { headline: [string, string]; lede: string };
};

export const productPages: Record<string, ProductPage> = {
  "cargo-claims": {
    slug: "cargo-claims",
    railRight: "Logistics · cargo claims",
    headline: "A claims desk, built the whole way down.",
    lede: "Not a screen. A product — its own routes, its own status values, its own data, and its own reason for looking the way it does. This is what one brief produced, and what an audit found in it.",
    meta: [
      { label: "Operator", value: "Cargo claims adjuster", note: "one desk, one queue" },
      { label: "The clock", value: "One year", note: "from delivery, and derived" },
      { label: "Status", value: "25 values", note: "across five declared sets" },
      { label: "Data", value: "Deliberately hostile", note: "the week-one cases" },
    ],
    hero: {
      shot: "Screenshot 01",
      image: shotQueue,
      of: "Work queue · full screen",
      captionLead: "Work queue",
      caption: " · $902,870.00 claimed and open, 12 claims of the 19 on the desk",
      size: "the screen the day starts on",
    },
    preview: { href: "/templates/claims-desk.html", label: "Preview interactive design" },
    job: {
      railRight: "Before any of it is a screen",
      headline: "Somebody is deciding what you owe.",
      lede: "Cargo arrives damaged, a customer files, and an adjuster has a year from delivery to investigate, decide and pay. Every screen in this product exists because that job needed it.",
      next: { num: "01", href: "#screens", label: "The screens →" },
      steps: [
        {
          n: "01",
          title: "Investigate",
          body: "Four mandatory documents — the surveyor’s report, the packing list, the commercial invoice, the delivery receipt. Until every one of them is on file, the decision surface stays shut.",
          note: "illegible is its own state",
        },
        {
          n: "02",
          title: "Decide",
          body: "Approve in full, approve in part or reject, against a liability cap the bill of lading imposes. Past her own authority the adjuster is not blocked — the button changes to send it for signature.",
          note: "the cap is derived, never typed",
        },
        {
          n: "03",
          title: "Recover",
          body: "Once the customer is paid, pursue whoever caused it — the terminal, the haulier, the packer, the lashing contractor — on a deadline that comes out of their contract rather than out of the law.",
          note: "its own clock, its own set",
        },
      ],
    },
    screens: {
      railRight: "In the order the work happens",
      headline: "Each one answers a question the last one raised.",
      lede: "Nineteen registered routes across five destinations, and every one of them lands. Nothing here is a dead end drawn to fill a slot in a sitemap.",
      next: { num: "02", href: "#states", label: "The status set →" },
      walk: [
        {
          n: "Screen 01",
          title: "The claim, and what it is actually worth",
          body: "The queue promises a payable figure; this is the screen that owes an answer for it. Claimed, less depreciation and betterment, salvage and the deductible, then a hard rule at the liability cap. No other screen subtracts anything.",
          points: [
            "$18,600.00 claimed, $7,400.00 of defensible adjustments, $11,200.00 assessed",
            "The cap is the higher of 480 packages × 666.67 SDR and 9,600 kg × 2 SDR",
            "On this container the two bases are sixteen times apart",
          ],
          shot: "Screenshot 02",
          image: shotAssessment,
          of: "Claim · assessment",
          route: "/claims/:id",
          kind: "record · reconciliation",
        },
        {
          n: "Screen 02",
          title: "Evidence, and the decision it permits",
          body: "Four mandatory documents and one that is only supporting, so the count reads four of four against a five-row list. Nothing is ever deleted here: a document rejected as illegible stays on the file carrying its reason.",
          points: [
            "Requested, received and illegible as separate states",
            "One predicate gates the row button, the queue headline and the nav badge",
            "The delivery receipt is quoted, exception and all — “one pallet wet, carton damage”",
          ],
          shot: "Screenshot 03",
          image: shotEvidence,
          of: "Claim · evidence",
          route: "/claims/:id/evidence",
          kind: "checklist · gated",
        },
        {
          n: "Screen 03",
          title: "Three outcomes, and the letter they write",
          body: "Approve in full, approve in part, or reject with a reason from the list and a justification in writing. The customer’s letter builds from the figures being typed rather than from a description of them, and nothing is recorded until it is submitted.",
          points: [
            "$11,200.00 payable, comfortably inside a cap of $428,802.14",
            "Decide alone up to $25,000.00 — the panel names the figure and the limit",
            "Past it the surface does not change; the submit reads “Send for sign-off”",
          ],
          shot: "Screenshot 04",
          image: shotDecision,
          of: "Claim · decision",
          route: "/claims/:id/decision",
          kind: "decision surface",
        },
        {
          n: "Screen 04",
          title: "Somebody else’s queue, seen from the side that waits",
          body: "Two decisions over the adjuster’s authority are with the claims manager, longest wait first. Nothing on this screen is hers to approve, and it says so — her two actions are to chase one or to take it back.",
          points: [
            "$127,560.00 waiting on a signature, 11 days on the oldest",
            "Each row states what it is over authority by, not just its value",
            "Taking one back reopens its assessment on her own desk",
          ],
          shot: "Screenshot 05",
          image: shotSignoff,
          of: "Sign-off",
          route: "/signoff",
          kind: "queue · read-only",
        },
      ],
    },
    states: {
      railRight: "A closed set with defined transitions",
      headline: "Status is data. Overdue is not.",
      lede: "Every value a claim can hold, declared once and stored. Time-barred is not among them: it is computed at render from the delivery date, and the enum file lists it under the values that are deliberately absent because they are derived.",
      next: { num: "03", href: "#hostile", label: "The awkward cases →" },
      values: [
        { name: "awaiting_documents" },
        { name: "awaiting_survey" },
        { name: "ready_for_decision", mark: "hot2" },
        { name: "awaiting_signoff" },
        { name: "escalated_legal" },
        { name: "approved_awaiting_payment" },
        { name: "paid", mark: "term" },
        { name: "rejected", mark: "term" },
      ],
      foot: "Eight values, two of them terminal, and one tone reserved for the state where the adjuster is the one being waited on. Rejected is deliberately neutral rather than a failure — turning a claim down is a decision the desk made and can defend. The settlement, the response, the recovery and every document carry their own sets: five fields, twenty-five values.",
    },
    hostile: {
      railRight: "What a client finds in week one",
      headline: "The fixtures are deliberately unkind.",
      lede: "Demo data arranged to look good proves nothing. These are the records that break a screen, and they were in the set from the first pass.",
      next: { num: "04", href: "#audit", label: "The audit →" },
      cases: [
        {
          label: "Case 01",
          title: "A payment the bank sent back",
          naively:
            "The claim reverts to unpaid, or $25,600.00 quietly leaves the pipeline and the stages stop adding up to what was approved.",
          here: "The claim stays paid — the decision was right and the customer was told — while the settlement moves to returned and rejoins the queue to be scheduled. The failure belongs to the payment, not to the claim.",
        },
        {
          label: "Case 02",
          title: "An offer below the surveyed loss",
          naively:
            "The $34,000.00 offered is stored as recovered, and the recovery rate improves the moment somebody makes any offer at all.",
          here: "Offered and recovered are separate fields. The rate is money-weighted over closed files only, and the screen says so — a file still being argued has not failed yet.",
        },
        {
          label: "Case 03",
          title: "A payable figure that does not exist yet",
          naively: "The column renders $0.00, or an em dash, or quietly falls back to the amount claimed.",
          here: "“Not assessed”. A claim the desk turned down reads “Nothing payable” instead — three states, three strings, and none of them a zero.",
        },
      ],
    },
    audit: {
      railRight: "Read after generation, before handoff",
      headline: "Every figure, traced back.",
      lede: "Each aggregate matched against the array it claims to summarise. It found a recovery holding its own copy of what the claim had paid — so when a liability cap bit and the settlement fell to meet it, the two figures disagreed for a build. This file stores neither of them now.",
      next: { num: "05", href: "#top", label: "Back to the top →" },
      shot: "Screenshot 06",
      image: shotRecovery,
      of: "Recovery file · mirror ledger",
      captionLead: "The mirror ledger",
      caption: " · the claim owns the first figure, this file only follows it",
      size: "traced",
    },
    closing: {
      headline: ["One brief in.", "A whole product out."],
      lede: "This is one of several. Each has its own routes, its own status values, and its own awkward cases waiting to be found.",
    },
  },

  /* Talent representation. Written from the design brief rather than from the
     template — there are no screenshots yet and no status set, so every shot
     slot draws the dashed placeholder and the status section is absent rather
     than guessed. The route caption carries the destination's name because the
     brief deliberately holds back a route inventory; when the template lands,
     those become paths. */
  talent: {
    slug: "talent",
    railRight: "Media · talent representation",
    headline: "A desk that answers to both sides of the deal.",
    lede: "An agency sits between brands who want a campaign booked and creators whose careers turn on what is agreed for them. Both think they are the customer. Money arrives late and leaves later, and nothing here is a single-owner record.",
    meta: [
      { label: "Operator", value: "Talent manager", note: "five of the nine on the roster" },
      { label: "One deal binds", value: "Five records", note: "any one of them can be the late one" },
      { label: "Figures", value: "All derived", note: "nothing on screen is a stored total" },
      { label: "Creates", value: "Three refused", note: "each arrives with the deal that owes it" },
    ],
    hero: {
      shot: "Screenshot 01",
      image: shotBook,
      of: "The book · the availability band",
      captionLead: "Five free to pitch",
      caption: " · counted against today, and against the brand’s own window once there is a brief",
      size: "9 on the book",
    },
    preview: { href: "/templates/talent-desk.html", label: "Preview interactive design" },
    job: {
      railRight: "Before any of it is a screen",
      headline: "Two customers, and one desk between them.",
      lede: "A brand wants a campaign booked. A creator wants a career managed. The agency answers to both, and every screen in this product exists because that job needed it.",
      next: { num: "01", href: "#screens", label: "The screens →" },
      steps: [
        {
          n: "01",
          title: "Represent",
          body: "Three figures over nine creators. Availability counts against today here and against the brand’s own window on a brief — so somebody booked until October is free for a campaign starting in November.",
          note: "the same word, two clocks",
        },
        {
          n: "02",
          title: "Book",
          body: "A pitched brief becomes a deal, and the deal brings its deliverables, its invoice and its payout with it. The contract walks a declared line, dated at every step.",
          note: "book the deal, not create deal",
        },
        {
          n: "03",
          title: "Collect",
          body: "$119,000.00 owed by brands against $142,160.00 owed to creators — and the commission banks when the money clears, not when the deal is signed.",
          note: "$14,900.00 banked, not $45,240.00",
        },
      ],
    },
    screens: {
      railRight: "Scanned across, rarely drilled into",
      headline: "Each one answers a question the last one raised.",
      lede: "Twenty-eight registered routes: five destinations in the bar, fourteen off it, nine for auth. There is deliberately no deals list and no brands list — a deal or a brand is only ever reached through the work that names it.",
      next: { num: "02", href: "#states", label: "The status sets →" },
      walk: [
        {
          n: "Screen 01",
          title: "A face business, led by a face",
          body: "The record opens on the creator’s portrait, because that is what this industry trades on. The 600K audience beneath it is not stored — it is 412K on one platform and 188K on another, added up in front of you, and the panel says so: a follower count changed anywhere moves every figure that mentions her.",
          points: [
            "3.8% and 5.1% weighted into the 4.2% on the header",
            "Instagram carries 68.7% of the audience, and that is derived too",
            "Nothing has finished running, so there is no promise to judge yet",
          ],
          shot: "Screenshot 02",
          image: shotCreator,
          of: "Creator record",
          route: "Creator record",
          kind: "record · portrait-led",
        },
        {
          n: "Screen 02",
          title: "The honest answer is no",
          body: "A brief wants four TikToks from a million-plus audience in dating and social, organic only, answered by the 26th. Nobody on the book clears all three axes. The screen leads with that — fits the brief, zero — rather than padding the list with the closest thing to a yes.",
          points: [
            "Cannot take it and off brief are different groups, and say why",
            "“An exclusivity is a contract we signed; a booking is a promise we made”",
            "One creator has no rate for the format, so there is nothing to quote",
          ],
          shot: "Screenshot 03",
          image: shotBrief,
          of: "Brief · the match",
          route: "Brief",
          kind: "record · matched",
        },
        {
          n: "Screen 03",
          title: "One deal, and the five records it binds",
          body: "A fee of $15,000.00 against a rate card that quoted $16,000.00 and a budget that allowed $18,000.00 — the negotiation is on the page, not behind it. Deliverables, invoice and payout all hang off this record because none of the three can be created without it.",
          points: [
            "Drafted, out for signature, signed — each with the date it landed",
            "Organic only: the brand may not run these as ads",
            "The invoice is paid and the payout is due, on two separate clocks",
          ],
          shot: "Screenshot 04",
          image: shotDeal,
          of: "Deal record",
          route: "Deal",
          kind: "record · binds five",
        },
        {
          n: "Screen 04",
          title: "Two ledgers facing each other",
          body: "What the brands owe us on the left, what we owe the creators on the right. A creator’s $24,800.00 cannot move because a brand is 22 days past due on $31,000.00, and the header says exactly that rather than leaving a payout marked pending with no cause.",
          points: [
            "Every held payout names the invoice holding it",
            "$41,500.00 uninvoiced, because that contract is not countersigned",
            "Commission banked excludes the invoices nobody has paid",
          ],
          shot: "Screenshot 05",
          image: shotMoney,
          of: "Money · invoices and payouts",
          route: "Money",
          kind: "ledger · facing",
        },
        {
          n: "Screen 05",
          title: "The screen with no navigation at all",
          body: "Auth is a shell decision before it is a form: no nav owner, one layout variant, one credential strategy. Every route the screens offer exists behind them — five stages of recovery, the expired-link branch, and a sixth screen for the lockout that three failed attempts earns you.",
          points: [
            "One line of copy under the card, and nothing else on the page",
            "The lockout counts down to “The wait is over” rather than a dead end",
            "Nine auth routes, none of them a link into nowhere",
          ],
          shot: "Screenshot 06",
          image: shotSignin,
          of: "Sign in",
          route: "Sign in",
          kind: "auth · no shell",
        },
      ],
    },
    states: {
      railRight: "Six declared fields, twenty-three values",
      headline: "The states that hurt are the ones nobody can set.",
      lede: "Every value a record can hold is declared once and stored. Overdue is not among them on either side of the money — it is a predicate over a date, computed as the page draws, and it turns true at midnight without anyone touching the record. Rights expiring and rights lapsed work the same way.",
      next: { num: "03", href: "#hostile", label: "The awkward cases →" },
      values: [
        { name: "scheduled" },
        { name: "submitted" },
        { name: "revisions_requested", mark: "hot2" },
        { name: "approved" },
        { name: "published", mark: "term" },
      ],
      foot: "One field of the six, and the stored word is not the word on screen: submitted reads “With brand”, because the vocabulary is written from the manager’s point of view rather than the record’s. Two values across the sets carry no fixture on purpose — both are reachable only by taking the action that leads there, and a screenshot of a state nobody can arrive at proves nothing.",
    },
    hostile: {
      railRight: "What a client finds in week one",
      headline: "The fixtures are deliberately unkind.",
      lede: "An industry that runs on remembered numbers hands you records that do not fit the shape a screen wants. These were in the set from the first pass.",
      next: { num: "04", href: "#audit", label: "The derivation →" },
      cases: [
        {
          label: "Case 01",
          title: "A payout waiting on money that never arrived",
          naively:
            "The row reads “payout pending” with no cause attached, and the manager goes to another screen to find out why.",
          here: "$24,800.00 held because a brand is 22 days past due on $31,000.00 — and the invoice holding it is the row facing it across the page.",
        },
        {
          label: "Case 02",
          title: "A brief nobody on the book fits",
          naively:
            "The list is padded with the nearest misses, ranked as though somebody qualified, and the agency pitches a creator it should not have.",
          here: "Fits the brief, zero. Two who cannot take it and seven who are off it, each grouped by the reason — and the answer to the brand is no.",
        },
        {
          label: "Case 03",
          title: "A deal signed at a rate the policy no longer uses",
          naively:
            "The statement multiplies the book by today’s standard commission and disagrees with every contract underneath it.",
          here: "That payout reads less 18% while the standard is 20%, because each deal carries the rate it was signed at and the screen reads the deals.",
        },
      ],
    },
    audit: {
      railRight: "Read after generation, before handoff",
      headline: "Every figure, traced back.",
      lede: "The wrap report is the check: 767K reached against 700K promised, 109.6% of it. The two posts beneath the headline carry 412K and 355K, and 56.8K engagements and 7.2K saves split the same way. Every figure on the page is the sum of the rows under it, and each row is the platform’s own number entered when the post went live.",
      next: { num: "05", href: "#top", label: "Back to the top →" },
      shot: "Screenshot 07",
      image: shotWrap,
      of: "Performance · against the promise",
      captionLead: "109.6% of the reach promised",
      caption: " · and 148.0% of the engagement rate, against what the pitch said in May",
      size: "checkable",
    },
    closing: {
      headline: ["The rules travel.", "The product does not."],
      lede: "The distance between the two is the design work. Derive every number, declare how every entity commits, and refuse the creates that do not exist in the business.",
    },
  },

  "payment-ops": {
    slug: "payment-ops",
    railRight: "Finance · a payments desk for a platform",
    headline: "Every figure names the rows it came from.",
    lede: "A payments desk for a platform: what came in, what is waiting to go out, what we spent on our own cards, and how much of the balance is actually ours to move today. Looking at it should settle whether a number on screen can be checked.",
    meta: [
      { label: "The operator", value: "Treasury operations", note: "two admins, an approver, two members" },
      { label: "The window", value: "Rolling 30 days", note: "never a calendar month" },
      { label: "Declared status", value: "Six fields, 28 values", note: "seven derived flags, none stored" },
      { label: "The data", value: "One fixture set, in cents", note: "20 payments, 8 payouts, 22 expenses" },
    ],
    hero: {
      shot: "Screenshot 01",
      image: shotDash,
      of: "Dashboard · full screen",
      captionLead: "Five figures, then the queues that owe them.",
      caption: " · $162,232.15 net over the last 30 days, and $12,905.60 of payouts you can release right now.",
      size: "the screen the day starts on",
    },
    preview: { href: "/templates/finance-desk.html", label: "Preview interactive design" },
    job: {
      railRight: "Before any of it is a screen",
      headline: "Watch it, release it, account for it.",
      lede: "One person in treasury operations, on a rolling 30-day window rather than a calendar month — a monthly limit reads empty on the first and makes every card meter lie about the same data on different days.",
      next: { num: "01", href: "#screens", label: "The screens →" },
      steps: [
        {
          n: "01",
          title: "Watch",
          body: "Money arrives as card, ACH, wire or wallet, and how it arrived is what it costs. Net volume is settled payments less refunds, and a charge with no outcome yet sits outside both.",
          note: "a pending charge is not a failure",
        },
        {
          n: "02",
          title: "Release",
          body: "Payouts leave the balance, so nothing leaves without an approval. A payout held by another team keeps its row, its badge, its clock and its reason, and loses only its button.",
          note: "never disabled to avoid deciding",
        },
        {
          n: "03",
          title: "Review",
          body: "Whether a receipt is required is policy rather than a fact about the expense. The rule lives in one object the settings screen edits, and saving that form recounts the sidebar.",
          note: "the threshold is passed in, never inlined",
        },
      ],
    },
    screens: {
      railRight: "In the order the work happens",
      headline: "Five screens, each answering the last one’s question.",
      lede: "Thirty registered routes, eleven of them top-level. Two destinations deliberately have no record screen — a payment and a payout are only ever read on the list that holds them, so a notification about one lands on that list rather than on a route with nothing behind it.",
      next: { num: "02", href: "#states", label: "The status set →" },
      walk: [
        {
          n: "Screen 01",
          title: "The queue that knows which payouts you can finish",
          body: "The dashboard promises an approvable figure; this screen owes an answer for it. Three payouts are waiting on us and one can be released: another team holds the second for a dispute running on a different screen, and the third is above the operator’s own approval limit. The queue hides neither and offers neither.",
          points: [
            "$12,905.60 ready to approve — 1 of the 3 payouts waiting on us",
            "One reads “Held by Risk — Compliance review — open dispute”",
            "One reads “Above your $50,000.00 limit”, and names who can release it",
          ],
          shot: "Screenshot 02",
          image: shotPayouts,
          of: "Payouts · approval queue",
          route: "/payouts",
          kind: "queue · gated",
        },
        {
          n: "Screen 02",
          title: "Card spend, and the receipts holding it up",
          body: "Our own money going out. Three expenses can be approved now; two more are waiting on a receipt and are recessed with the name of the person who owes it. Approve exists on those rows and is disabled with its reason, because the precondition is visible — not omitted, and not a sentence beside a live button.",
          points: [
            "3 you can approve now, $2,332.00 across them",
            "2 waiting on a receipt, $1,183.00 — required over $75.00, and on meals and travel spend",
            "A queried row names who is being waited on, and what was asked",
          ],
          shot: "Screenshot 03",
          image: shotExpenses,
          of: "Expenses · review queue",
          route: "/expenses",
          kind: "queue · gated",
        },
        {
          n: "Screen 03",
          title: "One card, its limit, and the window it is measured over",
          body: "A meter rather than a row, because the question is how much of the limit is left. One card is past its limit and another is near it — and “near” is the policy’s 80% share rather than a number inside the component. The card’s whole ledger sits under the chart, so the meter is checkable against the rows that filled it.",
          points: [
            "$5,120.00 of $5,000.00 — over, at 102.4%",
            "Another reads near at 82.6%, against the policy’s 80% share",
            "Rolling 30 days, stated in words beside every figure it scopes",
          ],
          shot: "Screenshot 04",
          image: shotCard,
          of: "Card · limit and ledger",
          route: "/cards/:id",
          kind: "record · meter",
        },
        {
          n: "Screen 04",
          title: "The money the network is holding",
          body: "Three open disputes hold $9,650.10 out of the balance. Two need evidence from us and one is under review, where the clock belongs to the network — so that record is offered no action at all, and the screen says who is being waited on instead.",
          points: [
            "$9,650.10 held back against the 3 still open",
            "One is due in 22 hours, another in four days",
            "The one under review is owed nothing — that clock runs up to 75 days",
          ],
          shot: "Screenshot 05",
          image: shotDisputes,
          of: "Disputes · one selected",
          route: "/disputes/:id",
          kind: "list-detail · thread",
        },
        {
          n: "Screen 05",
          title: "What of the balance is actually yours to move today",
          body: "The three-part answer, and the end of the argument the other four screens started. Available is the only stored money figure in the product; committed is the payouts that have not landed and reserved is the open disputes, and both are summed from the two tables printed directly below them.",
          points: [
            "$412,806.44 available · $102,835.60 committed · $9,650.10 reserved",
            "$525,292.14 on the platform — available plus everything claiming it",
            "Each table’s footer states the figure it sums to",
          ],
          shot: "Screenshot 06",
          image: shotBalances,
          of: "Balances · the three parts",
          route: "/balances",
          kind: "record · reconciliation",
        },
      ],
    },
    states: {
      railRight: "A closed set with defined transitions",
      headline: "Six fields, and the words they refuse to hold.",
      lede: "The value everybody looks for in the payout enum is blocked, and it is not there: a held payout is awaiting_approval with a blocking record attached, and the block is computed at render. Late is absent for the same reason, from this field and from payments.",
      next: { num: "03", href: "#hostile", label: "The awkward cases →" },
      values: [
        { name: "awaiting_approval", mark: "hot2" },
        { name: "approved" },
        { name: "in_transit" },
        { name: "paid", mark: "term" },
        { name: "rejected", mark: "term" },
        { name: "returned", mark: "term" },
      ],
      foot: "Six values, three of them terminal. Rejected is deliberately neutral rather than danger — turning a payout down is an ending we chose and can defend, while returned is the network failing us, and the two must not share a colour. Across the product: six status fields, twenty-eight values, and seven derived flag families beside them.",
    },
    hostile: {
      railRight: "Fixtures that break a screen",
      headline: "Three records the desk has to be right about.",
      lede: "All three are entries in the fixture rather than hypotheticals, and each one is why a rule in the product exists.",
      next: { num: "04", href: "#audit", label: "The audit →" },
      cases: [
        {
          label: "Case 01",
          title: "A payout held by another team for a dispute on another screen",
          naively:
            "It sits in the queue with a live Approve button — or it drops out of both the queue and the count, and the operator never learns why the total moved.",
          here: "$6,300.00, still in the queue at full weight and still badged awaiting approval, with the holding team, the reason and the dispute under the badge, and “Waiting on Risk” where the button would be. It is outside the approvable figure.",
        },
        {
          label: "Case 02",
          title: "A card past a limit the settings screen owns",
          naively:
            "The meter clamps at 100%, or the limit and the warning share are constants inside the component, so the settings form edits a number nothing reads.",
          here: "$5,120.00 of $5,000.00 at 102.4%, over. The 80% near share and the $75.00 receipt threshold live in one policy object, every predicate takes it as an argument, and the settings screen runs the real evaluator over the real expenses with the draft values.",
        },
        {
          label: "Case 03",
          title: "An expense that cannot be approved yet",
          naively:
            "Approve is hidden, so the row looks finished — or it is live, and the receipt rule is a sentence printed next to it.",
          here: "$965.00 at a hotel. Approve is present and disabled, reading “A receipt is required before this can be approved — travel spend, 75 dollar threshold”, the row is recessed and names who is being waited on, and a “No receipt” badge sits beside the status.",
        },
      ],
    },
    audit: {
      railRight: "What checking it turned up",
      headline: "A figure on screen that nothing read.",
      lede: "There is no audit view and there should not be one — the audit is a design-time discipline. It found this: every payout row and the team screen printed an approval limit per person, and no payout predicate read either one. Approvability asked only whether the payout was held, so one at $61,480.00 counted as approvable for everybody.",
      next: { num: "05", href: "#top", label: "Back to the top →" },
      shot: "Screenshot 07",
      image: shotTeam,
      of: "Team and approvals · the limits",
      captionLead: "Three of five can approve anything, together up to $575,000.00 a run.",
      caption: " · the operator’s own limit is $50,000.00, so a $61,480.00 payout sits in her queue named, badged and unapprovable.",
      size: "checkable",
    },
    closing: {
      headline: ["The chain travels.", "The desk does not."],
      lede: "Available plus committed plus reserved is arithmetic any product can borrow. Which team is being waited on, and what the screen says instead of a button, is the part you have to decide.",
    },
  },


  /* The recruitment desk. The intake was answered from the design brief before
     the standalone bundle existed; every figure below was then read back out of
     an export of the template — enums.js, fixtures.js, metrics.js and the screen
     files — and where the two disagreed the template won. What that corrected:
     /interviews and /offers
     are destinations, so the routes deliberately absent are the record routes
     under them rather than the lists; the queue's own figures are not the desk's;
     the checks card quoted against the panel record belonged to a different
     candidate; the strip draws seven steps of the nine declared values; and the
     compliance rows carry one, two or three blockers rather than two each.

     No `preview` field: the bundle is not in public/templates yet. When it lands
     it gets one, labelled "Preview interactive design", and the button appears
     without anything else here changing. Seven shots to come too, in
     public/img/products/recruitment-desk/ and numbered in the order the sections
     run; until they land every slot draws the dashed placeholder. */
  "recruitment-desk": {
    slug: "recruitment-desk",
    railRight: "Healthcare · one hiring process, seven stages",
    headline: "One process, and every clock derived from it.",
    lede: "A recruitment desk for a 4,100-person health group: nine destinations over one application record, where the stepper is the same component on the queue, the board and the record. What it settles is whether a hiring product can hold a gate without inventing a status for it.",
    meta: [
      { label: "The operator", value: "Nadia Ferreira, recruiter", note: "owns 9 of the 15 waiting" },
      { label: "The clock", value: "Three to ten days", note: "per stage, and derived" },
      { label: "Status", value: "Six fields, thirty-one values", note: "one enums file" },
      { label: "The fixture", value: "24 applications, 6 requisitions", note: "one array per entity" },
    ],
    hero: {
      shot: "Screenshot 01",
      image: shotDesk,
      of: "Your desk · full screen",
      captionLead: "The day starts on what is owed.",
      caption: " · 15 applications wait on the desk, 9 of them Nadia’s — and 5 sit over their stage’s own service level, which is three days at applied and ten at checks.",
      size: "the screen the day starts on",
    },
    preview: { href: "/templates/recruitment-desk.html", label: "Preview interactive design" },
    job: {
      railRight: "Before any of it is a screen",
      headline: "Read it, score it, prove it.",
      lede: "A recruiter carries two seats’ worth of pipeline and a hiring manager who wants a start date. The constraint that shapes every screen is the pre-employment gate: two references, a verified right to work, and the register the seat asks for still in date — or nobody starts.",
      next: { num: "01", href: "#screens", label: "The screens →" },
      steps: [
        {
          n: "01",
          title: "Read",
          body: "Three of the five at applied have never been opened. Every row is judged against its own stage’s allowance, so a day at applied is later than a week at checks.",
          note: "unread is the absence of a timestamp",
        },
        {
          n: "02",
          title: "Score",
          body: "A panel decision needs two scorecards from two different people. One card is not a decision, so the move to checks is offered, disabled, and states the count it is still waiting on.",
          note: "the average is never stored",
        },
        {
          n: "03",
          title: "Prove",
          body: "Nothing reaches offer until the checks are back. Which register a seat asks for is the requisition’s business rather than the candidate’s — so a ward clerk owes none, and the screen shows no gap.",
          note: "a check nobody owes is absent, not failed",
        },
      ],
    },
    screens: {
      railRight: "In the order the work happens",
      headline: "Nine destinations over one record.",
      lede: "Twenty-three registered routes: nine sidebar destinations, twelve off the nav and two for auth. There is no second candidate screen, and neither an interview nor an offer has a record route — an interview is a row and a dialog, and an offer is a field on the application it belongs to, read at /applications/:id and nowhere else.",
      next: { num: "02", href: "#states", label: "The status set →" },
      walk: [
        {
          n: "Screen 01",
          title: "What is waiting, and whose it is",
          body: "The queue promises a number the sidebar badge also shows, so both call one act-ability predicate over one array. The tabs narrow the list and nothing else — there are no figures above them to move. The order is how far over its own stage’s allowance a row is, and the date it arrived only breaks ties.",
          points: [
            "“Every application on the desk. 15 of them waiting on us right now.”",
            "Waiting on us 15 · Waiting on others 4 · Settled 5 · Everything 24",
            "Ordered by how far over its own stage’s allowance a row is, never by arrival",
          ],
          shot: "Screenshot 02",
          image: shotQueue2,
          of: "Applications · queue",
          route: "/applications",
          kind: "queue · filtered table",
        },
        {
          n: "Screen 02",
          title: "The application, and what the next move waits on",
          body: "One record for one person, reached from the desk, the queue, the interview ladder, the requisition board and the talent pool alike. The stepper is the spine: a completed step cites the sub-record that completed it, and a step with nothing to cite says what it is for instead of asserting a date nobody stored.",
          points: [
            "“2 scorecards of 2 · 4.38 average · 2 recommending yes” — Priya Raghunathan",
            "Checks: “0 of 2 references back · right to work verified · DBS with the service”",
            "Seven steps on the strip of nine declared values — declined and withdrawn are ends",
          ],
          shot: "Screenshot 03",
          image: shotApplication,
          of: "Application · record",
          route: "/applications/:id",
          kind: "record · stepper-led",
        },
        {
          n: "Screen 03",
          title: "What runs out first",
          body: "Two offers on the queue, ordered by expiry rather than by value: one still with the candidate and one already answered. Each row says where the salary sits in the band it came from, and names what the candidate asked for on the rows where the offer came in under it. It will not record a hire the candidate has not accepted.",
          points: [
            "£36,796 to Freya Lindsay — 85% up £31,049 – £37,796, 3 days left",
            "“Asked for £37,000” sits under the row where the offer came in under it",
            "Accepted 2 of 3 · 67% of every offer this desk has sent",
          ],
          shot: "Screenshot 04",
          image: shotOffers,
          of: "Offers · expiry queue",
          route: "/offers",
          kind: "queue · expiry-ordered",
        },
        {
          n: "Screen 04",
          title: "The three things that must be true before anybody starts",
          body: "One row per live application, three checks each, urgent first — a blocker at offer stops something, the same blocker at applied stops nothing yet. Urgency is the stage, never the number of blockers, and recession reads the same predicate the counts read, so the row with the live action on it is never greyed out.",
          points: [
            "16 with something outstanding, 3 with nothing, 1 close enough to a start date to matter",
            "“renews 14 Sept · 17 days left” against Elias Nordahl, the one row at checks with a gap",
            "Callum Beattie’s register cell: “No NMC number · This seat asks for one”",
          ],
          shot: "Screenshot 05",
          image: shotCompliance,
          of: "Compliance · pre-employment",
          route: "/compliance",
          kind: "checklist · gated",
        },
        {
          n: "Screen 05",
          title: "One seat, its pipeline and the advert that filled it",
          body: "A requisition is seats, not a hire: three community nurse seats with nine live applications and none accepted yet. It also holds which professional register the seat requires. The advert tab counts what each channel actually produced from the applications array, and names the ones that arrived another way rather than quietly folding them in.",
          points: [
            "LH-1042 — 3 seats, 9 live, 59 days open, aging past 45, NMC registration required",
            "4,546 views, 7 applications, 0.2% — best channel Careers event at 1.0%",
            "3 more arrived another way — a referral, the pool, an event",
          ],
          shot: "Screenshot 06",
          image: shotRequisition,
          of: "Requisition · pipeline and advert",
          route: "/requisitions/:id",
          kind: "board · per seat",
        },
      ],
    },
    states: {
      railRight: "A closed set, and the states deliberately outside it",
      headline: "Nine values, and four clocks that are not among them.",
      lede: "The value everybody looks for in this enum is “stalled”, and it is not there. Lateness is days in the current stage against that stage’s own allowance, computed at render from one predicate — as are unread, offer expiring, registration outstanding, aging requisition and thin pipeline. A record carries one stage and any number of derived flags.",
      next: { num: "03", href: "#hostile", label: "The awkward cases →" },
      values: [
        { name: "applied", mark: "hot2" },
        { name: "screening" },
        { name: "assessment" },
        { name: "panel" },
        { name: "checks" },
        { name: "offer" },
        { name: "hired", mark: "term" },
        { name: "declined", mark: "term" },
        { name: "withdrawn", mark: "term" },
      ],
      foot: "Nine values, three terminal, and seven of them the stepper draws. The four the desk owns are info; checks and offer are warning, out of our hands but on the clock; hired is success. Declined and withdrawn are neutral rather than danger, because a settled application is not a failure and nothing is owed on it. Six status fields, thirty-one values, one file — and the four values with no fixture row are named in the coverage note at the bottom of enums.js rather than covered by invented records.",
    },
    hostile: {
      railRight: "Three fixtures that break a screen",
      headline: "Where the gate has to hold.",
      lede: "Each of these is a record in the fixture, reachable in the running template.",
      next: { num: "04", href: "#audit", label: "The audit →" },
      cases: [
        {
          label: "Case 01",
          title: "A panel decided by one scorecard",
          naively:
            "The record is at panel, so a “Move to checks” button renders live — or renders disabled with nothing beside it, leaving the reviewer to work out which of five preconditions is in the way.",
          here: "The primary action is offered, disabled, and states the count: “2 scorecards are needed before checks start — 1 in so far.” Ruth’s card is the one in, and her note says Esme’s will decide it — she saw the second half of the panel.",
        },
        {
          label: "Case 02",
          title: "A ward clerk with no NMC number",
          naively:
            "The pre-employment gate looks like three symmetrical checks, so registration is read off the application and everybody owes one. An accepted ward-clerk offer sits on the compliance screen as a blocked hire, reading “no registration on file”.",
          here: "Whether a register is owed is a property of the seat. Damian Oyelaran’s row reads “Not required · This seat asks for no register”, and it is not counted against the badge; Callum Beattie’s, on a seat that does ask, reads “No NMC number · This seat asks for one”.",
        },
        {
          label: "Case 03",
          title: "An offer already answered, beside one still out",
          naively:
            "The accepted offer is counted as a hire, the seat shows nothing left, and the requisition claims a fill that no hire record supports.",
          here: "Acceptance is a field on the offer, not a stage. Damian Oyelaran accepted £24,071 and is still at offer, with “Record acceptance” live as the primary action; Freya Lindsay’s is disabled: “Nothing to record until the candidate accepts — the offer is with them until 31 Aug.”",
        },
      ],
    },
    audit: {
      railRight: "What the audit found",
      headline: "Two predicates where there should have been one.",
      lede: "Recession was keyed on “clear to start” while urgency was keyed on “has a blocker”, and one record satisfied both: Elias Nordahl’s HCPC registration is in date today, renewing in seventeen days. The only row the badge counted, the only one with a live action on it, was styled as work nobody can act on. “Clear to start” is now the plain negation of the three outstanding flags, and the blocker list is built behind the same guard.",
      next: { num: "05", href: "#top", label: "Back to the top →" },
      shot: "Screenshot 07",
      image: shotBadge,
      of: "Compliance · one predicate, three altitudes",
      captionLead: "Recession, the count and the badge now agree.",
      caption: " · 16 outstanding, 3 with nothing, 1 close enough to a start date to matter — and the row that carries the action is the one at the top, not greyed out.",
      size: "checkable",
    },
    closing: {
      headline: ["The process is one.", "The seats are not."],
      lede: "One hiring process from ward clerk to systems engineer, with the gate in the same place on every one. What differs is the register, the band and who sits on the panel.",
    },
  },

  /* Marketing desk. No screenshots yet and no standalone export, so every slot
     draws the dashed placeholder and there is no preview button. No audit
     section either: no second pass has been run on this product, and the one
     thing this page cannot do is report a finding that was never found. */
  "marketing-desk": {
    slug: "marketing-desk",
    railRight: "Marketing · a marketing automation desk",
    headline: "Sending is arithmetic, not a dashboard.",
    lede: "Twelve destinations over one fixture: journeys that run continuously, broadcasts that wait on an approver, the audiences both send to, and whether any of it arrives. Looking at it should settle whether generated figures can be made to reconcile across thirty-five screens.",
    meta: [
      { label: "The operator", value: "Lifecycle marketing lead", note: "admin, not the owner" },
      { label: "The clock", value: "Thirty days", note: "all the send history kept" },
      { label: "Status", value: "Four fields, sixteen values", note: "stored only, tones reasoned" },
      { label: "The data", value: "One fixture, no second copy", note: "every screen reads it" },
    ],
    hero: {
      shot: "Screenshot 01",
      image: shotOverview30,
      of: "Overview · full screen",
      captionLead: "The only screen that adds the two sources together",
      caption: " · 17,153 delivered over thirty days — 6,818 from journeys running continuously, 10,335 from five one-off sends",
      size: "the screen the day starts on",
    },
    preview: { href: "/templates/marketing-desk.html", label: "Preview interactive design" },
    job: {
      railRight: "Marketing operations",
      headline: "Automations run; sends wait on people.",
      lede: "The lifecycle lead owns journeys that send without her and broadcasts that cannot send without somebody else. Both feed one delivery number, and she is answerable for it whichever half moved.",
      next: { num: "01", href: "#screens", label: "The screens →" },
      steps: [
        {
          n: "01",
          title: "Watch",
          body: "Two of five journeys need attention, and the screen says why in the predicate’s own words — one failing to deliver for 11.6% of everyone entering it, the other live but silent for eleven days.",
          note: "entered = completed + at + failed + exited",
        },
        {
          n: "02",
          title: "Approve",
          body: "Two broadcasts sit in review and only one of them is hers to approve. One predicate answers for the row button, the section count, the nav badge and the team screen alike.",
          note: "the badge reads 1, not 2",
        },
        {
          n: "03",
          title: "Account for it",
          body: "Deliverability is not time-scoped and says so: 833 failures against 37,650 attempts, 2.2%. The table under it decomposes that by journey step and settled broadcast, worst first.",
          note: "one threshold, compared at the displayed precision",
        },
      ],
    },
    screens: {
      railRight: "Twelve destinations, three groups",
      headline: "Each screen owes the one before it an answer.",
      lede: "Thirty-seven registered routes: twelve destinations in the sidebar across three groups, nineteen off it, six for auth. Activity has no list screen — it is one feed reached from the inbox, the overview and every profile, and a thirteenth destination would push a nav group past what it can hold.",
      next: { num: "02", href: "#states", label: "The status set →" },
      walk: [
        {
          n: "Screen 01",
          title: "Where journey sending and broadcast sending are added up",
          body: "The headline claims one delivered figure for the whole workspace, so it owes the reader both halves. The day chart is that same series plotted, and the four queues below are the predicates the sidebar badges count. It averages nothing across the two sources.",
          points: [
            "3,176 over seven days — 1,731 journeys, 1,445 broadcasts, 54.5% of it continuous",
            "Straight bars, because days are being compared against each other",
            "The period offers 7, 14 and 30, because the log holds thirty days",
          ],
          shot: "Screenshot 02",
          image: shotOverview7,
          of: "Overview · seven days",
          route: "/",
          kind: "overview · chart-led",
        },
        {
          n: "Screen 02",
          title: "A journey’s ladder, and where people are standing on it",
          body: "The arithmetic closes on every step — entered on one is what continued from the one above it, and each meter’s track is that step’s own entered, so the unfilled tail is whoever is still standing there. Enrolment is the sum of those tails and nothing else.",
          points: [
            "962 entered the first step, 869 reached the end — 90.3% of them",
            "Nobody is enrolled now, because the trigger stopped matching on 14 Aug",
            "22 delivery failures, 9 of them on one step, 0.8% of every attempt",
          ],
          shot: "Screenshot 03",
          image: shotJourney,
          of: "Journey · step ladder",
          route: "/journeys/:id",
          kind: "record · list-detail",
        },
        {
          n: "Screen 03",
          title: "Approvals, split by who is being waited on",
          body: "Three queues out of one predicate: waiting on you, submitted by you, waiting on somebody else. The middle queue is where the operator is the one holding things up, and nothing is disabled to avoid deciding — a send you submitted yourself carries the reason instead.",
          points: [
            "Two broadcasts in review, one of them approvable by this viewer",
            "“Yours cannot be approved by you” — the other carries who it waits on",
            "One sends in 30 hours, to 1,284 people, and 1 of 1 counts as urgent",
          ],
          shot: "Screenshot 04",
          image: shotApprovals,
          of: "Approvals · three queues",
          route: "/approvals",
          kind: "queue · gated",
        },
        {
          n: "Screen 04",
          title: "A send report drawn as the funnel it is",
          body: "Attempted, delivered, opened, clicked — each bar measured against the top of the funnel, so the shape is the funnel, while each row also states its own rate against the row above it. A send still running reports what it has handed off, never a projection.",
          points: [
            "1,276 attempted, 1,251 delivered, 514 opened, 148 clicked",
            "Every bar against the 1,276; every rate against the line above it",
            "11.8% clicked of delivered, and 28.8% of opened — both stated, neither mixed",
          ],
          shot: "Screenshot 05",
          image: shotSend,
          of: "Broadcast · send report",
          route: "/broadcasts/:id",
          kind: "record · reconciliation",
        },
        {
          n: "Screen 05",
          title: "Three checks, across three domains",
          body: "A grid question gets a grid: SPF, DKIM and DMARC for each sending domain, and a domain counts as authenticated only when all three pass. Underneath, the failure figure decomposed by source — and the screen refuses to scope itself to a period, saying why in the lede.",
          points: [
            "833 against 37,650 attempts — 2.2%, over the one 2.0% threshold",
            "One domain of three passes all three checks; the root has failed DKIM for nine days",
            "The broadcast that died mid-send went out from that domain — 268 attempted, 106 delivered",
          ],
          shot: "Screenshot 06",
          image: shotDeliver,
          of: "Deliverability · DNS matrix",
          route: "/deliverability",
          kind: "matrix · read-only",
        },
      ],
    },
    states: {
      railRight: "A closed set with defined transitions",
      headline: "Six values, and the two everybody expects are missing.",
      lede: "Broadcast status is where a one-off send sits between written and delivered, grouped by who it is waiting on. Overdue review and partially delivered are not in it — both are computed at render from the record and the clock, and storing either would let a value disagree with the arithmetic.",
      next: { num: "03", href: "#hostile", label: "The awkward cases →" },
      values: [
        { name: "draft" },
        { name: "in_review", mark: "hot2" },
        { name: "scheduled" },
        { name: "sending" },
        { name: "sent", mark: "term" },
        { name: "failed", mark: "term" },
      ],
      foot: "Six values, two of them terminal. Draft is deliberately neutral: nobody is waiting on it but its author, so it earns no tone that would put it in a queue. Across the product, four status fields and sixteen values, each carrying the reason for its tone and at least one fixture — except a stopped journey, reachable only by taking the transition, because nothing ships stopped.",
    },
    hostile: {
      railRight: "Three fixtures that break a screen",
      headline: "The cases a generated product gets wrong.",
      lede: "All three are real records in the fixture rather than hypotheticals.",
      next: { num: "04", href: "#audit", label: "The audit →" },
      cases: [
        {
          label: "Case 01",
          title: "A send that is still going out",
          naively:
            "143 sent against 88 delivered, so 55 messages are booked as failures and the deliverability rate moves — on a send that has not finished.",
          here: "A partial send has to be settled first. Messages in flight are pending, not failed, so the send never enters the failure table at an invented rate and the 2.2% does not move when it lands.",
        },
        {
          label: "Case 02",
          title: "A review the operator cannot do herself",
          naively:
            "The badge counts both broadcasts in review, and the approve button renders live on the one she submitted — or greyed out with nothing said.",
          here: "One of them was submitted by the viewer, so the badge reads 1 and that row carries no button at all — “yours cannot be approved by you”, with the person it is waiting on shown beside it.",
        },
        {
          label: "Case 03",
          title: "A draft journey that cannot be published",
          naively:
            "Publish is live, and the journey goes out with an email step pointing at a template that has no subject line.",
          here: "One question, one answer: the publish gate and the step editor’s problem list read the same function, so the button is disabled and names the template that is not ready.",
        },
      ],
    },
    audit: {
      railRight: "What the pass found",
      headline: "Walked against the rows, and they close.",
      lede: "Every derived figure was checked against the array under it and none disagreed: 26,861 journey attempts and 10,789 broadcast sends make the 37,650 the failure rate is drawn from, every journey step sums to the number that entered it, and the approval rule resolves the same way in all four places that read it.",
      next: { num: "05", href: "#top", label: "Back to the top →" },
      shot: "Screenshot 07",
      image: shotPeople,
      of: "People · who can approve a send",
      captionLead: "Two of the six can approve a send",
      caption: " · never their own, which is why the queue badge reads 1 and not 2 — the rule is set here, and read in three other places",
      size: "checkable"
    },
    closing: {
      headline: ["The shell is reusable.", "The arithmetic is not."],
      lede: "Twelve destinations, thirty-five routes and four status fields are the easy half. What takes the time is the figure that has to agree with the rows under it on every screen that quotes it.",
    },
  },

  /* AI tool. Audited, and the audit section reports what that pass changed
     rather than claiming it found nothing. */
  "ai-tool": {
    slug: "ai-tool",
    railRight: "Software · an AI chat workspace with its own meter",
    headline: "Nothing here stores what a conversation costs.",
    lede: "A chat workspace for an eight-person team, with the context window, the cycle bill and the seat count all derived from the messages and the fixture arrays. Looking at it should settle whether an assistant product can show its own arithmetic without a single stored total.",
    meta: [
      { label: "Operator", value: "A product lead", note: "owns the workspace and the bill" },
      { label: "The clock", value: "One billing cycle", note: "1 Aug to today, derived" },
      { label: "Declared status", value: "Four vocabularies", note: "fourteen values, five fields" },
      { label: "The data", value: "Ten threads, nine files", note: "two of them unreadable" },
    ],
    hero: {
      shot: "Screenshot 01",
      image: shotNewChat,
      of: "New chat · full screen",
      captionLead: "The composer is the whole screen.",
      caption: " · 0 of 200k in context before a word is typed, and the three most-used prompts sitting under it",
      size: "the screen the day starts on",
    },
    preview: { href: "/templates/ai-tool.html", label: "Preview interactive design" },
    job: {
      railRight: "Before any of it is a screen",
      headline: "Read the answer, then pay for it.",
      lede: "A product lead runs the week’s writing, code review and research through one assistant, on a workspace allowance that resets on the first. Every turn re-reads the conversation, so a reply costs what is already in the window.",
      next: { num: "01", href: "#screens", label: "The screens →" },
      steps: [
        {
          n: "01",
          title: "Attach",
          body: "A thread carries the files it is reading, and only a file the index actually read reaches the window. One that failed or is unsupported carries nothing and is left out of the meter.",
          note: "nothing stored, counted per render",
        },
        {
          n: "02",
          title: "Send",
          body: "A turn is billed for the context that existed when it ran plus what it wrote, so the same question costs more late in a thread than early. Output bills at five times input.",
          note: "a failed turn is absent, not zero",
        },
        {
          n: "03",
          title: "Reconcile",
          body: "The usage screen, the thread’s own cost and the cycle charge are three views of one set of turns. Nothing writes a total — sending a message moves all three at once.",
          note: "one array, three screens, no cache",
        },
      ],
    },
    screens: {
      railRight: "In the order the work happens",
      headline: "Five screens, one set of turns.",
      lede: "Twenty-one registered routes: six sidebar destinations, six off it, four settings and five auth. There is deliberately no list screen for turns — a turn is only ever reached through the thread that holds it.",
      next: { num: "02", href: "#states", label: "The status set →" },
      walk: [
        {
          n: "Screen 01",
          title: "The conversation, with what it is reading beside it",
          body: "The thread owes an answer for how full the window is and what the reply was based on. It shows the cited files under each turn, and refuses to imply a file is in context when the index could not read it.",
          points: [
            "23k of 200k, counting six messages and two indexed files",
            "The files cited are named under the turn that cited them",
            "Three billed turns and $0.22, stated on the thread itself",
          ],
          shot: "Screenshot 02",
          image: shotThread,
          of: "Thread · conversation and context rail",
          route: "/chats/:id",
          kind: "record · reconciliation",
        },
        {
          n: "Screen 02",
          title: "Files, and the two the index could not read",
          body: "The index is the honest part of an assistant product. Every row says whether the model can read the file, and a row that cannot carries the reason and the one move that helps. Nothing falls back to a zero token count.",
          points: [
            "“2 of 9 files could not be read”, in the screen’s own lede",
            "Six readable files carrying 77k tokens between them",
            "The failed row offers Reindex; the archive is told to be unpacked instead",
          ],
          shot: "Screenshot 03",
          image: shotFiles,
          of: "Files · index status",
          route: "/files",
          kind: "table · act-ability",
        },
        {
          n: "Screen 03",
          title: "What the week’s turns actually cost",
          body: "The day chart, the model table and the person table are the same fourteen turns grouped three ways, so no two of them can disagree. It declines to chart a day with no turn on it as a zero.",
          points: [
            "218k tokens, $0.35, 14 billed turns across 9 threads",
            "218k of the 1.2M included in the plan — 18%",
            "8 of the 25 days had a turn on them, and the bars are those same 14",
          ],
          shot: "Screenshot 04",
          image: shotUsage,
          of: "Usage · this cycle",
          route: "/usage",
          kind: "figures · derived",
        },
        {
          n: "Screen 04",
          title: "Seats, and the difference between paying and using",
          body: "A seat is held by a person or by an invite still standing, so the figure is people plus unexpired invites and never a stored count. A dormant member is recessed with the reason rather than disabled or hidden.",
          points: [
            "10 of 10 seats used — eight people and two invites still standing",
            "One expired invite, holding no seat",
            "“Not in 71 days, still holding a seat” on the dormant row",
          ],
          shot: "Screenshot 05",
          image: shotSeats,
          of: "Workspace · people and invites",
          route: "/settings/workspace",
          kind: "table · capacity",
        },
        {
          n: "Screen 05",
          title: "The bill, including the one that did not go through",
          body: "The current cycle has never been invoiced, so it is derived from the same turns the usage screen charts. The failed invoice is not a badge on its own — it carries the reason it failed and the thing that fixes it.",
          points: [
            "$240.00 this cycle — ten seats at $24.00, nothing over the allowance yet",
            "One invoice unpaid: $251.80, for the month before",
            "A $400.00 spend cap, 60% used, seats included",
          ],
          shot: "Screenshot 06",
          image: shotBilling,
          of: "Plan and billing · cycle and invoices",
          route: "/settings/billing",
          kind: "record · money",
        },
      ],
    },
    states: {
      railRight: "A closed set with defined transitions",
      headline: "Three of the four things you would look for are missing.",
      lede: "Four vocabularies over five fields, and none of them holds what an assistant product is expected to store: whether a thread is near its context limit, whether a prompt has gone stale, whether an invite still holds a seat, whether a card has expired. All four are computed at render.",
      next: { num: "03", href: "#hostile", label: "The awkward cases →" },
      values: [
        { name: "indexing" },
        { name: "ready", mark: "term" },
        { name: "failed", mark: "hot2" },
        { name: "unsupported", mark: "term" },
      ],
      foot: "Failed is the one where the operator is being waited on, so it is the one that offers Reindex. Unsupported is terminal because nothing in the product can read an archive — the way out is a person converting the file. Fourteen values over four vocabularies and five fields, six of them terminal, and visibility is a single vocabulary shared by threads and projects because it means the same thing on each. Void on an invoice is deliberately neutral: it was withdrawn before it was ever charged, which is why it is excluded from every total that claims to be money.",
    },
    hostile: {
      railRight: "Three records that break a screen",
      headline: "The fixtures were written to be difficult.",
      lede: "Each of these is a real record in the fixture, and each one is the reason a figure on some other screen is derived rather than stored.",
      next: { num: "04", href: "#audit", label: "The audit →" },
      cases: [
        {
          label: "Case 01",
          title: "A turn that produced nothing",
          naively:
            "The turn renders as an empty bubble or an em dash, and the usage total counts it anyway — a row in the table with no tokens and a cost of $0.00.",
          here: "One thread holds a turn that failed after 41 seconds. It is not billed and not counted: fourteen billed turns, not fifteen. The turn says what happened and offers Retry, and nothing else on the screen moves.",
        },
        {
          label: "Case 02",
          title: "A 24.8 MB archive attached to a thread",
          naively:
            "The file joins the attachment list and quietly contributes to a context figure claiming the model has read twelve interviews it has never seen.",
          here: "It reads Unsupported, contributes nothing to the 23k window figure, and its Reindex is disabled: “Archives are not read. Unpack it and upload the transcripts.” The project card says two the index could not read.",
        },
        {
          label: "Case 03",
          title: "An invoice charged to a card that expired",
          naively:
            "The invoice shows Payment failed with a Retry that appears to work, or the card section shows an expiry date and nothing else.",
          here: "$251.80, failed against a card that expired on 31 July. The card block says nothing can be charged until it is replaced, the retry included — and replacing the card retries that invoice rather than leaving it stranded.",
        },
      ],
    },
    audit: {
      railRight: "What the pass found",
      headline: "The arithmetic held; the chrome did not.",
      lede: "Every derived figure was walked against the array under it and none disagreed — fourteen billed turns reconcile across the usage table, the person table and the cycle charge, and ten of ten seats reconciles with eight people and two standing invites. What the pass changed was interface: the composer carried a duplicated focus treatment, and the brand mark was sized by an inline style on one screen and by a rule everywhere else.",
      next: { num: "05", href: "#top", label: "Back to the top →" },
      shot: "Screenshot 07",
      image: shotShared,
      of: "Shared with me · a count that agrees three screens away",
      captionLead: "Two the index could not read",
      caption: " · the same two the files screen names, counted again on a project card three screens from it",
      size: "checkable",
    },
    closing: {
      headline: ["The meter is portable.", "The domain is not."],
      lede: "Threads, files and seats are this template’s nouns, but the rule underneath travels: if a screen shows a total, the array that makes it is on the same page.",
    },
  },
  /* Ward desk. Read out of templates/hospital-desk/ at the fixture’s frozen
     clock — Tuesday 17 March 2026, 09:20 — so every figure below is quoted as
     the screen renders it: money is pence in the fixture and sterling here,
     because that is what a reader would see.

     Every figure was re-read against the seven shots when they landed, and
     where the intake and the screen disagreed the screen won. That corrected
     four things. The ward board carries five wards, not four — Hollis was
     missing from the intake. The invoice in frame is HG-2026-0342 at £4,060.00,
     not the HG-2026-0318 the intake quoted, which is a row on the
     credit-control shot instead. The intervention in frame is the one in
     theatre, with consent recorded at 06:20, so the consent gate is argued from
     the Today tile that counts it rather than claimed over a shot that does not
     show it. And Contracts states 21 contracted prices of 60 possible pairs
     with 2 lines off contract worth £710, where the intake said 15 items and
     named no total.

     01 and 02 are the same frame — Today, once for the hero and once for the
     walk — which is how the export delivered them.

     Four things the audit listed as not re-verified — the six report rates and
     their drill-through targets, the cost model on /margin, the role matrix,
     and the import review’s effect on its job counts — are deliberately absent
     from this page. Nothing here rests on them. */
  "ward-desk": {
    slug: "ward-desk",
    railRight: "Healthcare · running one hospital",
    headline: "Clinical records are the invoice’s only source.",
    lede: "Twenty destinations across care, pharmacy, finance, business, people and the workspace, joined by one rule: an invoice line names the procedure, the bed days or the medication course it bills. Looking at it should settle whether operations and revenue can sit in one product without either lying about the other.",
    meta: [
      { label: "Operator", value: "Ward manager or clinician", note: "the role decides what exists" },
      { label: "The clock", value: "09:20, mid-handover", note: "bed waits and dose clocks run live" },
      { label: "Status", value: "Ten fields, 49 values", note: "overdue and expiring in none of them" },
      { label: "Money", value: "Pence, nothing summed stored", note: "totals are the sum of their lines" },
    ],
    hero: {
      shot: "Screenshot 01",
      image: shotToday,
      of: "Today · full screen",
      captionLead: "The hospital at handover",
      caption: " · two waiting for a bed, one of them past four hours, and one of the four in theatre today without consent recorded",
      size: "the screen the shift starts on",
    },
    preview: { href: "/templates/hospital-desk.html", label: "Preview interactive design" },
    job: {
      railRight: "Healthcare · before any of it is a screen",
      headline: "The bed is the constraint, and the invoice is the consequence.",
      lede: "The operator is a ward manager at handover and a finance officer three weeks later, looking at the same records. The constraint is that a bed cannot be created — every admission waiting is somebody in a corridor — and everything billed afterwards has to reconcile to what the ward actually did.",
      next: { num: "01", href: "#screens", label: "The screens →" },
      steps: [
        {
          n: "01",
          title: "Admit",
          body: "Two patients are waiting on a bed, and each clock started when ED requested it rather than when somebody typed a status. A bed is not a route: it is a pip on its ward’s card.",
          note: "the bed count is a setting, and it divides",
        },
        {
          n: "02",
          title: "Treat",
          body: "The theatre list is a timed ladder rather than a table, because the question is what happens next and what is late. A procedure will not start without consent on the record.",
          note: "consent gates the transition, not the button",
        },
        {
          n: "03",
          title: "Recover",
          body: "Coding turns an episode into lines, each naming the care it bills. Only cleared money moves a balance, terms come from the payer’s own contract, and a disputed invoice is never chased.",
          note: "pending money is not paid money",
        },
      ],
    },
    screens: {
      railRight: "Healthcare · five of the twenty",
      headline: "One record, read by the ward and then by finance.",
      lede: "Forty registered routes: twenty destinations over six rail categories, six records, the profile, seven under settings and six for auth. There is deliberately no /admissions/:id and no bed record — an admission is one row on the ward board, and a bed is only ever reached through its ward.",
      next: { num: "02", href: "#states", label: "The status set →" },
      walk: [
        {
          n: "Screen 01",
          title: "What is waiting on somebody, before anything else",
          body: "A figure row, the ward board, then the lists of work owed to a person: bed waits, held discharges, the theatre list and notes owed a reply. It refuses an occupancy percentage without the bed count that divides it, and refuses to sum unlike work into one attention number.",
          points: [
            "“Waiting for a bed 2 — 1 of them past four hours”, the oldest requested at 04:20",
            "One pip per bed against each ward’s own establishment: Beaumont 6, Linden 4, Corvid 4, Aster 3, Hollis 4",
            "“Fit for discharge, still here (2)” — Ivy Trethewey, 30 hours over, day 6 of an expected 5",
          ],
          shot: "Screenshot 02",
          image: shotBoard,
          of: "Today · board and the lists",
          route: "/",
          kind: "board · read-first",
        },
        {
          n: "Screen 02",
          title: "The procedure record, and the transitions it will offer",
          body: "The list this came from is a timed ladder rather than a table, because the question is what is next and what is late. The record carries the clock and the gate: what it is over by, and which transitions exist at all.",
          points: [
            "“In theatre” — central line insertion, Theatre 3, started 08:20 and an hour over",
            "Consent recorded 06:20 on this one; one of the four in theatre today has none",
            "“Record as abandoned” is danger and cancelled is neutral — one started and could not be finished",
          ],
          shot: "Screenshot 03",
          image: shotTheatre,
          of: "Intervention · in theatre",
          route: "/interventions/:id",
          kind: "record · gated",
        },
        {
          n: "Screen 03",
          title: "Courses grouped by where their dose clock has got to",
          body: "The drug round is not a list of prescriptions; it is what is overdue, what is due this hour and what is later today, derived from each course’s own frequency against the clock. Recording a dose moves the next one by the interval that frequency states.",
          points: [
            "Overdue 1, due within the hour 1, later today 4 — one array, cut by the clock",
            "“Awaiting a pharmacist 3 — not on the round until they are verified”",
            "Eluned Pryce’s 07:20 paracetamol, two hours over, last given 01:20",
          ],
          shot: "Screenshot 04",
          image: shotRound,
          of: "Drug round · by dose clock",
          route: "/rounds",
          kind: "queue · time-ordered",
        },
        {
          n: "Screen 04",
          title: "An invoice whose every line names the care it bills",
          body: "One invoice per episode. Each line points at the intervention, the admission or the medication course behind it, and the contracted price is looked up at render — so a line billed off contract is a finding on three screens at once. The total is the sum of the lines, and nothing summable is stored.",
          points: [
            "HG-2026-0342 — two lines, £4,060.00 invoiced, £0 cleared, balance £4,060.00",
            "Six surgical bed days at £480.00 and one debridement at £1,180.00, both at contract",
            "Due 15 Apr, 29 days left — the commissioner’s own 30-day terms, not a default",
          ],
          shot: "Screenshot 05",
          image: shotInvoice,
          of: "Invoice · lines and payments",
          route: "/invoices/:id",
          kind: "record · reconciliation",
        },
        {
          n: "Screen 05",
          title: "The chase list, and the invoice it will not chase",
          body: "Balance, terms, last contact and the step the ladder says comes next. Overdue is not a stored status — it is a due date in the past with a balance outstanding — so an invoice arrives on this screen without anybody moving it. A disputed invoice is never chased.",
          points: [
            "£9,790 chaseable across 4 invoices, and the 1 disputed invoice is not among them",
            "HG-2026-0347 — £1,440.00 returned by the sending bank, and the patient written to",
            "£600.00 promised by the private insurer moves nothing until it clears",
          ],
          shot: "Screenshot 06",
          image: shotChase,
          of: "Credit control · the worklist",
          route: "/credit-control",
          kind: "worklist · derived",
        },
      ],
    },
    states: {
      railRight: "A closed set with defined transitions",
      headline: "Where an invoice has got to is stored. Whether it is late is not.",
      lede: "The value nobody finds in this enum is “overdue”: it is a due date in the past with a balance outstanding, computed at render, so an invoice becomes overdue on its own and the credit-control worklist, the aged-debt buckets and the nav badge all read one predicate. “Expiring” is absent from the contract set for the same reason — an end date inside the next thirty days.",
      next: { num: "03", href: "#hostile", label: "The awkward cases →" },
      values: [
        { name: "draft" },
        { name: "awaiting_coding", mark: "hot2" },
        { name: "issued" },
        { name: "part_paid" },
        { name: "paid", mark: "term" },
        { name: "disputed" },
        { name: "written_off", mark: "term" },
      ],
      foot: "Seven values, two terminal, and written_off is deliberately neutral rather than a failure: writing a balance off is a decision somebody took under a threshold Settings owns, not money that went missing. Disputed sits outside the payment path because it is the payer’s answer, not a stage of collection. Ten fields carry 49 values in all — patient, admission, intervention, medication, stock, staff, invoice, payment, transfer and contract.",
    },
    hostile: {
      railRight: "Healthcare · three fixtures that break a screen",
      headline: "The fixture set was written to make screens fail.",
      lede: "All three are records in the fixture rather than hypotheticals, and each one is why a figure on some other screen is derived rather than stored.",
      next: { num: "04", href: "#audit", label: "The audit →" },
      cases: [
        {
          label: "Case 01",
          title: "A payment the bank sent back",
          naively:
            "The payment row exists for the full amount, so the balance renders £0.00 and the invoice moves to paid. The chase list drops it, and nobody looks at it again.",
          here: "HG-2026-0347 carries a failed bank transfer of £1,440.00 against £1,440.00 of lines, and the balance still reads £1,440.00 — only cleared payments are paid money. The chase ladder records a letter to the address on the record sixteen hours later.",
        },
        {
          label: "Case 02",
          title: "A procedure whose consent is not on the record",
          naively:
            "“Start in theatre” renders, disabled, with a tooltip — or worse, it renders enabled and the consent field is left for somebody to notice afterwards.",
          here: "The transition does not exist. interventionTransitions builds the set from the record, so with consent absent there is no start action to press — and the record says why, in the sentence the note thread is already arguing about: she is second on the day-case list.",
        },
        {
          label: "Case 03",
          title: "An invoice the payer has formally queried",
          naively:
            "It is past its due date with a balance, so it appears on the chase list between two ordinary reminders and gets a statement sent.",
          here: "HG-2026-0309 is disputed — 11 bed days against a 9-day expected stay — and credit control excludes it by predicate, not by somebody remembering. It still counts in outstanding, because the money is still owed; it just is not chased.",
        },
      ],
    },
    audit: {
      railRight: "Healthcare · audited",
      headline: "The contract lookup had to become the join.",
      lede: "The contracted price for an invoice line lived in two places — once on the tariff item, once implied by the line’s own unit price — with nothing checking that they agreed, so a line billed off contract was invisible unless somebody compared them by eye. The tariff item’s label is now the line’s label, the price is looked up at render, and a line that disagrees is a finding on the invoice record, on Contracts and in the palette at once. Issuing an invoice takes its due date from the payer’s contracted terms rather than a default.",
      next: { num: "05", href: "#top", label: "Back to the top →" },
      shot: "Screenshot 07",
      image: shotTariff,
      of: "Contracts · lines billed off contract",
      captionLead: "One price, looked up",
      caption: " · 21 contracted prices over 4 payer contracts, of 60 possible pairs — and the 2 lines that disagree, worth £710, named",
      size: "traced",
    },
    closing: {
      headline: ["One record, both jobs.", "Most products split it."],
      lede: "The ward writes the facts and finance bills them months later. If a figure cannot be walked back to the bed day that produced it, it is not a figure — it is a guess with a currency symbol.",
    },
  },

  /* Hearth. Read out of templates/home-desk/ at the fixture’s frozen clock,
     Tuesday 6 October 2026, so every figure below is quoted as the screen
     renders it.

     The clock is 20:10, not the 19:10 the intake gave: the drive camera’s live
     overlay reads 6 Oct 2026, 20:10, and Energy has the off-peak window opening
     in 4h 20m against a window that opens at 00:30. Two more corrections came
     out of the shots. Today does sum seven things wanting a person and then
     names the parts — 2 devices, 2 requests, 3 jobs — so the page argues that
     rather than claiming nothing is ever summed. And 1.46 kW is the whole
     house: Rooms states it as 9 of 10 rooms with something on, Devices as 25 of
     33 on now.

     Screen 05 is Energy rather than Bills. No Bills shot was cut, and the
     Energy frame carries the argument better anyway — Bills is the register it
     opens, and the button for it is in the shot. The devices frame is used
     twice, once for the screen and once for the audit, because the shot that
     shows the hub and the test is the shot that shows the test having run. Two
     People frames (02 and 07) are the same screen and no slot uses them.

     The three things the audit left alone on purpose are not claimed here as
     findings: no pagination at 34 devices, no video behind the camera plate,
     and a first-floor window open after dark scoring as ventilation rather than
     a breach. The last of those is the argument job step 01 makes. */
  "hearth": {
    slug: "hearth",
    railRight: "Residence · running one house",
    headline: "The house is a set of derivations, not a dashboard.",
    lede: "Ten destinations over a household of five, where the temperature the house is holding, whether it counts as shut, and whether a filter is due are all worked out at render. Looking at it should settle whether a domestic product can be built on rules instead of switches.",
    meta: [
      { label: "Operator", value: "Whoever is home", note: "five people, one signed in" },
      { label: "The clock", value: "20:10, dark since 18:20", note: "an unlocked door reads differently" },
      { label: "Status", value: "Eleven fields, 47 values", note: "overdue and insecure in none of them" },
      { label: "Data", value: "34 devices, one link each", note: "signal, latency, firmware, last asked" },
    ],
    hero: {
      shot: "Screenshot 01",
      image: shotHouse,
      of: "Today · full screen",
      captionLead: "The house in one card",
      caption: " · 2 ways in are not secure, and the house is holding 20.5° because Sofia is home and awake",
      size: "the screen the day starts on",
    },
    preview: { href: "/templates/home-desk.html", label: "Preview interactive design" },
    job: {
      railRight: "Residence · before any of it is a screen",
      headline: "Nobody is on duty, so the house has to be.",
      lede: "The operator is a parent with a coat on. The constraint is that no state in a house is stable for more than an hour — people arrive, go to bed, open windows — so any figure the product stores goes stale between one glance and the next.",
      next: { num: "01", href: "#screens", label: "The screens →" },
      steps: [
        {
          n: "01",
          title: "Read",
          body: "The house states one verdict before it states anything else. An entry is scored insecure against the alarm and the clock: a window open at four is ventilation, and the same window armed away is why the alarm exists.",
          note: "the dark hour is a setting, not a constant",
        },
        {
          n: "02",
          title: "Control",
          body: "Rooms and cameras are the control surface: a switch means it applied, a shutter means recording stopped. A move applies at once and offers the way back — only removing a device or calling the response company asks first.",
          note: "a child sees the reason, not a grey button",
        },
        {
          n: "03",
          title: "Keep",
          body: "The kit and the building rot on their own schedules. A consumable’s due date is the hours its machine has actually run, and a device becomes a problem the moment its radio reading changes.",
          note: "the machine’s hours are the due date",
        },
      ],
    },
    screens: {
      railRight: "Residence · five of the ten",
      headline: "Each screen owes an answer the last one raised.",
      lede: "Thirty registered routes: ten sidebar destinations over two groups, four registers reached from their parent, four records, the profile, seven under settings and six for auth. There is deliberately no /rooms/:id and no /cameras/:id — Rooms holds every room at once, and a camera has no fact a card cannot carry.",
      next: { num: "02", href: "#states", label: "The status set →" },
      walk: [
        {
          n: "Screen 01",
          title: "The house in one card, before anything is a list",
          body: "Today owes an answer for one question — can the house be left alone — and answers it in a sentence, with a dotted badge carrying the attention level. Nothing is summed without its parts being named underneath, and every count says which array it filtered.",
          points: [
            "“2 ways in are not secure” — the back door closed but unlocked, Milo’s window sensor offline",
            "Holding 20.5° downstairs — the warmest preference among the three people home and awake",
            "“Wants a person 7 — 2 devices, 2 requests, 3 jobs past their date”",
          ],
          shot: "Screenshot 01",
          image: shotHouse,
          of: "Today · verdict and the household",
          route: "/",
          kind: "verdict · read-first",
        },
        {
          n: "Screen 02",
          title: "Every room and its controls at once",
          body: "The room card is the remote control: a switch per device, the zone’s reported temperature, who is in there, and what is insecure. It refuses to be a directory — there is no room record to open, because a room has nothing a card cannot carry.",
          points: [
            "“9 of 10 rooms have something on, drawing 1.46 kW between them”",
            "“Everything off downstairs” acts on the lit lights it can name, and on nothing else",
            "“Porch camera · Updating — nothing to do”, recessed rather than greyed out",
          ],
          shot: "Screenshot 03",
          image: shotRooms,
          of: "Rooms · live controls",
          route: "/rooms",
          kind: "canvas · control",
        },
        {
          n: "Screen 03",
          title: "The live view first, and the shutters as a household decision",
          body: "One focused camera at 16:9 with its controls, the others as tiles you pick, the clips, and the shutters. Watching is three facts at once — online, set to record, shutter open — so a closed shutter reads as a decision somebody made.",
          points: [
            "“1 of 4 cameras watching” — porch updating, gate never set up, back garden shuttered on purpose",
            "6 clips today of 7 kept, the newest 19:48, deleted after 14 days",
            "Record, talk, floodlight, shutter — the controls are real, and the plate names what the camera is pointed at",
          ],
          shot: "Screenshot 04",
          image: shotCameras,
          of: "Cameras · live view and clips",
          route: "/cameras",
          kind: "live view · role-gated",
        },
        {
          n: "Screen 04",
          title: "The screen you open when the kit is wrong",
          body: "Not a register. The hub’s verdict and a connection test, what the hub can hear but has not taken in, what wants a person, then the whole list last. It refuses to fail a device that cannot be asked anything: updating and never-set-up devices are left out and named.",
          points: [
            "“Milo’s window sensor is not answering” — last heard Mon 13:10, the only failure of 33",
            "“Hearth hub, utility · channel 11 · firmware 5.2.0 · 5.2.2 available”, 33ms to answer on average",
            "5 under −70 dBm, 11 on battery with 1 of them flat, 6 behind on firmware",
          ],
          shot: "Screenshot 05",
          image: shotKit,
          of: "Devices · the hub and the test",
          route: "/devices",
          kind: "verdict · diagnostic",
        },
        {
          n: "Screen 05",
          title: "What the house buys, and when it is cheap",
          body: "Electricity, the tariff it is bought on, the battery and the water, over a period the reader picks. Bills sit under this screen because a bill is what a reading turns into. What the battery ought to be doing is worked out from the tariff and its charge rather than stored.",
          points: [
            "649.0 kWh over 14 days — 46.5 a day across the 13 complete ones, with today still running",
            "£131 at 8.4p off-peak and 24.8p otherwise, plus 62p a day standing charge",
            "The battery at 34%, holding until the off-peak window opens in 4h 20m",
          ],
          shot: "Screenshot 06",
          image: shotEnergy,
          of: "Energy · the tariff and the battery",
          route: "/energy",
          kind: "figures · derived",
        },
      ],
    },
    states: {
      railRight: "A closed set with defined transitions",
      headline: "Whether the house can rely on a device is stored. Everything else is worked out.",
      lede: "The value nobody finds in this enum is the one every device list seems to need: there is no low battery and no needs attention. Both are derived at render — the level against the household’s own threshold, and “wanting a person” from one predicate over offline, never set up and flat, which the nav badge, the tab count and the row all read.",
      next: { num: "03", href: "#hostile", label: "The awkward cases →" },
      values: [
        { name: "setup_pending", mark: "hot2" },
        { name: "online" },
        { name: "offline" },
        { name: "updating" },
        { name: "retired", mark: "term" },
      ],
      foot: "Five values, one terminal, and updating is deliberately neutral rather than a warning: nothing is wrong, nothing can be asked of it, and the row recesses instead of going grey and disabled. Eleven fields carry 47 values in all — device, zone, alarm, entry, job, bill, access, member, routine, request and the connection test’s own result. Overdue, insecure, broken, expiring and above forecast appear in none of them.",
    },
    hostile: {
      railRight: "Residence · three fixtures that break a screen",
      headline: "The fixture set was written to make screens fail.",
      lede: "None of these is hypothetical. Each one is a record in the fixture, and each one is why a figure two screens away is worked out at render rather than written down.",
      next: { num: "04", href: "#audit", label: "The audit →" },
      cases: [
        {
          label: "Case 01",
          title: "A filter that is late by hours, not by months",
          naively:
            "The job carries a date somebody typed at install. It renders as due in three weeks, because nothing on the screen has ever asked the machine how long it ran.",
          here: "3,980 hours run of 3,600 — 380 past the change interval, read off the ventilation unit’s own counter. The job is overdue with nothing written on it, and marking it done resets the machine’s hours, which is what actually clears it.",
        },
        {
          label: "Case 02",
          title: "A camera that cannot be asked anything",
          naively:
            "The connection test asks all 33 devices, records no answer for the three that cannot reply, and the headline reads “3 devices are not answering” while the figure beside it says 2 want a person.",
          here: "Only an offline device can fail. The porch camera is updating and the gate camera has never been set up, so both are left out of the run and named in the toast — the verdict stays at “Milo’s window sensor is not answering”, and reconciles with the figure under it.",
        },
        {
          label: "Case 03",
          title: "A routine naming a device that left the house",
          naively:
            "“Garage light on entry” still shows as on, having last run nine days ago, and nothing on the screen explains why it stopped doing anything.",
          here: "Broken is derived from whether the devices a routine names are still in the house. Switching the garage strip light out broke it with nothing written on the routine, and the count moved by itself. Broken is stated at full weight, never recessed — a broken routine means the house is quietly not doing something.",
        },
      ],
    },
    audit: {
      railRight: "Residence · audited",
      headline: "Two screens disagreed about the same two cameras.",
      lede: "The connection test treated any device that was not online as a failure, so running it moved the headline to “3 devices are not answering” while the figure beneath it still read 2 — and the cameras screen described those same two devices as updating and never set up. resultFor now fails only an offline device and leaves the rest out of the run. The pass also found the failure sentence attributing one device’s timestamp to all three, and pairing that wrote a device but no camera record, so anything paired as a camera was invisible to every camera count in the product.",
      next: { num: "05", href: "#top", label: "Back to the top →" },
      shot: "Screenshot 05",
      image: shotKit,
      of: "Devices · after the test",
      captionLead: "One failure, and it reconciles",
      caption: " · 33 on the network asked, 2 left out of the run and named, and the figure beneath still reads 2",
      size: "checkable",
    },
    closing: {
      headline: ["The rules travel.", "A house is hardest."],
      lede: "No shift handover, no audit trail anybody is paid to keep, and an operator with a coat on. If the derivations hold here they hold in a warehouse.",
    },
  },
};
