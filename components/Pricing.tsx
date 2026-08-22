"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Tier = {
  name: string;
  className: string;
  badge?: string;
  price: string;
  terms: string;
  pitch: string;
  spec: Array<[string, string]>;
  points: ReactNode[];
  fine: ReactNode;
  ctaClass: string;
  ctaLabel: string;
};

const TIERS: Tier[] = [
  {
    name: "Core",
    className: "tier card",
    price: "Free",
    terms: "MIT · no account",
    pitch: "Enough to see whether the rules change what your agent produces.",
    spec: [
      ["License", "MIT"],
      ["Support", "Issues"],
    ],
    points: ["Components and tokens", "Base agent instructions", "One worked product, end to end"],
    fine: "Clone it and go.",
    ctaClass: "cta cta--quiet",
    ctaLabel: "Get the core",
  },
  {
    name: "Pro",
    className: "tier card tier--mid",
    badge: "Most teams",
    price: "One-time",
    terms: "Per team · no renewal",
    pitch: "The judgement layer in full, plus every product worked against it.",
    spec: [
      ["License", "Team, perpetual"],
      ["Support", "Direct email"],
    ],
    points: [
      <>
        The full rules layer<em>stated, compiled, checked</em>
      </>,
      "Every worked product",
      "Hostile fixtures and responsive checks",
    ],
    fine: <b>It keeps working whether or not I do.</b>,
    ctaClass: "cta",
    ctaLabel: "Buy Pro",
  },
  {
    name: "Private",
    className: "tier card",
    price: "Talk",
    terms: "For a house style",
    pitch: "Your conventions written as rules, against your own codebase.",
    spec: [
      ["License", "Bespoke"],
      ["Support", "Direct line"],
    ],
    points: ["Your tokens and conventions", "Rules against your codebase", "A fixed window, no retainer"],
    fine: (
      <>
        A few at a time. <b>Ask before you plan around it.</b>
      </>
    ),
    ctaClass: "cta cta--quiet",
    ctaLabel: "Start a conversation",
  },
];

export default function Pricing() {
  const tiers = useRef<HTMLDivElement>(null);

  /* pricing cards: light follows the pointer */
  useEffect(() => {
    const el = tiers.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = Array.from(el.querySelectorAll<HTMLElement>(".tier"));
    const handlers = cards.map((t) => {
      const onMove = (e: PointerEvent) => {
        const r = t.getBoundingClientRect();
        t.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        t.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      };
      t.addEventListener("pointermove", onMove);
      return { t, onMove };
    });

    return () => {
      handlers.forEach(({ t, onMove }) => t.removeEventListener("pointermove", onMove));
    };
  }, []);

  return (
    <div className="band">
      <div className="sec" id="pricing">
        <div className="srail">
          <span className="l">Pricing</span>
          <span className="r">One-time · per team · no renewal</span>
        </div>
        <div>
          <div className="shead">
            <h2>Bought once.</h2>
            <div>
              <p className="lede">
                No seats to count, no renewal to forget, no telemetry going anywhere. What you pay for is the judgement, because the judgement is the product.
              </p>
              <a className="snum" href="#faq">
                <i>07</i>
                <u>Straight answers →</u>
              </a>
            </div>
          </div>
          <div className="tiers" ref={tiers}>
            {TIERS.map((t) => (
              <div className={t.className} key={t.name}>
                <span className="tdots" aria-hidden="true" />
                <span className="tmesh" aria-hidden="true" />
                <span className="tglow" aria-hidden="true" />
                <div className="thead">
                  <div className="tn">{t.name}</div>
                  {t.badge ? <span className="tbadge">{t.badge}</span> : null}
                </div>
                <div className="tp">{t.price}</div>
                <div className="tt">{t.terms}</div>
                <p className="tpitch">{t.pitch}</p>
                <div className="tspec">
                  {t.spec.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </div>
                <ul>
                  {t.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <p className="tfine">{t.fine}</p>
                <div className="go">
                  <a className={t.ctaClass} href="#">
                    {t.ctaLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="tpricefoot">
            <span>
              Same components in every tier — <b>what changes is how much judgement comes with them</b>
            </span>
            <span>No seats · no telemetry · no runtime</span>
          </div>
        </div>
      </div>
    </div>
  );
}
