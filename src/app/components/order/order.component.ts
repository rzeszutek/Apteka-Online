import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {OrderService} from "../../services/order/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public items$: any;
  public medicines$: any;
  public equipment$: any;
  public sum = 0.0;

  public credentials = {
    userId: '',
    medicines: [],
    equipment: [],
    shipment: '',
    price: '',
    payment: '',
    address: ''
  }

  constructor(public cartService: CartService, public orderService: OrderService, public router: Router) { }

  ngOnInit(): void {
    this.items$ = this.getItems();
    this.medicines$ = this.items$.medicines;
    this.equipment$ = this.items$.equipment;
    this.items$ = [];
    this.items$ = this.items$.concat(this.medicines$);
    this.items$ = this.items$.concat(this.equipment$);

    for (let i in this.items$) {
      this.sum += this.items$[i].quantity * parseFloat((this.items$[i].price).slice(0, -3));
    }
    this.sum.toFixed(2);

    console.log(this.items$, this.medicines$, this.equipment$);
  }

  getItems() {
    return this.cartService.getCart();
  }

  create() {
    this.credentials.userId = this.orderService.currentUser.userId;
    this.credentials.medicines = this.medicines$;
    this.credentials.equipment = this.equipment$;
    this.credentials.price = this.sum.toString();

    console.log(this.credentials);

    this.orderService.createOrUpdate(this.credentials).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/home']);
  }
}
