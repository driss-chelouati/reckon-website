/* The worked-product pages. cargo-claims is the first and only one written; the
   nine other products in lib/products.ts are listed in the menu and the index
   but do not have a page yet, and nothing here is scaffolded for them.

   Every string on the page is a field. Adding the next product means adding a
   record, not a JSX file. Every screenshot slot takes an optional `image`;
   cargo-claims has all six, and a slot without one draws the dashed placeholder
   instead.

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
      render — a product can have a page before it has a template, and the nine
      still to come will.

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
  audit: {
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
          body: "Free to pitch, coming free inside thirty days, booked — three figures over nine creators. Availability is counted against today here, and against the brand’s own window on a brief, so somebody booked until October is free for a campaign that starts in November.",
          note: "the same word, two clocks",
        },
        {
          n: "02",
          title: "Book",
          body: "A pitched brief becomes a deal, and the deal brings its deliverables, its invoice and its payout with it. The contract walks a declared line — drafted, out for signature, signed — with the date it reached each one.",
          note: "book the deal, not create deal",
        },
        {
          n: "03",
          title: "Collect",
          body: "$119,000.00 owed by brands against $142,160.00 owed to creators, and the commission banks when the money clears rather than when the deal is signed. $30,340.00 of it is still sitting on invoices nobody has paid.",
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
      headline: ["The rules are industry-agnostic.", "The product is not."],
      lede: "The distance between the two is the design work. Derive every number, declare how every entity commits, and refuse the creates that do not exist in the business.",
    },
  },
};
