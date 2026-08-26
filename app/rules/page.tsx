import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import RulesField from "@/components/fx/RulesField";
import ClosingCta from "@/components/ClosingCta";
import Faq from "@/components/Faq";
import inline from "@/components/inline";
import {
  anatomy,
  anatomyNotes,
  coverage,
  coverageNote,
  faqLede,
  loading,
  loadingNote,
  moments,
  specimen,
} from "@/lib/rules";
import RuleDoc from "./docs";
import "./rules.css";

export const metadata = pageMeta(
  "The rules file — one document, read before it draws",
  "One markdown document, read at the start of a session and governing every screen after it — a set of claims about what a business screen is, not a style guide.",
);

/** the level pill: coral compiled, blue checked, grey stated */
const Pill = ({ level, label }: { level: string; label: string }) => (
  <span className={`lv ${level}`}><u></u>{label}</span>
);

export default function RulesPage() {
  return (
    <>
      <div className="band hband" id="top">
        <div className="rhero rin">
          <RulesField />
          <div className="srail"><span className="l">The rules file</span><span className="r">Plain markdown · nothing to run</span></div>
          <h1>One file the model<br />reads before it draws.</h1>
          <p className="lede">The stated layer is a single markdown document. It is read at the start of a session and it governs every screen after that — not a style guide, but a set of claims about what a business screen is allowed to do.</p>

          {/* One rule as a technical specimen. The three risers are drawn by
              .rann > div::before/::after — the ring sits on the statement's
              lower edge, and only the first is filled. */}
          <div className="rspec"><div className="rspin">
            <div className="rsh">
              <span className="id">{specimen.id}</span>
              <span className="lvl"><u></u>{specimen.level}</span>
            </div>
            <div className="rsbody">
              <p className="rstate">
                {specimen.statement.before}
                <em>{specimen.statement.em}</em>
                {specimen.statement.after}
              </p>
              <div className="rann">
                {specimen.risers.map((r) => (
                  <div className={r.on ? "on" : undefined} key={r.label}>
                    <i>{r.label}</i>
                    <p>{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div></div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="anatomy" style={{ borderTop: 0 }}>
          <div className="srail"><span className="l">Anatomy</span><span className="r">Three parts, and none of them optional</span></div>
          <div className="shead">
            <h2>Every rule states what, why, and how it is held.</h2>
            <div>
              <p className="lede">A rule with no reason gets argued with. A rule with no enforcement level is a preference wearing a uniform. Both parts are required, which is what keeps the file from drifting into taste.</p>
              <Link className="snum" href="/rules"><i>01</i><u>Where it shows up →</u></Link>
            </div>
          </div>

          <div className="anat">
            <div className="acard"><div className="acin">
              {anatomy.map((part) => (
                <div className="apart" key={part.label}>
                  <i>{part.label}</i>
                  {part.claim ? (
                    <b>{part.text}</b>
                  ) : (
                    <p>
                      {part.pill ? <><Pill level={part.pill.level} label={part.pill.label} /> &nbsp;</> : null}
                      {part.text}
                    </p>
                  )}
                </div>
              ))}
            </div></div>

            <div className="anote">
              {anatomyNotes.map((n) => (
                <div key={n.title}>
                  <h3>{n.title}</h3>
                  <p>{n.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="moments">
          <div className="srail"><span className="l">Where it shows up</span><span className="r">One file · four moments</span></div>
          <div className="shead">
            <h2>The same document, at four points in the work.</h2>
            <div>
              <p className="lede">It is not read once and filed. The rules file is quoted in the brief, loaded before the first screen is drawn, and read again by the pass that checks the result.</p>
              <Link className="snum" href="/audit"><i>02</i><u>What it covers →</u></Link>
            </div>
          </div>

          {/* CSS-only tabs, radio group "rt" — distinct from the FAQ's "qa" so
              picking a tab cannot clear an open answer. The panes are shown by
              #rtN:checked ~ .rtpanes .paneN, so the inputs must stay direct
              children of .rtabs and precede both .rtnav and .rtpanes. */}
          <div className="rtabs">
            {moments.map((m, i) => (
              <input key={m.id} type="radio" name="rt" id={m.id} defaultChecked={i === 0} />
            ))}

            <div className="rtnav">
              {moments.map((m) => (
                <label htmlFor={m.id} key={m.id}>
                  <b>{m.label}</b>
                  <span>{m.blurb}</span>
                </label>
              ))}
            </div>

            <div className="rtpanes">
              {moments.map((m, i) => (
                <div className={`rtpane pane${i + 1}`} key={m.id}>
                  <RuleDoc doc={m.doc} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="covers">
          <div className="srail"><span className="l">Coverage</span><span className="r">Six groups · the level marked on each</span></div>
          <div className="shead">
            <h2>What the file argues about.</h2>
            <div>
              <p className="lede">Not colour, spacing or type — those are tokens, and they are somebody’s brand rather than anybody’s judgement. These are the decisions that make a business screen correct or wrong.</p>
              <Link className="snum" href="/shells"><i>03</i><u>How it loads →</u></Link>
            </div>
          </div>

          <div className="grp">
            {coverage.map((g) => (
              <div key={g.name}>
                <div className="hd"><h3>{g.name}</h3><span className="ct">{g.count} rules</span></div>
                <p>{g.blurb}</p>
                <Pill level={g.level} label={g.levelLabel} />
              </div>
            ))}
          </div>

          <div className="rfoot">{coverageNote}</div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="loading">
          <div className="srail"><span className="l">Loading it</span><span className="r">One file · no runtime</span></div>
          <div className="shead">
            <h2>Nothing to install.</h2>
            <div>
              <p className="lede">It is markdown. Every route below is the same file arriving in a different place.</p>
              <a className="snum" href="#faq"><i>04</i><u>Straight answers →</u></a>
            </div>
          </div>

          <div className="grp">
            {loading.map((r) => (
              <div key={r.name}>
                <div className="hd"><h3>{r.name}</h3><span className="ct">{r.how}</span></div>
                <p>{inline(r.body)}</p>
              </div>
            ))}
          </div>

          <div className="rfoot" style={{ marginTop: "clamp(22px,2.6vw,32px)" }}>{loadingNote}</div>
        </div>
      </div>

      <Faq num="05" href="#top" label="Back to the top →" lede={faqLede} />

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
