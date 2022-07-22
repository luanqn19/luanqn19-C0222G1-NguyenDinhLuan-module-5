import {Injectable} from '@angular/core';
import {Facility} from "./model/facility";
import {FormGroup} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class FacilityserviceService {
  tempFacility:Facility | undefined;

  listService: Facility[] = [
    {
      _idService: 1,
      _urlService: 'assets/image-page/services/img1.jpg',
      _titleService: 'PHÒNG SUITE HƯỚNG BIỂN',
      _descriptionService: 'Diện tích phòng: 85.8m'
    },
    {
      _idService: 2,
      _urlService: 'assets/image-page/services/img2.jpg',
      _titleService: 'PHÒNG SUPERIOR HƯỚNG VƯỜN',
      _descriptionService: 'Diện tích phòng: 40.1m'
    },
    {
      _idService: 3,
      _urlService: 'assets/image-page/services/img3.jpg',
      _titleService: 'PHÒNG DELUXE HƯỚNG VƯỜN',
      _descriptionService: 'Diện tích phòng: 43.7m'
    },
    {
      _idService: 4,
      _urlService: 'assets/image-page/services/img4.jpg',
      _titleService: 'PHÒNG SUITE HƯỚNG BIỂN',
      _descriptionService: 'Diện tích phòng: 85.8m'
    },
    {
      _idService: 5,
      _urlService: 'assets/image-page/services/img5.jpg',
      _titleService: 'PHÒNG SUPERIOR HƯỚNG VƯỜN',
      _descriptionService: 'Diện tích phòng: 40.1m'
    },
    {
      _idService: 6,
      _urlService: 'assets/image-page/services/img6.jpg',
      _titleService: 'PHÒNG DELUXE HƯỚNG VƯỜN',
      _descriptionService: 'Diện tích phòng: 43.7m'
    },
    {
      _idService: 7,
      _urlService: 'assets/image-page/services/img7.jpg',
      _titleService: 'PHÒNG SUITE HƯỚNG BIỂN',
      _descriptionService: 'Diện tích phòng: 85.8m'
    },
    {
      _idService: 8,
      _urlService: 'assets/image-page/services/img8.jpg',
      _titleService: 'PHÒNG SUPERIOR HƯỚNG VƯỜN',
      _descriptionService: 'Diện tích phòng: 40.1m'
    },
    {
      _idService: 9,
      _urlService: 'assets/image-page/services/img9.jpg',
      _titleService: 'PHÒNG DELUXE HƯỚNG VƯỜN',
      _descriptionService: 'Diện tích phòng: 43.7m'
    }
  ];

  constructor() {
  }

  getAllFacilityService(): Facility[] {
    return this.listService;
  }

  addNewFacilityService(facilityForm: FormGroup): void {
    let facility: Facility =
      {
        _idService: facilityForm.controls._idService.value,
        _urlService: facilityForm.controls._urlService.value,
        _titleService: facilityForm.controls._titleService.value,
        _descriptionService: facilityForm.controls._descriptionService.value,
        _area: facilityForm.controls._area.value,
        _cost: facilityForm.controls._cost.value,
        _maximum: facilityForm.controls._maximum.value,
        _typeService: facilityForm.controls._typeService.value,
        _typeBorrow: facilityForm.controls._typeBorrow.value,
        _standardRoom: facilityForm.controls._standardRoom.value,
        _areaPool: facilityForm.controls._areaPool.value,
        _floor: facilityForm.controls._floor.value,
        _attachFreeService: facilityForm.controls._attachFreeService.value
      };

    this.listService.push(facility);
  }

  // findById(id: number): Facility {
    // this.tempFacility = this.listService.find(item => item._idService === id);
    // return this.tempFacility;
  // }
}
