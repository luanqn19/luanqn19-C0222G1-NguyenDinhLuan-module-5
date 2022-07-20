import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IRatingUnit} from "../../model/IRatingUnit";

@Component({
  selector: 'app-rating-bar-component',
  templateUrl: './rating-bar-component.component.html',
  styleUrls: ['./rating-bar-component.component.css']
})
export class RatingBarComponentComponent implements OnInit {
  max = 10;
  @Output()
  data = new EventEmitter();

  ratingValue = 0;
  ratingUnits: Array<IRatingUnit> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.calculate(this.max, this.ratingValue);
  }

  calculate(max: number, ratingValue: number) {
    //Set value for ratingUnits with max = 10 and index = 0
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        //Value button with start index + 1;
        value: index + 1,
        //set class for button with default value of ratingValue
        active: index < ratingValue
      }));
  }

  reset() {
    //Browser array ratingUnit with data is IRatingUnit interface
    //Default ratingValue = 1 set class active IRatingUnit if index < ratingValue
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }

  select(i: number) {
    //Set ratingValue = i + 1 from event click on template return value to class
    this.ratingValue = i + 1;
    //Browser array ratingUnits with ratingValue change from event click and active class if condition true
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    this.data.emit(this.ratingValue);
  }

  enter(i: number) {
    //When hover button on template binding event will return index and active class if condition true
    this.ratingUnits.forEach((item, idx) => item.active = idx <= i);
  }
}
