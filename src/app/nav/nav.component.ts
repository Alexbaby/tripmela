import { Component, OnInit } from '@angular/core';
import { GlobalProvider}  from '../globalprovider';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public global:GlobalProvider,private CookieService: CookieService) { 
   
  }

  ngOnInit() {
  
  }

}
