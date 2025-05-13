import { Component } from '@angular/core';


@Component({
    'selector':'task-component',
    templateUrl:'task.component.html',
    styleUrls:['task.component.scss'],
})

export class TaskCompoent{

    name = ' ola';
    contador:number = 20;
}