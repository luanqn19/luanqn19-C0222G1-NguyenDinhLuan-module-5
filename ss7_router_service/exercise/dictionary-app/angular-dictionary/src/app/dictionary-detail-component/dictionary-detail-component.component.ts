import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from "../service/dictionary-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  word : string;
  mean : string;

  constructor(private dicService : DictionaryServiceService,
              private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.word = this.router.snapshot.params.word;
    this.mean = this.dicService.translate(this.word);
    console.log(this.mean);
  }


}
