import { AddMovieTest } from './add-movie.po';
import { ElementFinder, browser, by, element } from 'protractor';

describe('Add Movie Tests', function() {
  let page: AddMovieTest;

  beforeEach(() => {
    page = new AddMovieTest();
  });

  it('should open the add movie modal', () => {
    page.navigateTo();
    expect(page.openModal()).toEqual('Add New Movie');
  });

  it('should display an error message when submitted with empty fields ', () => {
    page.navigateTo();
    browser.ignoreSynchronization = true;
    browser.sleep(1000);
    expect(page.submitEmptyForm()).toEqual('All fields are required!'); 
    browser.ignoreSynchronization = false;
  });

  it('should display an error message when partially completed form submitted', () => {
    page.navigateTo();
    browser.ignoreSynchronization = true;
    expect(page.submitPartiallyFilledForm()).toEqual('All fields are required!'); 
    browser.ignoreSynchronization = false;
  });

  it('should display a success message when fully completed form submitted', () => {
    page.navigateTo();
    browser.ignoreSynchronization = true;
    expect(page.submitFullyFilledForm()).toEqual('Movie Successfully Added!'); 
    browser.ignoreSynchronization = false;
  });

});