import { ElementFinder, browser, element, by, protractor} from 'protractor';

export class BrowseTest {
  
  navigateTo() {
    browser.get('/home');
    browser.ignoreSynchronization = false;
  }

  openBrowseTab() {
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(2) > a')).click();
    return element(by.css('body > app-root > div > div > app-dashboard > div:nth-child(2) > label > h5')).getText();
  }

  browseCrimeGenre(){
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(2) > a')).click();
    element(by.css('body > app-root > div > div > app-dashboard > div:nth-child(2) > div > select')).click();
    element(by.css('body > app-root > div > div > app-dashboard > div:nth-child(2) > div > select > option:nth-child(2)')).click();
    browser.sleep(500);
    element(by.css('body > app-root > div > div > app-dashboard > app-slider:nth-child(3) > div > div > div > div > swiper > div > div.swiper-wrapper > div.swiper-slide.swiper-slide-active > div > div > div > p > a')).click();
    browser.sleep(500);
    return element(by.css('body > app-root > div > div > app-movie > div.container.outerbox > div > div.col-md-8 > table > tbody > tr:nth-child(5)')).getText();
  }

  browseCertificate(){ 
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(2) > a')).click();
    element(by.css('body > app-root > div > div > app-dashboard > div:nth-child(6) > div > select')).click();
    element(by.css('body > app-root > div > div > app-dashboard > div:nth-child(6) > div > select > option:nth-child(4)')).click();
    browser.sleep(500);
    element(by.css('body > app-root > div > div > app-dashboard > app-slider:nth-child(7) > div > div > div > div > swiper > div > div.swiper-wrapper > div.swiper-slide.swiper-slide-active > div > div > div > p > a')).click();
    browser.sleep(500);
    return element(by.css('body > app-root > div > div > app-movie > div.container.outerbox > div > div.col-md-8 > table > tbody > tr:nth-child(6)')).getText();
  }

  carouselScroll(){
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(4) > a')).click();
    var titleField = element(by.css('#modBod > form > div:nth-child(1) > input'));
    titleField.sendKeys('Frozen');
    var writerField = element(by.css('#modBod > form > div:nth-child(2) > input'));
    writerField.sendKeys('Jennifer Lee');
    var directorField = element(by.css('#modBod > form > div:nth-child(3) > input'));
    directorField.sendKeys('Chris Buck');
    var starringField = element(by.css('#modBod > form > div:nth-child(4) > input'));
    starringField.sendKeys('Kristen Bell, Idina Menzel, Jonathan Groff');
    var genreField = element(by.css('#modBod > form > div:nth-child(5) > input'));
    genreField.sendKeys('Animation');
    var countryField = element(by.css('#modBod > form > div:nth-child(6) > input'));
    countryField.sendKeys('USA');
    var yearField = element(by.css('#modBod > form > div:nth-child(7) > input'));
    yearField.sendKeys('2013');
    var languageField = element(by.css('#modBod > form > div:nth-child(8) > input'));
    languageField.sendKeys('English');
    var runtimeField = element(by.css('#modBod > form > div:nth-child(9) > input'));
    runtimeField.sendKeys('102');
    var certField = element(by.css('#modBod > form > div:nth-child(10) > input'));
    certField.sendKeys('5');
    var synopsisField = element(by.css('#modBod > form > div:nth-child(11) > textarea'));
    synopsisField.sendKeys('When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister, Anna, teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.');
    var url = 'C:/Users/Admin/Desktop/images/resized/smaller again/and again/frozen.png';
    element(by.id('imgUpload')).sendKeys(url);
    element(by.css('#modBod > form > div:nth-child(12) > button')).click();
    browser.sleep(5000);
    element(by.css('#submitButton')).click();

    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(2) > a')).click();
    element(by.css('body > app-root > div > div > app-dashboard > div:nth-child(6) > div > select')).click();
    element(by.css('body > app-root > div > div > app-dashboard > div:nth-child(6) > div > select > option:nth-child(3)')).click();
    browser.sleep(500);
    element(by.css('body > app-root > div > div > app-dashboard > app-slider:nth-child(7) > div > div > div > div > swiper > div > div.swiper-button-next')).click();
    element(by.css('body > app-root > div > div > app-dashboard > app-slider:nth-child(7) > div > div > div > div > swiper > div > div.swiper-button-next')).click();
    browser.sleep(500);
    return element(by.css('body > app-root > div > div > app-dashboard > app-slider:nth-child(7) > div > div > div > div > swiper > div > div.swiper-wrapper > div:nth-child(7) > div > div > div > h6')).getText();
  }

  deleteMovieFromSingleMoviePage(){
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(2) > a')).click();
    element(by.css('body > app-root > div > div > app-dashboard > div:nth-child(6) > div > select')).click();
    element(by.css('body > app-root > div > div > app-dashboard > div:nth-child(6) > div > select > option:nth-child(3)')).click();
    browser.sleep(500);
    element(by.css('body > app-root > div > div > app-dashboard > app-slider:nth-child(7) > div > div > div > div > swiper > div > div.swiper-button-next')).click();
    element(by.css('body > app-root > div > div > app-dashboard > app-slider:nth-child(7) > div > div > div > div > swiper > div > div.swiper-button-next')).click();
    browser.sleep(500);
    element(by.css('body > app-root > div > div > app-dashboard > app-slider:nth-child(7) > div > div > div > div > swiper > div > div.swiper-wrapper > div:nth-child(7) > div > div > div > p > a')).click();
    element(by.css('body > app-root > div > div > app-movie > div.container.outerbox > div > div.col-md-8 > button.btn.btn-danger.btn-lg')).click();
    browser.switchTo().alert().accept();
    return element(by.css('body > app-root > div > div > app-home > div > p')).getText();
  }

  checkSinglePageCarousel(){
    element(by.css('body > app-root > div > div > app-navbar > nav > div > ul > li:nth-child(2) > a')).click();
    element(by.css('body > app-root > div > div > app-dashboard > div:nth-child(2) > div > select')).click();
    element(by.css('body > app-root > div > div > app-dashboard > div:nth-child(2) > div > select > option:nth-child(7)')).click();
    browser.sleep(500);
    element(by.css('body > app-root > div > div > app-dashboard > app-slider:nth-child(3) > div > div > div > div > swiper > div > div.swiper-wrapper > div.swiper-slide.swiper-slide-active > div > div > div > p > a')).click();
    browser.sleep(500);
    element(by.css('body > app-root > div > div > app-movie > app-slider > div > div > div > div > swiper > div > div.swiper-wrapper > div:nth-child(3) > div > div > div > p > a')).click();
    return element(by.css('body > app-root > div > div > app-movie > div.container.outerbox > div > div.col-md-8 > table > tbody > tr:nth-child(5)')).getText();

  }
}