import { Injectable } from '@angular/core';
import {Customer} from "./model/customer";
import {FormGroup, Validators, FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  customer : Customer | undefined;

  customerForm = new FormGroup({
    idCustomer: new FormControl('',Validators.required),
    fullName: new FormControl('',Validators.required),
    dayOfBirth: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    document: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    address: new FormControl('',Validators.required),
    nameTypeCustomer: new FormControl('',Validators.required)
  });

  listCustomer : Customer[] = [
    {
      idCustomer: 1,
      fullName: "Trần Văn An",
      dayOfBirth: "1989-02-12",
      gender: 1,
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
      gender: 0,
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
      gender: 1,
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
      gender: 1,
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
      gender: 1,
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

  getFormGroup() : FormGroup {
    return this.customerForm;
  }

  getDataForm(customerForm : FormGroup) : Customer {
    return {
      idCustomer: customerForm.controls.idCustomer.value,
      fullName: customerForm.controls.fullName.value,
      dayOfBirth: customerForm.controls.dayOfBirth.value,
      gender: customerForm.controls.gender.value,
      document: customerForm.controls.document.value,
      phone: customerForm.controls.phone.value,
      email: customerForm.controls.email.value,
      address: customerForm.controls.address.value,
      nameTypeCustomer: customerForm.controls.nameTypeCustomer.value
    };
  }

  addNewCustomerService(customerForm : FormGroup) : void {
    this.listCustomer.push(this.getDataForm(customerForm));
  }

  removeService(id: number) {
    this.listCustomer.forEach((items, idx) => {
      if (items.idCustomer == id) {
        this.listCustomer.splice(idx, 1);
      }
    });
  }

  editService(customerForm : FormGroup) : void {
    let customer : Customer = this.getDataForm(customerForm);

    this.listCustomer.forEach((items, idx) => {
      if (items.idCustomer == customer.idCustomer) {
        this.listCustomer.splice(idx, 1, customer);
      }
    });
  }

  findById(id: number) : Customer {
    this.customer = this.listCustomer.find(items => items.idCustomer == id);
    if (this.customer != undefined) return this.customer;
    else return {};
  }
}
