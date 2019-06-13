import { getColors } from '../colors';

function getChartData(data) {
	return {
		labels: data.map(d => d.identifier),
		datasets: [
			{
				label: [],
				data: data.map(d => d['p-value']),
				backgroundColor: getColors(0.9),
				borderColor: getColors(0.3)
			}
		],
		options: {
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
						ctx.fillText(data[index].matches, bar._model.x, bar._model.y - 5);
					});
				}
			}
		}
	};
}

export default getChartData;
