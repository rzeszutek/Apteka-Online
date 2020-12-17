import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'equipment-item',
  templateUrl: './equipment-item.component.html',
  styleUrls: ['./equipment-item.component.scss']
})
export class EquipmentItemComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() price: string;

  public count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
