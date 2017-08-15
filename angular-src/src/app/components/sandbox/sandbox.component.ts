import { Component, OnInit } from '@angular/core';
import { GetallService } from "../../services/getall.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  movies: Array<any> = [];
  id:String;

  constructor(private getallService:GetallService,
              private router:Router) { }

  ngOnInit() {
    this.getallService.getMovies().subscribe(movies => {
    this.movies= movies;
    });
  }

}
