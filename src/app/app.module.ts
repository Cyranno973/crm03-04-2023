import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './core/components/header/header.component';
import {AsideComponent} from './core/components/aside/aside.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {PageListOrdersComponent} from './orders/pages/page-list-orders/page-list-orders.component';
import {Router, RouterModule} from "@angular/router";
import {AppRoutes} from "./app-routing.module";
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    PageListOrdersComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private route: Router) {
    console.log(route.config)
  }
}
