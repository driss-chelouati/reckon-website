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
  states: {
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
};
