import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import DownloadField from "@/components/fx/DownloadField";
import ClosingCta from "@/components/ClosingCta";
import { counts, limits, provenance, routes } from "@/lib/download";
import inline from "@/components/inline";
import RoutesIn from "@/components/RoutesIn";
import "./download.css";

export const metadata = pageMeta(
  "The design system — free to take",
  "Plain CSS, plain JSX, plain HTML. No bundler, no package install, no build — drop the folder into a project and the tokens, components and prototypes are there.",
);

const Tick = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function DownloadPage() {
  return (
    <>
      <div className="band hband" id="top">
        <div className="ohero rin">
          <DownloadField />
          <div className="srail"><span className="l">The design system</span><span className="r">Free · AGPL-3.0 · no build step</span></div>
          <h1>A design system<br />with nothing to install.</h1>
          <p className="lede">Plain CSS, plain JSX transpiled in the page, plain HTML. No bundler, no package install, no build. Drop the folder into a project and the tokens, components, specimen cards and eight working prototypes are already there.</p>

          <div className="ocount">
            {counts.map((c) => (
              <div key={c.n}><b>{c.n}</b><span>{c.label}</span></div>
            ))}
          </div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="get" style={{ borderTop: 0 }}>
          <div className="srail"><span className="l">Three ways in</span><span className="r">A copy · the project · the documents</span></div>
          <div className="shead">
            <h2>Take a copy, clone it, or read it.</h2>
            <div>
              <p className="lede">They are not the same thing. The archive is a copy that will never change under you. The repository is the living project. The markdown is the reasoning on its own, for reading or for handing to an agent.</p>
              <Link className="snum" href="/how-to-use"><i>01</i><u>Getting started →</u></Link>
            </div>
          </div>

          {/* one card, one internal hairline: .ogcol + .ogcol:not(.ogcol--in).
              The inset column draws its own border, so it needs no divider —
              and its 14px radius sits inside the wrap's 24px on 10px of
              padding, which is what keeps the corners concentric. */}
          <div className="ogwrap">
            {routes.map((r) => (
              <div className={r.inset ? "ogcol ogcol--in" : "ogcol"} key={r.id}>
                <div className="ogh"><span>{r.kicker}</span><span className="who">{r.who}</span></div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
                <ul className="ogl">
                  {r.items.map((item) => (
                    <li key={item}><Tick /><span>{inline(item)}</span></li>
                  ))}
                </ul>
                <div className="ogf">
                  <a
                    className={r.cta.primary ? "cta" : "btn-n"}
                    href={r.cta.href}
                    data-t={r.cta.primary ? r.cta.label : undefined}
                    download={r.cta.download || undefined}
                    target={r.cta.target}
                    rel={r.cta.rel}
                  >
                    {r.cta.label}
                  </a>
                  <span className="ogm">{r.cta.meta}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="onote">All three carry the same rules. What differs is how much of the machinery comes with them.</div>
        </div>
      </div>

      <RoutesIn
        railLeft="Getting started"
        railRight="Nothing to configure"
        headline="Four ways in."
        lede="The first needs no configuration at all. The rest are one line, one paste, or one path."
        next={{ num: "02", href: "/failure-modes", label: "Provenance and limits →" }}
      />

      <div className="band">
        <div className="sec" id="provenance">
          <div className="srail"><span className="l">Provenance</span><span className="r">Open source, credited</span></div>
          <div className="shead">
            <h2>Where it came from, and what it is not.</h2>
            <div>
              <p className="lede">None of this is buried, because none of it should be. Read it before you ship something built on it.</p>
              <a className="snum" href="#top"><i>03</i><u>Back to the top →</u></a>
            </div>
          </div>

          <div className="oprov">
            {provenance.map((p) => (
              <div className="opb" key={p.title}>
                <h3><Tick />{p.title}</h3>
                {p.paras.map((para, n) => (
                  <p key={n}>{inline(para)}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="olim">
            {limits.map((l) => (
              <div key={l.label}>
                <em>{l.label}</em>
                <span>{inline(l.body)}</span>
              </div>
            ))}
          </div>
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
