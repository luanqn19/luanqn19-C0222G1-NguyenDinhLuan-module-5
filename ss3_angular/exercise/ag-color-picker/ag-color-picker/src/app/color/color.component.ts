import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  pColor : string = "";
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(c:string) {
    this.pColor = c;
  }

}
