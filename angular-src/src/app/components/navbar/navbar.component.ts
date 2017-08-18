import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AddMovieModalContent } from '../modals/modals.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private modalService: NgbModal) {}
      private anyData: any;
      private anyDataForm: any;

    open() {
      const modalRef = this.modalService.open(AddMovieModalContent);
      modalRef.componentInstance.anyDataForm = this.anyData;
      console.log('in navbar component');
    }

}
