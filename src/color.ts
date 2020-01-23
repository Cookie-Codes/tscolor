import { ColorOutboundValue } from './exceptions';
/**
 * This File Contain Large Enum
 */
export class Color {
  private _r: number = 0;
  private _g: number = 0;
  private _b: number = 0;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }


  get r() {
    return this._r;
  }

  set r(val: number) {
    if (0 <= val && val <= 255) {
      this._r = val;
    } else {
      throw new ColorOutboundValue();
    }
  }

  get g() {
    return this._g;
  }

  set g(val: number) {
    if (0 <= val && val <= 255) {
      this._g = val;
    } else {
      throw new ColorOutboundValue();
    }
  }

  get b() {
    return this._b;
  }

  set b(val: number) {
    if (0 <= val && val <= 255) {
      this._b = val;
    } else {
      throw new ColorOutboundValue();
    }
  }

  toString() {
    return '38;2;' + this.r + ';' + this.g + ';' + this.b
  }
}
