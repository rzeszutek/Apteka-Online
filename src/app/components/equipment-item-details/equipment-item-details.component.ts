import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'equipment-item-details',
  templateUrl: './equipment-item-details.component.html',
  styleUrls: ['./equipment-item-details.component.scss']
})
export class EquipmentItemDetailsComponent implements OnInit {

  public items$: any;
  public name: string;
  public price: string;
  public imageURL: string;
  public description: string;
  public id: string;

  public count: number = 0;

  constructor(private dataService: DataService, public cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    this.dataService.getEquipmentById(id).subscribe(res => {
      this.id = res['id']
      this.name = res['name'];
      this.price = res['price'];
      this.imageURL = res['imageURL'];
      this.description = res['description'];
      //console.log(res);
    });
  }

  addEquipmentToCart(product) {
    return this.cartService.addEquipmentToCart(product);
  }
}
