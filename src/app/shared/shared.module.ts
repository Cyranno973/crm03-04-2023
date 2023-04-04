import {NgModule} from '@angular/core';
import {TotalPipe} from "./pipe/total.pipe";
import {BtnComponent} from "./components/btn/btn.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [TotalPipe, BtnComponent],
  imports: [RouterModule, CommonModule],
  exports: [TotalPipe, BtnComponent, CommonModule]
})
export class SharedModule {
}
