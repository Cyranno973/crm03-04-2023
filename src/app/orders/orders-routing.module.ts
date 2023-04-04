import {NgModule} from '@angular/core';
import {Routes} from "@angular/router";
import {PageListOrdersComponent} from "./pages/page-list-orders/page-list-orders.component";
import {PageEditOrderComponent} from "./pages/page-edit-order/page-edit-order.component";
import {PageAddOrderComponent} from "./pages/page-add-order/page-add-order.component";

export const routes: Routes = [
  {path: 'orders', component: PageListOrdersComponent},
  {path: 'orders/add', component: PageAddOrderComponent},
  {path: 'orders/edit/:id', component: PageEditOrderComponent}
]

@NgModule({
  declarations: [],
  imports: []
})
export class OrdersRoutingModule {
}
