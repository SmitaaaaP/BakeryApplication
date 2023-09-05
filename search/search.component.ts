import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  enterProductName: string = '';
  
  @Output()
  searchByCategory: EventEmitter<string> = new EventEmitter<string>();

  searchProduct(){
    this.searchByCategory.emit(this.enterProductName);
  }

  reset(){
    this.enterProductName = "";
    this.searchByCategory.emit(this.enterProductName);
  }

  constructor() { }

  ngOnInit(): void { }

}
