import './lib-cee8837f.js';
import './lodash-d1b9d121.js';

const hex2rgb = (hex) => {
    if (hex[0] === '#')
        hex = hex.substring(1);
    if (hex.length < 6) {
        return {
            r: parseInt(hex[0] + hex[0], 16),
            g: parseInt(hex[1] + hex[1], 16),
            b: parseInt(hex[2] + hex[2], 16),
            a: hex.length === 4 ? Math.round((parseInt(hex[3] + hex[3], 16) / 255) * 100) / 100 : 1,
        };
    }
    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16),
        a: hex.length === 8 ? Math.round((parseInt(hex.substring(6, 8), 16) / 255) * 100) / 100 : 1,
    };
};
const hex2rgbString = (hex) => {
    const { r, g, b, a } = hex2rgb(hex);
    if (a === 1) {
        return `rgb(${r}, ${g}, ${b})`;
    }
    else {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
};

const rgb2hsv = ({ r, g, b, a }) => {
    let h, s = 0, v = 0;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    if (delta === 0) {
        h = 0;
    }
    else if (r === max) {
        h = ((g - b) / delta) % 6;
    }
    else if (g === max) {
        h = (b - r) / delta + 2;
    }
    else {
        h = (r - g) / delta + 4;
    }
    h = h * 60;
    if (h < 0)
        h += 360;
    s = (max === 0 ? 0 : delta / max) * 100;
    v = (max / 255) * 100;
    return { h, s, v, a };
};

const hex2hsv = (hex) => {
    const rgb = hex2rgb(hex);
    return rgb2hsv(rgb);
};

const hsl2hsv = ({ h, s, l, a }) => {
    s *= (l < 50 ? l : 100 - l) / 100;
    return {
        h: h,
        s: s > 0 ? ((2 * s) / (l + s)) * 100 : 0,
        v: l + s,
        a,
    };
};

const hsv2rgb = ({ h, s, v, a }) => {
    s = s / 100;
    v = v / 100;
    let rgb = [];
    const c = v * s;
    const hh = h / 60;
    const x = c * (1 - Math.abs((hh % 2) - 1));
    const m = v - c;
    if (hh >= 0 && hh < 1) {
        rgb = [c, x, 0];
    }
    else if (hh >= 1 && hh < 2) {
        rgb = [x, c, 0];
    }
    else if (hh >= 2 && hh < 3) {
        rgb = [0, c, x];
    }
    else if (h >= 3 && hh < 4) {
        rgb = [0, x, c];
    }
    else if (h >= 4 && hh < 5) {
        rgb = [x, 0, c];
    }
    else if (h >= 5 && hh <= 6) {
        rgb = [c, 0, x];
    }
    else {
        rgb = [0, 0, 0];
    }
    return {
        r: Math.round(255 * (rgb[0] + m)),
        g: Math.round(255 * (rgb[1] + m)),
        b: Math.round(255 * (rgb[2] + m)),
        a,
    };
};

const hsl2rgb = (hsl) => {
    const hsv = hsl2hsv(hsl);
    return hsv2rgb(hsv);
};

const convert = (num) => {
    const hex = num.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
};
const rgb2hex = ({ r, g, b, a }) => {
    const alphaHex = a < 1 ? convert(Math.round(a * 255)) : '';
    return '#' + [convert(r), convert(g), convert(b), alphaHex].join('');
};

const hsv2hex = ({ h, s, v, a }) => {
    const rgb = hsv2rgb({ h, s, v, a });
    return rgb2hex(rgb);
};

const hsv2hsl = ({ h, s, v, a }) => {
    const hh = ((200 - s) * v) / 100;
    return {
        h: h,
        s: hh > 0 && hh < 200 ? ((s * v) / 100 / (hh <= 100 ? hh : 200 - hh)) * 100 : 0,
        l: hh / 2,
        a,
    };
};
const hsv2hslString = ({ h, s, v, a }) => {
    const hsl = hsv2hsl({ h, s, v, a });
    return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${hsl.a})`;
};

const rgb2hsl = ({ r, g, b, a }) => {
    return hsv2hsl(rgb2hsv({ r, g, b, a }));
};
const rgbString2hsl = (rgb) => {
    const colors = ['r', 'g', 'b', 'a'];
    const colorArr = rgb
        .slice(rgb.indexOf('(') + 1, rgb.indexOf(')'))
        .split(',')
        .map((c) => c.trim());
    const obj = { r: 0, g: 0, b: 0, a: 1 };
    colorArr.forEach((k, i) => {
        const key = colors[i];
        obj[key] = parseInt(k, 10);
    });
    return hsv2hsl(rgb2hsv(obj));
};

const rgb2rgbString = ({ r, g, b, a }) => {
    if (a === 1) {
        return `rgb(${r}, ${g}, ${b})`;
    }
    else {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
};

const rgbColorRegex = /rgba?\((?<r>[.\d]+)[, ]+(?<g>[.\d]+)[, ]+(?<b>[.\d]+)(?:\s?[,\/]\s?(?<a>[.\d]+%?))?\)/i;
const parseRgba = (color) => {
    const result = rgbColorRegex.exec(color);
    if (result === null || result === void 0 ? void 0 : result.groups) {
        return {
            r: parseInt(result.groups.r, 10),
            g: parseInt(result.groups.g, 10),
            b: parseInt(result.groups.b, 10),
            a: typeof result.groups.a !== 'undefined' ? parseInt(result.groups.a) : 1,
        };
    }
};

const hexColorRegex = /^#[0-9A-F]{3,6}[0-9a-f]{0,2}$/i;
const parseHex = (color) => {
    return hex2rgb(color);
};

const parseColor = (color) => {
    let rgbColor;
    if (rgbColorRegex.test(color)) {
        rgbColor = parseRgba(color);
    }
    else if (hexColorRegex.test(color)) {
        rgbColor = parseHex(color);
    }
    if (rgbColor) {
        return rgb2hsv(rgbColor);
    }
    throw new Error(`Cannot parse ${color}`);
};

const isRGB = (color) => {
    return Object.keys(color).every((k) => ['r', 'g', 'b', 'a'].includes(k));
};

const isHSL = (color) => {
    return Object.keys(color).every((k) => ['h', 's', 'l', 'a'].includes(k));
};

const hsv2hwb = ({ h, s, v }) => {
    return {
        h,
        w: ((100 - s) * v) / 100,
        b: 100 - v,
    };
};

const hwb2hsv = ({ h, w, b }, a) => {
    return {
        h,
        s: Math.max(0, Math.min(100, b === 100 ? 0 : 100 - (w / (100 - b)) * 100)),
        v: 100 - b,
        a,
    };
};

class Color {
    constructor(color) {
        Object.defineProperty(this, "_color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_alpha", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (typeof color === 'string') {
            const c = parseColor(color);
            this._color = c;
            this._alpha = c.a || 1;
        }
        else if (isRGB(color)) {
            this._color = rgb2hsv(color);
            this._alpha = color.a || 1;
        }
        else if (isHSL(color)) {
            this._color = hsl2hsv(color);
            this._alpha = color.a || 1;
        }
        else {
            this._color = color;
            this._alpha = color.a || 1;
        }
    }
    alpha(alpha) {
        this._alpha = alpha;
        return this;
    }
    white() {
        return this.toHwb().w;
    }
    darken(ratio) {
        const hsl = this.toHsl();
        hsl.l = Math.min(100, Math.max(hsl.l - hsl.l * ratio, 0));
        this._color = hsl2hsv(hsl);
        return this;
    }
    whiten(ratio) {
        const hwb = this.toHwb();
        hwb.w = Math.min(100, Math.max(hwb.w + hwb.w * ratio, 0));
        this._color = hwb2hsv(hwb, this._alpha);
        return this;
    }
    blacken(ratio) {
        const hwb = this.toHwb();
        hwb.b = Math.min(100, Math.max(hwb.b + hwb.b * ratio, 0));
        this._color = hwb2hsv(hwb, this._alpha);
        return this;
    }
    toHwb() {
        return hsv2hwb(this._color);
    }
    toHsl() {
        return hsv2hsl(Object.assign(Object.assign({}, this._color), { a: this._alpha }));
    }
    toRgbString() {
        const rgb = hsv2rgb(Object.assign(Object.assign({}, this._color), { a: this._alpha }));
        return `rgb${rgb.a !== 1 ? 'a' : ''}(${rgb.r}, ${rgb.g}, ${rgb.b}${rgb.a !== 1 ? `, ${rgb.a}` : ''})`;
    }
    toHex() {
        return hsv2hex(Object.assign(Object.assign({}, this._color), { a: this._alpha }));
    }
}

export { Color as C, hex2rgb as a, hex2rgbString as b, hsl2hsv as c, hsl2rgb as d, hsv2hex as e, hsv2hsl as f, hsv2hslString as g, hex2hsv as h, hsv2rgb as i, rgb2hsl as j, rgbString2hsl as k, rgb2hsv as l, rgb2rgbString as m, rgb2hex as r };
