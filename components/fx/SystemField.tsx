"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";

/* The design system — loose points scattered wide, gathering into eight
   rectangular blocks and then letting go again. */

// eight blocks, each a small rectangle of points
const BLOCKS = [
  [-4.2, -3.4, 5, 3],
  [1.6, -4.0, 4, 2],
  [-5.4, 1.2, 3, 4],
  [0.4, 0.6, 6, 3],
  [-2.0, 4.6, 4, 2],
  [4.2, 2.4, 3, 3],
  [3.0, -1.2, 2, 4],
  [-6.2, -2.0, 2, 2],
];
const S = 34;
const CYCLE = 14;
const DIM = [80, 82, 96];
const ON = [255, 150, 118];

const ease = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));

const build: BuildScene = (renderer) => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x08080b, 620, 1700);
  const camera = new THREE.PerspectiveCamera(43, 1, 1, 3000);
  camera.position.set(0, 138, 392);
  camera.lookAt(-30, 0, -120);

  const group = new THREE.Group();
  group.rotation.x = -Math.PI / 2 + 0.14;
  group.rotation.z = -0.4;
  scene.add(group);

  const tx: number[] = [];
  const ty: number[] = [];
  const sx: number[] = [];
  const sy: number[] = [];
  const ph: number[] = [];
  for (const B of BLOCKS) {
    for (let c = 0; c < B[2]; c++) {
      for (let r = 0; r < B[3]; r++) {
        tx.push((B[0] + c) * S);
        ty.push((B[1] + r) * S);
        const a = Math.random() * Math.PI * 2;
        const d = 240 + Math.random() * 420;
        sx.push(Math.cos(a) * d);
        sy.push(Math.sin(a) * d * 0.7);
        ph.push(Math.random() * Math.PI * 2);
      }
    }
  }
  const N = tx.length;

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  const mat = new THREE.PointsMaterial({
    size: 2.8,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity: 0.92,
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
      const f = ease(u / 0.26) * (1 - ease((u - 0.74) / 0.22));
      const g = f * f;
      for (let k = 0; k < N; k++) {
        P[k * 3] = sx[k] + (tx[k] - sx[k]) * f;
        P[k * 3 + 1] = sy[k] + (ty[k] - sy[k]) * f;
        P[k * 3 + 2] = Math.sin(t * 0.6 + ph[k]) * 4 + f * 8;
        C[k * 3] = (DIM[0] + (ON[0] - DIM[0]) * g) / 255;
        C[k * 3 + 1] = (DIM[1] + (ON[1] - DIM[1]) * g) / 255;
        C[k * 3 + 2] = (DIM[2] + (ON[2] - DIM[2]) * g) / 255;
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      group.rotation.z = -0.4 + Math.sin(t * 0.05) * 0.028;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
};

export default function SystemField() {
  return <Field className="dfx" id="dfx" build={build} />;
}
