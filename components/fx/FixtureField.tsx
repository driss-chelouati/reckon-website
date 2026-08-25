"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";
import { pointFragmentShader, pointVertexShader } from "@/components/fx/pointShader";

/* Fixtures hero — a roster laid out in even rows. Records keep arriving that are
   wider than the column allows: they swell, shove everything after them along
   the row, and hold there until the layout absorbs them and the row settles
   back. Real data does not fit, and something has to give.

   The shove is cumulative along a row, so each row's tail displaces furthest. */

const COLS = 42;
const ROWS = 44;
const S = 28;
const N = COLS * ROWS;
const CYCLE = 9;
const CALM = [76, 78, 94];
const SHOVE = [150, 154, 172];
const HOT = [255, 142, 110];

/** smoothstep, clamped */
const ease = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));

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
  const push = new Float32Array(N); // how far this point is shoved along its row
  const over = new Float32Array(N); // 1 if this is the record that does not fit
  const ph = new Float32Array(N);

  for (let r = 0; r < ROWS; r++) {
    let carried = 0;
    const rowSeed = (r * 37) % 23;
    for (let c = 0; c < COLS; c++) {
      const idx = r * COLS + c;
      bx[idx] = (c - (COLS - 1) / 2) * S;
      by[idx] = (r - (ROWS - 1) / 2) * S;
      ph[idx] = c * 0.16 + r * 0.12;

      /* two or three per row arrive too wide for the column */
      const wide = (c * 11 + rowSeed * 5) % 19 === 0;
      over[idx] = wide ? 1 : 0;
      push[idx] = carried; // everything after inherits the shove
      if (wide) carried += S * 0.9;
    }
  }

  for (let k = 0; k < N; k++) {
    pos[k * 3] = bx[k];
    pos[k * 3 + 1] = by[k];
    pos[k * 3 + 2] = 0;
    siz[k] = 2.3;
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

      /* the layout takes the strain, holds, then absorbs it */
      const strain =
        u < 0.28 ? ease(u / 0.28)
        : u < 0.56 ? 1
        : u < 0.86 ? 1 - ease((u - 0.56) / 0.3)
        : 0;

      for (let k = 0; k < N; k++) {
        const shove = push[k] * strain;
        const flare = over[k] ? Math.exp(-Math.pow((u - 0.22) / 0.13, 2)) : 0;

        P[k * 3] = bx[k] + shove;
        P[k * 3 + 1] = by[k];
        P[k * 3 + 2] = Math.sin(t * 0.55 + ph[k]) * 3 + over[k] * strain * 26;

        const moved = Math.min(1, shove / (S * 2.2));
        const lit = Math.max(over[k] * strain * 0.9, flare);
        const rr = CALM[0] + (SHOVE[0] - CALM[0]) * moved + (HOT[0] - SHOVE[0]) * lit;
        const gg = CALM[1] + (SHOVE[1] - CALM[1]) * moved + (HOT[1] - SHOVE[1]) * lit;
        const bb = CALM[2] + (SHOVE[2] - CALM[2]) * moved + (HOT[2] - SHOVE[2]) * lit;

        C[k * 3] = rr / 255;
        C[k * 3 + 1] = gg / 255;
        C[k * 3 + 2] = bb / 255;

        Z[k] = 2.0 + over[k] * strain * 2.8 + flare * 3.4 + moved * 0.6;
      }

      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      geo.attributes.psize.needsUpdate = true;
      group.rotation.z = -0.4 + Math.sin(t * 0.05) * 0.04;
      group.rotation.x = -Math.PI / 2 + 0.16 + Math.sin(t * 0.07) * 0.02;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
};

export default function FixtureField() {
  return <Field className="kfx" id="kfx" build={build} />;
}
