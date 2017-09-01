import { ElementFinder, browser, element, by, protractor} from 'protractor';

export class AddMovieTest {
  navigateTo() {
    browser.get('/home');
    browser.ignoreSynchronization = false;
  }

  openModal() {
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(4) > a')).click();
    return element(by.css('body > ngb-modal-window > div > div > add-movie-modal-content > app-add-movie > div > div.card-header')).getText();
  }

  submitEmptyForm(){
      element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(4) > a')).click();
      element(by.css('#submitButton')).click();
      browser.sleep(2000);
      browser.ignoreSynchronization = true;
      return element(by.id('addMovieFlash')).getText();
  }

  submitPartiallyFilledForm(){
      element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(4) > a')).click();
      var titleField = element(by.css('#modBod > form > div:nth-child(1) > input'));
      titleField.sendKeys('Scarface');
      var writerField = element(by.css('#modBod > form > div:nth-child(2) > input'));
      writerField.sendKeys('Oliver Stone');
      var directorField = element(by.css('#modBod > form > div:nth-child(3) > input'));
      directorField.sendKeys('Brian De Palma');
      element(by.css('#submitButton')).click();
      browser.ignoreSynchronization = true;
      return element(by.id('addMovieFlash')).getText();
  }

   submitFullyFilledForm(){
      element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(4) > a')).click();

      var titleField = element(by.css('#modBod > form > div:nth-child(1) > input'));
      titleField.sendKeys('Scarface');
      var writerField = element(by.css('#modBod > form > div:nth-child(2) > input'));
      writerField.sendKeys('Oliver Stone');
      var directorField = element(by.css('#modBod > form > div:nth-child(3) > input'));
      directorField.sendKeys('Brian De Palma');
      var starringField = element(by.css('#modBod > form > div:nth-child(4) > input'));
      starringField.sendKeys('Al Pacino, Michelle Pfeiffer, Steven Bauer');
      var genreField = element(by.css('#modBod > form > div:nth-child(5) > input'));
      genreField.sendKeys('Crime');
      var countryField = element(by.css('#modBod > form > div:nth-child(6) > input'));
      countryField.sendKeys('USA');
      var yearField = element(by.css('#modBod > form > div:nth-child(7) > input'));
      yearField.sendKeys('1983');
      var languageField = element(by.css('#modBod > form > div:nth-child(8) > input'));
      languageField.sendKeys('English');
      var runtimeField = element(by.css('#modBod > form > div:nth-child(9) > input'));
      runtimeField.sendKeys('170');
      var certField = element(by.css('#modBod > form > div:nth-child(10) > input'));
      certField.sendKeys('18');
      var synopsisField = element(by.css('#modBod > form > div:nth-child(11) > textarea'));
      synopsisField.sendKeys('In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.');
      var posterField = element(by.id('posterField'));
      posterField.sendKeys('scarface.jpg');

      element(by.css('#submitButton')).click();
      browser.ignoreSynchronization = true;
      return element(by.id('homeFlash')).getText();
  }


}