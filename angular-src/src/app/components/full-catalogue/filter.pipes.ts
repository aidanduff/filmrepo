import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../../models/Movie';

@Pipe({
    name: 'FilterPipe',
})
 @Injectable()
export class FilterPipe implements PipeTransform{
    transform(movies: Movie[], args: any[]): any {
    return movies.filter(movie => movie.title.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
  }
}
        