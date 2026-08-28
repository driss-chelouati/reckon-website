import type { IconKey } from "@/components/icons";

/* The navigation, in one place: the two megamenus and the plain links. The
   mobile panel is built from these same lists rather than from a copy of them —
   the drawer it replaced kept its own, and had drifted to five layer links
   against ten and four products against ten.

   Several of these routes do not exist yet — six of the ten product pages. That
   is deliberate; the menu shape is the design and the pages are coming. Do not
   scaffold placeholders for them. */

export type MegaLink = { href: string; label: string; icon: IconKey };
export type FeatureLink = { href: string; title: string; note: string; icon: IconKey };

export const layerLinks: MegaLink[] = [
  { href: "/how-it-works", label: "Overview", icon: "howItWorks" },
  { href: "/rules", label: "The rules layer", icon: "rules" },
  { href: "/failure-modes", label: "Failure modes", icon: "failureModes" },
  { href: "/fixtures", label: "Fixtures", icon: "check" },
  { href: "/audit", label: "The audit phase", icon: "audit" },
  { href: "/shells", label: "Shells and archetypes", icon: "shells" },
  { href: "/how-to-use", label: "How to use", icon: "howToUse" },
  { href: "/design-system", label: "Design system", icon: "tokens" },
  { href: "/download", label: "Download files", icon: "download" },
  { href: "/who-its-for", label: "Who it is for", icon: "users" },
];

export const productStartHere: FeatureLink[] = [
  { href: "/how-it-works", title: "How it works", note: "The three layers, in order", icon: "rules" },
  { href: "/how-to-use", title: "How to use", note: "How to setup your project", icon: "check" },
  { href: "/download", title: "Download", note: "Download the project files", icon: "download" },
];

/* the three products the Showcase menu opens with */
export const showcaseStartHere = ["cargo-claims", "support", "auth"];


/* Every page's header carries one of these class names, and the nav measures
   whichever one is on the page to decide when its button turns primary.

   Pages whose CSS is a module cannot be named here — their class names are
   rewritten at build time — so they mark their header with data-page-header
   instead. Prefer the attribute on anything new; the class list is kept for the
   pages that predate it. */
export const PAGE_HEADER_SELECTOR =
  "[data-page-header], .hero, .prhero, .chero, .phero, .xhero, .fhero, .hhero, .dhero," +
  " .ohero, .rhero, .whero, .khero, .hthero, .nfhero";

/* The routes that exist. Six more are in the menu on purpose and are coming;
   until they do they stay plain anchors, so the router does not prefetch a 404
   for every one of them the moment the menu renders. */
export const liveRoutes = new Set([
  "/",
  "/how-it-works",
  "/failure-modes",
  "/design-system",
  "/pricing",
  "/changelog",
  "/products",
  "/products/cargo-claims",
  "/products/talent",
  "/products/payment-ops",
  "/products/recruitment-desk",
  "/download",
  "/rules",
  "/who-its-for",
  "/fixtures",
  "/shells",
  "/audit",
  "/legal",
  "/privacy",
  "/how-to-use",
]);

export const isLive = (href: string) => liveRoutes.has(href.split("#")[0] || "/");
