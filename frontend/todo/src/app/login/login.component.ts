import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'Yair144'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogIn = false
  constructor() { }

  ngOnInit() {
  }
  
  handleLogin() {
    if(this.username==="Yair144" && this.password==="dummy") {
      this.invalidLogIn = false 
    } else {
      this.invalidLogIn = true
    }

  }
}
