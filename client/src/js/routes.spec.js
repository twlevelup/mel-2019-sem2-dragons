const routes = require('./routes');

describe('routes', () => {
	it('all routes should exist', () => {
		expect(routes['/']).toBeDefined();
		expect(routes['success']).toBeDefined();
		expect(routes['failure']).toBeDefined();
		expect(routes['404']).toBeDefined();
		expect(routes['identifyNumber']).toBeDefined();
	});
});
