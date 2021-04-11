import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product/product.model';
import { Products } from './products.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  data: any;
  productsFilter: string;
  productsLoaded: boolean = false;
  @Input()
  apis: any;
  constructor(private productsService: ProductsService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getApis().subscribe(res => {
      Object.keys(res).forEach(key => {
        if (key === 'products') {
          this.getProducts(res[key]);
        }
      });
    })
  }

  getProducts(apiLink: any): any {
    this.productsService.getProducts(apiLink).subscribe((res => {
      this.data = res;
      this.products = this.data;
      this.productsLoaded = true;
    }))
    
  }
  
  receiveFilter(filter: string): any {
    this.productsFilter = filter;
  }
}
