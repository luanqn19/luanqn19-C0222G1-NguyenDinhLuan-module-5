import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductRoutingModule} from './product-routing.module';
import {ProductService} from './service/product.service';
import {CatalogService} from './service/catalog.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductOrderComponent } from './product-order/product-order.component';

@NgModule({
  declarations: [ProductListComponent, ProductEditComponent, ProductDeleteComponent, ProductOrderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService, CatalogService, HttpClient]
})
export class ProductModule {
}
