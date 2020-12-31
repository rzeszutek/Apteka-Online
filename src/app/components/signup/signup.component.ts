import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public credentials = {
    loginName: '',
    name: '',
    surname: '',
    password: '',
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  create() {
    this.authService.createOrUpdate(this.credentials).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/login']);
  }
}
