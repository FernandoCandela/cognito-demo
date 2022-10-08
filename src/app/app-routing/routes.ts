import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.guard';
import { ProfileGuardGuard } from '../auth/profile-guard.guard';
import { LoginComponent } from '../pages/login/login.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { SignupComponent } from '../pages/signup/signup.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate:[ProfileGuardGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard]  },
  // { path: 'create', component: AddSiniestroComponent, canActivate:[ProfileGuardGuard]},
  // { path: 'view/:id', component: ViewSiniestroComponent, canActivate:[ProfileGuardGuard]},
  // { path: 'list', component: ListSiniestroComponent, canActivate:[ProfileGuardGuard] },
  // { path: 'edit/:id', component: EditSiniestroComponent, canActivate:[ProfileGuardGuard]},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];
