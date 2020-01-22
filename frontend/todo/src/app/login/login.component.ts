import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  //Router 
  constructor(private router : Router) { }

  ngOnInit() {
  }
  
  handleLogin() {
    if(this.username==="Yair144" && this.password==="dummy") {
      //Redirect to Welcome Page
      this.router.navigate(['welcome',this.username])
      this.invalidLogIn = false 
    } else {
      this.invalidLogIn = true
    }

  }
}
