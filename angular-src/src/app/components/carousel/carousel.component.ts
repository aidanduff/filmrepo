import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GetallService } from "../../services/getall.service";
import { Router } from "@angular/router";
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  movies: Array<any> = [];
  id:String;
  picture:string;

  constructor(private getallService:GetallService,
              private router:Router) {
   }

  ngOnInit() {
    this.getallService.getMovies().subscribe(movies => {
      this.movies= movies;
      this.picture = '../../../assets/img/darkback.png';
      // this.picture = '../../../assets/img/redback.jpg';
    });
  }

  goToPage(value){
    console.log(value);
    this.router.navigate(['/movie/'+this.id]);

  }
}
