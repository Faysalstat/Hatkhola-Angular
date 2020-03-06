import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  dynamicScripts:string[];
  // dynamicScripts =  [
  //   "assets/dashboard/lib/chart-master/Chart.js",
  //   "assets/dashboard/lib/jquery/jquery.min.js",
  //   "assets/dashboard/lib/bootstrap/js/bootstrap.min.js",
  //   "assets/dashboard/lib/jquery.dcjqaccordion.2.7.js",
  //   "assets/dashboard/lib/jquery.scrollTo.min.js",
  //   "assets/dashboard/lib/jquery.nicescroll.js",
  //   "assets/dashboard/lib/jquery.sparkline.js",
  //   "assets/dashboard/lib/common-scripts.js",
  //   "assets/dashboard/lib/gritter/js/jquery.gritter.js",
  //   "assets/dashboard/lib/gritter-conf.js",
  //   "assets/dashboard/lib/sparkline-chart.js",
  //   "assets/dashboard/lib/zabuto_calendar.js"];

  public loadScript(extscript:string[]) {  
    var  dynamicScripts = extscript;   
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
