import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product/product.model';
import { CustomizeProductsService } from './customize-products.service';

@Component({
  selector: 'customize-products',
  templateUrl: './customize-products.component.html',
  styleUrls: ['./customize-products.component.scss']
})
export class CustomizeProductsComponent implements OnInit {
  showAddProduct: boolean = false;
  showDeleteProduct: boolean = false;
  postProductForm: FormGroup;
  deleteProductForm: FormGroup;
  products: Product[];
  data: any;
  constructor(private custProdService: CustomizeProductsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.postProductForm = this.fb.group({
      productTitle: '',
      productImgPath: '',
      productDescription: '',
      productPrice: '',
      productType: ''
    });

    this.deleteProductForm = this.fb.group({
      productID: ''
    })

    this.getProducts();
  }

  addProduct() {
    const tempProduct = {
      title: this.postProductForm.get('productTitle').value,
      description: this.postProductForm.get('productDescription').value,
      price: this.postProductForm.get('productPrice').value,
      imgPath: this.postProductForm.get('productImgPath').value,
      productType: this.postProductForm.get('productType').value
    }
    this.custProdService.postProduct(tempProduct).subscribe( res =>
      this.getProducts()
   
    );
  }

  getProducts() {
    this.custProdService.getProducts().subscribe((res => {
      this.data = res;
      this.products = this.data;
    }))
  }

  deleteProduct(id: string) {
    this.custProdService.deleteProduct(id).subscribe( res =>
      this.getProducts()
    );
  }

  toggleAddProductView() {
    this.showAddProduct = !this.showAddProduct;
  }

  toggleDeleteProductView() {
 
    this.showDeleteProduct = !this.showDeleteProduct;

  }
}
