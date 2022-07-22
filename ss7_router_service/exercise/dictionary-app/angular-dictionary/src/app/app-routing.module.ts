import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionayPageComponentComponent} from "./dictionay-page-component/dictionay-page-component.component";
import {DictionaryDetailComponentComponent} from "./dictionary-detail-component/dictionary-detail-component.component";


const routes: Routes = [
  {path: "" ,pathMatch: 'full', redirectTo: 'list'},
  {path: "list" , component: DictionayPageComponentComponent},
  {path: "detail/:word", component: DictionaryDetailComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
