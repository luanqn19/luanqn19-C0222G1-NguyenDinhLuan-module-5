import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {FacilityComponent} from "./facility/facility.component";
import {CustomerComponent} from "./customer/customer.component";
import {ContractComponent} from "./contract/contract.component";

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'service', component: FacilityComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'contract', component: ContractComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [AppComponent, FacilityComponent, CustomerComponent, ContractComponent];
