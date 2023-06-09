import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/new-component/new-component.component';
import { ResultComponent } from './components/result/result.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryImagesComponent } from './components/gallery-images/gallery-images.component';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/layout-area/home/home.component';
import { SearchComponentComponent } from './components/layout-area/search-component/search-component.component';
import { FormsModule } from '@angular/forms';
import { SpecialsComponent } from './components/products-area/specials/specials.component';
import { ProductsListComponent } from './components/products-area/products-list/products-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { LocationComponent } from './components/home-area/location/location.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/products-area/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    GalleryComponent,
    GalleryImagesComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    SearchComponentComponent,
    SpecialsComponent,
    ProductsListComponent,
    AboutComponent,
    LocationComponent,
    ProductDetailsComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //
  ],
  bootstrap: [
    LayoutComponent
  ]
})
export class AppModule { }
