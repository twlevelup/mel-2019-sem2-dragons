const HomePage = require("./pages/homePage/homePage");
const ContactsPage = require("./pages/contactsPage/contactsPage");
const TeamPage = require("./pages/teamPage/teamPage");
const FourOhFour = require("./pages/404Page/404Page");
const DemoPage = require("./pages/demoPage/demoPage");
const DemoSound = require("./pages/soundDemoPage/soundDemoPage");

module.exports = {
  "/": HomePage,
  contacts: ContactsPage,
  team: TeamPage,
  "404": FourOhFour,
  demo: DemoPage,
  demoSound: DemoSound
};
