import { Component, OnInit } from '@angular/core';
import { ShopComponent } from 'src/app/home/shop/shop.component';
import { Product } from 'src/app/app.product';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private http:HttpClient,private adminservice:AdminService) { }
  products:Product[];
  loadAPI: Promise<any>;
  ngOnInit() {
    this.getList();
    var dynamicScripts = [
      // "assets/dashboard/lib/chart-master/Chart.js",
      "assets/dashboard/lib/jquery/jquery.min.js",
      "assets/dashboard/lib/bootstrap/js/bootstrap.min.js",
      // "assets/dashboard/lib/jquery.dcjqaccordion.2.7.js",
      // "assets/dashboard/lib/jquery.scrollTo.min.js",
      // "assets/dashboard/lib/jquery.nicescroll.js",
      "assets/dashboard/lib/jquery.sparkline.js",
      "assets/dashboard/lib/common-scripts.js",
      "assets/dashboard/lib/gritter/js/jquery.gritter.js",
      "assets/dashboard/lib/gritter-conf.js",
      // "assets/dashboard/lib/sparkline-chart.js",
      // "assets/dashboard/lib/zabuto_calendar.js"
    ];
    this.loadAPI = new Promise((resolve) => {
      this.adminservice.loadScript(dynamicScripts);
      resolve(true);
    });
  }

  getList(){
    this.http.get<Product[]>('http://localhost:8080/productlist').subscribe(data => {
      // console.log(data);
       this.products= data;
       console.log(this.products);
    })
  }

}
