import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data/data.service";
import { ActivatedRoute } from "@angular/router";
import {PasswordDialogComponent} from "../dialogs/password-dialog/password-dialog.component";
import {ConfirmationDialogComponent} from "../dialogs/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.scss']
})
export class UpdateEquipmentComponent implements OnInit {

  public items$: any;
  public name: string;
  public price: string;
  public imageUrl: string;
  public description: string;
  public id: string;

  public panelOpenState = false;

  constructor(public dataService: DataService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    this.dataService.getEquipmentById(id).subscribe(res => {
      this.items$ = res;
      this.imageUrl = res['imageUrl'];
    })
  }

  updateEquipment(credentials) {
    return this.dataService.createOrUpdateEquipment(credentials).subscribe(() => {
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
