import { BrowseTest } from './browse.po';
import { ElementFinder, browser, by, element } from 'protractor';

describe('Browse Tests', function() {
  let page: BrowseTest;

  beforeEach(() => {
    page = new BrowseTest();
  });

  it('should open the Browse tab', () => {
    page.navigateTo();
    expect(page.openBrowseTab()).toEqual('Choose by Genre:');
  });

  it('should get a movie by genre from the carousel', () => {
    page.navigateTo();
    expect(page.browseCrimeGenre()).toEqual('Genre: Crime');
  });

  it('should get movies by certificate from the carousel', () => {
    page.navigateTo();
    expect(page.browseCertificate()).toEqual('Certificate: 12');
  });

  it('should add a movie and scroll to it on the carousel with the navigation controls', () => {
    page.navigateTo();
    expect(page.carouselScroll()).toEqual('Frozen');
  });

  it('should delete a movie from the single movie page', () => {
    page.navigateTo();
    expect(page.deleteMovieFromSingleMoviePage()).toEqual('Welcome to PictureHouse, the home of movies');
  });

  it('should check the carousel on single page view is displaying movies of the same genre', () => {
    page.navigateTo();
    expect(page.checkSinglePageCarousel()).toEqual('Genre: Animation');
  });
});