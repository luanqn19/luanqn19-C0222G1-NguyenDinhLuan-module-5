import { Component, OnInit } from '@angular/core';
import {Contract} from "../model/contract";
import {ContractserviceService} from "../contractservice.service";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  listContract : Contract[] = [];

  constructor(private contractService : ContractserviceService) { }

  ngOnInit(): void {
    this.listContract = this.contractService.getAllContractService();
  }

}
