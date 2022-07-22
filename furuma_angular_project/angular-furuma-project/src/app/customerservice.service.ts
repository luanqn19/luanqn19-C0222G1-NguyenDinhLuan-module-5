import { Injectable } from '@angular/core';
import {Customer} from "./model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  listCustomer : Customer[] = [
    {
      idCustomer: 1,
      fullName: "Trần Văn An",
      dayOfBirth: "1989-02-12",
      gender: true,
      document: "2156345495",
      phone: "093156456",
      email: "vanan21@gmail.com",
      address: "342/21/1 Hoàng Diệu, Đà Nẵng",
      nameTypeCustomer: "Platium"
    },
    {
      idCustomer: 2,
      fullName: "Lê Văn Tú",
      dayOfBirth: "1990-05-15",
      gender: false,
      document: "2156345495",
      phone: "093156456",
      email: "vantu15@gmail.com",
      address: "342/21/1 Duy Tân, Đà Nẵng",
      nameTypeCustomer: "Gold"
    },
    {
      idCustomer: 3,
      fullName: "Trần Hoài Nam",
      dayOfBirth: "1985-12-20",
      gender: true,
      document: "2156345495",
      phone: "093156456",
      email: "hoainam20@gmail.com",
      address: "340 Lê Độ, Đà Nẵng",
      nameTypeCustomer: "Platium"
    },
    {
      idCustomer: 4,
      fullName: "Trần Quốc Tuấn",
      dayOfBirth: "1990-01-22",
      gender: true,
      document: "2156345495",
      phone: "093156456",
      email: "quoctuan22@gmail.com",
      address: "345 Nguyễn Thái Học, Đà Nẵng",
      nameTypeCustomer: "Member"
    },
    {
      idCustomer: 5,
      fullName: "Nguyễn Quốc Trung",
      dayOfBirth: "1995-03-10",
      gender: true,
      document: "2156345495",
      phone: "093156456",
      email: "quoctrung10@gmail.com",
      address: "322 Điện Biên Phủ, Đà Nẵng",
      nameTypeCustomer: "Silver"
    }
  ];

  constructor() { }

  getAllCustomerService() : Customer[]{
    return this.listCustomer;
  }
}
