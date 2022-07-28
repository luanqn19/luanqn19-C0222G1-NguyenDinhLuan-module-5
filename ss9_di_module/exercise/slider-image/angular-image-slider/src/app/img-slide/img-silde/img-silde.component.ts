import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-img-silde',
  templateUrl: './img-silde.component.html',
  styleUrls: ['./img-silde.component.css']
})
export class ImgSildeComponent implements OnInit {
  @ViewChild('tmpl') template: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
