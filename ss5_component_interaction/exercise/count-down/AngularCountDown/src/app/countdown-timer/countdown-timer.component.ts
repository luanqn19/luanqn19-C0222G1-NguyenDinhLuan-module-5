import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  messenger = '';
  remainingTime: number = 0;
  totalTime: number = 10;
  private interval : any;
  @Output()
  status = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  start() {
    if (this.remainingTime <= 0) {
      this.remainingTime = this.totalTime;
      this.countDown();
    }
  }

  stop() {
    this.messenger = `Holding at ${this.remainingTime} seconds!`;
    this.status.emit(this.messenger);
    clearInterval(this.interval);
  }

  countDown() {
    this.interval = setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime == 0) {
        this.messenger = "TIME OUT!!!";
        this.status.emit(this.messenger);
        clearInterval(this.interval);
      }
    }, 1000);
  }

  reset() {
    clearInterval(this.interval);
    this.remainingTime = 0;
    this.messenger = `Click start to start the countdown!`;
    this.status.emit(this.messenger);
  }
}
