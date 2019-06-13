import React from 'react';
import queryData from './query';

class RootContainer extends React.Component {
	componentDidMount() {
		queryData(this.props.entity.value, this.props.serviceUrl);
	}

	render() {
		return (
			<div className="rootContainer">
				<h1>Your Data Viz Here</h1>
			</div>
		);
	}
}

export default RootContainer;
