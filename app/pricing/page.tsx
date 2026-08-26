import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import PriceField from "@/components/fx/PriceField";
import PracticeFigure from "@/components/PracticeFigure";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ClosingCta from "@/components/ClosingCta";
import "./pricing.css";

export const metadata = pageMeta(
  "Pricing — a free layer, and the work of applying it",
  "Reckon is free and stays free. What is sold is the judgement behind it: making a real product behave, and writing rules that fit a codebase you already have.",
);

export default function PricingPage() {
  return (
    <>
      <div className="band hband">
        <div className="prhero rin">
          <PriceField />
          <div className="srail"><span className="l">Pricing</span><span className="r">The layer is free · the expertise is not</span></div>
          <h1>The rules cost nothing.<br />Applying them is the work.</h1>
          <p className="lede">Reckon is free and stays free. What I sell is the judgement behind it — the design work of making a real product behave, and of writing rules that fit a codebase somebody already has.</p>

        </div>
      </div>

      <PracticeFigure />

      <Pricing flush />

      <div className="band">
        <div className="sec" id="engagement">
          <div className="srail"><span className="l">Working together</span><span className="r">Fixed scope · no retainer</span></div>
          <div className="shead">
            <h2>Four ways this usually starts.</h2>
            <div>
              <p className="lede">Each one begins the same way: a call, then a written scope with a fixed shape. No discovery phase billed by the hour.</p>
              <Link className="snum" href="/how-to-use"><i>01</i><u>How to use →</u></Link>
            </div>
          </div>

          <div className="eng">
            <div><i>01</i><h3>A product, designed</h3>
              <p>An operational tool taken from a brief to screens a team can build, with the awkward states drawn.</p></div>
            <div><i>02</i><h3>A system, put in order</h3>
              <p>Tokens, components and the conventions around them, documented so the next person does not have to guess.</p></div>
            <div><i>03</i><h3>Rules for your codebase</h3>
              <p>Reckon adapted to what you already have: your components, your naming, your domain and its states.</p></div>
            <div><i>04</i><h3>A second pair of eyes</h3>
              <p>A review of what your agents are producing, and the rules that would stop it happening again.</p></div>
          </div>

          <div className="prnote">Rates depend on scope and start date. Ask, and you get a number and a shape rather than a proposal deck.</div>
        </div>
      </div>

      <Testimonials link={{ num: "02", href: "#faq", label: "Straight answers →" }} />
      <Faq num="03" href="#top" label="Back to the top →" />
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
