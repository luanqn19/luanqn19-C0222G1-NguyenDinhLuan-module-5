import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ServiceComponent} from "./service/service.component";
import {CustomerComponent} from "./customer/customer.component";
import {ContractComponent} from "./contract/contract.component";

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'contract', component: ContractComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [AppComponent, ServiceComponent, CustomerComponent, ContractComponent];
