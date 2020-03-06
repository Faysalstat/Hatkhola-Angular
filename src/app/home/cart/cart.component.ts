import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cart } from 'src/app/app.product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  loadAPI: Promise<any>;
  cartlist:Cart[];
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
  constructor( private service: ServiceService,private http:HttpClient) {

  }
  
  ngOnInit(){
    this.loadAPI = new Promise((resolve) => {
      this.service.loadScript(this.dynamicScripts);
      resolve(true);
  });
    this.getList();
  }

  getList(){
    let params = new HttpParams().set("userid",this.service.user.id)
    this.http.get<any>('http://localhost:8080/cart',{params: params}).subscribe(data => {
    console.log(data);
    this.cartlist= data;
    console.log(this.cartlist);
  });
}

}
