import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  @ViewChild("myLocation")
  public myLocationRef: ElementRef<HTMLSelectElement>;

  public display(myLocation: HTMLSelectElement): void{
    alert('location: ' + myLocation.value)
  }

  public show(){
    const myLocation = this.myLocationRef.nativeElement;
    alert(myLocation.value);
  }
}
