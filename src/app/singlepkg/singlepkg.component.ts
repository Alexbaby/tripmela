import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TripmelaService } from '../tripmela.service';

@Component({
  selector: 'app-singlepkg',
  templateUrl: './singlepkg.component.html',
  styleUrls: ['./singlepkg.component.css']
})
export class SinglepkgComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private TripmelaService: TripmelaService, private activeroute: ActivatedRoute) { }


  ngOnInit() {

                console.log('id get here');
                this.activeroute.params.subscribe(paramsId => {
                  let id = paramsId; 
                  console.log('pkg id:'+id);
                  this.TripmelaService.singlepkgview(id)
                    .subscribe(
                                  (Response:any) => {
                                    console.log('pkg details', Response);
                                    let data = Response.data.data;
                                   

                                  },
                            (err) => {
                                  console.log('error', err);
                                    }
                             );

                                                             });

              }
             

            }
