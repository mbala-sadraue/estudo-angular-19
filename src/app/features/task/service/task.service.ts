import { computed, inject, Injectable, signal } from '@angular/core';
import { Task } from '../model/task';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs';
@Injectable({
    providedIn: 'root'
})


export class TaskService {

    readonly http = inject(HttpClient);

    readonly _apiUrl = 'http://localhost:3000/tasks';

    public tasks = signal(<Task[]>([]));
    public numberOfTasks = computed(() => this.tasks().length)

    public getTasks() {

        return this.http.get<Task[]>(this._apiUrl).pipe
            (
                tap(
                    (tasks) => {
                        this.tasks.set(tasks);
                    }
                ),
            )
    }
}
