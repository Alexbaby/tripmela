import { Component, OnInit } from '@angular/core';
import { Router}from '@angular/router';
import { GlobalProvider}from '../globalprovider';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private globalprovider:GlobalProvider) { }
  homeId=0;
  ngOnInit() {
         
  }

}
