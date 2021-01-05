import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.scss']
})
export class UpdateMedicineComponent implements OnInit {

  public items$: any;
  public name: string;
  public price: string;
  public imageUrl: string;
  public reimbursed: string;
  public prescription: string;
  public description: string;
  public id: string;

  public panelOpenState = false;

  public optionsReimbursed = [
    {value: false, viewValue: 'Nie'},
    {value: true, viewValue: 'Tak'}
  ]

  public optionsPrescription = [
    {value: false, viewValue: 'Nie'},
    {value: true, viewValue: 'Tak'}
  ]

  constructor(public dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    this.dataService.getMedicineById(id).subscribe(res => {
      this.items$ = res;
    })
    //   this.id = res['id']
    //   this.name = res['name'];
    //   this.price = res['price'];
    //   this.imageUrl = res['imageUrl'];
    //   this.reimbursed = res['reimbursed'];
    //   this.prescription = res['prescription'];
    //   this.description = res['description'];
    //   if (this.prescription == 'true') {
    //     this.prescription = 'Tak';
    //   } else {
    //     this.prescription = "Nie";
    //   }
    //   if (this.reimbursed == 'true') {
    //     this.reimbursed = 'Tak';
    //   } else {
    //     this.reimbursed = "Nie";
    //   }
    // });
  }

  updateMedicine(credentials) {
    console.log(credentials);
    return this.dataService.createOrUpdateMedicine(credentials).subscribe((result) => {
      return result;})
  }
}
