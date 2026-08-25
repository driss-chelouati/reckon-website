"use client";

import * as THREE from "three";
import Field, { type BuildScene } from "@/components/fx/Field";
import { pointFragmentShader, pointVertexShader } from "@/components/fx/pointShader";

/* Audit hero — a pass sweeping across an ordered field. Everything it crosses is
   checked and settles back; the few that break a rule are raised, flagged, and
   left standing behind the sweep. A pass that leaves a report.

   The flags stay up until `clear` runs them down at the end of the cycle, which
   is what makes it read as a report rather than as a wave. */

const COLS = 46;
const ROWS = 46;
const S = 27;
const N = COLS * ROWS;
const CYCLE = 12;
const REST = [74, 76, 92];
const PASS = [142, 150, 255];
const FLAG = [255, 140, 108];
const SPAN = (COLS + ROWS) * S * 0.5;
/** the sweep's direction */
const DIRX = Math.cos(0.62);
const DIRY = Math.sin(0.62);

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
  const bad = new Uint8Array(N);
  const along = new Float32Array(N);
  let i = 0;

  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const x = (c - (COLS - 1) / 2) * S;
      const y = (r - (ROWS - 1) / 2) * S;
      bx[i] = x;
      by[i] = y;
      along[i] = x * DIRX + y * DIRY;
      ph[i] = c * 0.18 + r * 0.13;
      bad[i] = (c * 19 + r * 7) % 47 === 0 ? 1 : 0; // roughly one in forty-seven
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
      const u = (t / CYCLE) % 1;
      const head = (-0.15 + u * 1.35) * SPAN * 2 - SPAN; // where the pass has reached
      const clear = 1 - Math.min(1, Math.max(0, (u - 0.88) / 0.12)); // the report clears

      for (let k = 0; k < N; k++) {
        const d = along[k] - head;
        const atHead = Math.exp(-Math.pow(d / 74, 2)); // being checked right now
        const done = d < 0 ? 1 : 0; // already passed over

        const idle = Math.sin(t * 0.5 + ph[k]) * 3;
        const raised = bad[k] ? done * clear : 0; // flagged, and left standing

        P[k * 3] = bx[k];
        P[k * 3 + 1] = by[k];
        P[k * 3 + 2] = idle + atHead * 16 + raised * 54;

        const lit = Math.max(atHead * 0.8, raised);
        const toward = bad[k] && raised > 0.02 ? FLAG : PASS;
        const rr = REST[0] + (toward[0] - REST[0]) * lit;
        const gg = REST[1] + (toward[1] - REST[1]) * lit;
        const bb = REST[2] + (toward[2] - REST[2]) * lit;

        C[k * 3] = rr / 255;
        C[k * 3 + 1] = gg / 255;
        C[k * 3 + 2] = bb / 255;

        Z[k] = 2.0 + atHead * 2.6 + raised * 3.8;
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

/* The canvas wrapper's class comes from the page, because /audit is a CSS
   Module and .afx is scoped to it — there is no global `afx` to name here. */
export default function AuditField({ className }: { className: string }) {
  return <Field className={className} id="afx" build={build} />;
}
