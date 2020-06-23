import React from 'react';
import queryData from './query';
import Controls from './controls';
import GoTerm_vs_Count from './charts/go_term_vs_count';

class RootContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			error: false,
			filterOptions: {
				// filter object with default values set
				maxp: 0.05,
				processFilter: 'biological_process',
				correction: 'Holm-Bonferroni',
				limitResults: 20
			},
			loading: true
		};

		this.updateFilters = this.updateFilters.bind(this);
		this.queryDataWithFilters = this.queryDataWithFilters.bind(this);
	}

	componentDidMount() {
		this.queryDataWithFilters();
	}

	queryDataWithFilters() {
		this.setState({ loading: true, error: null });
		queryData(
			this.props.entity.value,
			this.props.serviceUrl,
			this.state.filterOptions
		)
			.then(res => {
				this.setState({
					data: res.slice(0, this.state.filterOptions.limitResults),
					loading: false,
					error: null
				});
			})
			.catch(() => {
				this.setState({ error: 'No Enrichment data found!' });
			});
	}

	updateFilters(ev) {
		const { name, value } = ev.target;
		this.setState({
			filterOptions: Object.assign({}, this.state.filterOptions, {
				[name]:
					['maxp', 'limitResults'].indexOf(name) !== -1 ? Number(value) : value
			})
		});
	}

	render() {
		return (
			<div className="rootContainer">
				<Controls
					updateFilters={this.updateFilters}
					filters={this.state.filterOptions}
					onApply={this.queryDataWithFilters}
				/>
				<span className="chart-title">Go Term vs Gene Count</span>
				<GoTerm_vs_Count
					geneIds={this.props.entity.value}
					navigate={this.props.navigate}
					data={this.state.data}
					loading={this.state.loading}
					error={this.state.error}
				/>
			</div>
		);
	}
}

export default RootContainer;
