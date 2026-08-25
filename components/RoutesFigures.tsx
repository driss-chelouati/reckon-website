import type { ReactNode } from "react";

/* The four figures beside the routes-in rows, shared by /download and
   /how-to-use. Each draws a different thing — a file listing, a shell
   transcript, a document handed over and what comes back, and one line of a
   file with the changed string marked — so they are components rather than
   data. All four sit in the same three-box well: an outer frame, an inner
   panel, and a headed body. Their CSS is components/routes-in.css, imported by
   RoutesIn. */

function Fig({ head, children }: { head: string; children: ReactNode }) {
  return (
    <div className="ofig">
      <div className="ofigin">
        <div className="ofh"><u className="on"></u>{head}</div>
        <div className="ofb">{children}</div>
      </div>
    </div>
  );
}

/** 01 — what the compiler picks up when the folder lands at a project root */
function Listing() {
  const rows: { name: string; note: string; hit?: boolean }[] = [
    { name: "styles.css", note: "entry", hit: true },
    { name: "tokens/", note: "207", hit: true },
    { name: "components/", note: "54", hit: true },
    { name: "templates/", note: "8", hit: true },
    { name: "scraps/", note: "ignored" },
  ];
  return (
    <Fig head="Picked up on open">
      {rows.map((r) => (
        <div className={r.hit ? "oln hit" : "oln"} key={r.name}>
          <span className="dot"></span>
          <b>{r.name}</b>
          <em>{r.note}</em>
        </div>
      ))}
    </Fig>
  );
}

/** 02 — the folder loading as a skill */
function Shell() {
  return (
    <Fig head="Loaded as a skill">
      <div className="osh"><span>&gt;</span> <b>skills</b> <span>— reckon</span></div>
      <div className="osh"><span>&nbsp;&nbsp;SKILL.md</span> <span className="ok">read</span></div>
      <div className="osh"><span>&nbsp;&nbsp;AGENTS.md</span> <span className="ok">read</span></div>
      <div className="osh"><span>&nbsp;&nbsp;54 prompt files</span> <span className="ok">indexed</span></div>
    </Fig>
  );
}

/** 03 — a document of rules in, an interface out */
function Pass() {
  return (
    <Fig head="Rules in, interface out">
      <div className="opass">
        <div className="opane">
          <u style={{ width: "64%" }}></u>
          <u className="q" style={{ width: "92%" }}></u>
          <u className="q" style={{ width: "80%" }}></u>
          <u className="q" style={{ width: "88%" }}></u>
          <u className="q" style={{ width: "56%" }}></u>
        </div>
        <div className="oarrow">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
        <div className="opane">
          <u style={{ width: "48%" }}></u>
          <div className="blk"><span></span><span></span></div>
          <u className="q" style={{ width: "86%" }}></u>
          <span className="bar"></span>
        </div>
      </div>
    </Fig>
  );
}

/** 04 — the one line a template needs repointed */
function Edit() {
  return (
    <Fig head="One line to change">
      <div className="oedit">
        <b>ds-base.js</b><br />
        <span>const base = </span><mark>&apos;../..&apos;</mark><span>;</span>
        <span className="cap">the only path the template needs</span>
      </div>
    </Fig>
  );
}

/** in the order the steps run */
export const figures = [Listing, Shell, Pass, Edit];
