import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { EmailFormComponent } from './email-form/email-form.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveEmailFormComponent } from './reactive-email-form/reactive-email-form.component';

const routes: Routes = [
  {
    component: ReactiveEmailFormComponent,
    path: 'reactive-form',
    canActivate: [AuthGuardGuard]

  },
  {
    component: EmailFormComponent,
    path: 'template-form'
  },
  {
    component: ProductsComponent,
    path: 'products'
  },
  {
    component: LoginComponent,
    path: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
