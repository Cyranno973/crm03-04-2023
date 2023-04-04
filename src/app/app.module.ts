import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {OrdersModule} from "./orders/orders.module";
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    OrdersModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-Fr'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private route: Router) {
    console.log(route.config)
  }
}
