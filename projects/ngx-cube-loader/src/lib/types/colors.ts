export type Color = `#${string}` | `rgb(${string}, ${string}, ${string})`;

export type ColorSet = [Color, Color, Color, Color];

export type PredefinedColorSet =
  | 'blue'
  | 'gold'
  | 'orange'
  | 'red'
  | 'black'
  | 'white'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'brown'
  | 'cyan'
  | 'violet'
  | 'pink';
