function getChartData(data) {
	return {
		labels: data.map(d => d.identifier),
		datasets: [
			{
				label: [],
				data: data.map(d => d['p-value']),
				backgroundColor: '#E394A0'
			}
		]
	};
}

export default getChartData;
