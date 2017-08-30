import { AngularSrcPage } from './app.po';
import { ElementFinder, browser, by, element } from 'protractor';

describe('angular-src App', function() {
  let page: AngularSrcPage;

  beforeEach(() => {
    page = new AngularSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('testing-sandbox works!');
  });
});
