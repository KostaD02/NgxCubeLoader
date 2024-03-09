import { Component, Input, OnInit, inject } from '@angular/core';
import { ColorSet, PredefinedColorSet } from './types/colors';
import { PREDEFINED_COLORS } from './consts/predefined-colors';
import { CubeDuration, CubeSize } from './types';
import { NgxCubeLoaderService } from './ngx-cube-loader.service';

@Component({
  selector: 'ngx-cube-loader',
  standalone: true,
  imports: [],
  template: `
    <div
      class="box-wrapper"
      style="--size: {{ size }}"
      aria-label="cube animation"
      [class.full-size]="isFullSize"
    >
      <div class="boxes" style="--duration: {{ duration }}">
        @for (box of boxes; track box) {
        <div class="box">
          @for (color of colorSet; track color) {
          <div style="--background: {{ color }}"></div>
          }
        </div>
        }
      </div>
    </div>
  `,
  styles: `
    * {
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      pointer-events: none;
    }
    div.box-wrapper {
      --size: 32px;
      --gap: 15px;
      height: fit-content;
      width: fit-content;
      min-height: calc(var(--size) * 4 + var(--gap));
    }

    div.box-wrapper.full-size {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div.box-wrapper div.boxes {
      --duration: 800ms;
      height: calc(var(--size) * 2);
      width: calc(var(--size) * 3);
      position: relative;
      transform-style: preserve-3d;
      transform-origin: 50% 50%;
      transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
    }

    div.box-wrapper div.boxes div.box {
      width: var(--size);
      height: var(--size);
      top: 0;
      left: 0;
      position: absolute;
      transform-style: preserve-3d;
    }

    div.box-wrapper div.boxes div.box:nth-child(1) {
      transform: translate(100%, 0);
      animation: box1 var(--duration) linear infinite;
    }

    div.box-wrapper div.boxes div.box:nth-child(2) {
      transform: translate(0, 100%);
      animation: box2 var(--duration) linear infinite;
    }

    div.box-wrapper div.boxes div.box:nth-child(3) {
      transform: translate(100%, 100%);
      animation: box3 var(--duration) linear infinite;
    }

    div.box-wrapper div.boxes div.box:nth-child(4) {
      transform: translate(200%, 0);
      animation: box4 var(--duration) linear infinite;
    }

    div.box-wrapper div.boxes div.box>div {
      --background: #5c8df6;
      --top: auto;
      --right: auto;
      --bottom: auto;
      --left: auto;
      --translateZ: calc(var(--size) / 2);
      --rotateY: 0deg;
      --rotateX: 0deg;
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--background);
      top: var(--top);
      right: var(--right);
      bottom: var(--bottom);
      left: var(--left);
      transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
    }

    div.box-wrapper div.boxes div.box>div:nth-child(1) {
      --top: 0;
      --left: 0;
    }

    div.box-wrapper div.boxes div.box>div:nth-child(2) {
      --background: #145af2;
      --right: 0;
      --rotateY: 90deg;
    }

    div.box-wrapper div.boxes div.box>div:nth-child(3) {
      --background: #447cf5;
      --rotateX: -90deg;
    }

    div.box-wrapper div.boxes div.box>div:nth-child(4) {
      --background: #dbe3f4;
      --top: 0;
      --left: 0;
      --translateZ: calc(var(--size) * 3 * -1);
    }

    @keyframes box1 {

      0%,
      50% {
        transform: translate(100%, 0);
      }

      100% {
        transform: translate(200%, 0);
      }
    }

    @keyframes box2 {
      0% {
        transform: translate(0, 100%);
      }

      50% {
        transform: translate(0, 0);
      }

      100% {
        transform: translate(100%, 0);
      }
    }

    @keyframes box3 {

      0%,
      50% {
        transform: translate(100%, 100%);
      }

      100% {
        transform: translate(0, 100%);
      }
    }

    @keyframes box4 {
      0% {
        transform: translate(200%, 0);
      }

      50% {
        transform: translate(200%, 100%);
      }

      100% {
        transform: translate(100%, 100%);
      }
    }
  `,
})
export class NgxCubeLoaderComponent implements OnInit {
  @Input() isFullSize = false;
  @Input() colorSet: ColorSet | PredefinedColorSet | 'random' = 'blue';
  @Input() size: CubeSize = 32;
  @Input() duration: CubeDuration = 800;

  readonly ngxCubeLoaderService = inject(NgxCubeLoaderService);

  private readonly boxCount = 4;
  readonly boxes: number[] = new Array(this.boxCount).fill(0);

  ngOnInit(): void {
    const isPredefinedColorSet = typeof this.colorSet === 'string';

    if (isPredefinedColorSet) {
      if (this.colorSet === 'random') {
        const randomColor = this.ngxCubeLoaderService.getRandomHexColor();
        this.colorSet =
          this.ngxCubeLoaderService.generateColorPalette(randomColor);
      } else {
        const color = this.colorSet as PredefinedColorSet;
        this.colorSet = PREDEFINED_COLORS[color];
      }
    }

    if (typeof this.size === 'number') {
      this.size = `${this.size}px`;
    }

    if (typeof this.duration === 'number') {
      this.duration = `${this.duration}ms`;
    }
  }
}
