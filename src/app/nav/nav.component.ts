import { Component, OnInit } from '@angular/core';
import {GlobalProvider}  from '../globalprovider';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public global:GlobalProvider) { }

  ngOnInit() {
  }

}
