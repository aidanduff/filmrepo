import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { GetallService } from '../../services/getall.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../../models/Movie';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit, OnDestroy {
  id:string;
  movie:Movie = {
    title:'',
    writer:'',
    director:'',
    starring:'',
    genre:'',
    country:'',
    year:0,
    language:'',
    runtime:0,
    certificate:0,
    synopsis:'',
    poster:''
  }
  @Input() anyDataForm: any;

  constructor(public getallService:GetallService,
              public router:Router,
              public route:ActivatedRoute,
              public activeModal: NgbActiveModal
            ) { }

  ngOnInit() {
  }

  ngOnDestroy(){

  }

  onSubmit({value}:{value:Movie}){
    console.log(value);
    this.getallService.addMovie(value);
    this.activeModal.close();
  }

  onClose(){
    this.activeModal.close();
  }

}
