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

  usernameError;
  passwordError
  phoneError;
  emailError;
  errors;

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
          this.errors = err.error.errors;
          this.usernameError = this.errors.name;
          this.emailError = this.errors.email;
          this.phoneError = this.errors.phone;
          this.passwordError = this.errors.password;
        }
      )
  }
}





