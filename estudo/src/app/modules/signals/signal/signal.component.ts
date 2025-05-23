import { Component, signal, WritableSignal, computed, Signal, effect } from '@angular/core'
import { log } from 'console';
// import { signal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-signal',
    templateUrl: './signal.component.html',
    styleUrls: ['./signal.component.scss']

})


export class SignalComponent {
    numero = signal(0);
    numero2: WritableSignal<number> = signal(0);
    count = signal(0);
    soma: Signal<Number> = computed(() => this.numero() + this.numero2());
    showCount: WritableSignal<boolean> = signal(false);
    condictionalAcount = computed(() => {
        console.log('condictionalAcount');

        if (this.showCount()) {
            return "Contador: " + this.count();
        } else {
            return "Contador oculto";
        }

    })

    
  

    constructor() {

        effect(() =>{
            console.log('Valor de numero:', this.count());
        
    
        });
        this.numero2.set(10)

        this.numero.set(20)
        // console.log('SignalComponent constructor');
    }


    ngOnInit(): void {

        this.numero.update(
            (value) => {
                // console.log('Valor de numero:', this.numero());
                return value * 2

            }
        ) 

        console.log('Valor de count 1:', this.condictionalAcount());
        // this.count.set(50)
        this.showCount.set(true)
        this.count.set(50)
        console.log('Valor de count 2:', this.condictionalAcount());
        this.count.set(30)
        this.count.set(10)
        // console.log('Valor de count 2:', this.condictionalAcount());
        
        
        
        
        
        // console.log('soma:', this.soma());
        
        // this.numero2.update((value) => value + 10);
        // console.log('soma:', this.soma());
        
       
    }
    



}