import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './products/product-list/product-list.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./products/product.module').then(module => module.ProductModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/product.module').then(module => module.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
