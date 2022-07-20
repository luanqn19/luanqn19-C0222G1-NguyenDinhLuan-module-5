import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RatingBarComponentComponent } from './rating-bar-component/rating-bar-component.component';
import { PageRatingBarComponent } from './page-rating-bar/page-rating-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponentComponent,
    PageRatingBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
