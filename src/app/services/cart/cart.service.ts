import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public medicines = [];
  public equipment = [];

  public cart = {
    'medicines': this.medicines,
    'equipment': this.equipment
  };

  constructor() { }

  addMedicineToCart(product) {
    let exists = false;

    for (let i in this.medicines) {
      if (this.medicines[i].id == product.id) {
        this.medicines[i].quantity++;
        exists = true;
        break;
      }
    }

    if (!exists) {
      this.medicines.push(product);
    }

    console.log(this.getCart());
  }

  removeMedicineFromCart(id) {
    for (let i in this.medicines) {
      if (this.medicines[i].id == id) {
          this.medicines[i].quantity--;
        if (this.medicines[i].quantity == 0) {
          this.medicines = this.medicines.filter(item => item != this.medicines[i]);
        }
      }
    }

    console.log(this.getCart());
  }

  getMedicineItems() {
    return this.medicines;
  }

  addEquipmentToCart(product) {
    let exists = false;

    for (let i in this.equipment) {
      if (this.equipment[i].id == product.id) {
        this.equipment[i].quantity++;
        exists = true;
        break;
      }
    }

    if (!exists) {
      this.equipment.push(product);
    }

    console.log(this.getCart());
  }

  removeEquipmentFromCart(id) {
    for (let i in this.equipment) {
      if (this.equipment[i].id == id) {
        this.equipment[i].quantity--;
        if (this.equipment[i].quantity == 0) {
          this.equipment = this.equipment.filter(item => item != this.equipment[i]);
        }
      }
    }

    console.log(this.getCart());
  }

  getEquipmentItems() {
    return this.equipment;
  }

  getCart() {
    let cart = {
      'medicines': this.medicines,
      'equipment': this.equipment
    };

    return cart;
  }

  getProductCount() {
    let medicineCount = 0;
    let equipmentCount = 0;

    for (let i in this.medicines) {
      medicineCount += this.medicines[i].quantity;
    }
    for (let i in this.equipment) {
      equipmentCount += this.equipment[i].quantity;
    }

    return medicineCount + equipmentCount;
  }

  clearCarts() {
    this.medicines = [];
    this.equipment = [];
    return this.cart;
  }
}
