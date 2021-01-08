import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'password-restore',
  templateUrl: './password-restore.component.html',
  styleUrls: ['./password-restore.component.scss']
})
export class PasswordRestoreComponent implements OnInit {

  public credentials = {
    loginName: ''
  }

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  sendEmail(credentials) {
    return this.authService.sendEmail(credentials).subscribe( res => {
      console.log(res);
    });
  }
}

