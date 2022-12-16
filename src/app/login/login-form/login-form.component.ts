import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

actionEcouteur(){
  alert('Connexion réussie');
 
}
  // validateEmail(email: EmailValidator) {
  //   console.log(email) 
  // }

  // this.router.naviguateByUrl('');
}
