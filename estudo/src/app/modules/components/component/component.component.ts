import { ChangeDetectionStrategy, Component, effect, input, signal, ViewEncapsulation } from '@angular/core';
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
export class ComponentComponent {

    constructor() {
        // effect(() => {
        //     console.log('ComponentComponent contador1: ', this.contador1());
        // })
    }

    // @input({transform: verififyValue, alias: 'value'})
    // numero = 0

    // @input.required<string>()
    // title = ''

    // contador = model<number>(0);

    // incrementValue() {
    //     this.contador.update( (oldValue:number)=> oldValue + 1   );
    // }

    // decrementValue(){
    //     this.contador.update( (oldValue) => oldValue - 1)
    // }

    contador1 = signal<number>(20)

    ngOnInit() {
        this.contador1.set(10)
    }

    incrementValue(event: any){

        console.log("Eventos => "+event)

    }
}