import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products/products.service';
import { EmailFormComponent } from './email-form/email-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveEmailFormComponent } from './reactive-email-form/reactive-email-form.component';
import { NavComponent } from './nav/nav.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ApiService } from './api.service';
import { CustomizeProductsComponent } from './customize-products/customize-products.component';
import { CustomizeProductsService } from './customize-products/customize-products.service';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { DeleteProductModalComponent } from './delete-product-modal/delete-product-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    EmailFormComponent,
    ReactiveEmailFormComponent,
    NavComponent,
    LoginComponent,
    ProductFilterPipe,
    ProductSearchComponent,
    CustomizeProductsComponent,
    AddProductModalComponent,
    DeleteProductModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    ApiService,
    ProductsService,
    ProductService,
    CustomizeProductsService,
    AuthGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
