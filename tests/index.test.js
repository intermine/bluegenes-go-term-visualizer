const main = require('../src').main;
import { ids } from './mockData';

// Example
describe('main', () => {
	test('should throw error when called with wrong signature', () => {
		expect(() => {
			// testing with all falsy values
			main('', 0, null, undefined, []);
		}).toThrowError('Call main with correct signature');
	});

	test('should render something (atleast a loading) when initialised', () => {
		const mockData = {
			el: document.createElement('div'),
			service: { root: 'https://www.humanmine.org/humanmine' },
			state: { testing: true },
			entity: { value: ids },
			config: {}
		};
		expect(() => {
			main(
				mockData.el,
				mockData.service,
				mockData.entity,
				mockData.state,
				mockData.config
			);
			expect(mockData.el.innerHTML).toContain('div');
		});
	});
});
