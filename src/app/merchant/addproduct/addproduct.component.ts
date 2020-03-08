import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpUploadProgressEvent } from '@angular/common/http';
import { Product } from 'src/app/app.product';
import { Router } from '@angular/router';
// import { ProductdetailsComponent } from '../productdetails/productdetails.component';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  loadAPI: Promise<any>;
  imgUrl: string = "assets/images/icon.png ";
  fileToUpload: File = null;
  
  constructor(private adminservice: AdminService, private fb: FormBuilder,
     private http: HttpClient,private router:Router) {

  }

  handleFileInput(event) {
    console.log(event);
    this.fileToUpload = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imgUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }







  uploadImage() {
    console.log("ok got it");
    const fd = new FormData();
  
    fd.append("image", this.fileToUpload, this.fileToUpload.name)
    this.http.post<any>("http://localhost:8080/upload", fd).subscribe(data => {

      let response: any = data;

      console.log(response.iname);
      console.log(response.action);
      console.log(data.toString);
    })

  }

  onCLickValue(productForm:Product) {
    console.log("ok got it");
    const fd = new FormData();
  
    fd.append("image", this.fileToUpload, this.fileToUpload.name)
    this.http.post<any>("http://localhost:8080/product/upload", fd).subscribe(data => {
      let response: any = data;
      console.log(response.iname);
      console.log(response.action);
      console.log(data.toString);
      productForm.image= response.iname;
      productForm.review = 0;
      this.http.post<any>('http://localhost:8080/product', productForm).subscribe(data => {
      alert(data.status);
      console.log(data);
    });
    })
    
    
  }

  ngOnInit() {
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





}
