import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customize-products',
  templateUrl: './customize-products.component.html',
  styleUrls: ['./customize-products.component.scss']
})
export class CustomizeProductsComponent implements OnInit {
  showAddProduct: boolean = false;
  showDeleteProduct: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddProductView() {
    this.showAddProduct = !this.showAddProduct;
    console.log(this.showAddProduct)
  }

  toggleDeleteProductView() {
    this.showDeleteProduct = !this.showDeleteProduct;
    console.log(this.showDeleteProduct)
  }
}
