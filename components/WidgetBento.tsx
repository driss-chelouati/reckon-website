"use client";

import { useEffect, useRef } from "react";

/* The bento resolves once: each widget repairs in turn, then it stops. */
export default function WidgetBento() {
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = grid.current;
    if (!el) return;
    const tiles = Array.from(el.querySelectorAll<HTMLElement>(".bt"));
    if (!tiles.length) return;

    const reduced =
      !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: Array<ReturnType<typeof setTimeout>> = [];

    // The CSS keys off .fixed, so the class is what gets toggled — not React state.
    const runOnce = () => {
      if (reduced) {
        tiles.forEach((t) => t.classList.add("fixed"));
        return;
      }
      tiles.forEach((t, i) => {
        timers.push(setTimeout(() => t.classList.add("fixed"), 1600 + i * 2300));
      });
    };

    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (en) => {
          en.forEach((e) => {
            if (e.isIntersecting) {
              runOnce();
              io!.unobserve(e.target);
            }
          });
        },
        { threshold: 0.25 }
      );
      io.observe(el);
    } else {
      runOnce();
    }

    return () => {
      io?.disconnect();
      timers.forEach(clearTimeout);
      tiles.forEach((t) => t.classList.remove("fixed"));
    };
  }, []);

  return (
    <div className="band">
      <div className="ledger">
        <div className="bento auditcard" ref={grid}>

          <div className="card bt bp">
            <div className="bhead"><div className="kicker">Design agent</div>
              <div className="bstat"><span className="swap"><span className="bd">no rules</span><span className="gd">✓ rules loaded</span></span></div></div>

            <div className="who">
              <span className="ava"><svg viewBox="0 0 256 257" aria-hidden="true"><path fill="#d97757" d="m50.228 170.321l50.357-28.257l.843-2.463l-.843-1.361h-2.462l-8.426-.518l-28.775-.778l-24.952-1.037l-24.175-1.296l-6.092-1.297L0 125.796l.583-3.759l5.12-3.434l7.324.648l16.202 1.101l24.304 1.685l17.629 1.037l26.118 2.722h4.148l.583-1.685l-1.426-1.037l-1.101-1.037l-25.147-17.045l-27.22-18.017l-14.258-10.37l-7.713-5.25l-3.888-4.925l-1.685-10.758l7-7.713l9.397.649l2.398.648l9.527 7.323l20.35 15.75L94.817 91.9l3.889 3.24l1.555-1.102l.195-.777l-1.75-2.917l-14.453-26.118l-15.425-26.572l-6.87-11.018l-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0l10.63 1.426l4.472 3.888l6.61 15.101l10.694 23.786l16.591 32.34l4.861 9.592l2.592 8.879l.973 2.722h1.685v-1.556l1.36-18.211l2.528-22.36l2.463-28.776l.843-8.1l4.018-9.722l7.971-5.25l6.222 2.981l5.12 7.324l-.713 4.73l-3.046 19.768l-5.962 30.98l-3.889 20.739h2.268l2.593-2.593l10.499-13.934l17.628-22.036l7.778-8.749l9.073-9.657l5.833-4.601h11.018l8.1 12.055l-3.628 12.443l-11.342 14.388l-9.398 12.184l-13.48 18.147l-8.426 14.518l.778 1.166l2.01-.194l30.46-6.481l16.462-2.982l19.637-3.37l8.88 4.148l.971 4.213l-3.5 8.62l-20.998 5.184l-24.628 4.926l-36.682 8.685l-.454.324l.519.648l16.526 1.555l7.065.389h17.304l32.21 2.398l8.426 5.574l5.055 6.805l-.843 5.184l-12.962 6.611l-17.498-4.148l-40.83-9.721l-14-3.5h-1.944v1.167l11.666 11.406l21.387 19.314l26.767 24.887l1.36 6.157l-3.434 4.86l-3.63-.518l-23.526-17.693l-9.073-7.972l-20.545-17.304h-1.36v1.814l4.73 6.935l25.017 37.59l1.296 11.536l-1.814 3.76l-6.481 2.268l-7.13-1.297l-14.647-20.544l-15.1-23.138l-12.185-20.739l-1.49.843l-7.194 77.448l-3.37 3.953l-7.778 2.981l-6.48-4.925l-3.436-7.972l3.435-15.749l4.148-20.544l3.37-16.333l3.046-20.285l1.815-6.74l-.13-.454l-1.49.194l-15.295 20.999l-23.267 31.433l-18.406 19.702l-4.407 1.75l-7.648-3.954l.713-7.064l4.277-6.286l25.47-32.405l15.36-20.092l9.917-11.6l-.065-1.686h-.583L44.07 198.125l-12.055 1.555l-5.185-4.86l.648-7.972l2.463-2.593l20.35-13.999z" /></svg></span>
              <span><span className="nm">Claude Design</span>
                <span className="rl"><u></u><span className="swap"><span className="bd">unaudited</span><span className="gd">auditing every figure</span></span></span></span>
            </div>

            <div className="gauge">
              <svg viewBox="0 0 220 128" aria-hidden="true">
                <path className="trk" d="M20,112 A90,90 0 0 1 200,112" />
                <path className="val" d="M20,112 A90,90 0 0 1 200,112" />
                <path className="tick" d="M20,120 v7 M110,22 v-8 M200,120 v7" />
              </svg>
              <div className="gnum">
                <div className="v"><span className="swap"><span className="bd">41%</span><span className="gd">96%</span></span></div>
                <div className="k">figures traced to data · this sample</div>
              </div>
            </div>

            <div className="pstat">
              <div><small>Screens generated</small><b>8</b></div>
              <div><small>Aggregates derived</small><b><span className="swap"><span className="bd">3</span><span className="gd">14</span></span></b></div>
              <div><small>Actions withheld</small><b><span className="swap"><span className="bd">0</span><span className="gd">2</span></span></b></div>
              <div><small>States drawn</small><b><span className="swap"><span className="bd">4 / 9</span><span className="gd">9 / 9</span></span></b></div>
            </div>

            <div className="ptags"><span>components</span><span>AGENTS.md</span><span>fixtures</span><span>derivation</span></div>
            <div className="bfix">✓ same model, same brief, one rules layer added</div>
          </div>

          <div className="card bt b1">
            <div className="bhead"><div className="kicker">Assessed payable</div>
              <div className="bstat"><span className="swap"><span className="bd">no source</span><span className="gd">✓ sums 3 rows</span></span></div></div>
            <div className="tfig"><span className="swap"><span className="bd">$268,500.00</span><span className="gd">$256,482.00</span></span></div>
            <div className="rows">
              <div className="mrow"><span>Ready for decision</span><b>$174,960.00</b></div>
              <div className="mrow"><span>Approved, unpaid</span><b>$67,050.00</b></div>
              <div className="mrow"><span>Held by legal</span><b>$14,472.00</b></div>
            </div>
            <div className="bfix">✓ the figure names the array it came from</div>
          </div>

          <div className="card bt b2">
            <div className="bhead"><div className="kicker">Quarter on quarter</div>
              <div className="bstat"><span className="swap"><span className="bd">unverified</span><span className="gd">✓ recomputed</span></span></div></div>
            <div className="tfig"><span className="swap"><span className="bd">+12.4%</span><span className="gd">+8.9%</span></span></div>
            <svg className="spark" viewBox="0 0 280 96" preserveAspectRatio="none" aria-hidden="true">
              <path className="grid" d="M0,24 H280 M0,48 H280 M0,72 H280" />
              <path className="area" d="M0,76 L26,68 L52,71 L78,57 L104,61 L130,45 L156,49 L182,33 L208,37 L234,21 L260,13 L280,8 L280,96 L0,96 Z" />
              <path className="line" d="M0,76 L26,68 L52,71 L78,57 L104,61 L130,45 L156,49 L182,33 L208,37 L234,21 L260,13 L280,8" />
              <path className="line2" d="M208,37 L234,31 L260,29 L280,32" />
              <rect className="cap" x="277" y="5" width="6" height="6" rx="1" />
            </svg>
            <div className="bfix">✓ the omitted line changed the direction</div>
          </div>

          <div className="card bt b3">
            <div className="bhead"><div className="kicker">Work queue · ready for decision</div>
              <div className="bstat"><span className="swap"><span className="bd">3 impossible</span><span className="gd">✓ all valid</span></span></div></div>
            <div className="tfig"><span className="swap"><span className="bd">4</span><span className="gd">1</span></span> <s>of 4 can be decided</s></div>

            <div className="qt">
              <div className="qrow h"><span>Claim</span><span>Cargo</span><span>State</span><span className="qnum">Payable</span><span></span></div>

              <div className="qrow">
                <span className="qid">CLM-2026-0114</span>
                <span className="qcg">Dry-type transformer</span>
                <span className="qst">evidence complete</span>
                <span className="qnum">$32,160.00</span>
                <span className="qchip">Decide</span>
              </div>

              <div className="qrow">
                <span className="qid">CLM-2026-0121</span>
                <span className="qcg">Woven fabric rolls</span>
                <span className="qst"><span className="swap"><span className="bd">1 document missing</span><span className="gd">1 document missing</span></span></span>
                <span className="qnum">$20,600.00</span>
                <span className="swap"><span className="qchip bd">Decide</span><span className="qchip act gd">Evidence</span></span>
              </div>

              <div className="qrow">
                <span className="qid">CLM-2026-0093</span>
                <span className="qcg">Deck winch, two crates</span>
                <span className="qst"><span className="swap"><span className="bd">escalated to legal</span><span className="gd">escalated to legal</span></span></span>
                <span className="qnum"><span className="swap"><span className="bd">$64,000.00</span><span className="gd">—</span></span></span>
                <span className="swap"><span className="qchip bd">Decide</span><span className="qchip mute gd">No offer</span></span>
              </div>

              <div className="qrow">
                <span className="qid">CLM-2026-0140</span>
                <span className="qcg">Ceramic tableware</span>
                <span className="qst"><span className="swap"><span className="bd">delivered Aug 2025</span><span className="gd">time-barred 11 days</span></span></span>
                <span className="qnum"><span className="swap"><span className="bd">$18,900.00</span><span className="gd">$0.00</span></span></span>
                <span className="swap"><span className="qchip bd">Decide</span><span className="qchip mute gd">Closed</span></span>
              </div>

            </div>

            <div className="bfix">✓ every action read from its record, not from the row</div>
          </div>

        </div>
        <p className="caption">Four ordinary widgets, exactly as an agent first generated them — watch each one correct itself. Nothing about the styling changes. Only the figures, the actions and the states that were never true underneath.</p>
      </div>
    </div>
  );
}
