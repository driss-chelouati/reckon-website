"use client";

import Link from "next/link";
import SiteLink from "@/components/SiteLink";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  type FocusEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { icons } from "@/components/icons";
import {
  drawerGroups,
  layerLinks,
  productStartHere,
  showcaseStartHere,
  PAGE_HEADER_SELECTOR,
  type FeatureLink,
  type MegaLink,
} from "@/lib/nav";
import { bySlug, menuProducts } from "@/lib/products";

function MegaItem({ href, label, icon }: MegaLink) {
  return (
    <SiteLink className="mmi" href={href}>
      {icons[icon]}
      {label}
    </SiteLink>
  );
}

function Feature({ href, title, note, icon }: FeatureLink) {
  return (
    <SiteLink className="mmf" href={href}>
      <span className="ic">{icons[icon]}</span>
      <span>
        <b>{title}</b>
        <i>{note}</i>
      </span>
    </SiteLink>
  );
}

/* The panel opens on hover and closes when the pointer leaves — all CSS, and it
   stays that way. What the stylesheet cannot know is that a click no longer
   reloads the document: the pointer is still sitting inside the menu when the
   next page paints, so the panel would hang open over the page it just took you
   to. A click marks the menu shut; NAV_SHUT_RESET below decides when it may
   open again. */
function shut(e: MouseEvent<HTMLElement>) {
  e.currentTarget.dataset.shut = "";
  // A pointer click leaves focus on the link, inside a panel that is now
  // hidden. Hand it back to the document, as a page load would.
  if (e.detail > 0 && e.target instanceof HTMLElement) e.target.blur();
}

function focusIn(e: FocusEvent<HTMLElement>) {
  // Tabbing back to the trigger should open it again. Focus landing on a link
  // inside the panel is part of the click that just shut it, so it is not a
  // reason to reopen.
  const inPanel = e.target instanceof HTMLElement && e.target.closest(".mega");
  if (!inPanel) delete e.currentTarget.dataset.shut;
}

function Mega({ children }: { children: ReactNode }) {
  return (
    <span className="hasmega" onClick={shut} onFocus={focusIn}>
      {children}
    </span>
  );
}

/* the invisible strip under the trigger that keeps hover alive on the way down
   to the panel — .hasmega::after */
const BRIDGE = 16;
const SIDE = 18;

const Chev = (
  <svg className="chev" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function Nav() {
  const bar = useRef<HTMLDivElement>(null);
  const tog = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  /* The nav dissolves in once the page has moved, and its button becomes the
     primary action once the header has gone by — reverting if you scroll back
     up. The header is a different element on every route, so the lookup runs
     again whenever the route changes; the nav itself never remounts. */
  useEffect(() => {
    const el = bar.current;
    if (!el) return;
    const header = document.querySelector(PAGE_HEADER_SELECTOR) ?? document.querySelector("h1");
    let on = false;
    let past = false;

    const check = () => {
      const want = window.scrollY > 10;
      if (want !== on) {
        on = want;
        el.classList.toggle("stuck", on);
      }
      if (header) {
        // past the header once its lower edge has cleared the bar
        const wantPast = header.getBoundingClientRect().bottom - 64 < 0;
        if (wantPast !== past) {
          past = wantPast;
          el.classList.toggle("past", past);
        }
      }
    };

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    check();
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [pathname]);

  /* A menu shut by a click stays shut until the pointer moves off its trigger.
     Watching for pointerleave instead does not work: swapping the page under a
     stationary pointer makes the browser re-hit-test and fire one immediately,
     while the panel is still transitioning out and would take the hover back. */
  useEffect(() => {
    const onMove = (e: globalThis.PointerEvent) => {
      for (const el of document.querySelectorAll<HTMLElement>(".hasmega[data-shut]")) {
        const r = el.getBoundingClientRect();
        const overTrigger =
          e.clientX >= r.left - SIDE &&
          e.clientX <= r.right + SIDE &&
          e.clientY >= r.top &&
          e.clientY <= r.bottom + BRIDGE;
        if (!overTrigger) delete el.dataset.shut;
      }
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  /* The drawer is a checkbox and stays a checkbox — but a client-side
     navigation does not reload the document, so nothing would uncheck it.
     Untick it on route change and the CSS-only mechanism is unchanged. */
  useEffect(() => {
    if (tog.current) tog.current.checked = false;
  }, [pathname]);

  return (
    <div className="navbar" ref={bar}>
      <input type="checkbox" id="navtog" className="navtog" aria-label="Menu" ref={tog} />
      <div className="band">
        <nav>
          <a className="mark" href="#top">
            Reckon<span>.</span>
          </a>
          <div className="navlinks">
            <Mega>
              <Link href="/how-it-works">Product {Chev}</Link>
              <span className="megaveil" aria-hidden="true" />
              <div className="mega">
                <div className="mega-in">
                  <div className="mmside mmside--first">
                    <div className="mmhead">
                      <span>Start here</span>
                    </div>
                    {productStartHere.map((f) => (
                      <Feature key={f.href} {...f} />
                    ))}
                  </div>
                  <div>
                    <div className="mmhead">
                      <span>The layer</span>
                      <SiteLink href="/rules">Read the rules</SiteLink>
                    </div>
                    <div className="mmgrid">
                      {layerLinks.map((l) => (
                        <MegaItem key={l.href} {...l} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Mega>
            <Mega>
              <Link href="/products">Showcase {Chev}</Link>
              <span className="megaveil" aria-hidden="true" />
              <div className="mega">
                <div className="mega-in">
                  <div>
                    <div className="mmhead">
                      <span>Worked products</span>
                      <Link href="/products">Browse all</Link>
                    </div>
                    <div className="mmgrid">
                      {menuProducts.map((p) => (
                        <MegaItem
                          key={p.slug}
                          href={`/products/${p.slug}`}
                          label={p.name}
                          icon={p.icon}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mmside">
                    <div className="mmhead">
                      <span>Start here</span>
                    </div>
                    {showcaseStartHere.map((slug) => {
                      const p = bySlug.get(slug)!;
                      return (
                        <Feature
                          key={slug}
                          href={`/products/${p.slug}`}
                          title={p.name}
                          note={p.menuNote!}
                          icon={p.icon}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </Mega>
            <Link href="/pricing">Pricing</Link>
            <Link href="/changelog">Changelog</Link>
          </div>
          <Link className="navcta" href="/pricing" data-t="Get Reckon">
            Get Reckon
          </Link>
          <label className="burger" htmlFor="navtog">
            <span />
            <span />
          </label>
        </nav>
      </div>
      <div className="navdrawer">
        {drawerGroups.map((g) => (
          <div className="ndgrp" key={g.title}>
            <b>{g.title}</b>
            <div className="ndsub">
              {g.links.map((l) => (
                <SiteLink href={l.href} key={l.href}>
                  {"emphasis" in l && l.emphasis ? <em>{l.label}</em> : l.label}
                </SiteLink>
              ))}
            </div>
          </div>
        ))}
        <Link href="/pricing">Pricing</Link>
        <Link href="/changelog">Changelog</Link>
        <Link className="cta" href="/pricing" data-t="Get Reckon">
          Get Reckon
        </Link>
      </div>
    </div>
  );
}
