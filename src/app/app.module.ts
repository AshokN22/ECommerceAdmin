import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ManipCatComponent } from './categories/manip-cat/manip-cat.component';
import { ShowCatComponent } from './categories/show-cat/show-cat.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { PaymentsComponent } from './payments/payments.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import {CategoryService} from './Services/category.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    CategoriesComponent,
    ManipCatComponent,
    ShowCatComponent,
    ProductsComponent,
    OrdersComponent,
    CustomersComponent,
    PaymentsComponent,
    ReportsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
