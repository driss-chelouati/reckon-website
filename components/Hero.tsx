"use client";

import { useEffect, useRef } from "react";
import HeroField from "./HeroField";

export default function Hero() {
  const gl = useRef<HTMLSpanElement>(null);

  /* the headline word gives out at irregular intervals */
  useEffect(() => {
    const w = gl.current;
    if (!w) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let next: ReturnType<typeof setTimeout>;
    let clear: ReturnType<typeof setTimeout>;
    const fire = () => {
      w.classList.add("hit");
      clear = setTimeout(() => w.classList.remove("hit"), 760);
      next = setTimeout(fire, 3200 + Math.random() * 3600); // 3.2s – 6.8s apart
    };
    next = setTimeout(fire, 1400 + Math.random() * 1600);

    return () => {
      clearTimeout(next);
      clearTimeout(clear);
      w.classList.remove("hit");
    };
  }, []);

  return (
    <div className="band" id="top">
      <div className="hero">
        <HeroField />
        <div>
          <p className="eyebrow">A design system for business applications</p>
          <h1>
            Your agent’s first screen is usually{' '}
            <span className="gl" data-t="wrong" ref={gl}>wrong</span>
            .
          </h1>
          <p className="lede">
            Not ugly — wrong underneath. Totals that trace to nothing, two screens disagreeing about the same record, states that exist in the data and nowhere on screen. That costs you twice: once when a client signs off on fiction, again when an engineer has to work out which figures were real.
          </p>
          <div className="hero-actions">
            <a className="cta" href="#what">Connect your design agent</a>
            {' '}
            <a className="cta-alt" href="#pairs">See what goes wrong</a>
          </div>
        </div>
      </div>
    </div>
  );
}
