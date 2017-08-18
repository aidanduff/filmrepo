import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { GetallService } from '../../services/getall.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../../models/Movie';
import { MovieComponent } from '../movie/movie.component';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit, AfterViewInit {
  @ViewChild('movieId') input;
  private movieComponent:MovieComponent
  id:any;
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
              public route:ActivatedRoute,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {
    // this.getallService.getMovie(this.id).subscribe(movie => {
    // this.movie = movie;
    // });

  }

  ngAfterViewInit(){
    this.id =this.input.model;
  }


  onSubmit({value}:{value:Movie}){
    value = this.movie;
    console.log(this.id);
    this.getallService.updateMovie(this.id, value);
    this.activeModal.close();
    // this.router.navigate(['/movie/'+this.id]);
  }

  onClose(){
    this.activeModal.close();
  }
}