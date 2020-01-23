import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  public isLoggedIn: boolean = false;

  constructor() {
    this.isUserLoggedIn();
  }


  authenticate(username,password) {
    if(username==="Yair144" && password==="dummy") {
      sessionStorage.setItem('authenticaterUser',username)
      return true
    } else {
      return false
    }
  }

    isUserLoggedIn() {
      let user = sessionStorage.getItem('authenticaterUser')
      this.isLoggedIn = !(user === null)
    }

    logout() {
      sessionStorage.removeItem('authenticaterUser');
      this.isLoggedIn = false;

    }
}
