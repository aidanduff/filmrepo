import { AngularSrcPage } from './app.po';
import { ElementFinder, browser, by, element } from 'protractor';

describe('angular-src App', function() {
  let page: AngularSrcPage;

  beforeEach(() => {
    page = new AngularSrcPage();
  });

  it('should display message saying testing-sandbox works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('testing-sandbox works!');
  });

  it('should click the button and update the message', () => {
    expect(page.clickButton()).toEqual('Button Clicked');
  });
});
