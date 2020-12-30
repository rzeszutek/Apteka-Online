import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'medicine-item',
  templateUrl: './medicine-item.component.html',
  styleUrls: ['./medicine-item.component.scss']
})
export class MedicineItemComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() price: string;

  public count: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {}

  addMedicineToCart(product) {
    return this.cartService.addMedicineToCart(product);
  }

  removeMedicineFromCart(id) {
    return this.cartService.removeMedicineFromCart(id);
  }
}
