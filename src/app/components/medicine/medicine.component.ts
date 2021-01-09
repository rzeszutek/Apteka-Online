import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data/data.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {

  public items$: any;
  public phrase: '';

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

  findByPhrase(phrase) {
    this.dataService.getMedicines().subscribe(response => {
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
