import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  public token: string;
  public id: string;
  public passwordRepeated: '';
  public response: '';

  public credentials = {
    id: '',
    password: ''
  }

  constructor(public route: ActivatedRoute, public authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.token = params.get('token');
        this.id = params.get('id');
        console.log(this.token, this.id);
      });
  }

  resetPassword(credentials, token) {
    if (this.credentials.password == this.passwordRepeated) {
      this.authService.passwordReset(credentials, token);
      this.router.navigate(['/login']);
    }
  }

  updateUser(user) {
    this.authService.createOrUpdate(user).subscribe(() => {
    });
  }
}
