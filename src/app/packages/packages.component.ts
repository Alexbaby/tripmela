import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TripmelaService } from '../tripmela.service';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient,private TripmelaService: TripmelaService) { }

  ngOnInit() {
    this.packages();
  }
  pkg;
  packages(){
    console.log('inside this packages');
    this.TripmelaService.dispalyPkg()
    .subscribe(
      (Response:any)=>{
        console.log('data:',Response);
        this.pkg = Response.data;
      }
    )
  }
}
