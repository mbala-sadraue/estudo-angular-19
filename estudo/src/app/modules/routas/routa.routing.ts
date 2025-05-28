
import { Route} from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routasRoute: Route[] = [
  
    {
        path:'',
        children: [
            {
                path: 'first',
                component:FirstComponent
            },{
                path: 'second',
                component: SecondComponent
            },
            {
                path:'**',
                redirectTo: '',
            }
        ],
    },

    {
        path:'**',
        // redirectTo: '',
        component: FirstComponent
    }
]