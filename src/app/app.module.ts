import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {OrdersModule} from "./orders/orders.module";
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import localeFr from "@angular/common/locales/fr";
import {registerLocaleData} from "@angular/common";
import {PageListClientsComponent} from './clients/pages/page-list-clients/page-list-clients.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent, PageListClientsComponent],
  imports: [
    CoreModule,
    OrdersModule,
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
}
