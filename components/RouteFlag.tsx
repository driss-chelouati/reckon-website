"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/* Every page animates itself on mount — `.rin > *` staggers the header pieces
   and `.hband ~ *` fades in everything below them. That is right for a first
   load, where no route transition has happened. Run them again on top of the
   route transition and you get a double fade and about a second and a half of
   the page assembling itself; it reads as broken and the cause is not obvious.

   So each entrance gets one owner: first load belongs to the header stagger,
   every navigation after it belongs to the transition in app/template.tsx.
   This marks the document the first time the path changes, and the stylesheet
   stands the per-page animations down from there on.

   It lives in the layout rather than the template because the template remounts
   on every navigation and would forget which arrival this was. */
export default function RouteFlag() {
  const path = usePathname();
  const firstPath = useRef<string | null>(null);

  useEffect(() => {
    if (firstPath.current === null) {
      firstPath.current = path;
      return;
    }
    if (path !== firstPath.current) document.documentElement.dataset.navigated = "";
  }, [path]);

  return null;
}
