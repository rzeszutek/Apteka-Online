import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";

@Component({
  selector: 'forms-panel',
  templateUrl: './forms-panel.component.html',
  styleUrls: ['./forms-panel.component.scss']
})
export class FormsPanelComponent implements OnInit {

  public items$: any;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.getForms();
  }

  getForms() {
    return this.dataService.getForms().subscribe(res => {
      this.items$ = res;
      console.log(this.items$);
    })
  }
}
