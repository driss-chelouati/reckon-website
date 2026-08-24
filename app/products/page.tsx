import type { Metadata } from "next";
import ShowcaseField from "@/components/fx/ShowcaseField";
import ProductIndex from "@/components/ProductIndex";
import ClosingCta from "@/components/ClosingCta";
import "./showcase.css";

export const metadata: Metadata = {
  title: "Showcase — whole products, not screens",
};

export default function Products() {
  return (
    <>
      <div className="band hband">
        <div className="xhero rin">
          <ShowcaseField />
          <div className="srail"><span className="l">Showcase</span><span className="r">Whole products, not screens</span></div>
          <h1>Everything the rules have built.</h1>
          <p className="lede">Each was generated from a plain-language brief written by somebody describing their job, then audited number by number. Each has its own routes, its own status values and its own deliberately unkind data.</p>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="all" style={{ borderTop: 0, paddingTop: 0 }}>
          <ProductIndex />

          <div className="xnote">
            <span>Every card names the case that breaks it — <b>those are the screens worth opening first</b></span>
            <span>More in progress</span>
          </div>
        </div>
      </div>

      <ClosingCta
        headline={
          <>
            One brief in.
            <br />
            A whole product out.
          </>
        }
        lede="None of these were assembled screen by screen. They were described once, in plain language, and audited afterwards."
        primary={{ href: "/how-it-works", label: "See how it works", tear: "See how it works" }}
        secondary={{ href: "/pricing", label: "What it costs" }}
      />
    </>
  );
}
