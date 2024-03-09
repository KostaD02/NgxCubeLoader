# NgxCubeLoader

Angular (v17+) cube loader which can be configured.

## Examples

The base animation looks like this:

<img src="https://raw.githubusercontent.com/KostaD02/kd-loader/main/assets/visual-single.gif" alt="example view of single animation">

But if you don't like the blue color, you could use one of the predefined colors:

<img src="https://raw.githubusercontent.com/KostaD02/kd-loader/main/assets/visual.gif" alt="example view of many animation">

## Installation

```bash
npm install ngx-cube-loader
```

## Usage

Import `NgxCubeLoaderComponent` in your module or component where you want to use it.

For module:

```ts
import { NgModule } from "@angular/core";
import { NgxCubeLoaderComponent } from "ngx-cube-loader";

@NgModule({
  imports: [
    // ...
    NgxCubeLoaderComponent,
  ],
})
export class AppModule {}
```

Or for a component if it's standalone:

```ts
import { Component } from "@angular/core";
import { NgxCubeLoaderComponent } from "ngx-cube-loader";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgxCubeLoaderComponent],
  template: "<ngx-cube-loader></ngx-cube-loader>",
})
export class AppComponent {}
```

Example with component inputs:

```ts
import { Component } from "@angular/core";
import { NgxCubeLoaderComponent } from "ngx-cube-loader";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgxCubeLoaderComponent],
  template: `
    <ngx-cube-loader colorSet="gold"></ngx-cube-loader>
    <ngx-cube-loader colorSet="random"></ngx-cube-loader>
    <ngx-cube-loader [colorSet]="['#00cc00', '#009900', '#006600', '#003300']"></ngx-cube-loader>
    <ngx-cube-loader [size]="20"></ngx-cube-loader>
    <ngx-cube-loader [duration]="500"></ngx-cube-loader>
  `,
  style,
})
export class AppComponent {}
```

## Predefined colors

The component does have 14 predefined colors. Only the blue color is hand-written, and others are generated based on the first color by using the `NgxCubeLoaderService` method `generateColorPalette`. You can use these predefined colors or modify and provide inputs.

| Color  | Hex values                                      |
| ------ | ----------------------------------------------- |
| blue   | `'#5c8df6'` `'#145af2'` `'#447cf5'` `'#dbe3f4'` |
| gold   | `'#FFD700'` `'#d2b100'` `'#a68c00'` `'#796600'` |
| white  | `'#ffffff'` `'#f0f0f0'` `'#d8d8d8'` `'#b0b0b0'` |
| black  | `'#000000'` `'#333333'` `'#666666'` `'#999999'` |
| red    | `'#ff0000'` `'#cc0000'` `'#990000'` `'#660000'` |
| orange | `'#ff9900'` `'#ff6600'` `'#ff3300'` `'#cc3300'` |
| green  | `'#00cc00'` `'#009900'` `'#006600'` `'#003300'` |
| yellow | `'#ffff00'` `'#cccc00'` `'#999900'` `'#666600'` |
| purple | `'#9933ff'` `'#6600cc'` `'#4d0099'` `'#330066'` |
| gray   | `'#D3D3D3'` `'#DCDCDC'` `'#E5E5E5'` `'#F0F0F0'` |
| brown  | `'#FFB366'` `'#FFC299'` `'#FFD1B3'` `'#FFE0CC'` |
| cyan   | `'#00FFFF'` `'#00CED1'` `'#20B2AA'` `'#008B8B'` |
| violet | `'#8A2BE2'` `'#9400D3'` `'#800080'` `'#4B0082'` |
| pink   | `'#FFC0CB'` `'#FF69B4'` `'#FF1493'` `'#DB7093'` |

## API

NgxCubeLoader provides one component, one service, five types and one const.

### Types

In the code, there are a few types used.

| Type                 | Description                                                    | First example                                  | Second example                                 |
| -------------------- | -------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `Color`              | Color which will be written in RGB or hex format               | `#5c8df6`                                      | `rgb(92, 141, 246)`                            |
| `ColorSet`           | Array of `Color`, which will contain only 4 elements           | `['#5c8df6', '#145af2', '#447cf5', '#dbe3f4']` | `['#FFD700', '#d2b100', '#a68c00', '#796600']` |
| `PredefinedColorSet` | Predefined color names                                         | `'blue'`                                       | `'gold'`                                       |
| `CubeSize`           | Size of the cube which can be provided as a number or string   | 32                                             | `'32px'`                                       |
| `CubeDuration`       | Animation duration which can be provided as a number or string | 800                                            | `800ms`                                        |

### ngx-cube-loader component

`ngx-cube-loader` is [standalone](https://angular.io/guide/standalone-components) component.

| Property       | Description                                                      | type                                             | Default  |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------ | -------- |
| `[isFullSize]` | Provide full-size (100%) value for the animation wrapper element | `boolean`                                        | `false`  |
| `[colorSet]`   | Each cube color                                                  | `ColorSet` or `PredefinedColorSet` or `'random'` | `'blue'` |
| `[size]`       | Size of cubes                                                    | `CubeSize`                                       | `32`     |
| `[duration]`   | Duration of animation                                            | `CubeDuration`                                   | `800`    |

### ngx-cube-loader service

`ngx-cube-loader` service have 2 method

| Method                 | Params                                | Description                                                                                     | Return     |
| ---------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------- |
| `generateColorPalette` | Base color (Color type), Palette Size | Method will generate array as many as provided palette size, colors will be based on base color | `ColorSet` |
| `getRandomHexColor`    | None                                  | Method will generate random hex and return it                                                   | `Color`    |

## License

ngx-cube-loader is [MIT licensed](https://github.com/KostaD02/kd-loader/blob/main/LICENSE)
