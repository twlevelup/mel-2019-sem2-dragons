const BasePage = require('../customBasePage/CustomBasePage');

class FinalPage extends BasePage {
	template = require('./finalPage.hbs');

	faceButtonEvent()
	{
		this.navigate("/");
	}
}

module.exports = FinalPage;
