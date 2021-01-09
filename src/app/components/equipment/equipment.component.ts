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
      this.items$ = this.items$.filter(item => item.name.toLowerCase().startsWith(phrase));
    });
  }
}
