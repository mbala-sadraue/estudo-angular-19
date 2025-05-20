import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
const MODULES = [
  MatFormFieldModule,
  MatIconModule,
MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatSelectModule,
]

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  standalone: true
})


export class TaskFormComponent implements OnInit {
  constructor() { }
  task: string = '';
  ngOnInit(): void {
  }

}