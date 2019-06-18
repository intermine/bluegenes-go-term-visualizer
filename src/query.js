function queryData(listName, serviceUrl, imjsClient = imjs) {
	const service = new imjsClient.Service({
		root: serviceUrl
	});
	return new Promise((resolve, reject) => {
		service
			.enrichment({
				list: listName,
				widget: 'go_enrichment_for_gene',
				maxp: 0.05,
				filter: 'biological_process' // can also be cellular_component or molecular_function
			})
			.then(res => {
				if (res.length === 0) reject('No data found!');
				resolve(res);
			})
			.catch(() => reject('No data found!'));
	});
}

export default queryData;
