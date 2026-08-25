import type { Metadata } from "next";
import AudienceField from "@/components/fx/AudienceField";
import ClosingCta from "@/components/ClosingCta";
import { claims, fit, fitNote, rows } from "@/lib/audience";
import { figures } from "./figures";
import "./who-its-for.css";

export const metadata: Metadata = {
  title: "Who it is for — designers, developers, teams",
};

export default function WhoItsForPage() {
  return (
    <>
      <div className="band hband" id="top">
        <div className="whero rin">
          <AudienceField />
          <div className="srail"><span className="l">Who it is for</span><span className="r">Designers · developers · the team around them</span></div>
          <h1>One layer, read<br />three different ways.</h1>
          <p className="lede">The same rules do a different job depending on who is holding them. A designer gets room to decide. A developer gets output that compiles. A team gets eight screens that agree with each other without anyone policing it.</p>

          <div className="wtri">
            {claims.map((c) => (
              <div key={c.who}>
                <i>{c.who}</i>
                <b>{c.headline}</b>
                <span>{c.blurb}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Three audience rows. The figures are deliberately not uniform: the
          middle one is boxed, which restores the card frame and suppresses the
          ruled ground behind it — lines behind a panel read as a mistake. */}
      {rows.map((row, n) => {
        const Figure = figures[n];
        const boxed = row.id === "developers";
        return (
          <div className="band" key={row.id}>
            <div className="sec" id={row.id} style={n === 0 ? { borderTop: 0 } : undefined}>
              <div className="srail"><span className="l">{row.rail.left}</span><span className="r">{row.rail.right}</span></div>
              <div className="shead">
                <h2>{row.headline}</h2>
                <div>
                  <p className="lede">{row.lede}</p>
                  <a className="snum" href={row.next.href}><i>{row.next.num}</i><u>{row.next.label}</u></a>
                </div>
              </div>

              <div className="wstack">
                <div className="wrow">
                  <div>
                    <div className="lbl"><u></u>{row.label}</div>
                    <h3>{row.title}</h3>
                    <p>{row.body}</p>
                    <ul className="wgain">
                      {row.gains.map((g) => (
                        <li key={g.text}><span>{g.text}</span><em>{g.tag}</em></li>
                      ))}
                    </ul>
                  </div>
                  <div className={boxed ? "wfig boxed" : "wfig"}><div className="wfigin">
                    <div className="wfh"><span>{row.figure.left}</span><span>{row.figure.right}</span></div>
                    <div className="wfb"><Figure /></div>
                  </div></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="band">
        <div className="sec" id="fit">
          <div className="srail"><span className="l">Fit</span><span className="r">Said plainly, both ways</span></div>
          <div className="shead">
            <h2>Made for some things, and not for others.</h2>
            <div>
              <p className="lede">A layer that claims to suit everything suits nothing in particular. This one is aimed at a specific kind of software, and it is worth saying which.</p>
              <a className="snum" href="#top"><i>04</i><u>Back to the top →</u></a>
            </div>
          </div>

          {/* green tick, rose cross — the values used for held checks and errors
              elsewhere. Coral would read as accent, not approval. */}
          <div className="wfor">
            <div className="wfc yes"><div className="wfcin">
              <h3>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                Made for
              </h3>
              <div>
                <p>{fit.madeFor.lede}</p>
                <ul className="wfl">
                  {fit.madeFor.items.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </div></div>

            <div className="wfc no"><div className="wfcin">
              <h3>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                Not made for
              </h3>
              <div>
                <p>{fit.notFor.lede}</p>
                <ul className="wfl">
                  {fit.notFor.items.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </div></div>
          </div>

          <div className="wnote">{fitNote}</div>
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
