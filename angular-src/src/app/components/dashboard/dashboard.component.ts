import { Component, OnInit, ViewChild, Input, Injectable } from '@angular/core';
import { GetallService } from "../../services/getall.service";
import { SliderComponent } from '../slider/slider.component';
import { Movie } from '../../models/Movie';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  @Input() moviesByGenre: Movie[];
  @Input() moviesByCertificate: Movie[];
  movies: Movie[];
  genre: string;
  cert;
  movie: Movie;

  constructor(private getallService: GetallService) {
  }

  ngOnInit() {
  }

  onChange(event: any) {
    var selectedGenre = event.srcElement.value;
    if (selectedGenre == 'All') {
      this.moviesByGenre = [];
      this.getallService.getMovies().subscribe(moviesByGenre => {
        this.moviesByGenre = moviesByGenre;
      });
    }
    else {
      this.moviesByGenre = [];
      console.log(selectedGenre);
      this.getallService.getMovieByGenre(selectedGenre).subscribe(moviesByGenre => {
        this.moviesByGenre = moviesByGenre;
      });
    }
  }

  onChangeCert(event: any) {
    var selectedCertificate = event.srcElement.value;
    if (selectedCertificate == 'All') {
      this.moviesByCertificate = [];
      this.getallService.getMovies().subscribe(moviesByGenre => {
        this.moviesByGenre = moviesByGenre;
      });
    }
    else {
      this.moviesByCertificate = [];
      if (selectedCertificate === 'PG') { this.cert = 5 }
      if (selectedCertificate === '12') { this.cert = 12 }
      if (selectedCertificate === '15') { this.cert = 15 }
      if (selectedCertificate === '18') { this.cert = 18 }

      this.getallService.getMovieByCertificate(this.cert).subscribe(moviesByCertificate => {
        this.moviesByCertificate = moviesByCertificate;
      });
    }
  }
}
