import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data/data.service";

@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  public items$: any;
  public phrase: '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dataService.getEquipment().subscribe(response => {
      this.items$ = response;
    });
  }

  findByPhrase(phrase) {
    this.dataService.getEquipment().subscribe(response => {
      this.items$ = response;
      let array1: any;
      let array2: any;
      array1 = this.items$.filter(item => item.name.startsWith(phrase));
      array2 = this.items$.filter(item => item.name.toLowerCase().startsWith(phrase));
      this.items$ = array1;
      this.items$ = this.items$.concat(array2);
    });
  }
}
