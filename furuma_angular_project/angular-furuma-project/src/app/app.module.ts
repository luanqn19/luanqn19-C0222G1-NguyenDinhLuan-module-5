import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { NavMenuDashboardComponent } from './nav-menu-dashboard/nav-menu-dashboard.component';
import { FooterMenuDashboardComponent } from './footer-menu-dashboard/footer-menu-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    NavMenuDashboardComponent,
    FooterMenuDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
