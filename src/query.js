import imjs from 'imjs';

function queryData(geneIds, serviceUrl, filterOptions, imjsClient = imjs) {
	const service = new imjsClient.Service({
		root: serviceUrl
	});
	return new Promise((resolve, reject) => {
		service
			.enrichment({
				ids: geneIds,
				widget: 'go_enrichment_for_gene',
				maxp: filterOptions['maxp'],
				filter: filterOptions['processFilter'], // can also be cellular_component or molecular_function
				correction: filterOptions['correction']
			})
			.then(res => {
				if (res.length === 0) reject('No data found!');
				resolve(res);
			})
			.catch(() => reject('No data found!'));
	});
}

export default queryData;
