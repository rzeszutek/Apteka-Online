import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {

  public items$: any;
  public we$: string = '...';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dataService.getMedicines().subscribe(response => {
      this.items$ = response;
      console.log(this.items$);
    });
  }
}
