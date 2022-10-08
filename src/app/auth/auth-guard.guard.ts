import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Auth from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    return new Promise( (resolve) => {
      Auth.currentAuthenticatedUser({bypassCache: false}).then( () => {
        this.router.navigate(['/profile']);
        resolve(false);
      }).catch( () => {
        resolve(true);
      })
    })
  }
}
