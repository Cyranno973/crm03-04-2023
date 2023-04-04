import {NgModule} from '@angular/core';
import {AsideComponent} from "./components/aside/aside.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [AsideComponent, FooterComponent, HeaderComponent],
  imports: [RouterModule, CommonModule, BrowserModule],
  exports: [AsideComponent, HeaderComponent, FooterComponent, CommonModule]
})
export class CoreModule {
}
