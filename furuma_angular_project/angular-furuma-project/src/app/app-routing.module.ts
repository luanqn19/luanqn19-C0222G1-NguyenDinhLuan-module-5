import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {FacilityComponent} from "./facility/facility.component";
import {CustomerComponent} from "./customer/customer.component";
import {ContractComponent} from "./contract/contract.component";
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {CustomerDeleteComponent} from './customer/customer-delete/customer-delete.component';
import {ContractDetailComponent} from "./contract-detail/contract-detail.component";

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {
    path: 'service', title: 'Furuma Service', component: FacilityComponent, children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'service'
      },
      {
        path: 'edit-facility/:idFacility',
        component: FacilityEditComponent
      }
    ]
  },
  {
    path: 'service/delete-facility/:id',
    component: FacilityComponent
  },
  {
    path: 'customer', title: 'Furuma Customer', component: CustomerComponent, children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'customer'
      },
      {
        path: 'delete-customer/:idCustomer',
        component: CustomerDeleteComponent
      },
      {
        path: 'edit-customer/:id',
        component: CustomerEditComponent
      }
    ]
  },
  {
    path: 'contract', title: 'Furuma Contract', component: ContractComponent, children: [
      {
        path: 'contract-detail/:id', component: ContractDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const RoutingComponent = [AppComponent,
  FacilityComponent, FacilityEditComponent, CustomerComponent,
  CustomerEditComponent, CustomerDeleteComponent, ContractComponent, ContractDetailComponent];
