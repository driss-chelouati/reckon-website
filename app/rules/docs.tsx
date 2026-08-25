import type { ReactElement } from "react";
import inline from "@/components/inline";
import type { Doc, DocIcon } from "@/lib/rules";

/* The four document panes in #moments. One shape driven by data — breadcrumb
   bar, tile, heading, meta, prose, subheading, bullets, closing paragraph — so
   only the icons are drawn here.

   The pane class names are .rdoc/.rfoot rather than the source's .doc2/.rnote;
   app/rules/rules.css says why. */

const glyphs: Record<DocIcon, ReactElement> = {
  file: (
    <>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </>
  ),
  pencil: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </>
  ),
  bot: (
    <>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
};

/* the tile carries a fuller version of the file mark than the breadcrumb does */
const tileGlyphs: Record<DocIcon, ReactElement> = {
  ...glyphs,
  file: (
    <>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </>
  ),
};

const Icon = ({ name, tile }: { name: DocIcon; tile?: boolean }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">{tile ? tileGlyphs[name] : glyphs[name]}</svg>
);

const Chevron = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
);

/* the two quiet marks at the right of every breadcrumb bar */
const Tools = () => (
  <span className="tools">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
    </svg>
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  </span>
);

export default function RuleDoc({ doc }: { doc: Doc }) {
  return (
    <div className="rdoc">
      <div className="bar3">
        <span className="crumb">
          <Icon name={doc.crumb.icon} />
          <b>{doc.crumb.root}</b>
          <Chevron />
          {doc.crumb.leaf}
        </span>
        <Tools />
      </div>
      <div className="body3">
        <span className="tile3"><Icon name={doc.tile} tile /></span>
        <h4>{doc.heading}</h4>
        <p className="meta4">{inline(doc.meta)}</p>
        <p>{inline(doc.intro)}</p>
        <h5>{doc.subhead}</h5>
        <ul>
          {doc.bullets.map((b) => (
            <li key={b.text}>
              {b.rule ? <><span className="rulez">{b.rule}</span> &nbsp;</> : null}
              {b.text}
            </li>
          ))}
        </ul>
        <p>{doc.outro}</p>
      </div>
    </div>
  );
}
