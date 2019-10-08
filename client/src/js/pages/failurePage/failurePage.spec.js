const failurePage = require('./failurePage');
const AudioHub = require('watch-framework').AudioHub;

describe('#failure', () => {
	it('should render the sad-face png', () => {
		const result = new failurePage();
		expect(result.render()).toContain(`<img id="failureImg" src="../../../images/sad-face.png" height="100">`);
	});
});

describe('#failure sound', () => {
	it('should play failure sound', () => {
		spyOn(AudioHub, 'playSound');
		const page = new failurePage();
		page.playSound();
		expect(AudioHub.playSound).toHaveBeenCalledTimes(1);
	});
});
