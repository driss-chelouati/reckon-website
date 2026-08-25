import inline from "@/components/inline";
import { routes } from "@/lib/howto";
import { figures } from "@/components/RoutesFigures";
import "./routes-in.css";

/* The four routes in, shared by /download and /how-to-use.

   The rows themselves are identical on both pages — same order, same prose,
   same figures — so they come from lib/howto.ts rather than from props. What
   differs between the two pages is only the section chrome around them: the
   rail, the headline, the lede and the numbered link out. Those are the props.

   prose and figure are paired by position: routes[n] belongs with figures[n].
   Adding a route without its figure fails the static prerender, which is the
   right place to find out. */
export default function RoutesIn({
  id = "start",
  /* set when this is the first section after the header, which suppresses the
     rule above it — true on /how-to-use, false on /download where #get is first */
  flush = false,
  railLeft,
  railRight,
  headline,
  lede,
  next,
}: {
  id?: string;
  flush?: boolean;
  railLeft: string;
  railRight: string;
  headline: string;
  lede: string;
  next: { num: string; href: string; label: string };
}) {
  return (
    <div className="band">
      <div className="sec" id={id} style={flush ? { borderTop: 0 } : undefined}>
        <div className="srail"><span className="l">{railLeft}</span><span className="r">{railRight}</span></div>
        <div className="shead">
          <h2>{headline}</h2>
          <div>
            <p className="lede">{lede}</p>
            <a className="snum" href={next.href}><i>{next.num}</i><u>{next.label}</u></a>
          </div>
        </div>

        <div className="ostack">
          {routes.map((r, n) => {
            const Figure = figures[n];
            return (
              <div className="orow" key={r.n}>
                <div>
                  <i>{r.n} · {r.lit ? <em>{r.tag}</em> : r.tag}</i>
                  <h3>{r.title}</h3>
                  <p>{inline(r.body)}</p>
                </div>
                <Figure />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
