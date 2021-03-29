import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  @Output('productSearch') inputToParent = new EventEmitter<string>();
  @ViewChild('productSearch') input; 
  productSearch: ElementRef;
  constructor() { }

  ngOnInit(): void {
    
  }

  filter(value) {
    this.inputToParent.emit(value);
  }
}
