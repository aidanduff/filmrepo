import { Component, OnInit, Inject } from '@angular/core';
import { AddMovieModalContent } from '../modals/modals.component';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  private anyData: any;
  private anyDataForm: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
      const modalRef = this.modalService.open(AddMovieModalContent);
      modalRef.componentInstance.anyDataForm = this.anyData;
      console.log('in navbar component');
  }

  
}
