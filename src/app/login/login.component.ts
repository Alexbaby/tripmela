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

  constructor(private router: Router, private TripmelaService: TripmelaService, private CookieService: CookieService, public globalprovider: GlobalProvider, private http: HttpClient) { }


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

  accesstoken(authtoken) {

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
          console.log("token", response.data.access_token);
          console.log('name:', response.data.name);
          this.CookieService.set('username:',response.data.name);
          this.CookieService.set('accesstoken:', response.data.access_token);
          if (this.CookieService.check('accesstoken')) {
            this.globalprovider.Guest = false;
            console.log("Username:" + this.globalprovider.username);
          } else {
            this.globalprovider.Guest = true;
          }
          let at = this.CookieService.get('accesstoken');
          console.log('AccessTn:' + at);
        
        },
        (err) => {
          console.log('error', err);
        }
      );
  }

}
