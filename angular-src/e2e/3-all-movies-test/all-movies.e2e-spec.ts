import { AllMoviesTest } from './all-movies.po';
import { ElementFinder, browser, by, element } from 'protractor';

describe('All Movies Tests', function() {
  let page: AllMoviesTest;

  beforeEach(() => {
    page = new AllMoviesTest();
  });

  it('should open the All Movies tab', () => {
    page.navigateTo();
    expect(page.openAllMoviesTab()).toEqual('All Movies');
  });

  it('should enter the title in the search box and find the movie by title ', () => {
    page.navigateTo();
    expect(page.findMovieByTitle()).toEqual('Scarface');
  });

  it('should open the edit modal from the table and find the title in the title field', () => {
    page.navigateTo();
    expect(page.findMovieTitleInEditModal()).toEqual('Scarface');
  });

  it('should upload a file', () => {
    page.navigateTo();
    expect(page.uploadFile()).toEqual('http://localhost:3000/uploads/scarface.png');
  });

  it('should open the edit modal from the table and edit the title', () => {
    page.navigateTo();
    browser.ignoreSynchronization = true;
    expect(page.editMovieTitle()).toEqual('Movie Successfully Edited');
  });

  it('should find the movie by the edited title', () => {
    page.navigateTo();
    expect(page.findMovieByEditedTitle()).toEqual('The Adventures of Tony Montana');
  });

  it('should open the single movie page from the all movies page', () => {
    page.navigateTo();
    expect(page.openSingleMoviePage()).toEqual('The Adventures of Tony Montana (1983)');
  });

  it('should edit the movie title and year on the single movie page', () => {
    page.navigateTo();
    expect(page.editInSingleMoviePage()).toEqual('Scarface (1984)');
  });

  it('should delete the movie using the delete button on the All Movies page', () => {
    page.navigateTo();
    expect(page.deleteMovie()).toBeFalsy();
  });
});