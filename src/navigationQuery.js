export default (goTermCode, geneIds) => ({
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
			path: 'Gene.id',
			op: 'ONE OF',
			values: geneIds, // <-- IDs passed with entity
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
