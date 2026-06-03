/**
 * nodeShader.ts — GLSL for the Digital Garden nodes.
 * Renders crisp, structural points (soft core + faint ring) rather than the
 * generic glowing-orb look. Size attenuates with depth; a subtle pulse and a
 * layer-emphasis term let the scene respond to the UI without being noisy.
 */

export const nodeVertexShader = /* glsl */ `
  attribute float aScale;
  attribute float aSeed;
  attribute float aLayer;

  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uActiveLayer; // -1.0 = none

  varying float vGlow;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

    float pulse = 0.62 + 0.38 * sin(uTime * 0.7 + aSeed);

    float emphasis = 0.0;
    if (uActiveLayer >= 0.0) {
      emphasis = 1.0 - smoothstep(0.0, 0.20, abs(aLayer - uActiveLayer));
    }

    vGlow = pulse + emphasis * 1.5;

    float size = uSize * aScale * (1.0 + emphasis * 0.9);
    gl_PointSize = size * uPixelRatio * (230.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const nodeFragmentShader = /* glsl */ `
  precision mediump float;

  uniform vec3 uColor;
  uniform vec3 uColorDeep;

  varying float vGlow;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    if (d > 0.5) discard;

    float core = smoothstep(0.5, 0.0, d);
    float ring = smoothstep(0.5, 0.43, d) * 0.55;

    float alpha = clamp(core * 0.9 + ring, 0.0, 1.0) * clamp(vGlow * 0.7, 0.14, 1.0);
    vec3 col = mix(uColorDeep, uColor, clamp(vGlow, 0.0, 1.0));

    gl_FragColor = vec4(col, alpha);
  }
`;
