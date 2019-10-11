const finalPage = require('./finalPage');

describe('#final', () => {
	it('should render the cat gif', () => {
		const result = new finalPage();
		expect(result.render()).toContain('cutecat1.gif');
	});
});

describe('#final', () => {
	it('should render the star gif', () => {
		const result = new finalPage();
		expect(result.render()).toContain('cutestar.gif');
	});
});

describe('#final', () => {
	it('should render the CONGRATS,KIDDO!', () => {
		const result = new finalPage();
		expect(result.render()).toContain(`<h1>CONGRATS,KIDDO!</h1>`);
	});
});

describe('#final', ()=>{
	it("should take the user to home on face button event", () =>{
		const page = new finalPage();
		spyOn(page, "navigate");
		page.faceButtonEvent();
		expect(page.navigate).toHaveBeenCalledWith('/');
	});
});
