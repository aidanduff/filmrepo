import { Component, OnInit, Output} from '@angular/core';
import { GetallService } from "../../services/getall.service";
import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router,ActivatedRoute, Params } from "@angular/router";
import { EditMovieModalContent } from '../modals/modals.component';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id:string;
  movie:Movie;

  constructor(private getallService:GetallService,
              private router:Router,
              public route:ActivatedRoute,
              private modalService: NgbModal) { }

   
    ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getallService.getMovie(this.id).subscribe(movie => {
    this.movie = movie;
    });
  }

    openEdit(value) {
      const modalRef = this.modalService.open(EditMovieComponent);
      modalRef.componentInstance.movie = this.movie;  
    }

    onDeleteClick(){
      console.log('here');
      if(confirm("Are you sure you want to delete?")){
        this.getallService.deleteMovie(this.id).subscribe(movie => {
      this.movie = movie;
      });
        this.router.navigate(['/']);
    }
  }

}
