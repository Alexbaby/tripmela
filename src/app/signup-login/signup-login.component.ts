import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  id = 1;
 

  
}
