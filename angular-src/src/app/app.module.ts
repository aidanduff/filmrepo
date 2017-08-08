import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { FullCatalogueComponent } from './components/full-catalogue/full-catalogue.component';
import { MovieComponent } from './components/movie/movie.component';

import { GetallService} from "./services/getall.service";

const appRoutes:Routes =[
  {path:'', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'add-movie', component: AddMovieComponent},
  {path:'edit-movie/:id', component: EditMovieComponent},
  {path:'full-catalogue', component: FullCatalogueComponent},
  {path:'movie/:id', component: MovieComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    AddMovieComponent,
    EditMovieComponent,
    FullCatalogueComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
