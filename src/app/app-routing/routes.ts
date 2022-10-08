import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  // { path: 'profile', component: ProfileComponent},
  // { path: 'signup', component: SignupComponent},
  // { path: 'create', component: AddSiniestroComponent},
  // { path: 'view/:id', component: ViewSiniestroComponent},
  // { path: 'list', component: ListSiniestroComponent, canActivate:[ProfileGuardGuard] },
  // { path: 'edit/:id', component: EditSiniestroComponent, canActivate:[ProfileGuardGuard]},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];
