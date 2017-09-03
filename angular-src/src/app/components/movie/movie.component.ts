import { Component, OnInit, Output, ViewChild, Input, AfterViewInit, Injectable } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, Params, RouterModule} from "@angular/router";
import { EditMovieComponent } from '../edit-movie/edit-movie.component';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { EditMovieModalContent } from '../modals/modals.component';
import { GetallService } from "../../services/getall.service";
import { SliderComponent } from '../slider/slider.component';
import { FlashMessagesService } from "ngx-flash-messages";
import { Movie } from '../../models/Movie';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  
})
@Injectable()
export class MovieComponent implements OnInit {
  private sliderComponent:SliderComponent
  public show: boolean = true;
  @Input()moviesByGenre:any[];
  @ViewChild(SliderComponent)
  movie:Movie;
  id:string;
  key:string;

  constructor(private getallService:GetallService, private router:Router,
    private modalService: NgbModal, private activatedRoute: ActivatedRoute, private flashMessagesService:FlashMessagesService) {
      activatedRoute.params.subscribe(movie => {
        this.id = this.activatedRoute.snapshot.params['id'];
        this.getallService.getMovie(this.id).subscribe(movie => {
        this.movie = movie;
      });
    });
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
  }

  openEdit() {
    const modalRef = this.modalService.open(EditMovieComponent);
    modalRef.componentInstance.movie = this.movie;  
  }

  onDeleteClick(){
    if(confirm("Are you sure you want to delete?")){
      this.getallService.deleteMovie(this.id).subscribe(movie => {
      this.movie = movie;
    });
    this.router.navigate(['/home']);
    
    }  
  } 
}
