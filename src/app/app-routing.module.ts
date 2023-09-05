import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {BillComponent} from "./bill/bill.component";
import {FullBillComponent} from "./full-bill/full-bill.component";
import {AuthGuard} from "./guards/security.guard";

const routes: Routes = [
  {path: "products", component: ProductsComponent, canActivate : [AuthGuard], data :{'roles':['ADMIN']}},
  {path: "customers", component: CustomersComponent, canActivate : [AuthGuard], data :{'roles':['ADMIN']}},
  {path: "bills/:customerId", component: BillComponent, canActivate : [AuthGuard], data :{'roles':['ADMIN']}},
  {path: "bills/fullBill/:billId", component: FullBillComponent, canActivate : [AuthGuard], data :{'roles':['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
