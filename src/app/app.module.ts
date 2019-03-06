import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule}  from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CookieService } from 'ngx-cookie-service';
import { TripmelaService } from './tripmela.service';
import { GlobalProvider } from './globalprovider';
import { HttpClientModule} from '@angular/common/http';
import { SinglepkgComponent } from './singlepkg/singlepkg.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignUpComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    PackagesComponent,
    GalleryComponent,
    SinglepkgComponent,
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
