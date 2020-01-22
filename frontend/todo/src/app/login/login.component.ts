import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(private router : Router,
    private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit() {
  }
  
  handleLogin() {
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)) {
      //Redirect to Welcome Page
      this.router.navigate(['welcome',this.username])
      this.invalidLogIn = false 
    } else {
      this.invalidLogIn = true
    }
  }
  
}
