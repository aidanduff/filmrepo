import { Component, OnInit } from '@angular/core';
import { GetallService } from '../../services/getall.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../../models/Movie';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  id:string;
  movie:Movie = {
    title:'',
    writer:'',
    director:'',
    starring:'',
    genre:'',
    country:'',
    year:0,
    language:'',
    runtime:0,
    certificate:0,
    synopsis:'',
    poster:''
  }

  constructor(public getallService:GetallService,
              public router:Router,
              public route:ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //console.log(this.id);

    this.getallService.getMovie(this.id).subscribe(movie => {
    this.movie = movie;
    });
  }

  onSubmit({value}:{value:Movie}){
    //console.log(value);
    this.getallService.updateMovie(this.id, value);

  }
}
