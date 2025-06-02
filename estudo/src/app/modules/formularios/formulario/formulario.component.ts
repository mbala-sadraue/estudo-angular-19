import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule, } from '@angular/forms';
import { ReactFormComponent } from '../react-form/react-form.component';

const MODULES = [
  FormsModule,
  ReactiveFormsModule,
];

const COMPONENTS = [
  ReactFormComponent
]

@Component({
  selector: 'app-formulario',
  imports: [
    ...MODULES,
    ...COMPONENTS
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

// nameControl = new FormControl
// nemenameControl2  = '';

// updateNameControl(): void{
//   this.nameControl.setValue('Mbala')
// }




}
