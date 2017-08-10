import { Component, OnInit } from '@angular/core';
import { GetallService } from "../../services/getall.service";
import { Router,ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id:string;
  movie:Object;

  constructor(private getallService:GetallService,
              private router:Router,
              public route:ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.getallService.getMovie(this.id).subscribe(movie => {
    this.movie = movie;
    });
  }

}
