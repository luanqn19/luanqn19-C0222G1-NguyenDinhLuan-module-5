import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { PageCountdownTimerComponent } from './page-countdown-timer/page-countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    PageCountdownTimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
