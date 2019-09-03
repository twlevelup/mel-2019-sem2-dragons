const DemoNotification = require("./DemoNotification");

describe("DemoNotification", () => {
  describe("#render", () => {
    it("should render my page correctly", () => {
      const notification = new DemoNotification();
      expect(notification.render()).toContain("This is a Demo Notification:");
    });
  });
});

describe("#rightButtonEvent", () => {
  it("highlight message in red", () => {
    document.body.innerHTML = `<div id='message'></div>`;
    const notification = new DemoNotification();
    notification.rightButtonEvent();
    expect(document.getElementById("message").style.backgroundColor).toBe(
      "red"
    );
  });
});
