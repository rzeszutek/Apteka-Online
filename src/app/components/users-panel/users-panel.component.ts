import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";
import {PasswordDialogComponent} from "../dialogs/password-dialog/password-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {OrderService} from "../../services/order/order.service";

@Component({
  selector: 'users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.scss']
})
export class UsersPanelComponent implements OnInit {

  public items$: any;
  public userItems$: any;
  public password: '';
  public response: any;
  public phrase: '';

  public credentials = {
    loginName: '',
    password: ''
  }

  public panelOpenState = false;

  constructor(public authService: AuthService, public orderService: OrderService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.authService.getUsers().subscribe(res => {
      this.items$ = res;
    });
  }

  openDialog(id): void {
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
          console.log(this.response);
          if(this.response) {
            this.deleteUser(id);
          }
        });
      }
    });
  }

  getUserOrders(userId) {
    return this.orderService.getUserOrders(userId).subscribe(res => {
      this.userItems$ = res;
      console.log(this.userItems$);
    })
  }

  getEmail() {
    return this.authService.getEmail();
  }

  deleteUser(id) {
    return this.authService.deleteUser(id).subscribe(res => {
      console.log('User deleted.')
      this.getUsers();
    });
  }

  findByPhrase(phrase) {
    this.authService.getUsers().subscribe(response => {
      if (phrase == '') {
        return this.items$ = response;
      } else {
        this.authService.getUsers().subscribe(response => {
          this.items$ = response;
          let array1: any;
          let array2: any;
          array1 = this.items$.filter(item => item.loginName.startsWith(phrase));
          array2 = this.items$.filter(item => item.id.startsWith(phrase));
          this.items$ = array1;
          this.items$ = this.items$.concat(array2);
        });
      }
    })
  }
}
