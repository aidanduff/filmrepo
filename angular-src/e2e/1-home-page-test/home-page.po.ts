import { ElementFinder, browser, element, by} from 'protractor';

export class HomePageTest {
  navigateTo() {
    return browser.get('/home');
  }

  getHeaderText() {
    return element(by.className('lead')).getText();
  }
}