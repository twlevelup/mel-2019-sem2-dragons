const HomePage = require('./pages/homePage/homePage');
const FourOhFour = require('./pages/404Page/404Page');
const SuccessPage = require('./pages/successPage/successPage');
const failurePage = require('./pages/failurePage/failurePage');
const IdentifyNumberPage = require('./pages/identifyNumberPage/identifyNumberPage');

module.exports = {
	'/': HomePage,
	'404': FourOhFour,
	success: SuccessPage,
	failure: failurePage,
	identifyNumber: IdentifyNumberPage
};
