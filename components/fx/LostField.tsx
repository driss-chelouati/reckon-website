"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";
import { pointFragmentShader, pointVertexShader } from "@/components/fx/pointShader";

/* 404 hero — the lattice with a route missing out of it. A sweep crosses the
   field and lights whatever it passes, except for one block that was never
   built: that stays dark, and the points around its edge answer in the failure
   colour instead of the warm one. One of the rules on /how-it-works is that
   every route referenced is a route that exists. This is the page you get when
   one did not. */

const COLS = 48;
const ROWS = 48;
const S = 26;
const N = COLS * ROWS;
const CYCLE = 10;
/** the block that is not there, in lattice cells */
const HOLE = { c0: 18, c1: 29, r0: 20, r1: 28 };
const DIM = [66, 68, 84];
const WARM = [255, 150, 118];
/** --pen, which on this site is the failure colour and nothing else */
const FAIL = [242, 103, 138];

const inHole = (c: number, r: number) =>
  c >= HOLE.c0 && c <= HOLE.c1 && r >= HOLE.r0 && r <= HOLE.r1;

const build: BuildScene = (renderer) => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x08080b, 640, 1900);
  const camera = new THREE.PerspectiveCamera(42, 1, 1, 3000);
  camera.position.set(0, 150, 392);
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
  const along = new Float32Array(N); // 0..1 along the sweep's direction
  const gone = new Float32Array(N); // inside the missing block
  const rim = new Float32Array(N); // one cell outside its edge

  let i = 0;
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const x = (c - (COLS - 1) / 2) * S;
      const y = (r - (ROWS - 1) / 2) * S;
      bx[i] = x;
      by[i] = y;
      ph[i] = c * 0.18 + r * 0.14;
      /* the sweep runs on a diagonal, so it reaches the hole partway through
         rather than all at once */
      along[i] = (c / (COLS - 1)) * 0.62 + (r / (ROWS - 1)) * 0.38;
      gone[i] = inHole(c, r) ? 1 : 0;
      rim[i] =
        !inHole(c, r) &&
        (inHole(c - 1, r) || inHole(c + 1, r) || inHole(c, r - 1) || inHole(c, r + 1))
          ? 1
          : 0;
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
      const head = (t / CYCLE) % 1;
      const front = -0.22 + head * 1.44; // where the sweep has reached

      for (let k = 0; k < N; k++) {
        P[k * 3] = bx[k];
        P[k * 3 + 1] = by[k];

        if (gone[k]) {
          /* nothing stands here, so nothing is drawn — a hole in the lattice
             rather than a darker patch of it */
          P[k * 3 + 2] = 0;
          C[k * 3] = 0;
          C[k * 3 + 1] = 0;
          C[k * 3 + 2] = 0;
          Z[k] = 0;
          continue;
        }

        const band = Math.exp(-Math.pow((along[k] - front) / 0.055, 2));
        const warm = rim[k] ? 0 : band; // the lattice takes the light
        const fail = rim[k] ? band : 0; // its torn edge does not

        P[k * 3 + 2] = Math.sin(t * 0.5 + ph[k]) * 3 + warm * 26 + fail * 40;

        C[k * 3] = (DIM[0] + (WARM[0] - DIM[0]) * warm + (FAIL[0] - DIM[0]) * fail) / 255;
        C[k * 3 + 1] = (DIM[1] + (WARM[1] - DIM[1]) * warm + (FAIL[1] - DIM[1]) * fail) / 255;
        C[k * 3 + 2] = (DIM[2] + (WARM[2] - DIM[2]) * warm + (FAIL[2] - DIM[2]) * fail) / 255;

        Z[k] = 2.0 + warm * 3.2 + fail * 4.8;
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

export default function LostField() {
  return <Field className="nffx" id="nffx" build={build} />;
}
