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
            <div className="bhead">
              <div className="kicker">Design agent</div>
              <div className="bstat">
                <span className="swap">
                  <span className="bd">no rules</span>
                  <span className="gd">✓ rules loaded</span>
                </span>
              </div>
            </div>
            <div className="who">
              {/* swap the text node for <img src="..." alt=""> to use a real portrait */}
              <span className="ava">CD</span>
              {' '}
              <span>
                <span className="nm">Claude Design</span>
                {' '}
                <span className="rl">
                  <u />
                  <span className="swap">
                    <span className="bd">unaudited</span>
                    <span className="gd">auditing every figure</span>
                  </span>
                </span>
              </span>
            </div>
            <div className="gauge">
              <svg viewBox="0 0 220 128" aria-hidden="true">
                <path className="trk" d="M20,112 A90,90 0 0 1 200,112" />
                <path className="val" d="M20,112 A90,90 0 0 1 200,112" />
                <path className="tick" d="M20,120 v7 M110,22 v-8 M200,120 v7" />
              </svg>
              <div className="gnum">
                <div className="v">
                  <span className="swap">
                    <span className="bd">41%</span>
                    <span className="gd">96%</span>
                  </span>
                </div>
                <div className="k">figures traced to data · this sample</div>
              </div>
            </div>
            <div className="pstat">
              <div>
                <small>Screens generated</small>
                <b>8</b>
              </div>
              <div>
                <small>Aggregates derived</small>
                <b>
                  <span className="swap">
                    <span className="bd">3</span>
                    <span className="gd">14</span>
                  </span>
                </b>
              </div>
              <div>
                <small>Actions withheld</small>
                <b>
                  <span className="swap">
                    <span className="bd">0</span>
                    <span className="gd">2</span>
                  </span>
                </b>
              </div>
              <div>
                <small>States drawn</small>
                <b>
                  <span className="swap">
                    <span className="bd">4 / 9</span>
                    <span className="gd">9 / 9</span>
                  </span>
                </b>
              </div>
            </div>
            <div className="ptags">
              <span>shadcn</span>
              <span>AGENTS.md</span>
              <span>fixtures</span>
              <span>derivation</span>
            </div>
            <div className="bfix">✓ same model, same brief, one rules layer added</div>
          </div>
          <div className="card bt b1">
            <div className="bhead">
              <div className="kicker">Assessed payable</div>
              <div className="bstat">
                <span className="swap">
                  <span className="bd">no source</span>
                  <span className="gd">✓ sums 3 rows</span>
                </span>
              </div>
            </div>
            <div className="tfig">
              <span className="swap">
                <span className="bd">$268,500.00</span>
                <span className="gd">$256,482.00</span>
              </span>
            </div>
            <div className="rows">
              <div className="mrow">
                <span>Ready for decision</span>
                <b>174,960.00</b>
              </div>
              <div className="mrow">
                <span>Approved, unpaid</span>
                <b>67,050.00</b>
              </div>
              <div className="mrow">
                <span>Held by legal</span>
                <b>14,472.00</b>
              </div>
            </div>
            <div className="bfix">✓ the figure names the array it came from</div>
          </div>
          <div className="card bt b2">
            <div className="bhead">
              <div className="kicker">Quarter on quarter</div>
              <div className="bstat">
                <span className="swap">
                  <span className="bd">unverified</span>
                  <span className="gd">✓ recomputed</span>
                </span>
              </div>
            </div>
            <div className="tfig">
              <span className="swap">
                <span className="bd">+12.4%</span>
                <span className="gd">+8.9%</span>
              </span>
            </div>
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
            <div className="bhead">
              <div className="kicker">Work queue · ready for decision</div>
              <div className="bstat">
                <span className="swap">
                  <span className="bd">3 impossible</span>
                  <span className="gd">✓ all valid</span>
                </span>
              </div>
            </div>
            <div className="tfig">
              <span className="swap">
                <span className="bd">4</span>
                <span className="gd">1</span>
              </span>
              {' '}
              <s>of 4 can be decided</s>
            </div>
            <div className="qt">
              <div className="qrow h">
                <span>Claim</span>
                <span>Cargo</span>
                <span>State</span>
                <span className="qnum">Payable</span>
                <span />
              </div>
              <div className="qrow">
                <span className="qid">CLM-2026-0114</span>
                {' '}
                <span className="qcg">Dry-type transformer</span>
                {' '}
                <span className="qst">evidence complete</span>
                {' '}
                <span className="qnum">32,160.00</span>
                {' '}
                <span className="qchip">Decide</span>
              </div>
              <div className="qrow">
                <span className="qid">CLM-2026-0121</span>
                {' '}
                <span className="qcg">Woven fabric rolls</span>
                {' '}
                <span className="qst">
                  <span className="swap">
                    <span className="bd">1 document missing</span>
                    <span className="gd">1 document missing</span>
                  </span>
                </span>
                {' '}
                <span className="qnum">20,600.00</span>
                {' '}
                <span className="swap">
                  <span className="qchip bd">Decide</span>
                  <span className="qchip act gd">Evidence</span>
                </span>
              </div>
              <div className="qrow">
                <span className="qid">CLM-2026-0093</span>
                {' '}
                <span className="qcg">Deck winch, two crates</span>
                {' '}
                <span className="qst">
                  <span className="swap">
                    <span className="bd">escalated to legal</span>
                    <span className="gd">escalated to legal</span>
                  </span>
                </span>
                {' '}
                <span className="qnum">
                  <span className="swap">
                    <span className="bd">64,000.00</span>
                    <span className="gd">—</span>
                  </span>
                </span>
                {' '}
                <span className="swap">
                  <span className="qchip bd">Decide</span>
                  <span className="qchip mute gd">No offer</span>
                </span>
              </div>
              <div className="qrow">
                <span className="qid">CLM-2026-0140</span>
                {' '}
                <span className="qcg">Ceramic tableware</span>
                {' '}
                <span className="qst">
                  <span className="swap">
                    <span className="bd">delivered Aug 2025</span>
                    <span className="gd">time-barred 11 days</span>
                  </span>
                </span>
                {' '}
                <span className="qnum">
                  <span className="swap">
                    <span className="bd">18,900.00</span>
                    <span className="gd">0.00</span>
                  </span>
                </span>
                {' '}
                <span className="swap">
                  <span className="qchip bd">Decide</span>
                  <span className="qchip mute gd">Closed</span>
                </span>
              </div>
            </div>
            <div className="bfix">✓ every action read from its record, not from the row</div>
          </div>
        </div>
        <p className="caption">
          Four ordinary widgets, exactly as an agent first generated them — watch each one correct itself. Nothing about the styling changes. Only the figures, the actions and the states that were never true underneath.
        </p>
      </div>
    </div>
  );
}
