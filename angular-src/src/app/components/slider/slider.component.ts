import { Component, ViewChild, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GetallService } from "../../services/getall.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{
  public show: boolean = true;
  movies:any[];

  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide',
    'Seventh slide',
    'Eighth slide',
    'Ninth slide',
    'Tenth slide',
    'Eleventh slide',
    'Twelfth slide'
  ];

  public type: string = 'component';

  public config: SwiperConfigInterface = {
    scrollbar: null,
    direction: 'horizontal',
    slidesPerView: 4,
    scrollbarHide: false,
    keyboardControl: true,
    mousewheelControl: true,
    scrollbarDraggable: true,
    scrollbarSnapOnRelease: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  };

  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

  constructor(private getallService:GetallService,
              private router:Router) {}

  ngOnInit(){
    this.getallService.getMovies().subscribe(movies => {
      this.movies= movies;
    });
  }

  toggleType() {
    this.type = this.type == 'component' ? 'directive' : 'component';
  }

  toggleDirection() {
    this.config.direction = (this.config.direction == 'horizontal') ? 'vertical' : 'horizontal';
  }

  toggleSlidesPerView() {
    if (this.config.slidesPerView != 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = +this.config.slidesPerView + 1;
    }
  }

  toggleOverlayControls() {
    if (this.config.pagination) {
      this.config.scrollbar = '.swiper-scrollbar';
      this.config.pagination = null;
      this.config.nextButton = null;
      this.config.prevButton = null;
    } else if (this.config.scrollbar) {
      this.config.scrollbar = null;
    } else {
      this.config.pagination = '.swiper-pagination';
      this.config.nextButton = '.swiper-button-next';
      this.config.prevButton = '.swiper-button-prev';
    }
  }

  toggleKeyboardControl() {
    this.config.keyboardControl = !this.config.keyboardControl;
  }

  toggleMouseWheelControl() {
    this.config.mousewheelControl = !this.config.mousewheelControl;
  }

  onIndexChange(index: number) {
    console.log('Swiper index: ' + index);
  }
}

