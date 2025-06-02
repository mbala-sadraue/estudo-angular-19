
import { Route} from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routasRoute: Route[] = [
  
    {
        path:'',
        children: [
            {
                path: 'first/:id',
                component:FirstComponent,
                title: 'First Component',
                providers: [
                
                ],
                data:{data:[]},
                outlet: 'primary', // espefica que este é o outlet principal


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