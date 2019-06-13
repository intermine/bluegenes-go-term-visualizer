import imjs from 'imjs';
import queryData from '../src/query';

describe('query', () => {
	const mockData = {
		service: 'http://www.humanmine.org/human',
		entity: { value: 'PL_obesityMonogen_ORahilly09' }
	};
	test('should return a promise resolving with correct data', () => {
		const promise = queryData(mockData.entity.value, mockData.service, imjs);

		expect(promise).resolves.toBeInstanceOf(Array);
		return promise.then(res => {
			expect(res.length).toBeGreaterThanOrEqual(1);
			expect(res[0].matches).toBeGreaterThanOrEqual(0);
			expect(res[0].identifier).not.toBeFalsy();
			expect(res[0]['p-value']).not.toBeFalsy();
		});
	});
});
