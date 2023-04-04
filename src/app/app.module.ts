import {LOCALE_ID, NgModule} from '@angular/core';
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
import {registerLocaleData} from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import {TotalPipe} from './shared/pipe/total.pipe';
import {BtnComponent} from './shared/components/btn/btn.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    PageListOrdersComponent,
    HomeComponent,
    PageNotFoundComponent,
    TotalPipe,
    BtnComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
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
