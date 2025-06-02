import {Routes} from '@angular/router'
import { FormularioComponent } from './formulario/formulario.component'

export  const forumlarioRoutes: Routes =
[

    {
        path:'',
        component: FormularioComponent

    },
    {
        path:'**',
        redirectTo:'formulario',
    }

]