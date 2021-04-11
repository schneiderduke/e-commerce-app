import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomizeProductsService } from '../customize-products/customize-products.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-delete-product-modal',
  templateUrl: './delete-product-modal.component.html',
  styleUrls: ['./delete-product-modal.component.scss']
})
export class DeleteProductModalComponent implements OnInit {
  data: any;
  products: Product[]
  constructor(public snackBar: MatSnackBar, private fb: FormBuilder, private custProdService: CustomizeProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  deleteProduct(id: string) {
    this.custProdService.deleteProduct(id).subscribe( res => {
        this.getProducts();
        this.snackBar.open('Product Deleted');
      }
    );
  }
  getProducts() {
    this.custProdService.getProducts().subscribe((res => {
      this.data = res;
      this.products = this.data;
    }))
  }
}
