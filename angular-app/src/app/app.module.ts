import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/new-component/new-component.component';
import { ResultComponent } from './components/result/result.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryImagesComponent } from './components/gallery-images/gallery-images.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    GalleryComponent,
    GalleryImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
