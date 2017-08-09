import { Component, OnInit } from '@angular/core';
import { GetallService } from '../../services/getall.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  id:string;
  movie:Object = {
    title:''
  }

  constructor(public getallService:GetallService,
              public router:Router,
              public route:ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.getallService.getMovie(this.id).subscribe(movie => {
    this.movie = movie;
    console.log(this.movie);
    });
  }

}
