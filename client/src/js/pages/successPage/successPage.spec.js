const successPage = require("./successPage");
const AudioHub = require('watch-framework').AudioHub

describe("#success", () => {
  it("should render the happy face png", () => {
    const result = new successPage();
    expect(result.render()).toContain(`<img src="../../../images/happy-face.png" height="100">`);
  });
});

describe("#success sound", () => {
  it("should play success sound", () => {
    spyOn(AudioHub, "playSound");
    const page = new successPage();
    page.playSound();
    expect(AudioHub.playSound).toHaveBeenCalledTimes(1);
  });
});
