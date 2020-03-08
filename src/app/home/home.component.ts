import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Product, Cart } from '../app.product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // loadAPI: Promise<any>;
  viewproduct:Product;
  cartList:Cart[];
  subTotal:number;
  cartproduct:Product;
  constructor( private service: ServiceService,private http:HttpClient) {
  // this.viewproduct= new Product();
  }
  
  ngOnInit(){
    console.log("hello");


  }

  addToCart(product:Product){
    this.service.addToCart(product);
  }

  getCartList(){
    console.log("hello from cart button");
    let uid:string = this.service.user.id.toString();
    console.log(this.service.user.id);
    this.http.get<any>('http://localhost:8080/cart/getCart/'+this.service.user.id).subscribe(data => {
    console.log(data);
    this.cartList= data;
    console.log(this.cartList);
    this.getSubTotal(this.cartList);
  });
}

  

getSubTotal(cartList:Cart[]){
  let total:number=0;
  for(let n of cartList){
    total+=n.product.newPrice;
  }
  this.subTotal=total;
}
}
