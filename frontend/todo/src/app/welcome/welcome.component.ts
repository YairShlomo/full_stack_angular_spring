import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'My Welcome Message'
  name = ''
  welcomeMessageFromService:String
  //ActivatedRoute
  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit() {
    //Complation error this.meesgae = 5
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log(this.service.excuteHelloWorldBeanService());
    this.service.excuteHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
     );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService =  response.message;
  }

}
