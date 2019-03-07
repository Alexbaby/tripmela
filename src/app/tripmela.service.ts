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
  errors;

  constructor(private router: Router, private http: HttpClient, private CookieService: CookieService, public global: GlobalProvider) { }

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
    return this.http.post(url, body, httpOptions);

  }

  dispalyPkg() {
    console.log('dispaly pkg');
    let url = "api/trip/list_packages";
    return this.http.get(url);

  }
  singlepkgview(id) {
    console.log('inside this singlepkgview', id);
    let url = `api/trip/view_package?id=${id}`;
    console.log('url', url);
    return this.http.get(url);
  }


}

