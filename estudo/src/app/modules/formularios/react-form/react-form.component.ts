import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup, Validators } from '@angular/forms';

const MODULES = [

  ReactiveFormsModule
]
@Component({
  selector: 'app-react-form',
  imports: [
    ...MODULES
  ],
  templateUrl: './react-form.component.html',
  styleUrl: './react-form.component.scss'
})
export class ReactFormComponent {

  public profileForm = new FormGroup(
    {
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl(''),
      email: new FormControl(''),
    }
  )


  onSubmit(): void{


    if(this.profileForm.invalid){
      console.log('Form is invalid');
      return;

    }
    // Process checkout data here
    console.log('Your order has been submitted', this.profileForm.value);
    console.log('M', this.profileForm.get('firstName')?.value);
    

    // this.profileForm.reset();
    

  }

}
