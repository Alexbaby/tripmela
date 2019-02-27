import { Component, OnInit } from '@angular/core';
import { GlobalProvider} from '../globalprovider';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private globalprovider:GlobalProvider) { }
  aboutId=1;
  ngOnInit() {
  
  }
 
}
