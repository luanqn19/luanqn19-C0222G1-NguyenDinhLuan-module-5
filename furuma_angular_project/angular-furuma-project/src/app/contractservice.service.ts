import {Injectable} from '@angular/core';
import {Contract} from "./model/contract";
import {FacilityserviceService} from "./facilityservice.service";
import {Facility} from "./model/facility";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AttachService} from "./model/attach-service";
import {ContractDetail} from "./model/contract-detail";

@Injectable({
  providedIn: 'root'
})
export class ContractserviceService {
  contract !: Contract | undefined;

  listAttachService: AttachService[] = [
    {
      _idAttachService: 1,
      _nameAttachService: "Xe Máy",
      _cost: 100,
      _unit: "Chiếc",
      _status: "Tốt"
    },
    {
      _idAttachService: 2,
      _nameAttachService: "Xe Đẹp",
      _cost: 50,
      _unit: "Chiếc",
      _status: "Tốt"
    },
    {
      _idAttachService: 3,
      _nameAttachService: "Karaoke",
      _cost: 20,
      _unit: "Giờ",
      _status: "Tốt"
    },
    {
      _idAttachService: 4,
      _nameAttachService: "Buffet sáng",
      _cost: 25,
      _unit: "Suất",
      _status: "Tốt"
    },
    {
      _idAttachService: 5,
      _nameAttachService: "Buffet trưa",
      _cost: 25,
      _unit: "Suất",
      _status: "Tốt"
    },
    {
      _idAttachService: 6,
      _nameAttachService: "Buffet tối",
      _cost: 25,
      _unit: "Suất",
      _status: "Tốt"
    },
  ];

  contractForm: FormGroup = new FormGroup({
    idContract: new FormControl('', Validators.required),
    nameCustomer: new FormControl('', Validators.required),
    nameService: new FormControl('', Validators.required),
    dateStart: new FormControl('', Validators.required),
    dateEnd: new FormControl('', Validators.required),
    deposit: new FormControl(0, [Validators.required, Validators.min(0)]),
    total: new FormControl(0, Validators.required)
  });

  listContract: Contract[] = [
    {
      idContract: 1,
      nameCustomer: "Nguyễn Quốc Trung",
      nameService: "Villa",
      dateStart: "2022-07-16",
      dateEnd: "2022-07-20",
      deposit: 3000000,
      total: 2000000
    },
    {
      idContract: 2,
      nameCustomer: "Trần Quốc Tuấn",
      nameService: "House",
      dateStart: "2022-07-16",
      dateEnd: "2022-07-30",
      deposit: 1000000,
      total: 5000000
    },
    {
      idContract: 3,
      nameCustomer: "Trần Hoài Nam",
      nameService: "Room",
      dateStart: "2022-07-16",
      dateEnd: "2022-07-20",
      deposit: 1000000,
      total: 4000000
    },
    {
      idContract: 4,
      nameCustomer: "Lê Văn Tú",
      nameService: "Villa",
      dateStart: "2022-07-16",
      dateEnd: "2022-07-25",
      deposit: 2000000,
      total: 5000000
    }
  ];

  constructor(private facilityService: FacilityserviceService) {
  }

  getDataForm(contractForm: FormGroup): Contract {
    return {
      idContract: contractForm.controls.idContract.value,
      nameCustomer: contractForm.controls.nameCustomer.value,
      nameService: contractForm.controls.nameService.value,
      dateStart: contractForm.controls.dateStart.value,
      dateEnd: contractForm.controls.dateEnd.value,
      deposit: contractForm.controls.deposit.value,
      total: 0
    };
  }

  getAllContractService(): Contract[] {
    return this.listContract;
  }

  getAllAttachService(): AttachService[] {
    return this.listAttachService;
  }

  // getAllFacilityService(): Facility[] {
  //   return this.facilityService.getAllFacilityService();
  // }

  getContractForm(): FormGroup {
    return this.contractForm;
  }

  addNewContractService(contractForm: FormGroup) {
    this.listContract.push(this.getDataForm(contractForm));
  }

  removeContract(id: number) {
    this.listContract.forEach((items, idx) => {
      if (items.idContract == id) {
        this.listContract.splice(idx, 1);
      }
    });
  }

  editContract(contractForm: FormGroup) {
    let contract: Contract = this.getDataForm(contractForm);

    this.listContract.forEach((items, idx) => {
      if (items.idContract == contract.idContract) {
        this.listContract.splice(idx, 1, contract);
      }
    });
  }

  findById(id: number): Contract {
    this.contract = this.listContract.find(items => items.idContract == id);
    if (this.contract != undefined) return this.contract;
    else return {};
  }
}
