import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  constructor() { }

  public link: '';

  ngOnInit(): void {
    this.router('medicine');
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
