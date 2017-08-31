import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-sandbox',
  templateUrl: './testing-sandbox.component.html',
  styleUrls: ['./testing-sandbox.component.css']
})
export class TestingSandboxComponent implements OnInit {
  clickText:string;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.clickText='Button Clicked';
  }

}