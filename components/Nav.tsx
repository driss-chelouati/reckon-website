"use client";

import { useEffect, useRef } from "react";

/* nav dissolves in only once the page has moved */
export default function Nav() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bar.current;
    if (!el) return;
    let on = false;
    const check = () => {
      const want = window.scrollY > 10;
      if (want !== on) {
        on = want;
        el.classList.toggle("stuck", on);
      }
    };
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <div className="navbar" ref={bar}>
      <input type="checkbox" id="navtog" className="navtog" aria-label="Menu" />
      <div className="band">
        <nav>
          <a className="mark" href="#top">
            Reckon
            <span>.</span>
          </a>
          <div className="navlinks">
            <a href="#what">What it is</a>
            {' '}
            <a href="#templates">Products</a>
            {' '}
            <a href="#pairs">Failure modes</a>
            {' '}
            <a href="#pricing">Pricing</a>
          </div>
          <a className="navcta" href="#templates">See a product</a>
          {' '}
          <label className="burger" htmlFor="navtog">
            <span />
            <span />
          </label>
        </nav>
      </div>
      <div className="navdrawer">
        <a href="#what-it-is">
          <i>01</i>
          What it is
        </a>
        {' '}
        <a href="#problem">
          <i>02</i>
          The failure mode
        </a>
        {' '}
        <a href="#templates">
          <i>03</i>
          Products
        </a>
        {' '}
        <a href="#pairs">
          <i>04</i>
          Failure modes
        </a>
        {' '}
        <a href="#machinery">
          <i>05</i>
          Machinery
        </a>
        {' '}
        <a href="#teams">
          <i>06</i>
          Who it is for
        </a>
        {' '}
        <a href="#pricing">
          <i>07</i>
          Pricing
        </a>
        {' '}
        <a href="#faq">
          <i>08</i>
          Questions
        </a>
        {' '}
        <a className="cta" href="#what-it-is">Connect your design agent</a>
      </div>
    </div>
  );
}
