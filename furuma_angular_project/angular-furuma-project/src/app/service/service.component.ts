import { Component, OnInit } from '@angular/core';
import {Facility} from "../model/facility";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  listService : Facility[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

  addNewService () {

  }
}
