import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  closeResult: string;

  constructor(public flashMessagesService:FlashMessagesService) { }

  ngOnInit() {
  }

  buttonClicked(){
    this.flashMessagesService.show('Button was clicked', {
      classes: ['alert', 'alert-success'], // You can pass as many classes as you need
      timeout: 3000, // Default is 3000
    });
  }

}
