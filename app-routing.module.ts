import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { CanDeactivateGuard } from './services/can-deactivate.guard';



const routes: Routes = [
  { path: "" , component: HomeComponent},
  { path: "product-cart/:id" , component: ProductCartComponent , canDeactivate: [CanDeactivateGuard]},
  { path: "login" , component: LoginComponent},
  { path: "view-orders" , component: ProductOrdersComponent , canActivate: [AuthGuard]},
  { path: "**" , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
