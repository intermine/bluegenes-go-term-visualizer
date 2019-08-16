import React from 'react';
import Chart from 'chart.js';
import Loading from '../../loading';
import getChartData from './chartData';

class GoTerm_vs_P extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	componentDidUpdate() {
		const { data } = this.props;
		if (!data) return;

		const chartData = getChartData(data);

		setTimeout(() => {
			new Chart(this.chart.current, {
				type: 'bar',
				data: {
					labels: chartData.labels,
					datasets: chartData.datasets
				},
				options: chartData.options
			});
		}, 100);
	}

	shouldComponentUpdate(nextProps) {
		if (this.props.loading !== nextProps.loading) return true;
		if (this.props.data === nextProps.data) return false;
		return true;
	}

	render() {
		const { data, loading } = this.props;
		if (!data || loading) return <Loading />;

		return (
			<div>
				<canvas ref={this.chart} />
			</div>
		);
	}
}

export default GoTerm_vs_P;
