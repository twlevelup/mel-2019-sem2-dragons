const FourOhFourPage = require('../404Page/404Page');
const TeamPage = require('../teamPage/teamPage');
const DemoPage = require('../demoPage/demoPage');
const ContactPage = require('../contactsPage/contactsPage');
const IdentifyNumberPage = require('../identifyNumberPage/identifyNumberPage');

describe('CustomBasePage', () => {
    describe('#bottomButtonEventHold', () => {
    it('should take user to the homepage', () => {
      const props = {
        navigate: () => {},
      };
      
      for(var page in [
          new FourOhFourPage(props),
          new TeamPage(props),
          new ContactPage(props),
          new DemoPage(props),
          new IdentifyNumberPage(props)
      ])
      {
        spyOn(page, 'navigate');
      
        page.bottomButtonEventHold();
        expect(page.navigate).toHaveBeenCalledWith('/');
      }
    });
  });
});