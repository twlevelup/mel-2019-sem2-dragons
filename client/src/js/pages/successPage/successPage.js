const BasePage = require('watch-framework').BasePage;
const AudioHub = require("watch-framework").AudioHub;

const successSound = "../../../sounds/success-sound.mp3"

class SuccessPage extends BasePage {
  template = require('./successPage.hbs');
  playSound() {
    AudioHub.playSound(successSound);
  }
}

module.exports = SuccessPage;
