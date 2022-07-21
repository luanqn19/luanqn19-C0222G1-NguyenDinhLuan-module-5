import { Component, OnInit } from '@angular/core';
import {Contract} from "../model/contract";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  listContract : Contract[] = [
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
  constructor() { }

  ngOnInit(): void {
  }

}
