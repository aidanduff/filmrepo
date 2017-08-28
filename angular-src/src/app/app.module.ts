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
import { FullCatalogueComponent } from './components/full-catalogue/full-catalogue.component';
import { MovieComponent } from './components/movie/movie.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { ModalsComponent, AddMovieModalContent, EditMovieModalContent } from './components/modals/modals.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {Ng2PaginationModule} from 'ng2-pagination';

import { GetallService} from "./services/getall.service";
import { BgimageComponent } from './components/bgimage/bgimage.component';
import { SliderComponent } from './components/slider/slider.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';


const appRoutes:Routes =[
  {path:'', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'add-movie', component: AddMovieComponent},
  {path:'edit-movie/:id', component: EditMovieComponent},
  {path:'all-movies', component: AllMoviesComponent},
  {path:'movie/:id', component: MovieComponent},
  {path:'sandbox', component: SandboxComponent},
  {path:'bgimg', component: BgimageComponent},
  {path:'slider', component: SliderComponent}
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
    FullCatalogueComponent,
    MovieComponent,
    SandboxComponent,
    BgimageComponent,
    AddMovieModalContent,
    EditMovieModalContent,
    ModalsComponent,
    SliderComponent,
    FileUploadComponent,
    FileSelectDirective,
    AllMoviesComponent
  ],
  imports: [
    Ng2PaginationModule,
    BrowserModule,
    FormsModule,
    FilterPipeModule,
    HttpModule,
    AngularFontAwesomeModule,
    FlexLayoutModule,
    Ng2SmartTableModule,
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
