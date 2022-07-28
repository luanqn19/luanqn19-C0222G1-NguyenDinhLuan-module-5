import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ImgSliderRoutingModule} from './img-slider-routing.module';
import {ImgSliderComponent} from './img-slider/img-slider.component';
import {ImgSildeComponent} from './img-silde/img-silde.component';


@NgModule({
  declarations: [ImgSliderComponent, ImgSildeComponent],
  exports: [
    ImgSliderComponent,
    ImgSildeComponent
  ],
  imports: [
    CommonModule,
    ImgSliderRoutingModule
  ]
})
export class ImgSliderModule {
}
