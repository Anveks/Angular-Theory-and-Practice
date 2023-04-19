import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() path="../../../assets/images/1.jpg";

  constructor() { }

  ngOnInit(): void {
  }
}
