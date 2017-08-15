import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bgimage',
  templateUrl: './bgimage.component.html',
  styleUrls: ['./bgimage.component.css']
})
export class BgimageComponent implements OnInit {
  picture:string;

  constructor() { }

  ngOnInit() {
    this.picture = '../../../assets/img/darkback.png';
    // this.picture = '../../../assets/img/titanic.png';
  }

}
