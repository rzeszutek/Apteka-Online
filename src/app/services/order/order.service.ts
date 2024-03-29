import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelper} from "angular2-jwt";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createOrUpdate(credentials) {
    return this.http.post(this.url + '/api/order/create', credentials);
  }

  get currentUser() {
    const token = this.getToken();
    if (!token) {
      return null;
    }

    return new JwtHelper().decodeToken(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getOrder(id) {
    return this.http.get(this.url + '/api/order/' + id);
  }

  getOrders() {
    return this.http.get(this.url + '/api/order');
  }

  getUserOrders(userId) {
    return this.http.get(this.url + '/api/orders/?userId=' + userId);
  }

  deleteOrder(id) {
    return this.http.delete(this.url + '/api/order/delete/' + id, { responseType: 'text'});
  }
}
