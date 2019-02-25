import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { login } from './models/login';
import { register } from './models/register';
import { CookieService } from 'ngx-cookie-service';
import { GlobalProvider } from './globalprovider';

@Injectable({
  providedIn: 'root'
})
export class TripmelaService {

  login: login[];
  register: register[];

  constructor(private router: Router, private http: HttpClient, private CookieService: CookieService, public globalprovider: GlobalProvider) { }

  signup(data) {
    console.log('user registration', data);
    let body = data;
    let url = "api/trip/register";
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(url, body, httpOptions);
  }

  authorise(logindata) {
    console.log('logged user details', logindata);
    let body = JSON.stringify(logindata);
    let url = "api/trip/authorize";
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(url, body, httpOptions)
      .subscribe(
        (Response: any) => {
          console.log('auth code', Response);
          this.accesstoken(Response.data.authorization_code);

        },
        (err) => {
          console.log('error', err);
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
          this.CookieService.set('accesstoken:', response.data.access_token);
          if (this.CookieService.check('accesstoken')) {
            this.globalprovider.Guest = false;
            console.log("Username:" + this.globalprovider.username);
          } else {
            this.globalprovider.Guest = true;
          }

        },
        (err) => {
          console.log('error', err);
        }
      )
  }


}

