import type { StaticImageData } from "next/image";
import type { IconKey } from "@/components/icons";
import claimsDesk from "@/public/img/products/claims-desk/01-claims-desk.png";
import talentDesk from "@/public/img/products/talent-desk/01-talent-desk.png";
import financeDesk from "@/public/img/products/finance-desk/01-finance-desk.png";
import recruitmentDesk from "@/public/img/products/recruitment-desk/01-recruitment-desk.png";
import marketingDesk from "@/public/img/products/marketing-desk/01-marketing-desk.png";
import aiTool from "@/public/img/products/ai-tool/01-ai-tool.png";
import wardDesk from "@/public/img/products/hospital-desk/01-hospital-desk.png";
import hearth from "@/public/img/products/home-desk/01-home-desk.png";

/* The nine worked products. This list is the megamenu's Showcase column and the
   /products index cards — the same records in two shapes, which is why it lives
   here rather than in either component. Copy is placeholder and will be
   rewritten; nothing here should be inlined into JSX. */

export type ProductState = "audited" | "progress";

export type Product = {
  slug: string;
  name: string;
  icon: IconKey;
  domain: string;
  state: ProductState;
  /* the space-separated data-cat the source card carried */
  cat: string;
  /* the index card */
  shotIndex: string;
  /* a real screenshot where there is one; the dashed placeholder stands in
     until then, and names what the shot will be */
  image?: StaticImageData;
  blurb: string;
  screens: string;
  covers: string;
  breaksOn: string;
  /* the megamenu's "start here" strip, for the three that appear in it */
  menuNote?: string;
};

export const products: Product[] = [
  {
    slug: "cargo-claims",
    name: "Cargo claims",
    icon: "cargoClaims",
    domain: "Logistics",
    state: "audited",
    cat: "ops",
    shotIndex: "Screenshot 01",
    image: claimsDesk,
    blurb:
      "Damage claims against a container line. Liability caps, a filing window that cannot be extended, and evidence that gates the decision.",
    screens: "14",
    covers: "Queue, record, decision, recovery",
    breaksOn: "A claim time-barred before you open it",
    menuNote: "Eight screens, fully audited",
  },
  {
    slug: "recruitment-desk",
    name: "Recruitment desk",
    icon: "hr",
    domain: "Healthcare",
    state: "audited",
    cat: "people",
    shotIndex: "Screenshot 06",
    image: recruitmentDesk,
    blurb:
      "A community health group hires against one process for every seat, from ward clerk to systems engineer. Nothing may be offered until two references, the right to work and — where the seat asks for one — a professional registration are all in hand.",
    screens: "22",
    covers: "Queue, record, checks, offer",
    breaksOn: "An offer sent before the references land",
    menuNote: "One process, seven stages",
  },
  {
    slug: "payment-ops",
    name: "Payment operations",
    icon: "billing",
    domain: "Finance",
    state: "audited",
    cat: "money",
    shotIndex: "Screenshot 03",
    image: financeDesk,
    blurb:
      "Treasury operations watches money arrive, releases what goes out and reviews what the company spent on its own cards. Every figure on the screen has to reconcile against the rows underneath it.",
    screens: "29",
    covers: "Queue, approval, card spend, balance",
    breaksOn: "A payout nobody here can release",
    menuNote: "The money chain, visible",
  },
  {
    slug: "talent",
    name: "Talent representation",
    icon: "talent",
    domain: "Media",
    state: "audited",
    cat: "money",
    shotIndex: "Screenshot 04",
    image: talentDesk,
    blurb:
      "Creators represented to brands, on a desk that answers to both. One deal binds a creator, a brand, its deliverables, an invoice and a payout — and any one of them can be the late one.",
    screens: "19",
    covers: "Roster, briefs, deliverables, money",
    breaksOn: "A rate the policy no longer uses",
  },
  {
    slug: "ai-tool",
    name: "AI tool",
    icon: "aiTool",
    domain: "Software",
    state: "audited",
    cat: "ops",
    shotIndex: "Screenshot 05",
    image: aiTool,
    blurb:
      "A team runs its work through one assistant and the bill arrives monthly for turns nobody itemised. Context, cost and seats are all recomputed from the same messages, so none of them can drift apart.",
    screens: "21",
    covers: "Conversation, projects, files, usage, billing",
    breaksOn: "A file the index could not read",
    menuNote: "Derived money, turn by turn",
  },
  {
    slug: "marketing-desk",
    name: "Marketing desk",
    icon: "marketing",
    domain: "Marketing",
    state: "audited",
    cat: "ops",
    shotIndex: "Screenshot 02",
    image: marketingDesk,
    blurb:
      "A lifecycle marketer runs automations that never stop and one-off sends that need somebody else’s sign-off. Every figure on every screen has to reconcile with the send log underneath it.",
    screens: "35",
    covers: "Sending, audiences, approval, deliverability",
    breaksOn: "A send counted as failed mid-flight",
    menuNote: "Twelve destinations, three groups",
  },
  {
    slug: "ward-desk",
    name: "Ward desk",
    icon: "clinical",
    domain: "Healthcare",
    state: "audited",
    cat: "people",
    shotIndex: "Screenshot 09",
    image: wardDesk,
    blurb:
      "A hospital bills for care it has already given, months after the clinical record was written by somebody else. Every figure finance quotes has to be traceable back to a bed day, a procedure or a drug course that actually happened.",
    screens: "40",
    covers: "Ward, theatre, pharmacy, invoice, recovery",
    breaksOn: "A bed day billed that nobody occupied",
    menuNote: "The widest single template",
  },
  {
    slug: "hearth",
    name: "Hearth",
    icon: "device",
    domain: "Residence",
    state: "audited",
    cat: "ops",
    shotIndex: "Screenshot 10",
    image: hearth,
    blurb:
      "A house has no staff and no shift handover, so whoever is standing in the hall is the operator. Everything the product knows has to be answerable from one screen before anybody has taken their coat off.",
    screens: "30",
    covers: "Control, cameras, climate, security, upkeep",
    breaksOn: "A door nobody knows is unlocked",
    menuNote: "The operator lives here",
  },
];

export const stateLabel: Record<ProductState, string> = {
  audited: "Audited",
  progress: "In progress",
};

/* The megamenu lists the products in a different order from the index grid. */
export const menuOrder = [
  "cargo-claims",
  "payment-ops",
  "talent",
  "marketing-desk",
  "ai-tool",
  "recruitment-desk",
  "ward-desk",
  "hearth",
];

export const bySlug = new Map(products.map((p) => [p.slug, p]));
export const menuProducts = menuOrder.map((slug) => bySlug.get(slug)!);
