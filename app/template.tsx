"use client";

import { usePathname } from "next/navigation";

/* A template, not a layout: it is keyed by the path, so the page tree is torn
   down and rebuilt on every navigation and each page plays its own entrance —
   the header stagger and the fade below it — exactly as it does on a first
   load. A root template is otherwise keyed by its own segment and would not
   remount between /products and a product page.

   The transition itself is the veil in the layout; there is deliberately no
   animation on this wrapper, because fading in a page whose content is already
   animating from zero only adds dead time in front of it. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div key={usePathname()}>{children}</div>;
}
