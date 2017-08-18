import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-movie-modal-content',
  template: ` <app-add-movie></app-add-movie> `
})

export class AddMovieModalContent{

  constructor(public activeModal: NgbActiveModal) {}

}

@Component({
  selector: 'edit-movie-modal-content',
  template: ` <app-edit-movie></app-edit-movie> `
})

export class EditMovieModalContent{

  constructor(public activeModal: NgbActiveModal) {}
  
}

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit{

  constructor(private modalService: NgbModal) { }

  ngOnInit(){
    console.log('modal');
  }
}
