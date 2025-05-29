
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
                component:FirstComponent,
                title: 'First Component',


            },{
                path: 'second',
                component: SecondComponent,
                title: 'Second Component',
            },
            {
                path:'**',
                redirectTo: '',
            },

            // {
            //     path: 'first/:id',
            //     component:FirstComponent
            // }
        ],
    },

    {
        path:'**',
        // redirectTo: '',
        component: FirstComponent
    }
]