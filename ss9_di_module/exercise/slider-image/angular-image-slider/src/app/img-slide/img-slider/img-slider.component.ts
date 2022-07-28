import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {ImgSildeComponent} from '../img-silde/img-silde.component';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit, AfterContentInit {
  @ContentChildren(ImgSildeComponent) slides: QueryList<ImgSildeComponent>;
  component;
  activeIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.slides);
    this.component = this.slides.first;
  }

  previos() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }
  next() {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }

}
