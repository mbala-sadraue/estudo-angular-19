import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';


const COMPONENTS = [
    ListItemComponent
]
@Component({
    selector: 'app-component-component',
    templateUrl: './component.component.html',
    styleUrls: ['./component.component.scss'],
    standalone: true,
    imports: [
        ...COMPONENTS
    ],
    providers: [],
    encapsulation: ViewEncapsulation.Emulated,  
    changeDetection: ChangeDetectionStrategy.Default,
    


})
export class ComponentComponent{}