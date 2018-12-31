import { Component, OnInit, ChangeDetectionStrategy, Input, Injectable, OnChanges } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { GetallService } from "../../services/getall.service";
import { MovieComponent } from '../movie/movie.component';
import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../../models/Movie';
import { FlashMessagesService } from "ngx-flash-messages";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent {
  movies: Movie[]
  movie: Movie;
  id: string;
  movieFilter: any = { title: '' };
  page: number = 1;
  @Input() collectSize: number;

  constructor(private getallService: GetallService, private router: Router,
    config: NgbPaginationConfig, private modalService: NgbModal, private activatedRoute: ActivatedRoute, private flashMessagesService: FlashMessagesService) {
    this.getallService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.collectSize = movies.length();
    });
    config.pageSize = 4;
  }

  openEdit(movie) {
    console.log(movie);
    this.movie = movie;
    const modalRef = this.modalService.open(EditMovieComponent);
    modalRef.componentInstance.movie = this.movie;
  }

  onDeleteClick(movie) {
    if (confirm("Are you sure you want to delete?")) {
      this.getallService.deleteMovie(movie._id).subscribe(success => {
        var index = this.movies.indexOf(movie, 0);
        if (index > -1) {
          this.movies.splice(index, 1);
          this.getallService.getMovies().subscribe(movies => {
            this.movies = movies;
            this.collectSize = movies.length;
          });
          this.flashMessagesService.show('Movie Successfully Deleted!', {
            classes: ['alert', 'alert-success'], // You can pass as many classes as you need
            timeout: 3000, // Default is 3000
          });
        }
      });
    }
  }

}
