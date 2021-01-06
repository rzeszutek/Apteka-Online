import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../services/order/order.service";
import { MatDialog } from "@angular/material/dialog";
import { PasswordDialogComponent } from "../dialogs/password-dialog/password-dialog.component";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'orders-panel',
  templateUrl: './orders-panel.component.html',
  styleUrls: ['./orders-panel.component.scss']
})
export class OrdersPanelComponent implements OnInit {

  public items$: any;
  public password: '';
  public response;

  public credentials = {
    loginName: '',
    password: ''
  }

  constructor(public orderService: OrderService, public dialog: MatDialog, public authService: AuthService) { }

  ngOnInit(): void {
    this.getOrders();
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
        this.authService.passwordCheck(this.credentials).subscribe( response => {
          this.response = response;
          console.log(this.response);
          if(this.response) {
            this.deleteOrder(id);
          }
        });
      }
    });
  }

  getOrders() {
    return this.orderService.getOrders().subscribe(response => {
      this.items$ = response;
      console.log(this.items$);
    });
  }

  deleteOrder(id) {
    return this.orderService.deleteOrder(id).subscribe( () => {
      console.log('pomocy');
      this.getOrders();
    })
  }

  getEmail() {
    return this.authService.getEmail();
  }
}
