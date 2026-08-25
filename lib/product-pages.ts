/* The worked-product pages. cargo-claims is the first and only one written; the
   nine other products in lib/products.ts are listed in the menu and the index
   but do not have a page yet, and nothing here is scaffolded for them.

   Every string on the page is a field, because this copy is placeholder and
   will be rewritten. Adding the next product means adding a record, not a JSX
   file. The screenshot slots take a real <img> drop-in later. */

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
  hero: { shot: string; of: string; caption: string; captionLead: string; size: string };
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
      { label: "The clock", value: "One year", note: "from delivery, cannot be extended" },
      { label: "Status values", value: "Closed set", note: "defined transitions, no additions" },
      { label: "Data", value: "Deliberately hostile", note: "the week-one cases" },
    ],
    hero: {
      shot: "Screenshot 01",
      of: "Work queue · full screen",
      captionLead: "Work queue",
      caption: " · the screen the day starts on",
      size: "1440 × 900",
    },
    job: {
      railRight: "Before any of it is a screen",
      headline: "Somebody is deciding what you owe.",
      lede: "Cargo arrives damaged, a customer files, and an adjuster has a year to investigate, decide and pay. Every screen in this product exists because that job needed it.",
      next: { num: "01", href: "#screens", label: "The screens →" },
      steps: [
        {
          n: "01",
          title: "Investigate",
          body: "Evidence, survey reports and delivery receipts — some mandatory before a decision is permitted at all.",
          note: "evidence gates the decision",
        },
        {
          n: "02",
          title: "Decide",
          body: "Approve, part-approve or reject, against a liability cap that the bill of lading imposes.",
          note: "the cap is derived, never typed",
        },
        {
          n: "03",
          title: "Recover",
          body: "Once paid, pursue whoever caused it — the terminal, the trucker, the packer — on a separate clock.",
          note: "its own deadlines, its own set",
        },
      ],
    },
    screens: {
      railRight: "In the order the work happens",
      headline: "Each one answers a question the last one raised.",
      lede: "Routes exist. Breadcrumbs land. Nothing here is a dead end drawn to fill a slot in a sitemap.",
      next: { num: "02", href: "#states", label: "The status set →" },
      walk: [
        {
          n: "Screen 01",
          title: "The queue, sorted by what is burning down",
          body: "Every claim carries a filing deadline that cannot be extended. The queue leads on the ones closest to it, and separates what you can act on from what is waiting on somebody else.",
          points: [
            "Ready, blocked, held and time-barred as distinct groups",
            "Counts derived from the rows beneath them",
            "Blocked records offer what unblocks them",
          ],
          shot: "Screenshot 02",
          of: "Work queue",
          route: "/queue",
          kind: "list · grouped",
        },
        {
          n: "Screen 02",
          title: "The claim, and what it is actually worth",
          body: "Claimed against assessed, with every adjustment traceable: depreciation, salvage, deductible, and the liability cap. If the assessment exceeds the cap, the payout is the cap — and nobody works that out on a calculator.",
          points: [
            "Each figure names the data behind it",
            "The cap is applied and flagged, not silently swallowed",
          ],
          shot: "Screenshot 03",
          of: "Claim detail",
          route: "/claims/:id",
          kind: "record",
        },
        {
          n: "Screen 03",
          title: "Evidence, and the decision it permits",
          body: "Photographs, the surveyor’s report, the packing list, the commercial invoice. Some are mandatory, and until they are in, the decision surface is not offered at all.",
          points: [
            "Received, missing and rejected as separate states",
            "Above a threshold, a manager’s sign-off is required",
          ],
          shot: "Screenshot 04",
          of: "Evidence & decision",
          route: "/claims/:id/decision",
          kind: "decision surface",
        },
        {
          n: "Screen 04",
          title: "Recovery, which is the same job in reverse",
          body: "Once the customer is paid, the line pursues whoever caused the damage. Separate claims, separate contractual deadlines, and a recovery rate the managers care about more than almost anything.",
          points: [
            "Mirror ledger: what the claim cost, what came back",
            "Nothing recovered is a state, not an empty table",
          ],
          shot: "Screenshot 05",
          of: "Recovery detail",
          route: "/recovery/:id",
          kind: "record",
        },
      ],
    },
    states: {
      railRight: "A closed set with defined transitions",
      headline: "Status is data. Overdue is not.",
      lede: "Every value a claim can hold, declared once. Time-barred is computed from the delivery date, never stored — and nothing new is added to this set on the model’s own judgement.",
      next: { num: "03", href: "#hostile", label: "The awkward cases →" },
      values: [
        { name: "awaiting_documents" },
        { name: "awaiting_survey" },
        { name: "ready_for_decision", mark: "hot2" },
        { name: "escalated_to_legal" },
        { name: "approved_unpaid" },
        { name: "payment_scheduled" },
        { name: "paid", mark: "term" },
        { name: "rejected", mark: "term" },
        { name: "time_barred", mark: "term" },
      ],
      foot: "Nine values, three of them terminal. Time-barred is derived from the delivery date and the filing window — it is a computation, and it is never written to the record.",
    },
    hostile: {
      railRight: "What a client finds in week one",
      headline: "The fixtures are deliberately unkind.",
      lede: "Demo data arranged to look good proves nothing. These are the records that break a screen, and they were in the set from the first pass.",
      next: { num: "04", href: "#audit", label: "The audit →" },
      cases: [
        {
          label: "Case 01",
          title: "A claim time-barred before you open it",
          naively:
            "It sits in the queue looking actionable, with a Decide button and a deadline rendered as a positive number of days.",
          here: "Eleven days over. It leaves the ready count, the action becomes unavailable, and the reason is stated on the row.",
        },
        {
          label: "Case 02",
          title: "A claim escalated to legal",
          naively:
            "Offered the same decision surface as every other claim, because it looks like every other row.",
          here: "No offer may be made from this desk. The payout column shows an em dash rather than money the desk cannot commit.",
        },
        {
          label: "Case 03",
          title: "A group with nothing in it",
          naively: "Rendered as nothing at all, which reads as a bug rather than an answer.",
          here: "The empty group is a drawn state with its own message. Nothing is not the same as nothing to show.",
        },
      ],
    },
    audit: {
      railRight: "Read after generation, before handoff",
      headline: "Every figure, traced back.",
      lede: "The check that used to fail. Each aggregate on each screen, matched against the array it claims to summarise.",
      next: { num: "05", href: "#top", label: "Back to the top →" },
      shot: "Screenshot 06",
      of: "Audit view · figures and their sources",
      captionLead: "Assessed payable",
      caption: " · sums the four ready rows",
      size: "traced",
    },
    closing: {
      headline: ["One brief in.", "A whole product out."],
      lede: "This is one of several. Each has its own routes, its own status values, and its own awkward cases waiting to be found.",
    },
  },
};
