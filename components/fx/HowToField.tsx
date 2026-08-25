"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";
import { pointFragmentShader, pointVertexShader } from "@/components/fx/pointShader";

/* How-to hero — the field divided into four regions that light in turn, one per
   route in. Nothing arrives and nothing leaves; each quarter simply takes its
   turn, which is the page's argument: four ways into the same thing. */

const COLS = 44;
const ROWS = 44;
const S = 28;
const N = COLS * ROWS;
const CYCLE = 13;
const DIM = [74, 76, 92];
const WARM = [255, 148, 116];

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
  const grp = new Float32Array(N);
  let i = 0;
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      bx[i] = (c - (COLS - 1) / 2) * S;
      by[i] = (r - (ROWS - 1) / 2) * S;
      ph[i] = c * 0.17 + r * 0.13;
      grp[i] = Math.floor((c / COLS + r / ROWS) * 2) % 4; // four routes
      pos[i * 3] = bx[i];
      pos[i * 3 + 1] = by[i];
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
      const live = Math.floor(u * 4); // whose turn it is
      const local = u * 4 - live;
      const swell = Math.exp(-Math.pow((local - 0.32) / 0.2, 2));

      for (let k = 0; k < N; k++) {
        const mine = grp[k] === live ? 1 : 0;
        const lift = Math.sin(bx[k] * 0.006 + by[k] * 0.0045 + t * 0.5) * 6;

        P[k * 3] = bx[k];
        P[k * 3 + 1] = by[k];
        P[k * 3 + 2] = lift + mine * swell * 34;

        const lit = mine * swell;
        C[k * 3] = (DIM[0] + (WARM[0] - DIM[0]) * lit) / 255;
        C[k * 3 + 1] = (DIM[1] + (WARM[1] - DIM[1]) * lit) / 255;
        C[k * 3 + 2] = (DIM[2] + (WARM[2] - DIM[2]) * lit) / 255;

        Z[k] = 2.0 + lit * 3.4 + Math.max(0, lift) * 0.06;
      }

      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      geo.attributes.psize.needsUpdate = true;
      group.rotation.z = -0.4 + Math.sin(t * 0.05) * 0.04;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
};

export default function HowToField() {
  return <Field className="htfx" id="htfx" build={build} />;
}
