import { Component, inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CategoriaService } from '../../../categoria/service/categoria.service';
const MODULES = [
  // MatInputModule,
  MatFormFieldModule,
  FormsModule,
  MatSelectModule,
  ReactiveFormsModule,
  MatIconModule,
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
  fb = inject(FormBuilder);
  categoriesServices = inject(CategoriaService)
  formBuilder: FormGroup = new FormGroup({});
  categories = this.categoriesServices.categorias;
  formGroup: FormGroup = new FormGroup({
    task: new FormControl('', [Validators.required, Validators.minLength(3)]),
    categoryId: new FormControl('', [Validators.required]),
  })


  ngOnInit(): void {


    this.formBuilder = this.fb.group({
      task: ['', Validators.required, Validators.minLength(3)],
      categoryId: ['', Validators.required],
    });

    // this.formGroup 
  }

 public addTask(): any  {
    
    if(this.formBuilder.invalid) return false;


    console.log(this.formBuilder.value);
    
}
}