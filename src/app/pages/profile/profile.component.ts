import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  attributes: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    Auth.signOut().then( () => {
      this.router.navigate(['/']);
    }).catch( err => {
      alert(err.message || JSON.stringify(err));
    })
  }

  getAttributes(): void {
    Auth.currentUserInfo().then( user => {
      this.attributes = user.attributes;
      // alert(JSON.stringify(this.attributes));
    }).catch( err => {
      alert(err.message || JSON.stringify(err));
    })
  }

}
