import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data/data.service";
import { ActivatedRoute } from "@angular/router";
import {CartService} from "../../services/cart/cart.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'medicine-item-details',
  templateUrl: './medicine-item-details.component.html',
  styleUrls: ['./medicine-item-details.component.scss']
})
export class MedicineItemDetailsComponent implements OnInit {

  public items$: any;
  public name: string;
  public price: string;
  public imageUrl: string;
  public reimbursed: string;
  public prescription: string;
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

    this.dataService.getMedicineById(id).subscribe(res => {
      this.id = res['id']
      this.name = res['name'];
      this.price = res['price'];
      this.imageUrl = res['imageUrl'];
      this.reimbursed = res['reimbursed'];
      this.prescription = res['prescription'];
      this.description = res['description'];
      //console.log(res);
      if (this.prescription == 'true') {
        this.prescription = 'Tak';
      } else {
        this.prescription = "Nie";
      }
      if (this.reimbursed == 'true') {
        this.reimbursed = 'Tak';
      } else {
        this.reimbursed = "Nie";
      }
    });
  }

  addMedicineToCart(product) {
    return this.cartService.addMedicineToCart(product);
  }
}
