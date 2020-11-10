import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMedicines() {
    return this.http.get(this.url + '/api/medicine');
  }

  getById(id) {
    return this.http.get(this.url + '/api/medicine/' + id);
  }
}
