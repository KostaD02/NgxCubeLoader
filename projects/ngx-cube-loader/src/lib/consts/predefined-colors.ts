import { ColorSet, PredefinedColorSet } from '../types';

export const PREDEFINED_COLORS: { [key in PredefinedColorSet]: ColorSet } = {
  blue: ['#5c8df6', '#145af2', '#447cf5', '#dbe3f4'],
  gold: ['#FFD700', '#d2b100', '#a68c00', '#796600'],
  white: ['#ffffff', '#f0f0f0', '#d8d8d8', '#b0b0b0'],
  black: ['#000000', '#333333', '#666666', '#999999'],
  red: ['#ff0000', '#cc0000', '#990000', '#660000'],
  orange: ['#ff9900', '#ff6600', '#ff3300', '#cc3300'],
  green: ['#00cc00', '#009900', '#006600', '#003300'],
  yellow: ['#ffff00', '#cccc00', '#999900', '#666600'],
  purple: ['#9933ff', '#6600cc', '#4d0099', '#330066'],
  gray: ['#D3D3D3', '#DCDCDC', '#E5E5E5', '#F0F0F0'],
  brown: ['#FFB366', '#FFC299', '#FFD1B3', '#FFE0CC'],
  cyan: ['#00FFFF', '#00CED1', '#20B2AA', '#008B8B'],
  violet: ['#8A2BE2', '#9400D3', '#800080', '#4B0082'],
  pink: ['#FFC0CB', '#FF69B4', '#FF1493', '#DB7093'],
};
