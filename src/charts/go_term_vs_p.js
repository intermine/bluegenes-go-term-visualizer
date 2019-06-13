import React from 'react';

class GoTerm_vs_P extends React.Component {
	componentDidUpdate() {
		// console.log(this.props.data);
	}

	render() {
		const { data } = this.props;
		if (!data) return 'Loading';

		return (
			<div>
				<canvas />
			</div>
		);
	}
}

export default GoTerm_vs_P;
