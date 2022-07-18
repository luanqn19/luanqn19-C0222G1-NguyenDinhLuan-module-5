import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  opt: string = "";
  result: number = 0;
  str : string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  number1(n1: string) {
    this.num1 = parseInt(n1);
  }

  number2(n2: string) {
    this.num2 = parseInt(n2);
  }

  operation(opt: string) {
    this.opt = opt;
  }

  calculate() {
    switch (this.opt) {
      case "+":
        this.result = this.num1 + this.num2;
        break;
      case "-":
        this.result = this.num1 - this.num2;
        break;
      case "*":
        this.result = this.num1 * this.num2;
        break;
      case "/":
        this.result = this.num1 / this.num2;
        break;
    }
    this.str = this.num1.toString() + " " + this.opt + " " + this.num2.toString() + " = " + this.result;
  }
}
