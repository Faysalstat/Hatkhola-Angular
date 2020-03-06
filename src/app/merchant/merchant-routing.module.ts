import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantComponent } from './merchant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {path:'merchant',component: MerchantComponent , children:
[
  {path:'',component:DashboardComponent},
  {path:'addproduct',component:AddproductComponent},  
  {path:'order',component:OrdersComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
