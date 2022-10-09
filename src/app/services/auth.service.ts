import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken(): string | null {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) return null;
      if (key.endsWith(environment.ACCESS_TOKEN) && key.includes(environment.CLIENT_ID)) {
        return localStorage.getItem(key);
      }
    }
    return null;
  }

  public isAdmin(): boolean {
    var token = this.getToken();
    if (token==null) return false;
    var payload = token.split('.')[1]; //header.payload.sign
    var payloadDecoded = atob(payload);
    var values = JSON.parse(payloadDecoded);
    var roles = values[environment.ROLES_FIELD];
    var isAdmin = roles.indexOf('ROLE_ADMIN') < 0 ? false: true;
    return isAdmin;
  }
}
