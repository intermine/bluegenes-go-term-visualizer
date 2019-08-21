import Chart from 'chart.js';
import { getColors } from '../colors';
import navigationQuery from '../../navigationQuery';

function getChartData(data, blueGenesNavigate) {
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
		labels: data.map(
			d => d.description.slice(0, 17) + (d.description.length > 17 ? '...' : '')
		),
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
							suggestedMax: Math.max(...data.map(d => d.matches)) + 10,
							beginAtZero: true
						}
					}
				],
				xAxes: axisLabel('GO Term')
			},
			tooltips: {
				callbacks: {
					title: function(tooltipItem) {
						return data[tooltipItem[0].index].description;
					},
					label: function(tooltipItem) {
						const item = data[tooltipItem.index];
						const percentage = (
							(item.matches / item.populationAnnotationCount) *
							100
						).toFixed(2);
						return ` ${item.matches} (${percentage}%) : Identifier - ${item.identifier}`;
					}
				}
			},
			onClick: (ev, barElem) => {
				const index = barElem[0]._index;
				const query = navigationQuery(data[index].identifier);
				blueGenesNavigate('query', query);
			},
			hover: { animationDuration: 0 },
			animation: {
				onComplete: function() {
					const chartInstance = this.chart;
					const ctx = chartInstance.ctx;

					ctx.font = Chart.helpers.fontString(
						10,
						Chart.defaults.global.defaultFontStyle,
						Chart.defaults.global.defaultFontFamily
					);
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					const meta = chartInstance.controller.getDatasetMeta(0);
					meta.data.forEach(function(bar, index) {
						const item = data[index];
						const percentage = Math.round(
							(item.matches / item.populationAnnotationCount) * 100
						);
						const topLabel = `${item.matches} (${percentage}%)`;
						ctx.fillText(topLabel, bar._model.x, bar._model.y - 5);
					});
				}
			}
		}
	};
}

export default getChartData;
