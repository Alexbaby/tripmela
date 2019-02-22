import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { FormsModule } from '@angular/forms';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { RouterModule}  from '@angular/router';
import {HttpClient} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HttpClient,
    LoginSignupComponent,
    SignupLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,

  
    // ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
