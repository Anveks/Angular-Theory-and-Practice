import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout-area/home/home.component';
import { ProductsListComponent } from './components/products-area/products-list/products-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsListComponent },
  { path: "about", component: AboutComponent },
  { path: "products/details/:id", component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
