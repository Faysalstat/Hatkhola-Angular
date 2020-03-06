import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Product, Cart } from '../app.product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // loadAPI: Promise<any>;
  viewproduct:Product;
  cart:Cart;
  cartproduct:Product;
  constructor( private service: ServiceService) {
  // this.viewproduct= new Product();
  }
  
  ngOnInit(){
    // console.log(this.viewproduct);
  }

  addToCart(product:Product){
    this.service.addToCart(product);
  }

}
