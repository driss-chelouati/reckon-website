"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";

/* A shallow field of concentric rings. A pulse travels outward through them —
   each ring lights as it passes, then settles. Slow, and behind everything. */

const RINGS = 26;
const R0 = 44;
const RSTEP = 21;
const CYCLE = 9;
const OFF = [86, 88, 104];
const ON = [255, 158, 126];

const build: BuildScene = (renderer) => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x08080b, 620, 1500);
  const camera = new THREE.PerspectiveCamera(40, 1, 1, 3000);
  camera.position.set(0, 118, 470);
  camera.lookAt(0, 0, -110);

  const group = new THREE.Group();
  group.rotation.x = -Math.PI / 2 + 0.06; // laid down, seen at a low angle
  scene.add(group);

  const pos: number[] = [];
  const ring: number[] = [];
  for (let i = 0; i < RINGS; i++) {
    const r = R0 + i * RSTEP;
    const n = Math.max(14, Math.round(r / 7.4));
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2 + i * 0.11;
      pos.push(Math.cos(a) * r, Math.sin(a) * r, 0);
      ring.push(i / (RINGS - 1));
    }
  }
  const N = ring.length;

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(new Float32Array(N * 3), 3));
  const base = (geo.attributes.position.array as Float32Array).slice();

  const mat = new THREE.PointsMaterial({
    size: 2.4,
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
      const head = (t / CYCLE) % 1;
      for (let i = 0; i < N; i++) {
        const d = (head - ring[i] + 1) % 1; // how long since the pulse passed
        const lit = Math.exp(-d * 7.5);
        const g = lit * lit;
        P[i * 3 + 2] = base[i * 3 + 2] + lit * 13; // the ring lifts as it lights
        C[i * 3] = (OFF[0] + (ON[0] - OFF[0]) * g) / 255;
        C[i * 3 + 1] = (OFF[1] + (ON[1] - OFF[1]) * g) / 255;
        C[i * 3 + 2] = (OFF[2] + (ON[2] - OFF[2]) * g) / 255;
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      group.rotation.z = t * 0.035;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
};

export default function ProductField() {
  return <Field className="phfx" id="pfx" build={build} />;
}
