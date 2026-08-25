import { money } from "@/lib/format";
import { absent, derivable, notDerivable, type Row } from "@/lib/fixtures";

/* The roster card and the four state panels.

   Every button in a state panel is a .kbtn span. Do not select bare elements
   inside .kstate — see the trap noted in fixtures.css. */

/* ---------- the hero cards: identical structure, different data ---------- */

/* One row. The nulls arrive from the fixture and this decides how they look:
   a name that is withheld says so, a salary that was never set says that rather
   than 0.00, and an avatar with no initials to derive draws the dashed circle
   instead of an empty one. That decision belongs here, not in the data. */
function RosterRow({ row, hit }: { row: Row; hit?: boolean }) {
  return (
    <div className={hit ? "krow hit" : "krow"}>
      {row.initials ? (
        <span className="kxav">{row.initials}</span>
      ) : (
        <span className="kxav blank">—</span>
      )}
      <span className={row.name ? "nm" : "nm miss"}>{row.name ?? absent.name}</span>
      <span className={row.salary === null ? "num miss" : "num"}>
        {row.salary === null ? absent.salary : money(row.salary)}
      </span>
      <span className={row.tone ? `st ${row.tone}` : "st"}>{row.status}</span>
    </div>
  );
}

export function RosterCard({
  title,
  tag,
  tone,
  rows,
  hit,
}: {
  title: string;
  tag: string;
  /* ok = the demo set holds, hard = the fixture does not */
  tone: "ok" | "hard";
  rows: Row[];
  hit?: boolean;
}) {
  const total = rows.reduce((n, r) => n + (r.salary ?? 0), 0);
  const canDerive = derivable(rows);
  return (
    <div className="kc"><div className="kcin">
      <div className="kch">
        <span>{title}</span>
        <span className={`tag ${tone}`}><u></u>{tag}</span>
      </div>
      <div className="kcb">
        {rows.map((r, i) => (
          <RosterRow row={r} hit={hit} key={r.name ?? `withheld-${i}`} />
        ))}
      </div>
      {/* a total over a missing salary is not a smaller total, it is not a total */}
      <div className="kcf">
        <span>Committed salary</span>
        {canDerive ? <b>{money(total)}</b> : <b className="bad">{notDerivable}</b>}
      </div>
    </div></div>
  );
}

/* ---------- the four state panels ---------- */

const Glyph = ({ children }: { children: React.ReactNode }) => (
  <span className="gl2">
    <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
  </span>
);

/** 01 — a skeleton shaped like the rows it stands in for, so nothing jumps */
function Loading() {
  const widths = ["74%", "58%", "66%"];
  return (
    <div className="kwin load">
      <div className="top2"><span>Roster</span><span>Loading</span></div>
      {widths.map((w) => (
        <div className="krw" key={w}>
          <span className="cir2"></span>
          <span className="ln2 b" style={{ width: w }}></span>
          <span className="ln2"></span>
          <span className="ln2"></span>
        </div>
      ))}
    </div>
  );
}

/** 02 — states which nothing, gives the count behind the filter, offers a way out */
function Empty() {
  return (
    <div className="kwin">
      <div className="top2"><span>Roster</span><span>0 of 19</span></div>
      <div className="kstate">
        <Glyph>
          <path d="M22 12h-6l-2 3h-4l-2-3H2" />
          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </Glyph>
        <b>No candidates match this filter</b>
        <span className="msg">Nineteen people are on the roster. None of them are on notice.</span>
        <span className="kbtn q">Clear filters</span>
      </div>
    </div>
  );
}

/** 03 — what failed, that it retried, that nothing was submitted, and a reference */
function Error() {
  return (
    <div className="kwin">
      <div className="top2"><span>Roster</span><span>Failed</span></div>
      <div className="kstate err">
        <Glyph>
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </Glyph>
        <b>Could not reach the HR system</b>
        <span className="msg">Retried twice. Nothing was submitted, so nothing was changed.</span>
        <span className="kpair">
          <span className="kbtn">Try again</span>
          <span className="kbtn q">Work offline</span>
        </span>
        <span className="kmono">ref 4c81f0 · 14:22</span>
      </div>
    </div>
  );
}

/** 04 — the record exists, this reader cannot see it, and there is a route to asking */
function Denied() {
  return (
    <div className="kwin">
      <div className="top2"><span>Candidate</span><span>Restricted</span></div>
      <div className="kstate">
        <Glyph>
          <rect width="18" height="11" x="3" y="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </Glyph>
        <b>This record exists. You cannot open it.</b>
        <span className="msg">Salary detail is limited to the hiring manager and the HR partner.</span>
        <span className="kbtn q">Request access</span>
      </div>
    </div>
  );
}

/** in the order the quadrant reads: loading, empty, error, denied */
export const panels = [Loading, Empty, Error, Denied];
