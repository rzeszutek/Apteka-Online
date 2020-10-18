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
  @Input() text: string;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
