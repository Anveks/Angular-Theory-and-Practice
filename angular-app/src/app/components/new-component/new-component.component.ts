import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class SearchComponent implements OnInit{

  searchTitle: string = "Search";
  searchWord: string = "";
  isBusy: boolean = false;
  results: any[] = [];

  public constructor() {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private doSearch(): string[] {
    let arr = [];
    for(let i = 0; i < 10; i++){
      arr.push(this.searchWord + ' ' + i);
    }
    return arr;
  }

  search() {
    this.results = [];
    this.isBusy = true;

    setTimeout(() => {
      this.results = this.doSearch();
      this.isBusy = false;
    }, 3000);

  }

}
