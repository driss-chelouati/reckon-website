"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";
import { pointFragmentShader, pointVertexShader } from "@/components/fx/pointShader";

/* Audience hero — one lattice, lit from three directions in turn. The structure
   never changes; what changes is which parts of it catch the light. The same
   layer, read three different ways. */

const COLS = 46;
const ROWS = 46;
const S = 27;
const N = COLS * ROWS;
const CYCLE = 13.5;
/** three lights, evenly spaced around the field, each taking its turn */
const ANG = [Math.PI * 0.18, Math.PI * 0.92, Math.PI * 1.55];
const DIM = [70, 72, 88];
const WARM = [255, 148, 116];
const PALE = [255, 208, 186];
const REACH = 620;

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
  const ph = new Float32Array(N);
  let i = 0;
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const x = (c - (COLS - 1) / 2) * S;
      const y = (r - (ROWS - 1) / 2) * S;
      bx[i] = x;
      by[i] = y;
      ph[i] = c * 0.18 + r * 0.14;
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
      const u = (t / CYCLE) % 1;

      /* which light is up, and how far its sweep has travelled */
      const seg = u * 3;
      const idx = Math.floor(seg);
      const local = seg - idx;
      const a0 = ANG[idx % 3];
      const a1 = ANG[(idx + 1) % 3];
      const blend = local < 0.75 ? 0 : (local - 0.75) / 0.25; // hand over near the end

      const dx0 = Math.cos(a0);
      const dy0 = Math.sin(a0);
      const dx1 = Math.cos(a1);
      const dy1 = Math.sin(a1);
      const front0 = (-0.2 + local * 1.5) * REACH;
      const front1 = (-0.2 + blend * 0.4) * REACH;

      for (let k = 0; k < N; k++) {
        const x = bx[k];
        const y = by[k];

        /* the lattice itself: a fixed low relief that never changes */
        const relief =
          Math.sin(x * 0.0075) * 7 + Math.sin(y * 0.0091) * 6 + Math.sin(t * 0.5 + ph[k]) * 3;

        /* distance along each light's direction, and a soft band around its front */
        const p0 = x * dx0 + y * dy0;
        const p1 = x * dx1 + y * dy1;
        const b0 = Math.exp(-Math.pow((p0 - front0) / 128, 2));
        const b1 = Math.exp(-Math.pow((p1 - front1) / 128, 2)) * blend;
        const band = Math.min(1, b0 * (1 - blend) + b1);

        P[k * 3] = x;
        P[k * 3 + 1] = y;
        P[k * 3 + 2] = relief + band * 30;

        const tip = band * band;
        const rr = DIM[0] + (WARM[0] - DIM[0]) * band + (PALE[0] - WARM[0]) * tip;
        const gg = DIM[1] + (WARM[1] - DIM[1]) * band + (PALE[1] - WARM[1]) * tip;
        const bb = DIM[2] + (WARM[2] - DIM[2]) * band + (PALE[2] - WARM[2]) * tip;

        C[k * 3] = rr / 255;
        C[k * 3 + 1] = gg / 255;
        C[k * 3 + 2] = bb / 255;

        Z[k] = 2.0 + band * 3.6 + tip * 1.8;
      }

      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      geo.attributes.psize.needsUpdate = true;
      group.rotation.z = -0.4 + Math.sin(t * 0.05) * 0.042;
      group.rotation.x = -Math.PI / 2 + 0.16 + Math.sin(t * 0.07) * 0.02;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
};

export default function AudienceField() {
  return <Field className="wfx" id="wfx" build={build} />;
}
