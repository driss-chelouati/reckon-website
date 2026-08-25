import type { Metadata } from "next";
import LogField from "@/components/fx/LogField";
import Faq from "@/components/Faq";
import ClosingCta from "@/components/ClosingCta";
import { changeLabel, releases, roadmap } from "@/lib/changelog";
import "./changelog.css";

export const metadata: Metadata = {
  title: "Changelog — what shipped, and what is next",
};

export default function Changelog() {
  return (
    <>
      <div className="band hband">
        <div className="chero rin">
          <LogField />
          <div className="srail"><span className="l">Changelog</span><span className="r">What shipped · what is next</span></div>
          <h1>A rule is only worth<br />as much as its history.</h1>
          <p className="lede">Every change to the layer is written down here, with what moved and why. What is coming is on the same page, because a roadmap kept somewhere else is a wish list.</p>

          <div className="cnow">
            <div><i>Current</i><b>0.6</b><span>The audit pass, and the first four worked products.</span></div>
            <div><i>Rules</i><b>Stated · compiled</b><span>Two layers enforced, the third checked on demand.</span></div>
            <div><i>Cadence</i><b>When it is ready</b><span>No release train. Nothing ships to hit a date.</span></div>
          </div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="shipped" style={{ borderTop: "0" }}>
          <div className="srail"><span className="l">Shipped</span><span className="r">Newest first</span></div>
          <div className="shead">
            <h2>What has moved.</h2>
            <div>
              <p className="lede">Breaking changes are named as such and never quiet. If a rule changes meaning, it gets a new name rather than a new definition.</p>
              <a className="snum" href="#next"><i>01</i><u>What is coming →</u></a>
            </div>
          </div>

          <div className="log">
            {releases.map((r) => (
              <div className={r.current ? "rel2 now" : "rel2"} key={r.version}>
                <div className="rhd">
                  <b>{r.version}</b>
                  <time>{r.when}</time>
                  <span className={r.current ? "rtag cur" : "rtag"}>{r.tag}</span>
                </div>
                <p className="rnote">{r.note}</p>
                <div className="rl2">
                  {r.changes.map((c) => (
                    <div key={c.text}>
                      <em className={c.kind}>{changeLabel[c.kind]}</em>
                      <span>{c.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="cnote">Versions before 0.3 were private. Nothing from them is documented here because nothing from them survived.</div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="next">
          <div className="srail"><span className="l">Next</span><span className="r">With how sure I am about each</span></div>
          <div className="shead">
            <h2>What is coming, and how likely.</h2>
            <div>
              <p className="lede">Confidence is marked rather than implied. Three bars means it is being built now; one means it is an idea I have not earned yet.</p>
              <a className="snum" href="#faq"><i>02</i><u>Straight answers →</u></a>
            </div>
          </div>

          <div className="road">
            {roadmap.map((item) => (
              <div className="rdc" key={item.title}>
                <div className="rdin">
                  <div className="rdh">
                    <span>{item.stage}</span>
                    <span className="conf" aria-label={item.confidenceLabel}>
                      {[0, 1, 2].map((i) => (
                        <u className={i < item.confidence ? "on" : undefined} key={i} />
                      ))}
                    </span>
                  </div>
                  <div className="rdb">
                    <h3>{item.title}</h3>
                    <p>{item.note}</p>
                    <ul>
                      {item.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cnote">Nothing here has a date attached. Dates on a one-person roadmap are a promise made with somebody else’s time.</div>
        </div>
      </div>

      <Faq
        lede="The questions that follow from a log and a roadmap: what breaks, what is promised, and what happens if I stop."
        num="03"
        href="#top"
        label="Back to the top →"
      />
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
