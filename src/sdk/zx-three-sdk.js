var OB = Object.defineProperty;
var PB = (h, A, Q) => A in h ? OB(h, A, { enumerable: !0, configurable: !0, writable: !0, value: Q }) : h[A] = Q;
var o = (h, A, Q) => (PB(h, typeof A != "symbol" ? A + "" : A, Q), Q);
function GQ(h, A) {
  var Q = LQ();
  return GQ = function(B, C) {
    B = B - 490;
    var E = Q[B];
    return E;
  }, GQ(h, A);
}
var QB = GQ;
(function(h, A) {
  for (var Q = GQ, B = h(); ; )
    try {
      var C = parseInt(Q(497)) / 1 + -parseInt(Q(495)) / 2 * (-parseInt(Q(501)) / 3) + -parseInt(Q(490)) / 4 + -parseInt(Q(496)) / 5 + parseInt(Q(499)) / 6 * (parseInt(Q(493)) / 7) + -parseInt(Q(491)) / 8 + -parseInt(Q(498)) / 9 * (-parseInt(Q(500)) / 10);
      if (C === A)
        break;
      B.push(B.shift());
    } catch {
      B.push(B.shift());
    }
})(LQ, 888722);
function LQ() {
  var h = [`
  varying vec2 v_TexCoord;
  void main () {
    gl_Position = vec4(position, 1.0);
    v_TexCoord = uv;
  }
  `, "36953fOQLPY", `
  precision mediump float;
  varying vec2 v_TexCoord;
  uniform sampler2D tDiffuse; // 宫格图
  uniform sampler2D u_MaskSampler; // 蒙版
  uniform float u_RowNum;
  uniform float u_ColNum;
  uniform float u_PixelLayout;
  uniform float u_ViewOrder;
  uniform float u_Proportion;

  // 获取xyz
  vec3 getViewXyz(vec4 rgba, float view_count) {
    float maxViewCount = view_count - 1.0;
    rgba = 0.5 + (0.5 - rgba) * u_Proportion;
    vec3 view_xyz = vec3(
      round(rgba.r * maxViewCount),
      0.0,
      round(rgba.b * maxViewCount)
    );
    if (u_PixelLayout == 1.0) {
      view_xyz.g = view_xyz.r;
      view_xyz.r = view_xyz.b;
      view_xyz.b = view_xyz.g;
    }
    view_xyz.g = round(rgba.g * maxViewCount);
    return view_xyz;
  }

  // 获取uv坐标
  vec2 getUv(vec2 uv, float single_coord) {
    int x = int(mod(single_coord, u_ColNum));
    int y = int(single_coord / u_ColNum);
    if (u_ViewOrder == 0.0) {
      y = int(u_RowNum) - y - 1;
    }
    return vec2((float(x) + uv.x) / u_ColNum, (float(y) + uv.y) / u_RowNum);
  }

  // 获取蒙版rgba
  vec4 getRGBA() {
    return texture2D(u_MaskSampler, v_TexCoord);
  }

  void main () {
    vec4 rgba = getRGBA();
    vec3 xyz = getViewXyz(rgba, u_RowNum * u_ColNum);

    vec2 uv_r = getUv(v_TexCoord, xyz.x);
    vec2 uv_g = getUv(v_TexCoord, xyz.y);
    vec2 uv_b = getUv(v_TexCoord, xyz.z);

    rgba.x = texture2D(tDiffuse, uv_r).x;
    rgba.y = texture2D(tDiffuse, uv_g).y;
    rgba.z = texture2D(tDiffuse, uv_b).z;
    rgba.w = 1.0;
    gl_FragColor = rgba;
  }
  `, "2IEpfRo", "6034170WAVHQw", "213526wYvyyo", "5798241LOAHeE", "1794MtqplB", "10zAchAZ", "4883169SqVKoJ", "5257740HUHbMb", "5231424DBcHzq"];
  return LQ = function() {
    return h;
  }, LQ();
}
const BB = { vertexShader: QB(492), fragmentShader: QB(494) };
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const bB = "161", qQ = 0, qB = 1, XB = 0, CB = 1, EB = 100, IB = 204, gB = 205, wB = 3, vB = 0, WB = 300, DB = 1e3, vA = 1001, MB = 1002, sB = 1003, ZB = 1006, _B = 1008, $B = 1009, AC = 1014, QC = 1015, BC = 1016, CC = 1020, EC = 1023, YQ = 1026, KB = 1027, IC = 3e3, UQ = 3001, WA = "", z = "srgb", $Q = "srgb-linear", gC = "display-p3", eB = "display-p3-linear", XQ = "linear", yB = "srgb", cB = "rec709", hB = "p3", GA = 7680, kB = 519, wC = 515, UB = 35044, bA = 2e3, GB = 2001;
class eA {
  addEventListener(A, Q) {
    this._listeners === void 0 && (this._listeners = {});
    const B = this._listeners;
    B[A] === void 0 && (B[A] = []), B[A].indexOf(Q) === -1 && B[A].push(Q);
  }
  hasEventListener(A, Q) {
    if (this._listeners === void 0)
      return !1;
    const B = this._listeners;
    return B[A] !== void 0 && B[A].indexOf(Q) !== -1;
  }
  removeEventListener(A, Q) {
    if (this._listeners === void 0)
      return;
    const C = this._listeners[A];
    if (C !== void 0) {
      const E = C.indexOf(Q);
      E !== -1 && C.splice(E, 1);
    }
  }
  dispatchEvent(A) {
    if (this._listeners === void 0)
      return;
    const B = this._listeners[A.type];
    if (B !== void 0) {
      A.target = this;
      const C = B.slice(0);
      for (let E = 0, I = C.length; E < I; E++)
        C[E].call(this, A);
      A.target = null;
    }
  }
}
const j = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
function uA() {
  const h = Math.random() * 4294967295 | 0, A = Math.random() * 4294967295 | 0, Q = Math.random() * 4294967295 | 0, B = Math.random() * 4294967295 | 0;
  return (j[h & 255] + j[h >> 8 & 255] + j[h >> 16 & 255] + j[h >> 24 & 255] + "-" + j[A & 255] + j[A >> 8 & 255] + "-" + j[A >> 16 & 15 | 64] + j[A >> 24 & 255] + "-" + j[Q & 63 | 128] + j[Q >> 8 & 255] + "-" + j[Q >> 16 & 255] + j[Q >> 24 & 255] + j[B & 255] + j[B >> 8 & 255] + j[B >> 16 & 255] + j[B >> 24 & 255]).toLowerCase();
}
function W(h, A, Q) {
  return Math.max(A, Math.min(Q, h));
}
function DC(h, A) {
  return (h % A + A) % A;
}
function rQ(h, A, Q) {
  return (1 - Q) * h + Q * A;
}
function dA(h, A) {
  switch (A.constructor) {
    case Float32Array:
      return h;
    case Uint32Array:
      return h / 4294967295;
    case Uint16Array:
      return h / 65535;
    case Uint8Array:
      return h / 255;
    case Int32Array:
      return Math.max(h / 2147483647, -1);
    case Int16Array:
      return Math.max(h / 32767, -1);
    case Int8Array:
      return Math.max(h / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function b(h, A) {
  switch (A.constructor) {
    case Float32Array:
      return h;
    case Uint32Array:
      return Math.round(h * 4294967295);
    case Uint16Array:
      return Math.round(h * 65535);
    case Uint8Array:
      return Math.round(h * 255);
    case Int32Array:
      return Math.round(h * 2147483647);
    case Int16Array:
      return Math.round(h * 32767);
    case Int8Array:
      return Math.round(h * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class f {
  constructor(A = 0, Q = 0) {
    f.prototype.isVector2 = !0, this.x = A, this.y = Q;
  }
  get width() {
    return this.x;
  }
  set width(A) {
    this.x = A;
  }
  get height() {
    return this.y;
  }
  set height(A) {
    this.y = A;
  }
  set(A, Q) {
    return this.x = A, this.y = Q, this;
  }
  setScalar(A) {
    return this.x = A, this.y = A, this;
  }
  setX(A) {
    return this.x = A, this;
  }
  setY(A) {
    return this.y = A, this;
  }
  setComponent(A, Q) {
    switch (A) {
      case 0:
        this.x = Q;
        break;
      case 1:
        this.y = Q;
        break;
      default:
        throw new Error("index is out of range: " + A);
    }
    return this;
  }
  getComponent(A) {
    switch (A) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + A);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(A) {
    return this.x = A.x, this.y = A.y, this;
  }
  add(A) {
    return this.x += A.x, this.y += A.y, this;
  }
  addScalar(A) {
    return this.x += A, this.y += A, this;
  }
  addVectors(A, Q) {
    return this.x = A.x + Q.x, this.y = A.y + Q.y, this;
  }
  addScaledVector(A, Q) {
    return this.x += A.x * Q, this.y += A.y * Q, this;
  }
  sub(A) {
    return this.x -= A.x, this.y -= A.y, this;
  }
  subScalar(A) {
    return this.x -= A, this.y -= A, this;
  }
  subVectors(A, Q) {
    return this.x = A.x - Q.x, this.y = A.y - Q.y, this;
  }
  multiply(A) {
    return this.x *= A.x, this.y *= A.y, this;
  }
  multiplyScalar(A) {
    return this.x *= A, this.y *= A, this;
  }
  divide(A) {
    return this.x /= A.x, this.y /= A.y, this;
  }
  divideScalar(A) {
    return this.multiplyScalar(1 / A);
  }
  applyMatrix3(A) {
    const Q = this.x, B = this.y, C = A.elements;
    return this.x = C[0] * Q + C[3] * B + C[6], this.y = C[1] * Q + C[4] * B + C[7], this;
  }
  min(A) {
    return this.x = Math.min(this.x, A.x), this.y = Math.min(this.y, A.y), this;
  }
  max(A) {
    return this.x = Math.max(this.x, A.x), this.y = Math.max(this.y, A.y), this;
  }
  clamp(A, Q) {
    return this.x = Math.max(A.x, Math.min(Q.x, this.x)), this.y = Math.max(A.y, Math.min(Q.y, this.y)), this;
  }
  clampScalar(A, Q) {
    return this.x = Math.max(A, Math.min(Q, this.x)), this.y = Math.max(A, Math.min(Q, this.y)), this;
  }
  clampLength(A, Q) {
    const B = this.length();
    return this.divideScalar(B || 1).multiplyScalar(Math.max(A, Math.min(Q, B)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(A) {
    return this.x * A.x + this.y * A.y;
  }
  cross(A) {
    return this.x * A.y - this.y * A.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(A) {
    const Q = Math.sqrt(this.lengthSq() * A.lengthSq());
    if (Q === 0)
      return Math.PI / 2;
    const B = this.dot(A) / Q;
    return Math.acos(W(B, -1, 1));
  }
  distanceTo(A) {
    return Math.sqrt(this.distanceToSquared(A));
  }
  distanceToSquared(A) {
    const Q = this.x - A.x, B = this.y - A.y;
    return Q * Q + B * B;
  }
  manhattanDistanceTo(A) {
    return Math.abs(this.x - A.x) + Math.abs(this.y - A.y);
  }
  setLength(A) {
    return this.normalize().multiplyScalar(A);
  }
  lerp(A, Q) {
    return this.x += (A.x - this.x) * Q, this.y += (A.y - this.y) * Q, this;
  }
  lerpVectors(A, Q, B) {
    return this.x = A.x + (Q.x - A.x) * B, this.y = A.y + (Q.y - A.y) * B, this;
  }
  equals(A) {
    return A.x === this.x && A.y === this.y;
  }
  fromArray(A, Q = 0) {
    return this.x = A[Q], this.y = A[Q + 1], this;
  }
  toArray(A = [], Q = 0) {
    return A[Q] = this.x, A[Q + 1] = this.y, A;
  }
  fromBufferAttribute(A, Q) {
    return this.x = A.getX(Q), this.y = A.getY(Q), this;
  }
  rotateAround(A, Q) {
    const B = Math.cos(Q), C = Math.sin(Q), E = this.x - A.x, I = this.y - A.y;
    return this.x = E * B - I * C + A.x, this.y = E * C + I * B + A.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class yA {
  constructor(A, Q, B, C, E, I, g, w, s) {
    yA.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], A !== void 0 && this.set(A, Q, B, C, E, I, g, w, s);
  }
  set(A, Q, B, C, E, I, g, w, s) {
    const K = this.elements;
    return K[0] = A, K[1] = C, K[2] = g, K[3] = Q, K[4] = E, K[5] = w, K[6] = B, K[7] = I, K[8] = s, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(A) {
    const Q = this.elements, B = A.elements;
    return Q[0] = B[0], Q[1] = B[1], Q[2] = B[2], Q[3] = B[3], Q[4] = B[4], Q[5] = B[5], Q[6] = B[6], Q[7] = B[7], Q[8] = B[8], this;
  }
  extractBasis(A, Q, B) {
    return A.setFromMatrix3Column(this, 0), Q.setFromMatrix3Column(this, 1), B.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(A) {
    const Q = A.elements;
    return this.set(
      Q[0],
      Q[4],
      Q[8],
      Q[1],
      Q[5],
      Q[9],
      Q[2],
      Q[6],
      Q[10]
    ), this;
  }
  multiply(A) {
    return this.multiplyMatrices(this, A);
  }
  premultiply(A) {
    return this.multiplyMatrices(A, this);
  }
  multiplyMatrices(A, Q) {
    const B = A.elements, C = Q.elements, E = this.elements, I = B[0], g = B[3], w = B[6], s = B[1], K = B[4], y = B[7], c = B[2], D = B[5], M = B[8], k = C[0], U = C[3], G = C[6], F = C[1], p = C[4], J = C[7], i = C[2], a = C[5], N = C[8];
    return E[0] = I * k + g * F + w * i, E[3] = I * U + g * p + w * a, E[6] = I * G + g * J + w * N, E[1] = s * k + K * F + y * i, E[4] = s * U + K * p + y * a, E[7] = s * G + K * J + y * N, E[2] = c * k + D * F + M * i, E[5] = c * U + D * p + M * a, E[8] = c * G + D * J + M * N, this;
  }
  multiplyScalar(A) {
    const Q = this.elements;
    return Q[0] *= A, Q[3] *= A, Q[6] *= A, Q[1] *= A, Q[4] *= A, Q[7] *= A, Q[2] *= A, Q[5] *= A, Q[8] *= A, this;
  }
  determinant() {
    const A = this.elements, Q = A[0], B = A[1], C = A[2], E = A[3], I = A[4], g = A[5], w = A[6], s = A[7], K = A[8];
    return Q * I * K - Q * g * s - B * E * K + B * g * w + C * E * s - C * I * w;
  }
  invert() {
    const A = this.elements, Q = A[0], B = A[1], C = A[2], E = A[3], I = A[4], g = A[5], w = A[6], s = A[7], K = A[8], y = K * I - g * s, c = g * w - K * E, D = s * E - I * w, M = Q * y + B * c + C * D;
    if (M === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const k = 1 / M;
    return A[0] = y * k, A[1] = (C * s - K * B) * k, A[2] = (g * B - C * I) * k, A[3] = c * k, A[4] = (K * Q - C * w) * k, A[5] = (C * E - g * Q) * k, A[6] = D * k, A[7] = (B * w - s * Q) * k, A[8] = (I * Q - B * E) * k, this;
  }
  transpose() {
    let A;
    const Q = this.elements;
    return A = Q[1], Q[1] = Q[3], Q[3] = A, A = Q[2], Q[2] = Q[6], Q[6] = A, A = Q[5], Q[5] = Q[7], Q[7] = A, this;
  }
  getNormalMatrix(A) {
    return this.setFromMatrix4(A).invert().transpose();
  }
  transposeIntoArray(A) {
    const Q = this.elements;
    return A[0] = Q[0], A[1] = Q[3], A[2] = Q[6], A[3] = Q[1], A[4] = Q[4], A[5] = Q[7], A[6] = Q[2], A[7] = Q[5], A[8] = Q[8], this;
  }
  setUvTransform(A, Q, B, C, E, I, g) {
    const w = Math.cos(E), s = Math.sin(E);
    return this.set(
      B * w,
      B * s,
      -B * (w * I + s * g) + I + A,
      -C * s,
      C * w,
      -C * (-s * I + w * g) + g + Q,
      0,
      0,
      1
    ), this;
  }
  //
  scale(A, Q) {
    return this.premultiply(RQ.makeScale(A, Q)), this;
  }
  rotate(A) {
    return this.premultiply(RQ.makeRotation(-A)), this;
  }
  translate(A, Q) {
    return this.premultiply(RQ.makeTranslation(A, Q)), this;
  }
  // for 2D Transforms
  makeTranslation(A, Q) {
    return A.isVector2 ? this.set(
      1,
      0,
      A.x,
      0,
      1,
      A.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      A,
      0,
      1,
      Q,
      0,
      0,
      1
    ), this;
  }
  makeRotation(A) {
    const Q = Math.cos(A), B = Math.sin(A);
    return this.set(
      Q,
      -B,
      0,
      B,
      Q,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(A, Q) {
    return this.set(
      A,
      0,
      0,
      0,
      Q,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(A) {
    const Q = this.elements, B = A.elements;
    for (let C = 0; C < 9; C++)
      if (Q[C] !== B[C])
        return !1;
    return !0;
  }
  fromArray(A, Q = 0) {
    for (let B = 0; B < 9; B++)
      this.elements[B] = A[B + Q];
    return this;
  }
  toArray(A = [], Q = 0) {
    const B = this.elements;
    return A[Q] = B[0], A[Q + 1] = B[1], A[Q + 2] = B[2], A[Q + 3] = B[3], A[Q + 4] = B[4], A[Q + 5] = B[5], A[Q + 6] = B[6], A[Q + 7] = B[7], A[Q + 8] = B[8], A;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const RQ = /* @__PURE__ */ new yA();
function MC(h) {
  for (let A = h.length - 1; A >= 0; --A)
    if (h[A] >= 65535)
      return !0;
  return !1;
}
function LB(h) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", h);
}
const JB = {};
function ZA(h) {
  h in JB || (JB[h] = !0, console.warn(h));
}
const FB = /* @__PURE__ */ new yA().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), SB = /* @__PURE__ */ new yA().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), _A = {
  [$Q]: {
    transfer: XQ,
    primaries: cB,
    toReference: (h) => h,
    fromReference: (h) => h
  },
  [z]: {
    transfer: yB,
    primaries: cB,
    toReference: (h) => h.convertSRGBToLinear(),
    fromReference: (h) => h.convertLinearToSRGB()
  },
  [eB]: {
    transfer: XQ,
    primaries: hB,
    toReference: (h) => h.applyMatrix3(SB),
    fromReference: (h) => h.applyMatrix3(FB)
  },
  [gC]: {
    transfer: yB,
    primaries: hB,
    toReference: (h) => h.convertSRGBToLinear().applyMatrix3(SB),
    fromReference: (h) => h.applyMatrix3(FB).convertLinearToSRGB()
  }
}, sC = /* @__PURE__ */ new Set([$Q, eB]), m = {
  enabled: !0,
  _workingColorSpace: $Q,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(h) {
    if (!sC.has(h))
      throw new Error(`Unsupported working color space, "${h}".`);
    this._workingColorSpace = h;
  },
  convert: function(h, A, Q) {
    if (this.enabled === !1 || A === Q || !A || !Q)
      return h;
    const B = _A[A].toReference, C = _A[Q].fromReference;
    return C(B(h));
  },
  fromWorkingColorSpace: function(h, A) {
    return this.convert(h, this._workingColorSpace, A);
  },
  toWorkingColorSpace: function(h, A) {
    return this.convert(h, A, this._workingColorSpace);
  },
  getPrimaries: function(h) {
    return _A[h].primaries;
  },
  getTransfer: function(h) {
    return h === WA ? XQ : _A[h].transfer;
  }
};
function YA(h) {
  return h < 0.04045 ? h * 0.0773993808 : Math.pow(h * 0.9478672986 + 0.0521327014, 2.4);
}
function dQ(h) {
  return h < 31308e-7 ? h * 12.92 : 1.055 * Math.pow(h, 0.41666) - 0.055;
}
let LA;
class KC {
  static getDataURL(A) {
    if (/^data:/i.test(A.src) || typeof HTMLCanvasElement > "u")
      return A.src;
    let Q;
    if (A instanceof HTMLCanvasElement)
      Q = A;
    else {
      LA === void 0 && (LA = LB("canvas")), LA.width = A.width, LA.height = A.height;
      const B = LA.getContext("2d");
      A instanceof ImageData ? B.putImageData(A, 0, 0) : B.drawImage(A, 0, 0, A.width, A.height), Q = LA;
    }
    return Q.width > 2048 || Q.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", A), Q.toDataURL("image/jpeg", 0.6)) : Q.toDataURL("image/png");
  }
  static sRGBToLinear(A) {
    if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap) {
      const Q = LB("canvas");
      Q.width = A.width, Q.height = A.height;
      const B = Q.getContext("2d");
      B.drawImage(A, 0, 0, A.width, A.height);
      const C = B.getImageData(0, 0, A.width, A.height), E = C.data;
      for (let I = 0; I < E.length; I++)
        E[I] = YA(E[I] / 255) * 255;
      return B.putImageData(C, 0, 0), Q;
    } else if (A.data) {
      const Q = A.data.slice(0);
      for (let B = 0; B < Q.length; B++)
        Q instanceof Uint8Array || Q instanceof Uint8ClampedArray ? Q[B] = Math.floor(YA(Q[B] / 255) * 255) : Q[B] = YA(Q[B]);
      return {
        data: Q,
        width: A.width,
        height: A.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), A;
  }
}
let yC = 0;
class uB {
  constructor(A = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: yC++ }), this.uuid = uA(), this.data = A, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(A) {
    A === !0 && this.version++;
  }
  toJSON(A) {
    const Q = A === void 0 || typeof A == "string";
    if (!Q && A.images[this.uuid] !== void 0)
      return A.images[this.uuid];
    const B = {
      uuid: this.uuid,
      url: ""
    }, C = this.data;
    if (C !== null) {
      let E;
      if (Array.isArray(C)) {
        E = [];
        for (let I = 0, g = C.length; I < g; I++)
          C[I].isDataTexture ? E.push(jQ(C[I].image)) : E.push(jQ(C[I]));
      } else
        E = jQ(C);
      B.url = E;
    }
    return Q || (A.images[this.uuid] = B), B;
  }
}
function jQ(h) {
  return typeof HTMLImageElement < "u" && h instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && h instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && h instanceof ImageBitmap ? KC.getDataURL(h) : h.data ? {
    data: Array.from(h.data),
    width: h.width,
    height: h.height,
    type: h.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let cC = 0;
class BA extends eA {
  constructor(A = BA.DEFAULT_IMAGE, Q = BA.DEFAULT_MAPPING, B = vA, C = vA, E = ZB, I = _B, g = EC, w = $B, s = BA.DEFAULT_ANISOTROPY, K = WA) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: cC++ }), this.uuid = uA(), this.name = "", this.source = new uB(A), this.mipmaps = [], this.mapping = Q, this.channel = 0, this.wrapS = B, this.wrapT = C, this.magFilter = E, this.minFilter = I, this.anisotropy = s, this.format = g, this.internalFormat = null, this.type = w, this.offset = new f(0, 0), this.repeat = new f(1, 1), this.center = new f(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new yA(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof K == "string" ? this.colorSpace = K : (ZA("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = K === UQ ? z : WA), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(A = null) {
    this.source.data = A;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(A) {
    return this.name = A.name, this.source = A.source, this.mipmaps = A.mipmaps.slice(0), this.mapping = A.mapping, this.channel = A.channel, this.wrapS = A.wrapS, this.wrapT = A.wrapT, this.magFilter = A.magFilter, this.minFilter = A.minFilter, this.anisotropy = A.anisotropy, this.format = A.format, this.internalFormat = A.internalFormat, this.type = A.type, this.offset.copy(A.offset), this.repeat.copy(A.repeat), this.center.copy(A.center), this.rotation = A.rotation, this.matrixAutoUpdate = A.matrixAutoUpdate, this.matrix.copy(A.matrix), this.generateMipmaps = A.generateMipmaps, this.premultiplyAlpha = A.premultiplyAlpha, this.flipY = A.flipY, this.unpackAlignment = A.unpackAlignment, this.colorSpace = A.colorSpace, this.userData = JSON.parse(JSON.stringify(A.userData)), this.needsUpdate = !0, this;
  }
  toJSON(A) {
    const Q = A === void 0 || typeof A == "string";
    if (!Q && A.textures[this.uuid] !== void 0)
      return A.textures[this.uuid];
    const B = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(A).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (B.userData = this.userData), Q || (A.textures[this.uuid] = B), B;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(A) {
    if (this.mapping !== WB)
      return A;
    if (A.applyMatrix3(this.matrix), A.x < 0 || A.x > 1)
      switch (this.wrapS) {
        case DB:
          A.x = A.x - Math.floor(A.x);
          break;
        case vA:
          A.x = A.x < 0 ? 0 : 1;
          break;
        case MB:
          Math.abs(Math.floor(A.x) % 2) === 1 ? A.x = Math.ceil(A.x) - A.x : A.x = A.x - Math.floor(A.x);
          break;
      }
    if (A.y < 0 || A.y > 1)
      switch (this.wrapT) {
        case DB:
          A.y = A.y - Math.floor(A.y);
          break;
        case vA:
          A.y = A.y < 0 ? 0 : 1;
          break;
        case MB:
          Math.abs(Math.floor(A.y) % 2) === 1 ? A.y = Math.ceil(A.y) - A.y : A.y = A.y - Math.floor(A.y);
          break;
      }
    return this.flipY && (A.y = 1 - A.y), A;
  }
  set needsUpdate(A) {
    A === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return ZA("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === z ? UQ : IC;
  }
  set encoding(A) {
    ZA("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = A === UQ ? z : WA;
  }
}
BA.DEFAULT_IMAGE = null;
BA.DEFAULT_MAPPING = WB;
BA.DEFAULT_ANISOTROPY = 1;
class JQ {
  constructor(A = 0, Q = 0, B = 0, C = 1) {
    JQ.prototype.isVector4 = !0, this.x = A, this.y = Q, this.z = B, this.w = C;
  }
  get width() {
    return this.z;
  }
  set width(A) {
    this.z = A;
  }
  get height() {
    return this.w;
  }
  set height(A) {
    this.w = A;
  }
  set(A, Q, B, C) {
    return this.x = A, this.y = Q, this.z = B, this.w = C, this;
  }
  setScalar(A) {
    return this.x = A, this.y = A, this.z = A, this.w = A, this;
  }
  setX(A) {
    return this.x = A, this;
  }
  setY(A) {
    return this.y = A, this;
  }
  setZ(A) {
    return this.z = A, this;
  }
  setW(A) {
    return this.w = A, this;
  }
  setComponent(A, Q) {
    switch (A) {
      case 0:
        this.x = Q;
        break;
      case 1:
        this.y = Q;
        break;
      case 2:
        this.z = Q;
        break;
      case 3:
        this.w = Q;
        break;
      default:
        throw new Error("index is out of range: " + A);
    }
    return this;
  }
  getComponent(A) {
    switch (A) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + A);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(A) {
    return this.x = A.x, this.y = A.y, this.z = A.z, this.w = A.w !== void 0 ? A.w : 1, this;
  }
  add(A) {
    return this.x += A.x, this.y += A.y, this.z += A.z, this.w += A.w, this;
  }
  addScalar(A) {
    return this.x += A, this.y += A, this.z += A, this.w += A, this;
  }
  addVectors(A, Q) {
    return this.x = A.x + Q.x, this.y = A.y + Q.y, this.z = A.z + Q.z, this.w = A.w + Q.w, this;
  }
  addScaledVector(A, Q) {
    return this.x += A.x * Q, this.y += A.y * Q, this.z += A.z * Q, this.w += A.w * Q, this;
  }
  sub(A) {
    return this.x -= A.x, this.y -= A.y, this.z -= A.z, this.w -= A.w, this;
  }
  subScalar(A) {
    return this.x -= A, this.y -= A, this.z -= A, this.w -= A, this;
  }
  subVectors(A, Q) {
    return this.x = A.x - Q.x, this.y = A.y - Q.y, this.z = A.z - Q.z, this.w = A.w - Q.w, this;
  }
  multiply(A) {
    return this.x *= A.x, this.y *= A.y, this.z *= A.z, this.w *= A.w, this;
  }
  multiplyScalar(A) {
    return this.x *= A, this.y *= A, this.z *= A, this.w *= A, this;
  }
  applyMatrix4(A) {
    const Q = this.x, B = this.y, C = this.z, E = this.w, I = A.elements;
    return this.x = I[0] * Q + I[4] * B + I[8] * C + I[12] * E, this.y = I[1] * Q + I[5] * B + I[9] * C + I[13] * E, this.z = I[2] * Q + I[6] * B + I[10] * C + I[14] * E, this.w = I[3] * Q + I[7] * B + I[11] * C + I[15] * E, this;
  }
  divideScalar(A) {
    return this.multiplyScalar(1 / A);
  }
  setAxisAngleFromQuaternion(A) {
    this.w = 2 * Math.acos(A.w);
    const Q = Math.sqrt(1 - A.w * A.w);
    return Q < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = A.x / Q, this.y = A.y / Q, this.z = A.z / Q), this;
  }
  setAxisAngleFromRotationMatrix(A) {
    let Q, B, C, E;
    const w = A.elements, s = w[0], K = w[4], y = w[8], c = w[1], D = w[5], M = w[9], k = w[2], U = w[6], G = w[10];
    if (Math.abs(K - c) < 0.01 && Math.abs(y - k) < 0.01 && Math.abs(M - U) < 0.01) {
      if (Math.abs(K + c) < 0.1 && Math.abs(y + k) < 0.1 && Math.abs(M + U) < 0.1 && Math.abs(s + D + G - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      Q = Math.PI;
      const p = (s + 1) / 2, J = (D + 1) / 2, i = (G + 1) / 2, a = (K + c) / 4, N = (y + k) / 4, T = (M + U) / 4;
      return p > J && p > i ? p < 0.01 ? (B = 0, C = 0.707106781, E = 0.707106781) : (B = Math.sqrt(p), C = a / B, E = N / B) : J > i ? J < 0.01 ? (B = 0.707106781, C = 0, E = 0.707106781) : (C = Math.sqrt(J), B = a / C, E = T / C) : i < 0.01 ? (B = 0.707106781, C = 0.707106781, E = 0) : (E = Math.sqrt(i), B = N / E, C = T / E), this.set(B, C, E, Q), this;
    }
    let F = Math.sqrt((U - M) * (U - M) + (y - k) * (y - k) + (c - K) * (c - K));
    return Math.abs(F) < 1e-3 && (F = 1), this.x = (U - M) / F, this.y = (y - k) / F, this.z = (c - K) / F, this.w = Math.acos((s + D + G - 1) / 2), this;
  }
  min(A) {
    return this.x = Math.min(this.x, A.x), this.y = Math.min(this.y, A.y), this.z = Math.min(this.z, A.z), this.w = Math.min(this.w, A.w), this;
  }
  max(A) {
    return this.x = Math.max(this.x, A.x), this.y = Math.max(this.y, A.y), this.z = Math.max(this.z, A.z), this.w = Math.max(this.w, A.w), this;
  }
  clamp(A, Q) {
    return this.x = Math.max(A.x, Math.min(Q.x, this.x)), this.y = Math.max(A.y, Math.min(Q.y, this.y)), this.z = Math.max(A.z, Math.min(Q.z, this.z)), this.w = Math.max(A.w, Math.min(Q.w, this.w)), this;
  }
  clampScalar(A, Q) {
    return this.x = Math.max(A, Math.min(Q, this.x)), this.y = Math.max(A, Math.min(Q, this.y)), this.z = Math.max(A, Math.min(Q, this.z)), this.w = Math.max(A, Math.min(Q, this.w)), this;
  }
  clampLength(A, Q) {
    const B = this.length();
    return this.divideScalar(B || 1).multiplyScalar(Math.max(A, Math.min(Q, B)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(A) {
    return this.x * A.x + this.y * A.y + this.z * A.z + this.w * A.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(A) {
    return this.normalize().multiplyScalar(A);
  }
  lerp(A, Q) {
    return this.x += (A.x - this.x) * Q, this.y += (A.y - this.y) * Q, this.z += (A.z - this.z) * Q, this.w += (A.w - this.w) * Q, this;
  }
  lerpVectors(A, Q, B) {
    return this.x = A.x + (Q.x - A.x) * B, this.y = A.y + (Q.y - A.y) * B, this.z = A.z + (Q.z - A.z) * B, this.w = A.w + (Q.w - A.w) * B, this;
  }
  equals(A) {
    return A.x === this.x && A.y === this.y && A.z === this.z && A.w === this.w;
  }
  fromArray(A, Q = 0) {
    return this.x = A[Q], this.y = A[Q + 1], this.z = A[Q + 2], this.w = A[Q + 3], this;
  }
  toArray(A = [], Q = 0) {
    return A[Q] = this.x, A[Q + 1] = this.y, A[Q + 2] = this.z, A[Q + 3] = this.w, A;
  }
  fromBufferAttribute(A, Q) {
    return this.x = A.getX(Q), this.y = A.getY(Q), this.z = A.getZ(Q), this.w = A.getW(Q), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class hC extends eA {
  constructor(A = 1, Q = 1, B = {}) {
    super(), this.isRenderTarget = !0, this.width = A, this.height = Q, this.depth = 1, this.scissor = new JQ(0, 0, A, Q), this.scissorTest = !1, this.viewport = new JQ(0, 0, A, Q);
    const C = { width: A, height: Q, depth: 1 };
    B.encoding !== void 0 && (ZA("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), B.colorSpace = B.encoding === UQ ? z : WA), B = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: ZB,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, B), this.texture = new BA(C, B.mapping, B.wrapS, B.wrapT, B.magFilter, B.minFilter, B.format, B.type, B.anisotropy, B.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = B.generateMipmaps, this.texture.internalFormat = B.internalFormat, this.depthBuffer = B.depthBuffer, this.stencilBuffer = B.stencilBuffer, this.depthTexture = B.depthTexture, this.samples = B.samples;
  }
  setSize(A, Q, B = 1) {
    (this.width !== A || this.height !== Q || this.depth !== B) && (this.width = A, this.height = Q, this.depth = B, this.texture.image.width = A, this.texture.image.height = Q, this.texture.image.depth = B, this.dispose()), this.viewport.set(0, 0, A, Q), this.scissor.set(0, 0, A, Q);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(A) {
    this.width = A.width, this.height = A.height, this.depth = A.depth, this.scissor.copy(A.scissor), this.scissorTest = A.scissorTest, this.viewport.copy(A.viewport), this.texture = A.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const Q = Object.assign({}, A.texture.image);
    return this.texture.source = new uB(Q), this.depthBuffer = A.depthBuffer, this.stencilBuffer = A.stencilBuffer, A.depthTexture !== null && (this.depthTexture = A.depthTexture.clone()), this.samples = A.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class kC extends hC {
  constructor(A = 1, Q = 1, B = {}) {
    super(A, Q, B), this.isWebGLRenderTarget = !0;
  }
}
class xA {
  constructor(A = 0, Q = 0, B = 0, C = 1) {
    this.isQuaternion = !0, this._x = A, this._y = Q, this._z = B, this._w = C;
  }
  static slerpFlat(A, Q, B, C, E, I, g) {
    let w = B[C + 0], s = B[C + 1], K = B[C + 2], y = B[C + 3];
    const c = E[I + 0], D = E[I + 1], M = E[I + 2], k = E[I + 3];
    if (g === 0) {
      A[Q + 0] = w, A[Q + 1] = s, A[Q + 2] = K, A[Q + 3] = y;
      return;
    }
    if (g === 1) {
      A[Q + 0] = c, A[Q + 1] = D, A[Q + 2] = M, A[Q + 3] = k;
      return;
    }
    if (y !== k || w !== c || s !== D || K !== M) {
      let U = 1 - g;
      const G = w * c + s * D + K * M + y * k, F = G >= 0 ? 1 : -1, p = 1 - G * G;
      if (p > Number.EPSILON) {
        const i = Math.sqrt(p), a = Math.atan2(i, G * F);
        U = Math.sin(U * a) / i, g = Math.sin(g * a) / i;
      }
      const J = g * F;
      if (w = w * U + c * J, s = s * U + D * J, K = K * U + M * J, y = y * U + k * J, U === 1 - g) {
        const i = 1 / Math.sqrt(w * w + s * s + K * K + y * y);
        w *= i, s *= i, K *= i, y *= i;
      }
    }
    A[Q] = w, A[Q + 1] = s, A[Q + 2] = K, A[Q + 3] = y;
  }
  static multiplyQuaternionsFlat(A, Q, B, C, E, I) {
    const g = B[C], w = B[C + 1], s = B[C + 2], K = B[C + 3], y = E[I], c = E[I + 1], D = E[I + 2], M = E[I + 3];
    return A[Q] = g * M + K * y + w * D - s * c, A[Q + 1] = w * M + K * c + s * y - g * D, A[Q + 2] = s * M + K * D + g * c - w * y, A[Q + 3] = K * M - g * y - w * c - s * D, A;
  }
  get x() {
    return this._x;
  }
  set x(A) {
    this._x = A, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(A) {
    this._y = A, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(A) {
    this._z = A, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(A) {
    this._w = A, this._onChangeCallback();
  }
  set(A, Q, B, C) {
    return this._x = A, this._y = Q, this._z = B, this._w = C, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(A) {
    return this._x = A.x, this._y = A.y, this._z = A.z, this._w = A.w, this._onChangeCallback(), this;
  }
  setFromEuler(A, Q = !0) {
    const B = A._x, C = A._y, E = A._z, I = A._order, g = Math.cos, w = Math.sin, s = g(B / 2), K = g(C / 2), y = g(E / 2), c = w(B / 2), D = w(C / 2), M = w(E / 2);
    switch (I) {
      case "XYZ":
        this._x = c * K * y + s * D * M, this._y = s * D * y - c * K * M, this._z = s * K * M + c * D * y, this._w = s * K * y - c * D * M;
        break;
      case "YXZ":
        this._x = c * K * y + s * D * M, this._y = s * D * y - c * K * M, this._z = s * K * M - c * D * y, this._w = s * K * y + c * D * M;
        break;
      case "ZXY":
        this._x = c * K * y - s * D * M, this._y = s * D * y + c * K * M, this._z = s * K * M + c * D * y, this._w = s * K * y - c * D * M;
        break;
      case "ZYX":
        this._x = c * K * y - s * D * M, this._y = s * D * y + c * K * M, this._z = s * K * M - c * D * y, this._w = s * K * y + c * D * M;
        break;
      case "YZX":
        this._x = c * K * y + s * D * M, this._y = s * D * y + c * K * M, this._z = s * K * M - c * D * y, this._w = s * K * y - c * D * M;
        break;
      case "XZY":
        this._x = c * K * y - s * D * M, this._y = s * D * y - c * K * M, this._z = s * K * M + c * D * y, this._w = s * K * y + c * D * M;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + I);
    }
    return Q === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(A, Q) {
    const B = Q / 2, C = Math.sin(B);
    return this._x = A.x * C, this._y = A.y * C, this._z = A.z * C, this._w = Math.cos(B), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(A) {
    const Q = A.elements, B = Q[0], C = Q[4], E = Q[8], I = Q[1], g = Q[5], w = Q[9], s = Q[2], K = Q[6], y = Q[10], c = B + g + y;
    if (c > 0) {
      const D = 0.5 / Math.sqrt(c + 1);
      this._w = 0.25 / D, this._x = (K - w) * D, this._y = (E - s) * D, this._z = (I - C) * D;
    } else if (B > g && B > y) {
      const D = 2 * Math.sqrt(1 + B - g - y);
      this._w = (K - w) / D, this._x = 0.25 * D, this._y = (C + I) / D, this._z = (E + s) / D;
    } else if (g > y) {
      const D = 2 * Math.sqrt(1 + g - B - y);
      this._w = (E - s) / D, this._x = (C + I) / D, this._y = 0.25 * D, this._z = (w + K) / D;
    } else {
      const D = 2 * Math.sqrt(1 + y - B - g);
      this._w = (I - C) / D, this._x = (E + s) / D, this._y = (w + K) / D, this._z = 0.25 * D;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(A, Q) {
    let B = A.dot(Q) + 1;
    return B < Number.EPSILON ? (B = 0, Math.abs(A.x) > Math.abs(A.z) ? (this._x = -A.y, this._y = A.x, this._z = 0, this._w = B) : (this._x = 0, this._y = -A.z, this._z = A.y, this._w = B)) : (this._x = A.y * Q.z - A.z * Q.y, this._y = A.z * Q.x - A.x * Q.z, this._z = A.x * Q.y - A.y * Q.x, this._w = B), this.normalize();
  }
  angleTo(A) {
    return 2 * Math.acos(Math.abs(W(this.dot(A), -1, 1)));
  }
  rotateTowards(A, Q) {
    const B = this.angleTo(A);
    if (B === 0)
      return this;
    const C = Math.min(1, Q / B);
    return this.slerp(A, C), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(A) {
    return this._x * A._x + this._y * A._y + this._z * A._z + this._w * A._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let A = this.length();
    return A === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (A = 1 / A, this._x = this._x * A, this._y = this._y * A, this._z = this._z * A, this._w = this._w * A), this._onChangeCallback(), this;
  }
  multiply(A) {
    return this.multiplyQuaternions(this, A);
  }
  premultiply(A) {
    return this.multiplyQuaternions(A, this);
  }
  multiplyQuaternions(A, Q) {
    const B = A._x, C = A._y, E = A._z, I = A._w, g = Q._x, w = Q._y, s = Q._z, K = Q._w;
    return this._x = B * K + I * g + C * s - E * w, this._y = C * K + I * w + E * g - B * s, this._z = E * K + I * s + B * w - C * g, this._w = I * K - B * g - C * w - E * s, this._onChangeCallback(), this;
  }
  slerp(A, Q) {
    if (Q === 0)
      return this;
    if (Q === 1)
      return this.copy(A);
    const B = this._x, C = this._y, E = this._z, I = this._w;
    let g = I * A._w + B * A._x + C * A._y + E * A._z;
    if (g < 0 ? (this._w = -A._w, this._x = -A._x, this._y = -A._y, this._z = -A._z, g = -g) : this.copy(A), g >= 1)
      return this._w = I, this._x = B, this._y = C, this._z = E, this;
    const w = 1 - g * g;
    if (w <= Number.EPSILON) {
      const D = 1 - Q;
      return this._w = D * I + Q * this._w, this._x = D * B + Q * this._x, this._y = D * C + Q * this._y, this._z = D * E + Q * this._z, this.normalize(), this;
    }
    const s = Math.sqrt(w), K = Math.atan2(s, g), y = Math.sin((1 - Q) * K) / s, c = Math.sin(Q * K) / s;
    return this._w = I * y + this._w * c, this._x = B * y + this._x * c, this._y = C * y + this._y * c, this._z = E * y + this._z * c, this._onChangeCallback(), this;
  }
  slerpQuaternions(A, Q, B) {
    return this.copy(A).slerp(Q, B);
  }
  random() {
    const A = Math.random(), Q = Math.sqrt(1 - A), B = Math.sqrt(A), C = 2 * Math.PI * Math.random(), E = 2 * Math.PI * Math.random();
    return this.set(
      Q * Math.cos(C),
      B * Math.sin(E),
      B * Math.cos(E),
      Q * Math.sin(C)
    );
  }
  equals(A) {
    return A._x === this._x && A._y === this._y && A._z === this._z && A._w === this._w;
  }
  fromArray(A, Q = 0) {
    return this._x = A[Q], this._y = A[Q + 1], this._z = A[Q + 2], this._w = A[Q + 3], this._onChangeCallback(), this;
  }
  toArray(A = [], Q = 0) {
    return A[Q] = this._x, A[Q + 1] = this._y, A[Q + 2] = this._z, A[Q + 3] = this._w, A;
  }
  fromBufferAttribute(A, Q) {
    return this._x = A.getX(Q), this._y = A.getY(Q), this._z = A.getZ(Q), this._w = A.getW(Q), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(A) {
    return this._onChangeCallback = A, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class L {
  constructor(A = 0, Q = 0, B = 0) {
    L.prototype.isVector3 = !0, this.x = A, this.y = Q, this.z = B;
  }
  set(A, Q, B) {
    return B === void 0 && (B = this.z), this.x = A, this.y = Q, this.z = B, this;
  }
  setScalar(A) {
    return this.x = A, this.y = A, this.z = A, this;
  }
  setX(A) {
    return this.x = A, this;
  }
  setY(A) {
    return this.y = A, this;
  }
  setZ(A) {
    return this.z = A, this;
  }
  setComponent(A, Q) {
    switch (A) {
      case 0:
        this.x = Q;
        break;
      case 1:
        this.y = Q;
        break;
      case 2:
        this.z = Q;
        break;
      default:
        throw new Error("index is out of range: " + A);
    }
    return this;
  }
  getComponent(A) {
    switch (A) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + A);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(A) {
    return this.x = A.x, this.y = A.y, this.z = A.z, this;
  }
  add(A) {
    return this.x += A.x, this.y += A.y, this.z += A.z, this;
  }
  addScalar(A) {
    return this.x += A, this.y += A, this.z += A, this;
  }
  addVectors(A, Q) {
    return this.x = A.x + Q.x, this.y = A.y + Q.y, this.z = A.z + Q.z, this;
  }
  addScaledVector(A, Q) {
    return this.x += A.x * Q, this.y += A.y * Q, this.z += A.z * Q, this;
  }
  sub(A) {
    return this.x -= A.x, this.y -= A.y, this.z -= A.z, this;
  }
  subScalar(A) {
    return this.x -= A, this.y -= A, this.z -= A, this;
  }
  subVectors(A, Q) {
    return this.x = A.x - Q.x, this.y = A.y - Q.y, this.z = A.z - Q.z, this;
  }
  multiply(A) {
    return this.x *= A.x, this.y *= A.y, this.z *= A.z, this;
  }
  multiplyScalar(A) {
    return this.x *= A, this.y *= A, this.z *= A, this;
  }
  multiplyVectors(A, Q) {
    return this.x = A.x * Q.x, this.y = A.y * Q.y, this.z = A.z * Q.z, this;
  }
  applyEuler(A) {
    return this.applyQuaternion(NB.setFromEuler(A));
  }
  applyAxisAngle(A, Q) {
    return this.applyQuaternion(NB.setFromAxisAngle(A, Q));
  }
  applyMatrix3(A) {
    const Q = this.x, B = this.y, C = this.z, E = A.elements;
    return this.x = E[0] * Q + E[3] * B + E[6] * C, this.y = E[1] * Q + E[4] * B + E[7] * C, this.z = E[2] * Q + E[5] * B + E[8] * C, this;
  }
  applyNormalMatrix(A) {
    return this.applyMatrix3(A).normalize();
  }
  applyMatrix4(A) {
    const Q = this.x, B = this.y, C = this.z, E = A.elements, I = 1 / (E[3] * Q + E[7] * B + E[11] * C + E[15]);
    return this.x = (E[0] * Q + E[4] * B + E[8] * C + E[12]) * I, this.y = (E[1] * Q + E[5] * B + E[9] * C + E[13]) * I, this.z = (E[2] * Q + E[6] * B + E[10] * C + E[14]) * I, this;
  }
  applyQuaternion(A) {
    const Q = this.x, B = this.y, C = this.z, E = A.x, I = A.y, g = A.z, w = A.w, s = 2 * (I * C - g * B), K = 2 * (g * Q - E * C), y = 2 * (E * B - I * Q);
    return this.x = Q + w * s + I * y - g * K, this.y = B + w * K + g * s - E * y, this.z = C + w * y + E * K - I * s, this;
  }
  project(A) {
    return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix);
  }
  unproject(A) {
    return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld);
  }
  transformDirection(A) {
    const Q = this.x, B = this.y, C = this.z, E = A.elements;
    return this.x = E[0] * Q + E[4] * B + E[8] * C, this.y = E[1] * Q + E[5] * B + E[9] * C, this.z = E[2] * Q + E[6] * B + E[10] * C, this.normalize();
  }
  divide(A) {
    return this.x /= A.x, this.y /= A.y, this.z /= A.z, this;
  }
  divideScalar(A) {
    return this.multiplyScalar(1 / A);
  }
  min(A) {
    return this.x = Math.min(this.x, A.x), this.y = Math.min(this.y, A.y), this.z = Math.min(this.z, A.z), this;
  }
  max(A) {
    return this.x = Math.max(this.x, A.x), this.y = Math.max(this.y, A.y), this.z = Math.max(this.z, A.z), this;
  }
  clamp(A, Q) {
    return this.x = Math.max(A.x, Math.min(Q.x, this.x)), this.y = Math.max(A.y, Math.min(Q.y, this.y)), this.z = Math.max(A.z, Math.min(Q.z, this.z)), this;
  }
  clampScalar(A, Q) {
    return this.x = Math.max(A, Math.min(Q, this.x)), this.y = Math.max(A, Math.min(Q, this.y)), this.z = Math.max(A, Math.min(Q, this.z)), this;
  }
  clampLength(A, Q) {
    const B = this.length();
    return this.divideScalar(B || 1).multiplyScalar(Math.max(A, Math.min(Q, B)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(A) {
    return this.x * A.x + this.y * A.y + this.z * A.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(A) {
    return this.normalize().multiplyScalar(A);
  }
  lerp(A, Q) {
    return this.x += (A.x - this.x) * Q, this.y += (A.y - this.y) * Q, this.z += (A.z - this.z) * Q, this;
  }
  lerpVectors(A, Q, B) {
    return this.x = A.x + (Q.x - A.x) * B, this.y = A.y + (Q.y - A.y) * B, this.z = A.z + (Q.z - A.z) * B, this;
  }
  cross(A) {
    return this.crossVectors(this, A);
  }
  crossVectors(A, Q) {
    const B = A.x, C = A.y, E = A.z, I = Q.x, g = Q.y, w = Q.z;
    return this.x = C * w - E * g, this.y = E * I - B * w, this.z = B * g - C * I, this;
  }
  projectOnVector(A) {
    const Q = A.lengthSq();
    if (Q === 0)
      return this.set(0, 0, 0);
    const B = A.dot(this) / Q;
    return this.copy(A).multiplyScalar(B);
  }
  projectOnPlane(A) {
    return lQ.copy(this).projectOnVector(A), this.sub(lQ);
  }
  reflect(A) {
    return this.sub(lQ.copy(A).multiplyScalar(2 * this.dot(A)));
  }
  angleTo(A) {
    const Q = Math.sqrt(this.lengthSq() * A.lengthSq());
    if (Q === 0)
      return Math.PI / 2;
    const B = this.dot(A) / Q;
    return Math.acos(W(B, -1, 1));
  }
  distanceTo(A) {
    return Math.sqrt(this.distanceToSquared(A));
  }
  distanceToSquared(A) {
    const Q = this.x - A.x, B = this.y - A.y, C = this.z - A.z;
    return Q * Q + B * B + C * C;
  }
  manhattanDistanceTo(A) {
    return Math.abs(this.x - A.x) + Math.abs(this.y - A.y) + Math.abs(this.z - A.z);
  }
  setFromSpherical(A) {
    return this.setFromSphericalCoords(A.radius, A.phi, A.theta);
  }
  setFromSphericalCoords(A, Q, B) {
    const C = Math.sin(Q) * A;
    return this.x = C * Math.sin(B), this.y = Math.cos(Q) * A, this.z = C * Math.cos(B), this;
  }
  setFromCylindrical(A) {
    return this.setFromCylindricalCoords(A.radius, A.theta, A.y);
  }
  setFromCylindricalCoords(A, Q, B) {
    return this.x = A * Math.sin(Q), this.y = B, this.z = A * Math.cos(Q), this;
  }
  setFromMatrixPosition(A) {
    const Q = A.elements;
    return this.x = Q[12], this.y = Q[13], this.z = Q[14], this;
  }
  setFromMatrixScale(A) {
    const Q = this.setFromMatrixColumn(A, 0).length(), B = this.setFromMatrixColumn(A, 1).length(), C = this.setFromMatrixColumn(A, 2).length();
    return this.x = Q, this.y = B, this.z = C, this;
  }
  setFromMatrixColumn(A, Q) {
    return this.fromArray(A.elements, Q * 4);
  }
  setFromMatrix3Column(A, Q) {
    return this.fromArray(A.elements, Q * 3);
  }
  setFromEuler(A) {
    return this.x = A._x, this.y = A._y, this.z = A._z, this;
  }
  setFromColor(A) {
    return this.x = A.r, this.y = A.g, this.z = A.b, this;
  }
  equals(A) {
    return A.x === this.x && A.y === this.y && A.z === this.z;
  }
  fromArray(A, Q = 0) {
    return this.x = A[Q], this.y = A[Q + 1], this.z = A[Q + 2], this;
  }
  toArray(A = [], Q = 0) {
    return A[Q] = this.x, A[Q + 1] = this.y, A[Q + 2] = this.z, A;
  }
  fromBufferAttribute(A, Q) {
    return this.x = A.getX(Q), this.y = A.getY(Q), this.z = A.getZ(Q), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const A = (Math.random() - 0.5) * 2, Q = Math.random() * Math.PI * 2, B = Math.sqrt(1 - A ** 2);
    return this.x = B * Math.cos(Q), this.y = B * Math.sin(Q), this.z = A, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const lQ = /* @__PURE__ */ new L(), NB = /* @__PURE__ */ new xA();
class zA {
  constructor(A = new L(1 / 0, 1 / 0, 1 / 0), Q = new L(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = A, this.max = Q;
  }
  set(A, Q) {
    return this.min.copy(A), this.max.copy(Q), this;
  }
  setFromArray(A) {
    this.makeEmpty();
    for (let Q = 0, B = A.length; Q < B; Q += 3)
      this.expandByPoint(V.fromArray(A, Q));
    return this;
  }
  setFromBufferAttribute(A) {
    this.makeEmpty();
    for (let Q = 0, B = A.count; Q < B; Q++)
      this.expandByPoint(V.fromBufferAttribute(A, Q));
    return this;
  }
  setFromPoints(A) {
    this.makeEmpty();
    for (let Q = 0, B = A.length; Q < B; Q++)
      this.expandByPoint(A[Q]);
    return this;
  }
  setFromCenterAndSize(A, Q) {
    const B = V.copy(Q).multiplyScalar(0.5);
    return this.min.copy(A).sub(B), this.max.copy(A).add(B), this;
  }
  setFromObject(A, Q = !1) {
    return this.makeEmpty(), this.expandByObject(A, Q);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(A) {
    return this.min.copy(A.min), this.max.copy(A.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(A) {
    return this.isEmpty() ? A.set(0, 0, 0) : A.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(A) {
    return this.isEmpty() ? A.set(0, 0, 0) : A.subVectors(this.max, this.min);
  }
  expandByPoint(A) {
    return this.min.min(A), this.max.max(A), this;
  }
  expandByVector(A) {
    return this.min.sub(A), this.max.add(A), this;
  }
  expandByScalar(A) {
    return this.min.addScalar(-A), this.max.addScalar(A), this;
  }
  expandByObject(A, Q = !1) {
    A.updateWorldMatrix(!1, !1);
    const B = A.geometry;
    if (B !== void 0) {
      const E = B.getAttribute("position");
      if (Q === !0 && E !== void 0 && A.isInstancedMesh !== !0)
        for (let I = 0, g = E.count; I < g; I++)
          A.isMesh === !0 ? A.getVertexPosition(I, V) : V.fromBufferAttribute(E, I), V.applyMatrix4(A.matrixWorld), this.expandByPoint(V);
      else
        A.boundingBox !== void 0 ? (A.boundingBox === null && A.computeBoundingBox(), $A.copy(A.boundingBox)) : (B.boundingBox === null && B.computeBoundingBox(), $A.copy(B.boundingBox)), $A.applyMatrix4(A.matrixWorld), this.union($A);
    }
    const C = A.children;
    for (let E = 0, I = C.length; E < I; E++)
      this.expandByObject(C[E], Q);
    return this;
  }
  containsPoint(A) {
    return !(A.x < this.min.x || A.x > this.max.x || A.y < this.min.y || A.y > this.max.y || A.z < this.min.z || A.z > this.max.z);
  }
  containsBox(A) {
    return this.min.x <= A.min.x && A.max.x <= this.max.x && this.min.y <= A.min.y && A.max.y <= this.max.y && this.min.z <= A.min.z && A.max.z <= this.max.z;
  }
  getParameter(A, Q) {
    return Q.set(
      (A.x - this.min.x) / (this.max.x - this.min.x),
      (A.y - this.min.y) / (this.max.y - this.min.y),
      (A.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(A) {
    return !(A.max.x < this.min.x || A.min.x > this.max.x || A.max.y < this.min.y || A.min.y > this.max.y || A.max.z < this.min.z || A.min.z > this.max.z);
  }
  intersectsSphere(A) {
    return this.clampPoint(A.center, V), V.distanceToSquared(A.center) <= A.radius * A.radius;
  }
  intersectsPlane(A) {
    let Q, B;
    return A.normal.x > 0 ? (Q = A.normal.x * this.min.x, B = A.normal.x * this.max.x) : (Q = A.normal.x * this.max.x, B = A.normal.x * this.min.x), A.normal.y > 0 ? (Q += A.normal.y * this.min.y, B += A.normal.y * this.max.y) : (Q += A.normal.y * this.max.y, B += A.normal.y * this.min.y), A.normal.z > 0 ? (Q += A.normal.z * this.min.z, B += A.normal.z * this.max.z) : (Q += A.normal.z * this.max.z, B += A.normal.z * this.min.z), Q <= -A.constant && B >= -A.constant;
  }
  intersectsTriangle(A) {
    if (this.isEmpty())
      return !1;
    this.getCenter(jA), AQ.subVectors(this.max, jA), JA.subVectors(A.a, jA), FA.subVectors(A.b, jA), SA.subVectors(A.c, jA), gA.subVectors(FA, JA), wA.subVectors(SA, FA), cA.subVectors(JA, SA);
    let Q = [
      0,
      -gA.z,
      gA.y,
      0,
      -wA.z,
      wA.y,
      0,
      -cA.z,
      cA.y,
      gA.z,
      0,
      -gA.x,
      wA.z,
      0,
      -wA.x,
      cA.z,
      0,
      -cA.x,
      -gA.y,
      gA.x,
      0,
      -wA.y,
      wA.x,
      0,
      -cA.y,
      cA.x,
      0
    ];
    return !fQ(Q, JA, FA, SA, AQ) || (Q = [1, 0, 0, 0, 1, 0, 0, 0, 1], !fQ(Q, JA, FA, SA, AQ)) ? !1 : (QQ.crossVectors(gA, wA), Q = [QQ.x, QQ.y, QQ.z], fQ(Q, JA, FA, SA, AQ));
  }
  clampPoint(A, Q) {
    return Q.copy(A).clamp(this.min, this.max);
  }
  distanceToPoint(A) {
    return this.clampPoint(A, V).distanceTo(A);
  }
  getBoundingSphere(A) {
    return this.isEmpty() ? A.makeEmpty() : (this.getCenter(A.center), A.radius = this.getSize(V).length() * 0.5), A;
  }
  intersect(A) {
    return this.min.max(A.min), this.max.min(A.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(A) {
    return this.min.min(A.min), this.max.max(A.max), this;
  }
  applyMatrix4(A) {
    return this.isEmpty() ? this : (v[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(A), v[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(A), v[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(A), v[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(A), v[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(A), v[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(A), v[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(A), v[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(A), this.setFromPoints(v), this);
  }
  translate(A) {
    return this.min.add(A), this.max.add(A), this;
  }
  equals(A) {
    return A.min.equals(this.min) && A.max.equals(this.max);
  }
}
const v = [
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L()
], V = /* @__PURE__ */ new L(), $A = /* @__PURE__ */ new zA(), JA = /* @__PURE__ */ new L(), FA = /* @__PURE__ */ new L(), SA = /* @__PURE__ */ new L(), gA = /* @__PURE__ */ new L(), wA = /* @__PURE__ */ new L(), cA = /* @__PURE__ */ new L(), jA = /* @__PURE__ */ new L(), AQ = /* @__PURE__ */ new L(), QQ = /* @__PURE__ */ new L(), hA = /* @__PURE__ */ new L();
function fQ(h, A, Q, B, C) {
  for (let E = 0, I = h.length - 3; E <= I; E += 3) {
    hA.fromArray(h, E);
    const g = C.x * Math.abs(hA.x) + C.y * Math.abs(hA.y) + C.z * Math.abs(hA.z), w = A.dot(hA), s = Q.dot(hA), K = B.dot(hA);
    if (Math.max(-Math.max(w, s, K), Math.min(w, s, K)) > g)
      return !1;
  }
  return !0;
}
const UC = /* @__PURE__ */ new zA(), lA = /* @__PURE__ */ new L(), TQ = /* @__PURE__ */ new L();
class xB {
  constructor(A = new L(), Q = -1) {
    this.isSphere = !0, this.center = A, this.radius = Q;
  }
  set(A, Q) {
    return this.center.copy(A), this.radius = Q, this;
  }
  setFromPoints(A, Q) {
    const B = this.center;
    Q !== void 0 ? B.copy(Q) : UC.setFromPoints(A).getCenter(B);
    let C = 0;
    for (let E = 0, I = A.length; E < I; E++)
      C = Math.max(C, B.distanceToSquared(A[E]));
    return this.radius = Math.sqrt(C), this;
  }
  copy(A) {
    return this.center.copy(A.center), this.radius = A.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(A) {
    return A.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(A) {
    return A.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(A) {
    const Q = this.radius + A.radius;
    return A.center.distanceToSquared(this.center) <= Q * Q;
  }
  intersectsBox(A) {
    return A.intersectsSphere(this);
  }
  intersectsPlane(A) {
    return Math.abs(A.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(A, Q) {
    const B = this.center.distanceToSquared(A);
    return Q.copy(A), B > this.radius * this.radius && (Q.sub(this.center).normalize(), Q.multiplyScalar(this.radius).add(this.center)), Q;
  }
  getBoundingBox(A) {
    return this.isEmpty() ? (A.makeEmpty(), A) : (A.set(this.center, this.center), A.expandByScalar(this.radius), A);
  }
  applyMatrix4(A) {
    return this.center.applyMatrix4(A), this.radius = this.radius * A.getMaxScaleOnAxis(), this;
  }
  translate(A) {
    return this.center.add(A), this;
  }
  expandByPoint(A) {
    if (this.isEmpty())
      return this.center.copy(A), this.radius = 0, this;
    lA.subVectors(A, this.center);
    const Q = lA.lengthSq();
    if (Q > this.radius * this.radius) {
      const B = Math.sqrt(Q), C = (B - this.radius) * 0.5;
      this.center.addScaledVector(lA, C / B), this.radius += C;
    }
    return this;
  }
  union(A) {
    return A.isEmpty() ? this : this.isEmpty() ? (this.copy(A), this) : (this.center.equals(A.center) === !0 ? this.radius = Math.max(this.radius, A.radius) : (TQ.subVectors(A.center, this.center).setLength(A.radius), this.expandByPoint(lA.copy(A.center).add(TQ)), this.expandByPoint(lA.copy(A.center).sub(TQ))), this);
  }
  equals(A) {
    return A.center.equals(this.center) && A.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _ = /* @__PURE__ */ new L(), bQ = /* @__PURE__ */ new L(), BQ = /* @__PURE__ */ new L(), DA = /* @__PURE__ */ new L(), WQ = /* @__PURE__ */ new L(), CQ = /* @__PURE__ */ new L(), ZQ = /* @__PURE__ */ new L();
class GC {
  constructor(A = new L(), Q = new L(0, 0, -1)) {
    this.origin = A, this.direction = Q;
  }
  set(A, Q) {
    return this.origin.copy(A), this.direction.copy(Q), this;
  }
  copy(A) {
    return this.origin.copy(A.origin), this.direction.copy(A.direction), this;
  }
  at(A, Q) {
    return Q.copy(this.origin).addScaledVector(this.direction, A);
  }
  lookAt(A) {
    return this.direction.copy(A).sub(this.origin).normalize(), this;
  }
  recast(A) {
    return this.origin.copy(this.at(A, _)), this;
  }
  closestPointToPoint(A, Q) {
    Q.subVectors(A, this.origin);
    const B = Q.dot(this.direction);
    return B < 0 ? Q.copy(this.origin) : Q.copy(this.origin).addScaledVector(this.direction, B);
  }
  distanceToPoint(A) {
    return Math.sqrt(this.distanceSqToPoint(A));
  }
  distanceSqToPoint(A) {
    const Q = _.subVectors(A, this.origin).dot(this.direction);
    return Q < 0 ? this.origin.distanceToSquared(A) : (_.copy(this.origin).addScaledVector(this.direction, Q), _.distanceToSquared(A));
  }
  distanceSqToSegment(A, Q, B, C) {
    bQ.copy(A).add(Q).multiplyScalar(0.5), BQ.copy(Q).sub(A).normalize(), DA.copy(this.origin).sub(bQ);
    const E = A.distanceTo(Q) * 0.5, I = -this.direction.dot(BQ), g = DA.dot(this.direction), w = -DA.dot(BQ), s = DA.lengthSq(), K = Math.abs(1 - I * I);
    let y, c, D, M;
    if (K > 0)
      if (y = I * w - g, c = I * g - w, M = E * K, y >= 0)
        if (c >= -M)
          if (c <= M) {
            const k = 1 / K;
            y *= k, c *= k, D = y * (y + I * c + 2 * g) + c * (I * y + c + 2 * w) + s;
          } else
            c = E, y = Math.max(0, -(I * c + g)), D = -y * y + c * (c + 2 * w) + s;
        else
          c = -E, y = Math.max(0, -(I * c + g)), D = -y * y + c * (c + 2 * w) + s;
      else
        c <= -M ? (y = Math.max(0, -(-I * E + g)), c = y > 0 ? -E : Math.min(Math.max(-E, -w), E), D = -y * y + c * (c + 2 * w) + s) : c <= M ? (y = 0, c = Math.min(Math.max(-E, -w), E), D = c * (c + 2 * w) + s) : (y = Math.max(0, -(I * E + g)), c = y > 0 ? E : Math.min(Math.max(-E, -w), E), D = -y * y + c * (c + 2 * w) + s);
    else
      c = I > 0 ? -E : E, y = Math.max(0, -(I * c + g)), D = -y * y + c * (c + 2 * w) + s;
    return B && B.copy(this.origin).addScaledVector(this.direction, y), C && C.copy(bQ).addScaledVector(BQ, c), D;
  }
  intersectSphere(A, Q) {
    _.subVectors(A.center, this.origin);
    const B = _.dot(this.direction), C = _.dot(_) - B * B, E = A.radius * A.radius;
    if (C > E)
      return null;
    const I = Math.sqrt(E - C), g = B - I, w = B + I;
    return w < 0 ? null : g < 0 ? this.at(w, Q) : this.at(g, Q);
  }
  intersectsSphere(A) {
    return this.distanceSqToPoint(A.center) <= A.radius * A.radius;
  }
  distanceToPlane(A) {
    const Q = A.normal.dot(this.direction);
    if (Q === 0)
      return A.distanceToPoint(this.origin) === 0 ? 0 : null;
    const B = -(this.origin.dot(A.normal) + A.constant) / Q;
    return B >= 0 ? B : null;
  }
  intersectPlane(A, Q) {
    const B = this.distanceToPlane(A);
    return B === null ? null : this.at(B, Q);
  }
  intersectsPlane(A) {
    const Q = A.distanceToPoint(this.origin);
    return Q === 0 || A.normal.dot(this.direction) * Q < 0;
  }
  intersectBox(A, Q) {
    let B, C, E, I, g, w;
    const s = 1 / this.direction.x, K = 1 / this.direction.y, y = 1 / this.direction.z, c = this.origin;
    return s >= 0 ? (B = (A.min.x - c.x) * s, C = (A.max.x - c.x) * s) : (B = (A.max.x - c.x) * s, C = (A.min.x - c.x) * s), K >= 0 ? (E = (A.min.y - c.y) * K, I = (A.max.y - c.y) * K) : (E = (A.max.y - c.y) * K, I = (A.min.y - c.y) * K), B > I || E > C || ((E > B || isNaN(B)) && (B = E), (I < C || isNaN(C)) && (C = I), y >= 0 ? (g = (A.min.z - c.z) * y, w = (A.max.z - c.z) * y) : (g = (A.max.z - c.z) * y, w = (A.min.z - c.z) * y), B > w || g > C) || ((g > B || B !== B) && (B = g), (w < C || C !== C) && (C = w), C < 0) ? null : this.at(B >= 0 ? B : C, Q);
  }
  intersectsBox(A) {
    return this.intersectBox(A, _) !== null;
  }
  intersectTriangle(A, Q, B, C, E) {
    WQ.subVectors(Q, A), CQ.subVectors(B, A), ZQ.crossVectors(WQ, CQ);
    let I = this.direction.dot(ZQ), g;
    if (I > 0) {
      if (C)
        return null;
      g = 1;
    } else if (I < 0)
      g = -1, I = -I;
    else
      return null;
    DA.subVectors(this.origin, A);
    const w = g * this.direction.dot(CQ.crossVectors(DA, CQ));
    if (w < 0)
      return null;
    const s = g * this.direction.dot(WQ.cross(DA));
    if (s < 0 || w + s > I)
      return null;
    const K = -g * DA.dot(ZQ);
    return K < 0 ? null : this.at(K / I, E);
  }
  applyMatrix4(A) {
    return this.origin.applyMatrix4(A), this.direction.transformDirection(A), this;
  }
  equals(A) {
    return A.origin.equals(this.origin) && A.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Z {
  constructor(A, Q, B, C, E, I, g, w, s, K, y, c, D, M, k, U) {
    Z.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], A !== void 0 && this.set(A, Q, B, C, E, I, g, w, s, K, y, c, D, M, k, U);
  }
  set(A, Q, B, C, E, I, g, w, s, K, y, c, D, M, k, U) {
    const G = this.elements;
    return G[0] = A, G[4] = Q, G[8] = B, G[12] = C, G[1] = E, G[5] = I, G[9] = g, G[13] = w, G[2] = s, G[6] = K, G[10] = y, G[14] = c, G[3] = D, G[7] = M, G[11] = k, G[15] = U, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Z().fromArray(this.elements);
  }
  copy(A) {
    const Q = this.elements, B = A.elements;
    return Q[0] = B[0], Q[1] = B[1], Q[2] = B[2], Q[3] = B[3], Q[4] = B[4], Q[5] = B[5], Q[6] = B[6], Q[7] = B[7], Q[8] = B[8], Q[9] = B[9], Q[10] = B[10], Q[11] = B[11], Q[12] = B[12], Q[13] = B[13], Q[14] = B[14], Q[15] = B[15], this;
  }
  copyPosition(A) {
    const Q = this.elements, B = A.elements;
    return Q[12] = B[12], Q[13] = B[13], Q[14] = B[14], this;
  }
  setFromMatrix3(A) {
    const Q = A.elements;
    return this.set(
      Q[0],
      Q[3],
      Q[6],
      0,
      Q[1],
      Q[4],
      Q[7],
      0,
      Q[2],
      Q[5],
      Q[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(A, Q, B) {
    return A.setFromMatrixColumn(this, 0), Q.setFromMatrixColumn(this, 1), B.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(A, Q, B) {
    return this.set(
      A.x,
      Q.x,
      B.x,
      0,
      A.y,
      Q.y,
      B.y,
      0,
      A.z,
      Q.z,
      B.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(A) {
    const Q = this.elements, B = A.elements, C = 1 / NA.setFromMatrixColumn(A, 0).length(), E = 1 / NA.setFromMatrixColumn(A, 1).length(), I = 1 / NA.setFromMatrixColumn(A, 2).length();
    return Q[0] = B[0] * C, Q[1] = B[1] * C, Q[2] = B[2] * C, Q[3] = 0, Q[4] = B[4] * E, Q[5] = B[5] * E, Q[6] = B[6] * E, Q[7] = 0, Q[8] = B[8] * I, Q[9] = B[9] * I, Q[10] = B[10] * I, Q[11] = 0, Q[12] = 0, Q[13] = 0, Q[14] = 0, Q[15] = 1, this;
  }
  makeRotationFromEuler(A) {
    const Q = this.elements, B = A.x, C = A.y, E = A.z, I = Math.cos(B), g = Math.sin(B), w = Math.cos(C), s = Math.sin(C), K = Math.cos(E), y = Math.sin(E);
    if (A.order === "XYZ") {
      const c = I * K, D = I * y, M = g * K, k = g * y;
      Q[0] = w * K, Q[4] = -w * y, Q[8] = s, Q[1] = D + M * s, Q[5] = c - k * s, Q[9] = -g * w, Q[2] = k - c * s, Q[6] = M + D * s, Q[10] = I * w;
    } else if (A.order === "YXZ") {
      const c = w * K, D = w * y, M = s * K, k = s * y;
      Q[0] = c + k * g, Q[4] = M * g - D, Q[8] = I * s, Q[1] = I * y, Q[5] = I * K, Q[9] = -g, Q[2] = D * g - M, Q[6] = k + c * g, Q[10] = I * w;
    } else if (A.order === "ZXY") {
      const c = w * K, D = w * y, M = s * K, k = s * y;
      Q[0] = c - k * g, Q[4] = -I * y, Q[8] = M + D * g, Q[1] = D + M * g, Q[5] = I * K, Q[9] = k - c * g, Q[2] = -I * s, Q[6] = g, Q[10] = I * w;
    } else if (A.order === "ZYX") {
      const c = I * K, D = I * y, M = g * K, k = g * y;
      Q[0] = w * K, Q[4] = M * s - D, Q[8] = c * s + k, Q[1] = w * y, Q[5] = k * s + c, Q[9] = D * s - M, Q[2] = -s, Q[6] = g * w, Q[10] = I * w;
    } else if (A.order === "YZX") {
      const c = I * w, D = I * s, M = g * w, k = g * s;
      Q[0] = w * K, Q[4] = k - c * y, Q[8] = M * y + D, Q[1] = y, Q[5] = I * K, Q[9] = -g * K, Q[2] = -s * K, Q[6] = D * y + M, Q[10] = c - k * y;
    } else if (A.order === "XZY") {
      const c = I * w, D = I * s, M = g * w, k = g * s;
      Q[0] = w * K, Q[4] = -y, Q[8] = s * K, Q[1] = c * y + k, Q[5] = I * K, Q[9] = D * y - M, Q[2] = M * y - D, Q[6] = g * K, Q[10] = k * y + c;
    }
    return Q[3] = 0, Q[7] = 0, Q[11] = 0, Q[12] = 0, Q[13] = 0, Q[14] = 0, Q[15] = 1, this;
  }
  makeRotationFromQuaternion(A) {
    return this.compose(LC, A, JC);
  }
  lookAt(A, Q, B) {
    const C = this.elements;
    return e.subVectors(A, Q), e.lengthSq() === 0 && (e.z = 1), e.normalize(), MA.crossVectors(B, e), MA.lengthSq() === 0 && (Math.abs(B.z) === 1 ? e.x += 1e-4 : e.z += 1e-4, e.normalize(), MA.crossVectors(B, e)), MA.normalize(), EQ.crossVectors(e, MA), C[0] = MA.x, C[4] = EQ.x, C[8] = e.x, C[1] = MA.y, C[5] = EQ.y, C[9] = e.y, C[2] = MA.z, C[6] = EQ.z, C[10] = e.z, this;
  }
  multiply(A) {
    return this.multiplyMatrices(this, A);
  }
  premultiply(A) {
    return this.multiplyMatrices(A, this);
  }
  multiplyMatrices(A, Q) {
    const B = A.elements, C = Q.elements, E = this.elements, I = B[0], g = B[4], w = B[8], s = B[12], K = B[1], y = B[5], c = B[9], D = B[13], M = B[2], k = B[6], U = B[10], G = B[14], F = B[3], p = B[7], J = B[11], i = B[15], a = C[0], N = C[4], T = C[8], CA = C[12], n = C[1], Y = C[5], r = C[9], R = C[13], EA = C[2], d = C[6], IA = C[10], VA = C[14], OA = C[3], PA = C[7], qA = C[11], XA = C[15];
    return E[0] = I * a + g * n + w * EA + s * OA, E[4] = I * N + g * Y + w * d + s * PA, E[8] = I * T + g * r + w * IA + s * qA, E[12] = I * CA + g * R + w * VA + s * XA, E[1] = K * a + y * n + c * EA + D * OA, E[5] = K * N + y * Y + c * d + D * PA, E[9] = K * T + y * r + c * IA + D * qA, E[13] = K * CA + y * R + c * VA + D * XA, E[2] = M * a + k * n + U * EA + G * OA, E[6] = M * N + k * Y + U * d + G * PA, E[10] = M * T + k * r + U * IA + G * qA, E[14] = M * CA + k * R + U * VA + G * XA, E[3] = F * a + p * n + J * EA + i * OA, E[7] = F * N + p * Y + J * d + i * PA, E[11] = F * T + p * r + J * IA + i * qA, E[15] = F * CA + p * R + J * VA + i * XA, this;
  }
  multiplyScalar(A) {
    const Q = this.elements;
    return Q[0] *= A, Q[4] *= A, Q[8] *= A, Q[12] *= A, Q[1] *= A, Q[5] *= A, Q[9] *= A, Q[13] *= A, Q[2] *= A, Q[6] *= A, Q[10] *= A, Q[14] *= A, Q[3] *= A, Q[7] *= A, Q[11] *= A, Q[15] *= A, this;
  }
  determinant() {
    const A = this.elements, Q = A[0], B = A[4], C = A[8], E = A[12], I = A[1], g = A[5], w = A[9], s = A[13], K = A[2], y = A[6], c = A[10], D = A[14], M = A[3], k = A[7], U = A[11], G = A[15];
    return M * (+E * w * y - C * s * y - E * g * c + B * s * c + C * g * D - B * w * D) + k * (+Q * w * D - Q * s * c + E * I * c - C * I * D + C * s * K - E * w * K) + U * (+Q * s * y - Q * g * D - E * I * y + B * I * D + E * g * K - B * s * K) + G * (-C * g * K - Q * w * y + Q * g * c + C * I * y - B * I * c + B * w * K);
  }
  transpose() {
    const A = this.elements;
    let Q;
    return Q = A[1], A[1] = A[4], A[4] = Q, Q = A[2], A[2] = A[8], A[8] = Q, Q = A[6], A[6] = A[9], A[9] = Q, Q = A[3], A[3] = A[12], A[12] = Q, Q = A[7], A[7] = A[13], A[13] = Q, Q = A[11], A[11] = A[14], A[14] = Q, this;
  }
  setPosition(A, Q, B) {
    const C = this.elements;
    return A.isVector3 ? (C[12] = A.x, C[13] = A.y, C[14] = A.z) : (C[12] = A, C[13] = Q, C[14] = B), this;
  }
  invert() {
    const A = this.elements, Q = A[0], B = A[1], C = A[2], E = A[3], I = A[4], g = A[5], w = A[6], s = A[7], K = A[8], y = A[9], c = A[10], D = A[11], M = A[12], k = A[13], U = A[14], G = A[15], F = y * U * s - k * c * s + k * w * D - g * U * D - y * w * G + g * c * G, p = M * c * s - K * U * s - M * w * D + I * U * D + K * w * G - I * c * G, J = K * k * s - M * y * s + M * g * D - I * k * D - K * g * G + I * y * G, i = M * y * w - K * k * w - M * g * c + I * k * c + K * g * U - I * y * U, a = Q * F + B * p + C * J + E * i;
    if (a === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const N = 1 / a;
    return A[0] = F * N, A[1] = (k * c * E - y * U * E - k * C * D + B * U * D + y * C * G - B * c * G) * N, A[2] = (g * U * E - k * w * E + k * C * s - B * U * s - g * C * G + B * w * G) * N, A[3] = (y * w * E - g * c * E - y * C * s + B * c * s + g * C * D - B * w * D) * N, A[4] = p * N, A[5] = (K * U * E - M * c * E + M * C * D - Q * U * D - K * C * G + Q * c * G) * N, A[6] = (M * w * E - I * U * E - M * C * s + Q * U * s + I * C * G - Q * w * G) * N, A[7] = (I * c * E - K * w * E + K * C * s - Q * c * s - I * C * D + Q * w * D) * N, A[8] = J * N, A[9] = (M * y * E - K * k * E - M * B * D + Q * k * D + K * B * G - Q * y * G) * N, A[10] = (I * k * E - M * g * E + M * B * s - Q * k * s - I * B * G + Q * g * G) * N, A[11] = (K * g * E - I * y * E - K * B * s + Q * y * s + I * B * D - Q * g * D) * N, A[12] = i * N, A[13] = (K * k * C - M * y * C + M * B * c - Q * k * c - K * B * U + Q * y * U) * N, A[14] = (M * g * C - I * k * C - M * B * w + Q * k * w + I * B * U - Q * g * U) * N, A[15] = (I * y * C - K * g * C + K * B * w - Q * y * w - I * B * c + Q * g * c) * N, this;
  }
  scale(A) {
    const Q = this.elements, B = A.x, C = A.y, E = A.z;
    return Q[0] *= B, Q[4] *= C, Q[8] *= E, Q[1] *= B, Q[5] *= C, Q[9] *= E, Q[2] *= B, Q[6] *= C, Q[10] *= E, Q[3] *= B, Q[7] *= C, Q[11] *= E, this;
  }
  getMaxScaleOnAxis() {
    const A = this.elements, Q = A[0] * A[0] + A[1] * A[1] + A[2] * A[2], B = A[4] * A[4] + A[5] * A[5] + A[6] * A[6], C = A[8] * A[8] + A[9] * A[9] + A[10] * A[10];
    return Math.sqrt(Math.max(Q, B, C));
  }
  makeTranslation(A, Q, B) {
    return A.isVector3 ? this.set(
      1,
      0,
      0,
      A.x,
      0,
      1,
      0,
      A.y,
      0,
      0,
      1,
      A.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      A,
      0,
      1,
      0,
      Q,
      0,
      0,
      1,
      B,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(A) {
    const Q = Math.cos(A), B = Math.sin(A);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      Q,
      -B,
      0,
      0,
      B,
      Q,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(A) {
    const Q = Math.cos(A), B = Math.sin(A);
    return this.set(
      Q,
      0,
      B,
      0,
      0,
      1,
      0,
      0,
      -B,
      0,
      Q,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(A) {
    const Q = Math.cos(A), B = Math.sin(A);
    return this.set(
      Q,
      -B,
      0,
      0,
      B,
      Q,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(A, Q) {
    const B = Math.cos(Q), C = Math.sin(Q), E = 1 - B, I = A.x, g = A.y, w = A.z, s = E * I, K = E * g;
    return this.set(
      s * I + B,
      s * g - C * w,
      s * w + C * g,
      0,
      s * g + C * w,
      K * g + B,
      K * w - C * I,
      0,
      s * w - C * g,
      K * w + C * I,
      E * w * w + B,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(A, Q, B) {
    return this.set(
      A,
      0,
      0,
      0,
      0,
      Q,
      0,
      0,
      0,
      0,
      B,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(A, Q, B, C, E, I) {
    return this.set(
      1,
      B,
      E,
      0,
      A,
      1,
      I,
      0,
      Q,
      C,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(A, Q, B) {
    const C = this.elements, E = Q._x, I = Q._y, g = Q._z, w = Q._w, s = E + E, K = I + I, y = g + g, c = E * s, D = E * K, M = E * y, k = I * K, U = I * y, G = g * y, F = w * s, p = w * K, J = w * y, i = B.x, a = B.y, N = B.z;
    return C[0] = (1 - (k + G)) * i, C[1] = (D + J) * i, C[2] = (M - p) * i, C[3] = 0, C[4] = (D - J) * a, C[5] = (1 - (c + G)) * a, C[6] = (U + F) * a, C[7] = 0, C[8] = (M + p) * N, C[9] = (U - F) * N, C[10] = (1 - (c + k)) * N, C[11] = 0, C[12] = A.x, C[13] = A.y, C[14] = A.z, C[15] = 1, this;
  }
  decompose(A, Q, B) {
    const C = this.elements;
    let E = NA.set(C[0], C[1], C[2]).length();
    const I = NA.set(C[4], C[5], C[6]).length(), g = NA.set(C[8], C[9], C[10]).length();
    this.determinant() < 0 && (E = -E), A.x = C[12], A.y = C[13], A.z = C[14], O.copy(this);
    const s = 1 / E, K = 1 / I, y = 1 / g;
    return O.elements[0] *= s, O.elements[1] *= s, O.elements[2] *= s, O.elements[4] *= K, O.elements[5] *= K, O.elements[6] *= K, O.elements[8] *= y, O.elements[9] *= y, O.elements[10] *= y, Q.setFromRotationMatrix(O), B.x = E, B.y = I, B.z = g, this;
  }
  makePerspective(A, Q, B, C, E, I, g = bA) {
    const w = this.elements, s = 2 * E / (Q - A), K = 2 * E / (B - C), y = (Q + A) / (Q - A), c = (B + C) / (B - C);
    let D, M;
    if (g === bA)
      D = -(I + E) / (I - E), M = -2 * I * E / (I - E);
    else if (g === GB)
      D = -I / (I - E), M = -I * E / (I - E);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + g);
    return w[0] = s, w[4] = 0, w[8] = y, w[12] = 0, w[1] = 0, w[5] = K, w[9] = c, w[13] = 0, w[2] = 0, w[6] = 0, w[10] = D, w[14] = M, w[3] = 0, w[7] = 0, w[11] = -1, w[15] = 0, this;
  }
  makeOrthographic(A, Q, B, C, E, I, g = bA) {
    const w = this.elements, s = 1 / (Q - A), K = 1 / (B - C), y = 1 / (I - E), c = (Q + A) * s, D = (B + C) * K;
    let M, k;
    if (g === bA)
      M = (I + E) * y, k = -2 * y;
    else if (g === GB)
      M = E * y, k = -1 * y;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + g);
    return w[0] = 2 * s, w[4] = 0, w[8] = 0, w[12] = -c, w[1] = 0, w[5] = 2 * K, w[9] = 0, w[13] = -D, w[2] = 0, w[6] = 0, w[10] = k, w[14] = -M, w[3] = 0, w[7] = 0, w[11] = 0, w[15] = 1, this;
  }
  equals(A) {
    const Q = this.elements, B = A.elements;
    for (let C = 0; C < 16; C++)
      if (Q[C] !== B[C])
        return !1;
    return !0;
  }
  fromArray(A, Q = 0) {
    for (let B = 0; B < 16; B++)
      this.elements[B] = A[B + Q];
    return this;
  }
  toArray(A = [], Q = 0) {
    const B = this.elements;
    return A[Q] = B[0], A[Q + 1] = B[1], A[Q + 2] = B[2], A[Q + 3] = B[3], A[Q + 4] = B[4], A[Q + 5] = B[5], A[Q + 6] = B[6], A[Q + 7] = B[7], A[Q + 8] = B[8], A[Q + 9] = B[9], A[Q + 10] = B[10], A[Q + 11] = B[11], A[Q + 12] = B[12], A[Q + 13] = B[13], A[Q + 14] = B[14], A[Q + 15] = B[15], A;
  }
}
const NA = /* @__PURE__ */ new L(), O = /* @__PURE__ */ new Z(), LC = /* @__PURE__ */ new L(0, 0, 0), JC = /* @__PURE__ */ new L(1, 1, 1), MA = /* @__PURE__ */ new L(), EQ = /* @__PURE__ */ new L(), e = /* @__PURE__ */ new L(), iB = /* @__PURE__ */ new Z(), pB = /* @__PURE__ */ new xA();
class oQ {
  constructor(A = 0, Q = 0, B = 0, C = oQ.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = A, this._y = Q, this._z = B, this._order = C;
  }
  get x() {
    return this._x;
  }
  set x(A) {
    this._x = A, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(A) {
    this._y = A, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(A) {
    this._z = A, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(A) {
    this._order = A, this._onChangeCallback();
  }
  set(A, Q, B, C = this._order) {
    return this._x = A, this._y = Q, this._z = B, this._order = C, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(A) {
    return this._x = A._x, this._y = A._y, this._z = A._z, this._order = A._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(A, Q = this._order, B = !0) {
    const C = A.elements, E = C[0], I = C[4], g = C[8], w = C[1], s = C[5], K = C[9], y = C[2], c = C[6], D = C[10];
    switch (Q) {
      case "XYZ":
        this._y = Math.asin(W(g, -1, 1)), Math.abs(g) < 0.9999999 ? (this._x = Math.atan2(-K, D), this._z = Math.atan2(-I, E)) : (this._x = Math.atan2(c, s), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-W(K, -1, 1)), Math.abs(K) < 0.9999999 ? (this._y = Math.atan2(g, D), this._z = Math.atan2(w, s)) : (this._y = Math.atan2(-y, E), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(W(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._y = Math.atan2(-y, D), this._z = Math.atan2(-I, s)) : (this._y = 0, this._z = Math.atan2(w, E));
        break;
      case "ZYX":
        this._y = Math.asin(-W(y, -1, 1)), Math.abs(y) < 0.9999999 ? (this._x = Math.atan2(c, D), this._z = Math.atan2(w, E)) : (this._x = 0, this._z = Math.atan2(-I, s));
        break;
      case "YZX":
        this._z = Math.asin(W(w, -1, 1)), Math.abs(w) < 0.9999999 ? (this._x = Math.atan2(-K, s), this._y = Math.atan2(-y, E)) : (this._x = 0, this._y = Math.atan2(g, D));
        break;
      case "XZY":
        this._z = Math.asin(-W(I, -1, 1)), Math.abs(I) < 0.9999999 ? (this._x = Math.atan2(c, s), this._y = Math.atan2(g, E)) : (this._x = Math.atan2(-K, D), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + Q);
    }
    return this._order = Q, B === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(A, Q, B) {
    return iB.makeRotationFromQuaternion(A), this.setFromRotationMatrix(iB, Q, B);
  }
  setFromVector3(A, Q = this._order) {
    return this.set(A.x, A.y, A.z, Q);
  }
  reorder(A) {
    return pB.setFromEuler(this), this.setFromQuaternion(pB, A);
  }
  equals(A) {
    return A._x === this._x && A._y === this._y && A._z === this._z && A._order === this._order;
  }
  fromArray(A) {
    return this._x = A[0], this._y = A[1], this._z = A[2], A[3] !== void 0 && (this._order = A[3]), this._onChangeCallback(), this;
  }
  toArray(A = [], Q = 0) {
    return A[Q] = this._x, A[Q + 1] = this._y, A[Q + 2] = this._z, A[Q + 3] = this._order, A;
  }
  _onChange(A) {
    return this._onChangeCallback = A, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
oQ.DEFAULT_ORDER = "XYZ";
class FC {
  constructor() {
    this.mask = 1;
  }
  set(A) {
    this.mask = (1 << A | 0) >>> 0;
  }
  enable(A) {
    this.mask |= 1 << A | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(A) {
    this.mask ^= 1 << A | 0;
  }
  disable(A) {
    this.mask &= ~(1 << A | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(A) {
    return (this.mask & A.mask) !== 0;
  }
  isEnabled(A) {
    return (this.mask & (1 << A | 0)) !== 0;
  }
}
let SC = 0;
const nB = /* @__PURE__ */ new L(), iA = /* @__PURE__ */ new xA(), $ = /* @__PURE__ */ new Z(), IQ = /* @__PURE__ */ new L(), fA = /* @__PURE__ */ new L(), NC = /* @__PURE__ */ new L(), iC = /* @__PURE__ */ new xA(), aB = /* @__PURE__ */ new L(1, 0, 0), oB = /* @__PURE__ */ new L(0, 1, 0), tB = /* @__PURE__ */ new L(0, 0, 1), pC = { type: "added" }, nC = { type: "removed" };
class X extends eA {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: SC++ }), this.uuid = uA(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = X.DEFAULT_UP.clone();
    const A = new L(), Q = new oQ(), B = new xA(), C = new L(1, 1, 1);
    function E() {
      B.setFromEuler(Q, !1);
    }
    function I() {
      Q.setFromQuaternion(B, void 0, !1);
    }
    Q._onChange(E), B._onChange(I), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: A
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: Q
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: B
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: C
      },
      modelViewMatrix: {
        value: new Z()
      },
      normalMatrix: {
        value: new yA()
      }
    }), this.matrix = new Z(), this.matrixWorld = new Z(), this.matrixAutoUpdate = X.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = X.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new FC(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(A) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(A), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(A) {
    return this.quaternion.premultiply(A), this;
  }
  setRotationFromAxisAngle(A, Q) {
    this.quaternion.setFromAxisAngle(A, Q);
  }
  setRotationFromEuler(A) {
    this.quaternion.setFromEuler(A, !0);
  }
  setRotationFromMatrix(A) {
    this.quaternion.setFromRotationMatrix(A);
  }
  setRotationFromQuaternion(A) {
    this.quaternion.copy(A);
  }
  rotateOnAxis(A, Q) {
    return iA.setFromAxisAngle(A, Q), this.quaternion.multiply(iA), this;
  }
  rotateOnWorldAxis(A, Q) {
    return iA.setFromAxisAngle(A, Q), this.quaternion.premultiply(iA), this;
  }
  rotateX(A) {
    return this.rotateOnAxis(aB, A);
  }
  rotateY(A) {
    return this.rotateOnAxis(oB, A);
  }
  rotateZ(A) {
    return this.rotateOnAxis(tB, A);
  }
  translateOnAxis(A, Q) {
    return nB.copy(A).applyQuaternion(this.quaternion), this.position.add(nB.multiplyScalar(Q)), this;
  }
  translateX(A) {
    return this.translateOnAxis(aB, A);
  }
  translateY(A) {
    return this.translateOnAxis(oB, A);
  }
  translateZ(A) {
    return this.translateOnAxis(tB, A);
  }
  localToWorld(A) {
    return this.updateWorldMatrix(!0, !1), A.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(A) {
    return this.updateWorldMatrix(!0, !1), A.applyMatrix4($.copy(this.matrixWorld).invert());
  }
  lookAt(A, Q, B) {
    A.isVector3 ? IQ.copy(A) : IQ.set(A, Q, B);
    const C = this.parent;
    this.updateWorldMatrix(!0, !1), fA.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? $.lookAt(fA, IQ, this.up) : $.lookAt(IQ, fA, this.up), this.quaternion.setFromRotationMatrix($), C && ($.extractRotation(C.matrixWorld), iA.setFromRotationMatrix($), this.quaternion.premultiply(iA.invert()));
  }
  add(A) {
    if (arguments.length > 1) {
      for (let Q = 0; Q < arguments.length; Q++)
        this.add(arguments[Q]);
      return this;
    }
    return A === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", A), this) : (A && A.isObject3D ? (A.parent !== null && A.parent.remove(A), A.parent = this, this.children.push(A), A.dispatchEvent(pC)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", A), this);
  }
  remove(A) {
    if (arguments.length > 1) {
      for (let B = 0; B < arguments.length; B++)
        this.remove(arguments[B]);
      return this;
    }
    const Q = this.children.indexOf(A);
    return Q !== -1 && (A.parent = null, this.children.splice(Q, 1), A.dispatchEvent(nC)), this;
  }
  removeFromParent() {
    const A = this.parent;
    return A !== null && A.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(A) {
    return this.updateWorldMatrix(!0, !1), $.copy(this.matrixWorld).invert(), A.parent !== null && (A.parent.updateWorldMatrix(!0, !1), $.multiply(A.parent.matrixWorld)), A.applyMatrix4($), this.add(A), A.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(A) {
    return this.getObjectByProperty("id", A);
  }
  getObjectByName(A) {
    return this.getObjectByProperty("name", A);
  }
  getObjectByProperty(A, Q) {
    if (this[A] === Q)
      return this;
    for (let B = 0, C = this.children.length; B < C; B++) {
      const I = this.children[B].getObjectByProperty(A, Q);
      if (I !== void 0)
        return I;
    }
  }
  getObjectsByProperty(A, Q, B = []) {
    this[A] === Q && B.push(this);
    const C = this.children;
    for (let E = 0, I = C.length; E < I; E++)
      C[E].getObjectsByProperty(A, Q, B);
    return B;
  }
  getWorldPosition(A) {
    return this.updateWorldMatrix(!0, !1), A.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(A) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fA, A, NC), A;
  }
  getWorldScale(A) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fA, iC, A), A;
  }
  getWorldDirection(A) {
    this.updateWorldMatrix(!0, !1);
    const Q = this.matrixWorld.elements;
    return A.set(Q[8], Q[9], Q[10]).normalize();
  }
  raycast() {
  }
  traverse(A) {
    A(this);
    const Q = this.children;
    for (let B = 0, C = Q.length; B < C; B++)
      Q[B].traverse(A);
  }
  traverseVisible(A) {
    if (this.visible === !1)
      return;
    A(this);
    const Q = this.children;
    for (let B = 0, C = Q.length; B < C; B++)
      Q[B].traverseVisible(A);
  }
  traverseAncestors(A) {
    const Q = this.parent;
    Q !== null && (A(Q), Q.traverseAncestors(A));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(A) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || A) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, A = !0);
    const Q = this.children;
    for (let B = 0, C = Q.length; B < C; B++) {
      const E = Q[B];
      (E.matrixWorldAutoUpdate === !0 || A === !0) && E.updateMatrixWorld(A);
    }
  }
  updateWorldMatrix(A, Q) {
    const B = this.parent;
    if (A === !0 && B !== null && B.matrixWorldAutoUpdate === !0 && B.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), Q === !0) {
      const C = this.children;
      for (let E = 0, I = C.length; E < I; E++) {
        const g = C[E];
        g.matrixWorldAutoUpdate === !0 && g.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(A) {
    const Q = A === void 0 || typeof A == "string", B = {};
    Q && (A = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, B.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const C = {};
    C.uuid = this.uuid, C.type = this.type, this.name !== "" && (C.name = this.name), this.castShadow === !0 && (C.castShadow = !0), this.receiveShadow === !0 && (C.receiveShadow = !0), this.visible === !1 && (C.visible = !1), this.frustumCulled === !1 && (C.frustumCulled = !1), this.renderOrder !== 0 && (C.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (C.userData = this.userData), C.layers = this.layers.mask, C.matrix = this.matrix.toArray(), C.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (C.matrixAutoUpdate = !1), this.isInstancedMesh && (C.type = "InstancedMesh", C.count = this.count, C.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (C.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (C.type = "BatchedMesh", C.perObjectFrustumCulled = this.perObjectFrustumCulled, C.sortObjects = this.sortObjects, C.drawRanges = this._drawRanges, C.reservedRanges = this._reservedRanges, C.visibility = this._visibility, C.active = this._active, C.bounds = this._bounds.map((g) => ({
      boxInitialized: g.boxInitialized,
      boxMin: g.box.min.toArray(),
      boxMax: g.box.max.toArray(),
      sphereInitialized: g.sphereInitialized,
      sphereRadius: g.sphere.radius,
      sphereCenter: g.sphere.center.toArray()
    })), C.maxGeometryCount = this._maxGeometryCount, C.maxVertexCount = this._maxVertexCount, C.maxIndexCount = this._maxIndexCount, C.geometryInitialized = this._geometryInitialized, C.geometryCount = this._geometryCount, C.matricesTexture = this._matricesTexture.toJSON(A), this.boundingSphere !== null && (C.boundingSphere = {
      center: C.boundingSphere.center.toArray(),
      radius: C.boundingSphere.radius
    }), this.boundingBox !== null && (C.boundingBox = {
      min: C.boundingBox.min.toArray(),
      max: C.boundingBox.max.toArray()
    }));
    function E(g, w) {
      return g[w.uuid] === void 0 && (g[w.uuid] = w.toJSON(A)), w.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? C.background = this.background.toJSON() : this.background.isTexture && (C.background = this.background.toJSON(A).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (C.environment = this.environment.toJSON(A).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      C.geometry = E(A.geometries, this.geometry);
      const g = this.geometry.parameters;
      if (g !== void 0 && g.shapes !== void 0) {
        const w = g.shapes;
        if (Array.isArray(w))
          for (let s = 0, K = w.length; s < K; s++) {
            const y = w[s];
            E(A.shapes, y);
          }
        else
          E(A.shapes, w);
      }
    }
    if (this.isSkinnedMesh && (C.bindMode = this.bindMode, C.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (E(A.skeletons, this.skeleton), C.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const g = [];
        for (let w = 0, s = this.material.length; w < s; w++)
          g.push(E(A.materials, this.material[w]));
        C.material = g;
      } else
        C.material = E(A.materials, this.material);
    if (this.children.length > 0) {
      C.children = [];
      for (let g = 0; g < this.children.length; g++)
        C.children.push(this.children[g].toJSON(A).object);
    }
    if (this.animations.length > 0) {
      C.animations = [];
      for (let g = 0; g < this.animations.length; g++) {
        const w = this.animations[g];
        C.animations.push(E(A.animations, w));
      }
    }
    if (Q) {
      const g = I(A.geometries), w = I(A.materials), s = I(A.textures), K = I(A.images), y = I(A.shapes), c = I(A.skeletons), D = I(A.animations), M = I(A.nodes);
      g.length > 0 && (B.geometries = g), w.length > 0 && (B.materials = w), s.length > 0 && (B.textures = s), K.length > 0 && (B.images = K), y.length > 0 && (B.shapes = y), c.length > 0 && (B.skeletons = c), D.length > 0 && (B.animations = D), M.length > 0 && (B.nodes = M);
    }
    return B.object = C, B;
    function I(g) {
      const w = [];
      for (const s in g) {
        const K = g[s];
        delete K.metadata, w.push(K);
      }
      return w;
    }
  }
  clone(A) {
    return new this.constructor().copy(this, A);
  }
  copy(A, Q = !0) {
    if (this.name = A.name, this.up.copy(A.up), this.position.copy(A.position), this.rotation.order = A.rotation.order, this.quaternion.copy(A.quaternion), this.scale.copy(A.scale), this.matrix.copy(A.matrix), this.matrixWorld.copy(A.matrixWorld), this.matrixAutoUpdate = A.matrixAutoUpdate, this.matrixWorldAutoUpdate = A.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = A.matrixWorldNeedsUpdate, this.layers.mask = A.layers.mask, this.visible = A.visible, this.castShadow = A.castShadow, this.receiveShadow = A.receiveShadow, this.frustumCulled = A.frustumCulled, this.renderOrder = A.renderOrder, this.animations = A.animations.slice(), this.userData = JSON.parse(JSON.stringify(A.userData)), Q === !0)
      for (let B = 0; B < A.children.length; B++) {
        const C = A.children[B];
        this.add(C.clone());
      }
    return this;
  }
}
X.DEFAULT_UP = /* @__PURE__ */ new L(0, 1, 0);
X.DEFAULT_MATRIX_AUTO_UPDATE = !0;
X.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const P = /* @__PURE__ */ new L(), AA = /* @__PURE__ */ new L(), eQ = /* @__PURE__ */ new L(), QA = /* @__PURE__ */ new L(), pA = /* @__PURE__ */ new L(), nA = /* @__PURE__ */ new L(), HB = /* @__PURE__ */ new L(), uQ = /* @__PURE__ */ new L(), xQ = /* @__PURE__ */ new L(), zQ = /* @__PURE__ */ new L();
class q {
  constructor(A = new L(), Q = new L(), B = new L()) {
    this.a = A, this.b = Q, this.c = B;
  }
  static getNormal(A, Q, B, C) {
    C.subVectors(B, Q), P.subVectors(A, Q), C.cross(P);
    const E = C.lengthSq();
    return E > 0 ? C.multiplyScalar(1 / Math.sqrt(E)) : C.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(A, Q, B, C, E) {
    P.subVectors(C, Q), AA.subVectors(B, Q), eQ.subVectors(A, Q);
    const I = P.dot(P), g = P.dot(AA), w = P.dot(eQ), s = AA.dot(AA), K = AA.dot(eQ), y = I * s - g * g;
    if (y === 0)
      return E.set(0, 0, 0), null;
    const c = 1 / y, D = (s * w - g * K) * c, M = (I * K - g * w) * c;
    return E.set(1 - D - M, M, D);
  }
  static containsPoint(A, Q, B, C) {
    return this.getBarycoord(A, Q, B, C, QA) === null ? !1 : QA.x >= 0 && QA.y >= 0 && QA.x + QA.y <= 1;
  }
  static getInterpolation(A, Q, B, C, E, I, g, w) {
    return this.getBarycoord(A, Q, B, C, QA) === null ? (w.x = 0, w.y = 0, "z" in w && (w.z = 0), "w" in w && (w.w = 0), null) : (w.setScalar(0), w.addScaledVector(E, QA.x), w.addScaledVector(I, QA.y), w.addScaledVector(g, QA.z), w);
  }
  static isFrontFacing(A, Q, B, C) {
    return P.subVectors(B, Q), AA.subVectors(A, Q), P.cross(AA).dot(C) < 0;
  }
  set(A, Q, B) {
    return this.a.copy(A), this.b.copy(Q), this.c.copy(B), this;
  }
  setFromPointsAndIndices(A, Q, B, C) {
    return this.a.copy(A[Q]), this.b.copy(A[B]), this.c.copy(A[C]), this;
  }
  setFromAttributeAndIndices(A, Q, B, C) {
    return this.a.fromBufferAttribute(A, Q), this.b.fromBufferAttribute(A, B), this.c.fromBufferAttribute(A, C), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(A) {
    return this.a.copy(A.a), this.b.copy(A.b), this.c.copy(A.c), this;
  }
  getArea() {
    return P.subVectors(this.c, this.b), AA.subVectors(this.a, this.b), P.cross(AA).length() * 0.5;
  }
  getMidpoint(A) {
    return A.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(A) {
    return q.getNormal(this.a, this.b, this.c, A);
  }
  getPlane(A) {
    return A.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(A, Q) {
    return q.getBarycoord(A, this.a, this.b, this.c, Q);
  }
  getInterpolation(A, Q, B, C, E) {
    return q.getInterpolation(A, this.a, this.b, this.c, Q, B, C, E);
  }
  containsPoint(A) {
    return q.containsPoint(A, this.a, this.b, this.c);
  }
  isFrontFacing(A) {
    return q.isFrontFacing(this.a, this.b, this.c, A);
  }
  intersectsBox(A) {
    return A.intersectsTriangle(this);
  }
  closestPointToPoint(A, Q) {
    const B = this.a, C = this.b, E = this.c;
    let I, g;
    pA.subVectors(C, B), nA.subVectors(E, B), uQ.subVectors(A, B);
    const w = pA.dot(uQ), s = nA.dot(uQ);
    if (w <= 0 && s <= 0)
      return Q.copy(B);
    xQ.subVectors(A, C);
    const K = pA.dot(xQ), y = nA.dot(xQ);
    if (K >= 0 && y <= K)
      return Q.copy(C);
    const c = w * y - K * s;
    if (c <= 0 && w >= 0 && K <= 0)
      return I = w / (w - K), Q.copy(B).addScaledVector(pA, I);
    zQ.subVectors(A, E);
    const D = pA.dot(zQ), M = nA.dot(zQ);
    if (M >= 0 && D <= M)
      return Q.copy(E);
    const k = D * s - w * M;
    if (k <= 0 && s >= 0 && M <= 0)
      return g = s / (s - M), Q.copy(B).addScaledVector(nA, g);
    const U = K * M - D * y;
    if (U <= 0 && y - K >= 0 && D - M >= 0)
      return HB.subVectors(E, C), g = (y - K) / (y - K + (D - M)), Q.copy(C).addScaledVector(HB, g);
    const G = 1 / (U + k + c);
    return I = k * G, g = c * G, Q.copy(B).addScaledVector(pA, I).addScaledVector(nA, g);
  }
  equals(A) {
    return A.a.equals(this.a) && A.b.equals(this.b) && A.c.equals(this.c);
  }
}
const zB = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, sA = { h: 0, s: 0, l: 0 }, gQ = { h: 0, s: 0, l: 0 };
function mQ(h, A, Q) {
  return Q < 0 && (Q += 1), Q > 1 && (Q -= 1), Q < 1 / 6 ? h + (A - h) * 6 * Q : Q < 1 / 2 ? A : Q < 2 / 3 ? h + (A - h) * 6 * (2 / 3 - Q) : h;
}
class mA {
  constructor(A, Q, B) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(A, Q, B);
  }
  set(A, Q, B) {
    if (Q === void 0 && B === void 0) {
      const C = A;
      C && C.isColor ? this.copy(C) : typeof C == "number" ? this.setHex(C) : typeof C == "string" && this.setStyle(C);
    } else
      this.setRGB(A, Q, B);
    return this;
  }
  setScalar(A) {
    return this.r = A, this.g = A, this.b = A, this;
  }
  setHex(A, Q = z) {
    return A = Math.floor(A), this.r = (A >> 16 & 255) / 255, this.g = (A >> 8 & 255) / 255, this.b = (A & 255) / 255, m.toWorkingColorSpace(this, Q), this;
  }
  setRGB(A, Q, B, C = m.workingColorSpace) {
    return this.r = A, this.g = Q, this.b = B, m.toWorkingColorSpace(this, C), this;
  }
  setHSL(A, Q, B, C = m.workingColorSpace) {
    if (A = DC(A, 1), Q = W(Q, 0, 1), B = W(B, 0, 1), Q === 0)
      this.r = this.g = this.b = B;
    else {
      const E = B <= 0.5 ? B * (1 + Q) : B + Q - B * Q, I = 2 * B - E;
      this.r = mQ(I, E, A + 1 / 3), this.g = mQ(I, E, A), this.b = mQ(I, E, A - 1 / 3);
    }
    return m.toWorkingColorSpace(this, C), this;
  }
  setStyle(A, Q = z) {
    function B(E) {
      E !== void 0 && parseFloat(E) < 1 && console.warn("THREE.Color: Alpha component of " + A + " will be ignored.");
    }
    let C;
    if (C = /^(\w+)\(([^\)]*)\)/.exec(A)) {
      let E;
      const I = C[1], g = C[2];
      switch (I) {
        case "rgb":
        case "rgba":
          if (E = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))
            return B(E[4]), this.setRGB(
              Math.min(255, parseInt(E[1], 10)) / 255,
              Math.min(255, parseInt(E[2], 10)) / 255,
              Math.min(255, parseInt(E[3], 10)) / 255,
              Q
            );
          if (E = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))
            return B(E[4]), this.setRGB(
              Math.min(100, parseInt(E[1], 10)) / 100,
              Math.min(100, parseInt(E[2], 10)) / 100,
              Math.min(100, parseInt(E[3], 10)) / 100,
              Q
            );
          break;
        case "hsl":
        case "hsla":
          if (E = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))
            return B(E[4]), this.setHSL(
              parseFloat(E[1]) / 360,
              parseFloat(E[2]) / 100,
              parseFloat(E[3]) / 100,
              Q
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + A);
      }
    } else if (C = /^\#([A-Fa-f\d]+)$/.exec(A)) {
      const E = C[1], I = E.length;
      if (I === 3)
        return this.setRGB(
          parseInt(E.charAt(0), 16) / 15,
          parseInt(E.charAt(1), 16) / 15,
          parseInt(E.charAt(2), 16) / 15,
          Q
        );
      if (I === 6)
        return this.setHex(parseInt(E, 16), Q);
      console.warn("THREE.Color: Invalid hex color " + A);
    } else if (A && A.length > 0)
      return this.setColorName(A, Q);
    return this;
  }
  setColorName(A, Q = z) {
    const B = zB[A.toLowerCase()];
    return B !== void 0 ? this.setHex(B, Q) : console.warn("THREE.Color: Unknown color " + A), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(A) {
    return this.r = A.r, this.g = A.g, this.b = A.b, this;
  }
  copySRGBToLinear(A) {
    return this.r = YA(A.r), this.g = YA(A.g), this.b = YA(A.b), this;
  }
  copyLinearToSRGB(A) {
    return this.r = dQ(A.r), this.g = dQ(A.g), this.b = dQ(A.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(A = z) {
    return m.fromWorkingColorSpace(l.copy(this), A), Math.round(W(l.r * 255, 0, 255)) * 65536 + Math.round(W(l.g * 255, 0, 255)) * 256 + Math.round(W(l.b * 255, 0, 255));
  }
  getHexString(A = z) {
    return ("000000" + this.getHex(A).toString(16)).slice(-6);
  }
  getHSL(A, Q = m.workingColorSpace) {
    m.fromWorkingColorSpace(l.copy(this), Q);
    const B = l.r, C = l.g, E = l.b, I = Math.max(B, C, E), g = Math.min(B, C, E);
    let w, s;
    const K = (g + I) / 2;
    if (g === I)
      w = 0, s = 0;
    else {
      const y = I - g;
      switch (s = K <= 0.5 ? y / (I + g) : y / (2 - I - g), I) {
        case B:
          w = (C - E) / y + (C < E ? 6 : 0);
          break;
        case C:
          w = (E - B) / y + 2;
          break;
        case E:
          w = (B - C) / y + 4;
          break;
      }
      w /= 6;
    }
    return A.h = w, A.s = s, A.l = K, A;
  }
  getRGB(A, Q = m.workingColorSpace) {
    return m.fromWorkingColorSpace(l.copy(this), Q), A.r = l.r, A.g = l.g, A.b = l.b, A;
  }
  getStyle(A = z) {
    m.fromWorkingColorSpace(l.copy(this), A);
    const Q = l.r, B = l.g, C = l.b;
    return A !== z ? `color(${A} ${Q.toFixed(3)} ${B.toFixed(3)} ${C.toFixed(3)})` : `rgb(${Math.round(Q * 255)},${Math.round(B * 255)},${Math.round(C * 255)})`;
  }
  offsetHSL(A, Q, B) {
    return this.getHSL(sA), this.setHSL(sA.h + A, sA.s + Q, sA.l + B);
  }
  add(A) {
    return this.r += A.r, this.g += A.g, this.b += A.b, this;
  }
  addColors(A, Q) {
    return this.r = A.r + Q.r, this.g = A.g + Q.g, this.b = A.b + Q.b, this;
  }
  addScalar(A) {
    return this.r += A, this.g += A, this.b += A, this;
  }
  sub(A) {
    return this.r = Math.max(0, this.r - A.r), this.g = Math.max(0, this.g - A.g), this.b = Math.max(0, this.b - A.b), this;
  }
  multiply(A) {
    return this.r *= A.r, this.g *= A.g, this.b *= A.b, this;
  }
  multiplyScalar(A) {
    return this.r *= A, this.g *= A, this.b *= A, this;
  }
  lerp(A, Q) {
    return this.r += (A.r - this.r) * Q, this.g += (A.g - this.g) * Q, this.b += (A.b - this.b) * Q, this;
  }
  lerpColors(A, Q, B) {
    return this.r = A.r + (Q.r - A.r) * B, this.g = A.g + (Q.g - A.g) * B, this.b = A.b + (Q.b - A.b) * B, this;
  }
  lerpHSL(A, Q) {
    this.getHSL(sA), A.getHSL(gQ);
    const B = rQ(sA.h, gQ.h, Q), C = rQ(sA.s, gQ.s, Q), E = rQ(sA.l, gQ.l, Q);
    return this.setHSL(B, C, E), this;
  }
  setFromVector3(A) {
    return this.r = A.x, this.g = A.y, this.b = A.z, this;
  }
  applyMatrix3(A) {
    const Q = this.r, B = this.g, C = this.b, E = A.elements;
    return this.r = E[0] * Q + E[3] * B + E[6] * C, this.g = E[1] * Q + E[4] * B + E[7] * C, this.b = E[2] * Q + E[5] * B + E[8] * C, this;
  }
  equals(A) {
    return A.r === this.r && A.g === this.g && A.b === this.b;
  }
  fromArray(A, Q = 0) {
    return this.r = A[Q], this.g = A[Q + 1], this.b = A[Q + 2], this;
  }
  toArray(A = [], Q = 0) {
    return A[Q] = this.r, A[Q + 1] = this.g, A[Q + 2] = this.b, A;
  }
  fromBufferAttribute(A, Q) {
    return this.r = A.getX(Q), this.g = A.getY(Q), this.b = A.getZ(Q), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const l = /* @__PURE__ */ new mA();
mA.NAMES = zB;
let aC = 0;
class mB extends eA {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: aC++ }), this.uuid = uA(), this.name = "", this.type = "Material", this.blending = CB, this.side = qQ, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = IB, this.blendDst = gB, this.blendEquation = EB, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new mA(0, 0, 0), this.blendAlpha = 0, this.depthFunc = wB, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = kB, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = GA, this.stencilZFail = GA, this.stencilZPass = GA, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(A) {
    this._alphaTest > 0 != A > 0 && this.version++, this._alphaTest = A;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(A) {
    if (A !== void 0)
      for (const Q in A) {
        const B = A[Q];
        if (B === void 0) {
          console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);
          continue;
        }
        const C = this[Q];
        if (C === void 0) {
          console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);
          continue;
        }
        C && C.isColor ? C.set(B) : C && C.isVector3 && B && B.isVector3 ? C.copy(B) : this[Q] = B;
      }
  }
  toJSON(A) {
    const Q = A === void 0 || typeof A == "string";
    Q && (A = {
      textures: {},
      images: {}
    });
    const B = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    B.uuid = this.uuid, B.type = this.type, this.name !== "" && (B.name = this.name), this.color && this.color.isColor && (B.color = this.color.getHex()), this.roughness !== void 0 && (B.roughness = this.roughness), this.metalness !== void 0 && (B.metalness = this.metalness), this.sheen !== void 0 && (B.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (B.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (B.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (B.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (B.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (B.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (B.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (B.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (B.shininess = this.shininess), this.clearcoat !== void 0 && (B.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (B.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (B.clearcoatMap = this.clearcoatMap.toJSON(A).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (B.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(A).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (B.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(A).uuid, B.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (B.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (B.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (B.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (B.iridescenceMap = this.iridescenceMap.toJSON(A).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (B.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(A).uuid), this.anisotropy !== void 0 && (B.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (B.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (B.anisotropyMap = this.anisotropyMap.toJSON(A).uuid), this.map && this.map.isTexture && (B.map = this.map.toJSON(A).uuid), this.matcap && this.matcap.isTexture && (B.matcap = this.matcap.toJSON(A).uuid), this.alphaMap && this.alphaMap.isTexture && (B.alphaMap = this.alphaMap.toJSON(A).uuid), this.lightMap && this.lightMap.isTexture && (B.lightMap = this.lightMap.toJSON(A).uuid, B.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (B.aoMap = this.aoMap.toJSON(A).uuid, B.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (B.bumpMap = this.bumpMap.toJSON(A).uuid, B.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (B.normalMap = this.normalMap.toJSON(A).uuid, B.normalMapType = this.normalMapType, B.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (B.displacementMap = this.displacementMap.toJSON(A).uuid, B.displacementScale = this.displacementScale, B.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (B.roughnessMap = this.roughnessMap.toJSON(A).uuid), this.metalnessMap && this.metalnessMap.isTexture && (B.metalnessMap = this.metalnessMap.toJSON(A).uuid), this.emissiveMap && this.emissiveMap.isTexture && (B.emissiveMap = this.emissiveMap.toJSON(A).uuid), this.specularMap && this.specularMap.isTexture && (B.specularMap = this.specularMap.toJSON(A).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (B.specularIntensityMap = this.specularIntensityMap.toJSON(A).uuid), this.specularColorMap && this.specularColorMap.isTexture && (B.specularColorMap = this.specularColorMap.toJSON(A).uuid), this.envMap && this.envMap.isTexture && (B.envMap = this.envMap.toJSON(A).uuid, this.combine !== void 0 && (B.combine = this.combine)), this.envMapIntensity !== void 0 && (B.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (B.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (B.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (B.gradientMap = this.gradientMap.toJSON(A).uuid), this.transmission !== void 0 && (B.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (B.transmissionMap = this.transmissionMap.toJSON(A).uuid), this.thickness !== void 0 && (B.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (B.thicknessMap = this.thicknessMap.toJSON(A).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (B.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (B.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (B.size = this.size), this.shadowSide !== null && (B.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (B.sizeAttenuation = this.sizeAttenuation), this.blending !== CB && (B.blending = this.blending), this.side !== qQ && (B.side = this.side), this.vertexColors === !0 && (B.vertexColors = !0), this.opacity < 1 && (B.opacity = this.opacity), this.transparent === !0 && (B.transparent = !0), this.blendSrc !== IB && (B.blendSrc = this.blendSrc), this.blendDst !== gB && (B.blendDst = this.blendDst), this.blendEquation !== EB && (B.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (B.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (B.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (B.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (B.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (B.blendAlpha = this.blendAlpha), this.depthFunc !== wB && (B.depthFunc = this.depthFunc), this.depthTest === !1 && (B.depthTest = this.depthTest), this.depthWrite === !1 && (B.depthWrite = this.depthWrite), this.colorWrite === !1 && (B.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (B.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== kB && (B.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (B.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (B.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== GA && (B.stencilFail = this.stencilFail), this.stencilZFail !== GA && (B.stencilZFail = this.stencilZFail), this.stencilZPass !== GA && (B.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (B.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (B.rotation = this.rotation), this.polygonOffset === !0 && (B.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (B.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (B.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (B.linewidth = this.linewidth), this.dashSize !== void 0 && (B.dashSize = this.dashSize), this.gapSize !== void 0 && (B.gapSize = this.gapSize), this.scale !== void 0 && (B.scale = this.scale), this.dithering === !0 && (B.dithering = !0), this.alphaTest > 0 && (B.alphaTest = this.alphaTest), this.alphaHash === !0 && (B.alphaHash = !0), this.alphaToCoverage === !0 && (B.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (B.premultipliedAlpha = !0), this.forceSinglePass === !0 && (B.forceSinglePass = !0), this.wireframe === !0 && (B.wireframe = !0), this.wireframeLinewidth > 1 && (B.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (B.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (B.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (B.flatShading = !0), this.visible === !1 && (B.visible = !1), this.toneMapped === !1 && (B.toneMapped = !1), this.fog === !1 && (B.fog = !1), Object.keys(this.userData).length > 0 && (B.userData = this.userData);
    function C(E) {
      const I = [];
      for (const g in E) {
        const w = E[g];
        delete w.metadata, I.push(w);
      }
      return I;
    }
    if (Q) {
      const E = C(A.textures), I = C(A.images);
      E.length > 0 && (B.textures = E), I.length > 0 && (B.images = I);
    }
    return B;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(A) {
    this.name = A.name, this.blending = A.blending, this.side = A.side, this.vertexColors = A.vertexColors, this.opacity = A.opacity, this.transparent = A.transparent, this.blendSrc = A.blendSrc, this.blendDst = A.blendDst, this.blendEquation = A.blendEquation, this.blendSrcAlpha = A.blendSrcAlpha, this.blendDstAlpha = A.blendDstAlpha, this.blendEquationAlpha = A.blendEquationAlpha, this.blendColor.copy(A.blendColor), this.blendAlpha = A.blendAlpha, this.depthFunc = A.depthFunc, this.depthTest = A.depthTest, this.depthWrite = A.depthWrite, this.stencilWriteMask = A.stencilWriteMask, this.stencilFunc = A.stencilFunc, this.stencilRef = A.stencilRef, this.stencilFuncMask = A.stencilFuncMask, this.stencilFail = A.stencilFail, this.stencilZFail = A.stencilZFail, this.stencilZPass = A.stencilZPass, this.stencilWrite = A.stencilWrite;
    const Q = A.clippingPlanes;
    let B = null;
    if (Q !== null) {
      const C = Q.length;
      B = new Array(C);
      for (let E = 0; E !== C; ++E)
        B[E] = Q[E].clone();
    }
    return this.clippingPlanes = B, this.clipIntersection = A.clipIntersection, this.clipShadows = A.clipShadows, this.shadowSide = A.shadowSide, this.colorWrite = A.colorWrite, this.precision = A.precision, this.polygonOffset = A.polygonOffset, this.polygonOffsetFactor = A.polygonOffsetFactor, this.polygonOffsetUnits = A.polygonOffsetUnits, this.dithering = A.dithering, this.alphaTest = A.alphaTest, this.alphaHash = A.alphaHash, this.alphaToCoverage = A.alphaToCoverage, this.premultipliedAlpha = A.premultipliedAlpha, this.forceSinglePass = A.forceSinglePass, this.visible = A.visible, this.toneMapped = A.toneMapped, this.userData = JSON.parse(JSON.stringify(A.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(A) {
    A === !0 && this.version++;
  }
}
class oC extends mB {
  constructor(A) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new mA(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = vB, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(A);
  }
  copy(A) {
    return super.copy(A), this.color.copy(A.color), this.map = A.map, this.lightMap = A.lightMap, this.lightMapIntensity = A.lightMapIntensity, this.aoMap = A.aoMap, this.aoMapIntensity = A.aoMapIntensity, this.specularMap = A.specularMap, this.alphaMap = A.alphaMap, this.envMap = A.envMap, this.combine = A.combine, this.reflectivity = A.reflectivity, this.refractionRatio = A.refractionRatio, this.wireframe = A.wireframe, this.wireframeLinewidth = A.wireframeLinewidth, this.wireframeLinecap = A.wireframeLinecap, this.wireframeLinejoin = A.wireframeLinejoin, this.fog = A.fog, this;
  }
}
const t = /* @__PURE__ */ new L(), wQ = /* @__PURE__ */ new f();
class rA {
  constructor(A, Q, B = !1) {
    if (Array.isArray(A))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = A, this.itemSize = Q, this.count = A !== void 0 ? A.length / Q : 0, this.normalized = B, this.usage = UB, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = QC, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(A) {
    A === !0 && this.version++;
  }
  get updateRange() {
    return ZA("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(A) {
    return this.usage = A, this;
  }
  addUpdateRange(A, Q) {
    this.updateRanges.push({ start: A, count: Q });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(A) {
    return this.name = A.name, this.array = new A.array.constructor(A.array), this.itemSize = A.itemSize, this.count = A.count, this.normalized = A.normalized, this.usage = A.usage, this.gpuType = A.gpuType, this;
  }
  copyAt(A, Q, B) {
    A *= this.itemSize, B *= Q.itemSize;
    for (let C = 0, E = this.itemSize; C < E; C++)
      this.array[A + C] = Q.array[B + C];
    return this;
  }
  copyArray(A) {
    return this.array.set(A), this;
  }
  applyMatrix3(A) {
    if (this.itemSize === 2)
      for (let Q = 0, B = this.count; Q < B; Q++)
        wQ.fromBufferAttribute(this, Q), wQ.applyMatrix3(A), this.setXY(Q, wQ.x, wQ.y);
    else if (this.itemSize === 3)
      for (let Q = 0, B = this.count; Q < B; Q++)
        t.fromBufferAttribute(this, Q), t.applyMatrix3(A), this.setXYZ(Q, t.x, t.y, t.z);
    return this;
  }
  applyMatrix4(A) {
    for (let Q = 0, B = this.count; Q < B; Q++)
      t.fromBufferAttribute(this, Q), t.applyMatrix4(A), this.setXYZ(Q, t.x, t.y, t.z);
    return this;
  }
  applyNormalMatrix(A) {
    for (let Q = 0, B = this.count; Q < B; Q++)
      t.fromBufferAttribute(this, Q), t.applyNormalMatrix(A), this.setXYZ(Q, t.x, t.y, t.z);
    return this;
  }
  transformDirection(A) {
    for (let Q = 0, B = this.count; Q < B; Q++)
      t.fromBufferAttribute(this, Q), t.transformDirection(A), this.setXYZ(Q, t.x, t.y, t.z);
    return this;
  }
  set(A, Q = 0) {
    return this.array.set(A, Q), this;
  }
  getComponent(A, Q) {
    let B = this.array[A * this.itemSize + Q];
    return this.normalized && (B = dA(B, this.array)), B;
  }
  setComponent(A, Q, B) {
    return this.normalized && (B = b(B, this.array)), this.array[A * this.itemSize + Q] = B, this;
  }
  getX(A) {
    let Q = this.array[A * this.itemSize];
    return this.normalized && (Q = dA(Q, this.array)), Q;
  }
  setX(A, Q) {
    return this.normalized && (Q = b(Q, this.array)), this.array[A * this.itemSize] = Q, this;
  }
  getY(A) {
    let Q = this.array[A * this.itemSize + 1];
    return this.normalized && (Q = dA(Q, this.array)), Q;
  }
  setY(A, Q) {
    return this.normalized && (Q = b(Q, this.array)), this.array[A * this.itemSize + 1] = Q, this;
  }
  getZ(A) {
    let Q = this.array[A * this.itemSize + 2];
    return this.normalized && (Q = dA(Q, this.array)), Q;
  }
  setZ(A, Q) {
    return this.normalized && (Q = b(Q, this.array)), this.array[A * this.itemSize + 2] = Q, this;
  }
  getW(A) {
    let Q = this.array[A * this.itemSize + 3];
    return this.normalized && (Q = dA(Q, this.array)), Q;
  }
  setW(A, Q) {
    return this.normalized && (Q = b(Q, this.array)), this.array[A * this.itemSize + 3] = Q, this;
  }
  setXY(A, Q, B) {
    return A *= this.itemSize, this.normalized && (Q = b(Q, this.array), B = b(B, this.array)), this.array[A + 0] = Q, this.array[A + 1] = B, this;
  }
  setXYZ(A, Q, B, C) {
    return A *= this.itemSize, this.normalized && (Q = b(Q, this.array), B = b(B, this.array), C = b(C, this.array)), this.array[A + 0] = Q, this.array[A + 1] = B, this.array[A + 2] = C, this;
  }
  setXYZW(A, Q, B, C, E) {
    return A *= this.itemSize, this.normalized && (Q = b(Q, this.array), B = b(B, this.array), C = b(C, this.array), E = b(E, this.array)), this.array[A + 0] = Q, this.array[A + 1] = B, this.array[A + 2] = C, this.array[A + 3] = E, this;
  }
  onUpload(A) {
    return this.onUploadCallback = A, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const A = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (A.name = this.name), this.usage !== UB && (A.usage = this.usage), A;
  }
}
class tC extends rA {
  constructor(A, Q, B) {
    super(new Uint16Array(A), Q, B);
  }
}
class HC extends rA {
  constructor(A, Q, B) {
    super(new Uint32Array(A), Q, B);
  }
}
class vQ extends rA {
  constructor(A, Q, B) {
    super(new Float32Array(A), Q, B);
  }
}
let YC = 0;
const x = /* @__PURE__ */ new Z(), VQ = /* @__PURE__ */ new X(), aA = /* @__PURE__ */ new L(), u = /* @__PURE__ */ new zA(), TA = /* @__PURE__ */ new zA(), H = /* @__PURE__ */ new L();
class tQ extends eA {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: YC++ }), this.uuid = uA(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(A) {
    return Array.isArray(A) ? this.index = new (MC(A) ? HC : tC)(A, 1) : this.index = A, this;
  }
  getAttribute(A) {
    return this.attributes[A];
  }
  setAttribute(A, Q) {
    return this.attributes[A] = Q, this;
  }
  deleteAttribute(A) {
    return delete this.attributes[A], this;
  }
  hasAttribute(A) {
    return this.attributes[A] !== void 0;
  }
  addGroup(A, Q, B = 0) {
    this.groups.push({
      start: A,
      count: Q,
      materialIndex: B
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(A, Q) {
    this.drawRange.start = A, this.drawRange.count = Q;
  }
  applyMatrix4(A) {
    const Q = this.attributes.position;
    Q !== void 0 && (Q.applyMatrix4(A), Q.needsUpdate = !0);
    const B = this.attributes.normal;
    if (B !== void 0) {
      const E = new yA().getNormalMatrix(A);
      B.applyNormalMatrix(E), B.needsUpdate = !0;
    }
    const C = this.attributes.tangent;
    return C !== void 0 && (C.transformDirection(A), C.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(A) {
    return x.makeRotationFromQuaternion(A), this.applyMatrix4(x), this;
  }
  rotateX(A) {
    return x.makeRotationX(A), this.applyMatrix4(x), this;
  }
  rotateY(A) {
    return x.makeRotationY(A), this.applyMatrix4(x), this;
  }
  rotateZ(A) {
    return x.makeRotationZ(A), this.applyMatrix4(x), this;
  }
  translate(A, Q, B) {
    return x.makeTranslation(A, Q, B), this.applyMatrix4(x), this;
  }
  scale(A, Q, B) {
    return x.makeScale(A, Q, B), this.applyMatrix4(x), this;
  }
  lookAt(A) {
    return VQ.lookAt(A), VQ.updateMatrix(), this.applyMatrix4(VQ.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(aA).negate(), this.translate(aA.x, aA.y, aA.z), this;
  }
  setFromPoints(A) {
    const Q = [];
    for (let B = 0, C = A.length; B < C; B++) {
      const E = A[B];
      Q.push(E.x, E.y, E.z || 0);
    }
    return this.setAttribute("position", new vQ(Q, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new zA());
    const A = this.attributes.position, Q = this.morphAttributes.position;
    if (A && A.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new L(-1 / 0, -1 / 0, -1 / 0),
        new L(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (A !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(A), Q)
        for (let B = 0, C = Q.length; B < C; B++) {
          const E = Q[B];
          u.setFromBufferAttribute(E), this.morphTargetsRelative ? (H.addVectors(this.boundingBox.min, u.min), this.boundingBox.expandByPoint(H), H.addVectors(this.boundingBox.max, u.max), this.boundingBox.expandByPoint(H)) : (this.boundingBox.expandByPoint(u.min), this.boundingBox.expandByPoint(u.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new xB());
    const A = this.attributes.position, Q = this.morphAttributes.position;
    if (A && A.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (A) {
      const B = this.boundingSphere.center;
      if (u.setFromBufferAttribute(A), Q)
        for (let E = 0, I = Q.length; E < I; E++) {
          const g = Q[E];
          TA.setFromBufferAttribute(g), this.morphTargetsRelative ? (H.addVectors(u.min, TA.min), u.expandByPoint(H), H.addVectors(u.max, TA.max), u.expandByPoint(H)) : (u.expandByPoint(TA.min), u.expandByPoint(TA.max));
        }
      u.getCenter(B);
      let C = 0;
      for (let E = 0, I = A.count; E < I; E++)
        H.fromBufferAttribute(A, E), C = Math.max(C, B.distanceToSquared(H));
      if (Q)
        for (let E = 0, I = Q.length; E < I; E++) {
          const g = Q[E], w = this.morphTargetsRelative;
          for (let s = 0, K = g.count; s < K; s++)
            H.fromBufferAttribute(g, s), w && (aA.fromBufferAttribute(A, s), H.add(aA)), C = Math.max(C, B.distanceToSquared(H));
        }
      this.boundingSphere.radius = Math.sqrt(C), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const A = this.index, Q = this.attributes;
    if (A === null || Q.position === void 0 || Q.normal === void 0 || Q.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const B = A.array, C = Q.position.array, E = Q.normal.array, I = Q.uv.array, g = C.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new rA(new Float32Array(4 * g), 4));
    const w = this.getAttribute("tangent").array, s = [], K = [];
    for (let n = 0; n < g; n++)
      s[n] = new L(), K[n] = new L();
    const y = new L(), c = new L(), D = new L(), M = new f(), k = new f(), U = new f(), G = new L(), F = new L();
    function p(n, Y, r) {
      y.fromArray(C, n * 3), c.fromArray(C, Y * 3), D.fromArray(C, r * 3), M.fromArray(I, n * 2), k.fromArray(I, Y * 2), U.fromArray(I, r * 2), c.sub(y), D.sub(y), k.sub(M), U.sub(M);
      const R = 1 / (k.x * U.y - U.x * k.y);
      isFinite(R) && (G.copy(c).multiplyScalar(U.y).addScaledVector(D, -k.y).multiplyScalar(R), F.copy(D).multiplyScalar(k.x).addScaledVector(c, -U.x).multiplyScalar(R), s[n].add(G), s[Y].add(G), s[r].add(G), K[n].add(F), K[Y].add(F), K[r].add(F));
    }
    let J = this.groups;
    J.length === 0 && (J = [{
      start: 0,
      count: B.length
    }]);
    for (let n = 0, Y = J.length; n < Y; ++n) {
      const r = J[n], R = r.start, EA = r.count;
      for (let d = R, IA = R + EA; d < IA; d += 3)
        p(
          B[d + 0],
          B[d + 1],
          B[d + 2]
        );
    }
    const i = new L(), a = new L(), N = new L(), T = new L();
    function CA(n) {
      N.fromArray(E, n * 3), T.copy(N);
      const Y = s[n];
      i.copy(Y), i.sub(N.multiplyScalar(N.dot(Y))).normalize(), a.crossVectors(T, Y);
      const R = a.dot(K[n]) < 0 ? -1 : 1;
      w[n * 4] = i.x, w[n * 4 + 1] = i.y, w[n * 4 + 2] = i.z, w[n * 4 + 3] = R;
    }
    for (let n = 0, Y = J.length; n < Y; ++n) {
      const r = J[n], R = r.start, EA = r.count;
      for (let d = R, IA = R + EA; d < IA; d += 3)
        CA(B[d + 0]), CA(B[d + 1]), CA(B[d + 2]);
    }
  }
  computeVertexNormals() {
    const A = this.index, Q = this.getAttribute("position");
    if (Q !== void 0) {
      let B = this.getAttribute("normal");
      if (B === void 0)
        B = new rA(new Float32Array(Q.count * 3), 3), this.setAttribute("normal", B);
      else
        for (let c = 0, D = B.count; c < D; c++)
          B.setXYZ(c, 0, 0, 0);
      const C = new L(), E = new L(), I = new L(), g = new L(), w = new L(), s = new L(), K = new L(), y = new L();
      if (A)
        for (let c = 0, D = A.count; c < D; c += 3) {
          const M = A.getX(c + 0), k = A.getX(c + 1), U = A.getX(c + 2);
          C.fromBufferAttribute(Q, M), E.fromBufferAttribute(Q, k), I.fromBufferAttribute(Q, U), K.subVectors(I, E), y.subVectors(C, E), K.cross(y), g.fromBufferAttribute(B, M), w.fromBufferAttribute(B, k), s.fromBufferAttribute(B, U), g.add(K), w.add(K), s.add(K), B.setXYZ(M, g.x, g.y, g.z), B.setXYZ(k, w.x, w.y, w.z), B.setXYZ(U, s.x, s.y, s.z);
        }
      else
        for (let c = 0, D = Q.count; c < D; c += 3)
          C.fromBufferAttribute(Q, c + 0), E.fromBufferAttribute(Q, c + 1), I.fromBufferAttribute(Q, c + 2), K.subVectors(I, E), y.subVectors(C, E), K.cross(y), B.setXYZ(c + 0, K.x, K.y, K.z), B.setXYZ(c + 1, K.x, K.y, K.z), B.setXYZ(c + 2, K.x, K.y, K.z);
      this.normalizeNormals(), B.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const A = this.attributes.normal;
    for (let Q = 0, B = A.count; Q < B; Q++)
      H.fromBufferAttribute(A, Q), H.normalize(), A.setXYZ(Q, H.x, H.y, H.z);
  }
  toNonIndexed() {
    function A(g, w) {
      const s = g.array, K = g.itemSize, y = g.normalized, c = new s.constructor(w.length * K);
      let D = 0, M = 0;
      for (let k = 0, U = w.length; k < U; k++) {
        g.isInterleavedBufferAttribute ? D = w[k] * g.data.stride + g.offset : D = w[k] * K;
        for (let G = 0; G < K; G++)
          c[M++] = s[D++];
      }
      return new rA(c, K, y);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const Q = new tQ(), B = this.index.array, C = this.attributes;
    for (const g in C) {
      const w = C[g], s = A(w, B);
      Q.setAttribute(g, s);
    }
    const E = this.morphAttributes;
    for (const g in E) {
      const w = [], s = E[g];
      for (let K = 0, y = s.length; K < y; K++) {
        const c = s[K], D = A(c, B);
        w.push(D);
      }
      Q.morphAttributes[g] = w;
    }
    Q.morphTargetsRelative = this.morphTargetsRelative;
    const I = this.groups;
    for (let g = 0, w = I.length; g < w; g++) {
      const s = I[g];
      Q.addGroup(s.start, s.count, s.materialIndex);
    }
    return Q;
  }
  toJSON() {
    const A = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (A.uuid = this.uuid, A.type = this.type, this.name !== "" && (A.name = this.name), Object.keys(this.userData).length > 0 && (A.userData = this.userData), this.parameters !== void 0) {
      const w = this.parameters;
      for (const s in w)
        w[s] !== void 0 && (A[s] = w[s]);
      return A;
    }
    A.data = { attributes: {} };
    const Q = this.index;
    Q !== null && (A.data.index = {
      type: Q.array.constructor.name,
      array: Array.prototype.slice.call(Q.array)
    });
    const B = this.attributes;
    for (const w in B) {
      const s = B[w];
      A.data.attributes[w] = s.toJSON(A.data);
    }
    const C = {};
    let E = !1;
    for (const w in this.morphAttributes) {
      const s = this.morphAttributes[w], K = [];
      for (let y = 0, c = s.length; y < c; y++) {
        const D = s[y];
        K.push(D.toJSON(A.data));
      }
      K.length > 0 && (C[w] = K, E = !0);
    }
    E && (A.data.morphAttributes = C, A.data.morphTargetsRelative = this.morphTargetsRelative);
    const I = this.groups;
    I.length > 0 && (A.data.groups = JSON.parse(JSON.stringify(I)));
    const g = this.boundingSphere;
    return g !== null && (A.data.boundingSphere = {
      center: g.center.toArray(),
      radius: g.radius
    }), A;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(A) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const Q = {};
    this.name = A.name;
    const B = A.index;
    B !== null && this.setIndex(B.clone(Q));
    const C = A.attributes;
    for (const s in C) {
      const K = C[s];
      this.setAttribute(s, K.clone(Q));
    }
    const E = A.morphAttributes;
    for (const s in E) {
      const K = [], y = E[s];
      for (let c = 0, D = y.length; c < D; c++)
        K.push(y[c].clone(Q));
      this.morphAttributes[s] = K;
    }
    this.morphTargetsRelative = A.morphTargetsRelative;
    const I = A.groups;
    for (let s = 0, K = I.length; s < K; s++) {
      const y = I[s];
      this.addGroup(y.start, y.count, y.materialIndex);
    }
    const g = A.boundingBox;
    g !== null && (this.boundingBox = g.clone());
    const w = A.boundingSphere;
    return w !== null && (this.boundingSphere = w.clone()), this.drawRange.start = A.drawRange.start, this.drawRange.count = A.drawRange.count, this.userData = A.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const YB = /* @__PURE__ */ new Z(), kA = /* @__PURE__ */ new GC(), DQ = /* @__PURE__ */ new xB(), rB = /* @__PURE__ */ new L(), oA = /* @__PURE__ */ new L(), tA = /* @__PURE__ */ new L(), HA = /* @__PURE__ */ new L(), OQ = /* @__PURE__ */ new L(), MQ = /* @__PURE__ */ new L(), sQ = /* @__PURE__ */ new f(), KQ = /* @__PURE__ */ new f(), yQ = /* @__PURE__ */ new f(), RB = /* @__PURE__ */ new L(), dB = /* @__PURE__ */ new L(), jB = /* @__PURE__ */ new L(), cQ = /* @__PURE__ */ new L(), hQ = /* @__PURE__ */ new L();
class rC extends X {
  constructor(A = new tQ(), Q = new oC()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = A, this.material = Q, this.updateMorphTargets();
  }
  copy(A, Q) {
    return super.copy(A, Q), A.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = A.morphTargetInfluences.slice()), A.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, A.morphTargetDictionary)), this.material = Array.isArray(A.material) ? A.material.slice() : A.material, this.geometry = A.geometry, this;
  }
  updateMorphTargets() {
    const Q = this.geometry.morphAttributes, B = Object.keys(Q);
    if (B.length > 0) {
      const C = Q[B[0]];
      if (C !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let E = 0, I = C.length; E < I; E++) {
          const g = C[E].name || String(E);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[g] = E;
        }
      }
    }
  }
  getVertexPosition(A, Q) {
    const B = this.geometry, C = B.attributes.position, E = B.morphAttributes.position, I = B.morphTargetsRelative;
    Q.fromBufferAttribute(C, A);
    const g = this.morphTargetInfluences;
    if (E && g) {
      MQ.set(0, 0, 0);
      for (let w = 0, s = E.length; w < s; w++) {
        const K = g[w], y = E[w];
        K !== 0 && (OQ.fromBufferAttribute(y, A), I ? MQ.addScaledVector(OQ, K) : MQ.addScaledVector(OQ.sub(Q), K));
      }
      Q.add(MQ);
    }
    return Q;
  }
  raycast(A, Q) {
    const B = this.geometry, C = this.material, E = this.matrixWorld;
    C !== void 0 && (B.boundingSphere === null && B.computeBoundingSphere(), DQ.copy(B.boundingSphere), DQ.applyMatrix4(E), kA.copy(A.ray).recast(A.near), !(DQ.containsPoint(kA.origin) === !1 && (kA.intersectSphere(DQ, rB) === null || kA.origin.distanceToSquared(rB) > (A.far - A.near) ** 2)) && (YB.copy(E).invert(), kA.copy(A.ray).applyMatrix4(YB), !(B.boundingBox !== null && kA.intersectsBox(B.boundingBox) === !1) && this._computeIntersections(A, Q, kA)));
  }
  _computeIntersections(A, Q, B) {
    let C;
    const E = this.geometry, I = this.material, g = E.index, w = E.attributes.position, s = E.attributes.uv, K = E.attributes.uv1, y = E.attributes.normal, c = E.groups, D = E.drawRange;
    if (g !== null)
      if (Array.isArray(I))
        for (let M = 0, k = c.length; M < k; M++) {
          const U = c[M], G = I[U.materialIndex], F = Math.max(U.start, D.start), p = Math.min(g.count, Math.min(U.start + U.count, D.start + D.count));
          for (let J = F, i = p; J < i; J += 3) {
            const a = g.getX(J), N = g.getX(J + 1), T = g.getX(J + 2);
            C = kQ(this, G, A, B, s, K, y, a, N, T), C && (C.faceIndex = Math.floor(J / 3), C.face.materialIndex = U.materialIndex, Q.push(C));
          }
        }
      else {
        const M = Math.max(0, D.start), k = Math.min(g.count, D.start + D.count);
        for (let U = M, G = k; U < G; U += 3) {
          const F = g.getX(U), p = g.getX(U + 1), J = g.getX(U + 2);
          C = kQ(this, I, A, B, s, K, y, F, p, J), C && (C.faceIndex = Math.floor(U / 3), Q.push(C));
        }
      }
    else if (w !== void 0)
      if (Array.isArray(I))
        for (let M = 0, k = c.length; M < k; M++) {
          const U = c[M], G = I[U.materialIndex], F = Math.max(U.start, D.start), p = Math.min(w.count, Math.min(U.start + U.count, D.start + D.count));
          for (let J = F, i = p; J < i; J += 3) {
            const a = J, N = J + 1, T = J + 2;
            C = kQ(this, G, A, B, s, K, y, a, N, T), C && (C.faceIndex = Math.floor(J / 3), C.face.materialIndex = U.materialIndex, Q.push(C));
          }
        }
      else {
        const M = Math.max(0, D.start), k = Math.min(w.count, D.start + D.count);
        for (let U = M, G = k; U < G; U += 3) {
          const F = U, p = U + 1, J = U + 2;
          C = kQ(this, I, A, B, s, K, y, F, p, J), C && (C.faceIndex = Math.floor(U / 3), Q.push(C));
        }
      }
  }
}
function RC(h, A, Q, B, C, E, I, g) {
  let w;
  if (A.side === qB ? w = B.intersectTriangle(I, E, C, !0, g) : w = B.intersectTriangle(C, E, I, A.side === qQ, g), w === null)
    return null;
  hQ.copy(g), hQ.applyMatrix4(h.matrixWorld);
  const s = Q.ray.origin.distanceTo(hQ);
  return s < Q.near || s > Q.far ? null : {
    distance: s,
    point: hQ.clone(),
    object: h
  };
}
function kQ(h, A, Q, B, C, E, I, g, w, s) {
  h.getVertexPosition(g, oA), h.getVertexPosition(w, tA), h.getVertexPosition(s, HA);
  const K = RC(h, A, Q, B, oA, tA, HA, cQ);
  if (K) {
    C && (sQ.fromBufferAttribute(C, g), KQ.fromBufferAttribute(C, w), yQ.fromBufferAttribute(C, s), K.uv = q.getInterpolation(cQ, oA, tA, HA, sQ, KQ, yQ, new f())), E && (sQ.fromBufferAttribute(E, g), KQ.fromBufferAttribute(E, w), yQ.fromBufferAttribute(E, s), K.uv1 = q.getInterpolation(cQ, oA, tA, HA, sQ, KQ, yQ, new f()), K.uv2 = K.uv1), I && (RB.fromBufferAttribute(I, g), dB.fromBufferAttribute(I, w), jB.fromBufferAttribute(I, s), K.normal = q.getInterpolation(cQ, oA, tA, HA, RB, dB, jB, new L()), K.normal.dot(B.direction) > 0 && K.normal.multiplyScalar(-1));
    const y = {
      a: g,
      b: w,
      c: s,
      normal: new L(),
      materialIndex: 0
    };
    q.getNormal(oA, tA, HA, y.normal), K.face = y;
  }
  return K;
}
function AB(h) {
  const A = {};
  for (const Q in h) {
    A[Q] = {};
    for (const B in h[Q]) {
      const C = h[Q][B];
      C && (C.isColor || C.isMatrix3 || C.isMatrix4 || C.isVector2 || C.isVector3 || C.isVector4 || C.isTexture || C.isQuaternion) ? C.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), A[Q][B] = null) : A[Q][B] = C.clone() : Array.isArray(C) ? A[Q][B] = C.slice() : A[Q][B] = C;
    }
  }
  return A;
}
function dC(h) {
  const A = {};
  for (let Q = 0; Q < h.length; Q++) {
    const B = AB(h[Q]);
    for (const C in B)
      A[C] = B[C];
  }
  return A;
}
function jC(h) {
  const A = [];
  for (let Q = 0; Q < h.length; Q++)
    A.push(h[Q].clone());
  return A;
}
const lC = { clone: AB, merge: dC };
var fC = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, TC = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class lB extends mB {
  constructor(A) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = fC, this.fragmentShader = TC, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1,
      // set to use shader texture LOD
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, A !== void 0 && this.setValues(A);
  }
  copy(A) {
    return super.copy(A), this.fragmentShader = A.fragmentShader, this.vertexShader = A.vertexShader, this.uniforms = AB(A.uniforms), this.uniformsGroups = jC(A.uniformsGroups), this.defines = Object.assign({}, A.defines), this.wireframe = A.wireframe, this.wireframeLinewidth = A.wireframeLinewidth, this.fog = A.fog, this.lights = A.lights, this.clipping = A.clipping, this.extensions = Object.assign({}, A.extensions), this.glslVersion = A.glslVersion, this;
  }
  toJSON(A) {
    const Q = super.toJSON(A);
    Q.glslVersion = this.glslVersion, Q.uniforms = {};
    for (const C in this.uniforms) {
      const I = this.uniforms[C].value;
      I && I.isTexture ? Q.uniforms[C] = {
        type: "t",
        value: I.toJSON(A).uuid
      } : I && I.isColor ? Q.uniforms[C] = {
        type: "c",
        value: I.getHex()
      } : I && I.isVector2 ? Q.uniforms[C] = {
        type: "v2",
        value: I.toArray()
      } : I && I.isVector3 ? Q.uniforms[C] = {
        type: "v3",
        value: I.toArray()
      } : I && I.isVector4 ? Q.uniforms[C] = {
        type: "v4",
        value: I.toArray()
      } : I && I.isMatrix3 ? Q.uniforms[C] = {
        type: "m3",
        value: I.toArray()
      } : I && I.isMatrix4 ? Q.uniforms[C] = {
        type: "m4",
        value: I.toArray()
      } : Q.uniforms[C] = {
        value: I
      };
    }
    Object.keys(this.defines).length > 0 && (Q.defines = this.defines), Q.vertexShader = this.vertexShader, Q.fragmentShader = this.fragmentShader, Q.lights = this.lights, Q.clipping = this.clipping;
    const B = {};
    for (const C in this.extensions)
      this.extensions[C] === !0 && (B[C] = !0);
    return Object.keys(B).length > 0 && (Q.extensions = B), Q;
  }
}
class bC extends X {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Z(), this.projectionMatrix = new Z(), this.projectionMatrixInverse = new Z(), this.coordinateSystem = bA;
  }
  copy(A, Q) {
    return super.copy(A, Q), this.matrixWorldInverse.copy(A.matrixWorldInverse), this.projectionMatrix.copy(A.projectionMatrix), this.projectionMatrixInverse.copy(A.projectionMatrixInverse), this.coordinateSystem = A.coordinateSystem, this;
  }
  getWorldDirection(A) {
    return super.getWorldDirection(A).negate();
  }
  updateMatrixWorld(A) {
    super.updateMatrixWorld(A), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(A, Q) {
    super.updateWorldMatrix(A, Q), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class WC extends bC {
  constructor(A = -1, Q = 1, B = 1, C = -1, E = 0.1, I = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = A, this.right = Q, this.top = B, this.bottom = C, this.near = E, this.far = I, this.updateProjectionMatrix();
  }
  copy(A, Q) {
    return super.copy(A, Q), this.left = A.left, this.right = A.right, this.top = A.top, this.bottom = A.bottom, this.near = A.near, this.far = A.far, this.zoom = A.zoom, this.view = A.view === null ? null : Object.assign({}, A.view), this;
  }
  setViewOffset(A, Q, B, C, E, I) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = A, this.view.fullHeight = Q, this.view.offsetX = B, this.view.offsetY = C, this.view.width = E, this.view.height = I, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const A = (this.right - this.left) / (2 * this.zoom), Q = (this.top - this.bottom) / (2 * this.zoom), B = (this.right + this.left) / 2, C = (this.top + this.bottom) / 2;
    let E = B - A, I = B + A, g = C + Q, w = C - Q;
    if (this.view !== null && this.view.enabled) {
      const s = (this.right - this.left) / this.view.fullWidth / this.zoom, K = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      E += s * this.view.offsetX, I = E + s * this.view.width, g -= K * this.view.offsetY, w = g - K * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(E, I, g, w, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(A) {
    const Q = super.toJSON(A);
    return Q.object.zoom = this.zoom, Q.object.left = this.left, Q.object.right = this.right, Q.object.top = this.top, Q.object.bottom = this.bottom, Q.object.near = this.near, Q.object.far = this.far, this.view !== null && (Q.object.view = Object.assign({}, this.view)), Q;
  }
}
class ZC extends BA {
  constructor(A, Q, B, C, E, I, g, w, s, K) {
    if (K = K !== void 0 ? K : YQ, K !== YQ && K !== KB)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    B === void 0 && K === YQ && (B = AC), B === void 0 && K === KB && (B = CC), super(null, C, E, I, g, w, K, B, s), this.isDepthTexture = !0, this.image = { width: A, height: Q }, this.magFilter = g !== void 0 ? g : sB, this.minFilter = w !== void 0 ? w : sB, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(A) {
    return super.copy(A), this.compareFunction = A.compareFunction, this;
  }
  toJSON(A) {
    const Q = super.toJSON(A);
    return this.compareFunction !== null && (Q.compareFunction = this.compareFunction), Q;
  }
}
const eC = /* @__PURE__ */ new ZC(1, 1);
eC.compareFunction = wC;
class uC {
  constructor(A = !0) {
    this.autoStart = A, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = fB(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let A = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const Q = fB();
      A = (Q - this.oldTime) / 1e3, this.oldTime = Q, this.elapsedTime += A;
    }
    return A;
  }
}
function fB() {
  return (typeof performance > "u" ? Date : performance).now();
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: bB
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = bB);
const xC = {
  name: "CopyShader",
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`
  )
};
class HQ {
  constructor() {
    this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
const zC = new WC(-1, 1, 1, -1, 0, 1);
class mC extends tQ {
  constructor() {
    super(), this.setAttribute("position", new vQ([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new vQ([0, 2, 0, 0, 2, 0], 2));
  }
}
const VC = new mC();
class OC {
  constructor(A) {
    this._mesh = new rC(VC, A);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(A) {
    A.render(this._mesh, zC);
  }
  get material() {
    return this._mesh.material;
  }
  set material(A) {
    this._mesh.material = A;
  }
}
class VB extends HQ {
  constructor(A, Q) {
    super(), this.textureID = Q !== void 0 ? Q : "tDiffuse", A instanceof lB ? (this.uniforms = A.uniforms, this.material = A) : A && (this.uniforms = lC.clone(A.uniforms), this.material = new lB({
      name: A.name !== void 0 ? A.name : "unspecified",
      defines: Object.assign({}, A.defines),
      uniforms: this.uniforms,
      vertexShader: A.vertexShader,
      fragmentShader: A.fragmentShader
    })), this.fsQuad = new OC(this.material);
  }
  render(A, Q, B) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = B.texture), this.fsQuad.material = this.material, this.renderToScreen ? (A.setRenderTarget(null), this.fsQuad.render(A)) : (A.setRenderTarget(Q), this.clear && A.clear(A.autoClearColor, A.autoClearDepth, A.autoClearStencil), this.fsQuad.render(A));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class TB extends HQ {
  constructor(A, Q) {
    super(), this.scene = A, this.camera = Q, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
  }
  render(A, Q, B) {
    const C = A.getContext(), E = A.state;
    E.buffers.color.setMask(!1), E.buffers.depth.setMask(!1), E.buffers.color.setLocked(!0), E.buffers.depth.setLocked(!0);
    let I, g;
    this.inverse ? (I = 0, g = 1) : (I = 1, g = 0), E.buffers.stencil.setTest(!0), E.buffers.stencil.setOp(C.REPLACE, C.REPLACE, C.REPLACE), E.buffers.stencil.setFunc(C.ALWAYS, I, 4294967295), E.buffers.stencil.setClear(g), E.buffers.stencil.setLocked(!0), A.setRenderTarget(B), this.clear && A.clear(), A.render(this.scene, this.camera), A.setRenderTarget(Q), this.clear && A.clear(), A.render(this.scene, this.camera), E.buffers.color.setLocked(!1), E.buffers.depth.setLocked(!1), E.buffers.color.setMask(!0), E.buffers.depth.setMask(!0), E.buffers.stencil.setLocked(!1), E.buffers.stencil.setFunc(C.EQUAL, 1, 4294967295), E.buffers.stencil.setOp(C.KEEP, C.KEEP, C.KEEP), E.buffers.stencil.setLocked(!0);
  }
}
class PC extends HQ {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(A) {
    A.state.buffers.stencil.setLocked(!1), A.state.buffers.stencil.setTest(!1);
  }
}
class qC {
  constructor(A, Q) {
    if (this.renderer = A, this._pixelRatio = A.getPixelRatio(), Q === void 0) {
      const B = A.getSize(new f());
      this._width = B.width, this._height = B.height, Q = new kC(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: BC }), Q.texture.name = "EffectComposer.rt1";
    } else
      this._width = Q.width, this._height = Q.height;
    this.renderTarget1 = Q, this.renderTarget2 = Q.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new VB(xC), this.copyPass.material.blending = XB, this.clock = new uC();
  }
  swapBuffers() {
    const A = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = A;
  }
  addPass(A) {
    this.passes.push(A), A.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(A, Q) {
    this.passes.splice(Q, 0, A), A.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(A) {
    const Q = this.passes.indexOf(A);
    Q !== -1 && this.passes.splice(Q, 1);
  }
  isLastEnabledPass(A) {
    for (let Q = A + 1; Q < this.passes.length; Q++)
      if (this.passes[Q].enabled)
        return !1;
    return !0;
  }
  render(A) {
    A === void 0 && (A = this.clock.getDelta());
    const Q = this.renderer.getRenderTarget();
    let B = !1;
    for (let C = 0, E = this.passes.length; C < E; C++) {
      const I = this.passes[C];
      if (I.enabled !== !1) {
        if (I.renderToScreen = this.renderToScreen && this.isLastEnabledPass(C), I.render(this.renderer, this.writeBuffer, this.readBuffer, A, B), I.needsSwap) {
          if (B) {
            const g = this.renderer.getContext(), w = this.renderer.state.buffers.stencil;
            w.setFunc(g.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, A), w.setFunc(g.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        TB !== void 0 && (I instanceof TB ? B = !0 : I instanceof PC && (B = !1));
      }
    }
    this.renderer.setRenderTarget(Q);
  }
  reset(A) {
    if (A === void 0) {
      const Q = this.renderer.getSize(new f());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = Q.width, this._height = Q.height, A = this.renderTarget1.clone(), A.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = A, this.renderTarget2 = A.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(A, Q) {
    this._width = A, this._height = Q;
    const B = this._width * this._pixelRatio, C = this._height * this._pixelRatio;
    this.renderTarget1.setSize(B, C), this.renderTarget2.setSize(B, C);
    for (let E = 0; E < this.passes.length; E++)
      this.passes[E].setSize(B, C);
  }
  setPixelRatio(A) {
    this._pixelRatio = A, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}
class XC extends HQ {
  constructor(A, Q, B = null, C = null, E = null) {
    super(), this.scene = A, this.camera = Q, this.overrideMaterial = B, this.clearColor = C, this.clearAlpha = E, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new mA();
  }
  render(A, Q, B) {
    const C = A.autoClear;
    A.autoClear = !1;
    let E, I;
    this.overrideMaterial !== null && (I = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (A.getClearColor(this._oldClearColor), A.setClearColor(this.clearColor)), this.clearAlpha !== null && (E = A.getClearAlpha(), A.setClearAlpha(this.clearAlpha)), this.clearDepth == !0 && A.clearDepth(), A.setRenderTarget(this.renderToScreen ? null : B), this.clear === !0 && A.clear(A.autoClearColor, A.autoClearDepth, A.autoClearStencil), A.render(this.scene, this.camera), this.clearColor !== null && A.setClearColor(this._oldClearColor), this.clearAlpha !== null && A.setClearAlpha(E), this.overrideMaterial !== null && (this.scene.overrideMaterial = I), A.autoClear = C;
  }
}
const S = FQ;
(function(h, A) {
  const Q = FQ, B = h();
  for (; ; )
    try {
      if (-parseInt(Q(195)) / 1 * (parseInt(Q(192)) / 2) + -parseInt(Q(244)) / 3 * (parseInt(Q(189)) / 4) + parseInt(Q(238)) / 5 + parseInt(Q(233)) / 6 + -parseInt(Q(218)) / 7 * (parseInt(Q(200)) / 8) + -parseInt(Q(224)) / 9 + -parseInt(Q(166)) / 10 * (-parseInt(Q(246)) / 11) === A)
        break;
      B.push(B.shift());
    } catch {
      B.push(B.shift());
    }
})(SQ, 755383);
function FQ(h, A) {
  const Q = SQ();
  return FQ = function(B, C) {
    return B = B - 165, Q[B];
  }, FQ(h, A);
}
function SQ() {
  const h = ["normalize", "tan", "toneMappingExposure", "fragmentShader", "maskTexture", "setLayout", "viewNum", "4872052YEqoqg", "mixRenderer", "Vector3", "9314DyIpUl", "minFilter", "ACESFilmicToneMapping", "119xSaCFM", "RGBAFormat", "viewsCamera", "crossVectors", "viewMode", "16sMvCvQ", "requestFullscreen", "round", "viewsScene", "position", "vertexShader", "need THREE", "dispose", "mixPass", "magFilter", "Vector4", "abs", "ondblclick", "size", "_getCameraArray", "render", "webgl2", "setResiton", "2931509QeodiP", "multiply", "closeFrustumCulled", "resiton", "getColors", "deg", "10952658rOugPw", "projectionMatrix", "height", "makeShear", "LinearFilter", "updateMatrixWorld", "_initCanvas", "domElement", "getWorldDirection", "1637562WVZtpR", "WebGLRenderer", "length", "ClampToEdgeWrapping", "Matrix4", "6830900xDTlmB", "devicePixelRatio", "originRenderConfig", "_initMaskTexture", "setFocus", "ArrayCamera", "3HeFWgN", "setSize", "32373088VvXSUp", "knit", "rgbaColors", "fov", "viewsRenderTarget", "WebGLRenderTarget", "three", "width", "10ExnCmZ", "layout", "flipY", "DataTexture", "mixScene", "frustumCulled", "toneMapping", "updateProjectionMatrix", "high-performance", "focus", "copy", "setAttribute", "resCache", "aspect", "screen", "multiplyScalar"];
  return SQ = function() {
    return h;
  }, SQ();
}
var AE, QE, BE, CE, EE, IE, gE, wE, DE, ME, sE, KE, yE, cE, hE, kE;
class JE {
  constructor(A) {
    o(this, AE, null);
    o(this, QE, null);
    o(this, BE, {});
    o(this, "deg", 0);
    o(this, CE, 0);
    o(this, EE, { x: 1, y: 1 });
    o(this, "viewNum", 1);
    o(this, "size", { width: 0, height: 0 });
    o(this, "resiton", { width: window[S(180)][S(165)] * Math[S(202)](window[S(239)] * 100) / 100, height: window[S(180)][S(226)] * Math[S(202)](window[S(239)] * 100) / 100 });
    o(this, IE, null);
    o(this, "rgbaColors", null);
    o(this, gE, null);
    o(this, wE, null);
    o(this, DE, null);
    o(this, ME, null);
    o(this, sE, null);
    o(this, "mixCamera", null);
    o(this, KE, null);
    o(this, yE, null);
    o(this, cE, BB[S(205)]);
    o(this, "fragmentShader", BB.fragmentShader);
    o(this, hE, []);
    o(this, kE, 0);
    const Q = S;
    if (A.originRenderConfig && (this.originRenderConfig = A[Q(240)]), A[Q(199)] && (this[Q(199)] = A[Q(199)]), A.size && (this[Q(213)] = A[Q(213)]), A[Q(221)] && (this[Q(221)] = A.resiton), A[Q(252)])
      this.three = A.three, A.knit ? (this[Q(247)] = A[Q(247)], this[Q(241)]()) : this[Q(199)] = 1, this[Q(230)]();
    else
      throw new Error(Q(206));
    A[Q(223)] && (this.deg = A[Q(223)]), A.focus && (this[Q(175)] = A[Q(175)]), A.layout && (this[Q(167)] = A[Q(167)], this[Q(188)] = A[Q(167)].x * A.layout.y);
  }
  [(AE = S(231), QE = S(252), BE = S(240), CE = S(175), EE = S(167), IE = S(247), gE = S(186), wE = S(203), DE = S(197), ME = S(250), sE = S(170), KE = S(190), yE = S(208), cE = S(205), hE = S(178), kE = S(199), S(242))](A) {
    this.focus = A;
  }
  [S(187)](A, Q) {
    const B = S;
    this[B(167)] = { x: A, y: Q }, this[B(188)] = A * Q;
  }
  [S(245)](A, Q) {
    const B = S;
    this[B(213)] = { width: A, height: Q };
  }
  [S(217)](A, Q) {
    const B = S;
    this[B(221)] = { width: A, height: Q };
  }
  async [S(241)]() {
    const A = S;
    if (this[A(247)] && this[A(252)]) {
      const Q = await this[A(247)][A(222)]();
      this[A(248)] = this._rgbToRgba(Q), this.maskTexture = new this[A(252)][A(169)](this[A(248)], this[A(221)][A(165)], this[A(221)][A(226)], this[A(252)][A(196)]), this[A(186)].needsUpdate = !0, this.maskTexture[A(168)] = !0, this.maskTexture[A(193)] = this[A(252)][A(228)], this[A(186)][A(209)] = this[A(252)][A(228)], this[A(208)] = new VB({ uniforms: { tDiffuse: { value: null }, u_MaskSampler: { value: this[A(186)] }, u_RowNum: { value: this[A(167)].x }, u_ColNum: { value: this[A(167)].y }, u_PixelLayout: { value: 0 }, u_ViewOrder: { value: 0 }, u_Proportion: { value: 1 } }, vertexShader: this[A(205)], fragmentShader: this[A(185)] });
    }
  }
  async _initCanvas() {
    const A = S;
    if (!this[A(252)])
      return;
    const Q = document.createElement("canvas");
    Q[A(212)] = () => {
      Q[A(201)]();
    }, Q[A(177)]("id", "js-zx-sdk-canvas");
    const B = Q.getContext(A(216), { alpha: !1, antialias: !0, preserveDrawingBuffer: !0, powerPreference: A(174) });
    this[A(250)] = new this.three[A(251)](this[A(213)][A(165)], this[A(213)][A(226)], { wrapS: this[A(252)][A(236)], wrapT: this[A(252)][A(236)], minFilter: this.three.LinearFilter, magFilter: this[A(252)].LinearFilter }), this[A(190)] = new this.three[A(234)]({ canvas: Q, context: B, ...this.originRenderConfig }), this[A(190)][A(245)](this[A(221)][A(165)], this[A(221)][A(226)]), (this.viewMode === 1 || !this[A(247)]) && this[A(190)][A(245)](this.size[A(165)], this[A(213)].height), this[A(190)][A(172)] = this[A(252)][A(194)], this[A(190)][A(184)] = 1, this.domElement = this.mixRenderer[A(231)];
  }
  async [S(215)](A, Q) {
    const B = S;
    if (!this[B(252)])
      throw new Error(B(206));
    if (!this[B(190)] || !this[B(250)])
      return;
    const C = new qC(this[B(190)], this[B(250)]), E = this[B(214)](Q);
    switch (this.viewsCamera = new this[B(252)][B(243)](E), this[B(197)][B(249)] = 200, this[B(197)][B(173)](), this.viewMode) {
      case 0:
        if (!this[B(247)]) {
          this[B(190)][B(215)](A, this[B(197)]);
          return;
        }
        const I = new XC(A, this[B(197)]);
        if (C.addPass(I), !this[B(208)])
          return;
        C.addPass(this.mixPass), C[B(215)](), C[B(207)](), I.dispose();
        break;
      case 1:
        this.mixRenderer.render(A, this[B(197)]);
        break;
      case 2:
        this[B(190)][B(215)](A, Q);
        break;
    }
  }
  [S(220)](A) {
    const Q = S;
    for (let B = 0; B < A.children[Q(235)]; B++) {
      const C = A.children[B];
      C[Q(171)] = !1, C.children[Q(235)] > 0 && this[Q(220)](C);
    }
  }
  [S(214)](A) {
    const Q = S;
    if (!this.three)
      throw new Error(Q(206));
    const B = this.size[Q(165)] / this[Q(167)].y, C = this[Q(213)][Q(226)] / this[Q(167)].x, { unitDistance: E, fullDistance: I } = this._getCameraDis(this[Q(188)], this[Q(175)], this[Q(223)]), g = E / this[Q(175)], w = I / 2, s = [];
    let K = 0;
    const y = B / C;
    for (let c = 1; c < this[Q(167)].x + 1; c++)
      for (let D = 0; D < this[Q(167)].y; D++) {
        const M = new this.three.PerspectiveCamera(50, y, 0.1, 1e3);
        M[Q(176)](A), M[Q(179)] = y, M[Q(173)](), M.viewport = new this[Q(252)][Q(210)](D * B, this.size[Q(226)] - c * C, B, C);
        const k = new this[Q(252)][Q(191)]();
        M[Q(232)](k);
        const U = new this[Q(252)][Q(191)]();
        M.up[Q(182)](), U[Q(176)](M.up);
        const G = new this[Q(252)].Vector3();
        G[Q(198)](k, U)[Q(182)]();
        const F = G[Q(181)](-w + K * E);
        M[Q(204)].add(F);
        const p = new this[Q(252)][Q(237)](), J = w / this[Q(175)] - K * g;
        p[Q(227)](0, 0, 0, 0, J, 0), M[Q(225)][Q(219)](p), M[Q(229)](!0), s.push(M), K++;
      }
    return s;
  }
  _getCameraDis(A, Q, B) {
    const C = S, E = 2 * Q * Math[C(183)](B / 2 * Math.PI / 180);
    return { unitDistance: Math[C(211)](E / (A - 1)), fullDistance: E };
  }
  _rgbToRgba(A) {
    const Q = S;
    if (!A)
      return new Uint8Array(0);
    const B = new Uint8Array(this.resiton.width * this[Q(221)][Q(226)] * 4);
    for (let C = 0, E = 0; C < A[Q(235)]; C += 3, E += 4)
      B[E] = A[C], B[E + 1] = A[C + 1], B[E + 2] = A[C + 2], B[E + 3] = 255;
    return B;
  }
}
(function(h, A) {
  const Q = KA, B = h();
  for (; ; )
    try {
      if (-parseInt(Q(507)) / 1 + -parseInt(Q(528)) / 2 + parseInt(Q(555)) / 3 + parseInt(Q(541)) / 4 * (parseInt(Q(534)) / 5) + parseInt(Q(495)) / 6 * (parseInt(Q(514)) / 7) + -parseInt(Q(526)) / 8 + parseInt(Q(513)) / 9 === A)
        break;
      B.push(B.shift());
    } catch {
      B.push(B.shift());
    }
})(NQ, 726545);
function KA(h, A) {
  const Q = NQ();
  return KA = function(B, C) {
    return B = B - 484, Q[B];
  }, KA(h, A);
}
function NQ() {
  const h = ["Go program has already exited", "apply", "_values", "Go.run: WebAssembly.Instance expected", "keys", "89140YBAMYn", "run", "encode", "_scheduledTimeouts", "getUint32", "pop", "process", "not implemented", "_resolveExitPromise", "writeSync", "total length of command line and environment variables exceeds limit", "setUint8", "result", "set", "4196382wcrPZV", "globalThis.TextDecoder is not available, polyfill required", "length", "TextEncoder", "TextDecoder", "getsp", "deleteProperty", "exit", "setUint32", "now", "scheduleTimeoutEvent: missed timeout event", "_ids", "delete", "_resume", "getInt32", "globalThis.performance is not available, polyfill required (performance.now only)", "push", "env", "number", "forEach", "getTime", "_inst", "12WRiZRG", "exports", "globalThis.TextEncoder is not available, polyfill required", "_idPool", "substring", "string", "construct", "fill", "code", "_pendingEvent", "_nextCallbackTimeoutID", "buffer", "931333ThsZok", "exit code:", "sort", "object", "globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)", "getRandomValues", "13912965ZUeRTT", "1822933oQhDcW", "warn", "log", "getFloat64", "decode", "argv", "Instance", "exited", "_goRefCounts", "get", "subarray", "floor", "10311144djHMHj", "setInt32", "2508302nLHhtY", "mem", "setFloat64", "_makeFuncWrapper", "ENOSYS", "_exitPromise", "165sZaeVz", "utf-8"];
  return NQ = function() {
    return h;
  }, NQ();
}
(() => {
  const h = KA, A = () => {
    const C = KA, E = new Error(C(548));
    return E[C(503)] = C(532), E;
  };
  if (!globalThis.fs) {
    let C = "";
    globalThis.fs = { constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 }, writeSync(E, I) {
      const g = KA;
      C += B[g(518)](I);
      const w = C.lastIndexOf(`
`);
      return w != -1 && (console[g(516)](C[g(499)](0, w)), C = C[g(499)](w + 1)), I[g(557)];
    }, write(E, I, g, w, s, K) {
      const y = KA;
      if (g !== 0 || w !== I.length || s !== null) {
        K(A());
        return;
      }
      const c = this[y(550)](E, I);
      K(null, c);
    }, chmod(E, I, g) {
      g(A());
    }, chown(E, I, g, w) {
      w(A());
    }, close(E, I) {
      I(A());
    }, fchmod(E, I, g) {
      g(A());
    }, fchown(E, I, g, w) {
      w(A());
    }, fstat(E, I) {
      I(A());
    }, fsync(E, I) {
      I(null);
    }, ftruncate(E, I, g) {
      g(A());
    }, lchown(E, I, g, w) {
      w(A());
    }, link(E, I, g) {
      g(A());
    }, lstat(E, I) {
      I(A());
    }, mkdir(E, I, g) {
      g(A());
    }, open(E, I, g, w) {
      w(A());
    }, read(E, I, g, w, s, K) {
      K(A());
    }, readdir(E, I) {
      I(A());
    }, readlink(E, I) {
      I(A());
    }, rename(E, I, g) {
      g(A());
    }, rmdir(E, I) {
      I(A());
    }, stat(E, I) {
      I(A());
    }, symlink(E, I, g) {
      g(A());
    }, truncate(E, I, g) {
      g(A());
    }, unlink(E, I) {
      I(A());
    }, utimes(E, I, g, w) {
      w(A());
    } };
  }
  if (!globalThis[h(547)] && (globalThis[h(547)] = { getuid() {
    return -1;
  }, getgid() {
    return -1;
  }, geteuid() {
    return -1;
  }, getegid() {
    return -1;
  }, getgroups() {
    throw A();
  }, pid: -1, ppid: -1, umask() {
    throw A();
  }, cwd() {
    throw A();
  }, chdir() {
    throw A();
  } }), !globalThis.crypto)
    throw new Error(h(511));
  if (!globalThis.performance)
    throw new Error(h(488));
  if (!globalThis[h(558)])
    throw new Error(h(497));
  if (!globalThis[h(559)])
    throw new Error(h(556));
  const Q = new TextEncoder("utf-8"), B = new TextDecoder(h(535));
  globalThis.Go = class {
    constructor() {
      const C = h;
      this[C(519)] = ["js"], this.env = {}, this[C(562)] = (D) => {
        D !== 0 && console.warn(C(508), D);
      }, this[C(533)] = new Promise((D) => {
        const M = C;
        this[M(549)] = D;
      }), this[C(504)] = null, this[C(544)] = /* @__PURE__ */ new Map(), this[C(505)] = 1;
      const E = (D, M) => {
        const k = C;
        this.mem[k(563)](D + 0, M, !0), this[k(529)][k(563)](D + 4, Math[k(525)](M / 4294967296), !0);
      }, I = (D) => {
        const M = C, k = this[M(529)].getUint32(D + 0, !0), U = this[M(529)][M(487)](D + 4, !0);
        return k + U * 4294967296;
      }, g = (D) => {
        const M = C, k = this[M(529)][M(517)](D, !0);
        if (k === 0)
          return;
        if (!isNaN(k))
          return k;
        const U = this[M(529)][M(545)](D, !0);
        return this[M(538)][U];
      }, w = (D, M) => {
        const k = C, U = 2146959360;
        if (typeof M === k(491) && M !== 0) {
          if (isNaN(M)) {
            this[k(529)][k(563)](D + 4, U, !0), this[k(529)][k(563)](D, 0, !0);
            return;
          }
          this[k(529)][k(530)](D, M, !0);
          return;
        }
        if (M === void 0) {
          this[k(529)][k(530)](D, 0, !0);
          return;
        }
        let G = this[k(484)][k(523)](M);
        G === void 0 && (G = this[k(498)][k(546)](), G === void 0 && (G = this[k(538)].length), this[k(538)][G] = M, this[k(522)][G] = 0, this._ids[k(554)](M, G)), this._goRefCounts[G]++;
        let F = 0;
        switch (typeof M) {
          case k(510):
            M !== null && (F = 1);
            break;
          case k(500):
            F = 2;
            break;
          case "symbol":
            F = 3;
            break;
          case "function":
            F = 4;
            break;
        }
        this[k(529)][k(563)](D + 4, U | F, !0), this[k(529)][k(563)](D, G, !0);
      }, s = (D) => {
        const M = C, k = I(D + 0), U = I(D + 8);
        return new Uint8Array(this._inst[M(496)][M(529)][M(506)], k, U);
      }, K = (D) => {
        const M = I(D + 0), k = I(D + 8), U = new Array(k);
        for (let G = 0; G < k; G++)
          U[G] = g(M + G * 8);
        return U;
      }, y = (D) => {
        const M = C, k = I(D + 0), U = I(D + 8);
        return B.decode(new DataView(this[M(494)].exports.mem.buffer, k, U));
      }, c = Date.now() - performance[C(564)]();
      this.importObject = { _gotest: { add: (D, M) => D + M }, gojs: { "runtime.wasmExit": (D) => {
        const M = C;
        D >>>= 0;
        const k = this[M(529)][M(487)](D + 8, !0);
        this[M(521)] = !0, delete this[M(494)], delete this[M(538)], delete this._goRefCounts, delete this[M(484)], delete this[M(498)], this.exit(k);
      }, "runtime.wasmWrite": (D) => {
        const M = C;
        D >>>= 0;
        const k = I(D + 8), U = I(D + 16), G = this[M(529)][M(487)](D + 24, !0);
        fs.writeSync(k, new Uint8Array(this._inst[M(496)][M(529)][M(506)], U, G));
      }, "runtime.resetMemoryDataView": (D) => {
        const M = C;
        this.mem = new DataView(this[M(494)][M(496)][M(529)][M(506)]);
      }, "runtime.nanotime1": (D) => {
        const M = C;
        D >>>= 0, E(D + 8, (c + performance[M(564)]()) * 1e6);
      }, "runtime.walltime": (D) => {
        const M = C;
        D >>>= 0;
        const k = (/* @__PURE__ */ new Date())[M(493)]();
        E(D + 8, k / 1e3), this[M(529)].setInt32(D + 16, k % 1e3 * 1e6, !0);
      }, "runtime.scheduleTimeoutEvent": (D) => {
        const M = C;
        D >>>= 0;
        const k = this[M(505)];
        this[M(505)]++, this._scheduledTimeouts[M(554)](k, setTimeout(() => {
          const U = M;
          for (this._resume(); this[U(544)].has(k); )
            console[U(515)](U(565)), this[U(486)]();
        }, I(D + 8))), this[M(529)][M(527)](D + 16, k, !0);
      }, "runtime.clearTimeoutEvent": (D) => {
        const M = C;
        D >>>= 0;
        const k = this.mem[M(487)](D + 8, !0);
        clearTimeout(this[M(544)][M(523)](k)), this[M(544)][M(485)](k);
      }, "runtime.getRandomData": (D) => {
        const M = C;
        D >>>= 0, crypto[M(512)](s(D + 8));
      }, "syscall/js.finalizeRef": (D) => {
        const M = C;
        D >>>= 0;
        const k = this[M(529)][M(545)](D + 8, !0);
        if (this[M(522)][k]--, this[M(522)][k] === 0) {
          const U = this[M(538)][k];
          this[M(538)][k] = null, this[M(484)].delete(U), this[M(498)][M(489)](k);
        }
      }, "syscall/js.stringVal": (D) => {
        D >>>= 0, w(D + 24, y(D + 8));
      }, "syscall/js.valueGet": (D) => {
        const M = C;
        D >>>= 0;
        const k = Reflect[M(523)](g(D + 8), y(D + 16));
        D = this._inst[M(496)].getsp() >>> 0, w(D + 32, k);
      }, "syscall/js.valueSet": (D) => {
        const M = C;
        D >>>= 0, Reflect[M(554)](g(D + 8), y(D + 16), g(D + 32));
      }, "syscall/js.valueDelete": (D) => {
        const M = C;
        D >>>= 0, Reflect[M(561)](g(D + 8), y(D + 16));
      }, "syscall/js.valueIndex": (D) => {
        const M = C;
        D >>>= 0, w(D + 24, Reflect[M(523)](g(D + 8), I(D + 16)));
      }, "syscall/js.valueSetIndex": (D) => {
        const M = C;
        D >>>= 0, Reflect[M(554)](g(D + 8), I(D + 16), g(D + 24));
      }, "syscall/js.valueCall": (D) => {
        const M = C;
        D >>>= 0;
        try {
          const k = g(D + 8), U = Reflect[M(523)](k, y(D + 16)), G = K(D + 32), F = Reflect[M(537)](U, k, G);
          D = this[M(494)].exports[M(560)]() >>> 0, w(D + 56, F), this[M(529)][M(552)](D + 64, 1);
        } catch (k) {
          D = this._inst[M(496)].getsp() >>> 0, w(D + 56, k), this[M(529)][M(552)](D + 64, 0);
        }
      }, "syscall/js.valueInvoke": (D) => {
        const M = C;
        D >>>= 0;
        try {
          const k = g(D + 8), U = K(D + 16), G = Reflect[M(537)](k, void 0, U);
          D = this[M(494)][M(496)][M(560)]() >>> 0, w(D + 40, G), this[M(529)][M(552)](D + 48, 1);
        } catch (k) {
          D = this[M(494)].exports[M(560)]() >>> 0, w(D + 40, k), this[M(529)][M(552)](D + 48, 0);
        }
      }, "syscall/js.valueNew": (D) => {
        const M = C;
        D >>>= 0;
        try {
          const k = g(D + 8), U = K(D + 16), G = Reflect[M(501)](k, U);
          D = this[M(494)][M(496)][M(560)]() >>> 0, w(D + 40, G), this[M(529)].setUint8(D + 48, 1);
        } catch (k) {
          D = this[M(494)][M(496)][M(560)]() >>> 0, w(D + 40, k), this[M(529)][M(552)](D + 48, 0);
        }
      }, "syscall/js.valueLength": (D) => {
        const M = C;
        D >>>= 0, E(D + 16, parseInt(g(D + 8)[M(557)]));
      }, "syscall/js.valuePrepareString": (D) => {
        const M = C;
        D >>>= 0;
        const k = Q[M(543)](String(g(D + 8)));
        w(D + 16, k), E(D + 24, k[M(557)]);
      }, "syscall/js.valueLoadString": (D) => {
        const M = C;
        D >>>= 0;
        const k = g(D + 8);
        s(D + 16)[M(554)](k);
      }, "syscall/js.valueInstanceOf": (D) => {
        const M = C;
        D >>>= 0, this[M(529)][M(552)](D + 24, g(D + 8) instanceof g(D + 16) ? 1 : 0);
      }, "syscall/js.copyBytesToGo": (D) => {
        const M = C;
        D >>>= 0;
        const k = s(D + 8), U = g(D + 32);
        if (!(U instanceof Uint8Array || U instanceof Uint8ClampedArray)) {
          this[M(529)][M(552)](D + 48, 0);
          return;
        }
        const G = U[M(524)](0, k.length);
        k[M(554)](G), E(D + 40, G[M(557)]), this[M(529)].setUint8(D + 48, 1);
      }, "syscall/js.copyBytesToJS": (D) => {
        const M = C;
        D >>>= 0;
        const k = g(D + 8), U = s(D + 16);
        if (!(k instanceof Uint8Array || k instanceof Uint8ClampedArray)) {
          this[M(529)][M(552)](D + 48, 0);
          return;
        }
        const G = U[M(524)](0, k[M(557)]);
        k.set(G), E(D + 40, G.length), this[M(529)][M(552)](D + 48, 1);
      }, debug: (D) => {
        console[C(516)](D);
      } } };
    }
    async [h(542)](C) {
      const E = h;
      if (!(C instanceof WebAssembly[E(520)]))
        throw new Error(E(539));
      this[E(494)] = C, this[E(529)] = new DataView(this[E(494)].exports[E(529)][E(506)]), this[E(538)] = [NaN, 0, null, !0, !1, globalThis, this], this[E(522)] = new Array(this[E(538)].length)[E(502)](1 / 0), this[E(484)] = /* @__PURE__ */ new Map([[0, 1], [null, 2], [!0, 3], [!1, 4], [globalThis, 5], [this, 6]]), this[E(498)] = [], this[E(521)] = !1;
      let I = 4096;
      const g = (D) => {
        const M = E, k = I, U = Q[M(543)](D + "\0");
        return new Uint8Array(this[M(529)][M(506)], I, U[M(557)])[M(554)](U), I += U[M(557)], I % 8 !== 0 && (I += 8 - I % 8), k;
      }, w = this.argv[E(557)], s = [];
      this[E(519)].forEach((D) => {
        s[E(489)](g(D));
      }), s[E(489)](0), Object[E(540)](this[E(490)])[E(509)]()[E(492)]((D) => {
        s[E(489)](g(D + "=" + this.env[D]));
      }), s[E(489)](0);
      const y = I;
      if (s[E(492)]((D) => {
        const M = E;
        this.mem[M(563)](I, D, !0), this.mem[M(563)](I + 4, 0, !0), I += 8;
      }), I >= 12288)
        throw new Error(E(551));
      this[E(494)].exports[E(542)](w, y), this.exited && this._resolveExitPromise(), await this._exitPromise;
    }
    [h(486)]() {
      const C = h;
      if (this[C(521)])
        throw new Error(C(536));
      this._inst[C(496)].resume(), this[C(521)] && this[C(549)]();
    }
    [h(531)](C) {
      const E = this;
      return function() {
        const I = KA, g = { id: C, this: this, args: arguments };
        return E[I(504)] = g, E[I(486)](), g[I(553)];
      };
    }
  };
})();
function RA(h, A) {
  var Q = iQ();
  return RA = function(B, C) {
    B = B - 486;
    var E = Q[B];
    return E;
  }, RA(h, A);
}
var UA = RA;
(function(h, A) {
  for (var Q = RA, B = h(); ; )
    try {
      var C = -parseInt(Q(499)) / 1 * (-parseInt(Q(501)) / 2) + -parseInt(Q(496)) / 3 + parseInt(Q(490)) / 4 * (parseInt(Q(502)) / 5) + parseInt(Q(486)) / 6 + parseInt(Q(492)) / 7 + -parseInt(Q(504)) / 8 * (parseInt(Q(487)) / 9) + -parseInt(Q(506)) / 10 * (parseInt(Q(493)) / 11);
      if (C === A)
        break;
      B.push(B.shift());
    } catch {
      B.push(B.shift());
    }
})(iQ, 263454);
function _C(h) {
  var A = RA;
  return typeof atob === A(495) ? atob(h) : new Buffer(h, "base64").toString("binary");
}
function iQ() {
  var h = ["length", "buffer", "1898ZPBgiT", "clear", "244dXYDmU", "5aOqTET", "dispose", "1519888ANEvMP", "delete", "275050fgsfDp", "3040188bMykkS", "18UxwaDE", "add", "track", "183748XTxOhJ", "untrack", "1736238LkzzwP", "66mvYXhN", "resources", "function", "671307JUzPbB"];
  return iQ = function() {
    return h;
  }, iQ();
}
function $C(h) {
  for (var A = RA, Q = _C(h), B = new Uint8Array(Q.length), C = 0; C < Q[A(497)]; C++)
    B[C] = Q.charCodeAt(C);
  return B[A(498)];
}
var UE;
class FE {
  constructor() {
    o(this, UE);
    this.resources = /* @__PURE__ */ new Set();
  }
  [(UE = UA(494), UA(489))](A) {
    var Q = UA;
    return A.dispose && this[Q(494)][Q(488)](A), A;
  }
  [UA(491)](A) {
    var Q = UA;
    this[Q(494)][Q(505)](A);
  }
  [UA(503)]() {
    var A = UA;
    for (const Q of this[A(494)])
      Q[A(503)]();
    this[A(494)][A(500)]();
  }
}
function pQ() {
  const h = ["importObject", "instantiate", "808PLxBXQ", "decodeWrap", "80hyScVK", "37701vxyQsF", "1746155EZuzUo", "518000vckmfF", "maskBinary", "833367CsUZOV", "259114VcNVbh", "1623ggSqaF", "3910rFfWQP", "run", "4281456xJDknW"];
  return pQ = function() {
    return h;
  }, pQ();
}
const PQ = nQ;
(function(h, A) {
  const Q = nQ, B = h();
  for (; ; )
    try {
      if (-parseInt(Q(450)) / 1 + parseInt(Q(451)) / 2 + -parseInt(Q(437)) / 3 * (parseInt(Q(443)) / 4) + -parseInt(Q(447)) / 5 + -parseInt(Q(440)) / 6 + parseInt(Q(448)) / 7 * (parseInt(Q(445)) / 8) + -parseInt(Q(446)) / 9 * (-parseInt(Q(438)) / 10) === A)
        break;
      B.push(B.shift());
    } catch {
      B.push(B.shift());
    }
})(pQ, 502e3);
function nQ(h, A) {
  const Q = pQ();
  return nQ = function(B, C) {
    return B = B - 437, Q[B];
  }, nQ(h, A);
}
var GE;
class SE {
  constructor(A) {
    o(this, GE, null);
    const Q = PQ;
    this[Q(449)] = A;
  }
  async getColors() {
    const A = PQ;
    if (!window.decodeWrap) {
      const Q = new Go(), B = await WebAssembly[A(442)]($C(vC), Q[A(441)]), C = B.instance;
      Q[A(439)](C);
    }
    if (this.maskBinary)
      return await window[A(444)](this[A(449)]);
    throw new Error("need maskBinary");
  }
}
GE = PQ(449);
function _Q(h, A) {
  var Q = aQ();
  return _Q = function(B, C) {
    B = B - 217;
    var E = Q[B];
    return E;
  }, _Q(h, A);
}
(function(h, A) {
  for (var Q = _Q, B = h(); ; )
    try {
      var C = parseInt(Q(220)) / 1 + -parseInt(Q(219)) / 2 * (parseInt(Q(222)) / 3) + parseInt(Q(223)) / 4 + -parseInt(Q(218)) / 5 + parseInt(Q(225)) / 6 * (parseInt(Q(217)) / 7) + parseInt(Q(224)) / 8 + -parseInt(Q(221)) / 9 * (-parseInt(Q(226)) / 10);
      if (C === A)
        break;
      B.push(B.shift());
    } catch {
      B.push(B.shift());
    }
})(aQ, 821442);
function aQ() {
  var h = ["5999584XCNPgp", "12VUioge", "14719090UhkSrF", "4375987QuFMtb", "7936535uhwDDh", "612lPvYMI", "79398tIFZDX", "9GCssbw", "13557TjhMQa", "960104fpqhQX"];
  return aQ = function() {
    return h;
  }, aQ();
}
export {
  SE as Knit,
  JE as Renderer
};