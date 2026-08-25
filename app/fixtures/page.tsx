import type { Metadata } from "next";
import Link from "next/link";
import FixtureField from "@/components/fx/FixtureField";
import ClosingCta from "@/components/ClosingCta";
import inline from "@/components/inline";
import {
  demoRows,
  hostileRows,
  states,
  statesNote,
  travel,
  travelNote,
  values,
  valuesNote,
} from "@/lib/fixtures";
import { RosterCard, panels } from "./panels";
import "./fixtures.css";

export const metadata: Metadata = {
  title: "Fixtures and states — the data nobody demos with",
};

export default function FixturesPage() {
  return (
    <>
      <div className="band hband" id="top">
        <div className="khero rin">
          <FixtureField />
          <div className="srail"><span className="l">Fixtures and states</span><span className="r">The data nobody demos with</span></div>
          <h1>Every screen works<br />until the data arrives.</h1>
          <p className="lede">Demo data is polite. Names fit the column, everyone has a salary, and every record is in a state somebody thought about. A real roster is none of those things, and the difference is where an interface stops being a picture.</p>

          {/* Two cards, identical structure, different data — that is the whole
              point, so both are the same component. The left one foots to a
              derived total; the right one cannot, because a salary is missing. */}
          <div className="ktwo">
            <RosterCard title="The demo set" tag="Everything fits" tone="ok" rows={demoRows} />
            <RosterCard title="The fixture" tag="Nothing fits" tone="hard" rows={hostileRows} hit />
          </div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="hostile" style={{ borderTop: 0 }}>
          <div className="srail"><span className="l">Hostile values</span><span className="r">Chosen to break something specific</span></div>
          <div className="shead">
            <h2>A fixture is not sample data. It is an argument.</h2>
            <div>
              <p className="lede">Sample data exists to make a screen look finished. A fixture exists to find out whether it is. Each value below is in the set because it broke something, and it stays because it would break it again.</p>
              <Link className="snum" href="/shells"><i>01</i><u>How shells are handled →</u></Link>
            </div>
          </div>

          {/* every row here names a value drawn in the hero above — keep in step */}
          <div className="kled">
            <div className="hdr">
              <span>The value</span><span>What it exposes</span><span>What the rule says</span>
            </div>
            {values.map((v) => (
              <div key={v.value}>
                <div className="v">{v.value}</div>
                <div className="b">{v.exposes}</div>
                <div className="r">{inline(v.rule)}</div>
              </div>
            ))}
          </div>

          <div className="knote">{valuesNote}</div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="states">
          <div className="srail"><span className="l">The four states</span><span className="r">Drawn, not described</span></div>
          <div className="shead">
            <h2>The four that never make the mockup.</h2>
            <div>
              <p className="lede">Every component ships with them, because they are not edge cases — they are most of a working day. A screen that only has its happy path is a screen that is a quarter finished.</p>
              <Link className="snum" href="/design-system"><i>02</i><u>How they travel →</u></Link>
            </div>
          </div>

          {/* an open quadrant: no card chrome on the cells, the specimen floats
              in .kstage under a bottom mask, the caption sits bottom-left */}
          <div className="kquad">
            {states.map((s, n) => {
              const Panel = panels[n];
              return (
                <div className="kcell" key={s.id}>
                  <div className="kstage"><Panel /></div>
                  <div className="kcap">
                    <h3>{s.title}</h3>
                    <p>{inline(s.blurb)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="knote">{statesNote}</div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="travel">
          <div className="srail"><span className="l">How they travel</span><span className="r">With the product, not beside it</span></div>
          <div className="shead">
            <h2>Fixtures ship with the thing they test.</h2>
            <div>
              <p className="lede">A fixture kept in a separate repository is a fixture nobody runs. Each worked product carries its own, and each component carries the four states it must render.</p>
              <a className="snum" href="#top"><i>03</i><u>Back to the top →</u></a>
            </div>
          </div>

          <div className="kled">
            {travel.map((t) => (
              <div key={t.label}>
                <div className="v">{t.label}</div>
                <div className="b">{t.body}</div>
                <div className="r">{t.note}</div>
              </div>
            ))}
          </div>

          <div className="knote">{travelNote}</div>
        </div>
      </div>

      <ClosingCta
        field
        headline={
          <>
            Ship the screen.
            <br />
            Not the guesswork.
          </>
        }
        lede="Components are the easy part. What you are missing is the layer that decides what gets computed, what gets shown, and what gets refused."
        primary={{ href: "/how-it-works", label: "See how it works", tear: "See how it works" }}
        secondary={{ href: "/products", label: "See a worked product" }}
      />
    </>
  );
}
