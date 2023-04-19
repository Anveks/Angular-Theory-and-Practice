import { Component } from '@angular/core';
import { GalleryImagesComponent } from './components/gallery-images/gallery-images.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  selectedPath="1.jpg";
  arr: GalleryImagesComponent[] = [];

  constructor(){
    let p1: GalleryImagesComponent = new GalleryImagesComponent();

    p1.path = "2.jpg";
    this.arr.push(p1);

    p1 = new GalleryImagesComponent();
    p1.path = "3.jpg";
    this.arr.push(p1);
  }

  selectedPic(path:string){
    this.selectedPath = path;
  }

  index = 0;
  t: any;

  changePic(){
    this.t = setInterval(() => {
      this.selectedPath = this.arr[this.index++ % this.arr.length].path;
    }, 1000);
  }

  stopChangePic(){
    clearInterval(this.t);
  }
}
