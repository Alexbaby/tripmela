import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import { login} from '../models/login';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor(private router:Router) { }
  

  ngOnInit() {
    
  }
  // login model
  login:login={
    user_email:"",
    user_password:""
  }
   id = 0;
  // login function of user
    login_info(login) {
    console.log("logged user data",login);

  }
}
