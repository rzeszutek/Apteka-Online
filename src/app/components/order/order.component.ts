import {Component, Input, OnInit} from '@angular/core';
import { CartService } from "../../services/cart/cart.service";
import { OrderService } from "../../services/order/order.service";
import { Router } from "@angular/router";

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
  public isDisabled = true;
  public finalPrice;
  public finalPriceWithShipment;

  public credentials = {
    userId: '',
    medicines: [],
    equipment: [],
    shipment: '',
    price: '',
    payment: '',
    address: ''
  }

  public showSpinner = false;

  constructor(public cartService: CartService, public orderService: OrderService, public router: Router) { }

  ngOnInit(): void {
    this.getArrays();
    this.count();
    console.log(this.items$, this.medicines$, this.equipment$);
  }

  getArrays() {
    this.items$ = this.getItems();
    this.medicines$ = this.items$.medicines;
    this.equipment$ = this.items$.equipment;
  }

  getItems() {
    return this.cartService.getCart();
  }

  count() {
    this.items$ = [];
    this.sum = 0;
    this.finalPrice = 0;
    this.finalPriceWithShipment = 0;

    this.items$ = this.items$.concat(this.medicines$);
    this.items$ = this.items$.concat(this.equipment$);
    for (let i in this.items$) {
      this.sum += this.items$[i].quantity * parseFloat((this.items$[i].price).slice(0, -3));
    }

    this.finalPrice = this.sum.toFixed(2);
    this.finalPriceWithShipment = (this.sum + 9.99).toFixed(2);
  }

  create() {
    this.credentials.userId = this.orderService.currentUser.userId;
    this.credentials.medicines = this.medicines$;
    this.credentials.equipment = this.equipment$;
    this.credentials.price = this.sum.toString();
    if (this.credentials.payment == 'Przelew') {
      this.router.navigate(['/bank-transfer'], {state: this.credentials});
    } else {
      this.orderService.createOrUpdate(this.credentials).subscribe(() => {
        this.loadData();
        this.loadRedirect();
      });
    }
  }

  disabled() {
    if (this.credentials.payment == 'Przelew') {
      return false;
    } else {
      return true;
    }
  }

  loadData() {
    this.showSpinner = true;
    setTimeout( () => {
      this.showSpinner = false;
    }, 1500);
  }

  loadRedirect() {
    setTimeout( () => {
      this.cartService.clearCarts();
      this.router.navigate(['/home']);
    }, 1700 )
  }

  ifEmpty() {
    if (this.cartService.getProductCount() == 0) {
      return true;
    } else {
      return false;
    }
  }

  addMedicineToCart(product) {
    this.cartService.addMedicineToCart(product);
    this.getArrays();
    this.count();
  }

  removeMedicineFromCart(id) {
    this.cartService.removeMedicineFromCart(id);
    this.getArrays();
    this.count();
  }

  removeMedicine(id) {
    this.cartService.removeMedicine(id);
    this.getArrays();
    this.count();
  }

  addEquipmentToCart(product) {
    this.cartService.addEquipmentToCart(product);
    this.getArrays();
    this.count();
  }

  removeEquipmentFromCart(id) {
    this.cartService.removeEquipmentFromCart(id);
    this.getArrays();
    this.count();
  }

  removeEquipment(id) {
    this.cartService.removeEquipment(id);
    this.getArrays();
    this.count();
  }

  clearList() {
    return this.cartService.clearCarts();
  }
}
