const AudioHub = require("watch-framework").AudioHub;
const DemoSoundPage = require("./soundDemoPage");

describe("DemoSoundPage", () => {
  describe("#leftButtonEvent", () => {
    it("audioHub plays a sound", () => {
      spyOn(AudioHub, "playSound");
      const page = new DemoSoundPage();
      page.leftButtonEvent();
      expect(AudioHub.playSound).toBeCalledWith("./sounds/plop.mp3");
    });
  });

  describe("#rightButtonEvent", () => {
    it("audioHub plays a song", () => {
      spyOn(AudioHub, "playSound");
      const page = new DemoSoundPage();
      page.rightButtonEvent();
      expect(AudioHub.playSound).toBeCalledWith(
        "./sounds/music_zapsplat_mr_jelly.mp3"
      );
    });
  });
});
