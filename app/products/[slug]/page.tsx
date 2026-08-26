import Image, { type StaticImageData } from "next/image";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import ProductField from "@/components/fx/ProductField";
import ClosingCta from "@/components/ClosingCta";
import { icons } from "@/components/icons";
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
  if (!product) return pageMeta("Worked product", "A product generated from a brief, then audited.");
  /* the blurb is the product's own one-line description and is already written
     for a reader who has not seen the page */
  return pageMeta(`${product.name} desk — a worked product`, product.blurb);
}

const Next = ({ next }: { next: NextLink }) => (
  <a className="snum" href={next.href}>
    <i>{next.num}</i>
    <u>{next.label}</u>
  </a>
);

/* One screenshot frame. Where a real shot exists it sits inside the inset with
   its own proportions; where there is none the dashed placeholder names what is
   going to go there. Nine of the ten products are still all placeholder. */
function Shot({
  image,
  shot,
  of,
  sizes,
  priority,
  tall,
}: {
  image?: StaticImageData;
  shot: string;
  of: string;
  sizes: string;
  priority?: boolean;
  /* the audit view is drawn taller than the rest — but only while it is empty,
     since a real shot brings the shape it was captured at */
  tall?: boolean;
}) {
  const cls = image ? "shot real" : tall ? "shot shot--tall" : "shot";
  return (
    <div className={cls}>
      {image ? (
        <Image src={image} alt="" priority={priority} sizes={sizes} />
      ) : (
        <div className="ph2"><span>{shot}</span><em>{of}</em></div>
      )}
    </div>
  );
}

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
          <div className="phrow">
            <p className="lede">{page.lede}</p>
            {page.preview && (
              <a className="cta cta--quiet pprev" href={page.preview.href} target="_blank">
                <span className="gl" data-t={page.preview.label}>{page.preview.label}</span>
                {icons.arrowRight}
              </a>
            )}
          </div>

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
        <div className="pstage pstage--lead">
          <Shot
            image={page.hero.image}
            shot={page.hero.shot}
            of={page.hero.of}
            priority
            sizes="(max-width: 1100px) 94vw, 1040px"
          />
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
                <Shot image={w.image} shot={w.shot} of={w.of} sizes="(max-width: 900px) 94vw, 56vw" />
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
            <Shot
              image={page.audit.image}
              shot={page.audit.shot}
              of={page.audit.of}
              tall
              sizes="(max-width: 1100px) 94vw, 1040px"
            />
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
