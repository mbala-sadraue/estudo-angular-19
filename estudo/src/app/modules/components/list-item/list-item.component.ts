import { Component,computed,input, model, output, ViewChild, viewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

const COMPONENTS = [
    HeaderComponent
]

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss'],
    standalone: true,
    imports:[...COMPONENTS]
})
export class ListItemComponent {

    header = viewChild(HeaderComponent);
    // @ViewChild(HeaderComponent,{static:true}) _header : HeaderComponent;
    constructor() {
        // console.log('ListItemComponent initialized');
    }
    headerTitle = computed(() => this.header()?.title)

    
    
    numero = input('',{transform: verififyValue, alias: 'value'})
    
    title = input.required<string>()
    
    contador = model<number>(0);
    
    
    ngOnInit() {
        console.log("OnInit 2");
           
    }
    
    ngOnChanges(): void {
        console.log("ngOnChanges 2");
    }

    ngDocheck(): void {
        console.log("ngDocheck 2");

    }
    ngAfterContentInit(): void {
        console.log("ngAfterContentInit 2");

    }
    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked 2");

    }
    ngAfterViewInit(): void{
        console.log("ngAfterViewInit 2");
        // console.log("header title"+ this.headerTitle);
        console.log("header title: "+ this.headerTitle());
        
    }
    ngAfterViewChecked(): void{
        console.log("ngAfterViewChecked 2");
    }

    ngOnDestroy():void{
        console.log("OnDesctroy 2");
        
    }
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

