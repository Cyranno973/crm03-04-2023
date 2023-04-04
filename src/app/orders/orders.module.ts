import {NgModule} from '@angular/core';
import {PageAddOrderComponent} from "./pages/page-add-order/page-add-order.component";
import {PageListOrdersComponent} from "./pages/page-list-orders/page-list-orders.component";
import {PageEditOrderComponent} from "./pages/page-edit-order/page-edit-order.component";
import {RouterModule} from "@angular/router";
import {routes} from "./orders-routing.module";
import {SharedModule} from "../shared/shared.module";
import {FormOrderComponent} from './components/form-order/form-order.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    PageAddOrderComponent,
    PageListOrdersComponent,
    PageEditOrderComponent,
    FormOrderComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: []
})
export class OrdersModule {
}
