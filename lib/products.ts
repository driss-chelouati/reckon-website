import type { StaticImageData } from "next/image";
import type { IconKey } from "@/components/icons";
import claimsDesk from "@/public/img/products/claims-desk/01-claims-desk.png";
import talentDesk from "@/public/img/products/talent-desk/01-talent-desk.png";
import financeDesk from "@/public/img/products/finance-desk/01-finance-desk.png";
import recruitmentDesk from "@/public/img/products/recruitment-desk/01-recruitment-desk.png";

/* The ten worked products. This list is the megamenu's Showcase column and the
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
    screens: "8",
    covers: "Queue, record, decision, recovery",
    breaksOn: "A claim time-barred before you open it",
    menuNote: "Eight screens, fully audited",
  },
  {
    slug: "marketing-desk",
    name: "Marketing desk",
    icon: "marketing",
    domain: "Marketing",
    state: "progress",
    cat: "ops progress",
    shotIndex: "Screenshot 02",
    blurb:
      "A lifecycle marketer runs automations that never stop and one-off sends that need somebody else’s sign-off. Every figure on every screen has to reconcile with the send log underneath it.",
    screens: "35 registered routes",
    covers: "Sending, audiences, approval, deliverability",
    breaksOn: "A send counted as failed mid-flight",
    menuNote: "Twelve destinations, three groups",
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
    slug: "clinical",
    name: "Clinical practice",
    icon: "clinical",
    domain: "Health",
    state: "audited",
    cat: "ops",
    shotIndex: "Screenshot 05",
    blurb:
      "Scheduling, records and results under a duty of care, where a stale figure reads as clinical risk.",
    screens: "6",
    covers: "Schedule, patient, results",
    breaksOn: "Permission-denied, as a designed screen",
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
    slug: "auth",
    name: "Authentication",
    icon: "auth",
    domain: "Access",
    state: "audited",
    cat: "people",
    shotIndex: "Screenshot 07",
    blurb:
      "A full sign-in surface, including every way in that fails: expired links, locked accounts, a second factor nobody can reach.",
    screens: "9",
    covers: "Sign-in, MFA, recovery",
    breaksOn: "An MFA screen with a way out",
    menuNote: "Including the ways in that fail",
  },
  {
    slug: "grants",
    name: "Grant review",
    icon: "grants",
    domain: "Public sector",
    state: "progress",
    cat: "ops progress",
    shotIndex: "Screenshot 08",
    blurb:
      "Applications, scoring and panel decisions held against a closing deadline.",
    screens: "—",
    covers: "Rounds, application, panel",
    breaksOn: "A round that closed mid-review",
  },
  {
    slug: "admin",
    name: "Admin console",
    icon: "admin",
    domain: "Operations",
    state: "audited",
    cat: "people",
    shotIndex: "Screenshot 09",
    blurb:
      "Roles, permissions and an audit trail — the archetype every internal tool eventually grows into.",
    screens: "6",
    covers: "Users, roles, audit trail",
    breaksOn: "The last admin, demoting themselves",
  },
  {
    slug: "device",
    name: "Device and home",
    icon: "device",
    domain: "Devices",
    state: "progress",
    cat: "ops progress",
    shotIndex: "Screenshot 10",
    blurb:
      "Rooms, schedules and hardware that goes offline without telling anybody.",
    screens: "—",
    covers: "Rooms, devices, schedules",
    breaksOn: "A device that stopped reporting",
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
  "clinical",
  "recruitment-desk",
  "grants",
  "auth",
  "admin",
  "device",
];

export const bySlug = new Map(products.map((p) => [p.slug, p]));
export const menuProducts = menuOrder.map((slug) => bySlug.get(slug)!);
