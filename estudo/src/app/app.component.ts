import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { SignalComponent } from './modules/signals/signal/signal.component';
import { ComponentComponent } from './modules/components/component/component.component';
import { TemplateComponent } from './modules/templates/template/template.component';
import { LayoutComponent } from './modules/routas/layout/layout.component';
import { FirstComponent } from './modules/routas/first/first.component';
import { SecondComponent } from './modules/routas/second/second.component';
const COMPONENTS = [
  //  TemplateComponent,

  //  LayoutComponent,
  //  SignalComponent, ComponentComponent
]

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'estudo';
}
