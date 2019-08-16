import { getColors } from '../colors';

function getChartData(data) {
	const axisLabel = text => [
		{
			scaleLabel: {
				display: true,
				labelString: text,
				fontStyle: 'bold',
				fontSize: 16
			}
		}
	];
	return {
		labels: data.map(d => d.identifier),
		datasets: [
			{
				label: [],
				data: data.map(d => d.matches),
				backgroundColor: getColors(0.9, data.length),
				borderColor: getColors(0.3, data.length)
			}
		],
		options: {
			legend: {
				display: false
			},
			scales: {
				yAxes: [
					{
						scaleLabel: {
							display: true,
							labelString: 'Number of Genes',
							fontStyle: 'bold',
							fontSize: 16
						},
						ticks: {
							max: Math.max(...data.map(d => d.matches)) + 1,
							beginAtZero: true
						}
					}
				],
				xAxes: axisLabel('GO Term')
			},
			hover: { animationDuration: 0 },
			animation: {
				onComplete: function() {
					const chartInstance = this.chart;
					const ctx = chartInstance.ctx;

					// ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					const meta = chartInstance.controller.getDatasetMeta(0);
					meta.data.forEach(function(bar, index) {
						ctx.fillText(
							data[index].populationAnnotationCount,
							bar._model.x,
							bar._model.y - 5
						);
					});
				}
			}
		}
	};
}

export default getChartData;
