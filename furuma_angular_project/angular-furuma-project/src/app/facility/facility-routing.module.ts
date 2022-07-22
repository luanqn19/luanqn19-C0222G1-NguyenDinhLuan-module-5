import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";

import {BrowserModule} from '@angular/platform-browser';
import {FacilityEditComponent} from "./facility-edit/facility-edit.component";
import {FacilityDeleteComponent} from "./facility-delete/facility-delete.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'service'},
  {path: 'service-edit/:id', component: FacilityEditComponent},
  {path: 'service-delete/:id', component: FacilityDeleteComponent}
];

@NgModule({
  declarations: [FacilityEditComponent,
    FacilityDeleteComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ]
})
export class FacilityRoutingModule {
}
