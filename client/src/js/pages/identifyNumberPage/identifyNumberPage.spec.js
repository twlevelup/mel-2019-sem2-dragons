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
	describe('#pageDidLoad', () => {
		it('should play the sound of the number', () => {
			spyOn(AudioHub, 'playSound');
			const page = new identifyNumberPage();
			page.pageWillLoad();
			page.pageDidLoad();
			if (page.chosenValue === 'left') {
				expect(AudioHub.playSound).toBeCalledWith(page.soundLeft);
			} else {
				expect(AudioHub.playSound).toBeCalledWith(page.soundRight);
			}
		});
	});

	describe("#topbuttonevent", ()=> {
		it("should play a number sound", ()=> {
			const page = new identifyNumberPage();
			page.pageWillLoad();
			page.pageDidLoad();
			spyOn(AudioHub, 'playSound');
			page.topButtonEvent();
			if (page.chosenValue === 'left') {
				expect(AudioHub.playSound).toBeCalledWith(page.soundLeft);
			} else {
				expect(AudioHub.playSound).toBeCalledWith(page.soundRight);
			}
		});
	});

	describe("#rightbuttonevent", () =>{
		it("should take the user to the success or failure page", () => {
			const page = new identifyNumberPage();
			page.pageWillLoad();
			page.pageDidLoad();
			spyOn(page, "navigate");
			page.rightButtonEvent();
			if (page.chosenValue === 'right') {
				expect(page.navigate).toBeCalledWith("success");
			} else {
				expect(page.navigate).toBeCalledWith("failure");
			}
		});
	});

	describe("#leftbuttonevent", () =>{
		it("should take the user to the success or failure page", () => {
			const page = new identifyNumberPage();
			page.pageWillLoad();
			page.pageDidLoad();
			spyOn(page, "navigate");
			page.leftButtonEvent();
			if (page.chosenValue === 'left') {
				expect(page.navigate).toBeCalledWith("success");
			} else {
				expect(page.navigate).toBeCalledWith("failure");
			}
		});
	});
});
