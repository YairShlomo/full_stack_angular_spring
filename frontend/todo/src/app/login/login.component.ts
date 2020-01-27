import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

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
    private basicAuthenticationService:BasicAuthenticationService) { }

  ngOnInit() {
  }
  
  handleBasicAuthLogin() {
    this.basicAuthenticationService.excuteAuthenticationService(this.username,this.password).subscribe(
      data => {
      //Redirect to Welcome Page
      this.router.navigate(['welcome',this.username])
      this.invalidLogIn = false 
      },
      error=> {
        this.invalidLogIn = true

      }
    )
  }
  
  handleJWTAuthLogin() {
    this.basicAuthenticationService.excuteJWTAuthenticationService(this.username,this.password).subscribe(
      data => {
      //Redirect to Welcome Page
      this.router.navigate(['welcome',this.username])
      this.invalidLogIn = false 
      },
      error=> {
        this.invalidLogIn = true

      }
    )
  }
}
