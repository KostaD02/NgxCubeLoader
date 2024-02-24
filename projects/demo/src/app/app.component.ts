import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxCubeLoaderComponent } from '../../../../dist/ngx-cube-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxCubeLoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';
}
