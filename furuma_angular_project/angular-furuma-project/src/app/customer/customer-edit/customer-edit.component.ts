import {AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CustomerserviceService} from "../../customerservice.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  idCustomer!: number;
  customerForm!: FormGroup;

  constructor(private customerService: CustomerserviceService,
              private activatedRoute: ActivatedRoute,
              private cdref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.customerForm = this.customerService.getFormGroup();
    setTimeout(() => {
      this.activatedRoute.url.subscribe(url => {
        console.log(url);
        this.idCustomer = Number(url[1].path);
        this.customerForm.patchValue(this.customerService.findById(this.idCustomer));
      });
    });
  }

  onSubmit() {
    this.customerService.editService(this.customerForm);
  }
}
