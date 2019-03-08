import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TripmelaService } from '../tripmela.service';
import { GlobalProvider } from '../globalprovider';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-singlepkg',
  templateUrl: './singlepkg.component.html',
  styleUrls: ['./singlepkg.component.css']
})
export class SinglepkgComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private TripmelaService: TripmelaService, private activeroute: ActivatedRoute,public global: GlobalProvider,private CookieService: CookieService) { }
 
   data = {
            name:" ",
            agency:" ",
            start:" ",
            end:" ",
            rate:" "
         };

   pkg = {
         
         number:"",
         datepicker:""

       };   
       

  ngOnInit() {

                console.log('id get here');
                 this.activeroute.params.subscribe(paramsId => {
                  let id = paramsId; 
                  console.log('pkg id:'+id);
                  this.TripmelaService.singlepkgview(id)
                    .subscribe(
                                  (Response:any) => {
                                    console.log('pkg details', Response);
                                    this.data = Response.data;
                                   

                                  },
                            (err) => {
                                  console.log('error', err);
                                    }
                             );

                                                  });

              }

              countchange(e)
              {
                    console.log('inside this count change',e);
                    let selectedItem;
                    selectedItem = e.target.value;
                    console.log(' changed value',selectedItem);                
              }
              
              beforeConirm(data)
              { 
                 console.log('inside  beforeConirm',data);

               let pkgdata = {
                                number :data.number,
                                date: data.datepicker
                             }

                            localStorage.setItem('number:',pkgdata.number);
                            localStorage.setItem('date:',pkgdata.date);
                
              
                 let uname = this.global.username
                
                if(uname!='')
                {
                  this.router.navigate(['/pkgConfirmation']);
                 
                }

                if(uname =='')
                {
                      alert('login first');
                      this.router.navigate(['/login']);
                }

             

          
                  

               
              }
             

            }
