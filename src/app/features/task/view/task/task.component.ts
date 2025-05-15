import { Component, inject, OnInit ,Signal,signal} from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Observer } from 'rxjs';
import { Task } from '../../model/task';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { TaskFormComponent } from '../task-form.component/task-form.component';


// const PIPES = [
//     AsyncPipe
// ]
const COMPONENTS = [
    TaskFormComponent
]

@Component({
    'selector': 'task-component',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.scss'],
    imports:[
        TaskFormComponent
    ]
})

export class TaskCompoent implements OnInit {

    // constructor(private taskService: TaskService) { };

    // tasks$: Observer<Task[]> | any = []
    // tasks = signal<Task[]>([]);
    // tasks = signal<Task[]>([]);
    
    private readonly taskService = inject(TaskService);
    
    tasks = toSignal(this.taskService.getTasks(), { initialValue: [] });
    ngOnInit() {
        // this.tasks = this.taskService.tasks();

        // this.tasks$ = this.taskService.getTasks();


    }
}