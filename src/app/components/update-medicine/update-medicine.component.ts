import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data/data.service";
import { ActivatedRoute } from "@angular/router";
import {ConfirmationDialogComponent} from "../dialogs/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.scss']
})
export class UpdateMedicineComponent implements OnInit {

  public items$: any;
  public name: string;
  public price: string;
  public imageURL: string;
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

  constructor(public dataService: DataService, private route: ActivatedRoute, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    this.dataService.getMedicineById(id).subscribe(res => {
      this.items$ = res;
      this.imageURL = res['imageURL'];
    })
  }

  updateMedicine(credentials) {
    console.log(credentials);
    return this.dataService.createOrUpdateMedicine(credentials).subscribe(result => {
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
