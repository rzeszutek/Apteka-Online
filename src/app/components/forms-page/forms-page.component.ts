import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {FormSendDialogComponent} from "../dialogs/form-send-dialog/form-send-dialog.component";

@Component({
  selector: 'forms-page',
  templateUrl: './forms-page.component.html',
  styleUrls: ['./forms-page.component.scss']
})
export class FormsPageComponent implements OnInit {

  public credentials = {
    subject: '',
    description: '',
    loginName: ''
  }

  public subjectOptions = [
    { value: 'Pytanie o produkt' },
    { value: 'Dotyczy zamówienia' },
    { value: 'Reklamacje i zwrot towaru' },
    { value: 'Dotyczy zwrotu pieniędzy' },
    { value: 'Dotyczy E-Recept' },
    { value: 'Dotyczy konta' }
  ];

  constructor(public dataService: DataService, public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
  }

  createForm() {
    return this.dataService.createForm(this.credentials).subscribe(res => {
      this.openDialog();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormSendDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/home']);
    });
  }
}
