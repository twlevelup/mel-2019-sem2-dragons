const BasePage = require('watch-framework').BasePage;
class CustomBasePage extends BasePage {
    bottomButtonEventDoubleClick() {
        this.navigate('/');
      }
  
}

module.exports = CustomBasePage;