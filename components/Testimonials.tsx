/* Five quotes on an uneven twelve-column grid — the length of the quote decides
   the size of the card, which is why the modifier travels with the copy. */
const quotes = [
  {
    size: "tq--lead",
    kicker: "One product, not eleven",
    quote:
      "Eight screens that felt like they were designed by the same person on the same day. That is the part I could never get out of a generator.",
    name: "Joel Kaminski",
    role: "Founder · Ledgerline",
  },
  {
    size: "tq--tall tq--feat",
    dots: true,
    kicker: "The same object, everywhere",
    quote:
      "An invoice behaved like an invoice on every screen it appeared on. Same label, same states, same actions available in the same order, whether it was a row in a list or the whole page. We used to lose a week reconciling those differences after the fact — three designers, three mental models of the same record, and nobody noticing until QA. Here the model of the domain was decided once, and everything downstream inherited it.",
    name: "Ana Ferreira",
    role: "Front-end engineer · Kestrel Health",
  },
  {
    size: "tq--half",
    kicker: "What a screen is for",
    quote:
      "It stopped giving me a dashboard when what I described was a queue. Somebody has clearly thought about the difference between software you read and software you act in — and the numbers on it are load-bearing rather than decorative, which is the same insight applied twice.",
    name: "Marta Ilves",
    role: "Design lead · Vantage Freight",
  },
  {
    size: "tq--sm",
    kicker: "Hierarchy",
    quote:
      "The most severe row is the one you see first. Sounds obvious. Nothing else does it.",
    name: "Tom Sørensen",
    role: "Engineer · Meridian Billing",
  },
  {
    size: "tq--wide",
    kicker: "The unglamorous half",
    quote:
      "Empty, permission-denied, filtered-to-nothing, the record somebody archived last week. Those screens are most of the actual experience in an internal tool, and they are the ones that never make it into the mockup that gets approved. Having them arrive designed changed what our handoff even means.",
    name: "Priya Ramanathan",
    role: "Design lead · Northbeam Clinical",
  },
];

export default function Testimonials({
  link,
}: {
  link?: { num: string; href: string; label: string };
}) {
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
              Not that it looked better. That the screen agreed with itself, and nobody had to
              check.
            </p>
            {link && (
              <a className="snum" href={link.href}>
                <i>{link.num}</i>
                <u>{link.label}</u>
              </a>
            )}
          </div>
        </div>

        <div className="tbento">
          {quotes.map((q) => (
            <div className={`tq ${q.size}`} key={q.name}>
              {q.dots && <span className="tdots2" aria-hidden="true" />}
              <div className="qk">{q.kicker}</div>
              <q>{q.quote}</q>
              <div className="src">
                <b>{q.name}</b>
                <i>{q.role}</i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
