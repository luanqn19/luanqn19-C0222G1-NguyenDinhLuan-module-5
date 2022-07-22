import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FacilityserviceService} from "../../facilityservice.service";

@Component({
  selector: 'app-facility-delete',
  templateUrl: './facility-delete.component.html',
  styleUrls: ['./facility-delete.component.css']
})
export class FacilityDeleteComponent implements OnInit {
  idService!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private facilityService: FacilityserviceService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      console.log('param: ' + params.get('id'));
      this.idService = Number(params.get('id'));
    })
  }

}
