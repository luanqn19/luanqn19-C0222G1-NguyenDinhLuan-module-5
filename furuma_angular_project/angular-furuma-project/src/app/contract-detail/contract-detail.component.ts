import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContractserviceService} from "../contractservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ContractDetailService} from "../contract-detail.service";
import {ContractDetail} from "../model/contract-detail";
import {DtoContractDetail} from "../model/dto-contract-detail";

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit{
  idContract?: number;
  listContractDetail: ContractDetail[] = [];
  listDtoContractDetail: DtoContractDetail[] = [];

  constructor(private contractService: ContractserviceService,
              private activatedRoute: ActivatedRoute,
              private contractDetailService: ContractDetailService) {
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      this.idContract = Number(url[1].path);
      console.log(this.idContract);
    });

    this.contractDetailService.getAllContractDetailService().forEach(items => {
      if (items._idContract == this.idContract) {
        this.listContractDetail.push(items);
      }
    });

    this.contractService.getAllAttachService().forEach(itemsService => {
      this.listContractDetail.forEach(itemsContract => {
        if (itemsService._idAttachService == itemsContract._idAttachService) {
          this.listDtoContractDetail.push({
            _idContractDetail: itemsContract._idContractDetail,
            _idContract: itemsContract._idContract,
            _idAttachService: itemsContract._idAttachService,
            _amount: itemsContract._amount,
            _nameAttachService: itemsService._nameAttachService,
            _cost: itemsService._cost,
            _unit: itemsService._unit,
            _status: itemsService._status
          });
        }
      });
    });
  }



  clearUrl() {
    console.log(this.idContract);
    // this.router.ngOnDestroy();
    // this.router.navigateByUrl('contract');
  }
}
