import type { Metadata } from "next";
import Link from "next/link";
import HowField from "@/components/fx/HowField";
import Faq from "@/components/Faq";
import ClosingCta from "@/components/ClosingCta";
import "./how-it-works.css";

export const metadata: Metadata = {
  title: "How it works — stated, compiled, checked",
};

export default function HowItWorks() {
  return (
    <>
      <div className="band hband">
        <div className="hhero rin">
          <HowField />
          <div className="srail"><span className="l">How it works</span><span className="r">Stated · compiled · checked</span></div>
          <h1>A rule nobody can check<br />is only a preference.</h1>
          <p className="lede">Written guidance drifts. The model reads it, agrees with it, and violates it on the fourth screen. So the rules are held three different ways — and the strongest of them do not depend on the model’s judgement at all.</p>

          <div className="hflow">
            <div className="hc">
              <div className="hch"><u></u>Stated</div>
              <div className="hcb">
                <span className="hln"><span>14</span><i style={{ width: "76%" }}></i></span>
                <span className="hln hlit"><span>15</span><i style={{ width: "90%" }}></i></span>
                <span className="hln"><span>16</span><i style={{ width: "54%" }}></i></span>
              </div>
            </div>
            <div className="hc">
              <div className="hch"><u></u>Compiled</div>
              <div className="hcb">
                <span className="hbig">1–25 of <b>128</b></span>
                <span className="hstrk">total=…</span>
              </div>
            </div>
            <div className="hc">
              <div className="hch"><u></u>Checked</div>
              <div className="hcb">
                <span className="hask"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span>Figures traced</span></span>
                <span className="hask"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span>States drawn</span></span>
                <span className="hask q"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg><span>Unknown status</span></span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="band">
        <div className="sec" id="layers" style={{ borderTop: "0", paddingTop: "0" }}>
          <div className="spine">
            <div className="lay">
              <div className="laym"><i>Layer 01</i><b>Stated</b><span className="dot"><u></u>Read before it draws</span></div>
              <div>
                <p>The conventions the model loads with the project: how a figure earns its place on a screen, what a status value is, which states have to exist before a screen counts as finished. <strong>This is the layer that shapes the first draft, and the layer that can drift.</strong></p>
                <div className="keys">
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span><b>Every figure names the data it comes from.</b> No literals, anywhere.</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span><b>Status is data; derived state is computation.</b> Overdue is calculated, never stored.</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span><b>An action is read from the record</b>, not from the row it happens to sit in.</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span><b>Every shell names three expressive choices</b> and gives a reason for each.</span></div>
                </div>
                <div className="out">↓ Shapes the first pass</div>
              </div>
            </div>
            <div className="lay">
              <div className="laym"><i>Layer 02</i><b>Compiled</b><span className="dot"><u></u>Enforced, not described</span></div>
              <div>
                <p>Where a rule can be built into a component instead of written in a file, it is. The rule stops being advice the model can agree with and forget, and becomes something the output has no way to express. <strong>These are the rules that survive a model that disagrees.</strong></p>
                <div className="keys">
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span><b>Pagination derives its own range and total</b> from the array it was given.</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span><b>A count cannot be passed in.</b> There is no prop for it.</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span><b>Empty is a rendered state</b>, not the absence of rows.</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span><b>Overlays portal out of scroll regions</b> and flip when they would leave the viewport.</span></div>
                </div>
                <div className="out">↓ Cannot be violated</div>
              </div>
            </div>
            <div className="lay">
              <div className="laym"><i>Layer 03</i><b>Checked</b><span className="dot"><u></u>Read, not trusted</span></div>
              <div>
                <p>What is left gets audited before anything is handed over. Figures are traced back to named data, status values are confirmed as a closed set with defined transitions, and layouts are verified from phone width to wide desktop. <strong>And where the answer is genuinely unclear, it stops and asks.</strong></p>
                <div className="keys">
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span><b>Every aggregate traced</b> to the array it summarises.</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span><b>Every enum value rendered</b> somewhere in the product.</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span><b>Routes resolve; breadcrumbs land</b> on pages that exist.</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span><b>An unknown status is never absorbed.</b> It is raised, and you decide.</span></div>
                </div>
                <div className="out">↓ Caught before handoff</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="shown" style={{ borderTop: "0", paddingTop: "clamp(18px,1.9vw,25px)", paddingBottom: "clamp(67px,7.2vw,108px)" }}>
          <div className="srail"><span className="l">The three layers</span><span className="r">What each one actually looks like</span></div>
          <div className="shead">
            <h2>Written, built in, and read back.</h2>
            <div>
              <p className="lede">A file the model loads, a component that will not accept a wrong value, and a pass that reads the result before anybody else has to.</p>
              <Link className="snum" href="/rules"><i>01</i><u>One figure, all three →</u></Link>
            </div>
          </div>

          <div className="stage2">
            <div className="card2 s1c">
              <div className="c2h"><u></u>AGENTS.md<em>stated</em></div>
              <div className="c2b">
                <div className="doc2">
                  <div className="hd2"><i>12</i><span>## Derivation</span></div>
                  <div><i>13</i><span></span></div>
                  <div className="mk2"><i>14</i><span>Every figure names the</span></div>
                  <div className="mk2"><i>15</i><span>data it comes from.</span></div>
                  <div><i>16</i><span></span></div>
                  <div><i>17</i><span>Status is data. Derived</span></div>
                  <div><i>18</i><span>state is computed.</span></div>
                  <div><i>19</i><span></span></div>
                  <div className="hd2"><i>20</i><span>## Expression</span></div>
                  <div><i>21</i><span></span></div>
                  <div><i>22</i><span>Every shell names three</span></div>
                  <div><i>23</i><span>choices, with reasons.</span></div>
                </div>
              </div>
            </div>

            <div className="card2 s2c">
              <div className="c2h"><u></u>ListFooter<em>compiled</em></div>
              <div className="c2b">
                <div className="sig">
                  <div><s>{'<'}</s><b>ListFooter</b></div>
                  <div>  <span className="yes">source</span>=<b>{'{'}invoices{'}'}</b></div>
                  <div>  <span className="yes">page</span>=<b>{'{'}page{'}'}</b></div>
                  <div>  <span className="no">total</span>=<s>— no such prop</s></div>
                  <div><s>/{'>'}</s></div>
                </div>
                <div className="foot2"><span>Showing 1–25 of 128</span><span className="bdg">derived</span></div>
              </div>
            </div>

            <div className="card2 s3c">
              <div className="c2h"><u></u>Audit<em>checked</em></div>
              <div className="c2b">
                <div className="chk2"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span>Figures traced to named data</span><em>ok</em></div>
                <div className="chk2"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span>Status values a closed set</span><em>ok</em></div>
                <div className="chk2"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span>Every enum value rendered</span><em>ok</em></div>
                <div className="chk2"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><span>Phone width to wide desktop</span><em>ok</em></div>
                <div className="chk2 ask"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /> <path d="M12 17h.01" /></svg><span>Unknown status <b>partially_settled</b></span><em>asks</em></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="worked">
          <div className="srail"><span className="l">One figure</span><span className="r">Through all three layers</span></div>
          <div className="shead">
            <h2>What that means for a single number.</h2>
            <div>
              <p className="lede">A list footer on an invoices screen. Nothing about it is interesting, which is exactly why it is usually wrong.</p>
              <a className="snum" href="#faq"><i>02</i><u>Straight answers →</u></a>
            </div>
          </div>

          <div className="ex">
            <div className="exh">Showing 1–25 of 128 invoices</div>
            <div className="exg">
              <div className="exc"><div className="t">Stated</div>
                <p>The rules say a figure names the data it comes from, so the footer must be able to point at an array rather than a number.</p></div>
              <div className="exc"><div className="t">Compiled</div>
                <p>The component takes <code>source</code> and derives its own range and total. There is no <code>total</code> prop to pass, so there is nowhere to type one.</p></div>
              <div className="exc"><div className="t">Checked</div>
                <p>The audit confirms the total matches the filtered set, and that an empty result renders its own state rather than <code>0 of 0</code>.</p></div>
            </div>
          </div>
          <div className="hnote">The stated layer would have got this right most of the time. The compiled layer gets it right every time, which is a different kind of claim.</div>
        </div>
      </div>

      <Faq num="03" href="/failure-modes" label="What goes wrong without it →" />
      <ClosingCta
        field
        headline={
          <>
            Judgement, not
            <br />
            a component library.
          </>
        }
        lede="The components are the easy part. What you are missing is the layer that decides what gets computed, what gets shown, and what gets refused."
        primary={{ href: "/pricing", label: "Get Reckon", tear: "Get Reckon" }}
        secondary={{ href: "/products", label: "See a worked product" }}
      />
    </>
  );
}
