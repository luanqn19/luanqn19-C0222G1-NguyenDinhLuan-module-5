import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, RoutingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuDashboardComponent } from './nav-menu-dashboard/nav-menu-dashboard.component';
import { FooterMenuDashboardComponent } from './footer-menu-dashboard/footer-menu-dashboard.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    NavMenuDashboardComponent,
    FooterMenuDashboardComponent,
    RoutingComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
