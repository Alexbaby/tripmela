import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '../models/login';
import { TripmelaService } from '../tripmela.service';
import { CookieService } from 'ngx-cookie-service';
import { GlobalProvider } from '../globalprovider';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private TripmelaService: TripmelaService, private CookieService: CookieService, public global: GlobalProvider, private http: HttpClient) { }


  ngOnInit() {

  }
  // login model
  login: login = {
    username: "",
    password: ""
  }
  errors;
  loginusername_Error;
  loginpassword_Error

  // login function of user
  login_info(login) {
    console.log("logged user data", login);
    this.TripmelaService.authorise(login)
      .subscribe(
        (Response: any) => {
          console.log('auth code', Response);
          this.accesstoken(Response.data.authorization_code);

        },
        //error functoin of login credentials
        (err) => {
          console.log('error', err);
          this.errors = err.error.errors;
          this.loginusername_Error = this.errors.username;
          this.loginpassword_Error = this.errors.password;
        }
      );

  }

  accesstoken(authtoken){

    console.log("authorization code", authtoken);
    let url = "api/trip/accesstoken";
    let data = { "authorization_code": authtoken };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(url, data, httpOptions)
      .subscribe(
        (response: any) => {
          console.log('accesstoken:=', response);                                         
          this.CookieService.set('accesstoken:', response.data.access_token);
          this.CookieService.set('username:',response.data.name);
          if (this.CookieService.check('accesstoken:')) {
            this.global.Guest = false;
          } else {
            this.global.Guest = true;
          }
          let At = this.CookieService.get('accesstoken:');
          console.log('accessT:'+At);
          let Un = this.CookieService.get('username:');
          this.global.username = Un;
          console.log('cookie Uname:'+Un);
          this.router.navigate(['/home'])
        },
        (err) => {
          console.log('error', err);
        }
        
      );
     
  }
  
}
