const finalPage = require('./finalPage');

describe('#final', () => {
	it('should render the cat gif', () => {
		const result = new finalPage();
		expect(result.render()).toContain(`<img id="img" src="../../../images/cutecat1.gif" height="100">`);
	});
});

describe('#final', () => {
	it('should render the star gif', () => {
		const result = new finalPage();
		expect(result.render()).toContain(`<img class="star" src="../../../images/cutestar.gif" height="30">`);
	});
});

describe('#final', () => {
	it('should render the CONGRATS,KIDDO!', () => {
		const result = new finalPage();
		expect(result.render()).toContain(`<h1>CONGRATS,KIDDO!</h1>`);
	});
});
