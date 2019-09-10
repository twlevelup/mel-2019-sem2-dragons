const BasePage = require('watch-framework').BasePage;

class FourOhFourPage extends BasePage {
  template = require('./404Page.hbs');

  leftButtonEvent() {
    this.navigate('/');
  }
  rightButtonEvent() {
    this.navigate('/');
  }
  topButtonEvent() {
    this.navigate('/');
  }
  bottomButtonEvent() {
    this.navigate('/');
  }

  bottomButtonEventDoubleClick() {
    this.navigate('/');
  }

}

module.exports = FourOhFourPage;
