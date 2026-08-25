"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";
import { pointFragmentShader, pointVertexShader } from "@/components/fx/pointShader";

/* Download hero — a continuous wave field. Three ripple sources drift across it
   on independent orbits and their wakes interfere; points rise on the crests,
   swell, and warm with height. Unlike prfx there is no cycle and no scatter —
   nothing resolves, it simply keeps moving. The per-vertex psize is what makes
   the crests read as crests rather than as a change of colour. */

const COLS = 48;
const ROWS = 48;
const S = 26;
const N = COLS * ROWS;
const DIM = [72, 74, 90];
const WARM = [255, 146, 112];
const HOT = [255, 206, 184];

const build: BuildScene = (renderer) => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x08080b, 660, 1950);
  const camera = new THREE.PerspectiveCamera(42, 1, 1, 3000);
  camera.position.set(0, 152, 392);
  camera.lookAt(-26, 0, -138);

  const group = new THREE.Group();
  group.rotation.x = -Math.PI / 2 + 0.17;
  group.rotation.z = -0.4;
  scene.add(group);

  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const siz = new Float32Array(N);
  const bx = new Float32Array(N);
  const by = new Float32Array(N);
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
      siz[i] = 2.4;
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
      /* three ripple sources, each drifting on its own slow orbit */
      const s1x = Math.cos(t * 0.21) * 300;
      const s1y = Math.sin(t * 0.17) * 250;
      const s2x = Math.cos(t * 0.13 + 2.1) * -340;
      const s2y = Math.sin(t * 0.19 + 1.2) * 300;
      const s3x = Math.sin(t * 0.11 + 0.7) * 220;
      const s3y = Math.cos(t * 0.15 + 2.6) * -280;

      for (let k = 0; k < N; k++) {
        const x = bx[k];
        const y = by[k];

        const d1 = Math.sqrt((x - s1x) * (x - s1x) + (y - s1y) * (y - s1y));
        const d2 = Math.sqrt((x - s2x) * (x - s2x) + (y - s2y) * (y - s2y));
        const d3 = Math.sqrt((x - s3x) * (x - s3x) + (y - s3y) * (y - s3y));

        /* radial ripples, damped with distance, plus one long directional swell */
        const w1 = Math.sin(d1 * 0.017 - t * 1.55) * (170 / (170 + d1 * 0.55));
        const w2 = Math.sin(d2 * 0.0138 - t * 1.2) * (170 / (170 + d2 * 0.55));
        const w3 = Math.sin(d3 * 0.0205 - t * 1.85) * (150 / (150 + d3 * 0.6));
        const sw = Math.sin(x * 0.0042 + y * 0.0029 - t * 0.62);

        const h = w1 * 30 + w2 * 26 + w3 * 20 + sw * 11;
        const norm = Math.min(1, Math.max(0, (h + 40) / 80)); // 0 trough, 1 crest
        const crest = norm * norm * norm; // only the peaks catch light

        P[k * 3] = x;
        P[k * 3 + 1] = y;
        P[k * 3 + 2] = h;

        const rr = DIM[0] + (WARM[0] - DIM[0]) * norm + (HOT[0] - WARM[0]) * crest;
        const gg = DIM[1] + (WARM[1] - DIM[1]) * norm + (HOT[1] - WARM[1]) * crest;
        const bb = DIM[2] + (WARM[2] - DIM[2]) * norm + (HOT[2] - WARM[2]) * crest;
        const shade = 0.5 + norm * 0.5; // troughs sit back

        C[k * 3] = (rr / 255) * shade;
        C[k * 3 + 1] = (gg / 255) * shade;
        C[k * 3 + 2] = (bb / 255) * shade;

        Z[k] = 1.9 + norm * 2.4 + crest * 3.4;
      }

      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      geo.attributes.psize.needsUpdate = true;
      group.rotation.z = -0.4 + Math.sin(t * 0.048) * 0.05;
      group.rotation.x = -Math.PI / 2 + 0.17 + Math.sin(t * 0.068) * 0.024;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
};

export default function DownloadField() {
  return <Field className="ofx" id="ofx" build={build} />;
}
