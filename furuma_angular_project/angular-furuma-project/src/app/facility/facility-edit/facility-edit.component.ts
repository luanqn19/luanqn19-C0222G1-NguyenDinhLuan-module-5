import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FacilityserviceService} from "../../facilityservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/common";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  idService!: number;
  facilityFormEdit!: FormGroup;

  constructor(private facilityService: FacilityserviceService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.facilityFormEdit = this.facilityService.getFormGroup();
    this.activatedRoute.url.subscribe(url => {
      this.idService = Number(url[1].path);
      this.facilityService.findById(this.idService).subscribe(value => {
        this.facilityFormEdit.patchValue(value);
      });
    });
  }

  onSubmit() {
    this.facilityService.editService(this.facilityFormEdit).subscribe();
  }
}
