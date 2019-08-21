export default goTermCode => ({
	model: {
		name: 'genomic'
	},
	select: [
		'Gene.secondaryIdentifier',
		'Gene.symbol',
		'Gene.primaryIdentifier',
		'Gene.organism.name',
		'Gene.goAnnotation.ontologyTerm.identifier',
		'Gene.goAnnotation.ontologyTerm.name',
		'Gene.goAnnotation.ontologyTerm.parents.identifier',
		'Gene.goAnnotation.ontologyTerm.parents.name'
	],
	where: [
		{
			path: 'Gene',
			op: 'IN',
			code: 'A',
			ids: [
				1007941,
				1009359,
				1010020,
				1069069,
				1085883,
				1092581,
				1103527,
				1117091,
				1126873,
				1128788,
				1141026,
				1172088,
				1177376,
				1194292,
				1234233,
				1243313,
				1245718,
				1259594,
				1264304,
				1284464
			]
		},
		{
			path: 'Gene.goAnnotation.ontologyTerm.parents.identifier',
			op: 'ONE OF',
			values: [goTermCode]
		}
	],
	title: goTermCode
});
