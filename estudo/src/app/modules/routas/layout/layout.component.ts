import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

const COMPONENTS = []
const MODULES =[
  RouterOutlet,
  RouterModule
]
@Component({
  selector: 'app-layout',
  imports: [
    ...MODULES
    
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
