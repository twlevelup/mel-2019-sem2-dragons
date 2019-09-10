const AudioHub = require("watch-framework").AudioHub;
const BasePage = require("watch-framework").BasePage;

const plop = "./sounds/plop.mp3";
const song = "./sounds/music_zapsplat_mr_jelly.mp3";

class SoundDemoPage extends BasePage {
  template = require("./soundDemoPage.hbs");
  leftButtonEvent() {
    AudioHub.playSound(plop);
  }
  rightButtonEvent() {
    AudioHub.playSound(song);
  }
}

module.exports = SoundDemoPage;
