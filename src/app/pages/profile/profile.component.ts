import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  attributes: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.setMessage('Logged');
  }

  onLogout(): void {
    Auth.signOut()
      .then(() => {
        this.setMessage('noLogged');
        this.router.navigate(['/']);
      })
      .catch((err) => {
        alert(err.message || JSON.stringify(err));
      });
  }

  getAttributes(): void {
    Auth.currentUserInfo()
      .then((user) => {
        this.attributes = user.attributes;
        if (this.authService.isAdmin()) {
          this.attributes.rol = 'Admin';
        } else {
          this.attributes.rol = 'User';
        }
      })
      .catch((err) => {
        alert(err.message || JSON.stringify(err));
      });
  }

  setMessage(value: string): void {
    this.storageService.setStorageItem({
      key: 'message',
      value,
      storageArea: 'sessionStorage',
    });
  }
}
