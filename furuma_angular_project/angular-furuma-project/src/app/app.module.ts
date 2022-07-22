import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from '@angular/router';

import {AppRoutingModule, RoutingComponent} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavMenuDashboardComponent} from './nav-menu-dashboard/nav-menu-dashboard.component';
import {FooterMenuDashboardComponent} from './footer-menu-dashboard/footer-menu-dashboard.component';
import {FacilityserviceService} from "./facilityservice.service";
import {CustomerserviceService} from "./customerservice.service";
import {ContractserviceService} from "./contractservice.service";
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { FacilityDeleteComponent } from './facility/facility-delete/facility-delete.component';

@NgModule({
  declarations: [
    NavMenuDashboardComponent,
    FooterMenuDashboardComponent,
    RoutingComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FacilityserviceService,
              CustomerserviceService,
              ContractserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
