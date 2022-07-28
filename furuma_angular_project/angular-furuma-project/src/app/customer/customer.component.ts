import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerserviceService} from "../customerservice.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  listCustomer : Customer[] = [];

  customerForm!: FormGroup;

  constructor(private customerService : CustomerserviceService) { }

  ngOnInit(): void {
    this.listCustomer = this.customerService.getAllCustomerService();
    this.customerForm = this.customerService.getFormGroup();
  }

  addNewCustomerService() {
    this.customerService.addNewCustomerService(this.customerForm);
  }
}
