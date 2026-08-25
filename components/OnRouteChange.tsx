"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/* What has to happen on a client navigation and would happen by itself on a
   full page load: land at the top of the new page, without travelling there.

   The router scrolls the top of the arriving segment into view, and that
   segment starts below the nav — so a navigation landed 78px down, far enough
   for the nav to be wearing its scrolled backdrop on a page you had only just
   opened. And because the stylesheet sets scroll-behavior:smooth for in-page
   anchors, the router's scroll inherits it: leaving from the bottom of a long
   page, the document whips several thousand pixels upward in view before the
   new page settles. Neither is a transition; both are the old page leaving
   badly.

   So smooth comes off for as long as a navigation is in flight — the click is
   the only signal available before the router acts, which is why this listens
   in the capture phase — and the arrival is a jump, not a journey. */
export default function OnRouteChange() {
  const path = usePathname();
  const previous = useRef<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    let clear: ReturnType<typeof setTimeout>;

    const routing = () => {
      root.dataset.routing = "";
      // A click that turns out not to navigate (a link to the page you are
      // already on) never reaches the effect below, so it cannot be the only
      // thing that puts smooth back.
      clearTimeout(clear);
      clear = setTimeout(() => delete root.dataset.routing, 1200);
    };

    const onClick = (e: globalThis.MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const link = (e.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href");
      if (href?.startsWith("/")) routing();
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", routing);
    return () => {
      clearTimeout(clear);
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", routing);
    };
  }, []);

  useEffect(() => {
    const changed = previous.current !== null && previous.current !== path;
    previous.current = path;
    if (!changed) return;
    window.scrollTo({ top: 0, behavior: "instant" });
    delete document.documentElement.dataset.routing;
  }, [path]);

  return null;
}
