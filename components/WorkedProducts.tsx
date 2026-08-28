import Link from "next/link";
import { icons, type IconKey } from "@/components/icons";

/* Four of the worked products, in the landing page's own order and with its
   own shorter copy — not the same sentences as the /products cards, so this
   list stays here rather than reading from lib/products. Every card links to
   the showcase index, as the source does. */
const cards: { icon: IconKey; title: string; body: string; note: string }[] = [
  {
    icon: "cargoClaims",
    title: "Cargo claims",
    body: "Damage claims against a container line. Liability caps, filing deadlines that cannot be extended, evidence that gates the decision.",
    note: "Time-barred before you open it",
  },
  {
    icon: "talent",
    title: "Talent representation",
    body: "Matching a roster to brand briefs. A creator locked by exclusivity while a matching brief is open; a held payment traced to an overdue invoice.",
    note: "A brief nobody on the roster fits",
  },
  {
    icon: "aiTool",
    title: "AI tool",
    body: "A chat workspace with its own meter, where the context window, the cycle bill and the seat count are all recomputed from the same messages.",
    note: "A file the index could not read",
  },
  {
    icon: "billing",
    title: "Payment operations",
    body: "Money arriving, payouts waiting on an approval, and what the company spent on its own cards — every figure reconciling against the rows beneath it.",
    note: "A payout nobody here can release",
  },
];

export default function WorkedProducts() {
  return (
    <div className="band">
      <div className="sec" id="templates">
        <div className="srail">
          <span className="l">Worked products</span>
          <span className="r">More in progress</span>
        </div>

        <div className="shead">
          <h2>Whole products, not screens.</h2>
          <div>
            <p className="lede">
              Cargo claims, recruitment, payment operations, talent representation, marketing,
              an AI tool, authentication, grant review — more in progress. Each has its own routes, status
              values and data. And the data is deliberately hostile: the awkward cases a client
              finds in week one.
            </p>
            <Link className="snum" href="/products">
              <i>03</i>
              <u>Browse the showcase →</u>
            </Link>
          </div>
        </div>

        <div className="pcards">
          {cards.map((c, i) => (
            <Link className="pcd" href="/products" key={c.title}>
              <span className="no">{String(i + 1).padStart(2, "0")}</span>
              <span className="hex">
                <i />
                <u />
                {icons[c.icon]}
              </span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <span className="m2">{c.note}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
