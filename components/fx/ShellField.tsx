"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";
import { pointFragmentShader, pointVertexShader } from "@/components/fx/pointShader";

/* Shells hero — a shared armature that keeps resolving into a different shape.
   The same points hold a common spine while their outer field settles into one
   silhouette, then another. One structure, four products.

   The spine is a fixed cross through the middle of the field. It is damped to
   18% of whatever relief is running, so it stays put through every change —
   that is the whole argument of the page, drawn. */

const COLS = 44;
const ROWS = 44;
const S = 28;
const N = COLS * ROWS;
const CYCLE = 18;
const DIM = [74, 76, 92];
const WARM = [255, 148, 116];
const KEEP = [168, 172, 190];

/** smoothstep, clamped */
const ease = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));

/** four fields, each giving the same points a different relief */
function shapeAt(idx: number, x: number, y: number, t: number) {
  if (idx === 0) {
    // queue: horizontal ranks
    return Math.sin(y * 0.028) * 22 + Math.sin(x * 0.004 + t * 0.3) * 5;
  }
  if (idx === 1) {
    // record: one raised centre, two panes
    return Math.exp(-((x * x + y * y) / 78000)) * 34 - Math.sin(x * 0.01) * 9;
  }
  if (idx === 2) {
    // decision: a single ridge, steep on one side
    return Math.tanh((x + Math.sin(y * 0.012) * 60) * 0.008) * 24;
  }
  // reconciliation: alternating banks
  return Math.sin(x * 0.02) * 20 * Math.sign(Math.cos(y * 0.006 + 0.4));
}

const build: BuildScene = (renderer) => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x08080b, 640, 1900);
  const camera = new THREE.PerspectiveCamera(42, 1, 1, 3000);
  camera.position.set(0, 148, 392);
  camera.lookAt(-26, 0, -136);

  const group = new THREE.Group();
  group.rotation.x = -Math.PI / 2 + 0.16;
  group.rotation.z = -0.4;
  scene.add(group);

  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const siz = new Float32Array(N);
  const bx = new Float32Array(N);
  const by = new Float32Array(N);
  const spine = new Uint8Array(N);
  const ph = new Float32Array(N);
  let i = 0;

  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const x = (c - (COLS - 1) / 2) * S;
      const y = (r - (ROWS - 1) / 2) * S;
      bx[i] = x;
      by[i] = y;
      ph[i] = c * 0.17 + r * 0.12;
      /* the armature: a cross running through the middle of the field */
      spine[i] =
        Math.abs(c - (COLS - 1) / 2) < 2.5 || Math.abs(r - (ROWS - 1) / 2) < 2.5 ? 1 : 0;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = 0;
      siz[i] = 2.3;
      i++;
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.setAttribute("psize", new THREE.BufferAttribute(siz, 1));

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uOpacity: { value: 0.95 } },
    vertexShader: pointVertexShader,
    fragmentShader: pointFragmentShader,
    vertexColors: true,
  });
  group.add(new THREE.Points(geo, mat));

  const P = geo.attributes.position.array as Float32Array;
  const C = geo.attributes.color.array as Float32Array;
  const Z = geo.attributes.psize.array as Float32Array;

  return {
    resize(w, h) {
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    },
    frame(t) {
      const seg = ((t / CYCLE) % 1) * 4;
      const idx = Math.floor(seg);
      const local = seg - idx;
      const blend = ease((local - 0.68) / 0.32); // the change-over
      const nxt = (idx + 1) % 4;
      const settling = Math.exp(-Math.pow((local - 0.84) / 0.13, 2));

      for (let k = 0; k < N; k++) {
        const x = bx[k];
        const y = by[k];
        const hA = shapeAt(idx, x, y, t);
        const hB = shapeAt(nxt, x, y, t);
        let h = hA + (hB - hA) * blend;

        /* the armature stays put through every change */
        if (spine[k]) h = h * 0.18;

        P[k * 3] = x;
        P[k * 3 + 1] = y;
        P[k * 3 + 2] = h + Math.sin(t * 0.5 + ph[k]) * 2.5;

        const lift = Math.min(1, Math.max(0, (h + 26) / 52));
        const lit = spine[k] ? 0.42 : lift * 0.72 + settling * 0.5;
        const to = spine[k] ? KEEP : WARM;

        C[k * 3] = (DIM[0] + (to[0] - DIM[0]) * lit) / 255;
        C[k * 3 + 1] = (DIM[1] + (to[1] - DIM[1]) * lit) / 255;
        C[k * 3 + 2] = (DIM[2] + (to[2] - DIM[2]) * lit) / 255;

        Z[k] = 2.0 + lift * 2.2 + (spine[k] ? 1.1 : 0) + settling * 1.4;
      }

      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      geo.attributes.psize.needsUpdate = true;
      group.rotation.z = -0.4 + Math.sin(t * 0.05) * 0.04;
      group.rotation.x = -Math.PI / 2 + 0.16 + Math.sin(t * 0.07) * 0.02;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
};

/* The canvas wrapper's class comes from the page, because /shells is a CSS
   Module and .sfx is scoped to it — there is no global `sfx` to name here. */
export default function ShellField({ className }: { className: string }) {
  return <Field className={className} id="sfx" build={build} />;
}
