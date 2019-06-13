import React from 'react';
import Chart from 'chart.js';
import getChartData from './chartData';

class GoTerm_vs_Count extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	componentDidUpdate() {
		const { data } = this.props;
		if (!data) return;

		const chartData = getChartData(data);

		new Chart(this.chart.current, {
			type: 'bar',
			data: {
				labels: chartData.labels,
				datasets: chartData.datasets
			},
			options: chartData.options
		});
	}

	render() {
		const { data } = this.props;
		if (!data) return 'Loading';

		return (
			<div>
				<span className="chart-title">Go Term vs Gene Count</span>
				<canvas ref={this.chart} />
			</div>
		);
	}
}

export default GoTerm_vs_Count;
