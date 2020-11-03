import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Client';
  router: string;

  // tslint:disable-next-line:variable-name
  constructor(public _router: Router) {
    this.router = _router.url;
  }
}
