import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PackagesComponent } from './packages/packages.component';
import { GalleryComponent } from './gallery/gallery.component';
import {SinglepkgComponent} from './singlepkg/singlepkg.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'login', component: LoginComponent }
    ]
  },

  { path: 'about', component: AboutComponent },
  { path: 'packages', component: PackagesComponent },
  { path:'singlepkg/:id',component: SinglepkgComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
