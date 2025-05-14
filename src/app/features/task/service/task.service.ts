import { computed, inject, Injectable, signal } from '@angular/core';
import { Task } from '../model/task';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
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


    public createTask(task: Partial<Task>): Observable<Task> {
        return  this.http.post<Task>(this._apiUrl, task).pipe(
            tap(
                (taskNew) => {
                    this.tasks.update(
                        (tasks) => [...tasks,taskNew]
                    )
                }
            )
        )
    }


    public editTask(task: Task): Observable<Task> {
        return this.http.put<Task>(`${this._apiUrl}/${task.id}`, task).pipe(
            tap(() =>
                {
                    this.tasks.update(
                        (tasks) =>{
                            let index = tasks.findIndex(item => item.id ==task.id)
                            if(index == -1) return tasks;
                            tasks[index] = task;
                            return tasks;
                        }
                    )
                    
                })
        )
    }


    public deteleTask(task: Task): Observable<Task> {
        return this.http.delete<Task>(`${this._apiUrl}/${task.id}`).pipe(
            tap((task) => {
              
                this.http.delete<Task>(`${this._apiUrl}/${task.id}`).pipe(
                    tap(() => {}));
            })
        )
    }
    private sortedTasks(tasks:Task[]): Task[]{
        return tasks.sort((a,b) => a.title.localeCompare(b.title));
    }
}
