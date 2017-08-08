import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetallService {
  
  constructor(private http:Http) { }

  getMovies(){
    return this.http.get('http://localhost:3000/movieApp/films').map( res => res.json());
  }

  getMovie(id:string){
    return this.http.get('http://localhost:3000/movieApp/films/'+id).map( res => res.json());
    
  }
}


