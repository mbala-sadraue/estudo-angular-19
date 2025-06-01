import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

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


   router =  inject(Router)



   onNavigate(route: string) {

    // this.router.navigateByUrl(route, );

    this.router.navigate([route,'1239'],{queryParams:{id:123}});
   
  }
}
