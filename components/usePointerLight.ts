import { useEffect, type RefObject } from "react";

/* The light on a card follows the pointer across it — the pricing tiers and the
   showcase cards both do this by writing --mx/--my, which the CSS reads. Nothing
   here belongs in React state: it runs at pointer rate. */
export function usePointerLight(root: RefObject<HTMLElement | null>, selector: string) {
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const offs = Array.from(el.querySelectorAll<HTMLElement>(selector)).map((c) => {
      const move = (e: PointerEvent) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        c.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      };
      c.addEventListener("pointermove", move);
      return () => c.removeEventListener("pointermove", move);
    });

    return () => offs.forEach((off) => off());
  }, [root, selector]);
}
