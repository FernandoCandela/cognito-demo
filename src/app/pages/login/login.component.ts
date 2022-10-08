import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    var credentials = {
      username: this.email,
      password: this.password
    }
    Auth.signIn(credentials).then( data => {
      this.router.navigate(['/profile']);
    })
    .catch(err => {
      alert(err.message || JSON.stringify(err));
    })
  }

  onLoginGoogle(): void {
    Auth.federatedSignIn({customProvider: 'Google'})
  }

}
