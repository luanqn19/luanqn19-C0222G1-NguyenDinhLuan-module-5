import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityserviceService} from "../facilityservice.service";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];

  listService: Facility[] = [];
  idService!: number;
  facilityForm!: FormGroup;

  constructor(private facilityService: FacilityserviceService,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.fetchPosts();

    this.facilityService.getAllFacilityService().subscribe(value => {
      this.listService = value;
    });

    this.facilityForm = this.facilityService.getFormGroup();

    this.activatedRoute.url.subscribe(url => {
      console.log(url);
      if (url.length != 1) {
        this.idService = Number(url[2].path);
      }
    });
  }

  showSuccess() {
    this.toastr.success('Thêm mới thành công!');
  }
  // paging
  fetchPosts(): void {
    this.facilityService.getAllFacilityService().subscribe(
      (response) => {
        this.POSTS = response;
        // console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

  removeService() {
    this.ngOnInit();
    console.log(this.idService);
  }

  addNewService() {
    this.facilityService.addNewFacilityService(this.facilityForm).subscribe(val => {
      this.showSuccess();
    });
  }

  onSubmit() {
    this.facilityService.removeService(this.idService).subscribe();
  }
}
