"use client";

import { useEffect, useRef } from "react";

/* The headline word gives out at irregular intervals — 3.2s to 6.8s apart. The
   timeout reschedules itself, so the handle is kept in a ref and cleared on
   unmount; otherwise it keeps firing on a page nobody is looking at. */
export default function Glitch({ word }: { word: string }) {
  const el = useRef<HTMLSpanElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const w = el.current;
    if (!w) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const at = (fn: () => void, ms: number) => {
      timers.current.push(setTimeout(fn, ms));
    };
    const fire = () => {
      w.classList.add("hit");
      at(() => w.classList.remove("hit"), 760);
      at(fire, 3200 + Math.random() * 3600);
    };
    at(fire, 1400 + Math.random() * 1600);

    const handles = timers.current;
    return () => {
      handles.forEach(clearTimeout);
      handles.length = 0;
      w.classList.remove("hit");
    };
  }, []);

  return (
    <span className="gl" data-t={word} ref={el}>
      {word}
    </span>
  );
}
