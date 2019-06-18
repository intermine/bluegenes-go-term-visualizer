import React from 'react';
import ReactDOM from 'react-dom';
import imjs from 'imjs';
import GoTerm_vs_P from '../src/charts/go_term_vs_p';
import GoTerm_vs_Count from '../src/charts/go_term_vs_count';
import queryData from '../src/query';

describe('charts', () => {
	let data = [];
	beforeAll(() => {
		return queryData(
			'PL_obesityMonogen_ORahilly09',
			'http://www.humanmine.org/human',
			imjs
		).then(res => (data = res));
	});

	test('go_term_vs_p renders canvas', () => {
		const el = document.createElement('div');
		ReactDOM.render(<GoTerm_vs_P data={data} />, el);
		expect(el.innerHTML).toContain('canvas');
	});

	test('go_term_vs_count renders canvas', () => {
		const el = document.createElement('div');
		ReactDOM.render(<GoTerm_vs_Count data={data} />, el);
		expect(el.innerHTML).toContain('canvas');
	});
});
