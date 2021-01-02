import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {DataService} from "../../services/data/data.service";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {

  public credentials = {
    PESEL: '',
    code: ''
  }

  public items$: any;
  public medicines: any;

  constructor(public authService: AuthService, public dataService: DataService, public router: Router, public cartService: CartService) { }

  ngOnInit(): void {}

  loggedIn() {
    return this.authService.isLoggedIn();
  }

  getPrescription(PESEL, code) {
    return this.dataService.getPrescription(PESEL, code).subscribe(response => {
      this.items$ = response;
      console.log(this.items$);
      if (this.items$) {
        this.medicines = this.items$.medicines;
        for(let i in this.medicines) {
          this.cartService.addMedicineToCart(this.medicines[i]);
        }
        this.router.navigate(['/order']);
      }
    });
  }
}
