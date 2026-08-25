import type { Metadata } from "next";
import Link from "next/link";
import AuditField from "@/components/fx/AuditField";
import ClosingCta from "@/components/ClosingCta";
import Faq from "@/components/Faq";
import {
  checks,
  checksNote,
  faqLede,
  finding,
  moments,
  momentsNote,
  reach,
  reachNote,
  screen,
  type ReachItem,
} from "@/lib/audit";
import a from "./audit.module.css";

export const metadata: Metadata = {
  title: "The audit pass — rules, checked by name",
};

const Chevron = () => (
  <svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
);

/** one select-style field in the finding panel */
const Field2 = ({ label, value, tone }: { label?: React.ReactNode; value: string; tone?: "crit" | "mut" }) => (
  <div className={a.audfield}>
    {label ? <em>{label}</em> : null}
    <div className={tone === "mut" ? `${a.audsel} ${a.mut}` : a.audsel}>
      <span className={tone === "crit" ? `${a.val} ${a.crit}` : a.val}>{value}</span>
      <Chevron />
    </div>
  </div>
);

const ReachCard = ({ card, quiet }: { card: { title: string; lede: string; items: ReachItem[] }; quiet?: boolean }) => (
  <div className={quiet ? `${a.acc} ${a.no}` : a.acc}><div className={a.accin}>
    <h3>{card.title}</h3>
    {/* the paragraph is two levels down — see the depth trap in audit.module.css */}
    <div>
      <p>{card.lede}</p>
      <ul className={a.acl}>
        {card.items.map((it) => (
          <li key={it.text}><span>{it.text}</span><em>{it.tag}</em></li>
        ))}
      </ul>
    </div>
  </div></div>
);

export default function AuditPage() {
  return (
    <>
      <div className="band hband" id="top">
        <div className={`${a.ahero} rin`} data-page-header>
          <AuditField className={a.afx} />
          <div className="srail"><span className="l">The audit pass</span><span className="r">The checked layer · run on demand</span></div>
          <h1>A rule nobody runs<br />is a rule nobody keeps.</h1>
          <p className="lede">The stated layer asks. The compiled layer enforces. The audit is what catches everything in between — a pass over a finished screen that reports, by name, which rules it broke and where.</p>

          {/* Two panels, and the overlap is the composition: the back one ends
              at 45%, the front starts at 33%. Side by side, the point is lost. */}
          <div className={a.audstage} aria-hidden="true">

            <div className={a.audback}>
              <div className={a.audbar}>
                <span className={a.ref}><u></u>{screen.ref}</span>
                <span className={a.pg}>
                  <b>{screen.page}</b> / {screen.of}
                  <svg viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                  <svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                </span>
              </div>
              <div className={a.audbody}>
                <h4>{screen.title}</h4>
                <p className={a.cap2}>{screen.caption}</p>
                <ol className={a.audsteps}>
                  {screen.steps.map((st) => (
                    <li className={st.hit ? a.hit : undefined} key={st.text}>{st.text}</li>
                  ))}
                </ol>

                <p className={a.audfind}>Findings</p>
                <div className={a.audlog}>
                  {screen.log.map((l) => (
                    <div className={l.ok ? a.ok : a.no} key={l.rule}>
                      {l.ok ? (
                        <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
                      ) : (
                        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                      )}
                      <span><b>{l.rule} {l.verdict}</b> · {l.text} · 1.9s</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={a.audnote}>{screen.note}</div>
            </div>

            <div className={a.audfront}>
              <div className={a.audhd}>
                <span className={a.who2}>
                  <span className={a.kicker}>Audit finding</span>
                  <span className={a.ttl}>{finding.group} · rule {finding.rule}</span>
                </span>
                <span className={a.audverdict}><u></u>{finding.verdict}</span>
              </div>
              <div className={a.audfields}>
                <Field2 label="Rule group" value={finding.group} />
                <Field2 label="Rule" value={`${finding.rule} · ${finding.detail}`} />
                <Field2 label="Verdict" value={finding.verdict} tone="crit" />
                {/* the last field's second entry trails off under the mask —
                    that implies more without drawing it */}
                <Field2
                  label={<>Affected screens <span>({finding.screens.length})</span></>}
                  value={finding.screens[0]}
                  tone="mut"
                />
                <Field2 value={finding.screens[1]} tone="mut" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="reach" style={{ borderTop: 0 }}>
          <div className="srail"><span className="l">Reach</span><span className="r">What a pass can and cannot settle</span></div>
          <div className="shead">
            <h2 style={{ maxWidth: "none", textWrap: "balance" }}>It checks what is true, not what is good.</h2>
            <div>
              <p className="lede">An audit that claimed to judge taste would be wrong constantly and trusted briefly. This one only reports things that are decidable by looking — which turns out to be most of what actually goes wrong.</p>
              <Link className="snum" href="/fixtures"><i>01</i><u>What it checks →</u></Link>
            </div>
          </div>

          <div className={a.acan}>
            <ReachCard card={reach.decidable} />
            <ReachCard card={reach.notDecidable} quiet />
          </div>

          <div className={a.anote}>{reachNote}</div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="checks">
          <div className="srail"><span className="l">The checks</span><span className="r">Grouped by what they defend</span></div>
          <div className="shead">
            <h2>Sixty rules, and what each pass looks for.</h2>
            <div>
              <p className="lede">Every check names the rule it came from, so a finding is never a matter of style. If a rule is removed, its check goes with it.</p>
              <Link className="snum" href="/how-it-works"><i>02</i><u>How it runs →</u></Link>
            </div>
          </div>

          {/* counts come from lib/rules.ts, so they cannot drift from /rules */}
          <div className={a.achk}>
            <div className={a.hdr}><span>Group</span><span>What the pass looks for</span><span>Checks</span></div>
            {checks.map((c) => (
              <div key={c.group}>
                <h3>{c.group}</h3>
                <p>{c.blurb}</p>
                <span className={a.ct}>{c.count} checks</span>
              </div>
            ))}
          </div>

          <div className={a.anote}>{checksNote}</div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="when">
          <div className="srail"><span className="l">Running it</span><span className="r">Today by hand · soon by command</span></div>
          <div className="shead">
            <h2>Three moments worth running it.</h2>
            <div>
              <p className="lede">It reads a finished screen, so it can run at any point after there is something to read. In practice there are three that matter.</p>
              <a className="snum" href="#faq"><i>03</i><u>Straight answers →</u></a>
            </div>
          </div>

          <div className={a.awhen}>
            {moments.map((m) => (
              <div key={m.when}>
                <i>{m.when}</i>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
                {m.soon ? <span className={a.soon}>{m.soon}</span> : null}
              </div>
            ))}
          </div>

          <div className={a.anote}>{momentsNote}</div>
        </div>
      </div>

      <Faq num="04" href="#top" label="Back to the top →" lede={faqLede} />

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
