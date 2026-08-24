/* A small shader so each point can carry its own size. PointsMaterial cannot
   vary point size per vertex, and on the two fields that use this the swell is
   what makes the wave legible. Shared by prfx and cfx unchanged. */
export const pointVertexShader = `
attribute float psize;
varying vec3 vColor;
void main(){
  vColor = color;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = psize;
  gl_Position = projectionMatrix * mv;
}`;

export const pointFragmentShader = `
uniform float uOpacity;
varying vec3 vColor;
void main(){
  vec2 d = gl_PointCoord - vec2(0.5);
  float r = dot(d, d);
  if (r > 0.25) discard;
  float a = smoothstep(0.25, 0.02, r);
  gl_FragColor = vec4(vColor, a * uOpacity);
}`;
