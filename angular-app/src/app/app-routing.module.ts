import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout-area/home/home.component';
import { ProductsListComponent } from './components/products-area/products-list/products-list.component';
import { AboutComponent } from './components/about-area/about/about.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "prodcucts", component: ProductsListComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
