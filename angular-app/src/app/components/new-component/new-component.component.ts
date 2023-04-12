import { Component, OnInit, Output } from '@angular/core';

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
  @Output() selectedItem = "";

  public constructor() {
    //
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private doSearch(): string[] {
    let arr = [];
    for(let i = 0; i < 10; i++){
      // we will be pushing 10 searchWords (will be defined as input.values inside html)
      arr.push(this.searchWord + ' ' + i);
    }
    return arr;
  }

  search() {
    // set result as an empty arr
    this.results = [];
    this.isBusy = true;

    setTimeout(() => {
      // the return result of doSearch() function will be returned as result.push
      this.results = this.doSearch();
      this.isBusy = false;
    }, 3000);
  }

  setSelectedFromResult(item: string){
    this.selectedItem = item;
  }

}
