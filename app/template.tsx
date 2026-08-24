"use client";

import { usePathname } from "next/navigation";

/* The wipe between routes. This is a template, not a layout: a template
   re-renders on every navigation, which is what the animation needs, while the
   nav, footer and aura stay put in the layout above it and never re-enter.

   Keyed by path so the wipe also runs between /products and a product page — a
   root template is keyed by its own segment, so it does not remount when only a
   deeper segment changes, and the key is what makes that navigation animate
   like every other one.

   Which entrance owns a given arrival is decided in RouteFlag, next to the
   layout that outlives it. */
export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div key={path} className="route-enter">
      {children}
    </div>
  );
}
