import {Injectable} from '@angular/core';
import {Facility} from "./model/facility";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FacilityserviceService {
  facility: Facility | undefined = {};
  private URL_API = "http://localhost:3000/listService";

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

  listService: Facility[] = [
    // {
    //   _idService: 1,
    //   _urlService: 'assets/image-page/services/img1.jpg',
    //   _titleService: 'PHÒNG SUITE HƯỚNG BIỂN',
    //   _descriptionService: 'Diện tích phòng: 85.8m'
    // },
    // {
    //   _idService: 2,
    //   _urlService: 'assets/image-page/services/img2.jpg',
    //   _titleService: 'PHÒNG SUPERIOR HƯỚNG VƯỜN',
    //   _descriptionService: 'Diện tích phòng: 40.1m'
    // },
    // {
    //   _idService: 3,
    //   _urlService: 'assets/image-page/services/img3.jpg',
    //   _titleService: 'PHÒNG DELUXE HƯỚNG VƯỜN',
    //   _descriptionService: 'Diện tích phòng: 43.7m'
    // },
    // {
    //   _idService: 4,
    //   _urlService: 'assets/image-page/services/img4.jpg',
    //   _titleService: 'PHÒNG SUITE HƯỚNG BIỂN',
    //   _descriptionService: 'Diện tích phòng: 85.8m'
    // },
    // {
    //   _idService: 5,
    //   _urlService: 'assets/image-page/services/img5.jpg',
    //   _titleService: 'PHÒNG SUPERIOR HƯỚNG VƯỜN',
    //   _descriptionService: 'Diện tích phòng: 40.1m'
    // },
    // {
    //   _idService: 6,
    //   _urlService: 'assets/image-page/services/img6.jpg',
    //   _titleService: 'PHÒNG DELUXE HƯỚNG VƯỜN',
    //   _descriptionService: 'Diện tích phòng: 43.7m'
    // },
    // {
    //   _idService: 7,
    //   _urlService: 'assets/image-page/services/img7.jpg',
    //   _titleService: 'PHÒNG SUITE HƯỚNG BIỂN',
    //   _descriptionService: 'Diện tích phòng: 85.8m'
    // },
    // {
    //   _idService: 8,
    //   _urlService: 'assets/image-page/services/img8.jpg',
    //   _titleService: 'PHÒNG SUPERIOR HƯỚNG VƯỜN',
    //   _descriptionService: 'Diện tích phòng: 40.1m'
    // },
    // {
    //   _idService: 9,
    //   _urlService: 'assets/image-page/services/img9.jpg',
    //   _titleService: 'PHÒNG DELUXE HƯỚNG VƯỜN',
    //   _descriptionService: 'Diện tích phòng: 43.7m'
    // }
  ];

  constructor(private httpClient: HttpClient) {
  }

  getAllFacilityService(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.URL_API);
  }

  getFormGroup(): FormGroup {
    return this.facilityForm;
  }

  getDataForm(facilityForm: FormGroup): Facility {
    return {
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
  }

  addNewFacilityService(facilityForm: FormGroup): Observable<void> {
    return this.httpClient.post<void>(this.URL_API, this.getDataForm(facilityForm));
  }

  removeService(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URL_API + "/" + id);
  }

  editService(facilityForm: FormGroup): Observable<void> {
    let facility: Facility = this.getDataForm(facilityForm);
    return this.httpClient.patch<void>(this.URL_API + "/" + facility._idService, facility);
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(this.URL_API + "/" + id);
  }
}
