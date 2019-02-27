import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalProvider } from '../globalprovider';
import { TripmelaService } from '../tripmela.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private globalprovider: GlobalProvider, private TripmelaService: TripmelaService) { }

  pkg;
  ngOnInit() {
    this.dispalyPkg();
  }

  dispalyPkg() {
    this.TripmelaService.dispalyPkg()
      .subscribe(
        (Response: any) => {
          console.log('data', Response);
          this.pkg = Response.data;
          console.log('pkg',this.pkg);
        },
        (err) => {
          console.log('error', err);
        }
      );
  }
}
