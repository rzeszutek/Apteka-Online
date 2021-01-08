import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';
import {map} from 'rxjs/operators';
import {Token} from '../../models/token';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient, public router: Router) {
  }

  authenticate(credentials) {
    return this.http.post(this.url + '/api/user/auth', {
      login: credentials.login,
      password: credentials.password
    }).pipe(
      map((result: Token) => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      })
    );
  }

  passwordCheck(credentials) {
    return this.http.post(this.url + '/api/user/passwordCheck', credentials);
  }

  passwordReset(credentials, token) {
    const jwtHelper = new JwtHelper();
    if (!token) {
      return false;
    }
    if (!(jwtHelper.isTokenExpired(token))) {
      this.createOrUpdate(credentials).subscribe( () => {
        console.log('ech');
      });
    }
  }

  createOrUpdate(credentials) {
    return this.http.post(this.url + '/api/user/create', credentials);
  }

  getId(loginName) {
    return this.http.get(this.url + '/api/user/' + loginName);
  }

  sendEmail(credentials) {
    return this.http.post(this.url + '/api/user/sendEmail', credentials);
  }

  getEmail() {
    return this.currentUser.name;
  }

  isAdmin() {
    if (this.currentUser.role == 'admin') {
      return true;
    }
  }

  logout() {
    return this.http.delete(this.url + '/api/user/logout/' + this.currentUser.userId).subscribe( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/home']);
    });
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelper();
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return !(jwtHelper.isTokenExpired(token));
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
