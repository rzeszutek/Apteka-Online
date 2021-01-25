import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {ConfirmationDialogComponent} from "../dialogs/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss']
})
export class AddMedicineComponent implements OnInit {

  public credentials = {
    name: '',
    price: '',
    imageURL: '',
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


  constructor(public dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createOrUpdateMedicine() {
    return this.dataService.createOrUpdateMedicine(this.credentials).subscribe(res => {
      this.openDialog();
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
