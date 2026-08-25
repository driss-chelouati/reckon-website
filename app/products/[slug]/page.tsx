import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductField from "@/components/fx/ProductField";
import ClosingCta from "@/components/ClosingCta";
import { productPages } from "@/lib/product-pages";
import { bySlug } from "@/lib/products";
import type { NextLink } from "@/lib/product-pages";
import "./product.css";

/* One worked product. cargo-claims is the only one written so far; the other
   nine are in the menu and the index on purpose and will arrive as records in
   lib/product-pages.ts, not as new files. */

export function generateStaticParams() {
  return Object.keys(productPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = bySlug.get(slug);
  return { title: product ? `${product.name} desk — a worked product` : "Worked product" };
}

const Next = ({ next }: { next: NextLink }) => (
  <a className="snum" href={next.href}>
    <i>{next.num}</i>
    <u>{next.label}</u>
  </a>
);

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const page = productPages[slug];
  if (!page) notFound();

  return (
    <>
      <div className="band hband">
        <div className="phero rin">
          <ProductField />
          <div className="srail"><span className="l">Worked product</span><span className="r">{page.railRight}</span></div>
          <h1>{page.headline}</h1>
          <p className="lede">{page.lede}</p>

          <div className="pmeta">
            {page.meta.map((m) => (
              <div key={m.label}>
                <small>{m.label}</small>
                <b>{m.value}</b>
                <i>{m.note}</i>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="band">
        <div className="pstage">
          <div className="shot">
            <div className="ph2"><span>{page.hero.shot}</span><em>{page.hero.of}</em></div>
          </div>
          <div className="shotcap">
            <span><b>{page.hero.captionLead}</b>{page.hero.caption}</span>
            <span>{page.hero.size}</span>
          </div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="job">
          <div className="srail"><span className="l">The job</span><span className="r">{page.job.railRight}</span></div>
          <div className="shead">
            <h2>{page.job.headline}</h2>
            <div>
              <p className="lede">{page.job.lede}</p>
              <Next next={page.job.next} />
            </div>
          </div>

          <div className="idx">
            {page.job.steps.map((s) => (
              <a href="#screens" key={s.n}>
                <span className="n">{s.n}</span><span className="t">{s.title}</span>
                <p>{s.body}</p>
                <span className="m">{s.note}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="screens">
          <div className="srail"><span className="l">The screens</span><span className="r">{page.screens.railRight}</span></div>
          <div className="shead">
            <h2>{page.screens.headline}</h2>
            <div>
              <p className="lede">{page.screens.lede}</p>
              <Next next={page.screens.next} />
            </div>
          </div>

          {page.screens.walk.map((w, i) => (
            <div className={i % 2 ? "walk rev" : "walk"} key={w.n}>
              <div className="wtext">
                <div className="n2">{w.n}</div>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
                <ul>
                  {w.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="shot"><div className="ph2"><span>{w.shot}</span><em>{w.of}</em></div></div>
                <div className="shotcap"><span><b>{w.route}</b></span><span>{w.kind}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="band">
        <div className="sec" id="states">
          <div className="srail"><span className="l">Status</span><span className="r">{page.states.railRight}</span></div>
          <div className="shead">
            <h2>{page.states.headline}</h2>
            <div>
              <p className="lede">{page.states.lede}</p>
              <Next next={page.states.next} />
            </div>
          </div>
          <div className="states">
            {page.states.values.map((v) => (
              <span className={v.mark ? `st2 ${v.mark}` : "st2"} key={v.name}>{v.name}</span>
            ))}
          </div>
          <div className="machfoot">{page.states.foot}</div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="hostile">
          <div className="srail"><span className="l">The data</span><span className="r">{page.hostile.railRight}</span></div>
          <div className="shead">
            <h2>{page.hostile.headline}</h2>
            <div>
              <p className="lede">{page.hostile.lede}</p>
              <Next next={page.hostile.next} />
            </div>
          </div>

          <div className="prs">
            {page.hostile.cases.map((c) => (
              <div className="pr" key={c.label}>
                <div className="q"><i>{c.label}</i>{c.title}</div>
                <div className="c bad"><b>Naively</b>{c.naively}</div>
                <div className="c good"><b>Here</b>{c.here}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="band">
        <div className="sec" id="audit">
          <div className="srail"><span className="l">The audit</span><span className="r">{page.audit.railRight}</span></div>
          <div className="shead">
            <h2>{page.audit.headline}</h2>
            <div>
              <p className="lede">{page.audit.lede}</p>
              <Next next={page.audit.next} />
            </div>
          </div>

          <div className="pstage" style={{ marginTop: "clamp(26px,3vw,40px)" }}>
            <div className="shot shot--tall">
              <div className="ph2"><span>{page.audit.shot}</span><em>{page.audit.of}</em></div>
            </div>
            <div className="shotcap">
              <span><b>{page.audit.captionLead}</b>{page.audit.caption}</span>
              <span>{page.audit.size}</span>
            </div>
          </div>
        </div>
      </div>

      <ClosingCta
        field
        headline={
          <>
            {page.closing.headline[0]}
            <br />
            {page.closing.headline[1]}
          </>
        }
        lede={page.closing.lede}
        primary={{ href: "/how-it-works", label: "See how it works", tear: "See how it works" }}
        secondary={{ href: "/#templates", label: "See the others" }}
      />
    </>
  );
}
