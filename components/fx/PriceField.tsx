"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";

/* Pricing hero — a dot field carried by crossing waves. A bright crest sweeps
   through it; most points swell, ride the swell and settle back dim, while a
   scattered few catch the crest and hold their light afterwards.
   Most of it is given away. A little of it stays lit. */

const COLS = 46;
const ROWS = 46;
const S = 27;
const N = COLS * ROWS;
const SPAN = (COLS + ROWS) * S * 0.5;
const CYCLE = 11;
const DIM = [74, 76, 92];
const WARM = [255, 138, 104];
const HOT = [255, 206, 182];

/* A small shader so each point can carry its own size — the swell is what makes
   the wave legible, and PointsMaterial cannot vary size per vertex. */
const vertexShader = `
attribute float psize;
varying vec3 vColor;
void main(){
  vColor = color;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = psize;
  gl_Position = projectionMatrix * mv;
}`;

const fragmentShader = `
uniform float uOpacity;
varying vec3 vColor;
void main(){
  vec2 d = gl_PointCoord - vec2(0.5);
  float r = dot(d, d);
  if (r > 0.25) discard;
  float a = smoothstep(0.25, 0.02, r);
  gl_FragColor = vec4(vColor, a * uOpacity);
}`;

const build: BuildScene = (renderer) => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x08080b, 620, 1900);
  const camera = new THREE.PerspectiveCamera(42, 1, 1, 3000);
  camera.position.set(0, 150, 392);
  camera.lookAt(-24, 0, -140);

  const group = new THREE.Group();
  group.rotation.x = -Math.PI / 2 + 0.16;
  group.rotation.z = -0.4;
  scene.add(group);

  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const siz = new Float32Array(N);
  const bx = new Float32Array(N);
  const by = new Float32Array(N);
  const rad = new Float32Array(N);
  const keep = new Uint8Array(N);
  let i = 0;
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const x = (c - (COLS - 1) / 2) * S;
      const y = (r - (ROWS - 1) / 2) * S;
      bx[i] = x;
      by[i] = y;
      rad[i] = Math.sqrt(x * x + y * y);
      keep[i] = (c * 7 + r * 5) % 27 === 0 ? 1 : 0;
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
    vertexShader,
    fragmentShader,
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
      const crest = -0.25 + u * 1.6; // where the bright front is, in field units

      for (let k = 0; k < N; k++) {
        const x = bx[k];
        const y = by[k];

        /* three travelling waves at different angles and speeds — their sum is
           what gives the surface its roll rather than a single ripple */
        const w1 = Math.sin(x * 0.013 + y * 0.0068 - t * 1.15);
        const w2 = Math.sin(x * -0.0062 + y * 0.0141 - t * 0.82);
        const w3 = Math.sin(rad[k] * 0.0092 - t * 1.45);
        const h = w1 * 15 + w2 * 12 + w3 * 9;

        /* the crest: a soft band travelling diagonally across the field */
        const d = (x + (COLS * S) / 2 + (y + (ROWS * S) / 2)) / (SPAN * 2);
        const band = Math.exp(-Math.pow((d - crest) / 0.13, 2)); // gaussian, 0..1

        /* points lift into the crest, and lift further where the waves agree */
        P[k * 3] = x;
        P[k * 3 + 1] = y;
        P[k * 3 + 2] = h + band * 46 + band * w3 * 16;

        /* colour: dim ground → warm through the crest → the kept few stay lit */
        const held = keep[k] ? Math.min(1, Math.max(0, (crest - d) * 2.6)) : 0;
        const lit = Math.min(1, band * 1.25 + held * 0.85);
        const tip = band * band; // only the very crest goes pale

        const rr = DIM[0] + (WARM[0] - DIM[0]) * lit + (HOT[0] - WARM[0]) * tip;
        const gg = DIM[1] + (WARM[1] - DIM[1]) * lit + (HOT[1] - WARM[1]) * tip;
        const bb = DIM[2] + (WARM[2] - DIM[2]) * lit + (HOT[2] - WARM[2]) * tip;

        /* everything not kept dims once the crest has gone past */
        const spent = keep[k] ? 1 : 1 - Math.min(1, Math.max(0, (crest - d) * 1.9)) * 0.72;
        C[k * 3] = (rr / 255) * spent;
        C[k * 3 + 1] = (gg / 255) * spent;
        C[k * 3 + 2] = (bb / 255) * spent;

        /* and they swell as they ride it */
        Z[k] = 2.2 + band * 4.2 + held * 2.6 + Math.max(0, w1 + w2) * 0.5;
      }

      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      geo.attributes.psize.needsUpdate = true;
      group.rotation.z = -0.4 + Math.sin(t * 0.055) * 0.05;
      group.rotation.x = -Math.PI / 2 + 0.16 + Math.sin(t * 0.075) * 0.022;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
};

export default function PriceField() {
  return <Field className="prfx" id="prfx" build={build} />;
}
