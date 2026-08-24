/* Three failure modes, read across: what goes wrong, then the rule that closes
   it. The full set lives on /failure-modes; these three are the landing page's
   sample. */
const pairs = [
  {
    mode: "Mode 01",
    title: "A filter that counts the wrong thing",
    wrong:
      "A filter reading “All statuses (11)” — where 11 was the number of records, not the number of statuses. Nobody catches it, because it looks like a count.",
    rule: "Every figure names the data it comes from. A count that cannot say which set it counted does not render.",
  },
  {
    mode: "Mode 02",
    title: "A control that lies about when it applies",
    wrong:
      "A confirmation dialog offering to void an invoice the data settled fourteen minutes earlier. The row looked like every other row.",
    rule: "Status is data; derived state is not status. The action is read from the record, and the count above stops calling it actionable.",
  },
  {
    mode: "Mode 03",
    title: "A footer that invents its own total",
    wrong:
      "A list reading “Showing 1–25 of 128” where 128 was typed, or a counter padded until it reads “1 / 2” on a set of one.",
    rule: "This one is compiled rather than stated. Pagination derives its own range and total from the real set, so the footer cannot carry a made-up number.",
  },
];

export default function FailureModes() {
  return (
    <div className="band">
      <div className="sec" id="pairs">
        <div className="srail">
          <span className="l">Failure modes</span>
          <span className="r">What goes wrong · the rule that closes it</span>
        </div>

        <div className="shead">
          <h2>Every rule exists because something broke.</h2>
          <div>
            <p className="lede">
              Not hypotheticals. Each is a specific way generated business UI goes wrong underneath
              a finished-looking surface — and each has a rule written against it.
            </p>
            <a className="snum" href="#machinery">
              <i>04</i>
              <u>How the rules hold →</u>
            </a>
          </div>
        </div>

        <div className="prs">
          {pairs.map((p) => (
            <div className="pr" key={p.mode}>
              <div className="q">
                <i>{p.mode}</i>
                {p.title}
              </div>
              <div className="c bad">
                <b>Goes wrong</b>
                {p.wrong}
              </div>
              <div className="c good">
                <b>The rule</b>
                {p.rule}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
