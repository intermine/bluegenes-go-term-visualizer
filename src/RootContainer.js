import React from 'react';
import queryData from './query';
import Controls from './Controls';
import GoTerm_vs_P from './charts/go_term_vs_p';
import GoTerm_vs_Count from './charts/go_term_vs_count';

class RootContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			error: false
		};
	}

	componentDidMount() {
		queryData(this.props.entity.value, this.props.serviceUrl)
			.then(res => {
				this.setState({ data: res });
			})
			.catch(() => this.setState({ error: 'No Enrichment data found!' }));
	}

	render() {
		if (this.state.error)
			return <div className="rootContainer error">{this.state.error}</div>;

		return (
			<div className="rootContainer">
				<Controls />
				<span className="chart-title">Go Term vs P - value</span>
				<GoTerm_vs_P data={this.state.data} />
				<div className="margin"></div>
				<span className="chart-title">Go Term vs Gene Count</span>
				<GoTerm_vs_Count data={this.state.data} />
			</div>
		);
	}
}

export default RootContainer;
