import imjs from 'imjs';
import queryData from '../src/query';
import { ids, filterOptions } from './mockData';

describe('query', () => {
	const mockData = {
		service: 'https://www.flymine.org/flymine',
		entity: { value: ids }
	};

	test('should return a promise resolving with correct data', () => {
		const promise = queryData(
			mockData.entity.value,
			mockData.service,
			filterOptions,
			imjs
		);

		expect(promise).resolves.toBeInstanceOf(Array);
		return promise.then(res => {
			expect(res.length).toBeGreaterThanOrEqual(1);
			expect(res[0].matches).toBeGreaterThanOrEqual(0);
			expect(res[0].identifier).not.toBeFalsy();
			expect(res[0]['p-value']).not.toBeFalsy();
		});
	});

	test('should return a rejected promise when data not available', () => {
		const promise = queryData([-1], mockData.service, filterOptions, imjs);
		return promise.catch(res => expect(res).toBe('No data found!'));
	});
});
