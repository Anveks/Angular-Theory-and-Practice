import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-images',
  templateUrl: './gallery-images.component.html',
  styleUrls: ['./gallery-images.component.css']
})
export class GalleryImagesComponent {
  @Input() path="../../../assets/images/1.jpg";

  constructor() { }

  ngOnInit(): void {
  }
}
