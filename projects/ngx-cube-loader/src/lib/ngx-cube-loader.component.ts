import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-cube-loader',
  standalone: true,
  imports: [],
  template: `
    <div
      class="box-wrapper"
      [class.full-size]="isFullSize"
      aria-label="cube animation"
    >
      <div class="boxes">
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  `,
  styles: `
    div.box-wrapper {
      height: fit-content;
      width: fit-content;
    }

    div.box-wrapper.full-size {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div.box-wrapper div.boxes {
      --size: 32px;
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
export class NgxCubeLoaderComponent {
  @Input() isFullSize = false;
}
