import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from '../models/register';


@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {

  constructor(private router: Router) { }
  id = 1;
  register: register = {
    name: '',
    email: '',
    phone: '',
    password1: '',
    password2: ''
  };
  
  username;
  emailvallidation;
  userphone;
  pass1;
  pass2;
  emailchk;

  errors = {

        username:{
                     name_error:'pleasse enter the name',
                 },

          email: { 
                    email_not_valid: 'not a valid email',             
                 },

        password: {
                    password_error: 'password mis match'
                  }
           };

  ngOnInit() {

  }

  Register(data) {

  console.log(data);
  this.username = data.username;
  if(this.username!=null){
    
  }
  this.emailvallidation = data.email;
  if(!this.emailvallidation.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/)){
    this.errors.email.email_not_valid;
  }
  this.pass1 = data.password1;
  this.pass2 = data.password2;
  if(this.pass1 != this.pass2){
    this.errors.password.password_error;
  }
   
    }



  }





