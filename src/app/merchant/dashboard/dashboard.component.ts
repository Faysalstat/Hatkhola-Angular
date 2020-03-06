import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loadAPI: Promise<any>;
  
  constructor( private adminservice: AdminService) {
    
  }
  
  ngOnInit(){
    var dynamicScripts =  [
      "assets/dashboard/lib/chart-master/Chart.js",
      "assets/dashboard/lib/jquery/jquery.min.js",
      // "assets/dashboard/lib/bootstrap/js/bootstrap.min.js",
      // "assets/dashboard/lib/jquery.dcjqaccordion.2.7.js",
      "assets/dashboard/lib/jquery.scrollTo.min.js",
      "assets/dashboard/lib/jquery.nicescroll.js",
      // "assets/dashboard/lib/jquery.sparkline.js",
      "assets/dashboard/lib/common-scripts.js",
      // "assets/dashboard/lib/gritter/js/jquery.gritter.js",
      // "assets/dashboard/lib/gritter-conf.js",
      "assets/dashboard/lib/sparkline-chart.js",
      // "assets/dashboard/lib/zabuto_calendar.js"
    ];
    this.loadAPI = new Promise((resolve) => {
      this.adminservice.loadScript(dynamicScripts);
      resolve(true);
  });
  }

}
