import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { HttpClient } from '@angular/common/http';
import { User } from './app.product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hatkholafinal';
  loadAPI: Promise<any>;
  user:User;
  constructor( private service: ServiceService,private http:HttpClient) {
  }
  
  ngOnInit(){}

  getCustomer(){
    this.http.get<User>('http://localhost:8080/getUser').subscribe(data => {
      // console.log(data);
       this.user= data;
       console.log(this.user);
    });
  }

}
