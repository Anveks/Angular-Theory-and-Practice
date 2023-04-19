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
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //
  ],
  bootstrap: [
    LayoutComponent
  ]
})
export class AppModule { }
