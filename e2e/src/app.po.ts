import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  async getParagraphText() {
    return element(by.css('div')).getText();
  }

  typeInInput(s: string) {
    element(by.css('input')).sendKeys(s);
  }
}
