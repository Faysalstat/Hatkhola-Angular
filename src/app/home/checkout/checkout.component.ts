import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  loadAPI: Promise<any>;
  dynamicScripts:string[] =  [
    "assets/js/vendor/modernizr-2.8.3.min.js",
    "assets/js/vendor/jquery-1.12.4.min.js",
    "assets/js/popper.min.js",
    "assets/js/bootstrap.min.js",
    "assets/js/plugins.js",
    "assets/js/main.js",
    "assets/js/tinyslide.js",
    // "https://maps.googleapis.com/maps/api/js?key=AIzaSyBmGmeot5jcjdaJTvfCmQPfzeoG_pABeWo"
    
 ]
  constructor( private service: ServiceService) {

  }
  
  ngOnInit(){
    this.loadAPI = new Promise((resolve) => {
      this.service.loadScript(this.dynamicScripts);
      resolve(true);
  });
  }

}
