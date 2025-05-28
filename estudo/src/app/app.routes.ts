import { Routes } from '@angular/router';
import { FirstComponent } from './modules/routas/first/first.component';
import { LayoutComponent } from './modules/routas/layout/layout.component';
import { SecondComponent } from './modules/routas/second/second.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        loadChildren: () => import('./modules/routas/routa.routing').then(m => m.routasRoute)   
    },
  

];
