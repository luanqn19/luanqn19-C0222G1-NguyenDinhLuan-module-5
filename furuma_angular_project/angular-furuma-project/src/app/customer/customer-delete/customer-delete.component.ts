import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerserviceService} from "../../customerservice.service";

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  idCustomer!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerserviceService,
              private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      this.idCustomer = Number(url[1].path);
    });
  }

  onSubmit() {
    this.customerService.removeService(this.idCustomer);
    // this.clearUrl();
  }
  //
  // clearUrl() {
  //   this.router.navigateByUrl('customer');
  // }
}
