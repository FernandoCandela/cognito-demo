import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports:[
    NavMenuComponent
  ]
})
export class ComponentsModule { }
