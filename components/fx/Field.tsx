"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* Every WebGL figure on the site is the same shape: a renderer sized to its own
   box, a scene, an IntersectionObserver so it stops when it is off screen, and
   one rAF loop. Only the scene differs, so only the scene is written per page.

   The canvas is created here rather than rendered by React because tearing a
   scene down calls forceContextLoss(), and a canvas whose context has been lost
   that way cannot hand out another one — which is exactly what strict mode's
   double-invoked effect would ask for in development. A fresh canvas per effect
   run avoids the whole question. */

export type Scene = {
  /** called once per frame with seconds since the first frame */
  frame: (t: number) => void;
  /** called on mount and whenever the box changes size */
  resize: (width: number, height: number) => void;
  dispose: () => void;
};

export type BuildScene = (renderer: THREE.WebGLRenderer) => Scene;

export default function Field({
  className,
  id,
  build,
}: {
  className: string;
  id: string;
  build: BuildScene;
}) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = document.createElement("canvas");
    canvas.id = id;
    host.appendChild(canvas);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
      canvas.remove();
      return;
    }
    if (!renderer.getContext || !renderer.getContext()) {
      canvas.remove();
      return;
    }
    renderer.setClearColor(0x000000, 0);

    const scene = build(renderer);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(r.width));
      const h = Math.max(1, Math.round(r.height));
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h, false);
      scene.resize(w, h);
    };
    resize();
    window.addEventListener("resize", resize);
    // the box is often still settling when the effect first runs
    const kick = setTimeout(resize, 400);
    let ro: ResizeObserver | undefined;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(resize);
      ro.observe(canvas);
    }

    let visible = true;
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { visible = e.isIntersecting; }),
        { threshold: 0 }
      );
      io.observe(canvas);
    }

    /* Seeded from the first frame's own timestamp rather than performance.now().
       The value rAF hands back is the start of the frame it belongs to, which can
       predate a performance.now() sampled while that frame was already in flight,
       making the first t negative. A scene that floors its cycle into an index
       then reads past the start of its array, gets undefined, and writes NaN into
       the geometry. Seeded here, before the visibility check, so the clock still
       runs from mount rather than from first paint. */
    let t0: number | null = null;
    let raf = 0;
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (t0 === null) t0 = now;
      if (!visible) return;
      scene.frame((now - t0) / 1000);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(kick);
      window.removeEventListener("resize", resize);
      ro?.disconnect();
      io?.disconnect();
      scene.dispose();
      renderer.forceContextLoss();
      renderer.dispose();
      canvas.remove();
    };
  }, [id, build]);

  return <div className={className} aria-hidden="true" ref={hostRef} />;
}
