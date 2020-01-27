import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATION_USER = 'authentificationUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  public isLoggedIn: boolean = false;

  constructor(
    private http: HttpClient
  ) {
    this.isUserLoggedIn();
  }

  excuteJWTAuthenticationService(username,password) {
    return this.http.post<any>(`${API_URL}/authenticate`,{
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATION_USER, username)
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
          this.isLoggedIn = true;
          return data;
        },
        error => {
          this.isLoggedIn = false;
        }
      )
    );
  }

  excuteAuthenticationService(username,password) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATION_USER, username)
          sessionStorage.setItem(TOKEN, basicAuthHeaderString)
          this.isLoggedIn = true;
          return data;
        },
        error => {
          this.isLoggedIn = false;
        }
      )
    );
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'Yair144'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic ' +window.btoa(username + ':' + password) 
    return basicAuthHeaderString
  }
  
  getAuthenticationUser() {
    return sessionStorage.getItem(AUTHENTICATION_USER)
  }

  getAuthenticationToken() {
    if(this.getAuthenticationUser()) {
      return sessionStorage.getItem(TOKEN)
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATION_USER)
    this.isLoggedIn = !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATION_USER);
    this.isLoggedIn = false;
  }
}

  export class AuthenticationBean{
    constructor(public message:string) {}
  }
