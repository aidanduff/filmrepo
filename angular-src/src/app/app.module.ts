import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTableModule } from 'angular-4-data-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { FullCatalogueComponent } from './components/full-catalogue/full-catalogue.component';
import { MovieComponent } from './components/movie/movie.component';
import { LibraryComponent } from './components/library/library.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { ModalsComponent, AddMovieModalContent, EditMovieModalContent } from './components/modals/modals.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { GetallService} from "./services/getall.service";
import { BgimageComponent } from './components/bgimage/bgimage.component';
import { SliderComponent } from './components/slider/slider.component';





const appRoutes:Routes =[
  {path:'', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'add-movie', component: AddMovieComponent},
  {path:'edit-movie/:id', component: EditMovieComponent},
  {path:'full-catalogue', component: FullCatalogueComponent},
  {path:'movie/:id', component: MovieComponent},
  {path:'library', component: LibraryComponent},
  {path:'sandbox', component: SandboxComponent},
  {path:'carousel', component: CarouselComponent},
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
    LibraryComponent,
    SandboxComponent,
    BgimageComponent,
    AddMovieModalContent,
    EditMovieModalContent,
    ModalsComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    AngularFontAwesomeModule,
    FlexLayoutModule,
    NgbModule.forRoot(),
    SwiperModule.forRoot(SWIPER_CONFIG),
    RouterModule.forRoot(appRoutes),
    
  ],
  entryComponents: [AddMovieModalContent, EditMovieModalContent],
  providers: [GetallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
