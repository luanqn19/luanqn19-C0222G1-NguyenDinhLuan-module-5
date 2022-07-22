import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityserviceService} from "../facilityservice.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-service',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  listService: Facility[] = [];

  facilityForm = new FormGroup({
    _idService: new FormControl(Validators.required),
    _urlService: new FormControl('', Validators.required),
    _titleService: new FormControl('', Validators.required),
    _descriptionService: new FormControl('', Validators.required),
    _area: new FormControl(0, [Validators.required, Validators.min(0)]),
    _cost: new FormControl(0, [Validators.required, Validators.min(0)]),
    _maximum: new FormControl(0, [Validators.required, Validators.min(0)]),
    _typeService: new FormControl('', Validators.required),
    _typeBorrow: new FormControl('', Validators.required),
    _standardRoom: new FormControl(''),
    _areaPool: new FormControl(0, Validators.min(0)),
    _floor: new FormControl(0, Validators.min(0)),
    _attachFreeService: new FormControl(''),
  });

  constructor(private facilityService: FacilityserviceService) {
  }

  ngOnInit(): void {
    this.listService = this.facilityService.getAllFacilityService();
  }

  getAllFacilityService() {
    this.listService = this.facilityService.getAllFacilityService();
  }

  addNewService() {
    this.facilityService.addNewFacilityService(this.facilityForm);
  }


}
