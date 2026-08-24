"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";

/* Failure modes — a grid running off toward the corner. Roughly one point in
   seventeen sits off its place; a wavefront crosses the field and sets each of
   them back on the grid, then releases and they drift off again. */

const COLS = 40;
const ROWS = 40;
const S = 31;
const N = COLS * ROWS;
const CYCLE = 12;
const SPAN = (COLS + ROWS) * S;
const DIM = [80, 82, 96];
const BAD = [244, 112, 134];
const ON = [255, 152, 120];

const ease = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));

const build: BuildScene = (renderer) => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x08080b, 520, 1500);
  const camera = new THREE.PerspectiveCamera(44, 1, 1, 3000);
  camera.position.set(0, 124, 352);
  camera.lookAt(-40, 0, -130);

  const group = new THREE.Group();
  group.rotation.x = -Math.PI / 2 + 0.09;
  group.rotation.z = -0.42; // the grid runs off toward the corner
  scene.add(group);

  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const bx = new Float32Array(N);
  const by = new Float32Array(N);
  const dx = new Float32Array(N);
  const dy = new Float32Array(N);
  const rogue = new Uint8Array(N);
  const ph = new Float32Array(N);
  let i = 0;
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const x = (c - (COLS - 1) / 2) * S;
      const y = (r - (ROWS - 1) / 2) * S;
      bx[i] = x;
      by[i] = y;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = 0;
      const off = (c * 5 + r * 11) % 17 === 0; // roughly one in seventeen
      rogue[i] = off ? 1 : 0;
      dx[i] = off ? ((c + r) % 2 ? 1 : -1) * (7 + ((c * 3 + r * 7) % 10)) : 0;
      dy[i] = off ? ((c % 3) - 1) * 8 : 0;
      ph[i] = c * 0.19 + r * 0.11;
      i++;
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  const mat = new THREE.PointsMaterial({
    size: 2.9,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  group.add(new THREE.Points(geo, mat));

  const P = geo.attributes.position.array as Float32Array;
  const C = geo.attributes.color.array as Float32Array;

  return {
    resize(w, h) {
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    },
    frame(t) {
      const u = (t / CYCLE) % 1;
      const front = u * 1.34; // the wavefront, in diagonal units
      const release = ease((u - 0.84) / 0.16);

      for (let k = 0; k < N; k++) {
        // distance along the diagonal, measured from the far corner
        const d = (bx[k] + (COLS * S) / 2 + (by[k] + (ROWS * S) / 2)) / SPAN;
        const held = Math.max(0, ease((front - d) / 0.18) - release);
        const breathe = Math.sin(t * 0.7 + ph[k]);

        P[k * 3] = bx[k] + dx[k] * (1 - held);
        P[k * 3 + 1] = by[k] + dy[k] * (1 - held);
        P[k * 3 + 2] = breathe * 4 + held * 9;

        const edge = Math.exp(-Math.abs(front - d) * 19) * 1.05; // the front itself glows
        let c0;
        let c1;
        let c2;
        if (rogue[k]) {
          const g = 1 - held;
          c0 = DIM[0] + (BAD[0] - DIM[0]) * g + (ON[0] - DIM[0]) * held;
          c1 = DIM[1] + (BAD[1] - DIM[1]) * g + (ON[1] - DIM[1]) * held;
          c2 = DIM[2] + (BAD[2] - DIM[2]) * g + (ON[2] - DIM[2]) * held;
        } else {
          c0 = DIM[0] + (ON[0] - DIM[0]) * edge;
          c1 = DIM[1] + (ON[1] - DIM[1]) * edge;
          c2 = DIM[2] + (ON[2] - DIM[2]) * edge;
        }
        C[k * 3] = c0 / 255;
        C[k * 3 + 1] = c1 / 255;
        C[k * 3 + 2] = c2 / 255;
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      group.rotation.z = -0.42 + Math.sin(t * 0.06) * 0.03;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
};

export default function FailField() {
  return <Field className="ffx" id="ffx" build={build} />;
}
