import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { login } from './models/login';
import { register } from './models/register';

@Injectable({
  providedIn: 'root'
})
export class TripmelaService {

  // login: login[];
  // register: register[];

  constructor(private router: Router, private http: HttpClient) { }

//   signup(data) {
//   console.log('user registration',data);
//   // let url = "api/trip/register";
  
 
// }
}


