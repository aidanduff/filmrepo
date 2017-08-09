import { Component, OnInit } from '@angular/core';
import { GetallService } from "../../services/getall.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies:any[];

  constructor(private getallService:GetallService,
              private router:Router) { }

  ngOnInit() {
    this.getallService.getMovies().subscribe(movies => {
      this.movies= movies;
    });
  }

}
