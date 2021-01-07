import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";

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

  constructor(public cartService: CartService) { }

  ngOnInit(): void {}

  addMedicineToCart(product) {
    return this.cartService.addMedicineToCart(product);
  }

  removeMedicineFromCart(id) {
    return this.cartService.removeMedicineFromCart(id);
  }

  removeMedicine(id) {
    return this.cartService.removeMedicine(id);
  }
}
