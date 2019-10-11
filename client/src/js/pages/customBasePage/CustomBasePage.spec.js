const FourOhFourPage = require('../404Page/404Page');
const IdentifyNumberPage = require('../identifyNumberPage/identifyNumberPage');
const SuccessPage = require('../successPage/successPage');
const FailurePage = require('../failurePage/failurePage');
const FinalPage = require('../finalPage/finalPage');

describe('CustomBasePage', () => {
	describe('#bottomButtonEventHold', () => {
		it('should take user to the homepage', () => {
			const props = {
				navigate: () => {}
			};

			var test_pages = [
				new FourOhFourPage(props),
				new IdentifyNumberPage(props),
				new FinalPage(props),
				new SuccessPage(props),
				new FailurePage(props)
			];
			for (var i = 0; i < test_pages.length; i++) {
				var page = test_pages[i];
				spyOn(page, 'navigate');
				page.bottomButtonEventHold();
				expect(page.navigate).toHaveBeenCalledWith('/');
			}
		});
	});
});
