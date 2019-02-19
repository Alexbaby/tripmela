import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';

const routes: Routes = [
  
  
  { path: 'login-signup', component: LoginSignupComponent },
  { path: 'signup-login',component:SignupLoginComponent },
  { path: '', redirectTo: '/login-signup', pathMatch: 'full' },
  { path: '**', component: LoginSignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
