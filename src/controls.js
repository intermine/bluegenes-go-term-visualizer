import React from 'react';

class FilterPanel extends React.Component {
	render() {
		return (
			<div className="filter-panel-root">
				<h4 className="filter-panel-title">Filter Panel</h4>
				<div className="filter-panel">
					<div className="filter-container">
						<p>Text Correction:</p>
						<select>
							<option value="Holm-Bonferroni">Holm-Bonferroni</option>
							<option value="Benjamini Hochberg">Benjamini Hochberg</option>
							<option value="Bonferroni">Bonferroni</option>
						</select>
					</div>
					<div className="filter-container">
						<p>Max p-value:</p>
						<select>
							<option value={0.05}>0.05</option>
							<option value={0.1}>0.10</option>
							<option value={1.0}>1.00</option>
						</select>
					</div>
					<div className="filter-container">
						<p>Ontology:</p>
						<select>
							<option value="biological_process">biological_process</option>
							<option value="cellular_process">cellular_process</option>
							<option value="molecular_function">molecular_function</option>
						</select>
					</div>
					<div className="filter-container">
						<p>Results length:</p>
						<input type="number" placeholder="Limit Results" />
					</div>
				</div>
				<button className="apply-filters-button">Apply Filters</button>
			</div>
		);
	}
}

export default FilterPanel;
