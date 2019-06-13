import React from 'react';
import queryData from './query';
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
		queryData(this.props.entity.value, this.props.serviceUrl).then(res => {
			this.setState({ data: res });
		});
	}

	render() {
		return (
			<div className="rootContainer">
				<GoTerm_vs_P data={this.state.data} />
				<GoTerm_vs_Count data={this.state.data} />
			</div>
		);
	}
}

export default RootContainer;
