import { Component, OnInit, ViewChild} from '@angular/core';
import { GetallService } from "../../services/getall.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  movies:any[];
  picture:string;

  constructor(private getallService:GetallService,
              private router:Router
            ) { }

  ngOnInit() {
    this.getallService.getMovies().subscribe(movies => {
      this.movies= movies;
      this.picture = '../../../assets/img/darkback.png';
      // this.picture = '../../../assets/img/redback.jpg';
    });
  }
}
