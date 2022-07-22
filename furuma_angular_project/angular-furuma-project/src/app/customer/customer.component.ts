import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerserviceService} from "../customerservice.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  listCustomer : Customer[] = [];

  constructor(private customerService : CustomerserviceService) { }

  ngOnInit(): void {
    this.listCustomer = this.customerService.getAllCustomerService();
  }

}
