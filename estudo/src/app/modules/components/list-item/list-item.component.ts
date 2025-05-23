import { Component,input, model, output } from '@angular/core';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss'],
    standalone: true
})
export class ListItemComponent {
    constructor() {
        // console.log('ListItemComponent initialized');
    }

    numero = input('',{transform: verififyValue, alias: 'value'})

    title = input.required<string>()

    contador = model<number>(0);

    clickIncrementValue = output<number>();
    incrementValue() {
        this.contador.update( (oldValue:number)=> oldValue + 1   );
        this.clickIncrementValue.emit(this.contador())
    }

    decrementValue(){
        this.contador.update( (oldValue) => oldValue - 1)
    }
}


function verififyValue(value: number): string {

    if(value == 0) return "O valor é 0"

    if(value > 50) return "O valor é maior que 49 =>  "+ value

    return "O valor é menor que 50  => "+ value

}

