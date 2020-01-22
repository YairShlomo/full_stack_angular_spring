import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'My Welcome Message'
  name = ''
  //ActivatedRoute
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    //Complation error this.meesgae = 5
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

}
