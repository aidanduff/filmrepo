import { Component, OnInit } from '@angular/core';
import { GetallService } from "../../services/getall.service";
import { Router } from "@angular/router";
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from './filter.pipes';

@Component({
  selector: 'app-full-catalogue',
  templateUrl: './full-catalogue.component.html',
  styleUrls: ['./full-catalogue.component.css']
})
export class FullCatalogueComponent implements OnInit {
  movies:any[];

  constructor(private getallService:GetallService,
              private router:Router) { }

  ngOnInit() {
    this.getallService.getMovies().subscribe(movies => {
      this.movies= movies;
    });
  }

}
