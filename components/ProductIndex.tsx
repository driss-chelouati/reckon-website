"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { icons } from "@/components/icons";
import { usePointerLight } from "@/components/usePointerLight";
import { isLive } from "@/lib/nav";
import { products, stateLabel, type Product } from "@/lib/products";

/* The index: every card stays in the DOM and is hidden when it does not match,
   which is what keeps the alternating .xc:nth-child(even) layout stable and
   matches what the source did. The count is the length of what is drawn.

   The haystack is built from the record rather than read back off the DOM —
   same fields, same order as the card renders them. */
const haystack = (p: Product) =>
  [
    p.shotIndex,
    p.name,
    p.domain,
    stateLabel[p.state],
    p.name,
    p.blurb,
    "Screens",
    p.screens,
    "Covers",
    p.covers,
    "Breaks on",
    p.breaksOn,
    "Open the product",
  ]
    .join(" ")
    .toLowerCase();

const Arrow = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 7h10v10" /> <path d="M7 17 17 7" />
  </svg>
);

export default function ProductIndex() {
  const [term, setTerm] = useState("");
  const grid = useRef<HTMLDivElement>(null);
  usePointerLight(grid, ".xc");

  const needle = term.trim().toLowerCase();
  const shown = useMemo(
    () => products.map((p) => !needle || haystack(p).includes(needle)),
    [needle]
  );
  const count = shown.filter(Boolean).length;

  return (
    <>
      <div className="xbar">
        <span className="xsearch">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" />
          </svg>
          <input
            type="search"
            id="xq"
            placeholder="Search products, domains, cases…"
            aria-label="Search products"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </span>
        {/* one text node, as the source set it — split across three, the count
            and its unit shape a hair differently */}
        <span className="xcount" id="xcount">{`${count} ${count === 1 ? "product" : "products"}`}</span>
      </div>

      <div className="xgrid" ref={grid}>
        {products.map((p, i) => {
          const href = `/products/${p.slug}`;
          const Card = isLive(href) ? Link : "a";
          return (
            <Card
              className="xc"
              href={href}
              data-cat={p.cat}
              data-state={p.state}
              hidden={!shown[i]}
              key={p.slug}
            >
              <span className={p.image ? "xshot real" : "xshot"}>
                {p.image ? (
                  <Image
                    src={p.image}
                    alt=""
                    sizes="(max-width: 720px) 92vw, (max-width: 1100px) 46vw, 33vw"
                  />
                ) : (
                  <span className="xph">
                    <span>{p.shotIndex}</span>
                    <em>{p.name}</em>
                  </span>
                )}
                <span className="xglow"></span>
              </span>
              <span className="xinfo">
                <span className="xhd">
                  <span className="xic">{icons[p.icon]}</span>
                  <span className="xdom">{p.domain}</span>
                  <span className={p.state === "audited" ? "xstate" : "xstate soon"}>
                    <u></u>
                    {stateLabel[p.state]}
                  </span>
                </span>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
                <span className="xmeta">
                  <div>
                    <span>Screens</span>
                    <b>{p.screens}</b>
                  </div>
                  <div>
                    <span>Covers</span>
                    <b>{p.covers}</b>
                  </div>
                  <div>
                    <span>Breaks on</span>
                    <b className="hot2">{p.breaksOn}</b>
                  </div>
                </span>
                <span className="xgo">Open the product {Arrow}</span>
              </span>
            </Card>
          );
        })}
      </div>

      <div className="xempty" id="xempty" hidden={count > 0}>
        <b>No products match this filter.</b>
        <span>Clear the search, or widen the domain.</span>
      </div>
    </>
  );
}
