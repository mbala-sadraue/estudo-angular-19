import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-component-component',
    templateUrl: './component.component.html',
    styleUrls: ['./component.component.scss'],
    standalone: true,
    imports: [],
    providers: [],
    encapsulation: ViewEncapsulation.Emulated,  
    changeDetection: ChangeDetectionStrategy.Default,
    


})
export class ComponentComponent{}