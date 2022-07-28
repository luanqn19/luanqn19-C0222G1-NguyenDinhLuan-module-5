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
import {ContractDetailService} from "./contract-detail.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NavMenuDashboardComponent,
    FooterMenuDashboardComponent,
    RoutingComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastNoAnimationModule.forRoot()
  ],
  providers: [FacilityserviceService,
    CustomerserviceService,
    ContractserviceService, ContractDetailService,
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
