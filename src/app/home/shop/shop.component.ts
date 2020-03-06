import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/app.product';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  loadAPI: Promise<any>;
  constructor( 
    private service: ServiceService,
    private http:HttpClient, 
    private home:HomeComponent) {}
  products:Product[];
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
  // cart:Cart;
  ngOnInit(){
    
    this.loadAPI = new Promise((resolve) => {
      this.service.loadScript(this.dynamicScripts);
      resolve(true);
  });
   this.getList();

  }
  getList(){
      this.http.get<Product[]>('http://localhost:8080/productlist').subscribe(data => {
      console.log(data);
       this.products= data;
       console.log(this.products);
    });
  }
  
  setProductForQuickView(product:Product){
    this.home.viewproduct=product;
  }


  addToCart(product:Product){
    this.service.addToCart(product);
  }

}
