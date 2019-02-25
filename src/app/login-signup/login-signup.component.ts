import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '../models/login';
import { TripmelaService } from '../tripmela.service';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor(private router: Router, private TripmelaService: TripmelaService) { }


  ngOnInit() {

  }
  // login model
  login: login = {
    username: "",
    password: ""
  }
  // id = 0;
  // login function of user
<<<<<<< HEAD
    login_info(login) {
    console.log("logged user data",login);
=======
  login_info(login) {
    console.log("logged user data", login);
    this.TripmelaService.authorise(login);  
>>>>>>> dev-2

  }
}
