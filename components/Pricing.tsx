"use client";

import Link from "next/link";
import { useRef } from "react";
import { usePointerLight } from "@/components/usePointerLight";

/* Free product, paid expertise — two cards, no tiers. The wide card spans two
   columns; the hire card takes the third.

   The hire card's button points at #contact, which does not exist anywhere on
   the site. Left as the source has it. */
export default function Pricing({
  flush = false,
}: {
  /* /pricing runs this straight under its header, with no rule on top */
  flush?: boolean;
}) {
  const tiers = useRef<HTMLDivElement>(null);
  usePointerLight(tiers, ".tier");

  return (
    <div className="band">
      <div className="sec" id="pricing" style={flush ? { borderTop: 0 } : undefined}>
        <div className="srail"><span className="l">Pricing</span><span className="r">The layer is free · the expertise is not</span></div>
        <div>
          <div className="shead">
            <h2 style={{ maxWidth: "none", whiteSpace: "nowrap" }}>Free. Take all of it.</h2>
            <div>
              <p className="lede">No tiers, no seats, no renewal. Reckon is free and stays free — what I sell is the work of applying it to a product that already exists.</p>
            </div>
          </div>
          <div className="tiers" ref={tiers}>
          <div className="tier card tier--wide">
            <span className="tdots" aria-hidden="true"></span><span className="tmesh" aria-hidden="true"></span><span className="tglow" aria-hidden="true"></span>
            <div className="thead"><div className="tn">Reckon</div><span className="tbadge">MIT <b>· use it anywhere</b></span></div>
            <div className="tp">Free</div>
            <div className="tt">All of it · no account · no telemetry</div>
            <p className="tpitch">The rules, the components and every worked product. Clone it, point the tokens at your brand, and use it on client work without asking me.</p>
            <div className="tcols">
              <div>
                <div className="tgrp">The layer</div>
                <ul>
                  <li>The full rules file<em>stated, compiled, checked</em></li>
                  <li>Shell and archetype recipes</li>
                  <li>Fixtures that carry the awkward cases</li>
                </ul>
              </div>
              <div>
                <div className="tgrp">The system</div>
                <ul>
                  <li>Components and tokens<em>on your own primitives</em></li>
                  <li>Every worked product, end to end</li>
                  <li>Claude Design setup, ready to load</li>
                </ul>
              </div>
            </div>
            <p className="tfine"><b>Free because the rules are worth more once people use them.</b></p>
            <div className="go"><Link className="cta" href="/products" data-t="Get Reckon">Get Reckon</Link></div>
          </div>
          <div className="tier card tier--mid">
            <span className="tdots" aria-hidden="true"></span><span className="tmesh" aria-hidden="true"></span><span className="tglow" aria-hidden="true"></span>
            <div className="thead"><div className="tn">Work with me</div></div>
            <div className="tp">Hire me</div>
            <div className="tt">Freelance · by the engagement</div>
            <p className="tpitch">I wrote these rules over twelve years of building this kind of software. The layer is free; the judgement behind it is what I do for a living.</p>
            <div className="svc">
              <div><svg className="fi" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" /> <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" /> <path d="m2.3 2.3 7.286 7.286" /> <circle cx="11" cy="11" r="2" /></svg><span>Product and UI design</span></div>
              <div><svg className="fi" viewBox="0 0 24 24" aria-hidden="true"><rect width="7" height="9" x="3" y="3" rx="1" /> <rect width="7" height="5" x="14" y="3" rx="1" /> <rect width="7" height="9" x="14" y="12" rx="1" /> <rect width="7" height="5" x="3" y="16" rx="1" /></svg><span>UX for dense, record-heavy screens</span></div>
              <div><svg className="fi" viewBox="0 0 24 24" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1" /> <rect width="7" height="7" x="14" y="3" rx="1" /> <rect width="7" height="7" x="14" y="14" rx="1" /> <rect width="7" height="7" x="3" y="14" rx="1" /></svg><span>Design systems and tokens</span></div>
              <div><svg className="fi" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" /></svg><span>Getting real output from design agents</span></div>
              <div><svg className="fi" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 17V5a2 2 0 0 0-2-2H4" /> <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" /></svg><span>A rules layer written for your codebase</span></div>
            </div>
            <div className="go"><a className="cta cta--quiet" href="#contact">Come and say hi</a></div>
          </div>
          </div>
          <div className="tpricefoot">
            <span>Everything in the box — <b>rules, components, tokens and every worked product</b></span>
            <span>MIT · no account · no runtime</span>
          </div>
        </div>
      </div>
    </div>
  );
}
