import { Injectable } from '@angular/core';
import {ContractDetail} from "./model/contract-detail";

@Injectable({
  providedIn: 'root'
})
export class ContractDetailService {
  listContractDetail: ContractDetail[] = [
    {
      _idContractDetail: 1,
      _idContract: 1,
      _idAttachService: 3,
      _amount: 2
    },
    {
      _idContractDetail: 2,
      _idContract: 1,
      _idAttachService: 1,
      _amount: 2
    },
    {
      _idContractDetail: 3,
      _idContract: 2,
      _idAttachService: 1,
      _amount: 3
    },
    {
      _idContractDetail: 4,
      _idContract: 4,
      _idAttachService: 3,
      _amount: 3
    }
  ];

  constructor() { }

  getAllContractDetailService() {
    return this.listContractDetail;
  }
}
