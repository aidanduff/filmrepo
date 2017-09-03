import { HomePageTest } from './home-page.po';
import { ElementFinder, browser, by, element } from 'protractor';

describe('Home Page Tests', function() {
  let page: HomePageTest;

  beforeEach(() => {
    page = new HomePageTest();
  });

  it('should display the welcome message', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Welcome to PictureHouse, the home of movies');
  });

  it('should click the browse button open the browse page', () => {
    page.navigateTo();
    expect(page.testBrowseButton()).toEqual('Choose by Genre:');
  });

  it('should click the add movies button and open the add movie modal', () => {
    page.navigateTo();
    expect(page.testAddMoviesButton()).toEqual('Add New Movie');
  });

  it('should click the all movies button and open the all movies page', () => {
    page.navigateTo();
    expect(page.testAllMoviesButton()).toEqual('All Movies');
  });
});