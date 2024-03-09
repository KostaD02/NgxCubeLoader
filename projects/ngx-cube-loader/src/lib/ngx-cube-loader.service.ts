import { Injectable } from '@angular/core';
import { Color, ColorSet } from './types';

@Injectable({
  providedIn: 'root',
})
export class NgxCubeLoaderService {
  generateColorPalette(
    baseColor: Color,
    paletteSize = 4
  ): [Color, Color, Color, Color] {
    const hexToRgb = (hex: string): number[] =>
      hex.match(/\w\w/g)?.map((x) => parseInt(x, 16)) ?? [];
    const rgbToHex = (r: number, g: number, b: number): Color =>
      `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

    const [r, g, b] = hexToRgb(baseColor);
    const isVeryDark = r === 0 && g === 0 && b === 0;
    const brightness = isVeryDark
      ? 0
      : (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    const shades: Color[] = [baseColor];

    if (isVeryDark) {
      const step = 255 / (paletteSize - 1);
      for (let i = 1; i < paletteSize; i++) {
        const shade = Math.round(step * i);
        shades.push(rgbToHex(shade, shade, shade));
      }
    } else {
      for (let i = 1; i < paletteSize; i++) {
        const fraction = brightness < 0.5 ? 0.5 : 0.7;
        const newR = Math.round(r - (r * fraction * i) / paletteSize);
        const newG = Math.round(g - (g * fraction * i) / paletteSize);
        const newB = Math.round(b - (b * fraction * i) / paletteSize);
        shades.push(rgbToHex(newR, newG, newB));
      }
    }

    return shades as ColorSet;
  }

  getRandomHexColor(): Color {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const hex: Color = `#${((r << 16) | (g << 8) | b)
      .toString(16)
      .padStart(6, '0')}`;
    return hex;
  }
}
