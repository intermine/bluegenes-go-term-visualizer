export default (goTermCode, geneListName) => ({
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
			value: geneListName, // <-- your list name
			code: 'A'
		},
		{
			path: 'Gene.goAnnotation.ontologyTerm.parents.identifier',
			op: 'ONE OF',
			values: [
				goTermCode // <-- GO term clicked
			]
		}
	],
	title: goTermCode // <-- GO term clicked
});
