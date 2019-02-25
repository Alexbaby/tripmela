import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PackagesComponent } from './packages/packages.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  
  
  { path: 'login-signup', component: LoginSignupComponent },
  { path: 'signup-login',component:SignupLoginComponent },
  { path: '', redirectTo: '/login-signup', pathMatch: 'full' },
  { path: '**', component: LoginSignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'packages', component:PackagesComponent},
  { path:'gallery',component:GalleryComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
