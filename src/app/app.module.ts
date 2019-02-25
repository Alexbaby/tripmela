import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { FormsModule } from '@angular/forms';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { RouterModule}  from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CookieService } from 'ngx-cookie-service';
import { TripmelaService } from './tripmela.service';
import { GlobalProvider } from './globalprovider';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginSignupComponent,
    SignupLoginComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    PackagesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,


  
    // ReactiveFormsModule  
  ],
  providers: [GlobalProvider,TripmelaService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
