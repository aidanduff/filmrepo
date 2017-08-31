import { HomePageTest } from './home-page.po';
import { ElementFinder, browser, by, element } from 'protractor';

describe('angular-src App', function() {
  let page: HomePageTest;

  beforeEach(() => {
    page = new HomePageTest();
  });

  it('should display message saying flickJournal', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Welcome to our flickJournal, your life in movies');
  });
});