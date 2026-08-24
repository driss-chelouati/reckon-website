"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";

/* How it works — three sheets of points, stacked in depth. A pulse rises
   through them one after another: stated, compiled, checked. Each holds its
   light a little longer than the one below it. */

const SHEETS = 3;
const COLS = 26;
const ROWS = 26;
const S = 32;
const LIFT = 74;
const CYCLE = 12;
const DIM = [78, 80, 94];
const ON = [255, 150, 118];

const ease = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));

const build: BuildScene = (renderer) => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x08080b, 620, 1800);
  const camera = new THREE.PerspectiveCamera(43, 1, 1, 3000);
  camera.position.set(0, 150, 400);
  camera.lookAt(-30, 20, -120);

  const group = new THREE.Group();
  group.rotation.x = -Math.PI / 2 + 0.2;
  group.rotation.z = -0.38;
  scene.add(group);

  const N = SHEETS * COLS * ROWS;
  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const sheet = new Uint8Array(N);
  const dist = new Float32Array(N);
  const ph = new Float32Array(N);
  let i = 0;
  for (let s = 0; s < SHEETS; s++) {
    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r < ROWS; r++) {
        const x = (c - (COLS - 1) / 2) * S;
        const y = (r - (ROWS - 1) / 2) * S;
        pos[i * 3] = x;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = s * LIFT;
        sheet[i] = s;
        dist[i] = Math.sqrt(x * x + y * y) / (COLS * S * 0.72);
        ph[i] = c * 0.17 + r * 0.13 + s * 1.1;
        i++;
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  const mat = new THREE.PointsMaterial({
    size: 2.7,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
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
      for (let k = 0; k < N; k++) {
        const s = sheet[k];
        // each sheet fires in turn, and holds longer the higher it sits
        const start = 0.06 + s * 0.19;
        const hold = 0.16 + s * 0.1;
        const wave =
          ease((u - start - dist[k] * 0.16) / 0.13) *
          (1 - ease((u - start - hold - dist[k] * 0.16) / 0.2));
        P[k * 3 + 2] = s * LIFT + Math.sin(t * 0.6 + ph[k]) * 3 + wave * 10;
        C[k * 3] = (DIM[0] + (ON[0] - DIM[0]) * wave) / 255;
        C[k * 3 + 1] = (DIM[1] + (ON[1] - DIM[1]) * wave) / 255;
        C[k * 3 + 2] = (DIM[2] + (ON[2] - DIM[2]) * wave) / 255;
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      group.rotation.z = -0.38 + Math.sin(t * 0.05) * 0.025;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
};

export default function HowField() {
  return <Field className="hfx" id="hfx" build={build} />;
}
