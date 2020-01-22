import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'My Welcome Message'
  constructor() { }

  ngOnInit() {
    //Complation error this.meesgae = 5
    console.log(this.message)
  }

}
