import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

// export const AppRoutes: Routes = [
//   {path: '', redirectTo: "/home", pathMatch: "full"},
//   {path: 'list-orders', component: PageListOrdersComponent},
//   {path: 'orders/add', component: PageAddOrderComponent},
//   {path: 'home', component: HomeComponent},
//   {path: '**', component: PageNotFoundComponent},
// ]

const routes: Routes = [
  {path: '', redirectTo: 'orders', pathMatch: 'full'},
  {
    path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: []
})
export class AppRoutingModule {

}
