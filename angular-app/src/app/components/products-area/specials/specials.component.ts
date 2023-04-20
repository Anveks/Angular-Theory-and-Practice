import { Component } from '@angular/core';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent {

  public price: number = 50;

  public style = {
    color: Math.random() < 0.5 ? "red" : "green"
  };

  public isWeekend(): boolean {
    const now = new Date();
    const day = now.getDay() + 1;
    return day >= 6;
  }
}
