import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../services/order/order.service";

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  public item$: any;
  public id;
  public email;
  public medicines;
  public equipment;
  public address;
  public shipment;
  public payment;
  public price;

  public panelOpenState = false;

  constructor(public route: ActivatedRoute, public orderService: OrderService) { }

  ngOnInit(): void {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
        this.getOrder(id);
      });
  }

  getOrder(id) {
    return this.orderService.getOrder(id).subscribe(res => {
      this.id = res['id'];
      this.email = res['email'];
      this.medicines = res['medicines'];
      this.equipment = res['equipment'];
      this.address = res['address'];
      this.shipment = res['shipment'];
      this.payment = res['payment'];
      this.price = res['price'];
    });
  }

  getMedicineLength() {
    if (this.medicines.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  getEquipmentLength() {
    if (this.equipment.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
