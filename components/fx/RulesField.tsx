"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";
import { pointFragmentShader, pointVertexShader } from "@/components/fx/pointShader";

/* Rules hero — a field of loose points that finds its lines. Rows resolve from
   the top down, each one snapping into alignment and holding; a slow wave keeps
   the settled rows breathing so the field never looks frozen. Written guidance,
   taking. The per-vertex psize is what makes the snap read as a flash rather
   than a colour change. */

const COLS = 44;
const ROWS = 44;
const S = 27;
const N = COLS * ROWS;
const CYCLE = 15;
const LOOSE = [70, 72, 88];
const SNAP = [255, 152, 120];
const SET = [128, 132, 150];

/** smoothstep, clamped */
const ease = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));

const build: BuildScene = (renderer) => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x08080b, 640, 1900);
  const camera = new THREE.PerspectiveCamera(42, 1, 1, 3000);
  camera.position.set(0, 148, 390);
  camera.lookAt(-26, 0, -136);

  const group = new THREE.Group();
  group.rotation.x = -Math.PI / 2 + 0.16;
  group.rotation.z = -0.4;
  scene.add(group);

  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const siz = new Float32Array(N);
  const tx = new Float32Array(N); // where the point belongs
  const ty = new Float32Array(N);
  const lx = new Float32Array(N); // where it sits before its row resolves
  const ly = new Float32Array(N);
  const rowU = new Float32Array(N);
  const ph = new Float32Array(N);
  let i = 0;

  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const x = (c - (COLS - 1) / 2) * S;
      const y = (r - (ROWS - 1) / 2) * S;
      tx[i] = x;
      ty[i] = y;
      /* off its line, and off its mark */
      const j = (((c * 17 + r * 29) % 23) / 23) - 0.5;
      const j2 = (((c * 11 + r * 37) % 19) / 19) - 0.5;
      lx[i] = x + j * S * 5.2;
      ly[i] = y + j2 * S * 3.4;
      rowU[i] = r / (ROWS - 1);
      ph[i] = c * 0.19 + r * 0.13;
      pos[i * 3] = lx[i];
      pos[i * 3 + 1] = ly[i];
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
      const front = -0.15 + u * 1.35; // which row is resolving now

      for (let k = 0; k < N; k++) {
        const age = front - rowU[k];
        const snap = ease(age / 0.1); // this row has taken its place
        const glow = Math.exp(-Math.pow(age / 0.055, 2)); // the moment it does

        /* loose position eases to the ruled one, and stays there */
        P[k * 3] = lx[k] + (tx[k] - lx[k]) * snap;
        P[k * 3 + 1] = ly[k] + (ty[k] - ly[k]) * snap;
        P[k * 3 + 2] = Math.sin(t * 0.62 + ph[k]) * (4 + snap * 3) + glow * 34;

        const rr = LOOSE[0] + (SET[0] - LOOSE[0]) * snap + (SNAP[0] - SET[0]) * glow;
        const gg = LOOSE[1] + (SET[1] - LOOSE[1]) * snap + (SNAP[1] - SET[1]) * glow;
        const bb = LOOSE[2] + (SET[2] - LOOSE[2]) * snap + (SNAP[2] - SET[2]) * glow;

        /* a scattered few stay warmer once they have settled */
        const held = (k % 29 === 0 ? 1 : 0) * snap * 0.4;
        C[k * 3] = rr / 255 + held * 0.3;
        C[k * 3 + 1] = gg / 255 + held * 0.16;
        C[k * 3 + 2] = bb / 255 + held * 0.13;

        Z[k] = 2.0 + snap * 0.9 + glow * 4.4;
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

export default function RulesField() {
  return <Field className="rfx" id="rfx" build={build} />;
}
