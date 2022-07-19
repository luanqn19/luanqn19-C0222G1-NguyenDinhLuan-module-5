import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  listCustomer : Customer[] = {

  };

  constructor() { }

  ngOnInit(): void {
  }

}
