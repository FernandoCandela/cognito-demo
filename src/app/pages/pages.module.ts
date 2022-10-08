import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddSiniestroComponent } from './siniestros/add-siniestro/add-siniestro.component';
import { EditSiniestroComponent } from './siniestros/edit-siniestro/edit-siniestro.component';
import { ViewSiniestroComponent } from './siniestros/view-siniestro/view-siniestro.component';
import { ListSiniestroComponent } from './siniestros/list-siniestro/list-siniestro.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    SignupComponent,
    AddSiniestroComponent,
    EditSiniestroComponent,
    ViewSiniestroComponent,
    ListSiniestroComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    TranslateModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatNativeDateModule,
    FormsModule
  ],
  exports: [
    SignupComponent,
    EditSiniestroComponent,
    ViewSiniestroComponent,
    ListSiniestroComponent,
    LoginComponent,
    ProfileComponent
  ],
})
export class PagesModule {}
