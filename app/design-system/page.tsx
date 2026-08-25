import type { Metadata } from "next";
import Link from "next/link";
import SystemField from "@/components/fx/SystemField";
import ClosingCta from "@/components/ClosingCta";
import { specimens } from "./specimens";
import "./design-system.css";

export const metadata: Metadata = {
  title: "The design system — components, tokens and shells",
};

export default function DesignSystem() {
  return (
    <>
      <div className="band hband">
        <div className="dhero rin">
          <SystemField />
          <div className="srail"><span className="l">The design system</span><span className="r">Components · tokens · shells</span></div>
          <h1>The components are<br />the easy part.</h1>
          <p className="lede">A component set with tokens you can point at your own brand, packaged so Claude Design picks it up on load. It sits on whichever primitives you already use — what makes it worth having is that every state is drawn and every value is defined.</p>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="tokens" style={{ borderTop: "0" }}>
          <div className="srail"><span className="l">Tokens</span><span className="r">Yours to set</span></div>
          <div className="shead">
            <h2>Point it at your brand.</h2>
            <div>
              <p className="lede">Colour, radius and type are variables. The look is a configuration change; the judgement underneath is not.</p>
              <a className="snum" href="#components"><i>01</i><u>The components →</u></a>
            </div>
          </div>

          <div className="tok">
            <div className="tokc"><div className="tokin">
              <div className="tokt"><b>Colour tokens</b><span>A neutral scale that carries the interface, and one accent you point wherever you like.</span></div>
              <div className="tokv"><div className="acnt"><i style={{ "--h": "0" } as React.CSSProperties}></i><i style={{ "--h": "0" } as React.CSSProperties}></i><i style={{ "--h": "0" } as React.CSSProperties}></i><i style={{ "--h": "18" } as React.CSSProperties}></i><i style={{ "--h": "18" } as React.CSSProperties}></i><i style={{ "--h": "18" } as React.CSSProperties}></i></div></div>
            </div></div>
            <div className="tokc"><div className="tokin">
              <div className="tokt"><b>Radius</b><span>Every radius is a stop on one scale, and nested shapes stay concentric.</span></div>
              <div className="tokv"><div className="rads"><div className="sq4"></div></div></div>
            </div></div>
            <div className="tokc"><div className="tokin">
              <div className="tokt"><b>Type</b><span>A face for headings, one for reading, and one that holds figures in columns.</span></div>
              <div className="tokv"><div className="typ"><div><b className="s1">Aa</b><em>display</em></div><div><b className="s2 mut">Awaiting survey</b><em>text</em></div><div><b className="s3">128,400.00</b><em>tabular</em></div></div></div>
            </div></div>
          </div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="components">
          <div className="srail"><span className="l">Components</span><span className="r">Every state drawn, not only the happy one</span></div>
          <div className="shead">
            <h2>The inventory is the easy half.</h2>
            <div>
              <p className="lede">The inventory is unremarkable and deliberately so. What is added is the part that is usually left to the person implementing it: what each control means, and when it may not be offered.</p>
              <Link className="snum" href="/shells"><i>02</i><u>Shells and archetypes →</u></Link>
            </div>
          </div>

      <div className="cgrid">
        {specimens.map((s) => (
          <div className="cmp" key={s.name}>
            <div className="cwell">
              <div className="cm">
                <h3>{s.name}</h3>
                <p>{s.description}</p>
              </div>
              <div className="cv">
                <div className="ab">{s.art}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

          <div className="dnote">Ships on Coss UI out of the box, and adapts to the primitives you already use. Either way each component arrives with its loading, empty, error and permission-denied states — the four that never make the mockup and always make the bug list.</div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="shells">
          <div className="srail"><span className="l">Shells and archetypes</span><span className="r">The parts every business app grows</span></div>
          <div className="shead">
            <h2>Constraint alone makes everything look the same.</h2>
            <div>
              <p className="lede">So the shells are recipes, not templates. Each one must name three expressive choices and give a reason for each — which is where a product stops looking like everybody else’s.</p>
              <Link className="snum" href="/products"><i>03</i><u>See them built →</u></Link>
            </div>
          </div>

          <div className="arch">
            <div><i>Archetype 01</i><h3>Work queue</h3>
              <p>A list somebody acts on, sorted by what is burning down rather than by what arrived last.</p>
              <span className="m4">severity orders the list</span></div>
            <div><i>Archetype 02</i><h3>Record page</h3>
              <p>One object, its figures traced, and only the actions its current state permits.</p>
              <span className="m4">actions read from the record</span></div>
            <div><i>Archetype 03</i><h3>Decision surface</h3>
              <p>Where somebody commits. Gated on evidence, and explicit about what cannot be undone.</p>
              <span className="m4">gated, and reversible where it can be</span></div>
            <div><i>Archetype 04</i><h3>Reconciliation view</h3>
              <p>Two sides that must agree, with the difference named rather than left to arithmetic.</p>
              <span className="m4">the difference is a first-class figure</span></div>
          </div>
        </div>
      </div>

      <ClosingCta
        headline={
          <>
            Your look.
            <br />
            Not your judgement.
          </>
        }
        lede="Point the tokens wherever you like. The rules about derivation, affordance and coverage are not configurable, because they are the product."
        primary={{ href: "/pricing", label: "Get Reckon", tear: "Get Reckon" }}
        secondary={{ href: "/how-it-works", label: "How it works" }}
      />
    </>
  );
}
