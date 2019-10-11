const successPage = require('./successPage');
const AudioHub = require('watch-framework').AudioHub;
const StorageHub = require('watch-framework').StorageHub;

describe("#successPage", () => {
	let watchFace;
  	beforeEach(() => {
    	document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    	watchFace = document.getElementById("watch-face");
  	});

	describe('#success', () => {
		it('should render the happy face png', () => {
			const result = new successPage();
			expect(result.render()).toContain(`<img id="successImg" src="../../../images/happy-face.png" height="100">`);
		});
	});

	describe('#success sound', () => {
		it('should play success sound', () => {
			spyOn(AudioHub, 'playSound');
			const page = new successPage();
			page.playSound();
			expect(AudioHub.playSound).toHaveBeenCalledTimes(1);
		});
	});

	describe('#pageDidLoad', () => {
		it('Should Increase Star count', ()=> {
			const page = new successPage();
			StorageHub.setData("stars", 0);
			spyOn(StorageHub, "setData");
			page.pageDidLoad();
			expect(StorageHub.setData).toHaveBeenCalledWith("stars",1);
		});
	});

	describe("facebuttonevent", ()=> {
		it("should take user to final page on five or more stars", () => {
			const page = new successPage();
			StorageHub.setData("stars", 5);
			spyOn(page, "navigate");
			page.faceButtonEvent();
			expect(page.navigate).toHaveBeenCalledWith("final");
		});
	});

	describe("facebuttonevent", ()=> {
		it("should take user to another question on four or less stars", () => {
			const page = new successPage();
			StorageHub.setData("stars", 3);
			spyOn(page, "navigate");
			page.faceButtonEvent();
			expect(page.navigate).toHaveBeenCalledWith("identifyNumber");
		});
	});
});
