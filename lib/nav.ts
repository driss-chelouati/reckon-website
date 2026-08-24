import type { IconKey } from "@/components/icons";

/* The navigation, in one place: the two megamenus, the mobile drawer and the
   plain links. Several of these routes do not exist yet — /rules, /setup and
   nine of the ten product pages. That is deliberate; the menu shape is the
   design and the pages are coming. Do not scaffold placeholders for them. */

export type MegaLink = { href: string; label: string; icon: IconKey };
export type FeatureLink = { href: string; title: string; note: string; icon: IconKey };

export const layerLinks: MegaLink[] = [
  { href: "/how-it-works", label: "How it works", icon: "howItWorks" },
  { href: "/rules", label: "The rules file", icon: "rules" },
  { href: "/rules#compiled", label: "Compiled rules", icon: "compiled" },
  { href: "/rules#audit", label: "The audit pass", icon: "audit" },
  { href: "/failure-modes", label: "Failure modes", icon: "failureModes" },
  { href: "/design-system", label: "The design system", icon: "designSystem" },
  { href: "/design-system#tokens", label: "Tokens and theming", icon: "tokens" },
  { href: "/design-system#shells", label: "Shells and archetypes", icon: "shells" },
  { href: "/rules#fixtures", label: "Fixtures and states", icon: "fixtures" },
  { href: "/setup", label: "Claude Design setup", icon: "setup" },
];

export const productStartHere: FeatureLink[] = [
  { href: "/how-it-works", title: "How it works", note: "The three layers, in order", icon: "howItWorks" },
  { href: "/failure-modes", title: "Failure modes", note: "What goes wrong, and why", icon: "failureModes" },
  { href: "/design-system", title: "Design system", note: "Components and tokens", icon: "designSystem" },
];

/* the three products the Showcase menu opens with */
export const showcaseStartHere = ["cargo-claims", "support", "auth"];

export const drawerGroups = [
  {
    title: "Product",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/rules", label: "The rules file" },
      { href: "/failure-modes", label: "Failure modes" },
      { href: "/design-system", label: "The design system" },
      { href: "/setup", label: "Claude Design setup" },
    ],
  },
  {
    title: "Showcase",
    links: [
      { href: "/products/cargo-claims", label: "Cargo claims" },
      { href: "/products/support", label: "Support desk" },
      { href: "/products/auth", label: "Authentication" },
      { href: "/products", label: "Browse all →", emphasis: true },
    ],
  },
];

/* Every page's header carries one of these class names. The nav measures
   whichever one is on the page to decide when its button turns primary. */
export const PAGE_HEADER_SELECTOR =
  ".hero, .prhero, .chero, .phero, .xhero, .fhero, .hhero, .dhero";

/* The routes that exist. Eleven more are in the menu on purpose and are coming;
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
]);

export const isLive = (href: string) => liveRoutes.has(href.split("#")[0] || "/");
