import { ElementFinder, browser, element, by} from 'protractor';


export class AngularSrcPage {
  navigateTo() {
    return browser.get('/testbox');
  }

  getParagraphText() {
    return element(by.css('p')).getText();
  }

  clickButton(){
    element(by.buttonText('Click')).click();
    return element(by.css('h2')).getText(); 
  }
}