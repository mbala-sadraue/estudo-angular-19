import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CategoriaService } from '../../../categoria/service/categoria.service';
const MODULES = [
  MatInputModule,
  MatFormFieldModule,
  FormsModule,
  MatSelectModule,
  // ReactiveFormsModule,
  // MatIconModule,
]

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  standalone: true,
  imports: [
    ...MODULES
  ] 
})


export class TaskFormComponent implements OnInit {
  constructor() { }
  task: string = '';

  categoriesServices = inject(CategoriaService)
  categories = this.categoriesServices.categorias;
  ngOnInit(): void {
    
  }

}