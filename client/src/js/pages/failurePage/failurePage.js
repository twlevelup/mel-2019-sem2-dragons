const BasePage = require('../customBasePage/CustomBasePage');
const AudioHub = require('watch-framework').AudioHub;

const failureSound = './sounds/failure-sound.mp3';

class FailurePage extends BasePage {
	template = require('./failurePage.hbs');

	playSound() {
		AudioHub.playSound(failureSound);
	}

	pageDidLoad() {
		this.playSound();
    }
  
  faceButtonEvent()
  {
    this.navigate('identifyNumber');
  }
}

module.exports = FailurePage;
