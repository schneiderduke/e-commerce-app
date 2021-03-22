import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { Products } from './products.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Products;
  data: any;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): any {
    this.productsService.getProducts().subscribe((res => {
      this.data = res;
      this.products = this.data.products;
      console.log(this.products);
    }))
  }
}
