import { Routes } from '@angular/router';
import { FirstComponent } from './modules/routas/first/first.component';;
import { SecondComponent } from './modules/routas/second/second.component';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
    
    // {
    //     path:'',
    //     component: LayoutComponent,
    //     loadChildren: () => import('./modules/routas/routa.routing').then(m => m.routasRoute)   
    // },

    {
        path:'',
        component: LayoutComponent,
        children: [
        
            {
                path: 'formulario',
                loadChildren:() => import('./modules/formularios/formulario.route').then(m => m.forumlarioRoutes)   
            },
            {
                path:'http',
                loadChildren: () => import('./modules/httpclients/httpclient.route').then(m => m.httpClientRoute)
            }
        ]
    }
  

];
