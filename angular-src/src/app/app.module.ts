import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileSelectDirective } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { MovieComponent } from './components/movie/movie.component';
import { ModalsComponent, AddMovieModalContent, EditMovieModalContent } from './components/modals/modals.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {Ng2PaginationModule} from 'ng2-pagination';

import { GetallService} from "./services/getall.service";
import { SliderComponent } from './components/slider/slider.component';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { TestingSandboxComponent } from './components/testing-sandbox/testing-sandbox.component';


const appRoutes:Routes =[
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'add-movie', component: AddMovieComponent},
  {path:'edit-movie/:id', component: EditMovieComponent},
  {path:'all-movies', component: AllMoviesComponent},
  {path:'movie/:id', component: MovieComponent},
  {path:'slider', component: SliderComponent},
  {path:'testbox', component: TestingSandboxComponent}
]
const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: true
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    AddMovieComponent,
    EditMovieComponent,
    MovieComponent,
    AddMovieModalContent,
    EditMovieModalContent,
    ModalsComponent,
    SliderComponent,
    FileSelectDirective,
    AllMoviesComponent,
    TestingSandboxComponent
  ],
  imports: [
    Ng2PaginationModule,
    BrowserModule,
    FormsModule,
    FilterPipeModule,
    HttpModule,
    AngularFontAwesomeModule,
    FlexLayoutModule,
    NgbModule.forRoot(),
    FlashMessagesModule,
    SwiperModule.forRoot(SWIPER_CONFIG),
    RouterModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  entryComponents: [AddMovieModalContent, EditMovieModalContent, SliderComponent, MovieComponent],
  providers: [GetallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
