import React from 'react';
import Chart from 'chart.js';
import Loading from '../../loading';
import getChartData from './chartData';

class GoTerm_vs_Count extends React.Component {
	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	componentDidUpdate(prevProps) {
		const { data } = this.props;
		if (data === prevProps.data) return; // don't re-render if data hasn't updated
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
		if (this.props.error !== nextProps.error) return true;
		if (this.props.loading !== nextProps.loading) return true;
		if (this.props.data === nextProps.data) return false;
		return true;
	}

	render() {
		const { data, loading, error } = this.props;
		if (error) return <div className="rootContainer error">{error}</div>;
		if (!data || loading) return <Loading />;

		return (
			<div>
				<canvas ref={this.chart} />
			</div>
		);
	}
}

export default GoTerm_vs_Count;
