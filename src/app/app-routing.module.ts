import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { PaymentsComponent } from './payments/payments.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:"Categories",component:CategoriesComponent},
  {path:"Products",component:ProductsComponent},
  {path:"Orders",component:OrdersComponent},
  {path:"Customers",component:CustomersComponent},
  {path:"Payments",component:PaymentsComponent},
  {path:"Users",component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
