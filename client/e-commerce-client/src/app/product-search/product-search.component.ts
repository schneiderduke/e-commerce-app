import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  @ViewChild('productSearch') input; 
  productSearch: ElementRef;
  constructor() { }

  ngOnInit(): void {
    
  }

  filter(value) {
    console.log(value);
  }
}
