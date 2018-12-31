import { Component, ViewChild, OnInit, Input, Output, AfterViewInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GetallService } from "../../services/getall.service";
import { Router, ActivatedRoute, Params, RouterModule, RouterOutlet } from "@angular/router";
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{
  public show: boolean = true;
  @Input()movies:any[];

  public type: string = 'component';

  public config: SwiperConfigInterface = {
    scrollbar: null,
    direction: 'horizontal',
    slidesPerView: 5,
    observer: true,
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
              private router:Router,
              private route:ActivatedRoute) {}

  ngOnInit(){
    this.getallService.getMovies().subscribe(movies => {
      this.movies= movies;
    });
  }

}

