import { Component, OnInit } from '@angular/core';
import {PasswordDialogComponent} from "../dialogs/password-dialog/password-dialog.component";
import {DataService} from "../../services/data/data.service";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-equipment-panel',
  templateUrl: './equipment-panel.component.html',
  styleUrls: ['./equipment-panel.component.scss']
})
export class EquipmentPanelComponent implements OnInit {

  public items$: any;
  public password: '';
  public response;
  public phrase: '';

  public credentials = {
    loginName: '',
    password: ''
  }

  constructor(public dataService: DataService, public dialog: MatDialog, public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dataService.getEquipment().subscribe(response => {
      this.items$ = response;
    });
  }

  openDialogDelete(id): void {
    const dialogRef = this.dialog.open(PasswordDialogComponent, {
      data: { password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.password = result;
      if(this.password) {
        this.credentials.loginName = this.getEmail();
        this.credentials.password = this.password;
        this.authService.passwordCheck(this.credentials).subscribe(response => {
          this.response = response;
          if(this.response) {
            this.deleteEquipment(id);
          }
        });
      }
    });
  }

  deleteEquipment(id) {
    return this.dataService.deleteEquipment(id).subscribe( () => {
      this.getAll();
    })
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

  getEmail() {
    return this.authService.getEmail();
  }
}
