import { Component } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {
  public tooltip = Math.random() < 0.5 ? "Type something?" : "Look up something..."

  search(): void {
    alert("Searching...")
  }
}
