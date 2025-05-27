import {Component} from '@angular/core';

@Component({
    selector:'app-header',
    styleUrl:'header.component.scss',
    templateUrl:'header.component.html'
})

export class HeaderComponent{
    title: string = 'title';

    ngOnInit():void{

    }
} 