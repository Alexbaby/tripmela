import { Component, OnInit } from '@angular/core';
import { GlobalProvider} from '../globalprovider';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private global:GlobalProvider,private router:Router) { this.global.currentPage='about';
                                                if(!this.global.currentPage){
                                                  this.router.navigate(['/home']);
                                                }
                                              }
   
  
  ngOnInit() {
  
  }
 
}
