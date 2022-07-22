import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DictionaryServiceService} from "../service/dictionary-service.service";
import {Iword} from "../model/iword";

@Component({
  selector: 'app-dictionay-page-component',
  templateUrl: './dictionay-page-component.component.html',
  styleUrls: ['./dictionay-page-component.component.css']
})
export class DictionayPageComponentComponent implements OnInit {
  listWord : Iword[];

  constructor(private route : ActivatedRoute,
              private dicService : DictionaryServiceService) { }

  ngOnInit(): void {
    this.listWord = this.dicService.getAllList();
  }
}
