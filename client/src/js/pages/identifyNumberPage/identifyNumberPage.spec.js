const identifyNumberPage = require('./identifyNumberPage');
const AudioHub = require('watch-framework').AudioHub;

describe('The identify number Page', () => {
	let watchFace;
	beforeEach(() => {
		document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
		watchFace = document.getElementById('watch-face');
	});

	describe('#render', () => {
		it('should contain numbers', () => {
			const page = new identifyNumberPage();
			page.pageWillLoad();
			expect(page.left).toEqual(expect.any(Number));
			expect(page.right).toEqual(expect.any(Number));
		});
	});
	describe('#pageWilload', () => {
		it('should play the sound of the number', () => {
			spyOn(AudioHub, 'playSound');
			const page = new identifyNumberPage();
			page.pageWillLoad();
			if (page.chosenValue === 'left') {
				expect(AudioHub.playSound).toBeCalledWith(page.soundLeft);
			} else {
				expect(AudioHub.playSound).toBeCalledWith(page.soundRight);
			}
		});
	});
});
