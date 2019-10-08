const BasePage = require('watch-framework').BasePage;
class CustomBasePage extends BasePage {
    bottomButtonEventHold() {
        this.navigate('/');
    }
  
}

module.exports = CustomBasePage;