import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {

  PRODUCTS = [
    {id: 1, name:'Ibuprom', price: 10.99, image: 'https://static2.aptekagemini.pl/assets/produkty/9028327/min6/nurofen-express-forte-400-mg-12-tabletek-15953706211.jpg'},
    {id: 2, name:'Rutinoscorbin', price: 4.99, image: 'https://static2.aptekagemini.pl/assets/produkty/0042739/min6/rutinoscorbin-25mg-100mg-150-tabletek-15925064581.jpg'},
    {id: 3, name:'Mucosolvan', price: 8.99, image: 'https://static2.aptekagemini.pl/assets/produkty/0016602/min6/mucosolvan-mini-15mg-5ml-syrop-dla-dzieci-powyzej-1-roku-zycia-100ml-15925064131.jpg'},
    {id: 4, name:'Nurofen Forte', price: 12.55, image: 'https://static2.aptekagemini.pl/assets/produkty/0001519/min6/nurofen-forte-400mg-48-tabletek-15925111281.jpg'},
    {id: 5, name:'Magne-B6', price: 13.99, image: 'https://static2.aptekagemini.pl/assets/produkty/0015471/min6/magne-b6-max-50-tabletek-15925066381.jpg'},
    {id: 6, name:'Femibion', price: 11.00, image: 'https://static2.aptekagemini.pl/assets/produkty/0085671/min6/femibion-2-ciaza-56-tabletek-56-kapsulek-dodatkowo-lysi-tran-islandzki-plyn-smak-cytrynowy-240-ml-16006779081.jpg'},
    {id: 7, name:'Paracetamol', price: 9.99, image: 'https://static2.aptekagemini.pl/assets/produkty/0034102/min6/paracetamol-500mg-apteomed-20-tabletek-15925085371.jpg'},
    {id: 8, name:'Ascorvita', price: 14.25, image: 'https://static2.aptekagemini.pl/assets/produkty/0003359/min6/ascorvita-witamina-c-additiva-1000mg-20-tabletek-musujacych-15925072431.jpg'},
    //{id: 9, name:'Essentiale Max', price: 15.50, image: 'https://static2.aptekagemini.pl/assets/produkty/0021424/min6/essentiale-max-600mg-30-kapsulek-15925077501.jpg'}
  ];




  constructor() { }

  ngOnInit(): void {
  }
}
