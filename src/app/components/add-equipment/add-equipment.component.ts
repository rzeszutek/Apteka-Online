import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {ConfirmationDialogComponent} from "../dialogs/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss']
})
export class AddEquipmentComponent implements OnInit {


  public credentials = {
    name: '',
    price: '',
    imageURL: '',
    description: ''
  }

  constructor(public dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createOrUpdateEquipment() {
    this.dataService.createOrUpdateEquipment(this.credentials);
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
