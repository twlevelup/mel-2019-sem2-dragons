const DemoPage = require('./demoPage');
const HomePage = require('../homePage/homePage');

describe('The Demo Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new DemoPage();
      expect(page.render()).toContain('This is a demo');
    });
  });

  describe('#bottomButtonEventDoubleClick', () => {
    it('should take user to the homepage', () => {
      const props = {
        navigate: () => {},
      };
      const page = new DemoPage(props);
      spyOn(page, 'navigate');
      
      page.bottomButtonEventDoubleClick();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
