import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SignalComponent } from './modules/signals/signal/signal.component';
import { ComponentComponent } from './modules/components/component/component.component';
import { TemplateComponent } from './modules/templates/template/template.component';
const COMPONENTS = [
   TemplateComponent,
  //  SignalComponent, ComponentComponent
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
