import {Component} from '@angular/core'
import {MatDividerModule} from '@angular/material/divider';
import { CategoriaComponent } from '../../features/categoria/view/categoria/categoria.component';
import { TaskCompoent } from '../../features/task/view/task/task.componet';

const COMPONENTS =  [
    CategoriaComponent,
    TaskCompoent
]
const MODULES = [
    MatDividerModule,
]

@Component({
    'selector':'app-main-layout',
    standalone:true,
    templateUrl:'main.component.html',
    imports:[...COMPONENTS,...MODULES],
    styleUrls:['main.component.scss'],
})

export class MainLayoutComponent{
    name = ' ola';
    contador:number = 20;
}