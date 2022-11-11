import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'admin',component:AdminHomeComponent},
  {path:'view-products',component:ViewProductsComponent},
  {path:'view-users',component:ViewUsersComponent},
  {path:'user-products',component:ProductsComponent},
  {path:'product-home',component:ProductHomeComponent},
  {path:'cart',component:CartComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
