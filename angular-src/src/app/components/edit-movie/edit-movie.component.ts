import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';
import { GetallService } from '../../services/getall.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../../models/Movie';
import { MovieComponent } from '../movie/movie.component';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'ngx-flash-messages';

const URL = 'http://localhost:3000/';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit, AfterViewInit {
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  @ViewChild('movieId') input;
  private movieComponent:MovieComponent
  _id:any;
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

  constructor(public getallService:GetallService,
              public router:Router,
              public route:ActivatedRoute,
              public activeModal: NgbActiveModal,
            public flashMessagesService:FlashMessagesService) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
    };

  }

  onChange(event: any){
     var files = event.srcElement.value;
     var name = files.replace(/^.*\\/, "");
        this.movie.poster = name;

        event= null;
  }

  ngAfterViewInit(){
    //this.id =this.input.model;
  }


  onSubmit({value}:{value:Movie}){
    value = this.movie;
    console.log(this.movie);
    console.log(this.movie._id);
    this.getallService.updateMovie(this.movie._id, value);
    this.activeModal.close();
    this.flashMessagesService.show('Movie Successfully Edited', {
      classes: ['alert', 'alert-success'], // You can pass as many classes as you need
      timeout: 3000, // Default is 3000
   });
  }

  onClose(){
    this.activeModal.close();
  } 
}