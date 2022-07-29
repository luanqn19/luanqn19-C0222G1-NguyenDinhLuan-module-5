import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductOrderComponent} from './product-order/product-order.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {
    path: 'list', component: ProductListComponent, children: [
      {
        path: 'edit/:id', component: ProductEditComponent
      },
      {
        path: 'order/:id', component: ProductOrderComponent
      },
      {
        path: 'delete/:id', component: ProductDeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
