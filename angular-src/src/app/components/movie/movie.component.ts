import { Component, OnInit, Output, ViewChild, Input, AfterViewInit } from '@angular/core';
import { GetallService } from "../../services/getall.service";
import { Injectable } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, Params, RouterModule} from "@angular/router";
import { EditMovieModalContent } from '../modals/modals.component';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';
import { Movie } from '../../models/Movie';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  
})
@Injectable()
export class MovieComponent implements OnInit {
  public show: boolean = true;
  id:string;
  key:string;
  movie:Movie;
  @Input()moviesByGenre:any[];
  @ViewChild(SliderComponent)
  private sliderComponent:SliderComponent



  constructor(private getallService:GetallService, private router:Router,
              private modalService: NgbModal, private activatedRoute: ActivatedRoute) {
                // this.id = this.activatedRoute.snapshot.params['id'];
                 activatedRoute.params.subscribe(movie => {
                  this.id = this.activatedRoute.snapshot.params['id'];
                  this.getallService.getMovie(this.id).subscribe(movie => {
                  this.movie = movie;
                  //  this.getallService.getMovieByGenre(this.movie.genre).subscribe(moviesByGenre => {
                  //  this.moviesByGenre = moviesByGenre;
                  //  });
                  });
                 });

              // this.activatedRoute.params.subscribe( params => console.log(params));
    }
   
    ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getallService.getMovie(this.id).subscribe(movie => {
    this.movie = movie;
    this.getallService.getMovieByGenre(this.movie.genre).subscribe(moviesByGenre => {
    this.moviesByGenre = moviesByGenre;
       })
    });
    
  }

    ngAfterViewInit(){
      this.key = this.activatedRoute.snapshot.params['id'];
      console.log(this.key);
      this.getallService.getMovie(this.id).subscribe(movie => {
      this.movie = movie;
      });
    }

    openEdit(value) {
      const modalRef = this.modalService.open(EditMovieComponent);
      modalRef.componentInstance.movie = this.movie;  
    }

    onDeleteClick(){
      console.log('here');
      if(confirm("Are you sure you want to delete?")){
        this.getallService.deleteMovie(this.id).subscribe(movie => {
      this.movie = movie;
      });
        this.router.navigate(['/full-catalogue']);
      }
      
    } 
    
    myInit(params){

    }
}



