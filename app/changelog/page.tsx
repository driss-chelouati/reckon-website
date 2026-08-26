import { pageMeta } from "@/lib/seo";
import LogField from "@/components/fx/LogField";
import Faq from "@/components/Faq";
import ClosingCta from "@/components/ClosingCta";
import {
  changeLabel,
  foundations,
  now,
  releases,
  roadmap,
  shippedNote,
  unbuilt,
} from "@/lib/changelog";
import "./changelog.css";

export const metadata = pageMeta(
  "Changelog — what shipped, and what is next",
  "Every change to the rules layer, with what moved and why, and what is coming on the same page — because a roadmap kept somewhere else is a wish list.",
);

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
            {now.map((n) => (
              <div key={n.label}><i>{n.label}</i><b>{n.value}</b><span>{n.note}</span></div>
            ))}
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

          <p className="cfound">{foundations}</p>

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

          <div className="cnote">{shippedNote}</div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="next">
          <div className="srail"><span className="l">Next</span><span className="r">In the order it blocks other work</span></div>
          <div className="shead">
            <h2>What is coming, and what it waits on.</h2>
            <div>
              <p className="lede">In the order it blocks other work rather than by date. The licence answer is first, because nothing goes public until it is settled.</p>
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

          <div className="cnote">{unbuilt}</div>
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
