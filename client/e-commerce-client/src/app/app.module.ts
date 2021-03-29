import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductsService,
    ProductService,
    AuthGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
