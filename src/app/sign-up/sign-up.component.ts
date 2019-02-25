import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from '../models/register';
import { TripmelaService } from '../tripmela.service';


@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router, private TripmelaService: TripmelaService) { }
  //  id = 1;
   register: register = {
    name: '',
    email: '',
    phone: '',
    password: ''

  };

  username;
  emailvallidation;
  userphone;
  pass1;
  pass2;
  emailchk;

  errors = {

    username: {
      name_error: 'pleasse enter the name',
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
    this.TripmelaService.signup(data)
      .subscribe(
        (Response) => {
          console.log(Response);
          alert('succefully registered');
          this.router.navigate(['login-signup']);
        },
        (err) => {
          console.log("error", err);
        }
      )
  }
}





