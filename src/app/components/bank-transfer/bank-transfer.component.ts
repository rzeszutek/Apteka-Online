import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../services/order/order.service";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-bank-transfer',
  templateUrl: './bank-transfer.component.html',
  styleUrls: ['./bank-transfer.component.scss']
})
export class BankTransferComponent implements OnInit {

  public credentials: any
  public bank: '';
  public account: '';

  public banks = [
    {bank: 'AliorBank', img: 'https://secure.tpay.com/_/g/113.png?4'},
    {bank: 'BankPekaoSA', img: 'https://secure.tpay.com/_/g/102.png?4'},
    {bank: 'PKOBankPolski', img: 'https://secure.tpay.com/_/g/108.png?4'},
    {bank: 'Inteligo', img: 'https://secure.tpay.com/_/g/110.png?4'},
    {bank: 'mBank', img: 'https://secure.tpay.com/_/g/160.png?4'},
    {bank: 'INGBankSlaskiSA', img: 'https://secure.tpay.com/_/g/111.png?4'},
    {bank: 'BankMillenniumSA', img: 'https://secure.tpay.com/_/g/114.png?4'},
    {bank: 'CitibankHandlowySA', img: 'https://secure.tpay.com/_/g/132.png?4'},
    {bank: 'BNPParibasBankPolskaSA', img: 'https://secure.tpay.com/_/g/133.png?4'},
    {bank: 'CreditAgricolePolskaSA', img: 'https://secure.tpay.com/_/g/116.png?4'},
    {bank: 'GetinBankSA', img: 'https://secure.tpay.com/_/g/119.png?4'},
    {bank: 'BankPocztowySA', img: 'https://secure.tpay.com/_/g/124.png?4'},
    {bank: 'NeoBank', img: 'https://secure.tpay.com/_/g/159.png?4'},
    {bank: 'EuroPayment', img: 'https://secure.tpay.com/_/g/148.png?4'},
    {bank: 'BankiSpoldzielcze', img: 'https://secure.tpay.com/_/g/135.png?4'},
    {bank: 'PlusBankSA', img: 'https://secure.tpay.com/_/g/145.png?4'},
  ]

  public showSpinner = false;

  constructor(public orderService: OrderService, public router: Router, public cartService: CartService) { }

  ngOnInit(): void {
    this.credentials = history.state;
  }

  pay() {
    this.orderService.createOrUpdate(this.credentials).subscribe( () => {
      this.loadData();
      this.loadPayment();
    });
  }

  loadData() {
   this.showSpinner = true;
   setTimeout( () => {
     this.showSpinner = false;
   }, 2000);
  }

  loadPayment() {
    setTimeout( () => {
      this.cartService.clearCarts();
      this.router.navigate(['/medicine']);
    }, 2500 )
  }
}
