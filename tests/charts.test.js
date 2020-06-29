import React from 'react';
import ReactDOM from 'react-dom';
import imjs from 'imjs';
import GoTerm_vs_Count from '../src/charts/go_term_vs_count';
import queryData from '../src/query';
import { ids, filterOptions } from './mockData';

describe('charts', () => {
	let data = [];
	beforeAll(() => {
		return queryData(
			ids,
			'https://www.flymine.org/flymine',
			filterOptions,
			imjs
		).then(res => (data = res));
	});

	test('go_term_vs_count renders canvas', () => {
		const el = document.createElement('div');
		ReactDOM.render(<GoTerm_vs_Count data={data} />, el);
		expect(el.innerHTML).toContain('canvas');
	});
});
