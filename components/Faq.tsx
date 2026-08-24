import { faqItems, type QaItem } from "@/lib/faq";

/* Five hidden radios drive which answer is showing. This stays CSS-only and
   keyboard-accessible as it is — turning it into React state would mean the
   page needs JavaScript to answer its own questions. */
export default function Faq({
  items = faqItems,
  num,
  href,
  label,
}: {
  items?: QaItem[];
  num: string;
  href: string;
  label: string;
}) {
  return (
    <div className="band">
      <div className="sec" id="faq">
        <div className="srail">
          <span className="l">Questions</span>
          <span className="r">Answered plainly</span>
        </div>
        <div>
          <div className="shead">
            <h2>Straight answers.</h2>
            <div>
              <p className="lede">
                The questions a sceptical lead asks before they will put an unfamiliar file in
                front of their team.
              </p>
              <a className="snum" href={href}>
                <i>{num}</i>
                <u>{label}</u>
              </a>
            </div>
          </div>
          <div className="qa">
            {items.map((item, i) => (
              <input
                key={item.q}
                type="radio"
                name="qa"
                id={`qa${i + 1}`}
                defaultChecked={i === 0}
              />
            ))}
            <div className="qa-list">
              {items.map((item, i) => (
                <label htmlFor={`qa${i + 1}`} key={item.q}>
                  <i>{String(i + 1).padStart(2, "0")}</i>
                  <span>{item.q}</span>
                </label>
              ))}
            </div>
            <div className="qa-panel">
              {items.map((item, i) => (
                <div className={`qa-a a${i + 1}`} key={item.q}>
                  <div className="lbl">Answer {String(i + 1).padStart(2, "0")}</div>
                  <h4>
                    <b>{item.verdict}</b>
                  </h4>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
