import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit{

  title = "form-rx";

  registerForm !: FormGroup;

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({

      lastname : ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      firstname : ["", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],

      email : ["", [
        Validators.required,
        Validators.email
      ]],

      password : ["", [
        Validators.required, 
        Validators.minLength(6),
        Validators.maxLength(10),  
      ]],

      confirmPassword : ["", [
        Validators.required,

      ]],

      // phone : ["", [
      //   Validators.required,
      //   Validators.minLength(9),
      //   Validators.maxLength(10),
      //   Validators.pattern('^[0-9]*$')       
      // ]],

      phones : this.formBuilder.array ([]),
  
      terms: ['', [
        Validators.requiredTrue
      ]]
    });

    this.addPhone();
  }

    get lastname() {
      return this.registerForm.get('lastname');
    }

    get firstname() {
      return this.registerForm.get('firstname');
    }
  
    // get phone() {
    //   return this.registerForm.get('phone');
    // }

    get phones() {
      return this.registerForm.get('phones') as FormArray;
    }
  
  
    get email() {
      return this.registerForm.get('email');
    }
  
    get password() {
      return this.registerForm.get('password');
    }

    get confirmPassword() {
      return this.registerForm.get('confirmPassword');
    }

    get terms() {
      return this.registerForm.get('terms');
    }


    addPhone() {
      let phone = this.formBuilder.group({
        phonePrefix: '+33',
        phoneNumber: ['', [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$')
        ]]
      });

  if(this.phones.length < 3)
    this.phones.push(phone); // 0 => phone // 1 => ph

    console.log(this.phones);
  }

  getPhoneNumber(index: number) {
    return this.phones.controls[index].get('phoneNumber');
  }

  getPhonePrefix(index: number) {
    return this.phones.controls[index].get('phonePrefix');
  }

  deletePhone(index: number) {
    this.phones.removeAt(index); // Supprime là (index) 0...n
  }

  submit() {
    if (!this.registerForm.valid) {
      alert('! Attention ! Form is invalid')
      return;
    }

    alert('Success');
  }
  
}
