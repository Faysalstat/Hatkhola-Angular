import { Injectable } from '@angular/core';
import { Product, Cart, User, Wishlist } from './app.product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    user:User =  new User();
    cartlist:Cart[];
  constructor(private http:HttpClient) {
    this.user.id=1;
    this.user.customerId="u00001";
    this.user.customerName="Faysal Ahmad";
    this.user.contactNo="01751247982";
    this.user.email = "faysalstat04@gmail.com";
  }
  
  ngOnInit(){

  }


  // Cart
  addToCart(product:Product){
    let cart:Cart = new Cart();
    cart.product=product;
    cart.customer = this.user;
    cart.quantity=1;
    console.log(cart);
    this.http.post<any>("http://localhost:8080/cart",cart).subscribe(data => {
    let response:any = data;
    alert(data.status);
    });
    // this.cartControll.addToCart(prod);
  }
   // WishList
   addToWishList(product:Product){
    let wish:Wishlist = new Wishlist();
    wish.product=product;
    wish.customer = this.user;
    console.log(wish);
    this.http.post<any>("http://localhost:8080/wishlist",wish).subscribe(data => {
    let response:any = data;
    alert(data.status);
    });
    // this.cartControll.addToCart(prod);
  }
  
  public loadScript(dynamicScripts:string[]) {        
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }
  
    if (!isFound) {
        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }
  
    }
  }
}
