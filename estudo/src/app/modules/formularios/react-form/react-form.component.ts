import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

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

  // public profileForm = new FormGroup(
  //   {
  //     firstName: new FormControl('',[Validators.required]),
  //     lastName: new FormControl(''),
  //     email: new FormControl(''),
  //     address: new FormGroup({
  //       street: new FormControl(''),
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //     }),
  //   }
  // )

  public formBuilder = inject(FormBuilder);
  public  profileForm =  this.formBuilder.group({
    firstName: ['', Validators.required,],
    lastName: [''],
    email: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
    }),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')])
  });

  


  onSubmit(): void{
    
    if(this.profileForm.invalid){
      console.log('Form is invalid');
      return;
    }
    // Process checkout data here
    console.log('Your order has been submitted', this.profileForm.value);
    console.log('M', this.profileForm.get('firstName')?.value);
    console.log('aliases', this.aliases);
    

    this.profileForm.reset();
    

  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  onUpdate(): void {
    this.profileForm.patchValue({
      firstName: 'Elias',
      lastName: 'Salomão',
    })
  }

  addAlias(): void {
    this.aliases.push(this.formBuilder.control(''));
  }

}
