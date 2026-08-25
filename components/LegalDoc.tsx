import inline from "@/components/inline";
import MailReveal from "@/components/MailReveal";
import { type Block, type Section } from "@/lib/legal";
import "./legal-doc.css";

/* The layout both quiet documents share: a header, a sticky section index, and
   the prose beside it. One component, two content sets — the index is generated
   from the section list it is given, so adding a section cannot leave it stale.

   No scene and no canvas here on purpose: these pages load no three.js at all. */

/* The address is never assembled on the server. The two halves travel as
   separate props and are joined in the browser on click — see MailReveal. */
const MAIL_USER = "driss.chelouati";
const MAIL_DOMAIN = "gmail.com";

function Blocks({ body }: { body: Block[] }) {
  return (
    <>
      {body.map((b, i) => {
        if ("p" in b) return <p key={i}>{inline(b.p)}</p>;
        if ("ul" in b) {
          return (
            <ul key={i}>
              {b.ul.map((li) => <li key={li}>{inline(li)}</li>)}
            </ul>
          );
        }
        return (
          <div className="lfacts" key={i}>
            {b.facts.map((f) => (
              <div key={f.label}>
                <em>{f.label}</em>
                <span>
                  {f.email ? (
                    <MailReveal user={MAIL_USER} domain={MAIL_DOMAIN} />
                  ) : (
                    inline(f.value ?? "")
                  )}
                </span>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}

export default function LegalDoc({
  rail,
  railRight,
  heading,
  lede,
  meta,
  sections,
}: {
  rail: string;
  railRight: string;
  heading: string;
  lede: string;
  /** the mono strip under the lede — different on each document */
  meta: string[];
  sections: Section[];
}) {
  return (
    <>
      <div className="band hband" id="top">
        <div className="lhero rin">
          <div className="srail"><span className="l">{rail}</span><span className="r">{railRight}</span></div>
          <h1>{heading}</h1>
          <p className="lede">{lede}</p>
          <div className="lmeta">
            {meta.map((m) => <span key={m}>{inline(m)}</span>)}
          </div>
        </div>
      </div>

      <div className="band">
        <div className="ldoc">
          {/* a <nav>, which is why the resets in legal-doc.css matter */}
          <nav className="lnav" aria-label="Sections">
            <span className="t">On this page</span>
            {sections.map((s) => (
              <a href={`#${s.id}`} key={s.id}>{s.title}</a>
            ))}
          </nav>

          <div className="lbody">
            {sections.map((s) => (
              <div className="lsec" id={s.id} key={s.id}>
                <h2>{s.title}</h2>
                <Blocks body={s.body} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
