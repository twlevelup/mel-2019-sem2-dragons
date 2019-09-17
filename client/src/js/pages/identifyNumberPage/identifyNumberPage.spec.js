const identifyNumberPage = require("./identifyNumberPage");
const AudioHub = require("watch-framework").AudioHub;

describe('The identify number Page', () => {
    let watchFace;
    beforeEach(() => {
      document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
      watchFace = document.getElementById('watch-face');
    });
  
    describe('#render', () => {
      it('should contain the correct numbers', () => {
        const page = new identifyNumberPage();
        expect(page.render()).toContain('7');
        expect(page.render()).toContain('8');
      });
    });
    describe('#pageWilload', () => {
        it('should play the sound of the number', () => {
            spyOn(AudioHub, "playSound");
            const page = new identifyNumberPage();
            page.pageWillLoad();
            expect(AudioHub.playSound).toBeCalledWith('./sounds/numbers/seven.mp3');
        });
    });
});