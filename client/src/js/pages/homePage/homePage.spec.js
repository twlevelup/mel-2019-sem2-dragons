const HomePage = require("./homePage");
const StorageHub = require("watch-framework").StorageHub;
const AudioHub = require("watch-framework").AudioHub;

describe("HomePage", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  describe("#pageWillLoad", () => {
    it("should set contacts data on page load", () => {
      spyOn(StorageHub, "setData");
      const page = new HomePage();
      page.pageWillLoad();
      expect(StorageHub.setData).toBeCalledWith("contacts", expect.any(Array));
    });
  });

  describe("#render", () => {
    it("should render the username", () => {
      const page = new HomePage();
      expect(page.render()).toContain(`<h1>Hello, Kiddo!</h1>`);
    });
  });

  describe("#render", () => {
    it("should render the cute character", () => {
      const page = new HomePage();
      const string = expect(page.render()).toContain(
        `<img src="../../../images/donutcat.gif" height="100">`
      );
    });
  });

  describe("#updateTimeDisplay", () => {
    it("updateTimeDisplays calls clock-time if its in the window", () => {
      const page = new HomePage();

      watchFace.innerHTML = page.render();

      jest.spyOn(page, "getDateTime");
      page.updateTimeDisplay(page.getDateTime);
      expect(page.getDateTime).toHaveBeenCalledTimes(1);
    });
  });

  describe("#updateTimeDisplay", () => {
    it("updateTimeDisplays does not call clock-time if its not in the window", () => {
      const page = new HomePage();

      jest.spyOn(page, "getDateTime");
      page.updateTimeDisplay(page.getDateTime);
      expect(page.getDateTime).toHaveBeenCalledTimes(0);
    });
  });

  describe("#updateTimeEverySecond", () => {
    it("update time display gets called three times in 3000 ms", () => {
      const page = new HomePage();

      spyOn(page, "updateTimeDisplay");

      jest.useFakeTimers();
      page.updateTimeEverySecond();
      jest.runTimersToTime(3000);

      expect(page.updateTimeDisplay).toHaveBeenCalledTimes(3);
    });
  });
});
