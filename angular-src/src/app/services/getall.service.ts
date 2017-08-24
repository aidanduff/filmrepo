import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';

@Injectable()
export class GetallService {
  movie:Movie;
  id:String;
  
  constructor(private http:Http) { }

  getMovies(){
    return this.http.get('http://localhost:3000/movieApp/films').map( res => res.json());
  }

  getMovie(id:string){
    console.log('getMovie called')
    return this.http.get('http://localhost:3000/movieApp/films/'+id).map( res => res.json());
    
  }

  updateMovie(id:string, movie:Movie){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/movieApp/films/'+id, movie, { headers: headers }).map((res: Response) => res.json()).subscribe(movie => this.movie = movie);
  }

  addMovie(movie:Movie): Observable<Movie>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/movieApp/films/', movie, { headers: headers }).map((res: Response) => res.json());
  }

  deleteMovie(id:string){
    return this.http.delete('http://localhost:3000/movieApp/films/'+id).map( res => res.json());
    
  }

  getMovieByGenre(genre:string){
    return this.http.get('http://localhost:3000/movieApp/films/genre/'+genre).map( res => res.json());
  }

  getMovieByTitle(title:string){
    return this.http.get('http://localhost:3000/movieApp/films/title/'+title).map( res => res.json());
  }
}


