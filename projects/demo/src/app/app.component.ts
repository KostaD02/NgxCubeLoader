import { Component, OnInit, inject } from '@angular/core';

import {
  ColorSet,
  NgxCubeLoaderComponent,
  NgxCubeLoaderService,
  PREDEFINED_COLORS,
} from '../../../../dist/ngx-cube-loader';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxCubeLoaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly ngxCubeLoaderService = inject(NgxCubeLoaderService);
  readonly predefinecColors = Object.values(PREDEFINED_COLORS);

  size = 32;
  duration = 800;

  randomPalette!: ColorSet;

  constructor() {
    this.generateRandomPalette();
  }

  updateSize(event: Event) {
    const target = event.target as HTMLInputElement;
    this.size = Number(target.value);
  }

  updateDuration(event: Event) {
    const target = event.target as HTMLInputElement;
    this.duration = Number(target.value);
  }

  generateRandomPalette() {
    const randomColor = this.ngxCubeLoaderService.getRandomHexColor();
    this.randomPalette =
      this.ngxCubeLoaderService.generateColorPalette(randomColor);
  }
}
