import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userForm!:FormGroup;
  constructor(private formBuilder: FormBuilder){}
  
  ngOnInit():void{
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      txt: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.userForm?.valid) {
      console.log('Form data:', this.userForm.value);
    }else{
      console.log('ERROR');
    }
  }


}
