import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMedicines() {
    return this.http.get(this.url + '/api/medicine');
  }

  getMedicineById(id) {
    return this.http.get(this.url + '/api/medicine/' + id);
  }

  getEquipment() {
    return this.http.get(this.url + '/api/equipment');
  }

  getEquipmentById(id) {
    return this.http.get(this.url + '/api/equipment/' + id);
  }

  getPrescription(PESEL, code) {
    return this.http.get(this.url + '/api/prescription',  {params: {PESEL, code}});
  }

  createOrUpdateMedicine(credentials) {
    return this.http.post(this.url + '/api/medicine/create', credentials)
  }

  createOrUpdateEquipment(credentials) {
    return this.http.post(this.url + '/api/equipment/create', credentials);
  }

  deleteMedicine(id) {
    return this.http.delete(this.url + '/api/medicine/delete/' + id, { responseType: 'text'});
  }

  deleteEquipment(id) {
    return this.http.delete(this.url + '/api/equipment/delete/' + id, { responseType: 'text'});
  }
}
