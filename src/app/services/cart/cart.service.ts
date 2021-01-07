import {Injectable} from '@angular/core';

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
        if (this.medicines[i].quantity > 1) {
          this.medicines[i].quantity--;
          console.log(this.medicines);
        }
        if (this.medicines[i].quantity == 0) {
          this.medicines = this.medicines.filter(item => item != this.medicines[i]);

        }
      }
    }
  }

  removeMedicine(id) {
    this.medicines.forEach( item => {
      if (item.id == id) {
        let index = this.medicines.indexOf(item);
        let array1 = this.medicines.slice(0, index);
        let array2 = this.medicines.slice(index+1, this.medicines.length);
        this.medicines = [];
        console.log(array1, array2);
        this.medicines = this.medicines.concat(array1);
        this.medicines = this.medicines.concat(array2);
        console.log(this.medicines);
      }
    })
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
        if (this.equipment[i].quantity > 1) {
          this.equipment[i].quantity--;
          console.log(this.equipment);
        }
        if (this.equipment[i].quantity == 0) {
          this.equipment = this.equipment.filter(item => item != this.equipment[i]);
        }
      }
    }
    console.log(this.getCart());
  }

  removeEquipment(id) {
    this.equipment.forEach( item => {
      if (item.id == id) {
        let index = this.equipment.indexOf(item);
        let array1 = this.equipment.slice(0, index);
        let array2 = this.equipment.slice(index+1, this.equipment.length);
        this.equipment = [];
        console.log(array1, array2);
        this.equipment = this.equipment.concat(array1);
        this.equipment = this.equipment.concat(array2);
        console.log(this.equipment);
      }
    })
  }

  getEquipmentItems() {
    return this.equipment;
  }

  getCart() {
    return {
      'medicines': this.medicines,
      'equipment': this.equipment
    };
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
