import type { Metadata } from "next";
import Link from "next/link";
import ShellField from "@/components/fx/ShellField";
import ClosingCta from "@/components/ClosingCta";
import inline from "@/components/inline";
import {
  archetypes,
  archetypesNote,
  choices,
  choicesNote,
  usage,
  usageNote,
} from "@/lib/shells";
import { RecordStack, specimens } from "./specimens";
import s from "./shells.module.css";

export const metadata: Metadata = {
  title: "Shells and archetypes — four shapes, three choices each",
};

export default function ShellsPage() {
  return (
    <>
      <div className="band hband" id="top">
        <div className={`${s.shero} rin`} data-page-header>
          <ShellField className={s.sfx} />
          <div className="srail"><span className="l">Shells and archetypes</span><span className="r">Four shapes · three choices each</span></div>
          <h1>Business software<br />grows the same parts.</h1>
          <p className="lede">A queue somebody works down. A record somebody opens. A decision somebody commits to. Two sides that have to agree. Almost every operational product is some arrangement of those four, which is why they are worth getting right once.</p>

          {/* two positions, one hairline between them — no boxes, deliberately */}
          <div className={s.srec}>
            <div>
              <i>What a template does</i>
              <b>Fills the page for you</b>
              <p>A template hands over a finished arrangement. Take it and your product looks like every other product that took it, because the decisions were made before anyone knew what you were building.</p>
            </div>
            <div className={s.now}>
              <i>What a shell does</i>
              <b>Names what you must decide</b>
              <p>A shell fixes the parts that are the same everywhere — what a queue owes its reader, what a record page may offer — and then requires three expressive choices, with a reason for each.</p>
            </div>
          </div>

          <RecordStack />
        </div>
      </div>

      <div className="band">
        <div className="sec" id="archetypes" style={{ borderTop: 0 }}>
          <div className="srail"><span className="l">The four</span><span className="r">Each with the rule that defines it</span></div>
          <div className="shead">
            <h2 style={{ maxWidth: "none", textWrap: "balance" }}>Four archetypes, and what each one owes its reader.</h2>
            <div>
              <p className="lede">These are not page layouts. Each is a claim about what a screen of that kind is for, and what it is not allowed to do — which is why the same four survive across claims, billing, clinical and hiring products alike.</p>
              <Link className="snum" href="/fixtures"><i>01</i><u>How fixtures work →</u></Link>
            </div>
          </div>

          {/* an open quadrant: no card chrome on the cells. Exactly one cell
              carries .stack — on all four it reads as a pattern, not an accent. */}
          <div className={s.sgrid}>
            {archetypes.map((a, n) => {
              const Specimen = specimens[n];
              return (
                <div className={s.scell} key={a.id}>
                  <div className={s.sstage}>
                    {a.stacked ? (
                      <div className={s.stack}><div className={s.win}><Specimen /></div></div>
                    ) : (
                      <div className={s.win}><Specimen /></div>
                    )}
                  </div>
                  <div className={s.scap}>
                    <h3>{a.title}</h3>
                    <p>{inline(a.body)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={s.snote}>{archetypesNote}</div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="choices">
          <div className="srail"><span className="l">Three choices</span><span className="r">Required, with a reason each</span></div>
          <div className="shead">
            <h2>The part a shell refuses to decide for you.</h2>
            <div>
              <p className="lede">Constraint alone makes everything look the same, so each shell asks three questions it will not answer. The answers are where a product stops resembling everybody else’s.</p>
            </div>
          </div>

          <div className={s.sch}>
            {choices.map((c) => (
              <div key={c.n}>
                <span className={s.n}>{c.n}</span>
                <div>
                  <h3>{c.title}</h3>
                  <p className={s.q}>{c.question}</p>
                </div>
                <p className={s.a}>{inline(c.answer)}</p>
              </div>
            ))}
          </div>

          <div className={s.snote}>{choicesNote}</div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="using">
          <div className="srail"><span className="l">Using them</span><span className="r">In a brief · in a session · in review</span></div>
          <div className="shead">
            <h2>How a shell gets used.</h2>
            <div>
              <p className="lede">A shell is a paragraph, not a file. It is quoted in a brief, read by the agent, and checked against afterwards.</p>
              <a className="snum" href="#top"><i>03</i><u>Back to the top →</u></a>
            </div>
          </div>

          <div className={s.suse}>
            {usage.map((u) => (
              <div key={u.when}>
                <div className={s.when}><u></u>{u.when}</div>
                <h3>{u.title}</h3>
                <p>{u.body}</p>
                <div className={s.out}><b>{u.outcomeLabel}</b>{u.outcome}</div>
              </div>
            ))}
          </div>

          <div className={s.snote}>{usageNote}</div>
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
