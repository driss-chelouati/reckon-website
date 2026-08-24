"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";

/* Showcase hero — a slow lattice drifting behind the title. Points on a wide
   plane, lifted by a travelling swell, so it reads as a field rather than a
   grid. */

const COLS = 58;
const ROWS = 26;
const SX = 26;
const SZ = 26;
const N = COLS * ROWS;
const OFF = [84, 86, 100];
const ON = [255, 152, 120];

const build: BuildScene = (renderer) => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x08080b, 520, 1600);
  const camera = new THREE.PerspectiveCamera(42, 1, 1, 3000);
  camera.position.set(0, 96, 430);
  camera.lookAt(0, 0, -180);

  const group = new THREE.Group();
  group.rotation.x = -Math.PI / 2 + 0.05;
  scene.add(group);

  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const bx = new Float32Array(N);
  const by = new Float32Array(N);
  let i = 0;
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const x = (c - (COLS - 1) / 2) * SX;
      const y = (r - (ROWS - 1) / 2) * SZ;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = 0;
      bx[i] = x;
      by[i] = y;
      i++;
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  const mat = new THREE.PointsMaterial({
    size: 2.2,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
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
      for (let k = 0; k < N; k++) {
        const d = Math.sqrt(bx[k] * bx[k] * 0.6 + by[k] * by[k]) * 0.011;
        const s = Math.sin(d - t * 0.85);
        P[k * 3 + 2] = s * 11;
        const g = Math.pow(Math.max(0, s), 6);
        C[k * 3] = (OFF[0] + (ON[0] - OFF[0]) * g) / 255;
        C[k * 3 + 1] = (OFF[1] + (ON[1] - OFF[1]) * g) / 255;
        C[k * 3 + 2] = (OFF[2] + (ON[2] - OFF[2]) * g) / 255;
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      group.rotation.z = Math.sin(t * 0.05) * 0.05;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
};

export default function ShowcaseField() {
  return <Field className="xfx" id="xfx" build={build} />;
}
