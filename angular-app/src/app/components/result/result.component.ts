import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  selectedItem = "";

  @Input() list: string[] = []
  @Output() itemSelected = new EventEmitter<string>();

  public constructor(){
    //
  }
  ngOnInit(): void {
    //
  }

  setSelectedItem(item: string){
    console.log('Item selected: ', item);
    this.selectedItem = item;
    this.itemSelected.emit(item);
  }
}
