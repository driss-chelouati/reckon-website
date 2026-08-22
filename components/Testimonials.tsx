type Quote = { className: string; dots?: boolean; kicker: string; quote: string; who: string; role: string };

const QUOTES: Quote[] = [
  {
    className: "tq tq--lead",
    kicker: "One product, not eleven",
    quote: "Eight screens that felt like they were designed by the same person on the same day. That is the part I could never get out of a generator.",
    who: "Joel Kaminski",
    role: "Founder · Ledgerline",
  },
  {
    className: "tq tq--tall tq--feat",
    dots: true,
    kicker: "The same object, everywhere",
    quote: "An invoice behaved like an invoice on every screen it appeared on. Same label, same states, same actions available in the same order, whether it was a row in a list or the whole page. We used to lose a week reconciling those differences after the fact — three designers, three mental models of the same record, and nobody noticing until QA. Here the model of the domain was decided once, and everything downstream inherited it.",
    who: "Ana Ferreira",
    role: "Front-end engineer · Kestrel Health",
  },
  {
    className: "tq tq--half",
    kicker: "What a screen is for",
    quote: "It stopped giving me a dashboard when what I described was a queue. Somebody has clearly thought about the difference between software you read and software you act in — and the numbers on it are load-bearing rather than decorative, which is the same insight applied twice.",
    who: "Marta Ilves",
    role: "Design lead · Vantage Freight",
  },
  {
    className: "tq tq--sm",
    kicker: "Hierarchy",
    quote: "The most severe row is the one you see first. Sounds obvious. Nothing else does it.",
    who: "Tom Sørensen",
    role: "Engineer · Meridian Billing",
  },
  {
    className: "tq tq--wide",
    kicker: "The unglamorous half",
    quote: "Empty, permission-denied, filtered-to-nothing, the record somebody archived last week. Those screens are most of the actual experience in an internal tool, and they are the ones that never make it into the mockup that gets approved. Having them arrive designed changed what our handoff even means.",
    who: "Priya Ramanathan",
    role: "Design lead · Northbeam Clinical",
  },
];

export default function Testimonials() {
  return (
    <div className="band">
      <div className="sec" id="said">
        <div className="srail">
          <span className="l">In use</span>
          <span className="r">From teams building operational software</span>
        </div>
        <div className="shead">
          <h2>What it changed.</h2>
          <div>
            <p className="lede">
              Not that it looked better. That the screen agreed with itself, and nobody had to check.
            </p>
          </div>
        </div>
        <div className="tbento">
          {QUOTES.map((q) => (
            <div className={q.className} key={q.who}>
              {q.dots ? <span className="tdots2" aria-hidden="true" /> : null}
              <div className="qk">{q.kicker}</div>
              <q>{q.quote}</q>
              <div className="src">
                <b>{q.who}</b>
                <i>{q.role}</i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
