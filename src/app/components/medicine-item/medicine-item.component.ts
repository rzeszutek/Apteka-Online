import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'medicine-item',
  templateUrl: './medicine-item.component.html',
  styleUrls: ['./medicine-item.component.scss']
})
export class MedicineItemComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() price: string;

  public count: number = 0;

  constructor() { }

  ngOnInit(): void {}

}
