import { Component, OnInit } from '@angular/core';
import { GetallService } from "../../services/getall.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  movies: Array<any> = [];

  constructor(private getallService:GetallService,
              private router:Router) {
   }

  ngOnInit() {
    this.getallService.getMovies().subscribe(movies => {
      this.movies= movies;
    });
  }

}
