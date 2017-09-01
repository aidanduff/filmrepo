import { ElementFinder, browser, element, by, protractor} from 'protractor';

export class AllMoviesTest {
  
  navigateTo() {
    browser.get('/home');
    browser.ignoreSynchronization = false;
  }

  openAllMoviesTab() {
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(3) > a')).click();
    return element(by.id('allMoviesHead')).getText();
  }

  findMovieByTitle() {
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(3) > a')).click();
    var searchField = element(by.id('tableTitleSearch'));
    searchField.sendKeys('Scarface');
    return element(by.id('tableTitleField')).getText();
  }

  findMovieTitleInEditModal(){
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(3) > a')).click();
    var searchField = element(by.id('tableTitleSearch'));
    searchField.sendKeys('Scarface');
    element(by.css('body > app-root > div > div > app-all-movies > table > tbody > tr > td:nth-child(9) > button.btn.btn-outline-primary.btn-sm.btn-block')).click();
    return element(by.css('body > ngb-modal-window > div > div > app-edit-movie > div > div.card-block > form > div:nth-child(2) > input')).getAttribute('value');
  }

  uploadFile(){
      
      element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(3) > a')).click();
      var searchField = element(by.id('tableTitleSearch'));
      searchField.sendKeys('Scarface');
      element(by.css('body > app-root > div > div > app-all-movies > table > tbody > tr > td:nth-child(9) > button.btn.btn-outline-primary.btn-sm.btn-block')).click();
      var url = 'C:/Users/Admin/Desktop/images/resized/smaller again/and again/scarface.png';
      element(by.id('imgUpload')).sendKeys(url);

      // click upload button
      element(by.css('body > ngb-modal-window > div > div > app-edit-movie > div > div.card-block > form > div:nth-child(13) > button')).click();
      browser.sleep(5000);
      element(by.css('body > ngb-modal-window > div > div > app-edit-movie > div > div.card-block > form > div.button.group > input')).click();
      return element(by.id('posterField')).getAttribute('src');
  }

  editMovieTitle(){
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(3) > a')).click();
    var searchField = element(by.id('tableTitleSearch'));
    searchField.sendKeys('Scarface');
    element(by.css('body > app-root > div > div > app-all-movies > table > tbody > tr > td:nth-child(9) > button.btn.btn-outline-primary.btn-sm.btn-block')).click();
    element(by.css('body > ngb-modal-window > div > div > app-edit-movie > div > div.card-block > form > div:nth-child(2) > input')).clear();
    element(by.css('body > ngb-modal-window > div > div > app-edit-movie > div > div.card-block > form > div:nth-child(2) > input')).sendKeys('The Adventures of Tony Montana');
    element(by.css('body > ngb-modal-window > div > div > app-edit-movie > div > div.card-block > form > div.button.group > input')).click();
    return element(by.id('tableFlash')).getText();
  }

  findMovieByEditedTitle(){
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(3) > a')).click();
    var searchField = element(by.id('tableTitleSearch'));
    searchField.sendKeys('The Adventures of Tony Montana');
    return element(by.id('tableTitleField')).getText();
  }

  openSingleMoviePage(){
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(3) > a')).click();
    var searchField = element(by.id('tableTitleSearch'));
    searchField.sendKeys('The Adventures of Tony Montana');
    element(by.css('body > app-root > div > div > app-all-movies > table > tbody > tr > td:nth-child(9) > a')).click();
    return element(by.css('body > app-root > div > div > app-movie > div.container.outerbox > h3')).getText();
  }

  editInSingleMoviePage(){
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(3) > a')).click();
    var searchField = element(by.id('tableTitleSearch'));
    searchField.sendKeys('The Adventures of Tony Montana');
    element(by.css('body > app-root > div > div > app-all-movies > table > tbody > tr > td:nth-child(9) > a')).click();
    element(by.css('body > app-root > div > div > app-movie > div.container.outerbox > div > div.col-md-8 > button.btn.btn-success.btn-lg')).click();
    element(by.css('body > ngb-modal-window > div > div > app-edit-movie > div > div.card-block > form > div:nth-child(2) > input')).clear();
    element(by.css('body > ngb-modal-window > div > div > app-edit-movie > div > div.card-block > form > div:nth-child(2) > input')).sendKeys('Scarface');
     element(by.css('body > ngb-modal-window > div > div > app-edit-movie > div > div.card-block > form > div:nth-child(8) > input')).clear();
    element(by.css('body > ngb-modal-window > div > div > app-edit-movie > div > div.card-block > form > div:nth-child(8) > input')).sendKeys('1984');
    element(by.css('body > ngb-modal-window > div > div > app-edit-movie > div > div.card-block > form > div.button.group > input')).click();
    return element(by.css('body > app-root > div > div > app-movie > div.container.outerbox > h3')).getText();
  }

  deleteMovie(){
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(3) > a')).click();
    var searchField = element(by.id('tableTitleSearch'));
    searchField.sendKeys('Scarface');
    element(by.css('body > app-root > div > div > app-all-movies > table > tbody > tr > td:nth-child(9) > button.btn.btn-outline-danger.btn-sm.btn-block')).click();
    browser.switchTo().alert().accept();
    return element(by.css('body > app-root > div > div > app-all-movies > table > tbody > tr')).isPresent();
  }

}