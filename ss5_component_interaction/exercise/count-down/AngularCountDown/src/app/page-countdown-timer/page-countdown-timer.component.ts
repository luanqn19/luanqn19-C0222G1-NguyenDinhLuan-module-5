import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-countdown-timer',
  templateUrl: './page-countdown-timer.component.html',
  styleUrls: ['./page-countdown-timer.component.css']
})
export class PageCountdownTimerComponent implements OnInit {
  messenger = "";
  constructor() { }

  ngOnInit(): void {
  }

  showMessenger (m : any) {
    this.messenger = m;
  }
}
