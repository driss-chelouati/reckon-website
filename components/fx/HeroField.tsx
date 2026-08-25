"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* Hero — a cascade of ruled sheets receding to the right of the copy.
   Each rule is drawn; the points that belong to it drift off it.
   A wavefront crosses the cascade diagonally, snapping each row back onto its rule. */

type Rule = { y: number; z: number; x0: number; x1: number; dim: number };

const ROWS = 17;
const CYCLE = 8.5;
const OFF = [104, 104, 112];
const ON = [249, 122, 92];

export default function HeroField() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // A fresh canvas per mount: a disposed WebGL context cannot be re-acquired
    // from the same element, which React 18/19 strict mode would otherwise ask for.
    const host = document.createElement("canvas");
    host.id = "fx";
    wrap.appendChild(host);

    // asymmetric cascade: each rule drops, recedes and slides right as it goes
    const rules: Rule[] = [];
    for (let j = 0; j < ROWS; j++) {
      const f = j / (ROWS - 1);
      rules.push({
        y: 8.6 - j * 1.02 - f * f * 2.2, // spacing opens up as it descends
        z: -j * 0.95,
        x0: -25 + j * 0.75,
        x1: 25 + j * 0.3,
        dim: 1 - f * 0.62,
      });
    }

    const U: number[] = [];
    const RJ: number[] = [];
    const PH: number[] = [];
    const AM: number[] = [];
    let N = 0;
    rules.forEach((r, j) => {
      const n = Math.round(46 + (1 - j / ROWS) * 34);
      for (let i = 0; i < n; i++) {
        U.push(i / (n - 1));
        RJ.push(j);
        PH.push(Math.random() * Math.PI * 2);
        AM.push(0.16 + Math.random() * 0.62);
        N++;
      }
    });

    function alignAt(t: number, u: number, j: number) {
      const head = (t / CYCLE) % 1;
      const d = ((head - ((u * 0.78 + j * 0.042) % 1) + 1) % 1); // diagonal wavefront
      return Math.exp(-d * 5.4);
    }
    function driftAt(t: number, k: number, a: number) {
      return Math.sin(t * 0.6 + PH[k]) * AM[k] * (1 - a);
    }
    function size() {
      const r = wrap!.getBoundingClientRect();
      return { w: Math.max(1, Math.round(r.width)), h: Math.max(1, Math.round(r.height)) };
    }

    // Everything the effect creates, torn down in one place.
    let raf = 0;
    let kick: ReturnType<typeof setTimeout> | undefined;
    let onResize: (() => void) | undefined;
    let ro: ResizeObserver | undefined;
    let io: IntersectionObserver | undefined;
    let disposeScene: (() => void) | undefined;

    function startThree() {
      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ canvas: host, antialias: true, alpha: true });
      } catch {
        return false;
      }
      if (!renderer.getContext || !renderer.getContext()) return false;
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 300);
      camera.position.set(0, 0, 30);

      const group = new THREE.Group();
      group.position.set(13.5, 0.5, 0);
      group.rotation.set(0.14, -0.62, 0.055);
      scene.add(group);

      const lineGeos: THREE.BufferGeometry[] = [];
      const lineMats: THREE.Material[] = [];
      rules.forEach((r) => {
        const g = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(r.x0, r.y, r.z),
          new THREE.Vector3(r.x1, r.y, r.z),
        ]);
        const m = new THREE.LineBasicMaterial({
          color: 0x9a9490,
          transparent: true,
          opacity: 0.085 * r.dim,
        });
        lineGeos.push(g);
        lineMats.push(m);
        group.add(new THREE.Line(g, m));
      });

      const pos = new Float32Array(N * 3);
      const col = new Float32Array(N * 3);
      for (let k = 0; k < N; k++) {
        const r = rules[RJ[k]];
        pos[k * 3] = r.x0 + (r.x1 - r.x0) * U[k];
        pos[k * 3 + 1] = r.y;
        pos[k * 3 + 2] = r.z;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const ptMat = new THREE.PointsMaterial({
        size: 2.9,
        sizeAttenuation: false,
        vertexColors: true,
        transparent: true,
        opacity: 0.92,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      group.add(new THREE.Points(geo, ptMat));

      const resize = () => {
        const s = size();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(s.w, s.h, false);
        camera.aspect = s.w / s.h;
        camera.fov = s.w < 760 ? 66 : 44;
        group.position.x = s.w < 760 ? 6 : 13.5;
        camera.updateProjectionMatrix();
      };
      resize();
      onResize = resize;
      window.addEventListener("resize", resize);
      kick = setTimeout(resize, 400);
      if (window.ResizeObserver) {
        ro = new ResizeObserver(resize);
        ro.observe(wrap!);
      }

      let running = true;
      if ("IntersectionObserver" in window) {
        io = new IntersectionObserver(
          (en) => en.forEach((e) => { running = e.isIntersecting; }),
          { threshold: 0 }
        );
        io.observe(wrap!);
      }

      const t0 = performance.now();
      const frame = (now: number) => {
        raf = requestAnimationFrame(frame);
        if (!running) return;
        const t = (now - t0) / 1000;
        const P = (geo.attributes.position as THREE.BufferAttribute).array as Float32Array;
        const C = (geo.attributes.color as THREE.BufferAttribute).array as Float32Array;
        for (let k = 0; k < N; k++) {
          const r = rules[RJ[k]];
          const a = alignAt(t, U[k], RJ[k]);
          P[k * 3 + 1] = r.y + driftAt(t, k, a);
          const g = a * a;
          const d = r.dim;
          C[k * 3] = ((OFF[0] + (ON[0] - OFF[0]) * g) / 255) * d;
          C[k * 3 + 1] = ((OFF[1] + (ON[1] - OFF[1]) * g) / 255) * d;
          C[k * 3 + 2] = ((OFF[2] + (ON[2] - OFF[2]) * g) / 255) * d;
        }
        geo.attributes.position.needsUpdate = true;
        geo.attributes.color.needsUpdate = true;
        group.rotation.y = -0.62 + Math.sin(t * 0.08) * 0.045;
        group.rotation.x = 0.14;
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(frame);

      disposeScene = () => {
        lineGeos.forEach((g) => g.dispose());
        lineMats.forEach((m) => m.dispose());
        geo.dispose();
        ptMat.dispose();
        renderer.forceContextLoss();
        renderer.dispose();
      };
      return true;
    }

    // Kept as the WebGL-unavailable path: three.js now comes from npm, but a
    // blocked or exhausted GL context still lands here.
    function start2D() {
      const ctx = host.getContext("2d");
      if (!ctx) return false;
      let W = 0;
      let H = 0;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const resize = () => {
        const s = size();
        W = s.w;
        H = s.h;
        host.width = Math.round(W * dpr);
        host.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      resize();
      onResize = resize;
      window.addEventListener("resize", resize);
      kick = setTimeout(resize, 400);
      if (window.ResizeObserver) {
        ro = new ResizeObserver(resize);
        ro.observe(wrap!);
      }

      let running = true;
      if ("IntersectionObserver" in window) {
        io = new IntersectionObserver(
          (en) => en.forEach((e) => { running = e.isIntersecting; }),
          { threshold: 0 }
        );
        io.observe(wrap!);
      }

      const RY = -0.62;
      const cosY = Math.cos(RY);
      const sinY = Math.sin(RY);
      function proj(x: number, y: number, z: number): [number, number, number] {
        let X = x * cosY + z * sinY;
        const Z = -x * sinY + z * cosY;
        X += 13.5;
        y += 0.5;
        const s = 30 / (30 - Z);
        return [W * 0.5 + X * s * (W / 70), H * 0.5 - y * s * (H / 26), s];
      }

      const t0 = performance.now();
      const frame = (now: number) => {
        raf = requestAnimationFrame(frame);
        if (!running || !W) return;
        const t = (now - t0) / 1000;
        ctx.clearRect(0, 0, W, H);

        ctx.lineWidth = 1;
        rules.forEach((r) => {
          const A = proj(r.x0, r.y, r.z);
          const B = proj(r.x1, r.y, r.z);
          ctx.strokeStyle = "rgba(143,149,168," + 0.085 * r.dim + ")";
          ctx.beginPath();
          ctx.moveTo(A[0], A[1]);
          ctx.lineTo(B[0], B[1]);
          ctx.stroke();
        });

        ctx.globalCompositeOperation = "lighter";
        for (let k = 0; k < N; k++) {
          const r = rules[RJ[k]];
          const a = alignAt(t, U[k], RJ[k]);
          const g = a * a;
          const x = r.x0 + (r.x1 - r.x0) * U[k];
          const pr = proj(x, r.y + driftAt(t, k, a), r.z);
          const R = (OFF[0] + (ON[0] - OFF[0]) * g) * r.dim;
          const G = (OFF[1] + (ON[1] - OFF[1]) * g) * r.dim;
          const B2 = (OFF[2] + (ON[2] - OFF[2]) * g) * r.dim;
          ctx.fillStyle = "rgba(" + (R | 0) + "," + (G | 0) + "," + (B2 | 0) + "," + (0.45 + 0.5 * g) + ")";
          ctx.fillRect(pr[0], pr[1], 1.8 + g, 1.8 + g);
        }
        ctx.globalCompositeOperation = "source-over";
      };
      raf = requestAnimationFrame(frame);
      return true;
    }

    if (!startThree()) start2D();

    return () => {
      cancelAnimationFrame(raf);
      if (kick) clearTimeout(kick);
      if (onResize) window.removeEventListener("resize", onResize);
      ro?.disconnect();
      io?.disconnect();
      disposeScene?.();
      host.remove();
    };
  }, []);

  return <div className="herofx" aria-hidden="true" ref={wrapRef} />;
}
