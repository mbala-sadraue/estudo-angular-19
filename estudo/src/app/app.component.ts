import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SignalComponent } from './modules/signals/signal/signal.component';
const COMPONENTS = [
    SignalComponent
]

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...COMPONENTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'estudo';
}
