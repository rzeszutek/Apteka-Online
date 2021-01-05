import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data/data.service";
import { PasswordDialogComponent } from "../dialogs/password-dialog/password-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { AuthService }  from "../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'medicines-panel',
  templateUrl: './medicines-panel.component.html',
  styleUrls: ['./medicines-panel.component.scss']
})
export class MedicinesPanelComponent implements OnInit {

  public items$: any;
  public password: '';
  public response;

  public credentials = {
    loginName: '',
    password: ''
  }

  constructor(public dataService: DataService, public dialog: MatDialog, public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dataService.getMedicines().subscribe(response => {
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
        this.authService.passwordCheck(this.credentials).subscribe( response => {
          this.response = response;
          console.log(this.response);
        });
        if(this.response) {
          this.dataService.deleteMedicine(id).subscribe( response => {
            console.log(response);
          })
        }
      }
    });
  }

  deleteMedicine(id) {
    return this.dataService.deleteMedicine(id).subscribe( () => {
      //this.router.navigate(['/control-panel'])
    })
  }

  getEmail() {
    return this.authService.getEmail();
  }
}
