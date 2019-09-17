const BasePage = require('../customBasePage/CustomBasePage');

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

}

module.exports = FourOhFourPage;
