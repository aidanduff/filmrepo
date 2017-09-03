import { ElementFinder, browser, element, by} from 'protractor';

export class HomePageTest {
  navigateTo() {
    return browser.get('/home');
  }

  getHeaderText() {
    return element(by.className('lead')).getText();
  }

  testBrowseButton(){
    element(by.css('body > app-root > div > div > app-home > div > div.card-deck > div:nth-child(1) > div.card-footer > button')).click();
    return element(by.css('body > app-root > div > div > app-dashboard > div:nth-child(2) > label > h5')).getText();
  }

  testAddMoviesButton(){
    element(by.css('body > app-root > div > div > app-home > div > div.card-deck > div:nth-child(2) > div.card-footer > button')).click();
    return element(by.css('#addMovieHead')).getText();
  }

  testAllMoviesButton(){
    element(by.css('body > app-root > div > div > app-home > div > div.card-deck > div:nth-child(3) > div.card-footer > button')).click();
    return element(by.css('#allMoviesHead')).getText();
  }
}