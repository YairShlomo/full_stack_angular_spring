import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { VirtualTimeScheduler } from 'rxjs';
import { verifyHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'My Welcome Message'
  name = ''
  welcomeMessageFromService:String
  errorMessage :string
  //ActivatedRoute
  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit() {
    //Complation error this.meesgae = 5
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.service.excuteHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error =>this.handleErrorResponse(error)
     );
  }

  getWelcomeMessageWithParam() {
    this.service.excuteHelloWorldBeanServiceWithPathVar(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error =>this.handleErrorResponse(error)
     );
  }

  handleErrorResponse(error) {
    this.errorMessage = error.error.message
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService =  response.message;
  }

}
