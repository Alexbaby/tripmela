import { Component, OnInit } from '@angular/core';
import { GlobalProvider } from '../globalprovider';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pkg-confirmation',
  templateUrl: './pkg-confirmation.component.html',
  styleUrls: ['./pkg-confirmation.component.css']
})
export class PkgConfirmationComponent implements OnInit {

  constructor(public global: GlobalProvider,private CookieService: CookieService) { }
   pkgData;
   number;
   date;
   ngOnInit() {
                this.selectedpkg(); 
              }

              selectedpkg()
              {
                    console.log('inside this selectedpkg');
                    this.number =  localStorage.getItem('number:');
                    this.date = localStorage.getItem('date:');
                    console.log('values',this.number,this.date);
              }

}
