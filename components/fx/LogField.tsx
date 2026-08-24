"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";
import { pointFragmentShader, pointVertexShader } from "@/components/fx/pointShader";

/* Changelog hero — a field written one row at a time. The frontier advances,
   each new row lands bright and then settles into the record behind it, while a
   soft band ahead of the front stays unwritten. A history accumulating. */

const COLS = 44;
const ROWS = 44;
const S = 28;
const N = COLS * ROWS;
const CYCLE = 14;
const UNWRITTEN = [52, 54, 66];
const FRESH = [255, 158, 124];
const KEPT = [120, 124, 142];

const build: BuildScene = (renderer) => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x08080b, 620, 1900);
  const camera = new THREE.PerspectiveCamera(42, 1, 1, 3000);
  camera.position.set(0, 146, 388);
  camera.lookAt(-26, 0, -136);

  const group = new THREE.Group();
  group.rotation.x = -Math.PI / 2 + 0.15;
  group.rotation.z = -0.4;
  scene.add(group);

  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const siz = new Float32Array(N);
  const bx = new Float32Array(N);
  const by = new Float32Array(N);
  const rowOf = new Float32Array(N);
  const jit = new Float32Array(N);
  let i = 0;
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const x = (c - (COLS - 1) / 2) * S;
      const y = (r - (ROWS - 1) / 2) * S;
      bx[i] = x;
      by[i] = y;
      rowOf[i] = r / (ROWS - 1);
      jit[i] = ((c * 13 + r * 29) % 17) / 17;
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
    vertexColors: true,
    uniforms: { uOpacity: { value: 0.95 } },
    vertexShader: pointVertexShader,
    fragmentShader: pointFragmentShader,
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
      const front = -0.12 + u * 1.3;

      for (let k = 0; k < N; k++) {
        const age = front - rowOf[k]; // <0 unwritten, 0 arriving, >0 recorded
        const arriving = Math.exp(-Math.pow(age / 0.085, 2));
        const written = age > 0 ? Math.min(1, age / 0.16) : 0;

        // rows settle into a low relief once written; the frontier sits proud
        const swell = Math.sin(t * 0.7 + jit[k] * 6.2) * 3.5;
        P[k * 3] = bx[k];
        P[k * 3 + 1] = by[k];
        P[k * 3 + 2] = swell + arriving * 40 + written * 5;

        const lit = arriving;
        const rr = UNWRITTEN[0] + (KEPT[0] - UNWRITTEN[0]) * written + (FRESH[0] - KEPT[0]) * lit;
        const gg = UNWRITTEN[1] + (KEPT[1] - UNWRITTEN[1]) * written + (FRESH[1] - KEPT[1]) * lit;
        const bb = UNWRITTEN[2] + (KEPT[2] - UNWRITTEN[2]) * written + (FRESH[2] - KEPT[2]) * lit;

        // a few points in each row hold their brightness — the entries that mattered
        const held = (jit[k] > 0.93 ? 1 : 0) * written * 0.5;
        C[k * 3] = rr / 255 + held * 0.35;
        C[k * 3 + 1] = gg / 255 + held * 0.2;
        C[k * 3 + 2] = bb / 255 + held * 0.16;

        Z[k] = 2.1 + arriving * 4.6 + held * 2.2;
      }

      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      geo.attributes.psize.needsUpdate = true;
      group.rotation.z = -0.4 + Math.sin(t * 0.05) * 0.045;
      group.rotation.x = -Math.PI / 2 + 0.15 + Math.sin(t * 0.07) * 0.02;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
};

export default function LogField() {
  return <Field className="cfx" id="cfx" build={build} />;
}
