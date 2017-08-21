import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { GetallService } from '../../services/getall.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Movie } from '../../models/Movie';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

const URL = 'http://localhost:3000/';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit, OnDestroy {
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
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
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
      item.name = this.movie.poster;
    };
  }

  onChange(event: any){
     var files = event.srcElement.value;
     var name = files.replace(/^.*\\/, "");
        this.movie.poster = name;

        event= null;
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
