import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';
import { DeleteProductModalComponent } from '../delete-product-modal/delete-product-modal.component';
import { Product } from '../product/product.model';
import { CustomizeProductsService } from './customize-products.service';

@Component({
  selector: 'customize-products',
  templateUrl: './customize-products.component.html',
  styleUrls: ['./customize-products.component.scss']
})
export class CustomizeProductsComponent {
  postProductForm: FormGroup;
  products: Product[];
  data: any;
  constructor(public dialog: MatDialog) { }
  addProductModal() {
    const dialogRef = this.dialog.open(AddProductModalComponent, {
      width: '900px',
      data: {}
    });
  }

  deleteProductModal() {
    const dialogRef = this.dialog.open(DeleteProductModalComponent, {
      width: '900px',
      data: {}
    });

  }
}
