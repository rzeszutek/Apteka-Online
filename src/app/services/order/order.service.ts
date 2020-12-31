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
}
