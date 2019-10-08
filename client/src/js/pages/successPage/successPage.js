const BasePage = require('watch-framework').BasePage;
const AudioHub = require("watch-framework").AudioHub;
const StorageHub = require('watch-framework').StorageHub;


const successSound = '../../../sounds/success-sound.mp3';

class SuccessPage extends BasePage {
	template = require('./successPage.hbs');

  playSound() {
    AudioHub.playSound(successSound);
  }

  pageDidLoad() {
    this.playSound()
    StorageHub.setData("stars", StorageHub.getData("stars") + 1);
  }

  faceButtonEvent()
  {
    if(StorageHub.getData("stars") >= 5)
    {
      this.navigate('final');
    }
    else
    {
      this.navigate('identifyNumber');
    }
  }
}

module.exports = SuccessPage;
