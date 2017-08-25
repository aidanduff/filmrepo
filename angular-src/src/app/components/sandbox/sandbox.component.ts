import { Component, OnInit, ChangeDetectionStrategy, Input, Injectable } from '@angular/core';
import { GetallService } from "../../services/getall.service";
import { Router } from "@angular/router";
import { Pipe, PipeTransform } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';
import { MovieComponent } from '../movie/movie.component';
import { Movie } from '../../models/Movie';
import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
@Injectable()
export class SandboxComponent implements OnInit {
  movies:any[];
  movie:Movie;
  id:string;
  movieFilter: any = { title: '' };
  page: number = 1;
  @Input() collectSize:number;
  
  constructor(private getallService:GetallService,
  private router:Router, config: NgbPaginationConfig, private modalService: NgbModal) {
    this.getallService.getMovies().subscribe(movies => {
      this.movies= movies;
      this.collectSize = movies.length;
    });
    config.pageSize = 4; 
   }

  ngOnInit() {
    this.getallService.getMovies().subscribe(movies => {
    this.movies = movies;
    this.collectSize = movies.length;
       });
    }

  ngAfterViewInit(){
    this.getallService.getMovies().subscribe(movies => {
    this.movies = movies;
    this.collectSize = movies.length;
    });
  }

  openEdit(value) {
    this.getallService.getMovie(value._id).subscribe(movie => {
    this.movie = movie;
    const modalRef = this.modalService.open(EditMovieComponent);
    modalRef.componentInstance.movie = this.movie; 
    this.getallService.getMovies().subscribe(movies => {
    this.movies= movies;
      });
    });
  }

  onChange(event: any){
     this.getallService.getMovies().subscribe(movies => {
    this.movies= movies;
     });
  }
}