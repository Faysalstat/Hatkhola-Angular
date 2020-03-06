import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Product } from 'src/app/app.product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  

  loadAPI: Promise<any>;
  product:Product;
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
  arrayOne(n: number): any[] {
    return Array(n);
  }
  constructor( private service: ServiceService) {

  }
  
  ngOnInit(){
    this.loadAPI = new Promise((resolve) => {
      this.service.loadScript(this.dynamicScripts);
      resolve(true);
  });
  }

}
