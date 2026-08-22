import type { ReactNode } from "react";

type Product = { no: string; icon: ReactNode; title: string; body: string; note: string };

const PRODUCTS: Product[] = [
  {
    no: "01",
    icon: (
      <>
        <path d="M3.2 7.6 12 3.4l8.8 4.2v8.8L12 20.6l-8.8-4.2z" />
        <path d="M12 3.4v17.2M3.2 7.6 12 11.8l8.8-4.2" />
      </>
    ),
    title: "Cargo claims",
    body: "Damage claims against a container line. Liability caps, filing deadlines that cannot be extended, evidence that gates the decision.",
    note: "a claim time-barred before you open it",
  },
  {
    no: "02",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5.4 20.4c.7-3.6 3.4-5.6 6.6-5.6s5.9 2 6.6 5.6" />
        <path d="M18.6 3.2l.9 2 2 .9-2 .9-.9 2-.9-2-2-.9 2-.9z" />
      </>
    ),
    title: "Talent representation",
    body: "Matching a roster to brand briefs. A creator locked by exclusivity while a matching brief is open; a held payment traced to an overdue invoice.",
    note: "a brief nobody fits, every reason named",
  },
  {
    no: "03",
    icon: (
      <>
        <path d="M3.4 12h3.5l1.8-4.6 3 9.6 2.2-6 1.5 3h5.2" />
        <circle cx="18" cy="6.4" r="2.3" />
      </>
    ),
    title: "Clinical practice",
    body: "Scheduling, records and results against a duty of care, where a stale figure is a clinical risk rather than an inconvenience.",
    note: "permission-denied is a designed screen",
  },
  {
    no: "04",
    icon: (
      <>
        <path d="M5 3.2h14v17.6l-2.6-1.7-2.4 1.7-2.5-1.7-2.4 1.7L5 20.8z" />
        <path d="M8.6 8.4h6.8M8.6 12.2h6.8M8.6 16h4" />
      </>
    ),
    title: "Billing and invoicing",
    body: "Subscriptions, dunning and failed payments. The invoice on the list is the same invoice on the detail screen — same amount, same state.",
    note: "no footer count anyone typed",
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
              Billing, clinical practice, cargo claims, talent representation, home automation, authentication, grant review — more in progress. Each has its own routes, status values and data. And the data is deliberately hostile: the awkward cases a client finds in week one.
            </p>
            <a className="snum" href="#pairs">
              <i>03</i>
              <u>What goes wrong →</u>
            </a>
          </div>
        </div>
        <div className="pcards">
          {PRODUCTS.map((p) => (
            <a className="pcd" href="#pairs" key={p.no}>
              <span className="no">{p.no}</span>
              <span className="hex">
                <i />
                <u />
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {p.icon}
                </svg>
              </span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <span className="m2">{p.note}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
