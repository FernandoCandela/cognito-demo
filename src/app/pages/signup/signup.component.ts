import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email!: string;
  password!: string;
  userName!: string;
  nickname!: string;

  verifying: boolean = false;
  verifyCode!: string;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    const user = {
      username: this.email, // OJO es el email
      password: this.password,
      attributes: {
        email: this.email,
        given_name: this.userName,
        nickname: this.nickname
      }
    }
    Auth.signUp(user).then( data => {
      this.verifying = true;
      alert("te hemos enviado un correo con el código de activación");
    }).catch( err => {
      alert(err.message || JSON.stringify(err))
    });
  }

  onVerify(): void {
    Auth.confirmSignUp(this.email, this.verifyCode, {forceAliasCreation: true}).then( data => {
      this.verifying = false;
      alert("tu correo ha sido verificado");
      this.router.navigate(['']);
    })
    .catch( err => {
      alert(err.message || JSON.stringify(err))
    });
  }
}
