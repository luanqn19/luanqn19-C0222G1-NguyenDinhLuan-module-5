import { Component, OnInit } from '@angular/core';
import {Contract} from "../model/contract";
import {ContractserviceService} from "../contractservice.service";
import {Facility} from "../model/facility";
import {FacilityserviceService} from "../facilityservice.service";
import {CustomerserviceService} from "../customerservice.service";
import {Customer} from "../model/customer";
import {FormGroup} from "@angular/forms";
import {AttachService} from "../model/attach-service";
import {ContractDetail} from "../model/contract-detail";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  listContract : Contract[] = [];
  listFacility : Facility[] = [];
  listCustomer : Customer[] = [];
  listAttachService : AttachService[] = [];
  contractForm!: FormGroup;

  constructor(private contractService : ContractserviceService,
              private facilityService : FacilityserviceService,
              private customerService : CustomerserviceService) { }

  ngOnInit(): void {
    this.listContract = this.contractService.getAllContractService();
    // this.listFacility = this.facilityService.getAllFacilityService();
    this.listCustomer = this.customerService.getAllCustomerService();
    this.contractForm = this.contractService.getContractForm();
    this.listAttachService = this.contractService.getAllAttachService();
  }

  onSubmit() {
    this.contractService.addNewContractService(this.contractForm);
  }
}
