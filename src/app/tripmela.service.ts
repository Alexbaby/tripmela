import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { HttpHeaders,HttpClient} from '@angular/common/http';
import { register} from './models/register';
import { login} from './models/login'; 

@Injectable({
  providedIn: 'root'
})
export class TripmelaService {

  constructor(private router:Router,private http:HttpClient) { }
 
  register:register[];
  login:login[];



}

