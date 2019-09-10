const BasePage = require('watch-framework').BasePage;

class DemoPage extends BasePage {
  template = require('./demoPage.hbs');

  bottomButtonEventDoubleClick() {
    this.navigate('/');
  }
}

module.exports = DemoPage;

