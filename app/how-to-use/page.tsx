import { pageMeta } from "@/lib/seo";
import HowToField from "@/components/fx/HowToField";
import ClosingCta from "@/components/ClosingCta";
import Faq from "@/components/Faq";
import RoutesIn from "@/components/RoutesIn";
import inline from "@/components/inline";
import { cost, faqLede, snags, snagsNote } from "@/lib/howto";
import "./how-to-use.css";

export const metadata = pageMeta(
  "How to use it — four routes in, nothing to install",
  "No package to add, no config to write and no build step. Four ways to put one folder somewhere a model can read it, and what each of them is good for.",
);

export default function HowToUsePage() {
  return (
    <>
      <div className="band hband" id="top">
        <div className="hthero rin">
          <HowToField />
          <div className="srail"><span className="l">How to use it</span><span className="r">Four routes in · nothing to install</span></div>
          <h1>Open the folder.<br />That is the install.</h1>
          <p className="lede">There is no package to add, no config to write and no build step to wire up. Everything below is a way of putting one folder somewhere a model can read it, and the differences between them are about where you already work.</p>

          {/* three figures, and the three answers are the argument — display
              type, not a list */}
          <div className="htnow">
            {cost.map((c) => (
              <div key={c.label}>
                <i>{c.label}</i>
                <b>{c.answer}</b>
                <span>{c.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* the same component /download uses — one copy, in components/RoutesIn */}
      <RoutesIn
        flush
        railLeft="Getting started"
        railRight="Nothing to configure"
        headline="Four routes in."
        lede="The first needs no configuration at all. The rest are one line, one paste, or one path."
        next={{ num: "01", href: "/products", label: "Explore real products →" }}
      />

      <div className="band">
        <div className="sec" id="snags">
          <div className="srail"><span className="l">When it does not work</span><span className="r">Four things, in order of likelihood</span></div>
          <div className="shead">
            <h2>The four things that actually go wrong.</h2>
            <div>
              <p className="lede">None of them are subtle once you know about them, and all four are the same mistake: something moved that the folder expected to find where it was.</p>
              <a className="snum" href="#faq"><i>02</i><u>Straight answers →</u></a>
            </div>
          </div>

          <div className="htfix">
            {snags.map((s) => (
              <div key={s.title}>
                <h3>{s.title}</h3>
                <p>{inline(s.body)}</p>
              </div>
            ))}
          </div>

          <div className="htnote">{snagsNote}</div>
        </div>
      </div>

      <Faq num="03" href="#top" label="Back to the top →" lede={faqLede} />

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
