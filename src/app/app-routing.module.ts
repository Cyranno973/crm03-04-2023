import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from "@angular/router";
import {PageListOrdersComponent} from "./orders/pages/page-list-orders/page-list-orders.component";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const AppRoutes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: 'list-orders', component: PageListOrdersComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: []
})
export class AppRoutingModule {

}
