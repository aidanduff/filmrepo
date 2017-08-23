import { Component, ViewChild, OnInit } from '@angular/core';
// import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table-bootstrap4';
import { GetallService } from "../../services/getall.service";
import { Router } from '@angular/router';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent{

    movies:[Object];
    movieCount = 0;

    // @ViewChild(DataTable) filmsTable;

    constructor(private getallService:GetallService,
              private router:Router){

    } 

    reloadFilms(params) {
        this.getallService.getMovies().subscribe(movies => {
        this.movies= movies;
        });
    }

    // cellColor(car) {
    //     return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7)/1.3)*100)) + ')';
    // };

    // // special params:

    // translations = <DataTableTranslations>{
    //     indexColumn: 'Index column',
    //     expandColumn: 'Expand column',
    //     selectColumn: 'Select column',
    //     paginationLimit: 'Max results',
    //     paginationRange: 'Result range'
    // };

}
