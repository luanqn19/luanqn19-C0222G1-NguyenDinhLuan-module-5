import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-rating-bar',
  templateUrl: './page-rating-bar.component.html',
  styleUrls: ['./page-rating-bar.component.css']
})
export class PageRatingBarComponent implements OnInit {
  ratingVal: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  showRating(r : number) {
    this.ratingVal = r;
  }
}
