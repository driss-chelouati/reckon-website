type Entry = { id: string; n: string; label: string; answer: string; heading: string; body: string };

const FAQ: Entry[] = [
  {
    id: "qa1",
    n: "01",
    label: "Is this a component library?",
    answer: "Answer 01",
    heading: "No.",
    body: "It ships components and tokens, but that is not what you are buying. The product is the rules layer that decides what gets computed, what gets shown and what gets refused — plus the machinery that makes those rules checkable.",
  },
  {
    id: "qa2",
    n: "02",
    label: "Will it work with the agent I already use?",
    answer: "Answer 02",
    heading: "If it reads a rules file, yes.",
    body: "It is built for Claude Design users generating business UI. Because the layer is plain markdown loaded as project instructions, anything else that reads a rules file will use it too. There is nothing proprietary to integrate.",
  },
  {
    id: "qa3",
    n: "03",
    label: "Do I have to accept your visual style?",
    answer: "Answer 03",
    heading: "No. The judgement, yes.",
    body: "The tokens are yours to set and brand fit is a config change. The judgement rules are not configurable, because that is the product. If you want a different opinion about derivation, you want a different product.",
  },
  {
    id: "qa4",
    n: "04",
    label: "What happens when the library updates?",
    answer: "Answer 04",
    heading: "Nothing breaks.",
    body: "The rules are written against behaviour rather than internals, so upstream releases move underneath them. Where a rule does need to change, it changes in one file you can read in an afternoon.",
  },
  {
    id: "qa5",
    n: "05",
    label: "Does it make the model slower?",
    answer: "Answer 05",
    heading: "Once. Then faster.",
    body: "Marginally slower on the first generation. Considerably faster by the fourth, because you are not re-prompting it to fix a total that never tied.",
  },
];

/* Five hidden radios drive which answer shows — no JavaScript, keyboard accessible as-is. */
export default function Faq() {
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
                The questions a sceptical lead asks before they will put an unfamiliar file in front of their team.
              </p>
              <a className="snum" href="#top">
                <i>08</i>
                <u>Back to the top →</u>
              </a>
            </div>
          </div>
          <div className="qa">
            {FAQ.map((e, i) => (
              <input type="radio" name="qa" id={e.id} key={e.id} defaultChecked={i === 0} />
            ))}
            <div className="qa-list">
              {FAQ.map((e) => (
                <label htmlFor={e.id} key={e.id}>
                  <i>{e.n}</i>
                  <span>{e.label}</span>
                </label>
              ))}
            </div>
            <div className="qa-panel">
              {FAQ.map((e, i) => (
                <div className={`qa-a a${i + 1}`} key={e.id}>
                  <div className="lbl">{e.answer}</div>
                  <h4>
                    <b>{e.heading}</b>
                  </h4>
                  <p>{e.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
