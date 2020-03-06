import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

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
