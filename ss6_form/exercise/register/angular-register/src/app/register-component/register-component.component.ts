import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  userForm!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required),
      dayOfBirth: new FormControl('', [Validators.required, this.checkAge18]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern("^\\+84\\d{9,10}$")])
    }, this.checkPassword);
  }

  checkAge18(abstractControl: AbstractControl): any {
    const uYear = abstractControl.value.substring(0, 4);
    const cYear = new Date().getFullYear();
    return cYear - uYear >= 18 ? null : {not18: true};
  }

  getInfo() {
    console.log(this.userForm);
  }

  checkPassword(abstractControl: AbstractControl): any {
    console.log(abstractControl.value.password);
    console.log(abstractControl.value.confirmPassword);
    return abstractControl.value.password == abstractControl.value.confirmPassword ? null : {notsame: true};
  }
}
