"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/* The two things that have to happen on a client navigation and would happen by
   themselves on a full page load.

   One: stand the per-page entrance animations down. Every page animates itself
   on mount — `.rin > *` staggers the header pieces and `.hband ~ *` fades in
   everything below them — and that is right for a first load, where no route
   transition has happened. Run them again on top of the transition in
   app/template.tsx and you get a double fade and about a second and a half of
   the page assembling itself; it reads as broken and the cause is not obvious.
   So each entrance gets one owner, and `html[data-navigated]` is what tells the
   stylesheet which one is running.

   Two: land at the top of the page, which is not where the router leaves you.
   It scrolls the top of the arriving segment into view, and that segment starts
   below the nav — so every navigation landed 78px down, far enough for the nav
   to be wearing its scrolled backdrop on a page you had only just opened.
   Instant on purpose: the stylesheet sets scroll-behavior:smooth for in-page
   anchors, and inheriting it here would animate the correction.

   This lives in the layout rather than the template because the template
   remounts on every navigation and would forget which arrival this was. */
export default function OnRouteChange() {
  const path = usePathname();
  const previous = useRef<string | null>(null);

  useEffect(() => {
    const changed = previous.current !== null && previous.current !== path;
    previous.current = path;
    if (!changed) return;
    document.documentElement.dataset.navigated = "";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [path]);

  return null;
}
