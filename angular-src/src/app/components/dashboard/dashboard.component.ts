import { Component, OnInit, ViewChild, Input, Injectable} from '@angular/core';
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
  @Input() moviesByGenre:Movie[];
  @Input() moviesByCertificate:Movie[];
  movies:Movie[];
  genre:string;
  movie:Movie;

  constructor(private getallService:GetallService) { 
  }

  ngOnInit() {
  }

  onChange(event: any){
    this.moviesByGenre = [];
    var selectedGenre = event.srcElement.value;
    console.log(selectedGenre);
    this.getallService.getMovieByGenre(selectedGenre).subscribe(moviesByGenre => {
    this.moviesByGenre = moviesByGenre;
    });
  }

  onChangeCert(event: any){
    this.moviesByCertificate = [];
    var selectedCertificate = event.srcElement.value;
    var cert = 0;
    if(selectedCertificate === 'G'){cert = 0}
    if(selectedCertificate === 'PG'){cert = 5}
    if(selectedCertificate === '12'){cert = 12}
    if(selectedCertificate === '15'){cert = 15}
    if(selectedCertificate === '18'){cert = 18}
  
    console.log(cert);
    this.getallService.getMovieByCertificate(cert).subscribe(moviesByCertificate => {
    this.moviesByCertificate = moviesByCertificate;
    });
  }
}
