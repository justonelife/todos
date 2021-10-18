import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserButtonComponent } from './user-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    UserButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    UserButtonComponent
  ]
})
export class UserButtonModule { }
