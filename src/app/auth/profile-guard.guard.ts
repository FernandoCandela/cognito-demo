import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Auth } from 'aws-amplify';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    return new Promise( (resolve) => {
      Auth.currentAuthenticatedUser({bypassCache: false}).then( () => {
        resolve(true)
      })
      .catch( () => {
        this.router.navigate(['/']);
        resolve(false);
      })
    });
  }
}
