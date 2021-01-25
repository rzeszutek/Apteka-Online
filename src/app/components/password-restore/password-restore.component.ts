import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";
import {ConfirmationDialogComponent} from "../dialogs/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {EmailSendDialogComponent} from "../dialogs/email-send-dialog/email-send-dialog.component";

@Component({
  selector: 'password-restore',
  templateUrl: './password-restore.component.html',
  styleUrls: ['./password-restore.component.scss']
})
export class PasswordRestoreComponent implements OnInit {

  public credentials = {
    loginName: ''
  }

  constructor(public authService: AuthService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  sendEmail(credentials) {
    return this.authService.sendEmail(credentials).subscribe( res => {
      this.openDialog();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EmailSendDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

