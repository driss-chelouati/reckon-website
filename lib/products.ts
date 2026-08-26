import type { StaticImageData } from "next/image";
import type { IconKey } from "@/components/icons";
import claimsDesk from "@/public/img/products/claims-desk/01-claims-desk.png";

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
    slug: "support",
    name: "Support desk",
    icon: "support",
    domain: "Support",
    state: "audited",
    cat: "ops",
    shotIndex: "Screenshot 02",
    blurb:
      "A queue of tickets and the actions each state permits. This is where the AI parts of the system are shown working.",
    screens: "7",
    covers: "Inbox, ticket, macros, reports",
    breaksOn: "A ticket merged while you were typing",
    menuNote: "Where the AI parts are shown",
  },
  {
    slug: "billing",
    name: "Billing and invoicing",
    icon: "billing",
    domain: "Finance",
    state: "audited",
    cat: "money",
    shotIndex: "Screenshot 03",
    blurb:
      "Subscriptions, dunning and payments that fail. The invoice on the list is the invoice on the detail screen.",
    screens: "6",
    covers: "Invoices, record, dunning",
    breaksOn: "A payout you cannot recall",
  },
  {
    slug: "talent",
    name: "Talent representation",
    icon: "talent",
    domain: "Media",
    state: "audited",
    cat: "money",
    shotIndex: "Screenshot 04",
    blurb:
      "A roster matched to brand briefs, against exclusivity windows, rate cards and deliverables in flight.",
    screens: "7",
    covers: "Roster, briefs, deals, money",
    breaksOn: "A brief nobody on the roster fits",
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
    slug: "hr",
    name: "HR and people ops",
    icon: "hr",
    domain: "People",
    state: "progress",
    cat: "people progress",
    shotIndex: "Screenshot 06",
    blurb:
      "Records and reviews for a mid-sized consultancy, with a salary field most roles are not permitted to read.",
    screens: "—",
    covers: "People, record, reviews",
    breaksOn: "A field the role cannot see",
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
  "billing",
  "talent",
  "support",
  "clinical",
  "hr",
  "grants",
  "auth",
  "admin",
  "device",
];

export const bySlug = new Map(products.map((p) => [p.slug, p]));
export const menuProducts = menuOrder.map((slug) => bySlug.get(slug)!);
