import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import { MerchantComponent } from './merchant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [MerchantComponent, DashboardComponent, AddproductComponent, OrdersComponent],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    FormsModule
  ]
})
export class MerchantModule { }
