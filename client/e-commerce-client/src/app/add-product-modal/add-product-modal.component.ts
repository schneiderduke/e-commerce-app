import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomizeProductsService } from '../customize-products/customize-products.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit {
  postProductForm: FormGroup;
  products: Product[];
  data: any;
  constructor(public snackBar: MatSnackBar, private fb: FormBuilder, private custProdService: CustomizeProductsService) { }

  ngOnInit(): void {
    this.postProductForm = this.fb.group({
      productTitle: '',
      productImgPath: '',
      productDescription: '',
      productPrice: '',
      productType: ''
    });
  }
  addProduct() {
    const tempProduct = {
      title: this.postProductForm.get('productTitle').value,
      description: this.postProductForm.get('productDescription').value,
      price: this.postProductForm.get('productPrice').value,
      imgPath: this.postProductForm.get('productImgPath').value,
      productType: this.postProductForm.get('productType').value
    }
    this.custProdService.postProduct(tempProduct).subscribe( res => {
      this.getProducts();
      this.snackBar.open('Product Added');
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
