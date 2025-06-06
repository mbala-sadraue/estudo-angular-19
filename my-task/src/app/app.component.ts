import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainLayoutComponent} from './layout/main/layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-tasks';
}
