# NgxCubeLoader

Simple Angular(17+) cube loader

## Example

<img src="https://github.com/KostaD02/kd-loader/blob/main/visual.gif" alt="example view of animation">

## Installation

```bash
npm install ngx-cube-loader --save
```

## Usage

import `NgxCubeLoaderComponent` in your module or component where you want to use it.

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

Or for component if it's standalone:

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

## API

`ngx-cube-loader` is [standalone](https://angular.io/guide/standalone-components) component.

| Property       | Description                                                      | type      | Default |
| -------------- | ---------------------------------------------------------------- | --------- | ------- |
| `[isFullSize]` | Provide full-size (100%) value for the animation wrapper element | `boolean` | `false` |

## License

ngx-cube-loader is [MIT licensed](https://github.com/KostaD02/kd-loader/blob/main/LICENSE)
