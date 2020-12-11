import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth/auth.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {}

  loggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    return this.authService.logout();
  }
}
