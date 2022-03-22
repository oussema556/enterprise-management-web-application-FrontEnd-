import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './containers/auth-page/auth-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';



@NgModule({
  declarations: [
    AuthPageComponent,
    LoginFormComponent,
    ResetPasswordFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
