import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";

@Component({
  selector: 'add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss']
})
export class AddMedicineComponent implements OnInit {

  public credentials = {
    name: '',
    price: '',
    imageUrl: '',
    reimbursed: false,
    prescription: false,
    description: ''
  }

  public optionsReimbursed = [
    {value: false, viewValue: 'Nie'},
    {value: true, viewValue: 'Tak'}
  ]

  public optionsPrescription = [
    {value: false, viewValue: 'Nie'},
    {value: true, viewValue: 'Tak'}
  ]


  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  createOrUpdateMedicine() {
    return this.dataService.createOrUpdateMedicine(this.credentials).subscribe((result) => {
      return result;
    })
  }
}
