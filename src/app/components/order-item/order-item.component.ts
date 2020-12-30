import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() image: string;
  @Input() price: string;
  @Input() quantity: string;

  constructor() { }

  ngOnInit(): void {
  }

}
