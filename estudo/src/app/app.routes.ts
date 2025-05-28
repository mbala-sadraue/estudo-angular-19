import { Routes } from '@angular/router';
import { FirstComponent } from './modules/routas/first/first.component';
import { LayoutComponent } from './modules/routas/layout/layout.component';
import { SecondComponent } from './modules/routas/second/second.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children: [

            {
                path:'first',
                component: FirstComponent
            },
            {
                path:'second',
                component:SecondComponent
            }
             ]

    },
  

];
