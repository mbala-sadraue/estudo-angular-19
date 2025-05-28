
import { Route} from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routasRoute: Route[] = [
  
    {
        path:'',
        component: LayoutComponent,
        children: [
            {
                path: '/first',
                component:FirstComponent
            },{
                path: '/second',
                component: SecondComponent
            }
        ]
    }
]