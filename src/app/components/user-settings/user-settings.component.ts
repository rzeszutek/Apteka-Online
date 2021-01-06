import { Component, OnInit } from '@angular/core';
import { PasswordDialogComponent} from "../dialogs/password-dialog/password-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  public items$: any;
  public id: '';
  public password: '';
  public passwordRepeated: '';
  public loginName: '';
  public name: '';
  public surname: '';
  public phone: '';
  public response;

  public link: '';

  public credentials = {
    loginName: '',
    password: ''
  }

  public panelOpenState = false;

  constructor(public dialog: MatDialog, public authService: AuthService) { }

  ngOnInit(): void {
    this.router('user-data');
    this.credentials.loginName = this.getEmail();
    this.getId(this.credentials.loginName);
  }

  updatePassword(user) {
    if (this.password == this.passwordRepeated) {
      this.authService.passwordCheck(this.credentials).subscribe(response => {
        this.response = response;
        if (this.response) {
          this.updateUser(user);
        }
      });
    }
  }

  updateUser(user) {
    this.authService.createOrUpdate(user).subscribe(() => {
      console.log('Updated.');
    });
  }

  getId(loginName) {
    return this.authService.getId(loginName).subscribe(response => {
      this.id = response['id'];
      console.log(this.id);
    });
  }

  getEmail() {
    return this.authService.getEmail();
  }

  router(link) {
    this.link = link;
  }

  check(outlet) {
    if (outlet == this.link) {
      return true;
    }
  }
}
