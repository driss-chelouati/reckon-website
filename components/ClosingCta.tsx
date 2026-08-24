"use client";

import SiteLink from "@/components/SiteLink";
import { useEffect, useRef, type ReactNode } from "react";
import * as THREE from "three";

type Action = { href: string; label: string; tear?: string };

const Act = ({ className, action }: { className: string; action: Action }) =>
  action.href.startsWith("/") ? (
    <SiteLink className={className} href={action.href} data-t={action.tear}>
      {action.label}
    </SiteLink>
  ) : (
    <a className={className} href={action.href} data-t={action.tear}>
      {action.label}
    </a>
  );

/* The panel every page closes on. Three of them — the landing page, /pricing
   and /changelog — carry the field behind it: a system holding its parts, whose
   vertices drift off the form and are then drawn back onto it, the edges
   brightening as it resolves. */
export default function ClosingCta({
  headline,
  lede,
  primary,
  secondary,
  field = false,
  note = "Built for Claude Design · plain markdown · nothing to run",
}: {
  headline: ReactNode;
  lede: string;
  primary: Action;
  secondary: Action;
  field?: boolean;
  note?: string;
}) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box || !field) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // A fresh canvas per mount: a disposed WebGL context cannot be re-acquired
    // from the same element, which React 18/19 strict mode would otherwise ask for.
    const cv = document.createElement("canvas");
    cv.id = "ctafx";
    cv.setAttribute("aria-hidden", "true");
    box.insertBefore(cv, box.firstChild);

    const teardown: Array<() => void> = [() => cv.remove()];
    const bail = () => { teardown.forEach((f) => f()); };

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
    } catch {
      bail();
      return;
    }
    if (!renderer.getContext || !renderer.getContext()) {
      bail();
      return;
    }
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 1, 2000);
    camera.position.set(0, 0, 460);

    const group = new THREE.Group();
    group.rotation.x = 0.28;
    scene.add(group);

    const R = 132;
    const geo = new THREE.IcosahedronGeometry(R, 2);
    const base = (geo.attributes.position.array as Float32Array).slice();
    const N = geo.attributes.position.count;

    // per-vertex drift, keyed off the rest position so shared vertices move together
    const ph = new Float32Array(N);
    const am = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const x = base[i * 3];
      const y = base[i * 3 + 1];
      const z = base[i * 3 + 2];
      ph[i] = x * 0.021 + y * 0.017 + z * 0.013;
      am[i] = 16 + 22 * Math.abs(Math.sin(x * 0.05 + z * 0.03));
    }

    const wireGeo = new THREE.WireframeGeometry(geo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xf97a5c,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const wire = new THREE.LineSegments(wireGeo, wireMat);
    group.add(wire);
    const wpos = wireGeo.attributes.position.array as Float32Array;
    const wbase = wpos.slice();
    const WN = wireGeo.attributes.position.count;
    const wph = new Float32Array(WN);
    const wam = new Float32Array(WN);
    for (let i = 0; i < WN; i++) {
      const X = wbase[i * 3];
      const Y = wbase[i * 3 + 1];
      const Z = wbase[i * 3 + 2];
      wph[i] = X * 0.021 + Y * 0.017 + Z * 0.013;
      wam[i] = 16 + 22 * Math.abs(Math.sin(X * 0.05 + Z * 0.03));
    }

    const dotMat = new THREE.PointsMaterial({
      color: 0xffb49e,
      size: 2.6,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const dots = new THREE.Points(geo, dotMat);
    group.add(dots);

    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const x2 = c.getContext("2d")!;
    const g2 = x2.createRadialGradient(64, 64, 0, 64, 64, 64);
    g2.addColorStop(0, "rgba(255,255,255,.9)");
    g2.addColorStop(0.3, "rgba(255,255,255,.28)");
    g2.addColorStop(1, "rgba(255,255,255,0)");
    x2.fillStyle = g2;
    x2.fillRect(0, 0, 128, 128);
    const haloTex = new THREE.CanvasTexture(c);
    const haloMat = new THREE.SpriteMaterial({
      map: haloTex,
      color: 0xf97a5c,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const halo = new THREE.Sprite(haloMat);
    halo.scale.set(560, 560, 1);
    scene.add(halo);

    const resize = () => {
      const r = cv.getBoundingClientRect();
      const w = Math.max(1, Math.round(r.width));
      const h = Math.max(1, Math.round(r.height));
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);
    const kick = setTimeout(resize, 400);
    let ro: ResizeObserver | undefined;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(resize);
      ro.observe(cv);
    }

    let vis = true;
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (en) => en.forEach((e) => { vis = e.isIntersecting; }),
        { threshold: 0 }
      );
      io.observe(cv);
    }

    const P = geo.attributes.position.array as Float32Array;
    const t0 = performance.now();
    let raf = 0;
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!vis) return;
      const t = (now - t0) / 1000;
      // 0 = scattered, 1 = held on the form
      const hold = Math.pow((Math.sin(t * 0.38) + 1) / 2, 1.6);
      const k = 1 - hold;
      let i;
      let d;

      for (i = 0; i < N; i++) {
        d = Math.sin(t * 0.85 + ph[i]) * am[i] * k;
        const L = 1 + d / R;
        P[i * 3] = base[i * 3] * L;
        P[i * 3 + 1] = base[i * 3 + 1] * L;
        P[i * 3 + 2] = base[i * 3 + 2] * L;
      }
      geo.attributes.position.needsUpdate = true;

      for (i = 0; i < WN; i++) {
        d = Math.sin(t * 0.85 + wph[i]) * wam[i] * k;
        const M = 1 + d / R;
        wpos[i * 3] = wbase[i * 3] * M;
        wpos[i * 3 + 1] = wbase[i * 3 + 1] * M;
        wpos[i * 3 + 2] = wbase[i * 3 + 2] * M;
      }
      wireGeo.attributes.position.needsUpdate = true;

      wireMat.opacity = 0.07 + 0.22 * hold;
      dotMat.opacity = 0.45 + 0.45 * hold;
      haloMat.opacity = 0.1 + 0.16 * hold;

      group.rotation.y = t * 0.11;
      group.rotation.x = 0.28 + Math.sin(t * 0.17) * 0.09;
      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(frame);

    teardown.unshift(() => {
      cancelAnimationFrame(raf);
      clearTimeout(kick);
      window.removeEventListener("resize", resize);
      ro?.disconnect();
      io?.disconnect();
      geo.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      dotMat.dispose();
      haloMat.dispose();
      haloTex.dispose();
      renderer.forceContextLoss();
      renderer.dispose();
    });

    return bail;
  }, [field]);

  return (
    <div className="band">
      <div className="cta-wrap">
        <div className="cta-box" ref={boxRef}>
          <p className="eyebrow">Reckon</p>
          <h2>{headline}</h2>
          <p className="lede">{lede}</p>
          <div className="cta-acts">
            <Act className="cta" action={primary} />
            <Act className="cta-alt" action={secondary} />
          </div>
          <div className="cta-note">{note}</div>
        </div>
      </div>
    </div>
  );
}
