import { Component, OnInit } from '@angular/core';
import { GetallService } from '../../services/getall.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../../models/Movie';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
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
              public route:ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit({value}:{value:Movie}){
    console.log(value);
    this.getallService.addMovie(value);

  }

}
